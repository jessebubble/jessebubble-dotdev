import { Container } from '~/components/Container';
import { Border } from '~/components/Border';
import { FadeIn } from '~/components/FadeIn';
import clsx from 'clsx';
import { useState } from 'react';
import {
    BoltIcon,
    BugAntIcon,
    CakeIcon,
    RadioIcon,
    RectangleGroupIcon,
    TrophyIcon,
    TruckIcon,
} from '@heroicons/react/24/solid';

export const DragDrop = () => {
    const [items, setItems] = useState([
        {
            id: '1',
            name: (
                <RadioIcon className="h-12 w-12 text-neutral-950 hover:text-centroYellow" />
            ),
        },
        {
            id: '2',
            name: (
                <BoltIcon className="h-12 w-12 text-neutral-950 hover:text-centroYellow" />
            ),
        },
        {
            id: '3',
            name: (
                <CakeIcon className="h-12 w-12 text-neutral-950 hover:text-centroYellow" />
            ),
        },
        {
            id: '4',
            name: (
                <BugAntIcon className="h-12 w-12 text-neutral-950 hover:text-centroYellow" />
            ),
        },
        {
            id: '5',
            name: (
                <TruckIcon className="h-12 w-12 text-neutral-950 hover:text-centroYellow" />
            ),
        },
        {
            id: '6',
            name: (
                <TrophyIcon className="h-12 w-12 text-neutral-950 hover:text-centroYellow" />
            ),
        },
    ]);

    const handleDragStart = (event, index) => {
        event.dataTransfer.setData('text/plain', index);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event, toIndex) => {
        event.preventDefault();
        const fromIndex = event.dataTransfer.getData('text/plain');
        const updatedItems = [...items];
        const [movedItem] = updatedItems.splice(fromIndex, 1);
        updatedItems.splice(toIndex, 0, movedItem);
        setItems(updatedItems);
    };

    return (
        <Container className="">
            <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
                <FadeIn>
                    <article>
                        <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                            <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                                <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                                    <RectangleGroupIcon className="h-12 w-12 flex-none text-neutral-950" />
                                    <h3 className="mt-6 flex items-center text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                                        Making Elements Draggable
                                    </h3>
                                </div>
                                <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                                        Implementing event handlers to control
                                        behavior
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                                <p className="font-display text-4xl font-medium text-neutral-950">
                                    Drag and Drop API
                                </p>
                                <div className="mt-6 space-y-6 text-base text-neutral-600">
                                    <p>
                                        By default, the browser prevents
                                        anything from happening when dropping
                                        something onto most HTML elements. HTML
                                        drag-and-drop uses the DOM event model
                                        and drag events inherited from mouse
                                        events. A typical drag operation begins
                                        when a user selects a draggable element,
                                        continues as the user drags the element
                                        to a droppable element, and ends when
                                        the user releases the dragged element.
                                    </p>
                                </div>
                                <div className="mt-8 flex">
                                    <div className="grid w-full grid-cols-2 place-items-center gap-3 rounded-lg border p-6 md:flex md:items-center md:justify-around md:gap-0">
                                        {items.map((item, index) => (
                                            <div
                                                key={item.id}
                                                draggable
                                                onDragStart={(event) =>
                                                    handleDragStart(
                                                        event,
                                                        index
                                                    )
                                                }
                                                onDragOver={(event) =>
                                                    handleDragOver(event)
                                                }
                                                onDrop={(event) =>
                                                    handleDrop(event, index)
                                                }
                                                className={clsx(
                                                    'flex h-16 w-16 cursor-pointer items-center justify-center rounded-lg',
                                                    'hover:bg-neutral-950',
                                                    'transition-colors duration-300 ease-in-out',
                                                    'focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2',
                                                    'transform hover:scale-110',
                                                    'border border-neutral-950'
                                                )}
                                            >
                                                <span>{item.name}</span>
                                            </div>
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
};
