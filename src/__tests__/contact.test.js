import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Contact from "../components/Contact";

// 'Describe' Groups multiple Test cases into a Block.
// describe(name, func)

describe("Contact us page all Test cases", () => {
  // All Test cases

  // Test case 1
  test("Should load Contact us component", () => {
    // 1. render
    render(<Contact />); // render component on screen

    // 2. Querying finds get element from screen
    const heading = screen.getByRole("heading"); // returns JSX element. i.e,JSX or react element or fiber node or virtual dom node.

    // 3. Assertion
    expect(heading).toBeInTheDocument(); // checks heading loaded on DOM
  });

  // Test case 2.   test (or) it are same.
  it("Should load Button inside Contact component", () => {
    // 1. render
    render(<Contact />); // render component on screen

    // 2. Querying finds get element from screen
    const button = screen.getByRole("button");
    const button2 = screen.getByText("submit");

    // 3. Assertion
    expect(button).toBeInTheDocument(); // checks button loaded on DOM
  });

  // Test case 3
  test("Should load Input inside Contact component", () => {
    // 1. render
    render(<Contact />); // render component on screen

    // 2. Querying finds get element from screen
    const input = screen.getByRole("textbox");

    // 3. Assertion
    expect(input).toBeInTheDocument(); // checks inputElement loaded on DOM
  });

  // Test case 4
  test("Should load 2 Inputs inside Contact component", () => {
    // 1. render
    render(<Contact />); // render component on screen

    // 2. Querying finds get element from screen
    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes.length, inputBoxes);

    // 3. Assertion
    expect(inputBoxes.length).toBe(2); // checks result output to expected output
  });
});

// Important:
// Install @babel/preset-react :- library helps testing library makes JSX work in our Test cases. i.e, converts JSX into Html
//  And include it in babel.config.js. ["@babel/preset-react", { runtime: "automatic" }]
// Install @testing-library/jest-dom :- it provides methods to test.
