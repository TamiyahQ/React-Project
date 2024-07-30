import { Link } from 'react-router-dom';

const Header = () => {

  return (
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid justify-content-between">
    <a class="navbar-brand" href="#"><img src="./images/Logo.png" alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse p-3 justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link className="nav-link" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/service">Service</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
        <a class="nav-link" href="#">Testimonial</a>
        <a class="nav-link" href="#">FAQ</a>
        
      </div>
    </div >
    <div class="collapse navbar-collapse p-3 justify-content-end" id="navbarNavAltMarkup">
    <a class="nav-link px-3" style={{color:'rgba(76, 175, 79, 1)'}} href="#">Login</a>
    <button type="button" class="btn btn-primary" style={{backgroundColor:'rgba(76, 175, 79, 1)', borderColor:'rgba(76, 175, 79, 1)'}}>Sign up</button>
    </div>
  </div>
</nav>
  )
}

export default Header
