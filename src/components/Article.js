const Article = ({article}) => {
    return ( 

        <div>
        <p>title: {article.title}</p>
        <p>{article.content}</p>
        <p>{article.date}</p>
        <hr/>
        </div>

     );
}
 
export default Article;