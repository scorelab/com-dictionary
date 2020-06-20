import React from 'react';
import { Row, Col, Card, Divider, Typography} from 'antd';

const { Title } = Typography;

function DayNew()
{
    return(
        <div>
        <Card className="day">
            <Row flex>
                <Col span={4} flex>
                    <Title level={3} style={{color:"#1AB8BC"}}>Word of the Day 
                    </Title>
                </Col>
                <Col span={1} flex>
                    <Divider type="vertical" style={{backgroundColor : "black", height:"8vmin"}} />
                </Col>
                <Col span={17} flex > 
                    <Row >
                    <Title level={4}>Word</Title>
                    </Row>
                    <Row>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "</p>
                    </Row>
                </Col>
            </Row>
        </Card>


        <Card className="new_card" bordered
        title="New Words"
        style={{backgroundColor: '#FFFFFF ', border: 0 }}
        headStyle={{backgroundColor: '#DCD9D9', fontSize:"x-large", color:"#4FD5DE", border: 0, textAlign:"center" }}
        bodyStyle={{backgroundColor: '#F0F0F0', border: 0}}
        >
            <Row gutter={[16, 16]}>
                <Col span={12}>Word 1</Col>
                <Col span={12}>Word 2</Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={12}>Word 3</Col>
                <Col span={12}>Word 4</Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={12}>Word 5</Col>
                <Col span={12}>Word 6</Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={12}>Word 7</Col>
                <Col span={12}>Word 8</Col>
            </Row>
        </Card>
        </div>


    
    )
}

export default DayNew