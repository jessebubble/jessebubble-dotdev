import { FiInstagram, FiTwitter, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Form() {
    const form = useRef();

    const sendEmail = (e) => {
            e.prefentDefault();

            emailjs
                .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
                    .then(
                        (result) => {
                            console.log(result.text);
                            alert('SUCCESS!');
                        },
                        (error) => {
                            console.log(error.text);
                            alert('FAILED...', error);
                        }
                    );
    };
    return (
        <main className="relative bg-slate-900 pb-6 md:pb-10 md:pt-10 pt-6">
            <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-slate-900"></div>
            </div>
            <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
                <div className="bg-slate-900 rounded py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                    <div className="mx-auto max-w-lg">
                        <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">Let's Connect</h2>
                        <p className="mt-3 text-lg leading-6 text-gray-600">
                            I'm open to freelance projects, design reviews, content creation and remote Full-Time oportunities.
                        </p>
                        <dl className="mt-8 text-base text-gray-600">
                            <div className="mt-6">
                                <dt className="sr-only">Email</dt>
                                <dd className="flex">
                                    <FiMail className='h-6 w-6 text-slate-100' />
                                    <span className="ml-3">jesse@vivawebdesign.dev</span>
                                </dd>
                            </div>
                            <div className="mt-3">
                                <dt className="sr-only">Social</dt>
                                <dd className="flex">
                                    <FiInstagram className='h-6 w-6 text-slate-100' />
                                    <span className="ml-3">@jessebubble</span>
                                </dd>
                            </div>
                            <div className="mt-3">
                                <dt className="sr-only">Social</dt>
                                    <dd className="flex">
                                        <FiTwitter className='h-6 w-6 text-slate-100' />
                                        <span className="ml-3">@jessebubble</span>
                                    </dd>
                            </div>
                            <div className="mt-3">
                                <dt className="sr-only">Social</dt>
                                    <dd className="flex">
                                        <FiGithub className='h-6 w-6 text-slate-100' />
                                        <span className="ml-3">@jessebubble</span>
                                    </dd>
                            </div>
                            <div className="mt-3">
                                <dt className="sr-only">Social</dt>
                                    <dd className="flex">
                                        <FiLinkedin className='h-6 w-6 text-slate-100' />
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
                                <label htmlFor="full-name" className="sr-only">Full name</label>
                                <input 
                                    type="text" 
                                    name="full-name" 
                                    id="full-name" 
                                    autoComplete="name" 
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" 
                                    placeholder="Full name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input 
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    autoComplete="email" 
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" 
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">Phone</label>
                                <input 
                                    type="text" 
                                    name="phone" 
                                    id="phone" 
                                    autoComplete="tel" 
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" 
                                    placeholder="Phone"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="4" 
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Message">
                                </textarea>
                            </div>
                            <div>
                                <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-cyan-400 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>

    )
}