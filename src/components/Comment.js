const Comment = ({comment}) => {
    return ( 
        <div>
            <li>{comment.text} - {comment.user.name}</li>
        </div>
     );
}
 
export default Comment;