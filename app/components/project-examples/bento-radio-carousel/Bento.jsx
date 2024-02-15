import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { Border } from '~/components/Border';

import { useRef } from 'react';

export const Bento = () => {
    const radioRef = useRef(null);

    const handleRadioClick = (e) => {
        if (!document.startViewTransition) return;

        e.preventDefault();

        document.startViewTransition(() => {
            e.target.checked = true;
        });
    };

    return (
        <Container className="">
            <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
                <FadeIn>
                    <article>
                        <Border className="grid grid-cols-2 gap-x-8 gap-y-8 pt-16">
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
                                <div className="mt-8 flex">
                                    <div className="grid place-items-center">
                                        <fieldset
                                            id="radiento"
                                            className="bento"
                                        >
                                            <div>
                                                <input
                                                    type="radio"
                                                    id="huey"
                                                    name="drone"
                                                    value="huey"
                                                    checked
                                                    ref={radioRef}
                                                    onClick={handleRadioClick}
                                                />
                                                <label for="huey">Huey</label>
                                            </div>

                                            <div>
                                                <input
                                                    type="radio"
                                                    id="dewey"
                                                    name="drone"
                                                    value="dewey"
                                                    onClick={handleRadioClick}
                                                />
                                                <label for="dewey">Dewey</label>
                                            </div>

                                            <div>
                                                <input
                                                    type="radio"
                                                    id="louie"
                                                    name="drone"
                                                    value="louie"
                                                    onClick={handleRadioClick}
                                                />
                                                <label for="louie">Louie</label>
                                            </div>
                                        </fieldset>
                                        <style>
                                            {`
                                    @import "https://unpkg.com/open-props" layer(design.system);
                                    @import "https://unpkg.com/open-props/normalize.min.css" layer(demo.support);

                                    
                                    ::view-transition-group(*) {
                                      animation-timing-function: var(--ease-squish-1);
                                      animation-timing-function: var(--ease-spring-2);
                                      animation-duration: .75s;
                                    }
                                    
                                    /* fixex ghosting at the bottom */
                                    ::view-transition-old(opt-1),
                                    ::view-transition-old(opt-2),
                                    ::view-transition-old(opt-3),
                                    ::view-transition-new(opt-1),
                                    ::view-transition-new(opt-2),
                                    ::view-transition-new(opt-3) {
                                      height: 100%;
                                    }
                                    
                                    @layer demo {
                                      .bento {
                                        display: grid;
                                        grid-template-columns: 2fr 1fr;
                                        grid-template-rows: 1fr 1fr;
                                        gap: var(--size-3);
                                        
                                        min-inline-size: 75vw;
                                        aspect-ratio: var(--ratio-widescreen);
                                        
                                        & > * {
                                          border-radius: var(--radius-3);
                                          background: var(--surface-2);
                                          
                                          @media (prefers-reduced-motion: no-preference) {
                                            &:nth-child(1) {
                                              view-transition-name: opt-1;
                                              & > label {
                                                view-transition-name: opt-1-label;
                                              }
                                              & > input {
                                                view-transition-name: opt-1-input;
                                              }
                                            }
                                            &:nth-child(2) {
                                              view-transition-name: opt-2;
                                              & > label {
                                                view-transition-name: opt-2-label;
                                              }
                                              & > input {
                                                view-transition-name: opt-2-input;
                                              }
                                            }
                                            &:nth-child(3) {
                                              view-transition-name: opt-3;
                                              & > label {
                                                view-transition-name: opt-3-label;
                                              }
                                              & > input {
                                                view-transition-name: opt-3-input;
                                              }
                                            }
                                    
                                            & :is(label, input) {
                                              width: fit-content;
                                            }
                                          }
                                        }
                                        
                                        & > div:has(input:checked) {
                                          grid-row: 1 / -1;
                                          grid-column: 1;
                                        }
                                      }
                                    }
                                    
                                    @layer demo.support {
                                      
                                      fieldset {
                                        border: none;
                                        
                                        > div {
                                          display: grid;
                                          grid: 1fr / 1fr;
                                          padding: var(--size-3);
                                    
                                          & > label {
                                            grid-area: 1 / 1;
                                          }
                                        }
                                      }
                                    }
                                    `}
                                        </style>
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
