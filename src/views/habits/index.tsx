import { HabitsTable } from "components/habits/HabitsTable";
import { SAMPLE_HABITS } from "models/mockData";
import { HabitOwner, HabitStatus } from "models/enums";
import { FC } from "react";



export const HabitsView: FC = ({ }) => {

    const ongoingHabits = SAMPLE_HABITS.filter((data) => data.status == HabitStatus.InProgress && data.owner == HabitOwner.Me);
    const oldHabits = SAMPLE_HABITS.filter((data) => data.status != HabitStatus.InProgress && data.owner == HabitOwner.Me);

    return (
        <div className="md:hero mx-auto p-4">
            <div className="md:hero-content flex flex-col">
                <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8">
                    Ongoing Habits
                </h1>
                <HabitsTable rows={ongoingHabits} />

                <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8">
                    Old Habits
                </h1>
                <HabitsTable rows={oldHabits} />
            </div>
        </div>
    );

};
