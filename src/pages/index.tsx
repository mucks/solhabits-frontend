import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>SolHabits</title>
        <meta
          name="description"
          content="SolHabits - A Solana based habit tracker."
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
