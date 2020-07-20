import React from "react";
import { Row , Col, Card } from 'antd';

function CatView()
{
    return(
    <Row>
        <Col span={2}></Col>
        <Col span={18}>
        <Card style={{textAlign:"center"}}>
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
    )
}

export default CatView;
