import React from 'react';
import { Input } from 'antd';


const { Search } = Input;

function SearchText()
{
    return(

        <Search
        placeholder="input search text"
        size ="large"
        onSearch={value => console.log(value)}
        className="search_style"
        />

    )
}


export default SearchText