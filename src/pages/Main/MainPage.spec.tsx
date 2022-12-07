import { render } from "@testing-library/react"
import { GettedGitHubProfile } from "../../components/GettedGitHubProfile/GettedGitHubProfile"
import { SearchButton } from "../../components/SearchButton/SearchButton"
import { SearchInput } from "../../components/SearchInput/SearchInput"

const MainPage = () => {
    return (
        <div>
            <SearchInput data-testid='search-input-component'/>
            <SearchButton data-testid='search-button-component'/>
            <GettedGitHubProfile data-testid='getted-github-profile-component'/>
        </div>
    )
}

describe('Main Page', () => {
    it('should have a SearchButton component', () => {
        const {getByTestId} = render(<MainPage/>)

        expect(getByTestId('search-button-component')).toBeInTheDocument()
    })
    it('should have a SearchInput component', () => {
        const {getByTestId} = render(<MainPage/>)

        expect(getByTestId('search-input-component')).toBeInTheDocument()
    })
    it('should have a GettedGithubProfile component', () => {
        const {getByTestId} = render(<MainPage/>)

        expect(getByTestId('getted-github-profile-component')).toBeInTheDocument()
    })
})
