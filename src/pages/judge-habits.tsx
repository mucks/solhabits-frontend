import type { NextPage } from "next";
import Head from "next/head";
import { JudgeHabitsView } from "../views";

const JudgeHabits: NextPage = (props) => {
    return (
        <div>
            <Head>
                <title>Judge Habits</title>
                <meta
                    name="description"
                    content="Basic Functionality"
                />
            </Head>
            <JudgeHabitsView />
        </div>
    );
};

export default JudgeHabits;