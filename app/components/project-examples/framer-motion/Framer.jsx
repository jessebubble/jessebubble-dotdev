import { SquaresPlusIcon } from '@heroicons/react/24/solid';
import { Border } from '~/components/Border';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { motion } from 'framer-motion';
import { useState } from 'react';

const tabs = [
    { id: 'the', label: 'The' },
    { id: 'devil', label: 'Devil' },
    { id: 'went', label: 'Went' },
    { id: 'to', label: 'To' },
    { id: 'georgia', label: 'Georgia' },
];

export default function MotionTabs() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                    Check out some mini projects
                </h2>
            </FadeIn>
            <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
                <FadeIn>
                    <article>
                        <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                            <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                                <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                                    <SquaresPlusIcon className="h-12 w-12 flex-none text-neutral-950" />
                                    <h3 className="mt-6 flex items-center text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                                        Animated Tabs
                                    </h3>
                                </div>
                                <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                                        Shared layout animations
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                                <p className="font-display text-4xl font-medium text-neutral-950">
                                    Framer Motion
                                </p>
                                <div className="mt-6 space-y-6 text-base text-neutral-600">
                                    <p>
                                        Easily switch between content tabs and
                                        enjoy mesmerizing blend effects. Watch
                                        as your user interface comes alive with
                                        smooth animations and visually stunning
                                        transitions, leaving a lasting
                                        impression on your users.
                                    </p>
                                </div>
                                <div className="mt-8 flex">
                                    <div className="flex w-full items-center justify-center space-x-1 rounded-lg border bg-neutral-50 p-6">
                                        {tabs.map((tab) => (
                                            <button
                                                key={tab.id}
                                                onClick={() =>
                                                    setActiveTab(tab.id)
                                                }
                                                className={`${
                                                    tab.id === activeTab
                                                        ? ''
                                                        : 'hover:text-neutral-600'
                                                } relative rounded-full px-3 py-1.5 text-base font-medium text-neutral-950 outline-centroBlue transition focus-visible:outline-2`}
                                                style={{
                                                    WebkitTapHighlightColor:
                                                        'transparent',
                                                }}
                                            >
                                                {activeTab === tab.id && (
                                                    <motion.span
                                                        layoutId="bubble"
                                                        className="absolute inset-0 z-10 bg-white mix-blend-difference"
                                                        style={{
                                                            borderRadius: 9999,
                                                        }}
                                                        transition={{
                                                            duration: 0.6,
                                                            bounce: 0.2,
                                                            type: 'spring',
                                                        }}
                                                    />
                                                )}
                                                {tab.label}
                                            </button>
                                        ))}
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
