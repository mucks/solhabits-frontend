import type { NextPage } from "next";
import Head from "next/head";
import { CreateHabitView } from "views/create-habit";

const Habits: NextPage = (props) => {
    return (
        <div>
            <Head>
                <title>Create Sol Habit</title>
                <meta
                    name="description"
                    content="Basic Functionality"
                />
            </Head>
            <CreateHabitView />
        </div>
    );
};

export default Habits;