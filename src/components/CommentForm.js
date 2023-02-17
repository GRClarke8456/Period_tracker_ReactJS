import { useState, useContext} from "react";
import { UserContext } from "../App";

const CommentForm = ({postNewComment, articleId}) => {

    const [text, setText] = useState("");
    const [datePosted, setDatePosted] = useState(new Date());

    const [user, setUser] = useContext(UserContext);

    const handleSubmit = (event) => {
    event.preventDefault();
    postNewComment({text, articleId, datePosted, userId:user.id});
    setText("")
    }

    return ( 
        <div className="comment-form">
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="add a comment"
            onChange={(e) => setText(e.target.value)}
            value={text} />
            <button type="submit">submit</button>        
            </form>
        </div>    
     );
}
 
export default CommentForm;