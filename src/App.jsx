import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {get_data} from "./read_excel";
import BossElement from "./BossElement";

function App() {
  
  const [boss_data,setBossData]=useState(null);
  const [boss_elements,setupBossElements]=useState("");

  function createBossElements()
  {
    let boss_data_temp=[...boss_data];
    const boss_elements_temp=boss_data_temp.map(boss=><BossElement key={boss.ID} boss={boss}></BossElement>);
    setupBossElements(boss_elements_temp);
  }

  useEffect(()=>
  {
    async function fetchdata()
    {
      const boss_data_temp=await get_data("src/Hollow Knight Silksong Boss Rankings.xlsx","Quality");
      console.log(boss_data_temp);
      setBossData(boss_data_temp);
    }
    fetchdata();
  },[]);

  useEffect(()=>
  {
    if(boss_data)
    {
      createBossElements();
    }
  },[boss_data]);

  return (
    <>
      <h1 className="title">Hollow Knight Silksong Boss Ranking</h1>
      <div>{boss_elements}</div>
      <p>Testing Hollow Knight Silksong</p>
    </>
  )
}

export default App
