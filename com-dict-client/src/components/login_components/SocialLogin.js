import React from 'react';
import { Typography, Button , Row, Col } from 'antd';
import { FacebookFilled, TwitterOutlined, GoogleOutlined} from '@ant-design/icons';

const{Text} = Typography;

function SocialLogin()
{
    return(
    <div>
        <Row gutter={[16, 16]}>
            <Col span={24} style={{textAlign:"center"}}>
                <Text strong>Login using your social media account</Text>
            </Col>
        </Row>

        <Row gutter={[16, 16]}>
            <Col span={8} style={{textAlign:"center"}}>
                <Button className="social_btn" style={{backgroundColor:"#0284E1"}} icon={<FacebookFilled />} size='large' >Facebook</Button>
            </Col>
            <Col span={8} style={{textAlign:"center"}}>
                <Button className="social_btn" style={{backgroundColor:"#64CFF6"}} icon={<TwitterOutlined />} size='large' >Twitter</Button>
            </Col>
            <Col span={8} style={{textAlign:"center"}}>
                <Button className="social_btn" style={{backgroundColor:"#F4414B"}} icon={<GoogleOutlined />} size='large' >Google</Button>
            </Col>
        </Row>
    </div>

    )
}



export default SocialLogin