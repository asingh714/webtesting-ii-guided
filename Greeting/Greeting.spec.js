import { render } from "react-testing-library"

import Greeting from "./Greeting";

describe("<Greeting />", () => {
  it("renders no message if message provided", () => {
    const { getByText } = render(<Greeting/>)
    getByText(/no message/i)
  })

  it("renders the provided message", () => {
    const { getByText } = render(<Greeting msg="Hello Team"/>)
    getByText(/hello team/i)
  })
})