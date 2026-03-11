'use client'
import { ChevronDownIcon, QuestionMarkCircleIcon } from '@heroicons/react/16/solid'
import React, { useState } from 'react'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I offer frontend development, web design, graphic design, and full-stack web applications. I specialize in creating responsive, high-performance websites using modern technologies like React, Next.js, and Tailwind CSS.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A simple portfolio website takes 1-2 weeks, while a full e-commerce platform can take 4-8 weeks. I provide detailed timelines during the initial consultation.",
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! I offer maintenance packages and ongoing support to ensure your website stays up-to-date, secure, and performing optimally. I also provide training for your team.",
    },
    {
      question: "What technologies do you use?",
      answer: "I work with modern tech stacks including React, Next.js, Node.js, TypeScript, Tailwind CSS, PostgreSQL, MongoDB, and cloud services like AWS and Vercel. I choose the best tools for each project.",
    },
    {
      question: "How do I get started?",
      answer: "Simply reach out through the contact form or email me with your project details. I'll schedule a free consultation to discuss your needs, timeline, and budget.",
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! I work with clients worldwide and am comfortable with different time zones. All communication is handled via email, video calls, and project management tools.",
    },
    {
      question: "What is your pricing structure?",
      answer: "I offer both fixed-price projects and hourly rates depending on the scope. I provide transparent quotes with no hidden fees. Contact me for a custom quote based on your needs.",
    },
    {
      question: "Can you work with my existing team?",
      answer: "Yes! I'm experienced in collaborating with existing teams and can integrate seamlessly into your workflow. I use tools like Slack, GitHub, and Jira for smooth communication.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br/ from-secondary/ via-third to-secondary">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-ui-color/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ui-color/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
           <h1 className=" text-text text-3xl sm:text-4xl  w-full font-semibold text-center drop-shadow-[0_4px_58px] drop-shadow-ui-color/40 border-b-2/ border-b-ui-color/ py-4 rounded-xl">
       Frequently
        <span className=" text-text-third ">
          Asked, <br className="hidden sm:flex" /> 
          <span className="bg-invert  mx-1 px-3 rounded-2xl text-invert-text drop-shadow-[0_4px_38px] drop-shadow-ui-color/20">
            Questions
          </span>
          In Here
        </span>
      </h1>
          <p className="text-text-third text-lg max-w-2xl mx-auto">
            Got questions? I've got answers. Here are some common questions I get asked.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-secondary/ border border-ui-color/17 rounded-3xl overflow-hidden hover:border-ui-color/30 transition-all duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-3 text-left hover:bg-ui-color/5 transition-colors"
                aria-expanded={activeIndex === index}
              >
                <div className="flex items-center gap-3">
                  <QuestionMarkCircleIcon className="w-5 h-5 text-ui-color flex-shrink-0" />
                  <span className="text-text font-semibold ">
                    {faq.question}
                  </span>
                </div>
                <ChevronDownIcon
                  className={`w-5 h-5 text-text-third transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0">
                  <p className="text-text-third leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center flex flex-col items-center gap-2 ">
          <p className="text-text-third mb-4">
            Still have questions?
          </p>
         
          <button className="py-2 px-3 bg-invert text-invert-text rounded-2xl sm:w-110 w-full font-semibold transition-all ease-in-out cursor-pointer hover:scale-103 flex items-center gap-2 justify-center">
            Get In Touch <ChevronDownIcon className="w-4 h-4 rotate-[-90deg]" />
          </button>
           
         
        </div>
      </div>
    </section>
  )
}

export default FAQ