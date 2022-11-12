import { useState } from "react";
import { Box, Stack, Chip, Grid } from "@mui/material";
import styles from "../../styles/Tab.module.css";
import Berita from "./berita";
import Livestream from "./livestream";
import Quiz from "./quiz";

const Tab = () => {
  const tabs = ["Berita", "Livestream", "Quiz"];
  const [selected, setSelected] = useState("Berita");

  const handleClick = (clicked) => {
    setSelected(clicked);
  };

  return (
    <>
      <Box className={styles.container}>
        <Stack direction="row" spacing={2}>
          {tabs.map((name, index) => (
            <Chip
              key={index}
              label={name}
              onClick={() => handleClick(name)}
              style={{
                fontWeight: selected === name && "700",
                color: selected === name && "#ED2227",
                backgroundColor: selected === name && "#FBD2D4",
              }}
              className={styles.chip}
              variant={selected === name ? "contained" : "outlined"}
            />
          ))}
        </Stack>
      </Box>
      <Grid container>
        <Grid item md={1} />
        <Grid item xs={10}>
          {selected === "Berita" && <Berita />}
          {selected === "Livestream" && <Livestream />}
          {selected === "Quiz" && <Quiz />}
        </Grid>
        <Grid item md={1} />
      </Grid>
    </>
  );
};

export default Tab;
