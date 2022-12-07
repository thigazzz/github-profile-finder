import { render } from "@testing-library/react"

interface GettedGitHubProfileProps {
    profileData?: {
        name: string;
    username: string;
    avatar_url: string;
    biography: string;
    languages: string[];
    followers: number;
    following: number;
    repositories: number;
    stars: number;
    }
}

const GettedGitHubProfile = ({profileData}: GettedGitHubProfileProps) => {
    return (
        <section>
            <div>
                <img src={profileData?.avatar_url} alt="github-profile-image" data-testid='github-profile-image-element'/>
            </div>
            <div>
                <h1 data-testid='github-profile-name-element'>{profileData?.name}</h1>
                <span data-testid='github-profile-username-element'>{profileData?.username}</span>
                <div>
                    <p data-testid='github-profile-bio-element'>
                        {profileData?.biography}
                    </p>
                </div>
            </div>
            <div>
                <h3 data-testid='github-profile-languages-title-element'>Linguagens</h3>
                <ul data-testid='github-profile-languages-element'>
                {profileData?.languages.map(language => <li key={language}>{language}</li>)}
                </ul>
            </div>
            <div>
                <div>
                    <span>Seguidores {profileData?.followers}</span>
                </div>
                <div>
                    <span>Seguindo {profileData?.following}</span>
                </div>
                <div>
                    <span>Repositórios {profileData?.repositories}</span>
                </div>
                <div>
                    <span>Estrelas {profileData?.stars}</span>
                </div>
            </div>
        </section>
    )
}

describe('Getted Git Hub Profile', () => {
    it('should get the github profile data and set on fields', () => {
        const mockGithubProfileData = {
            name: 'Thiago',
            username: 'thigaz',
            avatar_url: 'ant_avatar',
            biography: 'any_bio',
            languages: [
                'Javascript',
                'PHP',
                'Haskell'
            ],
            followers: 10,
            following: 10,
            repositories: 10,
            stars: 10
        }
        const {getByText, getAllByTestId, getByTestId} = render(<GettedGitHubProfile profileData={mockGithubProfileData}/>)
        
        expect(getByText(/Thiago/i)).toBeInTheDocument()
        expect(getByText(/thigaz/i)).toBeInTheDocument()
        expect(getByText(/any_bio/i)).toBeInTheDocument()
        expect(getByTestId('github-profile-image-element')).toHaveAttribute('src', mockGithubProfileData.avatar_url)
        getAllByTestId('github-profile-languages-element').map(language => expect(language).toBeInTheDocument())
        expect(getByText(`Seguidores 10`)).toBeInTheDocument()
        expect(getByText(`Seguindo 10`)).toBeInTheDocument()
        expect(getByText(`Repositórios 10`)).toBeInTheDocument()
        expect(getByText(`Estrelas 10`)).toBeInTheDocument()
        
    })

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
    it('should have a div for github user languages, with maximum 3 languages', () => {
        const mockGithubProfileData = {
            name: 'Thiago',
            username: 'thigaz',
            avatar_url: 'ant_avatar',
            biography: 'any_bio',
            languages: [
                'Javascript',
                'PHP',
                'Haskell'
            ],
            followers: 10,
            following: 10,
            repositories: 10,
            stars: 10
        }
        const {getByTestId} = render(<GettedGitHubProfile profileData={mockGithubProfileData}/>)

        expect(getByTestId('github-profile-languages-title-element')).toBeInTheDocument()
        expect(getByTestId('github-profile-languages-element').childElementCount).toBe(3)
    })
    it('should have a followers section', () => {
        const {getByText} = render(<GettedGitHubProfile/>)

        expect(getByText(/seguidores/i)).toBeInTheDocument()
    })
    it('should have a following section', () => {
        const {getByText} = render(<GettedGitHubProfile/>)

        expect(getByText(/seguindo/i)).toBeInTheDocument()
    })
    it('should have a repositories section', () => {
        const {getByText} = render(<GettedGitHubProfile/>)

        expect(getByText(/repositórios/i)).toBeInTheDocument()
    })
    it('should have a stars section', () => {
        const {getByText} = render(<GettedGitHubProfile/>)

        expect(getByText(/estrelas/i)).toBeInTheDocument()
    })
})