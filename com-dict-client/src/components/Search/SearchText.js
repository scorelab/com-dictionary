import React from "react";
import { Input } from "antd";
import { useHistory } from "react-router-dom";

const { Search } = Input;

function SearchText(props) {
  const history = useHistory();
  const { keyWord, handleSearch, setKeyWord } = props;
  return (
    <Search
      style={{ background: "transparent" }}
      type="text"
      placeholder="Search for word"
      // width ="500px"
      required={true}
      size="large"
      onSearch={(value) => history.push(`/search/${value}`)}
      className="search_style"
      onChange={setKeyWord}
    />
  );
}

export default SearchText;
