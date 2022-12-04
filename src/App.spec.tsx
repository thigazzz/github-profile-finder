import { render } from "@testing-library/react"
import App from "./App"

test('Render App', () => {
    const {getByText} = render(<App/>)

    expect(getByText(/hello/i)).toBeInTheDocument()
})