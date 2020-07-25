import React from "react";
import { Input, Row, Col, Typography, List, Radio } from "antd";
import report from "../../images/pablo-word-remove.png";
import Word from "../WordHome/word";
import Report_word from "../Flag/report_cats";

const { Text,Title } = Typography;

const data = [
  "Are inside jokes with no context",
  "Include terms that don’t actually seem real",
  "Include full names or other personal information",
  "Include hate speech, bullying, or any other statements meant to discriminate or incite violence against others",
  "Go against any of our other content guidelines",
];

function FlagWord() {
  return (
    <div style={{backgroundColor:'white'}}> 
    <Row style={{paddingBottom:"3vmin"}}>
      <Col span={4}></Col>
      <Col span={16} style={{textAlign:'center'}}>
      <Text style={{fontSize:'8vmin',color:'#639bb4',fontWeight:'bold'}}>Report inappropriate definitions</Text>
      </Col>
      <Col span={4}></Col>
    </Row>
      <Row style={{paddingTop:'3vmin',backgroundColor:'#639bb4'}}>
        <Col span={2}></Col>
        <Col span={10}>
          <Text style={{fontSize:'6vmin',color:'white',fontWeight:'bold'}}>You can report words that....</Text>
        </Col>
        <Col span={1}></Col>
        <Row align='middle'>
          <Col span={2}></Col>
          <Col span={14}>
            <List
              style={{ float: "left", backgroundColor:'#f2f2f2',padding:'2vmin'}}
              // size="large"
              dataSource={data}
              renderItem={(item) => (
                <List.Item style={{ fontSize: "large" }}>{item}</List.Item>
              )}
            />
          </Col>
          <Col span={8}>
            <img
              class="remove_anime"
              style={{ maxWidth: "100%", maxHeight:'100vh'}}
              src={report}
            />
          </Col>
        </Row>
      </Row>
      <Row>
        <Col></Col>
      </Row>
      <Row style={{marginTop:'5vmin',padding:'3vmin',backgroundColor:'#f2f2f2'}}>
      <Col span={2}></Col>
        <Col span={22}>
          <Text style={{fontSize:'6vmin',color:'#639bb4',fontWeight:'bold'}}>You chose to report....</Text>
        </Col>
        <Col span={24}>
          <Word />
        </Col>
      </Row>

      <Row style={{padding:'3vmin',backgroundColor:'#f2f2f2'}}>
        <Col span={2}></Col>
        <Col span={20}>
          <Text style={{fontSize:'6vmin',color:'#639bb4',fontWeight:'bold'}}>Why should this conent be removed?</Text>
        </Col>
      </Row>
      <Row style={{padding:'3vmin',backgroundColor:'#f2f2f2'}}>
        <Col span={2}></Col>
        <Col>
        <Report_word />
        </Col>

      </Row>

    </div>
  );
}

export default FlagWord;
