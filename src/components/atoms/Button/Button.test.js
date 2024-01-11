import { fireEvent, render, screen } from "@testing-library/react"
import Button, { BUTTON_DISABLED, BUTTON_VALIDATE } from "./Button"

describe("<Button />", () => {

  it("Should toggle the button from disabled to validate", () => {

    let theme = BUTTON_DISABLED;
    const click = () => {
      theme = BUTTON_VALIDATE;
    }
    render(
      <div>
        <button onClick={click()}>toggler</button>
        <Button theme={theme} onValidate={() => { }} label="Toggle me!" />
      </div>
    )

    const button = screen.getByTestId("toggleButton");

    expect(screen.queryByText("Toggle me!")).toBeInTheDocument()

    expect(button).toBeDisabled;

    const toggler = screen.getByText('toggler')
    fireEvent.click(toggler)

    expect(button).not.toBeDisabled();
  })
});