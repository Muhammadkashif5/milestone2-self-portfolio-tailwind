'use client'
import React, { useRef } from "react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formData = new FormData(form.current!);

    // emailjs.sendForm(
    //   "service_9to0tsp",
    //   "template_c3cg2hq",
    //   form.current,
    //   'WB-1QTCiG18WXV7pu',
    //   {
    //     name: formData.get('name'),
    //     email: formData.get('email'),
    //     message: formData.get('message')
    //   }
    // );

    form.current!.reset(); // Use form.current!.reset() instead
};

  return (
    <section className="contact section py-12" id="contact">
      <h2 className="text-3xl font-semibold text-center" data-aos="zoom-in">
        Get in touch
      </h2>
      <span className="text-lg text-center block mt-2" data-aos="zoom-in">
        Contact Me
      </span>

      <div className="flex flex-col md:flex-row justify-center gap-12 py-8">
        <div className="flex flex-col items-center md:w-1/2">
          <h3 className="text-xl font-medium mb-4 text-center" data-aos="fade-right" data-aos-delay="0">
            Talk to me
          </h3>

          <div className="flex flex-col items-center space-y-6">
            <div className="bg-white border border-gray-200 p-4 rounded-lg text-center w-72" data-aos="fade-up" data-aos-delay="300">
              <i className="uil uil-envelope-upload text-2xl text-gray-600 mb-2"></i>
              <h3 className="font-medium text-lg">Email</h3>
              <span className="block text-sm break-words">
                muhammad.kashif7016992@gmail.com
              </span>
              <a href="mailto:muhammad.kashif7016992@gmail.com" target="_blank" rel="noreferrer" className="text-blue-600 inline-flex items-center gap-1 mt-2">
                Write me
                <i className="uil uil-arrow-right"></i>
              </a>
            </div>

            <div className="bg-white border border-gray-200 p-4 rounded-lg text-center w-72" data-aos="fade-up" data-aos-delay="500">
              <i className="uil uil-whatsapp text-2xl text-gray-600 mb-2"></i>
              <h3 className="font-medium text-lg">Whatsapp</h3>
              <span className="block text-sm">+92412849860</span>
              <a href="https://api.whatsapp.com/send?phone=03412849860" target="_blank" rel="noreferrer" className="text-blue-600 inline-flex items-center gap-1 mt-2">
                Write me
                <i className="uil uil-arrow-right"></i>
              </a>
            </div>

            <div className="bg-white border border-gray-200 p-4 rounded-lg text-center w-72" data-aos="fade-up" data-aos-delay="700">
              <i className="uil uil-linkedin text-2xl text-gray-600 mb-2"></i>
              <h3 className="font-medium text-lg">Linkedin</h3>
              <span className="block text-sm break-words">muhammad-kashif7016</span>
              <a href="http://www.linkedin.com/in/muhammad-kashif7016" target="_blank" rel="noreferrer" className="text-blue-600 inline-flex items-center gap-1 mt-2">
                View Me
                <i className="uil uil-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <h3 className="text-xl font-medium text-center mb-4" data-aos="fade-left" data-aos-delay="0">
            Write me your project
          </h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-6 w-80 mx-auto">
            <div className="relative" data-aos="fade-up" data-aos-delay="300">
              <label className="absolute -top-2 left-4 bg-white px-1 text-sm">
                Name
              </label>
              <input type="text" name="name" className="border border-gray-300 w-full h-12 rounded-lg pl-4 focus:outline-none" placeholder="Insert your name" required />
            </div>

            <div className="relative" data-aos="fade-up" data-aos-delay="500">
              <label className="absolute -top-2 left-4 bg-white px-1 text-sm">
                Email
              </label>
              <input type="email" name="email" className="border border-gray-300 w-full h-12 rounded-lg pl-4 focus:outline-none" placeholder="Insert your email" required />
            </div>

            <div className="relative" data-aos="fade-up" data-aos-delay="700">
              <label className="absolute -top-2 left-4 bg-white px-1 text-sm">
                Project
              </label>
              <textarea name="message" cols={30} rows={4} className="border border-gray-300 w-full rounded-lg p-4 focus:outline-none resize-none" placeholder="Write your project" required></textarea>
            </div>

            <button type="submit" className="bg-blue-600 text-white w-full py-3 rounded-lg flex items-center justify-center gap-2 transition-transform hover:bg-blue-700" data-aos="flip-right" data-aos-delay="800">
              Send Message
              <svg className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M14.22 21.935c-1.18 0-2.85-.83-4.17-4.8l-.72-2.16-2.16-.72c-3.96-1.32-4.79-2.99-4.79-4.17 0-1.17.83-2.85 4.8-4.17l8.49-2.83c2.12-.71 3.89-.5 4.98.6 1.09 1.1 1.3 2.88.6 5.01l-2.83 8.49c-1.32 3.96-2.99 4.79-4.17 4.79z" fill="currentColor"/>
                <path d="M10.11 14.71a.75.75 0 0 1-.53-1.28l3.58-3.59a.75.75 0 0 1 1.06 1.06l-3.59 3.59a.75.75 0 0 1-.53.22z" fill="currentColor"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
