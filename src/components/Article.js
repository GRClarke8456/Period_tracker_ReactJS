const Article = ({article}) => {
    return ( 
        <>

            <section className="products">
                <h2>{article.title}</h2>
                <p>{article.content}</p>
                <p>{article.date}</p>
                {/* <p>{article.articleslikes}</p>
                <p>{article.numOfLikes}</p>
                <p>{article.comments}</p> */}

            </section>


        </>

     );
}
 
export default Article;