import { fireEvent, render, screen } from "@testing-library/react";

import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/Store/appStore";
import { BrowserRouter } from "react-router";
import { Link } from "react-router-dom";

// Test case 1
test("Should render Header Component with a Login button", () => {
  // 1. render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // 2. Querying
  const loginButton = screen.getByRole("button", { name: "Login" }); // screen.method(param, options)
  // const loginButton = screen.getByText("Login");

  // 3. Assertion
  expect(loginButton).toBeInTheDocument();
});

// Test case 2
test("Should render Header Component with a Cart items 0", () => {
  // 1. render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // 2. Querying
  const cartItems = screen.getByText("Cart items 0"); // screen.method(param, options)

  // 3. Assertion
  expect(cartItems).toBeInTheDocument();
});

// Test case 3
test("Should change Login button to Logout on click", () => {
  // 1. render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // 2. Querying
  const loginButton = screen.getByRole("button", { name: "Login" }); // screen.method(param, options)
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });

  // 3. Assertion
  expect(logoutButton).toBeInTheDocument();
});

// since Header using Redux. we have to pass Redux during testing also.
