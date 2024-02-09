import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import Index   from "../components/Index";
import SearchBar from "../components/SearchBar";

// render Index component without crashing
test("Renders SearchBar component correctly", async () => {
    const { getByText } = render(<SearchBar/>);

    const htmlElement = getByText('Completa con los siguientes datos para buscar tu peli favorita');

    expect(htmlElement).not.toBeFalsy()
});
