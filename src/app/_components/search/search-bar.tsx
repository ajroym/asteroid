/*
    An opinionated search bar. Forces input into a 
    standard date format as one types. Does not
    accept non-numeric characters.
*/

'use client'

function ValidateInput() {

}

export default function SearchBar() {

    const onChange = () => {

    }

    return (
        <div className="w-full flex justify-center items-center">
            <input type="date" className="text-lg w-44 h-9 rounded-md bg-linear-to-t from-neutral-950 to-neutral-800 border-[1px] border-neutral-600 px-2 z-3000"></input>
        </div>
    )
}