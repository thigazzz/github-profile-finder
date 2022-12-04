export const SearchInput = ({ ...rest }: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
      <input
        type="text"
        data-testid="search-input-component"
        placeholder="digite o nome do usuário"
        {...rest}
      />
    );
  };