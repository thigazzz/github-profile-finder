import { render } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { LoadingProvider } from "../../contexts/LoadingContext"
import { SearchButton } from "./SearchButton"

describe('Search Button Component', () => {
    it('should call a function when button was clicked', async () => {
        const mockHandleClickFunction = jest.fn()
        const {getByTestId} = render(<SearchButton onClick={mockHandleClickFunction}/>, {wrapper: LoadingProvider})

        await userEvent.click(getByTestId('search-button-component'))

        expect(mockHandleClickFunction).toHaveBeenCalled()
    })
    it('should be disabled if props is passed', () => {
        const {getByTestId} = render(<SearchButton disabled={true}/>, {wrapper: LoadingProvider})

        expect(getByTestId('search-button-component')).toBeDisabled()
    })
    it('should have a content text: Pesquisar (isso irá mudar mais tarde)', () => {
        const {getByTestId} = render(<SearchButton/>, {wrapper: LoadingProvider})

        expect(getByTestId('icon-search')).toBeInTheDocument()
    })
})