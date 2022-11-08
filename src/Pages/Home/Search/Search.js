import React from 'react';


const Search = () => {

    const handleSearchOnChange = event => {
        const searchString = event.target.value;

    };

    return (
        <div className="bg-base-200 py-32">
            <div className="text-center flex flex-col">
                <h1 className="text-5xl font-bold">Search Your Event Here</h1>
                <div className='flex justify-center align-middle my-16 mt-20'>
                    <input onChange={handleSearchOnChange} type="text" name='search-bar' placeholder="Search " className="input input-bordered w-8/12 text-2xl px-10 h-16 " />
                    <button type="submit" name="search-button" className='btn btn-lg btn-primary ml-3 px-10 text-lg'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Search;