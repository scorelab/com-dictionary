import React from "react";
import { Tabs } from "antd";
import { useHistory } from "react-router-dom";

const { TabPane } = Tabs;

function AlphaIndex() {
  const history = useHistory();
  return (
    <div>
      <Tabs
        onChange={(activeKey) =>
          history.push("/letter", { activeKey: activeKey })
        }
        defaultActiveKey="A"
        tabBarGutter="6px"
        type="card"
        size="large"
        className="index"
      >
        {[...Array(26).keys()].map((i) => (
          <TabPane
            tab={`${String.fromCharCode(i + 65)}`}
            key={String.fromCharCode(i + 65)}
          ></TabPane>
        ))}
      </Tabs>
    </div>
  );
}

export default AlphaIndex;
