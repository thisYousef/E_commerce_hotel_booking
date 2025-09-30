import { motion } from "framer-motion";
import { signInWithGoogle, signInWithGitHub } from './../../firebase';
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext"
import { TextField, Button, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import "./Design.css"
import Background from "./Background";

const Login = () => {
  const [error, setError] = useState(null)
  const [, setUser] = useState(null);
  const { login } = useAuth()
  const Navigate = useNavigate()
  const FADE_RIGHT_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { type: "spring" } },
  };
  const {handleSubmit, register, formState: { errors }} = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleSignInByGoogle = async () => {
    try {
      const result = await signInWithGoogle();
      if (result && result.user) {
        setUser(result.user);
        setError(null);
        Navigate("/home"); 
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const handleSignInByGithub = async () => {
    try {
      const result = await signInWithGitHub();
      if (result && result.user) {
        setUser(result.user);
        setError(null);
        console.log("GitHub sign-in successful:", result.user);
        Navigate("/home"); 
      }
    } catch (error) {
      console.error("GitHub sign-in error:", error);
      setError(error.message);
    }
  };

  const onSubmit = async(data) => {
    const { email, password } = data;
    try {
      await login(email, password);
      setError(null)
      Navigate("/home");
    } catch {
      setError("Incorrect username or password.")
    }
  };
  return (
    <>
      <section className='forms'>
        <div className='flex'>
          <Background/>
          <motion.div className='sign-box'
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          variants={FADE_RIGHT_ANIMATION_VARIANTS}>
            <p>Enter your e-mail and password below to log in to your account and use the benefits of our website.</p>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Stack spacing={2} width={400}>
                {error && <Typography color="error">{error}</Typography>}
                  <TextField
                    label="Email"
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    error={!!errors.email}
                  />
                  <p className="error">{errors.email?.message}</p>
                  <TextField type="password"
                 label="Password" 
                 id="password" {...register("password", {required: "password is required" })} 
                  error={!!errors.password}
                    />
                    <p className="error">{errors.password?.message} </p>
                    <p className="forgot"> Forgot Password? <Link to='/forgot'>Reset it</Link></p>
                  <Button type="submit" disabled={!!errors.email || !!errors.password} variant="contained" color="success">
                    Login
                  </Button>
                  {/* {user ? (
                      <div>
                        <p>Welcome, {user.displayName}</p>
                      </div>
                    ) : (
                      <button onClick={handleSignIn} variant="contained" color="primary">Sign in with Google</button>
                    )} */}
                </Stack>
                 
            </form>
            <section className="container sign-in-methods">
                <div className="lines">
                    <p class="line"></p>
                    <p class="or-text">OR</p>
                    <p class="line"></p>
                </div>
                <button type="button" onClick={handleSignInByGoogle} className="btn-google">
                  <img src="https://developers.google.com/identity/images/g-logo.png"alt="Google logo" className="google-logo" />
                  Sign in with Google
                </button>
                <button type="button" onClick={handleSignInByGithub} className="btn-github">
                  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub logo" className="github-logo" />
                  Sign in with GitHub
                </button>
                <p> Don't have account? <Link to='/register'>Signup!</Link></p>
            </section>
            
          </motion.div>
        </div>
      </section>
    </>
  )
}
export default Login