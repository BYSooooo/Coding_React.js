import Head from "next/head";
import { useRouter } from "next/router";

export default function Seo() {
    const router = useRouter()
    const obj = {'/': "Home", '/about':"About" };
    return (
        <Head>
            <title>{obj[router.pathname]} | Next Movies</title>
        </Head>
    )
}