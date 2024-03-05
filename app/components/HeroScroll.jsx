import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { SectionIntro } from '~/components/SectionIntro';

export function HeroScroll() {
    return (
        <>
            <div className="mt-24 py-24 sm:mt-32 lg:mt-40 bg-neutral-950 rounded-3xl">
                <SectionIntro
                    eyebrow="Building For Everyone"
                    title="From Non-Profit to Community Platform"
                    invert
                >
                    <p>
                        As the founder of both{' '}
                        <strong>Digital Canvas Foundation</strong> and{' '}
                        <strong>devSA</strong>, I'm driven to empower
                        individuals through tech access and foster a
                        collaborative community
                    </p>
                </SectionIntro>
                <Container className="mt-16">
                    <FadeIn>
                        <div className="grid min-h-screen place-items-center overflow-y-hidden">
                            <ul className="m-0 flex h-[100%] list-none space-x-4 p-0">
                                {items.map((item, index) => (
                                    <li
                                        key={index}
                                        className="li-even relative grid h-[70%] md:h-[100%] md:w-[90vw] place-items-start overflow-hidden p-4"
                                    >
                                        <h2
                                            className="text-[clamp(1.5rem, 2vw + 1rem, 2rem)] sm:text-[clamp(2rem, 4vw + 1rem, 10rem)] m-0 max-w-full font-semibold uppercase text-neutral-950 sm:max-w-[50%]"
                                            style={{
                                                fontSize:
                                                    'clamp(2rem, 4vw + 1rem, 10rem)',
                                                animation: 'rotate-gradient 5s linear infinite'
                                            }}
                                        >
                                            {item.title}
                                        </h2>
                                        <img
                                            src={item.imgSrc}
                                            alt="devsa terminal logos"
                                            className="hero-image absolute md:right-[5%] md:top-1/2 md:w-[50vmin] -translate-y-1/2 translate-x-0 rounded-3xl object-contain right-[10%] w-[70vmin] top-1/4"
                                            style={{
                                                //zIndex: -1,
                                                transformOrigin: '300% 50%',
                                                aspectRatio: 1,
                                                width: '70vmin',
                                                right: '10%',
                                                translate: '0% -50%',
                                            }}
                                        />
                                    </li>
                                ))}
                            </ul>
                            <style>
                                {`                                               
                                .li.even {
                                    @apply items-end;
                                }  
                                    li {
                                        view-timeline: --item;
                                        view-timeline-axis: inline;
                                    }
                                    .hero-image {
                                        animation: fly-by both linear;
                                        animation-timeline: --item;
                                    }
                                
                                @keyframes fly-by {
                                    0% {
                                        transform: rotate(30deg);
                                    }
                                    100% {
                                        transform: rotate(-30deg);
                                    }
                                }
                                .li.even img {
                                    /*   animation-direction: reverse; */
                                    transform-origin: -300% 50%;
                                }

                                @keyframes rotate-gradient {
                                    0%, 100% {
                                      background: linear-gradient(to right in oklch, oklch(90% .3 230), oklch(70% .3 340));
                                      -webkit-background-clip: text;
                                      color: transparent;
                                    }
                                    25% {
                                      background: linear-gradient(to right in oklch, oklch(87% .4 142), oklch(100% .4 95));
                                      -webkit-background-clip: text;
                                      color: transparent;
                                    }
                                    50% {
                                      background: linear-gradient(to right in oklab, oklch(100% .25 160), oklch(75% .5 260));
                                      -webkit-background-clip: text;
                                      color: transparent;
                                    }
                                    75% {
                                      background: linear-gradient(to right in oklab, oklch(100% .4 95), oklch(55% .45 350));
                                      -webkit-background-clip: text;
                                      color: transparent;
                                    }
                                }
                            `}
                            </style>
                        </div>
                    </FadeIn>
                </Container>
            </div>
        </>
    );
}

const items = [
    {
        title: 'Digital Canvas Foundation',
        imgSrc: 'https://res.cloudinary.com/jessebubble/image/upload/v1709245433/process-dotted_wmkoxw.svg',
    },
    {
        title: 'Shaping the identity of tech in sa',
        imgSrc: 'https://res.cloudinary.com/jessebubble/image/upload/v1708019767/devsa_kum4r4.png',
    },
    {
        title: 'Pull Request Welcome',
        imgSrc: 'https://res.cloudinary.com/jessebubble/image/upload/v1707781399/midjourney/github_hlswbo.png',
    },
    {
        title: 'Kick-start collaboration',
        imgSrc: 'https://res.cloudinary.com/jessebubble/image/upload/v1708100085/discord_yjywpf.png',
    },
    {
        title: 'In-person meetups',
        imgSrc: 'https://res.cloudinary.com/jessebubble/image/upload/v1708041429/huggingface_hufljq.png',
    },
    {
        title: 'Establishing a vibrant hub',
        imgSrc: 'https://res.cloudinary.com/jessebubble/image/upload/v1707781402/midjourney/twitch_nozzdg.png',
    },
    {
        title: 'Fostering an inclusive environment',
        imgSrc: 'https://res.cloudinary.com/jessebubble/image/upload/v1707781404/midjourney/youtube_vacldn.png',
    },
    {
        title: 'Pop-up shop',
        imgSrc: 'https://res.cloudinary.com/jessebubble/image/upload/v1708540839/printify/Lifestyle_alkmqv.jpg',
    },
    {
        title: 'Seeking collaborative organizations',
        imgSrc: 'https://res.cloudinary.com/jessebubble/image/upload/v1708041444/images_modern_Huggies_Doodle_Huggy_cqsv7a.gif',
    },
    {
        title: 'Actively seeking sponsors',
        imgSrc: 'https://res.cloudinary.com/jessebubble/image/upload/v1708296271/qr_bIY7sy6FecLJeTm5kk_1_dj4ity.png',
    },

    {
        title: '@jessebubble',
        imgSrc: 'https://res.cloudinary.com/jessebubble/image/upload/v1707188269/midjourney/teamwork_hlox7m.png',
    },
];
