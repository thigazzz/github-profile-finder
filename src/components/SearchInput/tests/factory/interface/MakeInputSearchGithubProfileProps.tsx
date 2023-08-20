import { Matcher, MatcherOptions } from "@testing-library/dom"

export interface MakeInputSearchGithubProfileProps {
    getterElementFunction: (id: Matcher, options?: MatcherOptions | undefined) => HTMLElement,
    selector: string
}