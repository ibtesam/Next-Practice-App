import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
    const router = useRouter()

    const clickHandler = () => {
        alert("navigating to product")
        router.push("/product")
        // router.replace("/product")
    }
    return (
        <>
            <h1>Home Pages</h1>
            <p>
                <Link href="/blog">
                <a>Blog page</a>
                </Link>
            </p>
            <p>
                <Link href="/product">
                <a>Product page</a>
                </Link>
            </p>
            <button onClick={clickHandler}>
                CLICK ME
            </button>
        </>
    )
}

export default Home;