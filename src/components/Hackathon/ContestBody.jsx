import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink} from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function ContestBody(title) {
  var curObj;

  const obj=JSON.parse(window.localStorage.getItem('Hackathons'))
  for(var i = 0; i < obj.length; i++){
    if(obj[i].inputs.title == title.title){
      curObj=obj[i];
    }
  }

  return (
    <div className='ContestBody margin_set'>
        <div className='ContestDetails' style={{flex:62}}>
            <h2>Description</h2>     
              {curObj.inputs.description.map((event) => {
                return (<>
                  <p>{event}</p>
                </>
              );
              })}
        </div>
        <div className='ContentSidebar' style={{flex: 27, paddingLeft: "10%"}}>
            <h2>Hackathon</h2>
            <h1>{curObj.inputs.name}</h1>
            <p><FontAwesomeIcon icon={faCalendar} /> &nbsp; 24 Feb 2023 - 24 March 2023</p>
            <a href={curObj.inputs.repository} target="_blank"><button ><FontAwesomeIcon icon={faGithub} />&nbsp; Github Repository</button></a>
            <a href={curObj.inputs.link} target="_blank"><button><FontAwesomeIcon icon={faExternalLink} />&nbsp; Other Link</button></a>
        </div>
    </div>
  )
}

export default ContestBody