import { SectionIntro } from '~/components/SectionIntro';
import { Container } from '~/components/Container';
import { List, ListItem } from '~/components/List';
import { StylizedImage } from '~/components/StylizedImage';
import { FadeIn } from '~/components/FadeIn';

export function AboutSection() {
    return (
        <>
            <div className="relative mt-24 rounded-3xl bg-neutral-950 py-24 sm:mt-32">
                <SectionIntro
                    eyebrow="Life in the bubble"
                    title="Disco, whiskey and feathered friends"
                    invert={true}
                >
                    <p>
                        Some of the best work i've ever done has been in the
                        bubble. It's a place where we can be ourselves, connect,
                        and eventually die from lack of oxygen.{' '}
                        <strong className="">
                            Things you can expect to find in my bubble:
                        </strong>
                    </p>
                </SectionIntro>
                <Container className="mt-16">
                    <div className="lg:flex lg:items-center lg:justify-end">
                        <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                                <StylizedImage
                                    src="https://res.cloudinary.com/jessebubble/image/upload/v1707781262/midjourney/acidtrip_q1agi5.png"
                                    sizes="(min-width: 1024px) 41rem, 31rem"
                                    className="justify-center lg:justify-end"
                                />
                            </FadeIn>
                        </div>
                        <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
                            <ListItem title="Music Discovery">
                                Making playlists, buying records, going to live
                                shows, and talking about music with friends are
                                easily my favorite things to do. I'm always in
                                discovery mode, looking for new artists to
                                explore
                            </ListItem>
                            <ListItem title="Spirits">
                                Whiskey on the rocks, old fashioneds, and hazy
                                IPAs are my go-to drinks when I'm not drinking
                                water. I'm always on the lookout for new
                                breweries and distilleries to try out
                            </ListItem>
                            <ListItem title="Culinary Experiences">
                                Although I don't know how to cook, I love
                                exploring different culinary experiences. From
                                spicy to sweet, savory to sour, I love it all
                            </ListItem>
                            <ListItem title="Feathered Friends">
                                Egg-laying, feathered friends are some of my
                                favorite animals. They roam freely in the bubble
                                and are full of personality and character,
                                making them a joy to be around
                            </ListItem>
                        </List>
                    </div>
                </Container>
            </div>
        </>
    );
}
