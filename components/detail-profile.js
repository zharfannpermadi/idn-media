import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import styles from "../styles/Profile.module.css";

const DetailProfile = ({ data }) => {
  return (
    <>
      <Box className={styles.container}>
        <Grid container spacing={2}>
          <Grid item md={1} />
          <Grid item xs={2} md={3} className={styles.imageContainer}>
            <Image
              src={data.profile.image}
              alt="xhaka"
              className={styles.image}
              width={150}
              height={150}
              style={{ borderRadius: "50%" }}
            />
          </Grid>
          <Grid item xs={8} md={7}>
            <Stack spacing={2}>
              <Stack>
                <Typography variant="subtitle2" color="text.secondary">
                  Verified Creator
                </Typography>
                <Typography variant="h6">{data.profile.name}</Typography>
              </Stack>
              <Stack direction="row" spacing={10}>
                <Stack>
                  <Typography variant="subtitle2" color="text.secondary">
                    Following
                  </Typography>
                  <Typography variant="h6">{data.profile.following}</Typography>
                </Stack>
                <Stack>
                  <Typography variant="subtitle2" color="text.secondary">
                    Followers
                  </Typography>
                  <Typography variant="h6">{data.profile.followers}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={1} />
        </Grid>
      </Box>
      <Box className={styles.contentDescription}>
        <Grid container spacing={2}>
          <Grid item md={4} />
          <Grid item xs={12} md={7}>
            <Stack spacing={2}>
              <Stack>
                <Typography variant="subtitle1">
                  {data.profile.description}
                </Typography>
              </Stack>
              <Stack>
                <Button variant="contained" fullWidth className={styles.button}>
                  Follow
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={1} />
        </Grid>
      </Box>
    </>
  );
};

export default DetailProfile;
