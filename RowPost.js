import React,{ useState} from 'react'
import axios from '../../axios'
import './RowPost.css'
import {imageUrl} from '../../constants/constants'

function RowPost(props) {
  const [movies , setMovies]=useState([])
  
  useState(()=>{
    axios.get(props.url).then(response=>{
      //setMovies(response.data.results)
      setMovies(response.data.results.sort(function (a, b) { return 0.5 - Math.random() }))
    })
  })
  return (
    <div className='row'>
        <h2>{props.title}</h2>
         <div className='posters'>

          {movies.map((obj)=>
            <img className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />

          )}

         </div>

          
      
    </div>
  )
}

export default RowPost
