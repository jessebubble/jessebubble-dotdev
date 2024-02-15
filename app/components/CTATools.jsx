import { SectionIntro } from '~/components/SectionIntro';
import { Container } from '~/components/Container';
import { GridList, GridListItem } from '~/components/GridList';
import { GridPattern } from '~/components/GridPattern';

export function ToolSection() {
    return (
        <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
            <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-3xl bg-gradient-to-b from-neutral-50">
                <GridPattern
                    className="absolute inset-0 h-full w-full fill-neutral-950/5 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
                    yOffset={-270}
                />
            </div>

            <SectionIntro
                eyebrow="Inside the Bubble"
                title="Where user interface meets web standards"
            >
                <p>
                    Tools are just tools. They don't really matter—especially to
                    the people trying to use the websites you build. The same
                    goes for frameworks too. The most important thing is that
                    you stick to the key principles <br />{' '}
                    <strong className="text-spursPink">— Andy Bell</strong>
                </p>
            </SectionIntro>

            <Container className="mt-24">
                <GridList className="">
                    <GridListItem title="Adobe" className="">
                        Illustrator, Photoshop, and the built-in Generative AI
                        tools help us create content that is fun, unique, and
                        engaging
                    </GridListItem>
                    <GridListItem title="React-Aria" className="">
                        Passionate about building inclusive, accessible, and
                        performant online experiences for everyone to enjoy
                    </GridListItem>
                    <GridListItem title="TailwindCSS" className="">
                        Good design systems help reduce waste in your design and
                        development processes
                    </GridListItem>
                    <GridListItem title="Framer Motion" className="">
                        Simple yet powerful motion library for React. Think of
                        it as a plain HTML element, supercharged with animations
                    </GridListItem>
                    <GridListItem title="Remix-Run" className="">
                        More than just another React framework! Get good at
                        remix, and you'll get better at building for the web
                    </GridListItem>
                    
                    <GridListItem title="SQLite" className="">
                        A powerful, lightweight, and easy-to-use database engine
                        that is perfect for websites of all sizes
                    </GridListItem>
                </GridList>
            </Container>
        </div>
    );
}
