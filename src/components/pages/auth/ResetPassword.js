import { Grid, TextField, Button, Box, Alert } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useResetPasswordMutation } from "../../../services/UserAuthApi";
const ResetPassword = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const [resetPassword] = useResetPasswordMutation();
  const { id, token } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get("password"),
      confirm_password: data.get("password_confirmation"),
    };

    if (actualData.password && actualData.confirm_password) {
      if (actualData.password === actualData.confirm_password) {
        const res = await resetPassword({ actualData, id, token });
        if (res.data.status === "success") {
          setError({
            status: true,
            msg: res.data.message,
            type: "success",
          });
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }
        if (res.data.status === "failed") {
          setError({
            status: true,
            msg: res.data.message,
            type: "error",
          });
        }
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
      <Grid container justifyContent="center">
        <Grid item sm={6} xs={12}>
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
                Save
              </Button>
            </Box>
            {error.status ? (
              <Alert severity={error.type}>{error.msg}</Alert>
            ) : (
              ""
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ResetPassword;
