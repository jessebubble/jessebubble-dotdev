import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { Border } from '~/components/Border';
import { useState } from 'react';

export function Compare() {
    const [position, setPosition] = useState(50);

    const handleRangeChange = (event) => {
        setPosition(event.target.value);
    };

    return (
        <Container className="">
            <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
                <FadeIn>
                    <article>
                        <Border className="grid gap-x-8 gap-y-8 pt-16">
                            <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                                <p className="font-display text-4xl font-medium text-neutral-950">
                                    Variables and Keyframe Animations
                                </p>
                                <div className="mt-6 space-y-6 text-base text-neutral-600">
                                    <p>
                                        This is a fun little project that I made
                                        to experiment with CSS variables and
                                        keyframe animations. The colors are
                                        defined in the CSS using the LCH color
                                        space, and the position of the gradients
                                        are controlled by the range input. The
                                        gradients are animated using keyframes
                                        to create a swirling effect
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <div className="compare">
                                        <section
                                            className="grid place-content-center rounded-bl-3xl rounded-tl-3xl bg-gradient-to-r from-pink-500 to-purple-500"
                                            style={{
                                                mask: `linear-gradient(to right, #000 0, ${position}%, #0000 0)`,
                                            }}
                                        >
                                            <img
                                                src="https://assets.codepen.io/2585/Pondering.svg"
                                                alt=""
                                            />
                                        </section>
                                        <section
                                            className="grid place-content-center rounded-br-3xl rounded-tr-3xl bg-gradient-to-r from-cyan-500 to-lime-500"
                                            style={{
                                                mask: `linear-gradient(to right, #0000 0, ${position}%, #000 0)`,
                                            }}
                                        >
                                            <img
                                                src="https://assets.codepen.io/2585/Walking+Contradiction.svg"
                                                alt=""
                                            />
                                        </section>
                                        <input
                                            type="range"
                                            id="range"
                                            step="0.1"
                                            onChange={handleRangeChange}
                                            className="z-10 cursor-pointer"
                                        />
                                    </div>

                                    <style>
                                        {`
                                    @layer demo {
                                        .compare {
                                          display: grid;
                                          
                                          > * {
                                            grid-area: 1 / 1;
                                          }
                                          
                                          > section {
                                            display: grid;
                                            place-content: center;
                                          }
                                          
                                          .before {
                                            background: linear-gradient(to right, hotpink, rebeccapurple);
                                            mask: linear-gradient(to right, #000 0, var(--pos, 50%), #0000 0);
                                          }
                                          
                                          .after {
                                            background: linear-gradient(to right, cyan, lime);
                                            mask: linear-gradient(to right, #0000 0, var(--pos, 50%), #000 0);
                                          }
                                          
                                          > input[type="range"] {
                                            z-index: 1;
                                            appearance: none;
                                            background: none;
                                            cursor: pointer;
                                            -webkit-tap-highlight-color: transparent;
                                            
                                            &::-webkit-slider-thumb {
                                              appearance: none;
                                              width: 4px;
                                              height: 100dvh;
                                              background-color: CanvasText;
                                            }
                                            
                                            &::-moz-range-thumb {
                                              appearance: none;
                                              width: 4px;
                                              height: 100dvh;
                                              background-color: CanvasText;
                                            }
                                          }
                                          
                                          & img {
                                            max-inline-size: 100%;
                                            max-block-size: 80dvh;
                                          }
                                        }
                                      }
                                      
                                      @layer demo.support {
                                    `}
                                    </style>
                                </div>
                            </div>
                        </Border>
                    </article>
                </FadeIn>
            </div>
        </Container>
    );
}
