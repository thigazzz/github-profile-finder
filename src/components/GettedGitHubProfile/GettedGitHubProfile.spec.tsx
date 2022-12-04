import { render } from "@testing-library/react"

const GettedGitHubProfile = () => {
    return (
        <section>
            <div>
                <img src="#" alt="github-profile-image" data-testid='github-profile-image-element'/>
            </div>
            <div>
                <h1 data-testid='github-profile-name-element'>Nome usuário</h1>
                <span data-testid='github-profile-username-element'>Usrname</span>
                <div>
                    <p data-testid='github-profile-bio-element'>

                    </p>
                </div>
            </div>
            <div>
                <h3 data-testid='github-profile-languages-element'>Linguagens</h3>
            </div>
        </section>
    )
}

describe('Getted Git Hub Profile', () => {
    it('should have a image element to github profile', () => {
        const {getByTestId} = render(<GettedGitHubProfile/>)

        expect(getByTestId('github-profile-image-element')).toBeInTheDocument()
        expect(getByTestId('github-profile-image-element')).toHaveAttribute('alt', 'github-profile-image')
    })
    it('should have a div for github user name, and sub divs: username, bio', () => {
        const {getByTestId} = render(<GettedGitHubProfile/>)

        expect(getByTestId('github-profile-name-element')).toBeInTheDocument()
        expect(getByTestId('github-profile-username-element')).toBeInTheDocument()
        expect(getByTestId('github-profile-bio-element')).toBeInTheDocument()
    })
    it('should have a div for github user languages', () => {
        const {getByTestId} = render(<GettedGitHubProfile/>)

        expect(getByTestId('github-profile-languages-element')).toBeInTheDocument()
    })
})