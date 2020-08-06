import React from "react";
import { Row , Col, Card, Typography } from 'antd';
import sports from "../../images/pablo-sports.png";
import music from "../../images/pablo-music.png";
import work from "../../images/pablo-work.png";

const { Title } = Typography;

function CatView()
{
    return(
    <>
    <Row>
    <Col span={24}>
    <div className="cat_title" style={{textAlign:'center',backgroundColor:'#639bb4'}}>
      <Title level={1} style={{ color: "white" }}>Sports</Title>
    </div>
    </Col>
    </Row>
    <Row>
    <Col span={6}>
            <img
              style={{ maxWidth: "100%",maxHeight:'auto'}}
              src={sports}
            />
        </Col>
        <Col span={17}>
        <Card borderd style={{textAlign:"center",backgroundColor:"#639bb4",color:'white',fontSize:'2.5vmin'}}>
            <Row>
            <Col span={6}>
                word(1)
            </Col>
            <Col span={6}>
                word(2)
            </Col>
            <Col span={6}>
                word(3)
            </Col>
            <Col span={6}>
                word(4)
            </Col>
            </Row>
        </Card>
        </Col>
    </Row>

    <Row style={{paddingTop:"2vmin"}}>
    <Col span={24}>
    <div className="cat_title" style={{textAlign:'center',backgroundColor:'#df815a'}}>
      <Title level={1} style={{ color: "white" }}>Entertainment</Title>
    </div>
    </Col>
    </Row>
    <Row>
        <Col span={1}></Col>
        <Col span={17}>
        <Card style={{textAlign:"center",backgroundColor:'#df815a',color:'white',fontSize:'2.5vmin'}}>
            <Row>
            <Col span={6}>
                word(1)
            </Col>
            <Col span={6}>
                word(2)
            </Col>
            <Col span={6}>
                word(3)
            </Col>
            <Col span={6}>
                word(4)
            </Col>
            </Row>
        </Card>
        </Col>
        <Col span={6}>
            <img
              style={{ maxWidth: "100%"}}
              src={music}
            />
        </Col>
    </Row>
    

    <Row style={{paddingTop:"2vmin"}}>
    <Col span={24}>
    <div className="cat_title" style={{textAlign:'center',backgroundColor:'#7dbf94'}}>
      <Title level={1} style={{ color: "white" }}>Work</Title>
    </div>
    </Col>
    </Row>
    <Row>
    <Col span={6}>
            <img
              style={{ maxWidth: "100%"}}
              src={work}
            />
        </Col>

        <Col span={1}></Col>
        <Col span={17}>
        <Card style={{textAlign:"center",backgroundColor:'#7dbf94',color:'white',fontSize:'2.5vmin'}}>
            <Row>
            <Col span={6}>
                word(1)
            </Col>
            <Col span={6}>
                word(2)
            </Col>
            <Col span={6}>
                word(3)
            </Col>
            <Col span={6}>
                word(4)
            </Col>
            </Row>
        </Card>
        </Col>

    </Row>
    </>
    );
}

export default CatView;
