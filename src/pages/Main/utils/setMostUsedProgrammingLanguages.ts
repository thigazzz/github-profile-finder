export const setMostUsedProgrammingLanguages = (
  receivedGithubUsernameRepositories: {language: string}[]
) => {
  // Grabbing the name of the languages used. Not the amount of projects using this language => ['js', 'ts', 'html', ...]
  const languagesNameInSequence: string[] = [];

  receivedGithubUsernameRepositories.forEach((language) => {
    if (!languagesNameInSequence.includes(language.language) && language.language !== null) {
      languagesNameInSequence.push(language.language);
    }
  });

  
  // An array containing arrays with the names of the languages => [['js', 'js'], ['ts', ts'], ['html']]
  const LanguagesNameWithoutRepetation = languagesNameInSequence.map(
      (languageName) =>
      receivedGithubUsernameRepositories.filter(
          (language) => language.language === languageName
      )
  );
  
  // An array containing arrays with the name and the amount of each language
  const languageWithTheirNamesAndAmoutOfEach = LanguagesNameWithoutRepetation.map((languages) => [
      languages[0].language,
      languages.length,
    ]);
    
    const threeLanguagesMostUsed = languageWithTheirNamesAndAmoutOfEach
    .sort((a: any, b: any) => b[1] - a[1]) // ordering in desc order | the greatest to lowest | 100 - 2
    .slice(0, 3) // Grabbing the first 3
    .map((arr: any) => arr[0]); // returning only the name of the language. Because this array contains the name and the amount

  return threeLanguagesMostUsed as string[];
};
