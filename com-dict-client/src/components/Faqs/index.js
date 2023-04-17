import React, { useState } from "react";
import { Row, Col} from "antd";
const faqs = [
  {
    question: "What is a Community Dictionary?",
    answer:
      "A Community Dictionary is a web application where users can submit and search for definitions of words or phrases.",
  },
  {
    question:
      "How do I create an account on the Community Dictionary web application?",
    answer:
      "To create an account on the Community Dictionary, click on the 'Sign Up' button and fill out the registration form.",
  },
  {
    question: "How do I submit a new entry to the Community Dictionary?",
    answer:
      "To submit a new entry to the Community Dictionary, click on the 'Plus' icon and fill out the entry form.",
  },
  {
    question:
      "How can I search for a specific entry on the Community Dictionary?",
    answer:
      "To search for a specific entry on the Community Dictionary, use the search bar on the homepage and enter the word or phrase you're looking for.",
  },
  {
    question:
      "How can I report inaccurate or inappropriate entries on the Community Dictionary?",
    answer:
      "To report inaccurate or inappropriate entries on the Community Dictionary, click on the 'Report' button of that particular word and fill out the report form.",
  },
  {
    question: "Is the Community Dictionary available in multiple languages?",
    answer:
      "Yes, Communution Dictionary is multilingual Dictionary web application.",
  },
  {
    question: "Can I access the Community Dictionary on my mobile device?",
    answer:
      "Yes, the Community Dictionary is accessible on most mobile devices via a web browser.",
  },
];

const FaqsSection = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq-section">
      <h1>Frequently Asked Questions (FAQ)</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq" onClick={() => handleClick(index)}>
          <Row className="question" style={{padding:"0 20px"}}>
            <Col span={1}>
              <h1 style={{ color: "#7dbf94"}}>Q.</h1>
            </Col>
            <Col span={23}>
              <h3 style={{position:"relative", top:"1.5rem",paddingLeft:"2rem"}}>{faq.question}</h3>
            </Col>
          </Row>
          <Row style={{padding:"0 20px"}}
            className={activeIndex === index ? "show-answer" : "hide-answer"}
          >
            <Col span={4} style={{display:"inline"}}>
              <h1 style={{ color: "grey" ,display:"inline",paddingLeft:"0.2rem"}}>A.</h1>
            </Col>
            <Col span={12} style={{display:"inline"}}>
              <p style={{display:"inline", paddingLeft:"1.8rem" , position:"relative",bottom:"0.6rem"}}>{faq.answer}</p>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
};

export default FaqsSection;
