import { Container } from '~/components/Container';
import { Border } from '~/components/Border';
import { FadeIn } from '~/components/FadeIn';
import { TableCellsIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import * as Tone from 'tone';

const Drum = ({ label, synth, trigger }) => {
    const handlePlay = () => {
        synth.triggerAttackRelease(trigger, '8n');
    };

    return (
        <button
            onClick={handlePlay}
            className={clsx(
                'flex h-20 w-20 items-center justify-center rounded-lg border border-neutral-300 hover:border-neutral-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2',
                'transition-colors duration-200 ease-in-out',
                'hover:bg-neutral-50 focus-visible:bg-neutral-50',
                'focus-visible:ring-offset-neutral-10 active:bg-centroBlue'
            )}
        >
            <span className="sr-only">{label}</span>
        </button>
    );
};

export const DrumMachine = () => {
    const drumPads = [
        { label: 'Kick', trigger: 'C2' },
        { label: 'Snare', trigger: 'D2' },
        { label: 'Hi-Hat', trigger: 'E2' },
        { label: 'Kick', trigger: 'F2' },
        { label: 'Snare', trigger: 'G2' },
        { label: 'Hi-Hat', trigger: 'A2' },
        { label: 'Kick', trigger: 'B2' },
        { label: 'Snare', trigger: 'C3' },
        { label: 'Hi-Hat', trigger: 'D3' },
        { label: 'Kick', trigger: 'E3' },
        { label: 'Snare', trigger: 'F3' },
        { label: 'Hi-Hat', trigger: 'G3' },
        { label: 'Kick', trigger: 'A3' },
        { label: 'Snare', trigger: 'B3' },
        { label: 'Hi-Hat', trigger: 'C4' },
        { label: 'Kick', trigger: 'D4' },
    ];

    const synth = new Tone.Synth().toDestination();

    return (
        <Container className="">
            <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
                <FadeIn>
                    <article>
                        <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                            <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                                <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                                    <TableCellsIcon className="h-12 w-12 flex-none text-neutral-950" />
                                    <h3 className="mt-6 flex items-center text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                                        Drum Machine
                                    </h3>
                                </div>
                                <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                                        Bringing sound to the browser
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                                <p className="font-display text-4xl font-medium text-neutral-950">
                                    Tone.js and the Web Audio API
                                </p>
                                <div className="mt-6 space-y-6 text-base text-neutral-600">
                                    <p>
                                        The Web Audio API is a native browser
                                        API that serves as the foundation for
                                        audio programming in web applications,
                                        offering low-level control over audio
                                        signals. On the other hand, Tone.js is a
                                        library that sits on top of the Web
                                        Audio API, providing higher-level
                                        abstractions, a more intuitive API, and
                                        additional features to simplify audio
                                        programming and creative applications
                                    </p>
                                </div>
                                <div className="mt-8 flex">
                                    <div className="bg-cosa-white flex w-full items-center justify-evenly rounded-lg border p-6">
                                        <div className="grid grid-cols-4 gap-x-1 gap-y-1">
                                            {drumPads.map((pad, index) => (
                                                <Drum
                                                    key={index}
                                                    label={pad.label}
                                                    synth={synth}
                                                    trigger={pad.trigger}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Border>
                    </article>
                </FadeIn>
            </div>
        </Container>
    );
};
