import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'; // Import SDK dependency

const Contact = () => {
    const formRef = useRef(); // Create form DOM pointer reference
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        // Fetch environment keys tied safely to Vite configuration pipelines
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey: publicKey })
            .then(() => {
                setLoading(false);
                setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
                formRef.current.reset(); // Clear input rows cleanly on success
            }, (error) => {
                setLoading(false);
                console.error('EmailJS Error:', error.text);
                setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
            });
    };

    return (
        <section id="contact" className="py-20 px-5 bg-[#020205] flex justify-center items-center">
            <div className="w-full max-w-[600px] bg-[#0b0c10] p-10 rounded-xl border border-[#1f2229] shadow-2xl">
                <h2 className="text-3xl font-bold mb-2 text-center text-white">Let's Work Together</h2>
                <p className="text-sm text-slate-400 mb-8 text-center leading-relaxed">
                    Have a concept you want to shape into a real project? Drop me a message!
                </p>

                {/* Render interactive UI alert messages dynamically based on state outcome */}
                {status.message && (
                    <div className={`p-4 mb-6 rounded-md text-sm text-center font-medium ${
                        status.type === 'success' ? 'bg-emerald-950/50 text-emerald-400 border border-emerald-500/30' : 'bg-rose-950/50 text-rose-400 border border-rose-500/30'
                    }`}>
                        {status.message}
                    </div>
                )}

                <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="from_name" className="text-xs font-semibold uppercase tracking-wider text-slate-300">Name</label>
                        <input
                            type="text"
                            id="from_name"
                            name="from_name"  // Must precisely match template field string mapping parameters e.g., {{from_name}}
                            placeholder="Your Name"
                            required
                            className="bg-[#16181d] border border-[#2d3139] rounded-md p-3 text-white text-base outline-none transition-all focus:border-[#cce1ff] focus:shadow-[0_0_8px_rgba(204,225,255,0.2)]"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="reply_to" className="text-xs font-semibold uppercase tracking-wider text-slate-300">Email</label>
                        <input
                            type="email"
                            id="reply_to"
                            name="reply_to"  // Matches template parameter field identifier e.g., {{reply_to}}
                            placeholder="your.email@example.com"
                            required
                            className="bg-[#16181d] border border-[#2d3139] rounded-md p-3 text-white text-base outline-none transition-all focus:border-[#cce1ff] focus:shadow-[0_0_8px_rgba(204,225,255,0.2)]"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-slate-300">Message</label>
                        <textarea
                            id="message"
                            name="message"  // Matches template parameter field identifier e.g., {{message}}
                            rows="5"
                            placeholder="Tell me about your project..."
                            required
                            className="bg-[#16181d] border border-[#2d3139] rounded-md p-3 text-white text-base outline-none transition-all focus:border-[#cce1ff] focus:shadow-[0_0_8px_rgba(204,225,255,0.2)] resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#cce1ff] text-black font-semibold tracking-wider rounded-md p-3.5 mt-2 transition-all hover:bg-[#b0d2ff] hover:-translate-y-0.5 active:translate-y-0 disabled:bg-slate-600 disabled:text-slate-400 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        {loading ? 'SENDING...' : 'SEND MESSAGE'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
