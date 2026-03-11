'use client'
import {
  DocumentTextIcon,
  EnvelopeIcon,
  FaceSmileIcon,
  FireIcon,
  ForwardIcon,
  PresentationChartBarIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/16/solid'
import React from 'react'

const Line = () => {
  const features = [
    { name: 'Simple', icon: FaceSmileIcon },
    { name: 'Secure', icon: ShieldCheckIcon },
    { name: 'Fast', icon: FireIcon },
    { name: 'Creative', icon: SparklesIcon },
    { name: 'Well Designed', icon: DocumentTextIcon },
    { name: 'Scalable', icon: PresentationChartBarIcon },
    { name: 'Reliable', icon: EnvelopeIcon },
  ]

  return (
    <div className='relative w-170 overflow-hidden bg-primary py-8'>
      {/* Gradient Edges for Transparency Effect */}
      <div className='absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-primary to-transparent z-10' />
      <div className='absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-primary to-transparent z-10' />

      {/* Border Line */}
      <div className='absolute top-0 left-0 w-full border-b-2 border-b-third/30' />

      {/* Marquee Container */}
      <div className='flex animate-marquee gap-10 items-center whitespace-nowrap'>
        {/* Duplicate content for seamless loop */}
        {[...features, ...features, ...features].map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className='flex items-center gap-3 group cursor-pointer'
            >
              <h1 className='text-text font-semibold  group-hover:text-ui-color transition-colors'>
                {feature.name}
              </h1>
              <Icon className='size-5 text-text group-hover:text-ui-color transition-colors' />
            </div>
          )
        })}
      </div>

      {/* Pulse Animation for Icons */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default Line