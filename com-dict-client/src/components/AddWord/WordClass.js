import React, { useState } from "react";
import { Tag } from "antd";

const CheckableTag = Tag.CheckableTag;

const tagsWordClass = [
  "Verb",
  "Noun",
  "Adverb",
  "Adjective",
  "Determiner",
  "Pronoun",
  "Conjunction",
  "Preposition",
];

function WordClass(props) {
  const { onChange } = props;
  const [selectedTags, setSelectedTags] = useState([]);

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log("Word class: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags);
    onChange(nextSelectedTags);
    // this.setState({ selectedTags: nextSelectedTags });
  };

  return (
    <div>
      {tagsWordClass.map((tag) => (
        <CheckableTag
          className="word_class"
          key={tag}
          checked={selectedTags.indexOf(tag) > -1}
          onChange={(checked) => handleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </div>
  );
}
export default WordClass;
