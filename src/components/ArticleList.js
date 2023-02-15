import Article from "./Article";
import { UserContext } from "../App";
import { useContext } from "react";

const ArticleList = ({articles}) => {

    // let mappedArticles = articles.map((article) => {
    //     return <Article key={article.id} article={article} value={articles} />
    // })
    
    const [user] = useContext(UserContext);

    let ArticleComponent;
    if(articles){
        return ArticleComponent = articles.map((article) => {
            return (<Article key={article.id} article={article} name={article.title}/>)
        });
    }



    return ( 
        <div className="productcard">
            <h1>Hey</h1>
            {ArticleComponent}
        </div>
     );
}
 
export default ArticleList;