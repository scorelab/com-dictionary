import React from 'react';
import { Row, Col} from 'antd';
import SelectLang from "./SelectLang"
import SearchText from "./SearchText"



function WordSearch()
{
    return(
    <div className="search_word">
      <Row>
        <Col xs={2} sm={4} md={8} lg={10} xl={12}></Col>
        <Col xs={2} sm={4} md={8} lg={10} xl={12} style={{textAlign:"right"}}>
        <SelectLang />
        <SearchText />
        </Col>
      </Row>

    </div>
    )
}


export default WordSearch