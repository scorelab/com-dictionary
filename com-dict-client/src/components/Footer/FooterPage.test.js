import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./FooterPage";

describe("Footer_Page", () => {
  test("renders correctly", () => {
    render(<Footer/>);
    const text1 = screen.getByText("Community Dictionary");
    expect(text1).toBeInTheDocument();

    const text2 = screen.getByText("Your everyday online dictionary");
    expect(text2).toBeInTheDocument();

    const text3 = screen.getByText("About");
    expect(text3).toBeInTheDocument();

    const text4 = screen.getByText("About Community Dictionary");
    expect(text4).toBeInTheDocument();

    const text5 = screen.getByText("Privacy and Security");
    expect(text5).toBeInTheDocument();

    const text6 = screen.getByText("Terms and Conditions");
    expect(text6).toBeInTheDocument();

    const text7 = screen.getByText("Help");
    expect(text7).toBeInTheDocument();

    const text8 = screen.getByText("FAQ");
    expect(text8).toBeInTheDocument();

    const text9 = screen.getByText("Bug Report");
    expect(text9).toBeInTheDocument();

    const text10 = screen.getByText("GitHub");
    expect(text10).toBeInTheDocument();

    const text11 = screen.getByText("Issues");
    expect(text11).toBeInTheDocument();

    const text12 = screen.getByText("Contact Us");
    expect(text12).toBeInTheDocument();

    const text13 = screen.getByText("+94 XXXXXXXXX");
    expect(text13).toBeInTheDocument();

    const text14 = screen.getByText("XXXXXXXX@gmail.com");
    expect(text14).toBeInTheDocument();

    const text15 = screen.getByText("Location");
    expect(text15).toBeInTheDocument();

    const text16 = screen.getByText("Copyright © SCoReLab");
    expect(text16).toBeInTheDocument();
  });
});
