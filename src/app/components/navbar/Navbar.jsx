'use client'

import {
  Bars3Icon,
  BellIcon,
  IdentificationIcon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from '@heroicons/react/16/solid'
import { BookAudioIcon, ContactRoundIcon, DockIcon, FileSpreadsheetIcon, Home, IdCardLanyard, MapIcon, Projector, User2Icon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Theme persistence
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) setDarkMode(saved === 'dark')
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  // Scroll detection for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu')) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  const handleToggle = () => setIsOpen(!isOpen)

  const sections = [
    {icon: Home, section: "Home" , link: "#home"},
    {icon: DockIcon, section: "Projects" , link: "#projects"},
    {icon: IdCardLanyard, section: "About" , link: "#about"},
    {icon: FileSpreadsheetIcon, section: "Skills" , link: "#skills"},
    {icon: ContactRoundIcon, section: "Contacts" , link: "#contact"},
  ]

  return (
    <div
      className={`w-full transition-all ${
        scrolled ? 'fixed top-0 left-0 z-50' : 'relative'
      }`}
    >
      <div
        className={`w-full ease-in flex items-center justify-between px-1 sm:px-10 border-2/ backdrop-blur-4xl rounded-[2px] mb-3.5 p-2 sm:p-2 transition-all  ${
          scrolled
            ? 'bg-primary/0 border-secondary/10 border-2 backdrop-blur-xl shadow-lg shadow-ui-color/5'
            : 'bg-primary'
        }`}
      >
        {/* Logo Section */}
        <div className='flex items-center gap-3'>
          <div className='size-8 bg-invert/20 rounded-xl'></div>
          <div className='w-1 h-1 bg-invert rounded-3xl'></div>
          <h1 className='text-text font-semibold flex sm:hidden md:flex lg:flex'>
            Abshir Dev.
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className='items-center gap-6 hidden sm:flex text-text'>
          {sections.map((section,i) => {
            <a
            href={`${section.link}`}
            className='font-medium cursor-pointer hover:scale-105 transition-all ease-in-out'
          >
            {section.section}
          </a>
          })}
        </div>

        {/* Right Actions */}
        <div className='flex items-center gap-2'>
          {/* Notification Bell */}
          <button
            className='p-[9.3px] cursor-pointer transition-all ease-in-out hover:scale-105 active:scale-95 bg-invert text-invert-text rounded-[20px] relative'
            aria-label='Notifications'
          >
            <BellIcon className='size-[16.5px]' />
            <span className='absolute top-1 right-1 w-2 h-2 bg-ui-color rounded-full animate-pulse' />
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className='p-[9.3px] cursor-pointer transition-all ease-in-out hover:scale-105 active:scale-95 bg-invert text-invert-text rounded-[20px]'
            aria-label='Toggle dark mode'
          >
            {!darkMode ? (
              <SunIcon className='size-[16.5px]' />
            ) : (
              <MoonIcon className='size-[16.5px]' />
            )}
          </button>

          {/* Mobile Menu Button */}
          <div className='sm:hidden relative '>
            <button
              onClick={handleToggle}
              className='p-[9.3px] flex cursor-pointer transition-all ease-in-out hover:scale-105 active:scale-95 bg-secondary text-text rounded-[20px] z-50 relative'
              aria-label='Toggle menu'
            >
              {isOpen ? <XMarkIcon className='w-5 h-5' /> : <Bars3Icon className='w-5 h-5' />}
            </button>

            {/* Fullscreen Mobile Menu */}
            {isOpen && (
              <div className='fixed  h-screen w-screen inset-0 z-40 bg-primary  flex flex-col items-start justify-start gap-6 animate-in fade-in    mt-14'>
                <div className='w-full  h-170 bg-primary  drop-shadow-[0_4px_38px]/ drop-shadow-ui-color/60 border-2/ border-ui-color/20  rounded-2xl/ rounded-lg/ flex flex-col gap-2 p-5'>
                   <h2 className='text-text font-bold text-lg border-b border-text/20 pb-2'>
                    Sections
                  </h2>
                    <p className=' text-text-secondary'>Our Mobile Freindly menu bar with user expriemental and good for healthy</p>
                  {/* Sections List */}
                  <div className='flex flex-col gap-5 mt-2 border-b-2 border-b-ui-color/10 pb-5'>
                    {sections.map((section,i) => {
                      const Icon = section.icon
                      return (
                          <a
                      href={`${section.link}`}
                      onClick={handleToggle}
                      className='flex items-center gap-5  transition-all  hover:scale-102'
                    >
                      <Icon className="text-text-third size-4.5"/>
                      <span className='text-text font-semibold text-base'> {section.section} </span>
                      <span className='ml-auto w-2 h-2 bg-ui-color rounded-full animate-pulse'></span>
                    </a>
                      )
                    })}
                  </div>

                  <div className="flex items-center gap-2">
                    <div className='size-7.5 rounded-xl bg-seconadry'></div>
                    <h4 className=' font-semibold text-text-secondary'> Language</h4>
                    <div className='w-20'></div>
                    <button className='border-2 border-ui-color/10 rounded-xl text-sm py-1 px-3.5 text-text'>EN</button>
                  </div>

                  {/* Optional Footer / Extra Features */}
                  <div className='mt-auto flex flex-col gap-2 pt-4 border-t border-text/20'>
                    {/* Theme Toggle */}
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      className={`flex items-center justify-between p-3 rounded-[20px] transition-all duration-200 ${!darkMode ? "bg-invert text-invert-text  hover:bg-invert/70" : " bg-invert text-invert-text hover:bg-white/70"}`}
                    >
                      <span className=' font-semibold'>Dark Mode</span>
                      {!darkMode ? (
                        <SunIcon className='size-5 ' />
                      ) : (
                        <MoonIcon className='size-5 ' />
                      )}
                    </button>

                    {/* Quick Action / Notification */}
                    <button className='flex items-center justify-between p-3 rounded-xl bg-primary/20 hover:bg-primary/30 transition-all duration-200'>
                      <span className='text-text font-semibold'>Notifications</span>
                      <BellIcon className='size-5 text-text relative'>
                        <span className='absolute top-0 right-0 w-2 h-2 bg-ui-color rounded-full animate-pulse'></span>
                      </BellIcon>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar