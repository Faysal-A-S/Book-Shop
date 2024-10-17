
import { Route, Routes,BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar/Navbar'


function App() {


  return (
    <>
       
 
   <Router>
   
   <Navbar/>
<div style={{margin:"20px"}}>
<Routes >
        <Route path='/' element={<Homepage/>}/>
    </Routes>
</div>

  </Router>

    </>
  )
}

export default App
