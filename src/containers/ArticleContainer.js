import { useEffect, useState} from "react";
import ArticleList from "../components/ArticleList";

const SERVER_URL = "http://localhost:8080"


const ArticleContainer = () => {

    const [articles, setArticles] = useState();


    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(`${SERVER_URL}/articles`)
            const data = await response.json();
            setArticles(data);
            console.log(data);
        }
        fetchData()
            }, [])


    return ( 
        <>
       {articles ? <ArticleList articles={articles}/> : ""}
       </>
     );
}
 
export default ArticleContainer;