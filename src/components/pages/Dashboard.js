import { Button, CssBaseline, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../services/LocalStorage";
import ChangePassword from "./auth/ChangePassword";
const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeToken('token')
    navigate("/login");
  };
  return (
    <>
      <CssBaseline />
      <Grid container>
        <Grid
          item
          sm={4}
          sx={{ color: "white", backgroundColor: "gray", p: 5 }}
         
        >
             <h1>Dashboard</h1>
          <Typography variant="h5">Email:Ankit@gmail.com</Typography>
          <Typography variant="h6">Name:Ankit</Typography>
          <Button
            variant="contained"
            color="warning"
            size="large"
            sx={{ mt: 8 }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Grid>
        <Grid item sm={6} ml={2}>
          <ChangePassword />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
