import { useState } from 'react';
import { getJokes } from './seed';
import { GlobeAltIcon } from '@heroicons/react/24/solid';
import { Border } from '~/components/Border';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';

export default function DevJokes() {
    const [currentJoke, setCurrentJoke] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);

    const getRandomJoke = () => {
        const randomIndex = Math.floor(Math.random() * getJokes().length);
        setCurrentJoke(getJokes()[randomIndex]);
        setShowAnswer(false);
    };

    const revealAnswer = () => {
        if (currentJoke) {
            setShowAnswer(true);
        } else {
            showAnswer(false);
        }
    };

    return (
        <Container className="">
            <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
                <FadeIn>
                    <article>
                        <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                            <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                                <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                                    <GlobeAltIcon className="h-12 w-12 flex-none text-neutral-950" />
                                    <h3 className="mt-6 flex items-center text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                                        Developer Jokes
                                    </h3>
                                </div>
                                <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                                        Working with web standards
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                                <p className="font-display text-4xl font-medium text-neutral-950">
                                    Fetch API
                                </p>
                                <div className="mt-6 space-y-6 text-base text-neutral-600">
                                    <p>
                                        The Fetch API provides a set of objects
                                        and interfaces that allow for flexible
                                        and standardized interaction with
                                        network requests and responses. These
                                        objects help create, send, and process
                                        HTTP requests, as well as handle
                                        corresponding responses
                                    </p>
                                </div>
                                <div className="mt-8 flex">
                                    <div className="flex w-full flex-col items-center justify-center space-x-1 rounded-lg border bg-neutral-50 p-6">
                                        <button
                                            onClick={getRandomJoke}
                                            className="mr-2 rounded-lg border border-neutral-950/10 bg-neutral-950 p-2 font-medium text-white hover:bg-neutral-700"
                                        >
                                            So many jokes to tell &rarr;
                                        </button>
                                        {currentJoke && (
                                            <div className="flex flex-col items-center justify-evenly">
                                                <p className="mt-2 text-base font-semibold text-neutral-950">
                                                    {currentJoke.question}
                                                </p>
                                                {showAnswer && (
                                                    <p className="mt-2 text-base font-semibold text-centroPink">
                                                        {currentJoke.answer}
                                                    </p>
                                                )}
                                                <button
                                                    onClick={revealAnswer}
                                                    className="from-centroPink via-centroYellow to-centroBlue p-2 text-2xl hover:rounded-lg hover:border hover:bg-gradient-to-r"
                                                >
                                                    🤡🤡🤡
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Border>
                    </article>
                </FadeIn>
            </div>
        </Container>
    );
}
