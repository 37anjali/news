import React from 'react'
import { Link } from 'react-router-dom'

const pagination = (props) => {
    let noOfButton = Math.ceil(props.mynews.length/props.itemPerPage)
    let buttonArr = [...Array(noOfButton+1).keys()].slice(1)
    console.log(buttonArr)


      const handleDecrement = ()=>{
        if(props.currentPage > 1){
            props.setcurrentPage(props.currentPage-1)
        }
      }

      const handleIncrement = ()=>{
        props.setcurrentPage(props.currentPage + 1)
      }

  return (
    <div>
      <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li onClick={handleDecrement} className="page-item"><a class="page-link" href="#/">Previous</a></li>

    {
        buttonArr.map((ele)=>{
         return  <li key={ele} onClick={()=>props.setcurrentPage(ele)} className={ele===props.currentPage?"page-item active":"page-item"}><Link class="page-link" to="#">{ele}</Link></li>

        })
        
    }
    <li  onClick={handleIncrement} className="page-item"><Link class="page-link" href="#/">Next</Link></li>

      </ul>
</nav>
    </div>
  )
}

export default pagination
