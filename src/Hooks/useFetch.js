import { useEffect , useState } from "react";
import axios from "axios";

export const useFetch = url => {
    const [apiData , setApiData] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get(url);
                setApiData(response.data);
                setLoading(false);
                setError("");
            }
            catch (err) {
                setApiData([]);
                setLoading(true);
                setError(err.message);
            }
        }
        fetchData();
    } , [url])

    return [apiData , loading , error];
}