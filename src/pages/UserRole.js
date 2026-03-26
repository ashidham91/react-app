function UserRole(){

 const users = [
  {name:"John", role:"Admin"},
  {name:"David", role:"User"}
 ]

 return(
  <div>
   <h2>User Roles</h2>
   <ul>
    {users.map((u,i)=>(
      <li key={i}>
        {u.name} - {u.role}
      </li>
    ))}
   </ul>
  </div>
 )
}

export default UserRole;