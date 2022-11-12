import {
  Box,
  Grid,
  Typography,
  IconButton,
  Stack,
  Chip,
  Skeleton,
} from "@mui/material";
import Image from "next/image";
import styles from "../../styles/Livestream.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Livestream = () => {
  const [live, setLive] = useState([]);
  const [loading, setLoading] = useState(false);
  const skeletonArray = Array(6).fill("");

  useEffect(() => {
    const fetchLive = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/livestream");
        setLive(response.data.live);
      } catch (error) {
        return error.response;
      }
      setLoading(false);
    };
    fetchLive();
  }, []);

  return (
    <Box className={styles.container}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 10, md: 5 }}>
        {loading
          ? skeletonArray.map((item, index) => (
              <Grid item xs={6} md={2} key={index}>
                <Box className={styles.mainCard}>
                  <Skeleton
                    variant="rounded"
                    animation="wave"
                    width={115}
                    height={230}
                  />
                </Box>
              </Grid>
            ))
          : live &&
            live.map((item) => (
              <Grid item xs={6} md={2} key={item.id}>
                <Box
                  className={styles.mainCard}
                  sx={{
                    backgroundImage: `linear-gradient(rgba(18,4,33,0.5), rgba(18,4,33,0.5)), url(${item.image})`,
                  }}
                >
                  <Chip className={styles.chip} label={item.subtitle} />
                  <Box className={styles.content}>
                    <Typography variant="body1">{item.title}</Typography>
                    <Typography variant="body2">{item.type}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
      </Grid>
    </Box>
  );
};

export default Livestream;
