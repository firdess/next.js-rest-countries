import React from 'react'
import Input from '../input'
import Filter from '../filter'

export default function SearchArea({setSearchQuery,searchQuery,selectOption,setSelectOption}) {
  return (
    <div className='py-[40px] w-full flex flex-col justify-between md:flex-row gap-10'>
      <Input  searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Filter selectOption={selectOption} setSelectOption={setSelectOption} />
    </div>
  )
}
