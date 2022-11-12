import { Box, Grid, IconButton, Typography } from "@mui/material";
import styles from "../styles/Navbar.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ShareIcon from "@mui/icons-material/Share";

const Navbar = () => {
  return (
    <Box className={styles.container}>
      <Grid container spacing={2}>
        <Grid item xs={1} />
        <Grid item xs={10} className={styles.item}>
          <IconButton>
            <ArrowBackIosNewIcon />
          </IconButton>
          <Typography variant="h5">IDN Media</Typography>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Box>
  );
};

export default Navbar;
