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
  };
}

export const GettedGitHubProfile = ({
  profileData,
}: GettedGitHubProfileProps) => {
  return (
    <section>
      <div>
        <img
          src={profileData?.avatar_url}
          alt="github-profile-image"
          data-testid="github-profile-image-element"
        />
      </div>
      <div>
        <h1 data-testid="github-profile-name-element">{profileData?.name}</h1>
        <span data-testid="github-profile-username-element">
          {profileData?.username}
        </span>
        <div>
          <p data-testid="github-profile-bio-element">
            {profileData?.biography}
          </p>
        </div>
      </div>
      <div>
        <h3 data-testid="github-profile-languages-title-element">Linguagens</h3>
        <ul data-testid="github-profile-languages-element">
          {profileData?.languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
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
  );
};
