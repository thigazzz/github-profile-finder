export const SearchButton = ({...rest}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button {...rest} data-testid='search-button-component'>
            Pesquisar
        </button>
    )
}