const Footer = (props) => {
  return (
    <footer className="py-4" style={{ color:"white"}}>
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-3 p-4">
          <img src=".\images\Logo2.png" />
          <p className="me-4 my-3 pe-5 pt-3" style={{color:"rgba(245, 247, 250, 1)"}}>Copyright © 2020 Nexcent Ltd.<p> All rights reserved</p> </p>
          <div className="d-flex my-4">
            <a href="#" className="pe-2"><img src=".\images\Social Icons.png" /></a>
            <a href="#" className="px-2"><img src=".\images\Social Icons1.png" /></a>
            <a href="#" className="px-2"><img src=".\images\Social Icons2.png" /></a>
            <a href="#" className="px-2"><img src=".\images\Social Icons3.png" /></a>
          </div>
        </div>
        <div className="col-md-2 mb-3 p-4">
          <h5>Company</h5>
          <ul className="list-unstyled py-3">
            <li><a href="#"  style={{textDecoration:"none", color:"rgba(245, 247, 250, 1)"}}>About us</a></li>
            <li><a href="#"  style={{textDecoration:"none", color:"rgba(245, 247, 250, 1)"}}>Blog</a></li>
            <li><a href="#"  style={{textDecoration:"none", color:"rgba(245, 247, 250, 1)"}}>Contact us</a></li>
            <li><a href="#"  style={{textDecoration:"none", color:"rgba(245, 247, 250, 1)"}}>Pricing</a></li>
            <li><a href="#"  style={{textDecoration:"none", color:"rgba(245, 247, 250, 1)"}}>Testimonials</a></li>
          </ul>
        </div>
        <div className="col-md-2 mb-3 p-4">
          <h5>Support</h5>
          <ul className="list-unstyled py-3">
            <li><a href="#"  style={{textDecoration:"none", color:"rgba(245, 247, 250, 1)"}}>Help center</a></li>
            <li><a href="#"  style={{textDecoration:"none", color:"rgba(245, 247, 250, 1)"}}>Terms of service</a></li>
            <li><a href="#"  style={{textDecoration:"none", color:"rgba(245, 247, 250, 1)"}}>Legal</a></li>
            <li><a href="#"  style={{textDecoration:"none", color:"rgba(245, 247, 250, 1)"}}>Privacy policy</a></li>
            <li><a href="#"  style={{textDecoration:"none", color:"rgba(245, 247, 250, 1)"}}>Status</a></li>
          </ul>
        </div>
        <div className="col-md-3 mb-3 p-4">
          <h5>Stay up to date</h5>
          <form>
          <div className="input-group pt-3">
          <input type="email" className="form-control" placeholder="Your email address" value={props.email} onChange={props.onEmailChange}
          style={{ backgroundColor: "rgb(74, 84, 88)", borderColor: "rgb(74, 84, 88)", color: "white", borderRadius: "5px 0 0 5px" }} />
          <button className="btn" type="submit" onClick={props.onAlert}
          style={{ backgroundColor: "rgb(74, 84, 88)", borderColor: "rgb(74, 84, 88)", borderRadius: "0 5px 5px 0" }}>
          <img src="./images/send.png" alt="send" style={{ height: "20px", width: "20px" }} />
          </button>
        </div>
          </form>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
