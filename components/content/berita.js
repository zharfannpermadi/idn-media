import { Box, Grid, Typography, Skeleton } from "@mui/material";
import Image from "next/image";
import styles from "../../styles/Berita.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Berita = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const skeletonArray = Array(4).fill("");

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/berita");
        setNews(response.data.news);
      } catch (error) {
        return error.response;
      }
      setLoading(false);
    };
    fetchNews();
  }, []);

  return (
    <Box className={styles.container}>
      <Grid container spacing={5}>
        {loading
          ? skeletonArray.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Grid container spacing={10}>
                  <Grid item xs={8}>
                    <Skeleton
                      variant="text"
                      animation="wave"
                      className={styles.skeletonText}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Skeleton
                      variant="rounded"
                      animation="wave"
                      className={styles.skeletonImg}
                    />
                  </Grid>
                </Grid>
              </Grid>
            ))
          : news &&
            news.map((item) => (
              <Grid item xs={12} md={6} key={item.id}>
                <Grid container spacing={10}>
                  <Grid item xs={8}>
                    <Typography variant="body2" color="text.secondary">
                      {moment(item.datePosted).format("DD MMM YYYY")},{" "}
                      {moment(item.datePosted).format("hh:mm")}
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: "0.5rem" }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.type}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Image
                      src={item.image}
                      alt="berita"
                      width={100}
                      height={100}
                      style={{ borderRadius: "8px" }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            ))}
      </Grid>
    </Box>
  );
};

export default Berita;
