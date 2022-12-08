import { render } from "@testing-library/react"
import App from "./App"

test('Render App', () => {
    const {getByTestId} = render(<App/>)

    expect(getByTestId('main-page-component')).toBeInTheDocument()
})