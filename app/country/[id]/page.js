'use client'
import Loading from '@/components/loading';
import { HiArrowLongLeft } from 'react-icons/hi2';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
const API_URL = 'https://restcountries.com/v3.1/alpha';


export default function CountryDetail({ params }) {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);


  const fetchData = async () => {
    try {
      const res = await fetch(`${API_URL}/${params.id}`);
      if (!res.ok) {
        throw new Error('Veri alınamadı');
      }
      const data = await res.json();
      setDetail(data);
      setLoading(false); // Veri alındığında yüklemeyi durdur
    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  }


  useEffect(() => {
    fetchData()
  }, [params.id])

  console.log(detail)

  return (
    <div className='w-full '>
      <div className='pt-[75px]'>
        <Link href={`/country`}
          className='border inline-flex border-solid rounded-md dark:bg-dark-blue-element dark:border-none dark:text-white text-very-dark-blue-light-text bg-white items-center gap-1 px-4 py-2 shadow-dark-gray-light-input'>
          <HiArrowLongLeft className='text-very-dark-blue-light-text dark:text-white' />
          Back</Link>
      </div>
      {
        loading ? <Loading />
          : (<div className='pt-[75px]   pb-[80px] gap-10 lg:gap-20 grid grid-cols-1 lg:grid-cols-2'>
            <div className=' w-full   h-[350px] lg:h-[400px] '>
              <img className=' max-w-[600px] min-w-[375px] w-full h-full' src={detail[0].flags.svg} />
            </div>
            <div className='py-5 '>
              <h2 className='font-bold text-2xl pb-5'>
                {detail[0]?.name?.common}
              </h2>
              <div className='flex lg:flex-row flex-col gap-10 lg:gap-20  text-very-dark-blue-light-text'>
                <div className='flex flex-col gap-2'>
                  <p>
                    <span className='subtitle'>Native Name : </span>
                    {detail[0]?.name?.nativeName[Object.keys(detail[0]?.name.nativeName)[0]].common}
                  </p>
                  <p>
                    <span className='subtitle'>Population : </span>
                    {detail[0]?.population}
                  </p>
                  <p>
                    <span className='subtitle'>Region : </span>
                    {detail[0].region}
                  </p>
                  <p>
                    <span className='subtitle'>Sub Region : </span>
                    {detail[0]?.subregion}
                  </p>
                  <p>
                    <span className='subtitle'>Capital : </span>
                    {detail[0]?.capital}
                  </p>
                </div>
                <div className='flex flex-col gap-2'>
                  <p>
                    <span className='subtitle'>Top Level Domain : </span>
                    {detail[0]?.tld}
                  </p>
                  <p>
                    <span className='subtitle'>Currencies : </span>
                    {
                      detail[0]?.currencies[Object.keys(detail[0]?.currencies)[0]].name
                    }
                  </p>
                  <p >
                    <span className='subtitle'>Languages : </span>
                    {
                      Object.keys(detail[0]?.languages).map((lang, index, array) => {
                        return <span key={lang}>
                          {detail[0]?.languages[lang]}
                          {index < array.length - 1 ? ',' : ''}
                        </span>
                      })
                    }
                  </p>

                </div>
              </div>
              <div className='pt-10'>
                <div>
                  <span className='subtitle'>Border Countries :</span>

                  {
                    detail[0]?.borders?.length > 0 ? (
                      <div className='mt-5 w-full flex gap-2 flex-wrap '>
                        {detail[0]?.borders?.map((border, index) => {
                          return <Link href={`/country/${border}`} className='px-3 py-1 text-very-dark-blue-light-text dark:text-white bg-white  dark:bg-dark-blue-element rounded-sm inline dark:border-none border border-solid text-sm  ' key={index}>
                            {border ? border : 'Not border!'}
                          </Link>
                        })}
                      </div>
                    )
                      : <span className='font-semibold text-very-dark-blue-light-text dark:text-white'> No Border Country!</span>
                  }

                </div>
              </div>
            </div>
          </div>)
      }


    </div>
  )
}
