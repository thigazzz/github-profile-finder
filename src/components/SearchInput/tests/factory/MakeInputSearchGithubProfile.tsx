import { MakeInputSearchGithubProfileProps } from './interface/MakeInputSearchGithubProfileProps'

export const MakeInputSearchGithubProfile = ({ getterElementFunction, selector }: MakeInputSearchGithubProfileProps): HTMLElement => {
    return (
        getterElementFunction(selector)
    )
}