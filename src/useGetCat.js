
import { useQuery } from "react-query";
import  Axios  from "axios";



export const UseGetCat = () => {

    const {data , isLoading , refetch} = useQuery(["cat"] , async () => {
        return Axios.get("https://catfact.ninja/fact").then((res)=> res.data);
    });

    const refetchData = () =>{
        alert("data refetched");
        refetch()
    }

    return { data , isLoading , refetchData }

}