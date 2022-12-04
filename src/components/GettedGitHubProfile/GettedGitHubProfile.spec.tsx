import { render } from "@testing-library/react"

const GettedGitHubProfile = () => {
    return (
        <section>
            <div>
                <img src="#" alt="github-profile-image" data-testid='github-profile-image-element'/>
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
})