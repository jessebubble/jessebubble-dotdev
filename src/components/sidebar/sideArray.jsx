import {
    ArrowTopRightOnSquareIcon
  } from '@heroicons/react/20/solid'

export const sideArray = [
    {
        name: 'About Me',
        path: '/about',
        features: [
            {   
                name: "Inside the bubble",
                description: "During the pandemic I made the transition from a career in sales and service to web development. I'm a self-taught developer with strong interpersonal and communication skills.",
                descriptionThree: "My passion project, Viva Web Design, builds fast, SEO-optimized, user-friendly, easily manageable websites that are made from scratch, built to scale and built to give our small business owners control of their online presence.", 
                descriptionTwo: "Currently working with _nology, collaborating with developers and following best practices to automate infrastructure updates using a Git workflow with continuous integration (CI) and continuous delivery (CI/CD).",
                imageUrl: "https://cdn.sanity.io/images/etrj839y/production/34bbec73efa623ce933cea4fcb7aa2195a2809b0-6240x3512.jpg",
            },
        ],
    },
    {
        name: 'devProjects',
        path: '/projects',
        features: [
            {
                name: 'Viva Web Design',
                description: "@vivawebdesign is an agency that designs and develops Shopify e-commerce storefronts, fast marketing websites, web applications and more.",
                imageUrl: "https://cdn.sanity.io/images/etrj839y/production/4f7361092ce718f9ba962942c1e13d3e1ac5f64c-500x500.svg", 
                icon: ArrowTopRightOnSquareIcon,
                href: "https://www.vivawebdesign.dev/",
            },
            {
                name: 'Yung Guardian',
                description: "Yung Guardian is set to release their debut album in 2023. Created a custom music player with React to match the style of the bands trippy electronic sounds. Storefront is powered by Hydrogen, shopify's headless commerce.",
                imageUrl: "https://cdn.sanity.io/images/etrj839y/production/08f140187eecde4fbfe4fddb0a08f7e60be4a6f7-500x500.svg",
                icon: ArrowTopRightOnSquareIcon,
                href: "https://www.yungguardian.com/",
            },
            {
                name: 'Alamo Welding',
                description: "Our client needed an online prescence to offically launch their brand in San Antonio. Built with React, TailwindCSS and Sanity as the headless CMS. With sanity, we were able to build a fast, SEO-friendly website our client can easily update in the future.",
                imageUrl: "https://cdn.sanity.io/images/etrj839y/production/10908078b13bba39c7ca2f61a6edbefbcaa35759-500x500.svg",
                icon: ArrowTopRightOnSquareIcon,
                href: "https://www.alamowelding.com/",
            },
        ],
    },
    {
        name: 'Full-Stack Tools',
        path: '/devtools',
        features: [
            {
                name: 'Frameworks.',
                description: "Using full-stack frameworks built on top of React like Next.js and Remix to produce fast and SEO-friendly websites, which can also fetch content from Sanity CMS.",
            },
            {
                name: 'Styling libraries.',
                description: 'Tailwind CSS is used to easily style projects while keeping a consistent design system at all times.',
            },
            {
                name: 'Design & collaboration.',
                description: 'Figma, Slack and Notion are tools that allow me to transparently collaborate with clients. Figma is used to design and prototype a clients website, Slack to communicate and Notion to keep track of tasks and share documents with my clients.',
            },
            {
                name: 'Authentication.',
                description: "Supabase and AuthO aim to make it easy for developers to prevent unauthorized access and build real-time web applications without the need to set up and manage their own servers and infrastructure.",
            },
            {
                name: 'Search platform.',
                description: "Tools such as Algolia make it possible to make an entire website searchable in a matter of minutes allowing users to find what they're looking for quickly and easily on your website.",
            },
            {
                name: 'Payment solution.',
                description: "The billing experience should follow commonly used payment models to avoid confusing users. That's why I use Stripe, the most robust platform to implement Billing for any web application I build.",
            },
        ],
    },
]