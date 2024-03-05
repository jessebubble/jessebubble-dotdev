import { Link } from '@remix-run/react';
import { Container } from '~/components/Container';
import { FadeIn, FadeInStagger } from '~/components/FadeIn';
import { SectionIntro } from '~/components/SectionIntro';

const collections = [
    {
        title: 'What we build',
        examples: [
            {
                name: 'Built with Blazor',
                role: 'Blazor extends the capabilities of .NET to the client side, enabling developers to use C# for both server-side and client-side programming',
                href: 'https://github.com/jessebubble/blazor',
            },
            {
                name: 'Built with Ruby on Rails',
                role: "The combination of Ruby's expressiveness and Rails' conventions contributes to the effectiveness of the framework",
                href: 'https://github.com/jessebubble/blog-on-rails',
            },
            {
                name: 'Built with Spring Boot',
                role: 'From web applications to microservices, Spring Boot is a popular Java framework for building enterprise-grade applications.',
                href: 'https://github.com/jessebubble/spring-boot',
            },
            {
                name: 'Built with Drupal',
                role: 'Drupal is an open-source CMS written in PHP. It enables users to create, manage, and organize content on their websites with ease.',
                href: 'https://github.com/jessebubble/drupal',
            },
            {
                name: 'Built with Remix',
                role: 'Remix is a full stack web framework that lets you focus on the user interface and work back through web standards to deliver a fast, slick, and resilient user experience',
                href: 'https://github.com/jessebubble/viva-web-design',
            },
        ],
    },
];

export function ShowcaseSection() {
    return (
        <div className="relative mt-24 py-24 sm:mt-32">
            <SectionIntro
                eyebrow="What's in the box?"
                title="Flexible, scalable, and accessible websites"
                invert={false}
            >
                <p>
                    Tools are just tools. They don't really matter—especially to
                    the people trying to use the websites you build. The same
                    goes for frameworks too. The most important thing is that
                    you stick to the key principles <br />{' '}
                    <strong className="text-spursPink">— Andy Bell</strong>
                </p>
            </SectionIntro>
            <Container className="">
                <div className="">
                    {collections.map((group) => (
                        <FadeInStagger key={group.title}>
                            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-3 xl:gap-8">
                                <div className="lg:col-span-3">
                                    <ul
                                        role="list"
                                        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                                    >
                                        {group.examples.map((example) => (
                                            <li key={example.name}>
                                                <FadeIn>
                                                    <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                                                        <Link to={example.href}>
                                                            <img
                                                                src="https://res.cloudinary.com/jessebubble/image/upload/v1708019767/devsa-window_bn7x4c.png"
                                                                alt="screen shot of the product"
                                                                className="h-96 w-full object-cover object-center grayscale transition-all duration-300 group-hover:grayscale-0"
                                                            />
                                                            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                                                                <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                                                                    {
                                                                        example.name
                                                                    }
                                                                </p>
                                                                <p className="mt-2 text-sm text-white">
                                                                    {
                                                                        example.role
                                                                    }
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </FadeIn>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </FadeInStagger>
                    ))}
                </div>
            </Container>
        </div>
    );
}
