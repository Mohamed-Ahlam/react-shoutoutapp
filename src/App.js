import './App.css';
import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [formData, setFormData] = React.useState({name:"", announcement:""})
  const [startDate, setStartDate] = React.useState(new Date());
  
  const [headerMsg, setHeaderMsg] = React.useState("Input an Announcement")

  const handleChange = (e) => {
    setFormData({...formData,
    [e.target.name]: e.target.value} )
  }

  const handleSubmit =(e) =>{
    setHeaderMsg(formData.announcement)
    // setFormData({name:"", announcement:""}) //clears out input feild
    // setStartDate(new Date())
    e.preventDefault(); //this will prevent it reloading
    // console.log(formData.announcement)
    
  }

  return (
    <div >

  <header>
    <div className="header">
      <img src="/flower.jpg" alt=""></img>

        <div className="header-right">
        <a>{startDate.toDateString()}</a>
        <a>{formData.name}</a>
        </div>

        <div className="main-heading">
          <h1>{headerMsg}</h1>
        </div>
     
    </div>
  </header>

      
      <main className='container'>
       
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" className='content-text w3-text-blue' placeholder="Your name..">
                <b> Input Name</b>
                </label>
              <input className="w3-input w3-border"type="text" id="name" name="name" value={formData.name} onChange={handleChange}></input>


              <label htmlFor="theDate" className='content-text w3-text-blue'>
                <b>Input date</b>
                </label>
              <DatePicker
                label="Controlled picker"
                selected={startDate}
                onChange={(newValue) => setStartDate(newValue)}
                className="w3-input w3-border"
                id="theDate"
              />
              <label htmlFor="msg" className='content-text w3-text-blue'>
                <b>Input Announcement Message</b>
                </label>
              <textarea className="w3-input w3-border" type="text" id="msg" name="announcement" value={formData.announcement} onChange={handleChange} placeholder="Write an announcement.." style={{height:"100px"}}></textarea>

              <button class="w3-btn w3-blue" type="submit"  name="announcement" value={formData.announcement}>Submit</button>
            </form>

      </main>
  
    
    </div>
  );
}

export default App;
