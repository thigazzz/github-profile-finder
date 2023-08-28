const MAX_NUMBER_TO_RETURN_THE_MOST_LANGUAGES = 3

export const setMostUsedProgrammingLanguages = (
  languagesUsedInRepositories: {language: string}[]
) => {
  const languageWithTheirNamesAndAmoutOfEach = getLanguageWithTheirNamesAndAmoutOfEach(languagesUsedInRepositories)
  return sortLanguagesFromMostUsedToLeastUsedLanguage(languageWithTheirNamesAndAmoutOfEach) as string[];
};

const getLanguageWithTheirNamesAndAmoutOfEach = ((languages: {language: string}[]) => {
  return formatListOfLanguages(sortLanguagesAlphabetically(languages)).map((languages) => [
    languages[0].language,
    languages[0].count,
  ]);
})

const sortLanguagesAlphabetically = (languages: {language: string}[]) => {
  return languages.map(language => language.language).sort()
}

const formatListOfLanguages = (languages: string[]): [{language: string, count: number}][] => {
  // format languages in an array of arrays
  // example:
  /*

  [
    [
      language: any,
      count: number of language is used
    ]
  ]

  */
  let index = 0
  const languagesFormatted: [{language: string, count: number}][] = []
  languages.forEach(nameOfLanguage => {
    if (languagesFormatted.length === 0) {
      languagesFormatted.push([{
        language: nameOfLanguage,
        count: 1
      }])

      return
    }

    if (nameOfLanguage === languagesFormatted[index][0].language) {
      languagesFormatted[index][0].count++
      return
    }
    languagesFormatted.push([{language: nameOfLanguage, count: 1}])
    index++
  })

  return languagesFormatted
}


const sortLanguagesFromMostUsedToLeastUsedLanguage = (languages: (string | number)[][]) => {
  return languages
  .sort((a: any, b: any) => b[1] - a[1]) // ordering in desc order | the greatest to lowest | 100 - 2
  .slice(0, MAX_NUMBER_TO_RETURN_THE_MOST_LANGUAGES)
  .map((languageAndCount: (string | number)[]) => languageAndCount[0]);

}
