import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import usersState from "../src/stores/users";
import { useRecoilValue  } from "recoil";


 
const NavBar = () => {
    const users = useRecoilValue(usersState)


    useEffect(() => {
        users && token && users.forEach(data => {
            if(data.role == "admin"){
                const id = data.id
                if ( id == userId){
                 setIsAdmin(true)
                }
            }
         });
       })
  

    const token = localStorage.getItem("token")
    const userId = localStorage.getItem("id")


    const [isAdmin, setIsAdmin] =useState(false)

  
    
  
   
   useEffect(() => {
    users && token && users.forEach(data => {
        if(data.role == "admin"){
            const id = data.id
            if ( id == userId){
             setIsAdmin(true)
            }
        }
     });
   },[])
  
    

    return ( 
    <header className="header">
       <div className="logo"> <Link className="links" to="/"><h1>SuperShoppen</h1></Link></div>
       <nav className="navbar">
    <Link className="links" to="/produkter">Produkter</Link>
    <Link className="links" to="/varukorg">Varukorg</Link>
    <Link className="links" to="/user-info">Profile</Link>
    <Link className="links" to="/admin">Admin</Link>
    {<Link className="links" to="/login">Login/Logout</Link>}
    
    
    
   
    </nav>
    </header>
    )}

 
export default NavBar