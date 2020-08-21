import React from "react";
import { Tabs } from "antd";
import { useHistory } from "react-router-dom";

const { TabPane } = Tabs;

function AlphaIndexHome() {
  const history = useHistory();
  return (
    <div>
      <Tabs
        onChange={(activeKey) =>
          history.push("/letter", { activeKey: activeKey })
        }
        defaultActiveKey="A"
        tabBarGutter="2vmin"
        type="card"
        size="large"
        tabPosition='top'
        className="index_home"
        style={{fontSize:'3vmin',fontWeight:'800',display:'block'}}
      >
        {[...Array(26).keys()].map((i) => (
          <TabPane 
            tab={`${String.fromCharCode(i + 65)}`}
            key={String.fromCharCode(i + 65) }
          ></TabPane>
        ))}
      </Tabs>
    </div>
  );
}

export default AlphaIndexHome;
