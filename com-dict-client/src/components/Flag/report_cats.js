import React, { useState } from "react";
import {
  Radio,
  // Input,
  Typography,
  Button,
  Row,
  Col,
} from "antd";
import { addReport } from "../../store/actions";
import { useFirestore } from "react-redux-firebase";
import moment from "moment";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const { Text } = Typography;
function ReportWord({ data, reasons }) {
  const [value, setValue] = useState(0);
  const firestore = useFirestore();
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const radioStyle = {
    display: "block",
    // height: "6vmin",
    lineHeight: "5vmin",
  };
  const handleSubmit = () => {
    let tempReport = {
      reason: reasons[value],
      createdAt: moment().format(),
      definition_id: data.id,
      uid: user.uid,
      uname: user.displayName,
    };
    addReport(tempReport)(firestore, history);
  };
  const user = useSelector((state) => state.firebase.auth);
  const history = useHistory();
  return (
    <div>
      <Row style={{ backgroundColor: "#f2f2f2" }}>
        <Col xl={4} lg={4} md={0} sm={0} xs={0}></Col>
        <Col xl={18} lg={18} md={24} sm={24} xs={24}>
          <Radio.Group
            onChange={onChange}
            value={value}
            size="medium"
            style={{ alignContent: "center", fontWeight: "bold" }}
          >
            {reasons.map((val, i) => (
              <Radio key={i} style={radioStyle} value={i}>
                <Text style={{ fontSize: "large", display: "inline" }}>
                  {val}
                </Text>
              </Radio>
            ))}
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
            onClick={handleSubmit}
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
export default ReportWord;
