import { FC } from "react";



export const CreateHabitView: FC = ({ }) => {
    return (
        <div className="md:hero mx-auto p-4">
            <div className="md:hero-content flex flex-col">
                <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8">
                    Create Habit
                </h1>
                {/* CONTENT GOES HERE */}
                <h2> What do you want to improve ? </h2>
                <input type="text" placeholder="Improvement Topic" className="input input-bordered w-full max-w-xs" />
                <h2> Who do you want to check on your habit ? </h2>
                <input type="text" placeholder="Friends wallet" className="input input-bordered w-full max-w-xs" />
                <h2> How much do you want to wager ? </h2>
                <input type="number" placeholder="Wager amount" className="input input-bordered w-full max-w-xs" />
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Select Token</option>
                    <option>Solana</option>
                    <option>Bonk</option>
                    <option>USDT</option>
                </select>

                <h2> Who do you want to donate to in case you don't complete your habit</h2>
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Select Charity</option>
                    <option>Greenpeace</option>
                    <option>Unicef</option>
                    <option>Amnesty</option>
                </select>

                <h2> Until when do you want to complete your habit and get it verified by your friend ?</h2>

                <input type="date" placeholder="Deadline" className="input input-bordered w-full max-w-xs" />


                <button className="btn">Create</button>
            </div>
        </div>
    );
};
