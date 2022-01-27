import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

import { client } from "./utils/client";

jest.mock("./utils/client", () => ({
  client: {
    post: jest.fn(),
  },
}));

test("renders the post title label", () => {
  render(<App />);

  const postTitle = screen.getByText("A post title");

  expect(postTitle).toBeInTheDocument();
});

test("changes the title input value", async () => {
  render(<App />);

  const postTitle = screen.getByText("A post title");

  expect(postTitle).toBeInTheDocument();

  fireEvent.change(screen.getByPlaceholderText("Insert a title"), {
    target: { value: "My title" },
  });

  await waitFor(() => {
    expect(screen.getByDisplayValue("My title")).toBeInTheDocument();
  });
});

test("submits the form", async () => {
  render(<App />);

  const postTitle = screen.getByText("A post title");

  expect(postTitle).toBeInTheDocument();

  fireEvent.change(screen.getByPlaceholderText("Insert a title"), {
    target: { value: "My title" },
  });

  await waitFor(() => {
    expect(screen.getByDisplayValue("My title")).toBeInTheDocument();
  });

  fireEvent.change(screen.getByPlaceholderText("Insert a description"), {
    target: { value: "My long long long long long long long description" },
  });

  await waitFor(() => {
    expect(
      screen.getByDisplayValue(
        "My long long long long long long long description"
      )
    ).toBeInTheDocument();
  });

  fireEvent.click(screen.getByText("Invia"));

  await waitFor(() => {
    expect(client.post).toHaveBeenCalledWith("/posts", {
      description: "My long long long long long long long description",
      title: "My title",
    });
  });
});
