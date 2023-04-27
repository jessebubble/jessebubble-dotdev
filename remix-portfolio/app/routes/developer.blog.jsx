const blogPosts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            'https://cdn.sanity.io/images/etrj839y/production/95b4c3e3183bc7780ddb147f5c4b6f6bbf54ef6b-520x910.png',
        date: 'May 01, 2023',
        datetime: '2023-05-01',
        author: {
            name: 'jessebubble',
            imageUrl:
            'https://cdn.sanity.io/images/etrj839y/production/70b8c26e3576f568fb3c994b07e08fde0b3c9927-1495x1125.png',
        },
    },
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            'https://cdn.sanity.io/images/etrj839y/production/95b4c3e3183bc7780ddb147f5c4b6f6bbf54ef6b-520x910.png',
        date: 'May 01, 2023',
        datetime: '2023-05-01',
        author: {
            name: 'jessebubble',
            imageUrl:
            'https://cdn.sanity.io/images/etrj839y/production/70b8c26e3576f568fb3c994b07e08fde0b3c9927-1495x1125.png',
        },
    },
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            'https://cdn.sanity.io/images/etrj839y/production/95b4c3e3183bc7780ddb147f5c4b6f6bbf54ef6b-520x910.png',
        date: 'May 01, 2023',
        datetime: '2023-05-01',
        author: {
            name: 'jessebubble',
            imageUrl:
            'https://cdn.sanity.io/images/etrj839y/production/70b8c26e3576f568fb3c994b07e08fde0b3c9927-1495x1125.png',
        },
    },
]
  
  export default function BlogIndexRoute() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-logopink sm:text-4xl">Developer Blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Content creation powered by Remix, Sanity.io and AI tools 
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
  
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img src={post.author.imageUrl} alt="" className="h-6 w-6 object-cover flex-none rounded-full bg-white/10" />
                      {post.author.name}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  