'use client'
import { StarIcon, Bars3Icon } from '@heroicons/react/16/solid'
import { QuoteIcon, Star, Stars } from 'lucide-react'
import React, { useState, useEffect } from 'react'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      rating: 4,
      content: "Abshir transformed our website into a stunning, high-performance platform. The attention to detail and clean code made all the difference. Highly recommended!",
    },
    {
      name: "Michael Chen",
      role: "Founder, DesignHub",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      rating: 5,
      content: "Working with Abshir was an absolute pleasure. He delivered beyond our expectations and the project was completed on time. Will definitely work with him again!",
    },
    {
      name: "Emily Davis",
      role: "Marketing Director, GrowthCo",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      rating: 3,
      content: "The website Abshir built for us has increased our conversions by 40%. His expertise in both design and development is truly impressive!",
    },
    {
      name: "James Wilson",
      role: "Product Manager, InnovateLab",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      rating: 2,
      content: "Abshir's ability to understand our vision and turn it into reality is remarkable. The final product exceeded all our expectations!",
    },
  ];

  // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
          setIsAnimating(true);
          setTimeout(() => {
            setActiveIndex(prev => prev + 1 % testimonials.length)
            setIsAnimating(false)
          }, 300);
        }, 3000);
       const cleanUp = () => {
         return clearInterval(interval)
       }
       return cleanUp
    },[testimonials.length])

  const goToTestimonial = (index) => {
    setIsAnimating(true)
    setTimeout(() => {
      setActiveIndex(index)
      setIsAnimating(false)
    }, 300)
  }
  

  return (
    <section className="relative w-full pt-17 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br/ from-secondary via-third to-secondary">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-ui-color/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ui-color/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className=" text-text text-3xl sm:text-4xl  w-full font-semibold text-center drop-shadow-[0_4px_58px] drop-shadow-ui-color/40 border-b-2/ border-b-ui-color/ py-4 rounded-xl">
        <span className=" text-text-third ">
          
          <span className="bg-invert  mx-1 px-3 rounded-2xl text-invert-text drop-shadow-[0_4px_38px] drop-shadow-ui-color/20">
            Testmonial
          </span>
          From  <br className="hidden sm:flex" /> 
          Client Reviews
        </span>
      </h1>
          <p className="text-text-third text-lg max-w-2xl mx-auto">
            See what our clients have to say about working with us.
          </p>
        </div>

        {/* Testimonial Cards */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => {
            const Icon = StarIcon
            return (
              <div
                key={index}
                className={`relative group bg-third/ border border-ui-color/15 rounded-3xl p-6  transition-all duration-500 scale-90 ${
                  index === activeIndex
                    ? 'scale-105 rotate-2  shadow-2xl bg-ui-color'
                    : 'scale-95   opacity-80 hover:opacity-100'
                }`}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20">
                  <QuoteIcon className="size-5 text-invert" />
                </div>

                {/* Profile Image */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    className="w-14 h-14 bg-secondary rounded-full object-cover border-2 border-ui-color/ group-hover:border-ui-color/30 transition-all"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div>
                    <h3 className="text-text font-semibold">{testimonial.name}</h3>
                    <p className="text-text-secondary text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating */}
                {/* <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div> */}
                <div className='flex gap-2 mb-4 ml-2'>
                  {[...Array(testimonial.rating)].map((_,index) => (
                    <Star key={index} className='size-4.5  bg-invert/ text-invert rounded-3xl fill-invert  '/>
                  ))}
                </div>

                {/* Content */}
                <p className="text-text-secondary text leading-relaxed mb-4">
                  {testimonial.content}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-ui-color/5 to-ui-color/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )
          })}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-ui-color w-5'
                  : 'bg-secondary cursor-pointer hover:bg-ui-color/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
       {/* <div className="mt-16 flex flex-col sm:flex-row justify-center gap-8 sm:gap-12">
        <div className="text-center">
          <h3 className="text-4xl font-bold text-ui-color mb-2">50+</h3>
          <p className="text-text-third">Happy Clients</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold text-ui-color mb-2">100%</h3>
          <p className="text-text-third">Satisfaction Rate</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold text-ui-color mb-2">5★</h3>
          <p className="text-text-third">Average Rating</p>
        </div>
      </div> */}
      </div>
    </section>
  )
}

export default Testimonials