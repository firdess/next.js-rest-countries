import React from 'react'
import { BiSearch } from 'react-icons/bi'

export default function Input({ setSearchQuery, searchQuery }) {


  return (
    <div className='text-[14px] ]'>
      <label className='relative rounded-md '>
        <span className='absolute left-[30px] top-[2px] '><BiSearch className='text-dark-gray-light-input' /></span>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='px-[50px] py-3 w-[100%] min-w-[300px] bg-white dark:bg-dark-blue-element dark:text-white text-dark-gray-light-input max-w-[680px] md:min-w-[480px]' placeholder='Search for a country...' />
      </label>
    </div>
  )
}
