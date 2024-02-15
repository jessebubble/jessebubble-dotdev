import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { Button } from '~/components/Button';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

export function Snap() {
    const [activeSection, setActiveSection] = useState(0);
    const sections = [
        'section-1',
        'section-2',
        'section-3',
        'section-4',
        'section-5',
        'section-6',
        'section-7',
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition =
                window.scrollY || document.documentElement.scrollTop;
            let currentSection = activeSection;

            // change hue based on scroll position
            const hue = Math.floor(scrollPosition / 100) % 360;
            document.documentElement.style.setProperty('--hue', `${hue}deg`);

            // change active section based on scroll position
            for (let i = 0; i < sections.length; i++) {
                const section = document.getElementById(sections[i]);
                if (section.offsetTop <= scrollPosition + 100) {
                    currentSection = i;
                }
            }

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection, sections]);

    return (
        <div className="mt-24 sm:mt-32 lg:mt-40">
            <Container className="pt-16">
                <FadeIn>
                    <div className="mx-auto max-w-7xl">
                        <h1 className="mb-8 text-center text-4xl font-bold sm:text-5xl lg:text-6xl">
                            Snap Changed Hue Cards
                        </h1>
                        <p className="mb-16 text-center text-lg sm:text-xl lg:text-2xl">
                            Scroll to see the hue change
                        </p>
                        <div className="overflow-x-auto">
                            <div
                                style={{
                                    scrollSnapType: 'x mandatory',
                                    scrollBehavior: 'smooth',
                                }}
                                className="flex"
                            >
                                {sectionsArray.map((section, index) => (
                                    <section
                                        key={section.id}
                                        id={section.id}
                                        className="mx-auto flex"
                                    >
                                        {section.cards.map((card, index) => (
                                            <div
                                                key={index}
                                                style={{
                                                    scrollSnapAlign: 'start',
                                                }}
                                                className={clsx(
                                                    'card w-80 rounded-lg bg-white p-8 shadow-lg sm:w-96 lg:w-96',
                                                    activeSection === index
                                                        ? 'animate-fancy-in'
                                                        : 'opacity-0'
                                                )}
                                            >
                                                <img
                                                    src={card.imgSrc}
                                                    alt=""
                                                    className="h-40 w-full object-contain"
                                                />
                                                <h2 className="text-center text-2xl font-bold text-neutral-950 sm:text-3xl lg:text-4xl">
                                                    {card.title}
                                                </h2>
                                                <p className="text-center text-sm text-neutral-500">
                                                    {card.content}
                                                </p>
                                                <Button
                                                    className="mt-10"
                                                    invert={false}
                                                >
                                                    {card.action}
                                                </Button>
                                            </div>
                                        ))}
                                    </section>
                                ))}
                            </div>
                        </div>
                        <div className="pagination mt-16 flex justify-center">
                            {sectionsArray.map((section, index) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className={`h-4 w-4 rounded-full bg-gray-400 ${activeSection === index ? 'bg-blue-500' : ''}`}
                                ></a>
                            ))}
                        </div>

                        <style>
                            {`
                        @import "https://unpkg.com/open-props" layer(design.system);
                        @import "https://unpkg.com/open-props/normalize.min.css" layer(demo.support);
                        @import "https://unpkg.com/open-props/buttons.min.css" layer(demo.support);
                        
                        /* demo layer contains all the goodies related to this effect */
                        @layer demo.color {
                          /* type safe angle prop for use with SDA */
                          @property --hue {
                            syntax: '<angle>';
                            initial-value: .5turn;
                            inherits: false;
                          }
                        
                          /* will animate from .5turn (i liked the starting hue better here), 
                             to 1.5turn: all full turn */
                          @keyframes hue-cycle { to {
                            --hue: 1.5turn;
                          }}
                          
                          :root {
                            /* dynamic color props, hue powered by scroll */
                            /* with oklch, keep lightness (L) ~60% different between surface and text, for contrast */
                            --surface-1: oklch(30% 50% var(--hue));
                            --surface-2: oklch(40% 40% var(--hue));
                            --text-1: oklch(98% 10% var(--hue));
                            --text-2: oklch(95% 20% var(--hue));
                            --link: oklch(99% 10% var(--hue));
                            --focus: oklch(80% 90% var(--hue));
                            
                            /* fallback for if @property isnt supported */
                            --hue: 275;
                          }
                          
                          /* this section uses those dynamic color props on elements */
                          :focus-visible {
                            outline-color: var(--focus);
                          }
                                                    
                          .pagination > a {
                            background: var(--surface-2);
                          }
                        }
                        
                        @layer demo.scroll-driven-animation {
                          /* scroll snap sections */
                          section {
                            scroll-snap-align: start;
                          }
                          
                          /* pagination dots effect */
                          /* scaled out, until in view, then scale 1 */
                          @keyframes scale { 
                            0%, 100% {
                              scale: .75;
                            }
                            50% {
                              scale: 1;
                              background: var(--text-2);
                            }
                          }
                          
                          /* expose the following view timelines for any elements to observe by name */
                       
                          
                          /* sections observe your inline scroll intersection with the scrollport */
                          section {
                            view-timeline-axis: inline;
                            perspective: 100vw;
                          }
                          
                          /* give each section it's relevant view timeline name */
                          /* note: this must match the name exposed on the body timeline-scope */
                          #section-1 { view-timeline-name: --section-1 }
                          #section-2 { view-timeline-name: --section-2 }
                          #section-3 { view-timeline-name: --section-3 }
                          #section-4 { view-timeline-name: --section-4 }
                          #section-5 { view-timeline-name: --section-5 }
                          #section-6 { view-timeline-name: --section-6 }
                          #section-7 { view-timeline-name: --section-7 }
                          
                          .pagination > a {
                            /* every dot use the scale animation */
                            animation: scale linear both;
                        
                            /* power the scale animation by observing a relevant view timeline */
                            &:nth-child(1) { animation-timeline: --section-1 }
                            &:nth-child(2) { animation-timeline: --section-2 }
                            &:nth-child(3) { animation-timeline: --section-3 }
                            &:nth-child(4) { animation-timeline: --section-4 }
                            &:nth-child(5) { animation-timeline: --section-5 }
                            &:nth-child(6) { animation-timeline: --section-6 }
                            &:nth-child(7) { animation-timeline: --section-7 }
                          }
                          
                          /* card entry/exit animations */
                          @keyframes fancy-in {
                            0% {
                              transform: rotateY(.25turn) translateX(100px) scale(.9);
                              opacity: 0;
                            }
                            20%, 80% {
                              opacity: 1;
                              transform: none;
                            }
                            100% {
                              transform: rotateY(-.25turn) translateX(-100px) scale(.9);
                              opacity: 0;
                            }
                          }
                          
                          .card {
                            /* link animation to inline scrolling */
                            view-timeline-axis: inline;
                            /* for each card, give them a timeline name for observation */
                            view-timeline-name: --card;
                            /* power each cards animation by their own view timeline / scrollport intersection */
                            animation-timeline: --card;
                            /* clamp the animation range to cover */
                            animation-range: cover;
                            
                            @media (prefers-reduced-motion: no-preference) {
                              animation-name: fancy-in;
                            }
                          }
                          
                          /* fade in/out of the next/previous buttons */
                          @keyframes toggle-control {
                            from { opacity: 0 }
                            to   { opacity: 1 }
                          }
                          
                          .controls {
                            & > button {
                              view-timeline-axis: inline;
                              animation-range: exit;
                              
                              /* if browser supports scroll timelines, enable the visibility toggling animation */
                              @supports (animation-timeline: --test) {
                                animation-name: toggle-control;
                                animation-fill-mode: both;
                              }
                              
                              /* fade out the previous button when section 1 is in view */
                              &.previous {
                                animation-timeline: --section-1;
                              }
                              
                              /* fade out the next button when at the last section */
                              &.next {
                                animation-direction: reverse;
                                animation-timeline: --section-6;
                              }
                            }
                          }
                        }
                        
                        @layer demo.support {
                          
                          .pagination {
                            position: fixed;
                            z-index: 1;
                            inset-inline: 0;
                            inset-block-end: var(--size-5);
                            display: flex;
                            place-content: center;
                            gap: var(--size-3);
                            padding: var(--size-3);
                            
                            & > a {
                              display: inline-flex;
                              place-content: center;
                              inline-size: 2ch;
                              flex-shrink: 0;
                              aspect-ratio: var(--ratio-square);
                              border-radius: var(--radius-round);
                              overflow: hidden;
                              text-indent: 100vw;
                              
                              &:is(:hover, :focus-visible) {
                                outline: 1px dashed var(--focus);
                                outline-offset: 2px;
                              }
                              
                              &:visited {
                                background: inherit !important;
                              }
                            }
                          }
                          
                          .controls {
                            position: fixed;
                            z-index: 1;
                            inset-block-start: calc(50% - var(--size-5) / 2);
                            inset-inline: var(--size-3);
                            display: flex;
                            justify-content: space-between;
                          }
                          
                          section {
                            display: grid;
                            place-content: center;
                            grid-template-columns: repeat(auto-fit, minmax(20ch, min(30ch, 25cqi)));
                            gap: var(--size-5);
                            padding: var(--size-5);
                            
                            & > * {
                              display: grid;
                              grid-row: span 4; 
                              grid-template-rows: subgrid; 
                              gap: var(--size-2);
                            }
                          }
                          
                
                            
                            @media (prefers-reduced-motion: no-preference) {
                              transition: transform .5s var(--ease-squish-3);
                              
                              &:is(:hover, :focus-within) {
                                transform: translateY(-10px);
                              }
                            }
                          }
                          
                        }

                        `}
                        </style>
                    </div>
                </FadeIn>
            </Container>
        </div>
    );
}

const sectionsArray = [
    {
        id: 'section-1',
        cards: [
            {
                imgSrc: 'https://assets.codepen.io/2585/Whoa.svg',
                title: 'Lengthy drawn-out tall protracted and extended title',
                content: 'Ironically short amount of content.',
                action: 'Check it out',
            },
            {
                imgSrc: 'https://assets.codepen.io/2585/Walking+Contradiction.svg',
                title: 'Intermediate middling moderate title',
                content:
                    'The words in this example are tolerable, passable and fair, but do draw out a bit.',
                action: 'Some action',
            },
            {
                imgSrc: 'https://assets.codepen.io/2585/Polka+Pup.svg',
                title: "It's.. short",
                content: 'And brief.',
                action: 'Ready',
            },
        ],
    },
    {
        id: 'section-2',
        cards: [
            {
                imgSrc: 'https://assets.codepen.io/2585/Pilot.svg',
                title: 'Lengthy drawn-out tall protracted and extended title',
                content: 'Ironically short amount of content.',
                action: 'Check it out',
            },
            {
                imgSrc: 'https://assets.codepen.io/2585/Cube+Leg.svg',
                title: 'Intermediate middling moderate title',
                content:
                    'The words in this example are tolerable, passable and fair, but do draw out a bit.',
                action: 'Some action',
            },
            {
                imgSrc: 'https://assets.codepen.io/2585/Growth.svg',
                title: "It's.. short",
                content: 'And brief.',
                action: 'Ready',
            },
        ],
    },
    {
        id: 'section-3',
        cards: [
            {
                imgSrc: 'https://assets.codepen.io/2585/Gamestation.svg',
                title: 'Lengthy drawn-out tall protracted and extended title',
                content: 'Ironically short amount of content.',
                action: 'Check it out',
            },
            {
                imgSrc: 'https://assets.codepen.io/2585/Kiddo.svg',
                title: 'Intermediate middling moderate title',
                content:
                    'The words in this example are tolerable, passable and fair, but do draw out a bit.',
                action: 'Some action',
            },
            {
                imgSrc: 'https://assets.codepen.io/2585/Reflecting.svg',
                title: "It's.. short",
                content: 'And brief.',
                action: 'Ready',
            },
        ],
    },
    {
        id: 'section-4',
        cards: [
            {
                imgSrc: 'https://assets.codepen.io/2585/Rogue.svg',
                title: 'Lengthy drawn-out tall protracted and extended title',
                content: 'Ironically short amount of content.',
                action: 'Check it out',
            },
            {
                imgSrc: 'https://assets.codepen.io/2585/Waiting.svg',
                title: 'Intermediate middling moderate title',
                content:
                    'The words in this example are tolerable, passable and fair, but do draw out a bit.',
                action: 'Some action',
            },
            {
                imgSrc: 'https://assets.codepen.io/2585/Runner.svg',
                title: "It's.. short",
                content: 'And brief.',
                action: 'Ready',
            },
        ],
    },
    {
        id: 'section-5',
        cards: [
            {
                imgSrc: 'https://assets.codepen.io/2585/Plants.svg',
                title: 'Lengthy drawn-out tall protracted and extended title',
                content: 'Ironically short amount of content.',
                action: 'Check it out',
            },
            {
                imgSrc: 'https://assets.codepen.io/2585/Coffee.svg',
                title: 'Intermediate middling moderate title',
                content:
                    'The words in this example are tolerable, passable and fair, but do draw out a bit.',
                action: 'Some action',
            },
            {
                imgSrc: 'https://assets.codepen.io/2585/Chaotic+Good.svg',
                title: "It's.. short",
                content: 'And brief.',
                action: 'Ready',
            },
        ],
    },
    {
        id: 'section-6',
        cards: [
            {
                imgSrc: 'https://assets.codepen.io/2585/Jumping.svg',
                title: 'Lengthy drawn-out tall protracted and extended title',
                content: 'Ironically short amount of content.',
                action: 'Check it out',
            },
            {
                imgSrc: 'https://assets.codepen.io/2585/Whoa.svg',
                title: 'Intermediate middling moderate title',
                content:
                    'The words in this example are tolerable, passable and fair, but do draw out a bit.',
                action: 'Some action',
            },
            {
                imgSrc: 'https://assets.codepen.io/2585/Pacheco.svg',
                title: "It's.. short",
                content: 'And brief.',
                action: 'Ready',
            },
        ],
    },
    {
        id: 'section-7',
        cards: [
            {
                imgSrc: 'https://assets.codepen.io/2585/Meela+Pantalones.svg',
                title: 'Lengthy drawn-out tall protracted and extended title',
                content: 'Ironically short amount of content.',
                action: 'Check it out',
            },
            {
                imgSrc: 'https://assets.codepen.io/2585/Groceries.svg',
                title: 'Intermediate middling moderate title',
                content:
                    'The words in this example are tolerable, passable and fair, but do draw out a bit.',
                action: 'Some action',
            },
            {
                imgSrc: 'https://assets.codepen.io/2585/Fling.svg',
                title: "It's.. short",
                content: 'And brief.',
                action: 'Ready',
            },
        ],
    },
];
