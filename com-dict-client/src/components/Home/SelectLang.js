import React from "react";
import { Select } from "antd";

const { Option } = Select;
var optionText;

function onChange(value) {
  optionText = value;
  console.log(optionText);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

function SelectLang() {
  return (
    <Select
      bordered={false}
      showSearch
      className="select_style"
      size="large"
      placeholder="Select a language"
      optionFilterProp="languages"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value="en">English</Option>
      <Option value="fr">French</Option>
      <Option value="sp">Spanish</Option>
    </Select>
  );
}

export default SelectLang;
