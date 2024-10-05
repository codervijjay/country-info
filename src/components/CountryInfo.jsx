import React from 'react';

function CountryInfo({ countryData }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
            <img src={countryData.flags.svg} alt="Flag" className="w-32 h-20 object-cover mb-4" />
            <h2 className="text-2xl font-bold mb-4">{countryData.name.common}</h2>

            <div className="mb-4">
                <h4 className="font-semibold">Capital:</h4>
                <span>{countryData.capital[0]}</span>
            </div>

            <div className="mb-4">
                <h4 className="font-semibold">Continent:</h4>
                <span>{countryData.continents[0]}</span>
            </div>

            <div className="mb-4">
                <h4 className="font-semibold">Population:</h4>
                <span>{countryData.population}</span>
            </div>

            <div className="mb-4">
                <h4 className="font-semibold">Currency:</h4>
                <span>
                    {countryData.currencies[Object.keys(countryData.currencies)[0]].name} -{' '}
                    {Object.keys(countryData.currencies)[0]}
                </span>
            </div>

            <div className="mb-4">
                <h4 className="font-semibold">Common Languages:</h4>
                <span>{Object.values(countryData.languages).join(', ')}</span>
            </div>

            <div className="mb-4">
                <h4 className="font-semibold">Borders:</h4>
                <span>{countryData.borders ? countryData.borders.join(', ') : 'NAN'}</span>
            </div>

            <div className="mb-4">
                <h4 className="font-semibold">Area:</h4>
                <span>{countryData.area} km²</span>
            </div>

            <div className="mb-4">
                <h4 className="font-semibold">Calling Code:</h4>
                <span>{countryData.idd.root}{countryData.idd.suffixes[0]}</span>
            </div>

            <div className="mb-4">
                <h4 className="font-semibold">Capital Coordinates:</h4>
                <span>{countryData.capitalInfo.latlng.join(', ')}</span>
            </div>

            <div className="mb-4">
                <h4 className="font-semibold">Time Zones:</h4>
                <span>{countryData.timezones.join(', ')}</span>
            </div>
        </div>
    );
}

export default CountryInfo;
