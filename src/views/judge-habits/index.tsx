import { HabitsTable } from "components/habits/HabitsTable";
import { SAMPLE_HABITS } from "models/mockData";
import { HabitOwner, HabitStatus } from "models/enums";
import { FC } from "react";

export const JudgeHabitsView: FC = ({ }) => {

    const judgeHabits = SAMPLE_HABITS.filter((data) => data.owner == HabitOwner.Friend && data.status == HabitStatus.InProgress);

    return (
        <div className="md:hero mx-auto p-4">
            <div className="md:hero-content flex flex-col">
                <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8">
                    Judge Habits
                </h1>
                <HabitsTable rows={judgeHabits} />
            </div>
        </div>
    );

};
