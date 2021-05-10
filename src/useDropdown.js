import React, { useState } from 'react';

const useDropdown = (lable, defaultState, options) => {
    const [state, setState] = useState(defaultState);
    const id = `use-dropdown-${lable.replace(" ","").toLowerCase()}`
    const Dropdown = () => (
        <lable htmlFor={id}>
            {lable}
            <select id={id} value={state} onChange={event => setState(event.target.value)} onBlur={event => setState(event.target.value)} disabled={options.length===0} >
            <option>All</option>
            {options.map(item => (
                <option key={item} value={item}>{item}</option>
            ))}
            </select>

        </lable>
    )
    return [state, Dropdown, setState]
}
export default useDropdown;