import React from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {Originals,actions,Comedy,Horror,Romance,Documentaries} from './urls'



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={Originals} title='Netflix Originals'/>
      <RowPost url={actions} title='Action' isSmall/>
      <RowPost url={Comedy} title='Comedy' isSmall/>
      <RowPost url={Horror} title='Horror' isSmall/>
      <RowPost url={Romance} title='Romance' isSmall/>
      <RowPost url={Documentaries} title=' Documentaries' isSmall/>
    </div>
  );
}

export default App;
