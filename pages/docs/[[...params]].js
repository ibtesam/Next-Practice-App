import { useRouter } from "next/router";

const Docs = () => {
    const router = useRouter()
    const {params = []} = router.query

    if (params.length == 2) {
        return <h1>Length {params.length} : Index 0 {params[0]}, Index 1 {params[1]}</h1>
    }
    else if (params.length == 1) {
        return <h1>Length {params.length} : Index 0 {params[0]}</h1>
    }
    return <h1>Docs Page</h1>
}

export default Docs;