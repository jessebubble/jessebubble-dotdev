import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';
import Nav from './navbar';
import Form from './form.js';
import Footer from './footer';

export default function Blog() {
    const [allPostData, setAllPost] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
            }
        }`
            )
            .then((data) => setAllPost(data))
            .catch(console.error);
    }, []);

    return (
        <>
        <Nav />

        <main className="relative overflow-hidden bg-white lg:p-2">
            {/* <!-- Decorative background image and gradient --> */}
            <div aria-hidden="true" className="absolute inset-0">
                <div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
                    <img 
                        src="./bubble9.png" 
                        alt="jessebubble" 
                        className="h-full w-full object-cover object-cente rounded"
                    />
                </div>
                <div className="absolute inset-0 bg-white bg-opacity-60 lg:bg-opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white"></div>
            </div>
            {/* <!-- Callout --> */}
            <section aria-labelledby="blog-heading" className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    {/* <h2 id="blog-heading" className="text-4xl font-bold tracking-tight text-yellow-300 sm:text-5xl lg:text-6xl">
                        devBlog 
                    </h2> */}
                    {/* <p className="mx-auto mt-4 max-w-xl text-xl text-gray-600">
                        Inside The Bubble
                    </p> */}
                </div>
            </section>
            {/* <!-- Testimonials --> */}
            <section aria-labelledby="testimonial-heading" className="relative mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <h2 id="testimonial-heading" className="text-2xl font-bold tracking-tight text-rose-500">
                        devBlog
                    </h2>
                    <p className="text-xl text-gray-600">
                        Inside The Bubble
                    </p> 
                    <div className="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                        <blockquote className="sm:flex lg:block">
                            <svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="flex-shrink-0 text-gray-300">
                                <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
                            </svg>
                            <div className="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                                <p className="text-lg text-gray-600">
                                    We know where we're going but we don't know where we've been.  We know what we're knowing but we can't say what we've seen 
                                </p>
                                <cite className="mt-4 block font-semibold not-italic text-gray-900">David Byrne, Talking Heads</cite>
                            </div>
                        </blockquote>
                        <blockquote className="sm:flex lg:block">
                            <svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="flex-shrink-0 text-gray-300">
                                <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
                            </svg>
                            <div className="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                                <p className="text-lg text-gray-600">
                                    After a banner year for tech, layoffs are here. As of September 2022, more than 42,000 workers in the U.S. tech sector have been laid off
                                </p>
                                <cite className="mt-4 block font-semibold not-italic text-gray-900">Keerthi Vedantam, Crunchbase</cite>
                            </div>
                        </blockquote>
                        <blockquote className="sm:flex lg:block">
                            <svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="flex-shrink-0 text-gray-300">
                                <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
                            </svg>
                            <div className="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                                <p className="text-lg text-gray-600">
                                    Seemingly overnight, the tech industry flipped from aggressive growth, hiring sprees, lavish perks and boundless opportunity to layoffs, hiring freezes and doing more with less.
                                </p>
                                <cite className="mt-4 block font-semibold not-italic text-gray-900">Erin Griggith, NYTimes</cite>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </section>
        </main>

        <main className="px-4 sm:px-6 lg:px-8 pt-6 pb-6 bg-gradient-to-b from-white via-slate-200 to-slate-500 ">
            <div className="relative mx-auto max-w-lg lg:max-w-7xl">
                <div className='pt-6 md:pt-10 lg:pt-12'>
                    <h2 className="text-xl font-medium tracking-tight text-gray-900 sm:text-3xl">Inside The <span className='text-rose-500'>Bubble</span></h2>
                    <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
                        <p className="text-xl text-gray-600">
                            Get notifications directly to your inbox when new content is available.
                        </p>
                        <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
                            <div>
                                <label for="email-address" className="sr-only">Email address</label>
                                <input 
                                    id="email-address" 
                                    name="email-address" 
                                    type="email" 
                                    autocomplete="email" 
                                    required className="w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 lg:max-w-xs" 
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mt-2 flex w-full flex-shrink-0 rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto">
                                <button type="button" className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-base font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:inline-flex sm:w-auto">Notify me</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="gap-16 grid lg:grid-cols-3 text-gray-600 p-6 md:p-10 lg:p-16 mt-12">
                    {allPostData &&
                        allPostData.map((post, index) => (
                            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                                <span key={index}>
                                    <img 
                                        src={post.mainImage.asset.url} 
                                        alt="" 
                                        className='rounded-lg md:w-56 lg:w-60 hover:opacity-70 transition duration-500 ease-in-out'
                                    />
                                    <span>
                                        <h2 className='mt-1 text-md md:text-lg text-gray-900 tracking-tight antialiased'>
                                            {post.title}
                                        </h2>
                                    </span>
                                </span>
                            </Link>
                        ))}
                </div>
            </div>
        </main>

        <Form />

        <Footer />
        </>
    );
}