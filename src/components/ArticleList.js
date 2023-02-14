import { useEffect } from "react";
import Article from "./Article";

const ArticleList = ({articles}) => {

    let ArticleComponent;
        if(articles){
            return ArticleComponent = articles.map((article) => {
                return (<Article key={article.id} article={article} name={article.title}/>)
            });
        }
   
    return ( 
        <>
        <h2>List of Articles!</h2>
        {ArticleComponent}
        </>
     );
}
 
export default ArticleList;