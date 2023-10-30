
import React from 'react'

export default function CountryCard({ country }) {

  return (
    <>
      <div className='w-full rounded-t-md h-[250px] md:h-[150px] bg-white  '>
        <img className='w-full h-full rounded-t-md  shadow-very-dark-blue-light-text object-cover ' src={country.flags.png} />
      </div>
      <div className='px-[20px] pb-[30px] pt-[20px] bg-white text-very-dark-blue-light-text dark:bg-dark-blue-element dark:text-white ' >
        <h3 className='font-bold text-base pb-[20px]'>
          {country.name.common}
        </h3>
        <div className='flex flex-col gap-1'>
          <span><b className='font-semibold'>Population :</b>{country.population}</span>
          <span><b className='font-semibold'>Region :</b>{country.region}</span>
          <span><b className='font-semibold'>Capital :</b>{country.capital}</span>

        </div>
      </div>

    </>
  )
}
