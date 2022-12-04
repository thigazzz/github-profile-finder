import { render } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import React from "react"

const SearchButton = ({...rest}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button {...rest} data-testid='button-test'>
            Pesquisar
        </button>
    )
}

describe('Search Button Component', () => {
    it('should call a function when button was clicked', async () => {
        const mockHandleClickFunction = jest.fn()
        const {getByTestId} = render(<SearchButton onClick={mockHandleClickFunction}/>)

        await userEvent.click(getByTestId('button-test'))

        expect(mockHandleClickFunction).toHaveBeenCalled()
    })
    it('should have a content text: Pesquisar (isso irá mudar mais tarde)', () => {
        const {container} = render(<SearchButton/>)

        expect(container).toHaveTextContent(/pesquisar/i)
    })
})