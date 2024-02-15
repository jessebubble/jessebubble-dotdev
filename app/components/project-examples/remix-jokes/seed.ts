/* import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()

async function seed() {
    await Promise.all(
        getJokes().map((joke) => {
            return db.joke.create({ data: joke })
        })
    )
}
seed() */

export function getJokes() {
    return [
        {
            question: 'Why do programmers prefer using the dark mode?',
            answer: `Because light attracts bugs.`,
        },
        {
            question: "What's the object-oriented way to become wealthy?",
            answer: `Inheritance.`,
        },
        {
            question: 'Why did the programmer quit his job?',
            answer: `Because he didn't get arrays.`,
        },
        {
            question: 'Why did the programmer jump on the table?',
            answer: `Because debug was on his screen.`,
        },
        {
            question: 'Why was the developer bad at relationships?',
            answer: `Always tried to "commit" too soon.`,
        },
        {
            question: 'Why do Java programmers have to wear glasses?',
            answer: `Because they don't C#.`,
        },
        {
            question: 'Why did the developer go to the gym?',
            answer: `Heard they had great "flex" support.`,
        },
        {
            question: 'Why did the web designer break up with the developer?',
            answer: `They couldn't agree on the right alignment.`,
        },
        {
            question: 'Why was the web designer so good at baseball?',
            answer: `Had a great eye for centering.`,
        },
        {
            question: 'Why did the developer go broke?',
            answer: `Because he used up all his cache.`,
        },
    ];
}
