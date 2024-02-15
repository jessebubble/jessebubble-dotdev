import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { Border } from '~/components/Border';
import { useState } from 'react';
import { RectangleGroupIcon } from '@heroicons/react/24/solid';

export const RadialSwirl = () => {
    const [leverValue, setLeverValue] = useState(50);

    const handleLever = (event) => {
        const lever = document.getElementById('lever');
        const demo = document.getElementById('demo');
        demo.style.setProperty('--gradient-size', lever.value + 'vmin');
        setLeverValue(event.target.value);
    };

    return (
        <Container className="">
            <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
                <FadeIn>
                    <article>
                        <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
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
                                    <div className="grid grid-cols-2 place-items-center md:flex md:flex-col md:items-center md:justify-around md:gap-0">
                                        <div
                                            id="demo"
                                            className="demo mt-6"
                                        ></div>
                                        <input
                                            id="lever"
                                            type="range"
                                            value={leverValue}
                                            onInput={handleLever}
                                            className="mt-6"
                                        />

                                        <style>
                                            {`
                                  @import "https://unpkg.com/open-props/easings.min.css";

                                  @layer demo {
                                    @property --color1POSx {
                                      inherits: false;
                                      syntax: "<percentage>";
                                      initial-value: 0%;
                                    }
                                    
                                    @property --color1POSy {
                                      inherits: false;
                                      syntax: "<percentage>";
                                      initial-value: 0%;
                                    }
                                    
                                    @property --color2POSx {
                                      inherits: false;
                                      syntax: "<percentage>";
                                      initial-value: 100%;
                                    }
                                    
                                    @property --color2POSy {
                                      inherits: false;
                                      syntax: "<percentage>";
                                      initial-value: 0%;
                                    }
                                    
                                    @property --color3POSx {
                                      inherits: false;
                                      syntax: "<percentage>";
                                      initial-value: 100%;
                                    }
                                    
                                    @property --color3POSy {
                                      inherits: false;
                                      syntax: "<percentage>";
                                      initial-value: 100%;
                                    }
                                    
                                    @property --color4POSx {
                                      inherits: false;
                                      syntax: "<percentage>";
                                      initial-value: 0%;
                                    }
                                    
                                    @property --color4POSy {
                                      inherits: false;
                                      syntax: "<percentage>";
                                      initial-value: 100%;
                                    }
                                    
                                    @keyframes --up-n-down-1 {
                                      0%, 75%, 100% { --color1POSy: 0% }
                                      25%, 50%      { --color1POSy: 100% }
                                    }
                                    
                                    @keyframes --side-to-side-1 {
                                      0%, 75%, 100% { --color1POSx: 0% }
                                      25%, 50%      { --color1POSx: 100% }
                                    }
                                    
                                    @keyframes --side-to-side-2 {
                                      0%, 75%, 100% { --color2POSx: 100% }
                                      25%, 50%      { --color2POSx: 0% }
                                    }
                                    
                                    @keyframes --up-n-down-2 {
                                      0%, 75%, 100% { --color2POSy: 0% }
                                      25%, 50%      { --color2POSy: 100% }
                                    }
                                    
                                    @keyframes --side-to-side-3 {
                                      0%, 75%, 100% { --color3POSx: 100% }
                                      25%, 50%      { --color3POSx: 0% }
                                    }
                                    
                                    @keyframes --up-n-down-3 {
                                      0%, 75%, 100% { --color3POSy: 100% }
                                      25%, 50%      { --color3POSy: 0% }
                                    }
                                    
                                    @keyframes --side-to-side-4 {
                                      0%, 75%, 100% { --color4POSx: 0% }
                                      25%, 50%      { --color4POSx: 100% }
                                    }
                                    
                                    @keyframes --up-n-down-4 {
                                      0%, 75%, 100% { --color4POSy: 100% }
                                      25%, 50%      { --color4POSy: 0% }
                                    }
                                    
                                    .demo {
                                      --color1LCH: 70% .5 150;
                                      --color2LCH: 70% .5 330;
                                      --color3LCH: 70% .5 270;
                                      --color4LCH: 70% .5 100;
                                      
                                      --gradient-size: 50vmin;
                                      --space:;
                                      
                                      background-image: 
                                        radial-gradient(
                                          var(--gradient-size) circle at var(--color1POSx) var(--color1POSy) var(--space), 
                                          oklch(var(--color1LCH)), oklch(var(--color1LCH) / 0%)
                                        ),
                                        radial-gradient(
                                          var(--gradient-size) circle at var(--color2POSx) var(--color2POSy) var(--space), 
                                          oklch(var(--color2LCH)), oklch(var(--color2LCH) / 0%)
                                        ),
                                        radial-gradient(
                                          var(--gradient-size) circle at var(--color3POSx) var(--color3POSy) var(--space), 
                                          oklch(var(--color3LCH)), oklch(var(--color3LCH) / 0%)
                                        ),
                                        radial-gradient(
                                          var(--gradient-size) circle at var(--color4POSx) var(--color4POSy) var(--space), 
                                          oklch(var(--color4LCH)), oklch(var(--color4LCH) / 0%)
                                        )
                                      ;
                                      
                                      @supports (background: linear-gradient(in oklab, white, black)) {
                                        --space: in oklab;
                                      }
                                      
                                      animation: 
                                        --up-n-down-1 4s var(--ease-elastic-in-2) infinite, 
                                        --side-to-side-1 4s var(--ease-elastic-in-2) -1s infinite,
                                        --up-n-down-2 4s var(--ease-elastic-in-2) -1s infinite, 
                                        --side-to-side-2 4s var(--ease-elastic-in-2) infinite,
                                        --up-n-down-3 4s var(--ease-elastic-in-2) infinite, 
                                        --side-to-side-3 4s var(--ease-elastic-in-2) -1s infinite,
                                        --up-n-down-4 4s var(--ease-elastic-in-2) -1s infinite, 
                                        --side-to-side-4 4s var(--ease-elastic-in-2) infinite
                                      ;
                                    }
                                  }
                                  
                                  @layer demo.support {
                                    .demo {
                                      --size: 75vmin; 
                                      border-radius: 20px;
                                      inline-size: var(--size);
                                      block-size: var(--size);
                                      background: white;
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
