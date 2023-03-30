import React from "react";
import { EllipsisOutlined, MoneyCollectOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";

const { Meta } = Card;

export default function SubscriptionCard() {
  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
        }
        actions={[
          <MoneyCollectOutlined key="pricing" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          title="Premium Subscription"
          description="Unlock premium for advanced..."
        />
      </Card>
    </div>
  );
}
