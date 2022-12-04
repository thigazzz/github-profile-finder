import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MockSearchInputInegrationComponent } from "./mocks/MockSearchInputIntegrationComponent";
import { SearchInput } from "./SearchInput";

describe("Search Input Component", () => {
  describe("UNIT", () => {
    it("should call a function when user type on input", async () => {
      const mockFunction = jest.fn();
      const { getByTestId } = render(
        <SearchInput onChange={() => mockFunction()} value={""} />
      );

      await userEvent.type(getByTestId("search-input-component"), "any_text");

      expect(mockFunction).toHaveBeenCalled();
    });
    it('should have a placeholder: "digite o nome do usuário', () => {
      const { getByTestId } = render(
        <SearchInput onChange={(text) => text} value={""} />
      );

      expect(getByTestId("search-input-component")).toHaveAttribute(
        "placeholder",
        "digite o nome do usuário"
      );
    });
    it("should have a value in atributes", () => {
      const { getByTestId } = render(
        <SearchInput onChange={(text) => text} value={"any_value"} />
      );

      expect(getByTestId("search-input-component")).toHaveAttribute("value");
    });
  });
  describe("INTEGRATION", () => {
    it('should change a state when user typed on component', async () => {
        const {getByTestId, getByText} = render(<MockSearchInputInegrationComponent/>)

        await userEvent.type(getByTestId('search-input-component'), 'any_text')

        expect(getByText(/any_text/i)).toBeInTheDocument()
    })
  });
});
