import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

interface SearchInputProps extends React.HTMLAttributes<HTMLInputElement> {}

const SearchInput = ({ ...rest }: SearchInputProps) => {
  return (
    <input
      type="text"
      data-testid="search-input-component"
      placeholder="digite o nome do usuário"
      {...rest}
    />
  );
};

describe("Search Input Component", () => {
  it("should call a function when user type on input", async () => {
    const mockFunction = jest.fn();
    const { getByTestId, debug } = render(
      <SearchInput onChange={() => mockFunction()} />
    );

    await userEvent.type(getByTestId("search-input-component"), "any_text");

    expect(mockFunction).toHaveBeenCalled();
  });
  it('should have a placeholder: "digite o nome do usuário', () => {
    const { getByTestId } = render(<SearchInput />);

    expect(getByTestId("search-input-component")).toHaveAttribute(
      "placeholder",
      "digite o nome do usuário"
    );
  });
});
