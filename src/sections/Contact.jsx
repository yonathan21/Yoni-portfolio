import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs
            .sendForm(
                serviceId,
                templateId,
                formRef.current,
                { publicKey: publicKey }
            )
            .then(
                () => {
                    setLoading(false);
                    setStatus({
                        type: 'success',
                        message:
                            'Thank you! Your message has been sent successfully.',
                    });

                    formRef.current.reset();
                },
                (error) => {
                    setLoading(false);
                    console.error('EmailJS Error:', error.text);

                    setStatus({
                        type: 'error',
                        message:
                            'Something went wrong. Please try again later.',
                    });
                }
            );
    };

    return (
        <section
            id="contact"
            className="py-20 px-5 bg-[#020205] flex justify-center items-center"
        >
            <div className="w-full max-w-[600px] bg-[#0b0c10] p-10 rounded-xl border border-[#1f2229] shadow-2xl">

                {/* Heading */}
                <h2 className="text-3xl font-bold mb-2 text-center text-white">
                    Let's Work Together
                </h2>

                <p className="text-sm text-slate-400 mb-8 text-center leading-relaxed">
                    Have a concept you want to shape into a real project?
                    Drop me a message!
                </p>

                {/* Status Message */}
                {status.message && (
                    <div
                        className={`p-4 mb-6 rounded-md text-sm text-center font-medium ${
                            status.type === 'success'
                                ? 'bg-emerald-950/50 text-emerald-400 border border-emerald-500/30'
                                : 'bg-rose-950/50 text-rose-400 border border-rose-500/30'
                        }`}
                    >
                        {status.message}
                    </div>
                )}

                {/* Contact Form */}
                <form
                    ref={formRef}
                    onSubmit={sendEmail}
                    className="flex flex-col gap-5"
                >

                    {/* Name */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="from_name"
                            className="text-xs font-semibold uppercase tracking-wider text-slate-300"
                        >
                            Name
                        </label>

                        <input
                            type="text"
                            id="from_name"
                            name="from_name"
                            placeholder="Your Name"
                            required
                            className="bg-[#16181d] border border-[#2d3139] rounded-md p-3 text-white text-base outline-none transition-all focus:border-[#cce1ff] focus:shadow-[0_0_8px_rgba(204,225,255,0.2)]"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="reply_to"
                            className="text-xs font-semibold uppercase tracking-wider text-slate-300"
                        >
                            Email
                        </label>

                        <input
                            type="email"
                            id="reply_to"
                            name="reply_to"
                            placeholder="your.email@example.com"
                            required
                            className="bg-[#16181d] border border-[#2d3139] rounded-md p-3 text-white text-base outline-none transition-all focus:border-[#cce1ff] focus:shadow-[0_0_8px_rgba(204,225,255,0.2)]"
                        />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="message"
                            className="text-xs font-semibold uppercase tracking-wider text-slate-300"
                        >
                            Message
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Tell me about your project..."
                            required
                            className="bg-[#16181d] border border-[#2d3139] rounded-md p-3 text-white text-base outline-none transition-all focus:border-[#cce1ff] focus:shadow-[0_0_8px_rgba(204,225,255,0.2)] resize-none"
                        ></textarea>
                    </div>

                    {/* Send Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#cce1ff] text-black font-semibold tracking-wider rounded-md p-3.5 mt-2 transition-all hover:bg-[#b0d2ff] hover:-translate-y-0.5 active:translate-y-0 disabled:bg-slate-600 disabled:text-slate-400 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        {loading ? 'SENDING...' : 'SEND MESSAGE'}
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-4 my-8">
                    <div className="h-px flex-1 bg-[#1f2229]"></div>

                    <span className="text-xs uppercase tracking-widest text-slate-500">
                        or connect with me
                    </span>

                    <div className="h-px flex-1 bg-[#1f2229]"></div>
                </div>

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/yonathan-dereje-891379434/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full inline-flex items-center justify-center gap-3 rounded-md border border-[#2d3139] bg-[#16181d] px-5 py-3.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-white hover:-translate-y-0.5"
                >
                    {/* LinkedIn Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                    >
                        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V8.99h3.56v11.46zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 .77 24 1.72V22.28C24 23.23 23.21 24 22.23 24z" />
                    </svg>

                    <span>Connect with me on LinkedIn</span>
                </a>

            </div>
        </section>
    );
};

export default Contact;