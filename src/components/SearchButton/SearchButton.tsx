export const SearchButton = ({
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...rest}
      data-testid="search-button-component"
      className="w-full h-full bg-green-700 text-sm rounded-md hover:bg-green-800"
    >
      Pesquisar
    </button>
  );
};
