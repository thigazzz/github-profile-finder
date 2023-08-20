import { useState } from "react";
import { InputSeachGithubProfile } from "../../InputSeachGithubProfile";

export const MockInputSearchGithubProfileComponent = () => {
    const [valueExample, setValueExample] = useState('');
    return (
        <div>
            <span>
            {valueExample}
            </span>
            <InputSeachGithubProfile value={valueExample} onChange={(event) => setValueExample(event.target.value)}/>
        </div>
    )
}