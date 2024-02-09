import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import Index   from "../components/Index";

// render Index component without crashing
test("Renders Index component correctly", async () => {
    const { getByText } = render(<Index/>);

    const htmlElement = getByText('Cinema App')

    expect(htmlElement).not.toBeFalsy()
});
