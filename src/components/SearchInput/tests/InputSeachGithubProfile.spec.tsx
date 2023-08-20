import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoadingProvider } from "../../../contexts/LoadingContext";
import { MockInputSearchGithubProfileComponent } from "./mocks/MockSearchInputIntegrationComponent";
import { InputSeachGithubProfile } from "../InputSeachGithubProfile";
import { MakeInputSearchGithubProfile } from "./factory/MakeInputSearchGithubProfile";

const SELECTOR_ELEMENT = "search-input-component"

describe("Input Search Github Profile Component", () => {
  describe("Unit Test", () => {
    it("should call a function when user type on input", async () => {
      const mockFunction = jest.fn();
      const { getByTestId } = render(
        <InputSeachGithubProfile onChange={() => mockFunction()} value={""} />,
        { wrapper: LoadingProvider }
      );
      const inputElement = MakeInputSearchGithubProfile({getterElementFunction: getByTestId, selector: SELECTOR_ELEMENT})

      await userEvent.type(inputElement, "any_text");

      expect(mockFunction).toHaveBeenCalled();
    });
    it('should have a placeholder: "digite o nome do usuário', () => {
      const { getByTestId } = render(
        <InputSeachGithubProfile onChange={(text) => text} value={""} />,
        { wrapper: LoadingProvider }
      );

      const inputElement = MakeInputSearchGithubProfile({getterElementFunction: getByTestId, selector: SELECTOR_ELEMENT})

      expect(inputElement).toHaveAttribute(
        "placeholder",
        "digite o nome do usuário"
      );
    });
    it("should have a value in atributes", () => {
      const { getByTestId } = render(
        <InputSeachGithubProfile onChange={(text) => text} value={"any_value"} />,
        { wrapper: LoadingProvider }
      );
      const inputElement = MakeInputSearchGithubProfile({getterElementFunction: getByTestId, selector: SELECTOR_ELEMENT})

      expect(inputElement).toHaveAttribute("value");
    });
    it('should change value text when type event is called', async () => {
      const { getByTestId } = render(
        <InputSeachGithubProfile onChange={(text) => text}/>,
        { wrapper: LoadingProvider }
      );
      const inputElement = MakeInputSearchGithubProfile({getterElementFunction: getByTestId, selector: SELECTOR_ELEMENT})
      
      await userEvent.type(inputElement, "any_text");

      expect(inputElement).toHaveValue('any_text')

    })
  });
  describe("Integration Test", () => {
    it("should change a state when user typed on component", async () => {
      const { getByTestId, getByText } = render(
        <MockInputSearchGithubProfileComponent />,
        { wrapper: LoadingProvider }
      );
      const inputElement = MakeInputSearchGithubProfile({getterElementFunction: getByTestId, selector: SELECTOR_ELEMENT})

      await userEvent.type(inputElement, "any_text");

      expect(getByText(/any_text/i)).toBeInTheDocument();
    });
  });
});
