import React from "react";
import { Input } from "antd";

const { Search } = Input;

function SearchText() {
  return (
    <Search
    style={{background:"transparent"}}
    type="text"
    placeholder="Search for word"
      // width ="500px"
    size ="large"
      onSearch={(value) => console.log(value)}
      className="search_style"
    />
  );
}

export default SearchText;
