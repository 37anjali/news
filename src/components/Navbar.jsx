import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import NewsContext from '../context/NewsContext'

const Navbar = () => {
  let ctx = useContext(NewsContext)
  console.log(ctx)


     const handleClick = (ans)=>{
         console.log(ans)
         ctx.setsearch(ans)
    


  }


  const [item,setitem] = useState("");
const handleChanger = (e)=>{
  let value =e.target.value
  console.log(value)
  setitem(value)
}

const handleSearch = (e)=>{
  e.preventDefault()

  ctx.setsearch(item)
}

  return (
    <div>
      <nav className="navbar navbar-expand-lg nav">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#"> <b>My News App</b> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active bg-light" aria-current="page" to="#">Home</Link>
        </li>
        <li onClick={()=>handleClick('finance')} className="nav-item">
          <Link className="nav-link" to="#">Finance</Link>
        </li>
        
        <li  onClick={()=>handleClick('sports')} className="nav-item">
          <Link className="nav-link" to="#">Sports</Link>
        </li>
        
        <li onClick={()=>handleClick('entertainment')} className="nav-item">
          <Link className="nav-link" to="#">Entertainment</Link>
        </li>
        <li onClick={()=>handleClick('politics')} className="nav-item">
          <Link className="nav-link" to="#">Politics</Link>
        </li>
        <li onClick={()=>handleClick('crime')} className="nav-item">
          <Link className="nav-link" to="#">Crime</Link>
        </li>
      
        

      </ul>
      <form className="d-flex" role="search">
        <input onChange={handleChanger} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button  onClick={handleSearch} className="btn bg-light btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
