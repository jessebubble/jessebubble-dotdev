import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { Border } from '~/components/Border';

export function Group() {
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
                                        <fieldset>
                                            <label
                                                style={{
                                                    '--_img':
                                                        'url(https://res.cloudinary.com/jessebubble/image/upload/v1707761503/midjourney/eyes_psco51.png)',
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    name="images"
                                                    value="Fiddle Leaf"
                                                />
                                            </label>
                                            <label
                                                style={{
                                                    '--_img':
                                                        'url(https://res.cloudinary.com/jessebubble/image/upload/v1707761503/midjourney/fashion_g23p4k.png)',
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    name="images"
                                                    value="Pink Princess"
                                                />
                                            </label>
                                            <label
                                                style={{
                                                    '--_img':
                                                        'url(https://res.cloudinary.com/jessebubble/image/upload/v1707761502/midjourney/discover5_ky5gui.png)',
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    name="images"
                                                    value="Monstera"
                                                    checked
                                                />
                                            </label>
                                            <label
                                                style={{
                                                    '--_img':
                                                        'url(https://res.cloudinary.com/jessebubble/image/upload/v1707761502/midjourney/display_ftmsuu.png)',
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    name="images"
                                                    value="Pothos"
                                                />
                                            </label>
                                            <label
                                                style={{
                                                    '--_img':
                                                        'url(https://res.cloudinary.com/jessebubble/image/upload/v1707761502/midjourney/discover4_wmmj11.png)',
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    name="images"
                                                    value="Rubber Tree"
                                                />
                                            </label>
                                        </fieldset>

                                        <style>
                                            {`
                          @import "https://unpkg.com/open-props" layer(design.system);

                          @layer demo {
                            fieldset {
                              grid-template-columns: 
                                var(--col-1, 1fr) 
                                var(--col-2, 1fr) 
                                var(--col-3, 1fr) 
                                var(--col-4, 1fr) 
                                var(--col-5, 1fr)
                              ;
                              
                              @media (prefers-reduced-motion: no-preference) {
                                transition: grid-template-columns 2s var(--ease-spring-5);
                              }
                              
                              &:has(label:nth-child(1) > input:checked) {
                                --col-1: 5fr;
                                --col-2: 3fr;
                              }
                              &:has(label:nth-child(2) > input:checked) {
                                --col-1: 2fr;
                                --col-2: 5fr;
                                --col-3: 2fr;
                              }
                              &:has(label:nth-child(3) > input:checked) {
                                --col-2: 2fr;
                                --col-3: 5fr;
                                --col-4: 2fr;
                              }
                              &:has(label:nth-child(4) > input:checked) {
                                --col-3: 2fr;
                                --col-4: 5fr;
                                --col-5: 2fr;
                              }
                              &:has(label:nth-child(5) > input:checked) {
                                --col-4: 3fr;
                                --col-5: 5fr;
                              }
                              
                              > label {
                                background-image: var(--_img);
                                background-position: center;
                                background-size: auto 125%;
                              }
                            }
                          }
                          
                          @layer demo.support {
                           
                            
                            fieldset {
                              inline-size: 80vw;
                              
                              display: grid;
                              grid-auto-flow: column;
                              grid-template-rows: 50vh;
                              gap: var(--size-3);
                              border: none;
                              
                              > label {
                                cursor: pointer;
                                border-radius: var(--radius-4);
                                
                                &:focus-within {
                                  outline: 1px solid green;
                                  outline-offset: 5px;
                                }
                                
                                > input {
                                  opacity: 0;
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
}
