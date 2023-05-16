import  Link  from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    
    return (
        <nav>
            <Link style={{color : router.pathname === "/" ? "Red" : "Blue" } }href="/"> Home </Link>
            <Link style={{color : router.pathname === "/about" ? "Red" : "Blue"}}href="/about">About </Link>
        </nav>
    );
}