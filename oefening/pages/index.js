import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Calendar from "react-calendar"
import { useState } from 'react'
import 'react-calendar/dist/Calendar.css';

//hoe een vrouw verleiden?
//de handleiding voor een vrouw?

export default function Home() {
  const [value, onChange] = useState(new Date());
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const week = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
  let montheName = month[value.getMonth()]
  let weekName = week[value.getDay()]
//   const [display, setDisplay] = useState("")
//   const [dateSet, setDateSet] = useState(false)
//   function dateSetter(){
//     if(dateSet){
// let kalender = document.getElementsByClassName("calendar")
// kalender.classList.add("settings")
//     }
//   }
//   dateSetter()
  return (
    <div className={styles.container}>
      <fieldset className='form'>
        <legend>
          Enkel gegevens om te kunnen bepalen wanneer de hormonen het overnemen
        </legend>
<h3>Klik op de dag van de laatste keer</h3>


      <p className='calendar'> 
       <h1 className='date'>
        {weekName}  {value.getDate()}  {montheName} was het begin?
       {/* <button onClick={setDateSet(true)}>JA</button>
        <button onClick={setDateSet(false)}>NEE</button>  */}
      </h1>
        <Calendar className="kalender"
          onChange={onChange}
          value={value}
          onClickDay={(value) => {
            setDisplay(value)
          }}
         
        />
      </p>


      </fieldset>


   
    <p>
      De hormonen vallen aan van "datum" tot "datum"
      <br/>
      <ul> Hints om dit te overleven: 
        <li>
              1.5m afstand is aangeraden indien u uw neus niet wil verliezen
        </li>
        <li>
          zwijgen is soms de beste oplossing
        </li>
      </ul>
  
     
      
   
     
    </p>
    </div>
  )
}
