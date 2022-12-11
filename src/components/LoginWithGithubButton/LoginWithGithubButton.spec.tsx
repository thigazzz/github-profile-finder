import { render } from "@testing-library/react"
import { LoginWithGithubButton } from "./LoginWithGithubButton"

describe('Login With Github Button Component', () => {
    it('should have a element with testid: github-icon', () => {
        const {getByTestId} = render(<LoginWithGithubButton/>)

        expect(getByTestId('github-icon')).toBeInTheDocument()
    })
    it('should have a content text: Login With Github', () => {
        const {container} = render(<LoginWithGithubButton/>)

        expect(container).toHaveTextContent(/login with github/i)
    })
})