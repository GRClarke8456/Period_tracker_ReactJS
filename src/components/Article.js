import Comment from "./Comment";
import { useState } from "react";
import CommentForm from "./CommentForm";

const SERVER_URL = "http://localhost:8080"

const Article = ({article}) => {

    const [comments, setComments] = useState(article.comments)

    const commentComponent = comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />
    })

    // Post Comment
    const postNewComment = (newComment) => {
        fetch(`${SERVER_URL}/comments`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newComment),
        })

        .then((response) => response.json())
        .then((response) => {
            setComments([... comments, response]);
        });
    };


    return ( 
        <>

            <section className="products">
                <h2>{article.title}</h2>
                <p>{article.content}</p>
                <p>{article.date}</p>
                <p>Reviews:</p>
                <ul>
                    {commentComponent}
                </ul>
                <CommentForm postNewComment={postNewComment} articleId={article.id} />
                {/* <p>{article.articleslikes}</p>
                <p>{article.numOfLikes}</p>
                <p>{article.comments}</p> */}

            </section>


        </>

     );
}
 
export default Article;