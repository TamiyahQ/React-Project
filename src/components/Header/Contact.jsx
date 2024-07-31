import { useState } from "react"

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
   const contactForm={name,email,message};
    console.log(contactForm);
    alert('Your Contact Information has been stored. Thank you for contacting us.')
  }


  return (
    <div className="container-fluid" style={{backgroundColor:"rgba(38, 50, 56, 1)"}} >
    <div className="row justify-content-center align-items-center text-container">
      <div className="col-12 d-flex flex-column align-items-center text-center py-5">
      <img src=".\images\Logo2.png" alt="logo" className="img-fluid custom-image-about" />
      </div>
    <div className="container-fluid " style={{backgroundColor:"white"}}>
    <div className="row d-flex justify-content-center align-items-center ">
      <div className="col-12 col-sm-5 col-md-5 col-lg-8 d-flex justify-content-center align-items-center pt-4">
      <h1><b>Contact Us</b></h1>     
      </div>
      <div  className="col-12 col-sm-4 col-md-5 col-lg-8 d-flex text-container justify-content-center align-items-center my-3 mx-4">
      <form className="custom-form"
      onSubmit={handleSubmit}
      >
        <div className="p-3">
        <label className="p-3 fw-bold">Full Name</label>
        <input className="custom-input p-2 px-3" type="text"
        required
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder="Enter your full name" />
        </div>
       <div className="p-3">
       <label className="p-3 pe-5 fw-bold">Email</label>
       <input className="custom-input p-2 px-3" type="email"
       required
       value={email}
       onChange={(e)=>setEmail(e.target.value)}
       placeholder="Enter your valid email" />
       </div>
       <div className="p-3 d-flex align-items-start">
       <label className="fw-bold me-4 ps-3">Message</label>
       <textarea className="custom-input p-2 px-3"
       required
       value={message}
       onChange={(e)=>setMessage(e.target.value)}
       placeholder="Type your message"></textarea>
       </div>
        <div  className="col-12 col-sm-10 col-md-10 col-lg-10 d-flex text-container justify-content-right align-items-center my-3 mx-4">
        <button type="submit" class="btn btn-primary" style={{backgroundColor:"rgba(76, 175, 79, 1)", borderColor:"rgba(76, 175, 79, 1)"}}>Submit</button>
        </div>
      </form>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Contact
