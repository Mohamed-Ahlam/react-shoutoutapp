import './App.css';
import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [formData, setFormData] = React.useState({name:"", announcement:""})
  const [startDate, setStartDate] = React.useState(new Date());
  
  const [headerMsg, setHeaderMsg] = React.useState("Input An Announcement")

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
          <h3>{startDate.toDateString()} ::: {formData.name}</h3>
          <h1>{headerMsg}</h1>
        </header>
        
        {/* card class */}
      <main className='container'>
        <div class="w3-card-4">
            <div class="w3-container w3-brown">
              <h2>Input Announcement</h2>
            </div>

            <form onSubmit={handleSubmit} className="w3-container" >
              <label htmlFor="name" className='content-text w3-text-brown' placeholder="Your name..">
                <b> Input Name</b>
                </label>
              <input className="w3-input w3-border w3-sand"type="text" id="name" name="name" value={formData.name} onChange={handleChange}></input>


              <label htmlFor="theDate" className='content-text w3-text-brown'>
                <b>Input date</b>
                </label>
              <DatePicker
                label="Controlled picker"
                selected={startDate}
                onChange={(newValue) => setStartDate(newValue)}
                className="w3-input w3-border w3-sand"
                id="theDate"
              />
              <label htmlFor="msg" className='content-text w3-text-brown'>
                <b>Input Announcement Message</b>
                </label>
              <textarea className="w3-input w3-border w3-sand" type="text" id="msg" name="announcement" value={formData.announcement} onChange={handleChange} placeholder="Write an announcement.." style={{height:"100px"}}></textarea>

              <button class="w3-btn w3-brown" type="submit"  name="announcement" value={formData.announcement}>Submit</button>
            </form>
        </div>
        
      </main>
  
    
    </div>
  );
}

export default App;
