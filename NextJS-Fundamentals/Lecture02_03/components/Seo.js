import Head from "next/head";
import { useRouter } from "next/router";

export default function Seo() {
    const router = useRouter()
    const obj = {'/': "Home", '/about':"About" };
    const fullTitle = `${obj[router.pathname]} | Next Movies`
    return (
        <Head>
            <title>{fullTitle}</title>
        </Head>
    )
}