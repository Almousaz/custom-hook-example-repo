import { UseGetCat } from "./useGetCat"



export const Cat = () => {

  const { data : catData , isLoading , refetchData} = UseGetCat();


    if(isLoading) return <h2>Loading ...</h2>
    
    return (
        <div>
            <button onClick={refetchData}>refetch data</button>
            <h1>{catData?.fact}</h1>
        </div>
    )




}