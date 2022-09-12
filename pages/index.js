import Link from "next/link";

const Home = () => {
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
        </>
    )
}

export default Home;