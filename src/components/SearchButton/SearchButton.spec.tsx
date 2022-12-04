import { render } from "@testing-library/react"

const SearchButton = () => {
    return (
        <button>
            Pesquisar
        </button>
    )
}

describe('Search Button Component', () => {
    it('should have a content text: Pesquisar (isso irá mudar mais tarde)', () => {
        const {container} = render(<SearchButton/>)

        expect(container).toHaveTextContent(/pesquisar/i)
    })
})