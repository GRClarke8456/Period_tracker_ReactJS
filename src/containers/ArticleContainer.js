import { useEffect, useState} from "react";
import ArticleList from "../components/ArticleList";
import Search from "../components/Search";

const SERVER_URL = "http://localhost:8080"


const ArticleContainer = () => {

    const [articles, setArticles] = useState();


    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(`${SERVER_URL}/articles`)
            const data = await response.json();
            setArticles(data);
        }
        fetchData()
            }, [])


    return ( 
        <div>
       <Search/>
       <ArticleList></ArticleList>
       </div>
     );
}
 
export default ArticleContainer;