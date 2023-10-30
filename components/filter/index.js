import React from 'react'
export default function Filter({ selectOption, setSelectOption }) {
  return (
    <div className='max-w-[300px] sm:min-w-[200px]  flex flex-col gap-2 text-very-dark-blue-light-text text-[14px]'>
      <select
        name="select"
        id="select"
        className="select rounded-md px-4 py-2 text-sm dark:bg-dark-blue-element dark:text-white bg-white text-very-dark-blue-light-text text-semibold dark:border-none border shadow-very-dark-blue-bg"
        value={selectOption}
        onChange={(e)=>setSelectOption(e.target.value)}
      >
        <option value="All">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Americas">Americas</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}
