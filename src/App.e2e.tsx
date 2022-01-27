import React from "react";
import { mount } from "@cypress/react";
import App from "./App";

it("renders a post title label", () => {
  mount(<App />);
  cy.get("label").contains("A post title");

  cy.get("input").type("Hello, World"); // Type 'Hello, World' into the 'input'
  cy.get("button[type=submit]").click(); // Type 'Hello, World' into the 'input'
  cy.get("span").contains("A description is required"); // Type 'Hello, World' into the 'input'
});
