import React, { useState } from 'react';
import { FaSistrix } from "react-icons/fa";
import '../Home.css';
import '../Carousel/BannerItem.css';
import SearchItem from './SearchItem';

const Search = () => {
    const [searched, setSearched] = useState([]);

    const handleSearchOnChange = event => {
        const searchString = event.target.value;
        const url = `https://shutter-up-server.vercel.app/search?string=${searchString}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSearched(data);
                // console.log(data)
            });



    };

    return (
        <div className="bg-base-200 py-32">
            <div className="text-center flex flex-col">
                <h1 className="text-5xl font-bold font-xl-for-sm">Search Your Event Here</h1>
                <div className='flex justify-center align-middle my-16 mt-20 mx-6 '>
                    <input onChange={handleSearchOnChange} type="text" name='search-bar' placeholder='Search events' className=" search-bar input input-bordered w-8/12 text-2xl px-10 pl-14 h-16" title='Search will only work on full words' />
                    {/* <FaSistrix className='search-icon text-3xl static left-14 top-5 text-gray-400'></FaSistrix> */}
                    <button type="submit" name="search-button" className='search-button btn btn-lg btn-primary ml-3 px-10 text-lg'>Search</button>
                </div>
                <div className="hero bg-base-200 ">
                    <div className="hero-content text-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            searched.map(sr => <SearchItem
                                key={sr._id}
                                sr={sr}></SearchItem>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;