import ArticleList from "../components/ArticleList";
import { useEffect, useState } from "react";



const ArticleContainer = () => {

const SERVER_URL = "http://localhost:8080"

const [articles, setArticles] = useState([]);


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
    <div className="articleBox">
        <div className="articlestitle">
            <h1>Articles</h1>
        </div>
        <section>
            {/* <ArticleList articles={articles} />
             */}

            {articles ? <ArticleList articles={articles}/> : ""}
        </section>
    </div>
            )
    
}
 
export default ArticleContainer;