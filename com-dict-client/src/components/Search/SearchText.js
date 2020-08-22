import React, { useState } from "react";
import { Input, Col } from "antd";
import { useHistory } from "react-router-dom";
import SelectLang from "./SelectLang";
import { toTitleCase } from "../../utils.js/toTitleCase";

const { Search } = Input;

function SearchText(props) {
  const history = useHistory();
  const [language, setLanguage] = useState("English");
  // keyWord, handleSearch,

  const { setKeyWord } = props;
  return (
    <>
      <Col xl={2} lg={2} md={2} sm={0} xs={0}>
        <SelectLang value={language} onChange={(value) => setLanguage(value)} />
      </Col>

      <Col xl={12} lg={12} md={12} sm={24} xs={24}>
        <Search
          style={{ background: "transparent" }}
          type="text"
          placeholder="Search for word"
          // width ="500px"
          required={true}
          size="large"
          onSearch={(value) =>
            history.push(`/search/${language}/${toTitleCase(value)}`)
          }
          className="search_style"
          onChange={setKeyWord}
        />
      </Col>
    </>
  );
}

export default SearchText;
