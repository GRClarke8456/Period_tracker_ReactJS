
const User = ({users}) => {

    let mappedUsers = users.map((user, id) => {
        return <User user={user} />
    })

    return ( 
        {mappedUsers}
     );
}
 
export default User;