import type { NextPage } from "next";
import Head from "next/head";
import { HabitsView } from "../views";

const Habits: NextPage = (props) => {
    return (
        <div>
            <Head>
                <title>Sol Habits</title>
                <meta
                    name="description"
                    content="Basic Functionality"
                />
            </Head>
            <HabitsView />
        </div>
    );
};

export default Habits;