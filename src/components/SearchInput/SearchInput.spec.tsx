import { render } from "@testing-library/react"

const SearchInput = () => {
    return (
        <input type="text" data-testid='search-input-component' placeholder="digite o nome do usuário"/>
    )
}

describe('Search Input Component', () => {
    it('should have a placeholder: "digite o nome do usuário', () => {
        const {getByTestId} = render(<SearchInput/>)

        expect(getByTestId('search-input-component')).toHaveAttribute('placeholder', 'digite o nome do usuário')
    })
})