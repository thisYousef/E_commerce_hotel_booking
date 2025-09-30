import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Design.css";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Stack, TextField, Button } from "@mui/material";
import Swal from 'sweetalert2';
import { AuthProvider, useAuth } from "../../context/AuthContext";
import Background from "./Background";

const Register = () => {
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [formErrors, setFormErrors] = useState(true);
  const [emailError, setEmailError] = useState(""); // New state for email error

  const { signup } = useAuth();
  const navigate = useNavigate();

  const FADE_RIGHT_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { type: "spring" } },
  };

  const form = useForm({
    defaultValues: {
      Username: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
    },
  });

  const { register, handleSubmit, formState, setValue, reset } = form;
  const { errors } = formState;

  // Handle form submission
  const onSubmit = async (data, e) => {
    e.preventDefault();
    const email = e.target.Email.value;
    const password = e.target.Password.value;

    // Clear previous error message
    setEmailError("");

    // Check if passwords match
    if (data.Password !== data.ConfirmPassword) {
      setPasswordsMatch(false);
      return;
    } else {
      setPasswordsMatch(true);
    }

    try {
      // Attempt to sign up the user
      await signup(email, password);

      // On successful registration, navigate to another route and show success message
      navigate("/");
      Swal.fire("Thanks For Registering!", "Your registration has been successful.", "success");

      // Reset form
      reset();
    } catch (error) {
      // Handle Firebase errors
      if (error.code === "auth/email-already-in-use") {
        setEmailError("This email is already in use. Please try logging in.");
      } else {
        setEmailError(error.message); // General error handling
      }
    }
  };

  // Watch for form validation changes
  useEffect(() => {
    if (errors.Username || errors.Email || errors.Password || errors.ConfirmPassword) {
      setFormErrors(true);
    } else {
      setFormErrors(false);
    }
  }, [errors.Username, errors.Email, errors.Password, errors.ConfirmPassword]);

  return (
    <>
      <AuthProvider>
        <section className="forms">
          <div className="flex">
            <Background />
            <motion.div
              className="sign-box"
              initial="hidden"
              animate="show"
              viewport={{ once: true }}
              variants={FADE_RIGHT_ANIMATION_VARIANTS}
            >
              <p>Don't have an account? Create your account, it takes less than a minute.</p>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Stack spacing={2} width={400}>
                  <TextField
                    type="text"
                    label="Username"
                    onChange={(e) => setValue("Username", e.target.value)}
                    id="username"
                    {...register("Username", {
                      required: {
                        value: true,
                        message: "Username required",
                      },
                    })}
                    placeholder="Type your username"
                  />
                  <p className="error">{errors.Username?.message}</p>

                  <TextField
                    type="email"
                    label="Email"
                    id="email"
                    onChange={(e) => setValue("Email", e.target.value)}
                    {...register("Email", {
                      required: "An email address is required",
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Invalid email format",
                      },
                    })}
                    placeholder="Type your email"
                  />
                  <p className="error">{errors.Email?.message}</p>

                  {/* Display Firebase email error if email is already in use */}
                  {emailError && <p className="error">{emailError}</p>}

                  <TextField
                    type="password"
                    label="Password"
                    id="Password"
                    onChange={(e) => setValue("Password", e.target.value)}
                    {...register("Password", {
                      required: "A password is required",
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
                        message: "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number",
                      },
                    })}
                  />
                  <p className="error">{errors.Password?.message}</p>

                  <TextField
                    type="password"
                    label="Confirm Password"
                    id="ConfirmPassword"
                    onChange={(e) => setValue("ConfirmPassword", e.target.value)}
                    {...register("ConfirmPassword", {
                      required: "Confirm password is required",
                    })}
                  />
                  <p className="error">{errors.ConfirmPassword?.message}</p>

                  {!passwordsMatch && <p className="error">Passwords do not match.</p>}

                  <Button type="submit" disabled={formErrors} variant="contained" color="success">
                    Submit
                  </Button>

                  <p>
                    Already have an account? <Link to="/">Log in</Link>
                  </p>
                </Stack>
              </form>
            </motion.div>
          </div>
        </section>
      </AuthProvider>
    </>
  );
};

export default Register;