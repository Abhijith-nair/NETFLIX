import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY} from '../../constants/constants'
import {imageUrl} from '../../constants/constants'



function Banner() {
 const [movie , setMovie]= useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
       setMovie(response.data.results[0])
       //setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])
    })

  },[])
  return (
    <div  style= {{backgroundImage :`url(${ movie ? imageUrl+movie.backdrop_path :""})`}}
    className='Banner'>
       
        <div className='content'>
           <h1 className='title'>{movie ? movie.title :''}</h1>
             <div className='Banner_buttons'></div>
              <button className='button'>play</button>
              <button className='button'>My list</button>
               <div>
                <h1 className='description'>{movie ? movie.overview :''}</h1>
               </div>
        </div>
        <div className="fade"></div>

      
    </div>
  )
}

export default Banner
