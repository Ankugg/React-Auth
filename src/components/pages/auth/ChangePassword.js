import React from "react";
import {  TextField, Button, Box, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get("password"),
      confirm_password: data.get("password_confirmation"),
    };

    if (actualData.password && actualData.confirm_password) {
      if (actualData.password === actualData.confirm_password) {
        console.log(actualData);
        document.getElementById("password-reset-form").reset();
        setError({
          status: true,
          msg: "password reset successfully. Redirecting to login page...",
          type: "success",
        });
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        setError({
          status: true,
          msg: "password and confirm password does not match ",
          type: "error",
        });
      }
    } else {
      setError({
        status: true,
        msg: "all fields are required",
        type: "error",
      });
    }
  };
  return (
    <>
      <h1>Reset Password</h1>
      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        id="password-reset-form"
        onSubmit={handleSubmit}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          name="password"
          type="password"
          label="New password"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password_confirmation"
          name="password_confirmation"
          type="password"
          label="New confirm password"
        />
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Update
          </Button>
        </Box>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
      </Box>
    </>
  );
};

export default ChangePassword;
