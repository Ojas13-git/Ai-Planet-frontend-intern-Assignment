import React from 'react'
import { useNavigate } from 'react-router-dom'

function Delete({trigger,setTrigger,title }) {
  const navigate = useNavigate();
  const del = () => {
    var curObj=[];
    setTrigger(false)
    var obj=JSON.parse(window.localStorage.getItem('Hackathons'))
    for(var i = 0; i < obj.length; i++){
      if(obj[i].inputs.title == title.title){continue;}
      else{curObj.push(obj[i]);}
    }
    window.localStorage.setItem('Hackathons',JSON.stringify(curObj));
    navigate('/');
  }

  return (trigger) ? (
    <div className='popup'>
      <div className="popup-inner">
        <h3>Delete Model</h3>
        <p>This action is irreversible. Are you sure you want to delete this model?</p>
        <div>
          <button className="close-btn" onClick={() => setTrigger(false)}>Cancel</button>
          <button className='FinalDecision' onClick={del}>Delete</button>
        </div>
      </div>
    </div>
  ) : <></>;
}

export default Delete