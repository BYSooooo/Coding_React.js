import Link from "next/link";

interface MovieProps {
    title : string;
    id : string;
    poster_path : string
}

export default function Movie({title, id, poster_path} : MovieProps) {
    return (
        <div>
            <img src={poster_path} alt={title} />
            <Link href={`/movies/${id}`}>
                {title}
            </Link>
        </div>
    )
}