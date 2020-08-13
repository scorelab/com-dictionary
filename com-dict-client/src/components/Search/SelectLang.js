import React from "react";
import { Select } from "antd";
import { languages } from "../../constants";

const { Option } = Select;

function SelectLang({ value, onChange }) {
  return (
    <Select
      bordered={false}
      showSearch
      className="select_style"
      // style={{ width: 120 }}
      defaultValue="English"
      size="middle"
      placeholder="Language"
      optionFilterProp="children"
      onChange={onChange}
      value={value}
    >
      {languages.map((val, i) => (
        <Option key={i} value={val}>
          {val}
        </Option>
      ))}
    </Select>
  );
}

export default SelectLang;
