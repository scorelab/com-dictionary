import React, { useState } from "react";
import { Row, Col } from "antd";
import SelectLang from "./SelectLang";
import SearchText from "./SearchText";
import { useFirestoreConnect } from "react-redux-firebase";
import { useHistory } from "react-router-dom";

function WordSearch() {
  const [keyWord, setKeyWord] = useState("");
  const history = useHistory();

  const handleSearch = (value) => {
    console.log(value);
    history.push(`/search/${value}`);
  };

  return (
    <div className="search_word">
      <Row>
        <Col span={12}></Col>
        <Col span={6} style={{ textAlign: "right" }}>
          <SelectLang />
        </Col>
        <Col span={6} style={{ textAlign: "right" }}>
          <SearchText
            handleSearch={handleSearch}
            keyWord={keyWord}
            setKeyWord={(val) => setKeyWord(val.target.value)}
          />
        </Col>
      </Row>
    </div>
  );
}

export default WordSearch;
