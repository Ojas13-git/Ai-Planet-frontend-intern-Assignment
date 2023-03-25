import React,{ useState } from 'react'
import {useNavigate} from 'react-router-dom';

function Submit() {
  const [inputs, setInputs] = useState({favourite: false });
  const [count, setcount] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleChangeText = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    setcount(event.target.value.length);
  }

  const handleImage = (event) => {
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener('load', () => {
      const value = reader.result;
      setInputs(values => ({...values, [name]: value}))
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = inputs['description'].split(/\r?\n/);
    inputs['description']=result;
    if(localStorage.getItem('Hackathons')==null) {
      window.localStorage.setItem('Hackathons',JSON.stringify([]));
    }
      const curDate = new Date();
      var obj = JSON.parse(window.localStorage.getItem('Hackathons'));
      obj.push({inputs,'curDate': curDate});
      window.localStorage.setItem('Hackathons',JSON.stringify(obj));
    navigate('/');
  }

  return (
    <div className='submitForm margin_form'>
      <h2>New Hackathon Submission</h2>
      <form  onSubmit={handleSubmit}>
        <label> <span>Title</span> <br />
          <input 
            type="text" 
            placeholder="Title of your submission"
            name="title" required
            value={inputs.title} 
            onChange={handleChange}
          />
        </label><br /><br />  <br />

        <label><span>Summary</span> <br />
          <input 
            type="text" 
            placeholder="A short summary of your submission (this will be visible with your submission)"
            name="summary" required
            value={inputs.summary} 
            onChange={handleChange}
          />
        </label><br /><br />  <br />

        <label><span>Description</span><br />
          <textarea 
            type="text" 
            placeholder="Write a long description of your project. You can describe your idea and approach here."
            name="description" required
            value={inputs.description} 
            onChange={handleChangeText}
            maxLength="3000"
            rows={6}
          />
          <br />
          <p> {count} / 3,000 characters</p>
        </label><br /><br />  <br />

        <label><span>Cover Image</span> <br />
          <input 
            type="file" 
            accept='image/*'
            name="cover" required
            value={inputs.cover} 
            onChange={handleImage}
          />
        </label><br /><br />  <br />

        <label> <span>Hackathon Name</span> <br />
          <input 
            type="text" 
            placeholder="Enter the name of the hackathon"
            name="name" required
            value={inputs.name } 
            onChange={handleChange}
          />
        </label><br /><br />  <br />  
        
        <div className='submitDates'>
            <label> <span>Hackathon Start Date</span> <br />
              <input 
                type="date" 
                placeholder="Select Start Date"
                name="startDate" required
                value={inputs.startDate} 
                onChange={handleChange}
              />
            </label><br /><br />  <br /> 

            <label> <span>Hackathon End Date</span> <br />
              <input 
                type="date" 
                placeholder="Select End Date"
                name="endDate" required
                value={inputs.endDate} 
                onChange={handleChange}
              />
            </label>
        </div><br /><br /> 

        <label> <span>GitHub Repository</span> <br />
          <input 
            type="url"
            placeholder="Enter your submission’s public GitHub repository link"
            name="repository" required
            value={inputs.repository} 
            onChange={handleChange}
          />
        </label><br /><br />  <br /> 

        <label> <span>Other Links</span> <br />
          <input 
            type="url"
            placeholder="You can upload a video demo or URL of you demo app here."
            name="link" required
            value={inputs.link} 
            onChange={handleChange}
          />
        </label><br /><br /> <hr /> <br /> 

        <input className='submitButton' type="submit" value="Upload Submission" />
      </form>
    </div>
  )
}

export default Submit