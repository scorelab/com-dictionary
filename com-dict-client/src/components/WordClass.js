import React from "react";
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

class WordClass extends React.Component {
  state = {
    selectedTags: [],
  };

  handleChange(tag, checked) {
    const { selectedTags } = this.state;
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log("Word class: ", nextSelectedTags);
    this.setState({ selectedTags: nextSelectedTags });
  }

  render() {
    const { selectedTags } = this.state;
    return (
      <div>
        {tagsWordClass.map((tag) => (
          <CheckableTag
            className="word_class"
            key={tag}
            checked={selectedTags.indexOf(tag) > -1}
            onChange={(checked) => this.handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </div>
    );
  }
}
export default WordClass;
