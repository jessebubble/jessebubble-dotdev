import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiInstagram, FiTwitter, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Form() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hxrxpdb', 'template_p9czz9g', form.current, 'Vg9DbywednMl26hQU')
            .then((result) => {
                    console.log(result.text);
                },(error) => {
                    console.log(error.text);
                });
                e.target.reset();
    };

    return (
        <main className="relative bg-slate-900">
            <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-slate-900"></div>
            </div>
            <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
                <div className="bg-slate-900 rounded py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                    <div className="mx-auto max-w-lg">
                        <h2 className="text-2xl font-bold tracking-tight text-indigo-500 sm:text-3xl">Let's Connect</h2>
                        <p className="mt-3 text-lg leading-6 text-gray-300">
                            Have an idea for a project? Want to chat about a new opportunity? I'd love to hear from you.
                            Send me an email, fill out this form or connect with me on social media.
                        </p>
                        <dl className="mt-8 text-base text-gray-300">
                            <div className="mt-6">
                                <dt className="sr-only">Email</dt>
                                <dd className="flex">
                                    <FiMail className='h-6 w-6 text-indigo-500' />
                                    <span className="ml-3">jesse@vivawebdesign.dev</span>
                                </dd>
                            </div>
                            <div className="mt-3">
                                <dt className="sr-only">Social</dt>
                                <dd className="flex">
                                    <FiInstagram className='h-6 w-6 text-indigo-500' />
                                    <span className="ml-3">@jessebubble</span>
                                </dd>
                            </div>
                            <div className="mt-3">
                                <dt className="sr-only">Social</dt>
                                    <dd className="flex">
                                        <FiTwitter className='h-6 w-6 text-indigo-500' />
                                        <span className="ml-3">@jessebubble</span>
                                    </dd>
                            </div>
                            <div className="mt-3">
                                <dt className="sr-only">Social</dt>
                                    <dd className="flex">
                                        <FiGithub className='h-6 w-6 text-indigo-500' />
                                        <span className="ml-3">@jessebubble</span>
                                    </dd>
                            </div>
                            <div className="mt-3">
                                <dt className="sr-only">Social</dt>
                                    <dd className="flex">
                                        <FiLinkedin className='h-6 w-6 text-indigo-500' />
                                        <span className="ml-3">@jessebubble</span>
                                    </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="bg-slate-900 rounded py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                    <div className="mx-auto max-w-lg lg:max-w-none">
                        <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-y-6">
                            <div>
                                <label htmlFor="name" className="sr-only">name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" 
                                    placeholder="Full name"
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className="sr-only">Email</label>
                                <input 
                                    type="text" 
                                    name="email" 
                                    id="email" 
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" 
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <label htmlFor='phone' className="sr-only">Phone</label>
                                <input 
                                    type="text" 
                                    name="phone" 
                                    id="phone" 
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" 
                                    placeholder="Phone"
                                />
                            </div>
                            <div>
                                <label htmlFor='message' className="sr-only">Message</label>
                                <textarea 
                                    type="text"
                                    name="message" 
                                    id="message" 
                                    rows="4" 
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Message">
                                </textarea>
                            </div>
                            <div>
                                <button type="submit" id="button" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-500 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>

    )
}