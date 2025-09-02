/*
    An opinionated search bar. Forces input into a 
    standard date format as one types. Does not
    accept non-numeric characters.
*/

'use client'

function ValidateInput() {

}

export default function SearchBar({ inputChanged }: { inputChanged: Function }) {

    const onChange = (value: string) => {
        inputChanged(value);
    }

    return (
        <div className="w-full flex justify-center items-center">
            <input onChange={(event) => onChange(event.target.value)} type="date" className="text-lg w-44 h-9 rounded-md bg-linear-to-t from-neutral-950 to-neutral-800 border-[1px] border-neutral-600 px-2 z-3000"></input>
        </div>
    )
}