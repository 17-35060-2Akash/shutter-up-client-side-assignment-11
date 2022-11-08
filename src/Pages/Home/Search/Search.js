import React, { useState } from 'react';
import { FaSistrix } from "react-icons/fa";
import '../Home.css';

const Search = () => {
    const [searchedProducts, setSearchedProducts] = useState([]);

    const handleSearchOnChange = event => {
        const searchString = event.target.value;
        const url = `http://localhost:5000/search?string=${searchString}`;
        /*   fetch(url)
              .then(res => res.json())
              .then(data => {
                  setSearchedProducts(data);
                  console.log(data)
              })
   */


    };

    return (
        <div className="bg-base-200 py-32">
            <div className="text-center flex flex-col">
                <h1 className="text-5xl font-bold">Search Your Event Here</h1>
                <div className='flex justify-center align-middle my-16 mt-20 mx-6 relative'>
                    {/* <FaSistrix className='search-icon text-3xl absolute left-14 top-5 text-gray-400'></FaSistrix> */}
                    <input onChange={handleSearchOnChange} type="text" name='search-bar' placeholder='Search' className="input input-bordered w-8/12 text-2xl px-10 pl-14 h-16" />
                    <button type="submit" name="search-button" className='btn btn-lg btn-primary ml-3 px-10 text-lg'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Search;