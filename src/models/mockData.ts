import { HabitOwner, HabitStatus } from "./enums";
import { faker } from '@faker-js/faker';

export const SAMPLE_HABITS = [
    {
        id: 1,
        dueDate: faker.date.past(),
        habit: "Exercise",
        friendAddr: "Cb1hpijH7bBLC8vjtgRcbSxhWvAEDoakQyueyEAr6LZ5",
        wagerAmount: "10",
        wagerToken: "SOL",
        charityAddr: "8jgQ5mwYrzp9H1yyFgmLNdbsBTgiE88XecXDb9GmoQqC",
        status: HabitStatus.Completed,
        owner: HabitOwner.Me,
    },
    {
        id: 2,
        dueDate: faker.date.past(),
        habit: "Walk",
        friendAddr: "Cb1hpijH7bBLC8vjtgRcbSxhWvAEDoakQyueyEAr6LZ5",
        wagerAmount: "10",
        wagerToken: "SOL",
        charityAddr: "8jgQ5mwYrzp9H1yyFgmLNdbsBTgiE88XecXDb9GmoQqC",
        status: HabitStatus.Failed,
        owner: HabitOwner.Me,
    },
    {
        id: 3,
        dueDate: faker.date.future(),
        habit: "Workout",
        status: HabitStatus.InProgress,
        friendAddr: "Cb1hpijH7bBLC8vjtgRcbSxhWvAEDoakQyueyEAr6LZ5",
        wagerAmount: "10",
        wagerToken: "SOL",
        charityAddr: "8jgQ5mwYrzp9H1yyFgmLNdbsBTgiE88XecXDb9GmoQqC",
        owner: HabitOwner.Me,
    },
    {
        id: 4,
        dueDate: faker.date.future(),
        habit: "Swim",
        status: HabitStatus.InProgress,
        friendAddr: "Cb1hpijH7bBLC8vjtgRcbSxhWvAEDoakQyueyEAr6LZ5",
        wagerAmount: "10",
        wagerToken: "SOL",
        charityAddr: "8jgQ5mwYrzp9H1yyFgmLNdbsBTgiE88XecXDb9GmoQqC",
        owner: HabitOwner.Friend,
    }
];