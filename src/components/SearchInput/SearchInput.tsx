export const SearchInput = ({ ...rest }: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
      <input
        type="text"
        data-testid="search-input-component"
        placeholder="digite o nome do usuário"
        className="w-full h-full p-2 bg-gray-800 text-xs text-white placeholder:text-xs rounded-md"
        {...rest}
      />
    );
  };