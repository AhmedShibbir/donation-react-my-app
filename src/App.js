import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import "./MOCK_DATA.json";
import Footer from './components/Footer/Footer'


function App() {
  const [Donations,setDonations]=useState([]);
  useEffect(()=>{
    fetch("./MOCK_DATA.json")
    .then(res => res.json())
    .then(data => setDonations(data))
  },[])
  return (
    <div className="App">
     <Header Donations={Donations}></Header>
     <Footer></Footer>
     
    </div>
  );
}

export default App;
