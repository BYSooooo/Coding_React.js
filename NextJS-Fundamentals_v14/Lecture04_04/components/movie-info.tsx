import potato from "../styles/movie-info.module.css";
import { API_URL } from "../app/(home)/page";


export async function getMovie(id: string) {
    console.log(`Fetching movies : ${Date.now()}`)
    await new Promise((resolve)=> setTimeout(resolve,5000));
    const response = await fetch(`${API_URL}/${id}`); 
    return response.json()
}

export default async function MovieInfo({id} : {id: string}) {
    const movie = await getMovie(id);
    return (
        <div className={potato.container}>
            <img
                className={potato.poster}
                alt={movie.title} 
                src={movie.poster_path} />
            <div className={potato.info}>
                <h1 className={potato.title}>{movie.title}</h1>
                <h1>{movie.vote_average.toFixed(1)}</h1>
                <p>{movie.overview}</p>
                <a href={movie.hompage} target={"_blank"}>
                    Hompage
                </a>
            </div>
        </div>
    )
}