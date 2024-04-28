import { URL_API } from "./Constant"
export async function fetchData() {
    try {
        const res = await fetch(URL_API, {
            cache: 'no-store'
        })
        let data = await res.json();
        data = data.memes;
        return data;
    } catch (error) {
        console.log('Error: Unbale to fetch data from server ', error)
    }
}