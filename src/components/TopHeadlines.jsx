import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const TopHeadlines = () => {
const [news,setnews]= useState([]);
let getData = async()=>{
    let res = await axios('https://newsapi.org/v2/top-headlines?country=in&apiKey=4976176405fe44ffb186bfb44245bf0e');
    console.log(res.data.articles)
    setnews(res.data.articles)

}
useEffect (()=>{
    getData();
},[])

  return ( 
    <div>
      {news.map((ele)=>{
        return <h6 key={ele.url} className='mb-3 headline'><Link  to={ele.url}>{ele.title}</Link></h6>
      })}
    </div>
  )
}

export default TopHeadlines
