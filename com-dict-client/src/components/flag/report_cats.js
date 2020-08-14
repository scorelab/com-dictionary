import React from "react";
import {
  Radio,
  // Input,
  Typography,
  Button,
  Row,
  Col,
} from "antd";

class Report_word extends React.Component {
  state = {
    value: 1,
  };

  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const radioStyle = {
      display: "block",
      // height: "6vmin",
      lineHeight: "5vmin"
    };
    const { value } = this.state;

    const { Text } = Typography;
    return (
      <div>
        <Row style={{ backgroundColor: "#f2f2f2" }}>
        <Col xl={4} lg={4} md={0} sm={0} xs={0}></Col>
        <Col xl={18} lg={18} md={24} sm={24} xs={24}>
          <Radio.Group
            onChange={this.onChange}
            value={value}
            size="medium"
            style={{ alignContent: "center", fontWeight: "bold"}}
          >
            <Radio style={radioStyle} value={1}>
              <Text style={{ fontSize: "large",display:'inline'}}>
                Are inside jokes with no context
              </Text>
            </Radio>
            <Radio style={radioStyle} value={2}>
              <Text style={{ fontSize: "large",display:'inline'}}>
                Include terms that don’t actually seem real
              </Text>
            </Radio>
            <Radio style={radioStyle} value={3}>
              <Text style={{ fontSize: "large",display:'inline'}}>
                Include full names or other personal information
              </Text>
            </Radio>
            <Radio style={radioStyle} value={4}>
              <Text style={{ fontSize: "large",display:'inline'}}>
                Hate speech, bullying or statements meant to
                discriminate others
              </Text>
            </Radio>
            <Radio style={radioStyle} value={5}>
              <Text style={{ fontSize: "large",display:'inline'}}>
                Go against any of our other content guidelines
              </Text>
            </Radio>
          </Radio.Group>
          </Col>
        </Row>
        <Row>
          <Col span={12}></Col>
          <Col span={12}>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
            
              style={{
                backgroundColor: "#df815a",
                border: "none",
                width: "80%",
                fontSize: "2vmin",
                fontWeight: "bold",
              }}
            >
              Submit your report here... Our team will look into it
            </Button>
            </Col>
        </Row>
      </div>
    );
  }
}

export default Report_word;
