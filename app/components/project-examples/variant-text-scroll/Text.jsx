import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';

export const TextScroll = () => {
    return (
        <div className="sm:mt32 mt-24 lg:mt-40">
            <Container className="pt-16">
                <FadeIn>
                    <div className="mx-auto flex max-w-7xl flex-col items-start justify-center text-neutral-950">
                        <h2 className="font-display mt-6 block max-w-5xl text-balance text-5xl font-medium tracking-tight text-neutral-950 sm:text-6xl">
                            Get better at the{' '}
                            <span className="text-spursPink">web</span>
                            <span className="block">one project at a time</span>
                        </h2>
                        <div className="mt-6 max-w-3xl text-balance text-xl text-neutral-600">
                            <p>
                                Tools are just tools. They don't really
                                matter—especially to the people trying to use
                                the websites you build. The same goes for
                                frameworks too. The most important thing is that
                                you stick to the key principles
                                <strong className="block text-spursPink">
                                    — Andy Bell
                                </strong>
                            </p>
                        </div>
                    </div>

                    <style>
                        {`
                        @font-face {
                            font-family: "Kablammo";
                            src: url('https://storage.googleapis.com/atoms-sandbox.google.com.a.appspot.com/Kablammo%5BMORF%5D.woff2') format('woff2'),
                                 url('https://storage.googleapis.com/atoms-sandbox.google.com.a.appspot.com/Kablammo%5BMORF%5D.ttf') format('truetype');
                          }
                          
                          @keyframes morph {
                            to {
                              font-variation-settings: "MORF" 60;
                            }
                          }
                          
                          @layer demo {
                            h2 {
                              animation: morph 5s linear infinite;
                              font-family: "Kablammo";
                              font-variation-settings: "MORF" 0;
                              line-height: 1;
                              margin-block: 100vh;
                            }
                          }
  
                        `}
                    </style>
                </FadeIn>
            </Container>
        </div>
    );
};
