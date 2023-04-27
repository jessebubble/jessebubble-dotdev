const developerArray = [
  {
    id: 1,
    title: 'Craft Beer & Whiskey',
    description:
      "Whiskey on the rocks, old fashioneds and Hazy IPA's are my go to drinks when I'm not drinking water. I'm always looking for new breweries and distilleries to experience",
  },
  {
    id: 2,
    title: 'Music Discovery',
    description:
      "Making playlist, buying records, going to live shows and talking music with friends are easily my favorite things to do. I'm always in discovery mode looking for new artist to explore",
  },
  {
    id: 3,
    title: 'I Love Food',
    description:
      "I don't know how to cook but I love exploring different culinary cultural experiences. Spicy, sweet, savory, sour...I love it all",
  },
  {
    id: 4,
    title: 'Local and National Parks',
    description:
      "Walking trails, camping, fishing and exploring nature are some of my favorite things to do. Always looking for new places to explore.",
  },
]

export default function DeveloperIndexRoute() {

  return (
        <div className="bg-white py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
                    <div className="w-full lg:max-w-lg lg:flex-auto">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Inside The Bubble
                        </h2>
                        <p className="mt-6 text-xl leading-8 text-gray-600">
                            When I'm not in developer mode, I'm usually doing one of the following things.
                        </p>
                        <img
                            src="https://cdn.sanity.io/images/etrj839y/production/f1ce74e51b2bced61e2a54f319e7f9565aeccee8-2912x1632.png"
                            alt="midjourney robtos"
                            className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover object-left lg:aspect-auto lg:h-[34.5rem]"
                        />
                    </div>
                    <div className="w-full lg:max-w-xl lg:flex-auto">
                        <h3 className="sr-only">Job openings</h3>
                        <ul className="-my-8 divide-y divide-gray-100">
                            {developerArray.map((item) => (
                                <li key={item.id} className="py-8">
                                    <dl className="relative flex flex-wrap gap-x-3">
                                        <dt className="sr-only">Title</dt>
                                        <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                                            {item.title}
                                            <span className="absolute inset-0" aria-hidden="true" />
                                        </dd>
                                        <dt className="sr-only">Description</dt>
                                        <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">{item.description}</dd>
                                    </dl>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
