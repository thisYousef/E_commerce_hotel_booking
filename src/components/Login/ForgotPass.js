import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Button, Stack, TextField } from "@mui/material";
import "./Design.css"
import Swal from "sweetalert2";

const ForgotPass = () => {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
  
    async function onSubmit(data) {
    data.preventDefault();
    
    if (emailRef.current) {
        try {
          setMessage("")
          setError("")
          await resetPassword(emailRef.current.value)
          Swal.fire(
            '',
           'Check your inbox for further instructions',
            'success'
          )  
        } catch (error) {
          setError("Failed to reset password")
        }
      }
  
    }
  
    return ( 
        <section className="forgot">         
            <h2 className="">Password Reset</h2>
            {error && <p className="error">{error}</p>}
            {message && <p>{message}</p>}
            <form onSubmit={onSubmit} noValidate>
            <Stack spacing={2} width={400}>
                  <TextField
                    inputRef={emailRef}
                    label="Email"
                    type="email"
                    required
                  />  
                  <Button type="submit" variant="contained" color="success">
                        <Link to="/sign">Send</Link>
                  </Button>                
            </Stack>
            </form>
            
        <div className="">
          Need an account? <Link to="/register">Sign Up</Link>
        </div>
      </section>
     );
}
 
export default ForgotPass;