import { Container } from '~/components/Container';
import { Border } from '~/components/Border';
import { FadeIn } from '~/components/FadeIn';
import { LightBulbIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import imageAbout from '~/assets/about.png';
import imageAcidTrip from '~/assets/acidtrip.png';
import imageCursedPixels from '~/assets/cursedpixels.png';
import imageTime from '~/assets/time.png';
import imageMidJourney from '~/assets/midjourney.png';
import imageStrawberry from '~/assets/strawberry.png';
import imageHumanCreature from '~/assets/human_creature3.png';

const imageArray = [
    { image: imageAbout },
    { image: imageAcidTrip },
    { image: imageCursedPixels },
    { image: imageTime },
    { image: imageMidJourney },
    { image: imageStrawberry },
    { image: imageHumanCreature },
];

export function WebStorageExample() {
    const [backgroundColor, setBackgroundColor] = useState(
        localStorage.getItem('backgroundColor') || '#ffffff'
    );
    const [fontColor, setFontColor] = useState(
        localStorage.getItem('fontColor') || '#000000'
    );
    const [randomImage, setRandomImage] = useState(
        localStorage.getItem('randomImage') ||
            imageArray[Math.floor(Math.random() * imageArray.length)].image
    );

    const handleBackgroundColorChange = (event) => {
        const color = event.target.value;
        setBackgroundColor(color);
        localStorage.setItem('backgroundColor', color);

        console.log('Background color saved to local storage');
    };

    const handleFontColorChange = (event) => {
        const color = event.target.value;
        setFontColor(color);
        localStorage.setItem('fontColor', color);

        console.log('Font color saved to local storage');
    };

    const handleRandomImageChange = (event) => {
        const image =
            imageArray[Math.floor(Math.random() * imageArray.length)].image;
        setRandomImage(image);
        localStorage.setItem('randomImage', image);

        console.log('Random image saved to local storage');
    };

    return (
        <Container className="">
            <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
                <FadeIn>
                    <article>
                        <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                            <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                                <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                                    <LightBulbIcon className="h-12 w-12 flex-none text-neutral-950" />
                                    <h3 className="mt-6 flex items-center text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                                        Local Storage Playground
                                    </h3>
                                </div>
                                <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                                        Saving data on the client side
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                                <p className="font-display text-4xl font-medium text-neutral-950">
                                    Web Storage API
                                </p>
                                <div
                                    className="bg-cosa-white mt-6 flex w-full flex-col items-center justify-center space-y-6 rounded-lg border p-6 text-base text-neutral-600"
                                    style={{
                                        backgroundColor: backgroundColor,
                                    }}
                                >
                                    <p
                                        className="text-base text-neutral-950"
                                        style={{
                                            color: fontColor,
                                        }}
                                    >
                                        In this example, we use the Web Storage
                                        API to save the user&rsquo;s local
                                        updates to the background color, font
                                        color, and fetched image from the
                                        Unsplash API. These changes are saved to
                                        local storage, so they persist even if
                                        the user closes the browser window and
                                        comes back later.
                                    </p>
                                    <p className="text-base text-white">
                                        <span className="font-bold">Hint:</span>{' '}
                                        Open the console to see what&rsquo;s
                                        happening behind the scenes
                                    </p>
                                    <div className="mt-8 flex w-full items-center justify-evenly">
                                        <form className="">
                                            <div className="flex flex-col items-center justify-center gap-y-2">
                                                <label
                                                    htmlFor="background-color"
                                                    className="sr-only"
                                                >
                                                    Choose a background color
                                                </label>
                                                <input
                                                    id="background-color"
                                                    type="color"
                                                    value={backgroundColor}
                                                    onChange={
                                                        handleBackgroundColorChange
                                                    }
                                                    className="h-16 w-full rounded-lg sm:h-16 sm:w-32"
                                                />

                                                <label
                                                    htmlFor="font-color"
                                                    className="sr-only"
                                                >
                                                    Choose a font color
                                                </label>
                                                <input
                                                    id="font-color"
                                                    type="color"
                                                    value={fontColor}
                                                    onChange={
                                                        handleFontColorChange
                                                    }
                                                    className="h-16 w-full rounded-lg sm:h-16 sm:w-32"
                                                />

                                                <label
                                                    htmlFor="random-image"
                                                    className="sr-only"
                                                >
                                                    Choose a random image
                                                </label>
                                                <button
                                                    id="random-image"
                                                    type="button"
                                                    onClick={
                                                        handleRandomImageChange
                                                    }
                                                    className="h-16 w-full rounded-lg bg-neutral-950 font-semibold text-white sm:h-16 sm:w-32"
                                                >
                                                    {randomImage
                                                        ? 'Change Image'
                                                        : 'Get Image'}
                                                </button>
                                            </div>
                                        </form>
                                        <div className="ml-4 h-52 w-52 rounded-lg md:ml-0">
                                            <img
                                                src={
                                                    randomImage
                                                        ? randomImage
                                                        : imageArray[
                                                              Math.floor(
                                                                  Math.random() *
                                                                      imageArray.length
                                                              )
                                                          ].image
                                                }
                                                alt="Random midjourney collection"
                                                className="h-full w-full rounded-lg object-cover"
                                            />
                                        </div>
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
