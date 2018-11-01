import React from 'react';

const SearchBox = ({searchField, searchChange }) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                id='searchfield'
                placeholder='search robots'
                onChange={searchChange}
            />
            <label className='dn' for='searchfield'>Search Robots</label>
        </div>
    );
};

export default SearchBox;