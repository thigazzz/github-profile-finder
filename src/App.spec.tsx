import { render } from "@testing-library/react"
import App from "./App"
import { LoadingProvider } from "./contexts/LoadingContext"

test('Render App', () => {
    const {getByTestId} = render(<App/>, {wrapper: LoadingProvider})

    expect(getByTestId('main-page-component')).toBeInTheDocument()
})