import React from "react";
import { Row, Col, Typography} from "antd";
import CatView from "./catView";

const { Title } = Typography;

function displayAllCats()
{
    return(
    <>

    <CatView />
    </>
    );
}

export default displayAllCats;
