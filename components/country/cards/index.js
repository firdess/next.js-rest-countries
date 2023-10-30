'use client'
import React, { useEffect, useState } from 'react'
import CountryCard from '../card'
import Link from 'next/link';
import SearchArea from '@/components/search-area';
import Loading from '@/components/loading';


const API_URL = 'https://restcountries.com/v3.1/all'

export default function CountryCards() {
  const [countries, setCountries] = useState([]);
  const [visible, setVisible] = useState(8);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectOption, setSelectOption] = useState("All");
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [filteredCountries, setFilteredCountries] = useState([])

  const fetchData = async () => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) {
        throw new Error('Veri alınamadı')
      }
      const data = await res.json();
      setCountries(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  const filterLoadMore = () => {
  
    const filtered = countries
      .filter(country => {
        if (selectOption === 'All') {
          return true;
        }
        return country.region === selectOption
      })
      .filter(country =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      )

    if (filtered.length <= 8) {
      setShowLoadMore(false);
    } else {
      setShowLoadMore(true);
    }
    
    setFilteredCountries(filtered);
  
  }
  const loadMore = () => {
    
    const remainingCountries = filteredCountries.slice(visible);
    if (remainingCountries.length > 8) {
      setVisible(visible + 8);
    } else {
      // Eğer 8'den az veya hiç ülke kalmadıysa Load More'yu kapat
      setShowLoadMore(false);
    }
  }

  useEffect(() => {
    filterLoadMore()
  }, [searchQuery, selectOption,countries])



  return (
    <div>
      <SearchArea searchQuery={searchQuery} setSearchQuery={setSearchQuery} selectOption={selectOption} setSelectOption={setSelectOption} />
      {
        loading ? <Loading />
          : (
            <>
              <div className='text-very-dark-blue-light-text  grid grid-cols-[repeat(auto-fit,minmax(310px,1fr))] pb-10 md:grid-cols-[repeat(auto-fit,minmax(270px,1fr))] grid-flow-row auto-rows-[440px] md:auto-rows-[360px] gap-[60px]'>
                {filteredCountries
                  .slice(0, visible).map(country => {
                    const id = country.cca3;
                    return <Link
                      href={`/country/[id]`}
                      as={`/country/${id}`}
                      key={id}
                      className='bg-white cursor-pointer max-w-[310px] dark:bg-dark-blue-element dark:text-white shadow-dark-gray-light-input rounded-md w-full h-full '
                    >
                      <CountryCard country={country} />
                    </Link>
                  })
                }
              </div>
              {
                showLoadMore && (
                  <div className='text-center py-5'>
                    <button onClick={loadMore} className='dark:bg-dark-blue-element bg-white text-dark-blue-element dark:border-none border border-solid border-dark-gray-light-input dark:text-white px-5 py-2.5 rounded-md cursor-pointer'>Load more</button>
                  </div>
                )
              }
              {
                !showLoadMore && filteredCountries.length === 0 && (
                  <div className='text-very-dark-blue-light-text dark:text-white'>Country Not Found!</div>
                )
              }

            </>
          )
      }
    </div>
  )
}
