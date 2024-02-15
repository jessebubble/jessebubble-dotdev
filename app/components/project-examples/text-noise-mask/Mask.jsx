import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';

export function Mask() {
    return (
        <div className="mt-16 sm:mt-32 lg:mt-40">
            <Container className="">
                <FadeIn>
                    <div className="noise">
                        <h1 className="text-center text-5xl font-bold leading-none tracking-tighter sm:text-6xl lg:text-7xl">
                            Inside the Bubble
                        </h1>
                    </div>

                    <style>
                        {`
                            @import "https://unpkg.com/open-props/durations.min.css";

                            /* 
                              typed a length for size interpolation
                              initial value is part of the hack at a super
                              small subpixel value
                            */
                            @property --lines {
                              syntax: "<length>";
                              inherits: false;
                              initial-value: 0.00010px;
                            }

                            /* 
                              ping/pong animation 
                              change value to change speed
                              faster = more sub pixels to transition
                            */
                            @keyframes liner {
                              50% {
                                --lines: 0.00012px;
                              }
                            }

                            @layer demo {
                              .noise {
                                /* animate the length custom property */
                                animation: liner var(--hour) linear infinite;
                                
                                /*
                                  repeating sub pixel radial hard stop lines
                                  creates thousands, so small they distort
                                  use this distortion as a mask
                                  the hard stops are basically on/off lines
                                */
                                mask: repeating-radial-gradient(
                                  circle at center,
                                  #000,
                                  var(--lines),
                                  #000,
                                  0,
                                  #0000,
                                  calc(var(--lines) * 2),
                                  #0000 0
                                );
                              }
                            }

                            @layer demo.gradient-text {
                              .noise {
                                --space:;
                                @supports (background: linear-gradient(in oklch, #000, #000)) {
                                  --space: in oklch;
                                }
                                
                                display: grid;
                                place-content: center;
                                
                                background-image: linear-gradient(
                                  to right var(--space), 
                                  deeppink, blue
                                );
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                
                                @media (prefers-color-scheme: light) {
                                  background-image: linear-gradient(
                                    to right var(--space), 
                                    black, gray
                                  );
                                  
                                  -webkit-background-clip: text;
                                  -webkit-text-fill-color: transparent;
                                }
                              }
                            }

                            @layer demo.support {
                              
                              
                              h1 {
                                font-size: 30vmin;
                              }
                            }
                        `}
                    </style>
                </FadeIn>
            </Container>
        </div>
    );
}
