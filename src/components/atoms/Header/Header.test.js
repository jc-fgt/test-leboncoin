import { render, screen } from "@testing-library/react"
import Header from "./Header"

describe("<Header />", () => {

  it("Should render small correctly", () => {

    render(
      <div>
        <Header type="small" />
      </div>
    )


    expect(screen.queryByTestId("header-logo")).toBeTruthy();

    const logo = screen.getByTestId("header-logo");
    expect(logo.getAttribute("width")).toEqual("100")
  })

  it("Should render normal correctly", () => {

    render(
      <div>
        <Header type="normal" />
      </div>
    )


    expect(screen.queryByTestId("header-logo")).toBeTruthy();

    const logo = screen.getByTestId("header-logo");
    expect(logo.getAttribute("width")).toEqual("200")
  })
});