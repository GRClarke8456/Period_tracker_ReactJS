import ArticleList from "../components/ArticleList";
import { useEffect, useState } from "react";



const ArticleContainer = () => {

const SERVER_URL = "http://localhost:8080"

const [articles, setArticles] = useState([]);

    const token = localStorage.getItem("jwt");


    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(`${SERVER_URL}/articles`, {
                headers: {
                    // "Access-Control-Allow-Origin": true,
                    // "Authorization": "Bearer " +token
                },
                credentials: "include"
            })
            const data = await response.json();
            setArticles(data);
            console.log(data);
        }
        fetchData()
            }, [])



            return (
    <div className="articleBoxx">
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