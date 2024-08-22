import React, { useContext, useEffect,useState } from 'react'
import TopHeadlines from '../components/TopHeadlines';
import Pagination from '../components/Pagination';
import { Link } from 'react-router-dom';
import NewsContext from '../context/NewsContext';

const Home = () => {
  let ctx =useContext(NewsContext)
  console.log(ctx)



  const [mynews,setMyNews] = useState([]);

 let fetchData = async()=>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=${ctx.search}&apiKey=4976176405fe44ffb186bfb44245bf0e`);
    let data = await res.json();
  console.log(data.articles);
  setMyNews(data.articles)


 }


 useEffect(()=>{
    fetchData();

 },[ctx.search])
// pagination code
  const [currentPage, setcurrentPage] = useState(1);
  let itemPerPage = 10;
  let lastIndex = itemPerPage*currentPage
  let firstIndex = lastIndex- itemPerPage
  let slicedItem = mynews?.slice(firstIndex,lastIndex)|| []
  return (
    <div className='row m-0 p-0 mt-3'>   
       <div className='col-9 leftside'>  
        <div className='row m-0 p-0 d-flex justify-content-center gap-3'>

          
         


     
{
  slicedItem.map((ele,index) =>{
   // console.log(ele)

    return  <>
    
   {ele.urlToImage && <div className="card" style={{width: "18rem"}}>
      <img src={ele.urlToImage} className="card-img-top" alt="..."/>
      <div className="card-body">
        
        <h5  style={{height:"60px"}} className="card-title">{ele.author}</h5>
        
      
        <p className="card-text">{ele.title}</p>
       
               <p className='cart-text text single-line'>Published:{ele.publishedAt}</p>
               </div>
               
               <div className='row m-0 p-0'>
               <Link to={ele.url}  className="btn  view">View News</Link>
               </div>

     
    </div>}
    
    
    </>

    
  })
}
     
      
    </div>
    <Pagination  mynews={mynews} itemPerPage={itemPerPage} currentPage={currentPage} setcurrentPage={setcurrentPage}/>
    </div>
   

    <div className='col-3 rightSide '> 
      <h3 className='text-center  headLinesTitle p-2'>Top Headlines</h3>
      <div className='topHeadlineContainer'>
        
      <TopHeadlines/>
      </div>
    </div>
    </div>
    


  )
}

export default Home
