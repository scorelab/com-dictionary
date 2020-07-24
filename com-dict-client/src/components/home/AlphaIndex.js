import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function AlphaIndex() {
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
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
