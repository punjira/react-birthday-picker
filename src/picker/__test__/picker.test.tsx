import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Picker from "../..";

describe("BIRTHDAY PICKER COMPONENT", () => {
  it("should render", () => {
    render(<Picker />);
    expect(screen.getByPlaceholderText("day")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("month")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("year")).toBeInTheDocument();
  });
  it("should change place holder with input props", () => {
    render(<Picker placeHolders={["one", "two", "three"]} />);
    expect(screen.getByPlaceholderText("one")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("two")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("three")).toBeInTheDocument();

    expect(screen.queryByPlaceholderText("day")).not.toBeInTheDocument();
    expect(screen.queryByPlaceholderText("month")).not.toBeInTheDocument();
    expect(screen.queryByPlaceholderText("year")).not.toBeInTheDocument();
  });
  it("should change focus from day to month if value is grater than 3", () => {
    render(<Picker />);
    fireEvent.change(screen.getByPlaceholderText("day"), {
      target: { value: 5 }
    });
    expect(screen.getByPlaceholderText("month")).toHaveFocus();
  });
  it("should change focus from day to month if value length is 2", () => {
    render(<Picker />);
    fireEvent.change(screen.getByPlaceholderText("day"), {
      target: { value: "03" }
    });
    expect(screen.getByPlaceholderText("month")).toHaveFocus();
  });
  it("should change focus from month to year if value is grater than 2", () => {
    render(<Picker />);
    fireEvent.change(screen.getByPlaceholderText("month"), {
      target: { value: 2 }
    });
    expect(screen.getByPlaceholderText("year")).toHaveFocus();
  });
  it("should change focus from month to year if value length is 2", () => {
    render(<Picker />);
    fireEvent.change(screen.getByPlaceholderText("month"), {
      target: { value: "12" }
    });
    expect(screen.getByPlaceholderText("year")).toHaveFocus();
  });
  it("should change focus from month to year if value length is 2", () => {
    render(<Picker />);
    fireEvent.change(screen.getByPlaceholderText("month"), {
      target: { value: "01" }
    });
    expect(screen.getByPlaceholderText("year")).toHaveFocus();
  });
  it("should change focus from year to month if form is receiving backspace and is already empty", () => {
    render(<Picker />);
    const yearInput = screen.getByPlaceholderText("year");
    yearInput.focus();
    fireEvent.keyDown(yearInput, {
      keyCode: 8
    });
    expect(screen.getByPlaceholderText("month")).toHaveFocus();
  });
  it("should change focus from month to day if form is receiving backspace and is already empty", () => {
    render(<Picker />);
    const monthInput = screen.getByPlaceholderText("month");
    monthInput.focus();
    fireEvent.keyDown(monthInput, {
      keyCode: 8
    });
    expect(screen.getByPlaceholderText("day")).toHaveFocus();
  });
});
