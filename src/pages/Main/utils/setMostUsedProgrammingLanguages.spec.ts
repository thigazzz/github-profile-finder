import { setMostUsedProgrammingLanguages } from "./setMostUsedProgrammingLanguages"


describe("Set Most Used Programming Languages", () => {
    it('must return three languages if parameter have more than 3 programming languages', () => {
        const mockLanguages = [
            { language: 'Javascript' },
            { language: 'Javascript' },
            { language: 'Javascript' },
            { language: 'Javascript' },
            { language: 'PHP' },
            { language: 'PHP' },
            { language: 'Python' },
            { language: 'Python' },
            { language: 'Python' },
            { language: 'Java' },
        ]

        const languagesLength = setMostUsedProgrammingLanguages(mockLanguages)
        expect(languagesLength.length).toBeGreaterThanOrEqual(3)
    })
    it('must return one or tow language if parameter not have more than 3 programming languages', () => {
        const mockLanguages = [
            { language: 'Javascript' },
            { language: 'Javascript' },
            { language: 'Javascript' },
            { language: 'Javascript' },
            { language: 'PHP' },
            { language: 'PHP' },
            { language: 'PHP' },
            { language: 'PHP' },
        ]
        const languagesLength = setMostUsedProgrammingLanguages(mockLanguages)
        console.log(languagesLength)
        expect(languagesLength.length).toBeLessThan(3)
    })
    it('must return the sequence of languages from most used to least used language', () => {
        const mockLanguages = [
            { language: "TypeScript" },
            { language: "TypeScript" },
            { language: "TypeScript" },
            { language: "TypeScript" },
            { language: "TypeScript" },
            { language: "JavaScript" },
            { language: "JavaScript" },
            { language: "JavaScript" },
            { language: "TypeScript" },
            { language: "TypeScript" },
            { language: "TypeScript" },
            { language: "TypeScript" },
            { language: "TypeScript" },
            { language: "TypeScript" },
            { language: "TypeScript" },
            { language: "TypeScript" },
            { language: "JavaScript" },
            { language: "GDScript" },
            { language: "TypeScript" },
            { language: "TypeScript" },
            { language: "TypeScript" },
            { language: "JavaScript" },
            { language: "TypeScript" },
            { language: "TypeScript" },
            { language: "TypeScript" }
        ]
        const mostUsedLanguages = setMostUsedProgrammingLanguages(mockLanguages)
        expect(mostUsedLanguages).toEqual(['TypeScript', 'JavaScript', 'GDScript'])
    })
})