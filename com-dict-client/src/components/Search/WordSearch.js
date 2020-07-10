import React from "react";
import { Row, Col } from "antd";
import SelectLang from "./SelectLang";
import SearchText from "./SearchText";

function WordSearch() {
  return (
    <div className="search_word">
      <Row>
        <Col span={12}></Col>
        <Col
          span={6}
          style={{ textAlign: "right" }}
        >
          <SelectLang />
          </Col>
          <Col
          span={6}
          style={{ textAlign: "right" }}
        >
          <SearchText />
        </Col>
      </Row>
    </div>
  );
}

export default WordSearch;
