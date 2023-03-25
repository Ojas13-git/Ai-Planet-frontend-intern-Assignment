import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons' 
import { NavLink } from 'react-router-dom'
import {FigmaIpsum,LoremIpsum, OfficeIpsum, PizzaIpsum,PotterIpsum,} from "../../assets"
import Card from '../Card'

function HomeBody() {
  const [active, setActive] = useState("1");
  const [increasing, setincreasing] = useState(true);

  var temp;
  const updateorder = (event) => {
    const value = event.target.value;
    if(value=="Newest"){
      setincreasing(true);
    }else{
      setincreasing(false);
    }
  }

// Using Predefined values for all cards which are not added to the localStorage.
  let preDefinded = [    
    {"name":"Lorem Ipsum", "img":LoremIpsum, 
    "desc":"Lorem ipsum dolor sit amet consectetur. Auctor nibh eleifend tempus egestas libero tristique nec.",  
    "date": Date.parse("2023-03-02T13:53:26.416Z")},  
    {"name":"Potter Ipsum", "img":PotterIpsum, 
    "desc":"Potter ipsum wand elf parchment wingardium. Ghost glass hall tears hair must train. Snape alohamora bathrooms..",  
    "date": Date.parse("2023-03-13T18:53:26.416Z")},    
    {"name":"Pizza Ipsum", "img":PizzaIpsum, 
    "desc":"Pizza ipsum dolor meat lovers buffalo. Burnt melted NY.",  
    "date": Date.parse("2023-03-14T19:53:26.416Z")},
    {"name":"Figma Ipsum", "img":FigmaIpsum, 
    "desc":"Figma ipsum component variant main layer. Blur hand object thumbnail subtract flows font bold image. Font.",  
    "date": Date.parse("2023-03-15T12:53:26.416Z")},    
    {"name":"Office Ipsum", "img":OfficeIpsum, 
    "desc":"Office ipsum you must be muted.",  
    "date": Date.parse("2023-03-16T11:53:26.416Z")}] 


  return (
    <div className=' margin_set'>
        <div className='HeadNav'>
            <div className='subSection'>
                <span 
                  className={`${active === "1" ? "selected" : "unselected"}`}
                  onClick={() => setActive("1")}
                >
                    All Submission
                </span>
                <span 
                  className={`${active === "2" ? "selected" : "unselected"}`}
                  onClick={() => setActive("2")}
                >
                    Favourite Submission
                </span>
            </div>    
            <div className='subSection2' >
                <span><FontAwesomeIcon icon={faSearch} />  &nbsp; Search
                </span>
                <span className='select'><select onChange={updateorder} name="order" id="order">
                  <option value="Newest">Newest &nbsp; &nbsp;</option>
                  <option value="Oldest">Oldest &nbsp; &nbsp;</option>
                </select></span>
            </div>   
        </div>

        <div className="cardFlex">
        {window.localStorage.getItem('Hackathons')!=null?JSON.parse(window.localStorage.getItem('Hackathons')).map((event) => {
            temp="/contest/"+event.inputs.title
            if(active=="2") {
              if(event.inputs.favourite){
                return (
                  <>
                    <NavLink to={temp} style={{textDecoration: "none"}}>
                  <Card name={event.inputs.title} img={event.inputs[""]} date={event.curDate} desc={event.inputs.summary}/>
                    </NavLink>
                  </>
                )
              }
            }
            else {
              return (
              <>
                <NavLink to={temp} style={{textDecoration: "none"}}>
                  <Card name={event.inputs.title} img={event.inputs[""]} date={event.curDate} desc={event.inputs.summary}/>
                </NavLink>
              </>
              );
            }
        }): console.log(temp)}

        {preDefinded.sort((a, b) => increasing?b.date - a.date:a.date-b.date).map((event) => {
          if(active=="2") { 
          }
          else {
            return (<>
                <Card name={event.name} img={event.img} desc={event.desc} date={event.date}/>
              </>
            );
          }
        })}
        </div>
    </div> 
  )
}

export default HomeBody