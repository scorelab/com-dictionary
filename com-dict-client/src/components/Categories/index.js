import React, { useState, useEffect } from "react";
import { Row, Col, Card, Typography } from "antd";
import sports from "../../images/pablo-sports.png";
import music from "../../images/pablo-music.png";
import work from "../../images/pablo-work.png";
import food from "../../images/pablo-food.png";
import religion from "../../images/pablo-religion.png";
import internet from "../../images/pablo-internet.png";
import college from "../../images/pablo-school.png";
import { useFirestore } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import { toTitleCase } from "../../utils.js/toTitleCase";
const { Title } = Typography;

function CatView() {
  const firestore = useFirestore();
  const [cats, setCats] = useState({ Food: [] });
  const history = useHistory();

  useEffect(() => {
    firestore
      .collection("headTerms")
      .limit(50)
      .onSnapshot(
        (querySnapshot) => {
          const defs = querySnapshot.docs.map((doc) => {
            return doc.data();
          });
          console.log(defs);
          let groupedItems = defs.reduce(function (r, a) {
            r[a.category] = r[a.category] || [];
            r[a.category].push(a);
            return r;
          }, Object.create(null));
          console.log(groupedItems);
          setCats(groupedItems);
        },
        (err) => {
          console.log(err);
        }
      );

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Row>
        <Col span={24}>
          <div
            className="cat_title"
            style={{ textAlign: "center", backgroundColor: "#639bb4" }}
          >
            <Title level={1} style={{ color: "white" }}>
              Sports
            </Title>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <img
            alt="1"
            style={{ maxWidth: "100%", maxHeight: "auto" }}
            src={sports}
          />
        </Col>
        <Col span={17}>
          <Card
            borderd
            style={{
              textAlign: "center",
              backgroundColor: "#639bb4",
              color: "white",
              fontSize: "2.5vmin",
            }}
          >
            <Row>
              {cats["Sports"] &&
                cats["Sports"].map((val, i) => (
                  <Col key={i} span={6}>
                    <Typography.Link
                      style={{ color: "white" }}
                      onClick={() =>
                        history.push(
                          `/search/English/${toTitleCase(val.head_term)}`
                        )
                      }
                    >
                      {val.head_term}
                    </Typography.Link>
                  </Col>
                ))}
            </Row>
          </Card>
        </Col>
      </Row>

      <Row style={{ paddingTop: "2vmin" }}>
        <Col span={24}>
          <div
            className="cat_title"
            style={{ textAlign: "center", backgroundColor: "#df815a" }}
          >
            <Title level={1} style={{ color: "white" }}>
              Internet
            </Title>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={1}></Col>
        <Col span={17}>
          <Card
            style={{
              textAlign: "center",
              backgroundColor: "#df815a",
              color: "white",
              fontSize: "2.5vmin",
            }}
          >
            <Row>
              {cats["Internet"] &&
                cats["Internet"].map((val, i) => (
                  <Col key={i} span={6}>
                    <Typography.Link
                      style={{ color: "white" }}
                      onClick={() =>
                        history.push(
                          `/search/English/${toTitleCase(val.head_term)}`
                        )
                      }
                    >
                      {val.head_term}
                    </Typography.Link>
                  </Col>
                ))}
            </Row>
          </Card>
        </Col>
        <Col span={6}>
          <img alt="1" style={{ maxWidth: "100%" }} src={internet} />
        </Col>
      </Row>

      <Row style={{ paddingTop: "2vmin" }}>
        <Col span={24}>
          <div
            className="cat_title"
            style={{ textAlign: "center", backgroundColor: "#7dbf94" }}
          >
            <Title level={1} style={{ color: "white" }}>
              Food
            </Title>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <img alt="1" style={{ maxWidth: "100%" }} src={food} />
        </Col>

        <Col span={1}></Col>
        <Col span={17}>
          <Card
            style={{
              textAlign: "center",
              backgroundColor: "#7dbf94",
              color: "white",
              fontSize: "2.5vmin",
            }}
          >
            <Row>
              {cats["Food"] &&
                cats["Food"].map((val, i) => (
                  <Col key={i} span={6}>
                    <Typography.Link
                      style={{ color: "white" }}
                      onClick={() =>
                        history.push(
                          `/search/English/${toTitleCase(val.head_term)}`
                        )
                      }
                    >
                      {val.head_term}
                    </Typography.Link>
                  </Col>
                ))}
            </Row>
          </Card>
        </Col>
      </Row>
      <Row style={{ paddingTop: "2vmin" }}>
        <Col span={24}>
          <div
            className="cat_title"
            style={{ textAlign: "center", backgroundColor: "#639bb4" }}
          >
            <Title level={1} style={{ color: "white" }}>
              Work
            </Title>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={1}></Col>
        <Col span={17}>
          <Card
            style={{
              textAlign: "center",
              backgroundColor: "#639bb4",
              color: "white",
              fontSize: "2.5vmin",
            }}
          >
            <Row>
              {cats["Work"] &&
                cats["Work"].map((val, i) => (
                  <Col key={i} span={6}>
                    <Typography.Link
                      style={{ color: "white" }}
                      onClick={() =>
                        history.push(
                          `/search/English/${toTitleCase(val.head_term)}`
                        )
                      }
                    >
                      {val.head_term}
                    </Typography.Link>
                  </Col>
                ))}
            </Row>
          </Card>
        </Col>
        <Col span={6}>
          <img alt="1" style={{ maxWidth: "100%" }} src={work} />
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <div
            className="cat_title"
            style={{ textAlign: "center", backgroundColor: "#df815a" }}
          >
            <Title level={1} style={{ color: "white" }}>
              Religion
            </Title>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={1}></Col>
        <Col span={6}>
          <img
            alt="1"
            style={{ maxWidth: "100%", maxHeight: "auto" }}
            src={religion}
          />
        </Col>
        <Col span={17}>
          <Card
            borderd
            style={{
              textAlign: "center",
              backgroundColor: "#df815a",
              color: "white",
              fontSize: "2.5vmin",
            }}
          >
            <Row>
              {cats["Religion"] &&
                cats["Religion"].map((val, i) => (
                  <Col key={i} span={6}>
                    <Typography.Link
                      style={{ color: "white" }}
                      onClick={() =>
                        history.push(
                          `/search/English/${toTitleCase(val.head_term)}`
                        )
                      }
                    >
                      {val.head_term}
                    </Typography.Link>
                  </Col>
                ))}
            </Row>
          </Card>
        </Col>
      </Row>

      <Row style={{ paddingTop: "2vmin" }}>
        <Col span={24}>
          <div
            className="cat_title"
            style={{ textAlign: "center", backgroundColor: "#7dbf94" }}
          >
            <Title level={1} style={{ color: "white" }}>
              Music
            </Title>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={1}></Col>
        <Col span={17}>
          <Card
            style={{
              textAlign: "center",
              backgroundColor: "#7dbf94",
              color: "white",
              fontSize: "2.5vmin",
            }}
          >
            <Row>
              {cats["Music"] &&
                cats["Music"].map((val, i) => (
                  <Col key={i} span={6}>
                    <Typography.Link
                      style={{ color: "white" }}
                      onClick={() =>
                        history.push(
                          `/search/English/${toTitleCase(val.head_term)}`
                        )
                      }
                    >
                      {val.head_term}
                    </Typography.Link>
                  </Col>
                ))}
            </Row>
          </Card>
        </Col>
        <Col span={6}>
          <img alt="1" style={{ maxWidth: "100%" }} src={music} />
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <div
            className="cat_title"
            style={{ textAlign: "center", backgroundColor: "#639bb4" }}
          >
            <Title level={1} style={{ color: "white" }}>
              College
            </Title>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={1}></Col>
        <Col span={6}>
          <img
            alt="1"
            style={{ maxWidth: "100%", maxHeight: "auto" }}
            src={college}
          />
        </Col>

        <Col span={17}>
          <Card
            borderd
            style={{
              textAlign: "center",
              backgroundColor: "#639bb4",
              color: "white",
              fontSize: "2.5vmin",
            }}
          >
            <Row>
              {cats["College"] &&
                cats["College"].map((val, i) => (
                  <Col key={i} span={6}>
                    <Typography.Link
                      style={{ color: "white" }}
                      onClick={() =>
                        history.push(
                          `/search/English/${toTitleCase(val.head_term)}`
                        )
                      }
                    >
                      {val.head_term}
                    </Typography.Link>
                  </Col>
                ))}
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default CatView;
