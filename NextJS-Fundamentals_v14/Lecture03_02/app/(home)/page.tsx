

export const metadata = {
    title : "Home"
}
const URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies() {
    await new Promise((resolve)=> setTimeout(resolve, 5000))
    const response = await fetch(URL)
    const json = await response.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies()

    return <div>{JSON.stringify(movies)}</div>
}
//"use client";
    

/** Client Side Fetching Code */

// import { useEffect, useState } from "react"

// export default function Page() {

//     const [isLoading, setIsLoading] = useState(true);
//     const [movies, setMovies] = useState();
    
//     const getMovies = async()=> {
//         const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies")
//         const json = await response.json()
//         setMovies(json)
//         setIsLoading(false)
//     }

//     useEffect(()=> {
//         getMovies()
//     },[])

//     return (
//         <div>
            
//             {isLoading ? "Loading" : JSON.stringify(movies)}
//         </div>
//     )
// }