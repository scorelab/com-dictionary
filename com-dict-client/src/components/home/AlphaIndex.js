import React from "./node_modules/react";
import { Tabs } from "./node_modules/antd";

const { TabPane } = Tabs;

function AlphaIndex() {
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        tabBarGutter="6px"
        type="card"
        size="small"
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
