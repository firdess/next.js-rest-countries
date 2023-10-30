'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

export default function Header() {

  const { theme, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(theme === 'dark')

  const switchTheme = () => {
    setDarkMode(!darkMode)
    setTheme(darkMode ? 'light' : 'dark')
  }

  useEffect(() => {
    setDarkMode(theme === 'dark')
  }, [theme])

  return (
    <div className='dark:border-none border-b shadow-dark-gray-light-input bg-white dark:bg-dark-blue-element dark:text-white text-very-dark-blue-light-text min-w-[375px]'>
      <div className='max-w-[1320px]  mx-auto py-[45px] md:py-[20px] px-[20px]  flex justify-between items-center'>
        <h3>Where in the world?</h3>
        <button onClick={switchTheme} className='flex items-center'>
          {
            darkMode ? <span ><BsSun /></span> : <span><BsMoon /></span>
          }

          <span className='pl-3 dark:text-white text-very-dark-blue-light-text'> {darkMode ? 'Light' : 'Dark'} Mode</span>
        </button>
      </div>
    </div>
  )
}
