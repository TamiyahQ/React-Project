const Contact = () => {
  return (
    <div className="container-fluid" style={{backgroundColor:"rgba(38, 50, 56, 1)"}} >
    <div className="row justify-content-center align-items-center text-container">
      <div className="col-12 d-flex flex-column align-items-center text-center py-5">
      <img src=".\images\Logo2.png" alt="logo" className="img-fluid custom-image-about" />
      </div>
    <div className="container-fluid " style={{backgroundColor:"white"}}>
    <div className="row d-flex justify-content-center align-items-center ">
      <div className="col-12 col-sm-4 col-md-5 col-lg-8 d-flex justify-content-center align-items-center pt-4">
      <h1><b>Contact Us</b></h1>     
      </div>
      <div  className="col-12 col-sm-4 col-md-5 col-lg-8 d-flex text-container justify-content-center align-items-center my-3 mx-4">
      <form className="custom-form">
        <div className="p-3">
        <label className="p-3 fw-bold">Full Name</label>
        <input className="custom-input p-2 px-3" type="name" placeholder="Enter your full name" />
        </div>
       <div className="p-3">
       <label className="p-3 pe-5 fw-bold">Email</label>
       <input className="custom-input p-2 px-3" type="email" placeholder="Enter your valid email" />
       </div>
        <div className="p-3">
        <label className="p-3 pe-4  fw-bold">Message</label>
        <input className="custom-input p-2 px-3" type="text" placeholder="Type your message" />
        </div>
        <div  className="col-12 col-sm-10 col-md-10 col-lg-10 d-flex text-container justify-content-right align-items-center my-3 mx-4">
        <button type="button" class="btn btn-primary" style={{backgroundColor:"rgba(76, 175, 79, 1)", borderColor:"rgba(76, 175, 79, 1)"}}>Submit</button>
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
