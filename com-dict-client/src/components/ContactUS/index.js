import React from 'react'
import { Row, Col, Card, Typography } from "antd";
import contact from "../../images/pablo-contact.png";
import sports from "../../images/pablo-sports.png";
const { Text } = Typography;
const { Title } = Typography;

function Contact_Us(props) {
  console.log(props.data);
  return (
    <div className="main-wrapper clearfix">
      <div className="univ-title-container">
        <span className="rubric-text margin-lr-0 margin-tb-1875em" />
        {/* <h1 className="title-lg">Contact Us</h1> */}
        <Row>
          <Col span={24}>
            <div
              className="cat_title"
              style={{ textAlign: "center", backgroundColor: "#639bb4" }}
            >
              <Title level={1} style={{ color: "white" }}>
                Contact Us
              </Title>
            </div>
          </Col>
        </Row>

        <Row>
          {/* <Col span={6}>
          <img
            alt="1"
            style={{ maxWidth: "100%", maxHeight: "auto" }}
            src={sports}
          />
        </Col> */}
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
              {/* <Row>
              {cats["Sports"] &&
                cats["Sports"].map((val, i) => (
                  <Col key={i} span={6}>
                    <Typography.Link
                      style={{ color: "white" }}
                   >    
                    </Typography.Link>
                  </Col>
                ))}
            </Row> */}
            </Card>
          </Col>
        </Row>








        <h2 className="title-sm" />
      </div>
      {/* <hr className="gray-divide" /> */}
      
        
          <div className="lr-cols-area clearfix sticky-column d-flex">
            <div className="left-content">
              <div id="static_pg_container" className="contact-us-landing">
                <section>
                  <p>Thank you for your interest in SCoReLab Community Dictionary.</p>
                  <p>
                    Don't forget to check our <a href="/faq">FAQ</a> Pages before asking a question.They have answers
                    to many commonly asked questions.
                  </p>
                  <p>If you can't find the answer to your question on our FAQ Pages, feel free to use the
                    form below to send us your comment or question. Please remember to select the
                    appropriate topic so we can assist you more efficiently!</p>
                </section>
                <div className="ct-frm-cont">
                  {/*Intro text*/}
                  <div className="form-title">Contact Form</div>
                  {/*Actual form*/}
                  <form method="POST" className="ct-frm ct-frm-basic">
                    <input type="hidden" name="landing" defaultValue="true" />
                    <div className="frm-gr">
                      <label htmlFor="name" className="frm-lb">
                        Your Name:<span className="require">*</span>
                      </label>
                      <div>
                        <input type="text" className="form-control border-box" name="name" id="name" defaultValue placeholder required="required" />
                      </div>
                      <ul className="name-err frm-item-err" />
                    </div>
                    <div className="frm-gr">
                      <label htmlFor="email" className="frm-lb">
                        Your E-mail Address:<span className="require">*</span>
                      </label>
                      <div>
                        <input type="text" className="form-control border-box" name="email" id="email" defaultValue placeholder autoCorrect="off" autoCapitalize="none" required="required" />
                      </div>
                      <ul className="email-err frm-item-err" />
                    </div>
                    <div className="frm-gr">
                      <label htmlFor="topic" className="frm-lb">
                        The Particular Topic You're Contacting Us About:<span className="require">*</span>
                      </label>
                      <div>
                        <select name="topic" id="topic" className="form-control border-box" required="required">
                          <option value>-- Please Select --</option>
                          {/* <option value="asktheeditcors">Ask the Editor Videos</option> */}
                          <option value="definition">Question/Comment About a Definition</option>
                          <option value="epc">Digital Product Content</option>
                          <option value="eps">Digital Product Support</option>
                          <option value="history">Word History/Use</option>
                          {/* <option value="licensing">Licensing Inquiry</option> */}
                          <option value="media">Press Inquiry</option>
                          {/* <option value="ordering">Book Ordering and Purchasing</option> */}
                          <option value="toptenlists">Words at Play</option>
                          <option value="games">Games</option>
                          <option value="freshexamples">Example Sentences on Definitions</option>
                          <option value="wodsupport">Word of the Day Support</option>
                          <option value="advertising">Advertising</option>
                          {/* <option value="websupport">Web Site Support</option> */}
                          {/* <option value="mediakit">Mediakit</option> */}
                        </select>
                      </div>
                      <ul className="topic-err frm-item-err" />
                    </div>
                    <div className="frm-gr">
                      <label htmlFor="question" className="frm-lb">
                        Your Question or Comment:<span className="require">*</span>
                      </label>
                      <div>
                        <textarea rows={12} className="form-control border-box" name="question" id="question" placeholder required="required" defaultValue={""} />
                      </div>
                      <ul className="question-err frm-item-err" />
                    </div>
                    <div className="captcha_part">
                      <input type="hidden" name="recaptcha_response" id="recaptchaResponse" />
                    </div>
                    {/*global level errors*/}
                    <ul className="ct-global-danger hidden" />
                    <ul className="ct-global-success hidden" />
                    <div className="frm-gr text-right">
                      <button type="submit" className="form-btn cf-submit-btn">Send</button>
                    </div>
                  </form>
                  <div className="contact-us-follow">
                    <div className="form-title">Follow Us</div>

                    <a href="https://www.facebook.com/SCORE.LAB.ORG/" rel="noopener" target="_blank" ><img className='social-link' src='https://cdn-icons-png.flaticon.com/512/2168/2168281.png' /></a>
                    <a href="https://www.linkedin.com/company/sustainable-computing-research-group-score-/" rel="noopener" target="_blank" ><img className='social-link' src='https://cdn-icons-png.flaticon.com/512/2168/2168311.png' /></a>
                    <a href="https://github.com/scorelab/" rel="noopener" target="_blank" ><img className='social-link' src='https://cdn-icons-png.flaticon.com/512/2111/2111425.png' /></a>
                    {/* <a href="https://gitter.im/scorelab/" rel="noopener" target="_blank" ><img className='social-link' src='https://cdn-icons-png.flaticon.com/512/3669/3669691.png'/></a> */}
                    {/* <a href="https://twitter.com/merriamwebster" rel="noopener" target="_blank" className=" social-tw">twitter</a>
                <a href="https://www.youtube.com/user/MerriamWebsterOnline" rel="noopener" target="_blank" className="social-link social-play">youtube</a>
                <a href="https://www.instagram.com/merriamwebster/" rel="noopener" target="_blank" className="social-link social-ig">linkedin</a> */}
                  </div>
                  <div className="contact-us-info">
                    <p>You can also contact us at:</p>
                    <div className="contact-address">
                      <a href="https://scorelab.org/" style={{ color: "black" }}><strong>SCoRe-Lab.Org</strong></a>
                      <br />
                      Colombo<br />
                      Western 7777, LK<br />
                      Phone: +94 XXXXXXXXX<br />
                      Email: info@scorelab.org<br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="right-rail d-none d-md-block h-100">
          {/* right rail ad  */}
            {/* <div className="wotd-side wgt-side wgt-wod-side top-location"> */}
            {/* <Row> */}
              {/* <Col span={6}>
             <img
              alt="1"
              style={{ maxWidth: "200%", maxHeight: "300px" }}
              src={contact}
            /> 
           </Col>  */}
              {/* <div className="wotd-header d-flex align-items-center justify-content-evenly">
              <div className="d-flex flex-column text-center justify-content-center me-2 mr-2">
                <a href="https://scorelab.org/" title="ScoreLab.org" className="mw-logo text-decoration-none">
                  <svg width={57} height={57} viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 28.5C0 12.7559 12.8041 0 28.6006 0C44.397 0 57 12.762 57 28.5C57 44.2441 44.397 57 28.6006 57C12.8102 57.0061 0 44.2441 0 28.5Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M28.5 56.6686C44.0571 56.6686 56.6686 44.0571 56.6686 28.5C56.6686 12.9429 44.0571 0.331395 28.5 0.331395C12.9429 0.331395 0.331395 12.9429 0.331395 28.5C0.331395 44.0571 12.9429 56.6686 28.5 56.6686ZM28.5 57C44.2401 57 57 44.2401 57 28.5C57 12.7599 44.2401 0 28.5 0C12.7599 0 0 12.7599 0 28.5C0 44.2401 12.7599 57 28.5 57Z" fill="#D71920" />
                    <path d="M2.08537 28.4971C2.08537 13.9089 13.9149 2.08545 28.503 2.08545C43.0911 2.08545 54.9146 13.9089 54.9146 28.4971C54.9146 43.0852 43.0911 54.9087 28.503 54.9147C13.9149 54.9147 2.09139 43.0852 2.08537 28.4971ZM3.81402 28.4971C3.81402 35.3153 6.57865 41.483 11.0479 45.9522C15.517 50.4214 21.6848 53.18 28.503 53.1861C35.3213 53.1861 41.489 50.4214 45.9582 45.9522C50.4274 41.483 53.192 35.3153 53.192 28.4971C53.192 21.6788 50.4274 15.5111 45.9582 11.0419C41.489 6.57272 35.3213 3.80808 28.503 3.80808C21.6788 3.80808 15.517 6.56669 11.0479 11.0419C6.57865 15.5111 3.81402 21.6788 3.81402 28.4971Z" fill="#D71920" />
                    <path d="M31.3917 34.9741C31.3917 34.3001 31.8774 33.8872 32.4421 33.8811C33.2193 33.8811 33.5958 34.4823 33.5958 35.2716L34.0147 35.2959L34.0633 34.0815H34.039L34.0572 34.0633C33.5775 33.6322 33.0371 33.5168 32.4239 33.5168C31.4706 33.5168 30.5841 34.1726 30.5841 35.2837C30.5962 37.5911 33.5897 36.6014 33.5654 38.174C33.5654 38.8965 33.11 39.4126 32.4057 39.4126H32.3753C31.4888 39.3944 30.9363 38.6658 30.912 37.7125L30.4444 37.6882V37.7125L30.4566 37.8279L30.578 39.4308C31.1184 39.7405 31.7135 39.8195 32.2903 39.8195C33.3954 39.8195 34.5005 39.2062 34.5005 37.8704C34.4823 35.6602 31.3613 36.3038 31.3917 34.9741ZM27.6817 33.5775C27.4874 33.5775 27.3053 33.614 27.111 33.6383L26.097 34.2819L26.2427 34.4033C26.5159 34.3183 26.7892 34.2697 27.0503 34.2697C28.4589 34.2697 29.0843 35.5813 29.0904 36.911C29.0904 38.2893 28.4893 39.4551 27.2446 39.4551C26.4309 39.4551 25.9391 38.8904 25.9391 38.0768V29.9951L25.6902 29.8858C25.1801 30.1105 24.5608 30.3109 23.99 30.3837L23.9779 30.6145C24.3483 30.6388 24.6154 30.6995 24.9372 30.8573L24.913 37.3057C24.913 37.5971 24.913 37.8825 24.913 38.174C24.913 38.6901 24.9069 39.2062 24.8705 39.7466L25.1012 39.8741L25.5687 39.4248C25.9573 39.6555 26.4431 39.8377 26.8863 39.8437C29.0904 39.8377 30.0437 38.259 30.0437 36.5467C30.0437 34.6037 29.1754 33.5775 27.6817 33.5775ZM20.6809 31.3067L20.6991 30.9909L17.7481 30.9666L17.7238 31.2824L18.8775 31.592L18.7075 32.0839L16.7766 37.5425C16.5641 36.911 14.9854 32.1446 14.8761 31.7378L15.0219 31.507L15.9812 31.3613L15.9994 31.0152L12.8117 30.997V31.0213H12.7874V31.3431L13.6617 31.5435L13.8196 31.8349C13.7103 32.2417 12.0588 36.9414 11.8341 37.5668L9.92146 31.6103L9.97611 31.592L10.9051 31.3613L10.9476 31.0152H10.9233H10.808L7.63236 30.9849L7.602 31.3067L8.73745 31.586L11.3544 39.8559L11.7552 39.8741L14.1414 33.2982L16.3516 39.8377L16.7766 39.8559L19.6668 31.5738L20.6809 31.3067ZM9.90325 31.6224L9.98218 31.8653L9.90325 31.6224ZM18.8836 31.5738L18.8107 31.5556L18.8836 31.5738ZM38.344 38.4472L38.3075 38.4776C38.0343 38.7508 37.6093 39.1758 37.2692 39.1758C36.6196 39.1637 36.3706 38.7144 36.3645 37.9007C36.3645 37.8643 36.3645 37.8279 36.3645 37.7914V34.5491H36.407L38.1315 34.5733L38.1557 33.9722L36.3403 33.9479L36.3645 32.3996L36.0549 32.3753C35.8059 33.2436 35.1198 33.7536 34.4519 34.2394L34.4397 34.5491H34.464V34.5733H35.3262L35.302 38.2893C35.302 39.4491 36.0488 39.868 36.7228 39.8741C36.7471 39.8741 36.7774 39.8741 36.8017 39.8741C37.755 39.8255 38.4047 38.8783 38.4108 38.8783L38.35 38.4897L38.344 38.4472ZM35.1623 27.8518H35.1927C35.9152 27.8335 36.4981 27.5603 37.0507 27.1292L37.0203 27.8639C37.0203 27.8639 37.0264 27.8639 37.0324 27.8639H37.0446C37.0446 27.8639 37.0628 27.8578 37.0689 27.8578C37.2935 27.8335 38.4533 27.5725 38.9755 27.4753L39.0119 27.4692L38.8297 27.1899L37.9857 27.1049V23.48C37.9857 22.4296 37.5303 21.956 36.7956 21.956C36.7592 21.956 36.7288 21.956 36.6924 21.956C36.5892 21.956 36.4799 21.962 36.3767 22.0167L35.0469 22.8121C34.9134 22.8971 34.4337 23.1582 34.4155 23.3889L34.373 24.0508L34.464 24.1236L35.1562 23.984C35.2412 23.9658 35.3687 23.9718 35.3687 23.8261V23.8079C35.3627 23.6925 35.3566 23.5832 35.3566 23.48C35.3627 23.0185 35.4659 22.6724 36.3038 22.551C36.3342 22.5449 36.3645 22.5449 36.3949 22.5449C36.8139 22.5449 37.0628 22.9882 37.0628 23.8443V24.7187C36.492 24.8947 35.8666 25.1437 35.1987 25.3623C34.6948 25.5262 33.9115 25.7691 33.9115 26.771C33.9115 27.2264 34.4519 27.8518 35.1623 27.8518ZM37.0446 27.8396H37.0385L37.0507 27.6635L37.0446 27.8396ZM37.0871 25.0162V25.0223C36.9778 25.0587 36.8806 25.089 36.7774 25.1194C36.8806 25.083 36.9778 25.0526 37.0871 25.0162ZM37.0871 25.0405V25.4291L37.0628 26.7285C36.7046 26.9531 36.1459 27.2385 35.8181 27.2385C35.3748 27.2385 34.9194 26.9288 34.9194 26.522C34.9134 25.7205 35.7695 25.4898 37.0871 25.0405ZM32.2903 20.5291C32.5696 20.5291 32.8307 20.3044 32.8368 20.0008C32.8368 19.6911 32.606 19.4118 32.2903 19.4058C31.9867 19.4058 31.7681 19.7094 31.7681 20.0008C31.7681 20.2801 32.0231 20.5291 32.2903 20.5291ZM31.8956 27.3296L30.8148 27.5057L30.7966 27.7971L33.8993 27.8214V27.7971H33.9236V27.5299L32.8428 27.3053L32.8611 22.1017L32.6303 21.9924C32.1506 22.2049 31.4767 22.3931 30.9423 22.466L30.9181 22.7574C31.2642 22.7817 31.6103 22.8425 31.9138 22.9942L31.8956 27.3296ZM23.3221 27.2871L22.2838 27.4632L22.2656 27.8032L25.3319 27.8275L25.3562 27.4874L24.2997 27.2628L24.3179 24.3544C24.3179 24.154 24.8644 22.8121 25.5019 22.8121C25.6416 22.8121 25.842 22.9153 25.9634 23.0064L26.2791 23.0368L26.5038 22.2413C26.2973 22.0652 25.8237 22.0349 25.5748 22.0349C24.9433 22.041 24.7551 22.7635 24.5061 23.2432L24.3483 23.4982V22.1078L24.069 21.9985L24.0629 22.0227L24.0508 21.9985C23.5832 22.211 22.891 22.3992 22.3445 22.4721L22.3203 22.7635C22.6785 22.7878 23.0307 22.8485 23.3343 23.0003L23.3221 27.2871ZM9.81217 27.4814L8.7253 27.2567L9.33249 20.6991L9.38714 20.5351L12.3077 27.5846L12.4717 27.5967L15.3133 20.608L15.3922 20.7537L15.9509 27.2749L14.785 27.451L14.7668 27.791L18.1124 27.8153L18.1367 27.4753L17.1227 27.2506L16.3941 20.013L17.5356 19.8369L17.5295 19.8126H17.5538L17.5417 19.5211L15.0583 19.4968L12.5749 25.5323L10.055 19.509L7.52307 19.4968L7.48664 19.8126L8.7253 20.0433L8.02704 27.281L7.06768 27.4571L7.04946 27.7971L9.78788 27.8214L9.81217 27.4814ZM48.0529 23.8747C48.059 22.6907 47.4579 22.0227 46.201 21.9863C46.1949 21.9863 46.1889 21.9863 46.1828 21.9863C46.031 21.9863 45.7881 22.047 45.4481 22.3142L44.5677 23.0671C44.2519 22.4721 43.6508 22.0045 42.9465 21.9985C42.485 21.9985 42.315 22.0592 41.9507 22.3446L41.1128 22.891V22.0956L40.8395 21.9863C40.372 22.1988 39.7101 22.3871 39.188 22.4599L39.1637 22.6846C39.5037 22.7089 39.8437 22.7696 40.1352 22.9214L40.1291 27.2628L39.2123 27.4389L39.194 27.7485L42.0296 27.7728L42.0539 27.4935L41.1006 27.2385L41.1188 23.3464C41.5378 23.0307 42.0114 22.6482 42.5093 22.6482C43.5719 22.6482 43.5962 23.7229 43.6022 24.6762V27.2628L42.6854 27.4692L42.6672 27.7485L45.5027 27.7728L45.527 27.4935L44.5737 27.2385L44.5919 23.3343C44.9988 23.0368 45.5452 22.721 46.0492 22.721C47.0086 22.721 47.0693 23.5286 47.0753 24.3847C47.0753 24.5304 47.0753 24.6701 47.0753 24.8158V27.2628L46.1585 27.4692L46.1403 27.7485L48.9333 27.7728L48.9576 27.4935L48.0468 27.2385L48.0529 23.8747ZM20.0979 27.955C20.6869 27.955 21.0998 27.876 21.1909 27.8214L22.5753 26.3824L22.1867 26.352C21.7374 26.8195 21.3002 27.2142 20.6626 27.2142C20.6323 27.2142 20.6019 27.2142 20.5716 27.2142C18.7682 27.1049 18.5193 25.7448 18.5132 24.1904H18.5496L21.6827 24.2147C22.0288 24.2147 22.1685 24.1722 22.1685 23.7168C22.1685 22.7028 21.3002 21.9985 20.0919 21.9985C18.665 21.9985 17.5174 23.0671 17.5174 24.9615C17.5235 26.8863 18.6589 27.9489 20.0979 27.955ZM19.9279 22.3506C20.7962 22.3506 21.1666 22.97 21.1666 23.7715C21.1666 23.814 21.1666 23.8625 21.1666 23.9111L18.5435 23.8868C18.6043 23.1278 19.1143 22.3506 19.9279 22.3506ZM30.8452 22.2353C30.6387 22.0592 30.1651 22.0288 29.9162 22.0288C29.2847 22.0349 29.0965 22.7574 28.8475 23.2371L28.6897 23.4921V22.1017L28.4104 21.9924L28.4043 22.0167L28.3921 21.9924C27.9246 22.2049 27.2324 22.3931 26.6859 22.466L26.6677 22.7574C27.026 22.7817 27.3781 22.8425 27.6817 22.9942L27.6696 27.2871L26.6313 27.4632L26.607 27.7971H26.6313H26.7102L29.6733 27.8214L29.6976 27.4814L28.6411 27.2567L28.6654 24.3483C28.6654 24.1479 29.2119 22.806 29.8433 22.806C29.983 22.806 30.1834 22.9092 30.3048 23.0003L30.6205 23.0307L30.8452 22.2353ZM45.6545 34.8162L45.4845 35.0894V33.6201L45.187 33.5108L45.1809 33.535L45.1688 33.5108C44.677 33.7354 43.9544 33.9358 43.3776 34.0087L43.3533 34.3183C43.7297 34.3426 44.1001 34.4033 44.4159 34.5673L44.4037 39.0787L43.3108 39.2669L43.2926 39.6191L46.5107 39.6434L46.535 39.2912L45.4299 39.0544L45.4481 35.9942C45.4481 35.7877 46.0188 34.373 46.6928 34.373C46.8385 34.373 47.0511 34.4823 47.1786 34.5794L47.5065 34.6098L47.7433 33.7718C47.5307 33.5897 47.0268 33.5593 46.7718 33.5593C46.116 33.5472 45.9217 34.3122 45.6545 34.8162ZM22.302 39.0726C22.2656 39.0726 22.2353 39.0726 22.2049 39.0726C20.2983 38.9572 20.0372 37.5182 20.0312 35.8788L23.3828 35.9031C23.7472 35.9031 23.8929 35.8545 23.8929 35.3748C23.8929 34.3062 22.976 33.5593 21.707 33.5593C20.2012 33.5654 18.9929 34.6887 18.9868 36.6864C18.9929 38.7204 20.189 39.8498 21.707 39.8498C22.3324 39.8498 22.7635 39.7648 22.8607 39.7102L24.324 38.1922L23.9172 38.1558C23.4375 38.6597 22.976 39.0726 22.302 39.0726ZM21.5248 33.9419C22.4417 33.9419 22.8364 34.5976 22.8364 35.4477C22.8364 35.4963 22.8364 35.5448 22.8364 35.5934L20.0615 35.5691C20.1283 34.7555 20.6626 33.9419 21.5248 33.9419ZM43.3776 38.1193C42.904 38.6172 42.4425 39.0301 41.7685 39.0301C41.7321 39.0301 41.7017 39.0301 41.6653 39.0301C39.7587 38.9147 39.4976 37.4757 39.4916 35.8363L42.8432 35.8606C43.2076 35.8606 43.3533 35.812 43.3533 35.3323C43.3533 34.2637 42.4364 33.5168 41.1674 33.5168C39.6616 33.5229 38.4472 34.6462 38.4472 36.6439C38.4472 38.684 39.6494 39.8073 41.1674 39.8073C41.7867 39.8073 42.2239 39.7223 42.3211 39.6677L43.7844 38.1497L43.3776 38.1193ZM40.9913 33.8994C41.9082 33.8994 42.3028 34.5551 42.3028 35.4052C42.3028 35.4538 42.3028 35.5023 42.2968 35.5509L39.5219 35.5266C39.5948 34.7191 40.1352 33.8994 40.9913 33.8994ZM48.9091 24.5729V25.3926H51.1374V24.5729H48.9091Z" fill="#004990" />
                  </svg>
                </a>
                <h4 className="wotd-side__title margin-t-0p9375em fs-6 m-0 p-0 mt-3">
                  <a className="fw-bold text-uppercase wotd-header" style={{ letterSpacing: '3px' }} href="/word-of-the-day">Word of the Day</a>
                </h4>
              </div>
            </div>
            <div className="wotd-side__headword-wrapper d-flex justify-content-center align-items-center mt-4 mb-4">
              <h4 className="wotd-side__headword d-flex mt-0 mb-0 mr-3 me-2">
                <a style={{ letterSpacing: '1.5px' }} className="fs-2 fw-bold font-logo lh-base text-break text-wrap text-truncate" href="/word-of-the-day">factotum</a>
              </h4>
              <a className="wotd-side__headword__pron  play-pron d-flex m-0" data-lang="en_us" data-dir="f" data-file="factot01" href="javascript:void(0)" title="Listen to the pronunciation of factotum">
                <img className="svg" alt="Listen to the pronunciation of factotum" src="/dist-cross-dungarees/2023-03-09_20-34-36-174de836/images/svg/audio.svg" />
              </a>
            </div>
            <p className="wotd-side__link mt-3 mb-5 p-0">
              <a href="/word-of-the-day">See Definitions and Examples</a>
              »
            </p>
            <div className="wotd-side__subscribe pt-2">
              <p className="wotd-side__subscribe__lead p-0 mt-3 mb-0">Get Word of the Day daily email!</p>
              <form className="js-wod-subscribe-frm wotd-side__subscribe__form" action="/word-of-the-day" method="post">
                <input type="submit" className="wod-submit wotd-side__subscribe__form__submit" name="wod-submit" defaultValue="SUBSCRIBE" />
                <input type="text" className="wod-subscribe wotd-side__subscribe__form__input" name="wod-subscribe" placeholder="Your email address" aria-label="Subscribe to Word of the Day" />
              </form>
            </div> */}
            {/* </Row> */}
            {/* sticky right rail ad */}
            {/* </div>  */}
          </div>
        
        {/* <Col span={10} >
          <img
            alt="1"
            style={{ width:"100%", maxWidth: "300%", maxHeight: "900px" }}
            src={contact}
          />
        </Col> */}
      
      {/* <Row>
    
      </Row> */}
    </div>
  );
}

export default Contact_Us;
