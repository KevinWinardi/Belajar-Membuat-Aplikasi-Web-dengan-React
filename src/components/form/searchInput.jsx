import React from 'react';

function SearchInput({ search, onSearchChangeEventHandler }) {
    return (
        <input
            type="text"
            value={search}
            onChange={onSearchChangeEventHandler}
        />
    );
}

export default SearchInput;
