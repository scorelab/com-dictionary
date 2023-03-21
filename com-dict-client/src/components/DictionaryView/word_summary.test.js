import React from "react";
import { render, screen } from "@testing-library/react";
import Word from "./word_summary";

describe("Word_Summary", () => {
  const data = {
    dislikes: 0,
    createdAt: 1596825000000,
    trending_factor: 17,
    head_term: "Strip Jenga",
    word_of_the_day: "2023-03-21",
    other_language_def:
      "A term coined by Terrson to represent a form of Jenga where one removes an article of clothing whenever the tower falls.",
    categories: "Internet",
    uname: "Asitha Indrajith",
    alphabatical: "S",
    related_words: [],
    user_id: "bs9J0Es5k4apyNl1XjzbiATr57v2",
    other_language_term: "Strip Jenga",
    example:
      "It was a fearsome sight indeed after the tower fell for the last time, after that, strip jenga was forever banned in the lounge.",
    other_language: "English",
    word_classes: ["Noun"],
    likes: 5,
    pronunciation: null,
    id: "T26vX5qQe1BPrUktFBtO",
  };

  test("renders correctly", () => {
    render(<Word data={data} />);
    const head_termElement = screen.getAllByText("Strip Jenga");
    expect(head_termElement[0]).toBeInTheDocument();
    expect(head_termElement[1]).toBeInTheDocument();

    const other_languageElement = screen.getByText("English");
    expect(other_languageElement).toBeInTheDocument();

    const word_classesElement = screen.getByText("Noun");
    expect(word_classesElement).toBeInTheDocument();

    const other_language_defElement = screen.getByText(
      "A term coined by Terrson to represent a form of Jenga where one removes an article of clothing whenever the tower falls."
    );
    expect(other_language_defElement).toBeInTheDocument();

    const exampleElement = screen.getByText(
      "It was a fearsome sight indeed after the tower fell for the last time, after that, strip jenga was forever banned in the lounge."
    );
    expect(exampleElement).toBeInTheDocument();

    const unameElement = screen.getByText("Asitha Indrajith");
    expect(unameElement).toBeInTheDocument();
  });
});
