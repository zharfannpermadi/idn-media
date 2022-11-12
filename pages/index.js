import Head from "next/head";
import Tab from "../components/content/tab";
import DetailProfile from "../components/detail-profile";
import styles from "../styles/Home.module.css";
import axios from "axios";

export async function getServerSideProps() {
  const res = await axios.get(`${process.env.BASE_URL}/api/profile`);
  const data = res.data;

  return { props: { data } };
}

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>IDN Media</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DetailProfile data={data} />
      <Tab />
    </div>
  );
}
