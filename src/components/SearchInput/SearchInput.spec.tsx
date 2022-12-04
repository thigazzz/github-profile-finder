import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

interface SearchInputProps extends React.HTMLAttributes<HTMLInputElement> {
    value: string;
}

const SearchInput = ({ value,...rest }: SearchInputProps) => {
  return (
    <input
      type="text"
      data-testid="search-input-component"
      placeholder="digite o nome do usuário"
      value={value}
      {...rest}
    />
  );
};

describe("Search Input Component", () => {
  it("should call a function when user type on input", async () => {
    const mockFunction = jest.fn();
    const { getByTestId, debug } = render(
      <SearchInput onChange={() => mockFunction()} value={''}/>
    );

    await userEvent.type(getByTestId("search-input-component"), "any_text");

    expect(mockFunction).toHaveBeenCalled();
  });
  it('should have a placeholder: "digite o nome do usuário', () => {
    const { getByTestId } = render(<SearchInput onChange={(text) => text} value={''}/>);

    expect(getByTestId("search-input-component")).toHaveAttribute(
      "placeholder",
      "digite o nome do usuário"
    );
  });
  it('should have a value in atributes', () => {
    const { getByTestId } = render(<SearchInput onChange={(text) => text} value={'any_value'}/> );

    expect(getByTestId("search-input-component")).toHaveAttribute('value')
  })
});
