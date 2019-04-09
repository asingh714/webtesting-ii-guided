import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

describe("<App />", () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it("renders successfully", () => {
    render(<App/>)
  })

  it("renders hello world", () => {
    const { getByText,queryByText, debug } = render(<App />)

    const text = getByText(/hello world/i)
    const text2 = queryByText(/hello world/i)

    debug();

    expect(text).toBeInTheDocument();
    expect(text2).toBeTruthy(); // or
    expect(text2).not.toBeNull();

    getByText(/hello world/i)
    // querybytext will return null instead of failing the test
  }) 

  it("greets the team", () => {
    const { getByText } = render(<App />)

    const button = getByText(/greet/i);

    fireEvent.click(button);
    getByText(/hello team/i)
  })

  it("says goodbye", () => {
    const { getByText } = render(<App />)

    const byebutton = getByText(/bye/i);

    fireEvent.click(byebutton);
    getByText(/bye team/i)
  })
})