import React, { useState } from "react";
import { Tag, Input, Tooltip, Button } from "antd";

function EditableTagGroup({ onChange }) {
  const [tags, setTags] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [input, setInput] = useState("");

  const handleClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    let allTags = [];
    if (inputValue && tags.indexOf(inputValue) === -1) {
      allTags = [...tags, inputValue];
    }
    console.log(allTags);
    onChange(tags);
    setTags([]);
    setInputValue("");
    setInputVisible(false);
  };

  const saveInputRef = (val) => setInput(val);

  return (
    <div>
      {tags.map((tag, index) => {
        const isLongTag = tag.length > 20;
        const tagElem = (
          <Tag key={tag} closable afterClose={() => handleClose(tag)}>
            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
          </Tag>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}
      {inputVisible && (
        <Input
          ref={saveInputRef}
          type="text"
          size="larger"
          style={{ width: 90 }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Button size="medium" type="dashed" onClick={showInput}>
          + New Word
        </Button>
      )}
    </div>
  );
}

export default EditableTagGroup;
