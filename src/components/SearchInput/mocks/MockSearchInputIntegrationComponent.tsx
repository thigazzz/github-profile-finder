import { useState } from "react";
import { SearchInput } from "../SearchInput";

export const MockSearchInputInegrationComponent = () => {
    const [valueExample, setValueExample] = useState('');
    return (
        <div>
            <span>
            {valueExample}
            </span>
            <SearchInput value={valueExample} onChange={(event) => setValueExample(event.target.value)}/>
        </div>
    )
}