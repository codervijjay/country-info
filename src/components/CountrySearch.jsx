import React, { useState } from 'react'
import axios from 'axios'
import CountryInfo from './CountryInfo';


const CountrySearch = () => {

  const [countryName, setCountryName] = useState('');
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!countryName) {
      setError('please a country name');
      setCountryData(null);
      return;
    }

    const finalUrl = `https://restcountries.com/v3.1/name/${countryName.trim()}?fullText=true`;

    try {
      const response = await axios.get(finalUrl);
      const data = response.data;

      if (data.message === 'Not Found') {
        setError('country information not found');
        setCountryData(null);
      } else if (data.length === 0) {
        setError('please enter a valid country name');
        setCountryData(null);
      } else{
        setError('');
        setCountryData(data[0]);
      }

    } catch (error) {
      setError('error occured when fetching coutnry data ');
      setCountryData(null);
    }

  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white shadow-md rounded-lg p-8 w-full max-w-md'>
        <input type="text" className='w-full p-2 border border-gray-300 rounded mb-4' placeholder='enter country name' value={countryName} onChange={(e) => setCountryName(e.target.value)} />
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors" onClick={handleSearch}>Search</button>
      </div>
      <div className='mt-6'>
        {error&&<h3 className='text-red-500'>{error}</h3>}
        {countryData && <CountryInfo countryData={countryData} />}
      </div>
    </div>
  )
}

export default CountrySearch