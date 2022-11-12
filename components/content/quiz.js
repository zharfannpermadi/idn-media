import {
  Box,
  Grid,
  Typography,
  IconButton,
  Stack,
  Skeleton,
} from "@mui/material";
import Image from "next/image";
import styles from "../../styles/Quiz.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Quiz = () => {
  const [quiz, setQuiz] = useState([]);
  const [loading, setLoading] = useState(false);
  const skeletonArray = Array(3).fill("");

  useEffect(() => {
    const fetchQuiz = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/quiz");
        setQuiz(response.data.quiz);
      } catch (error) {
        return error.response;
      }
      setLoading(false);
    };
    fetchQuiz();
  }, []);

  return (
    <Box className={styles.container}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 20, md: 5 }}>
        {loading
          ? skeletonArray.map((item, index) => (
              <Grid
                item
                md={4}
                xs={6}
                className={styles.imageContainer}
                key={index}
              >
                <Stack spacing={1}>
                  <Skeleton
                    variant="rounded"
                    animation="wave"
                    className={styles.skeletonImg}
                  />
                  <Skeleton
                    variant="text"
                    animation="wave"
                    className={styles.skeletonText}
                  />
                </Stack>
              </Grid>
            ))
          : quiz &&
            quiz.map((item) => (
              <Grid
                item
                md={4}
                xs={6}
                className={styles.imageContainer}
                key={item.id}
              >
                <Stack spacing={1}>
                  <Image
                    src={item.image}
                    alt="quiz"
                    className={styles.image}
                    width={300}
                    height={300}
                    style={{ borderRadius: "8px" }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {item.type}
                  </Typography>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.plays} plays
                  </Typography>
                </Stack>
              </Grid>
            ))}
      </Grid>
    </Box>
  );
};

export default Quiz;
