import { useState } from "react";

export default function Search(){
    const [value, setValue] = useState('')
    const buscar = (e) => setValue(e.target.value)
    const url = "/results/"

    return(
        <div>
            <center>
                <h1 class="mt-5">Search Movie</h1>
                <h2>{value}</h2>
                <form action={url + value} method="POST">
                    <input type="search" class="form-control p-3" 
                    value={value} onChange={buscar} 
                    placeholder="Search" />
                </form>
            </center>
        </div>
    )
}





// function Search() {
// const [text, setText] = useState("Hola React");

// return (
// <div>
// <h1>{text}</h1>
// <button onClick={() => setText("Bienvenido a React")}>Click</button>
// </div>
// )
// }


// export default Search;
