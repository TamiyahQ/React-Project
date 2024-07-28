const Frame = (props) => {
  return (
    <div className="container-fluid">
    <div className="row justify-content-center align-items-center text-container">
      <div className="col-10 col-md-5 d-flex flex-column align-items-center text-center py-4">
        <h2 className="footer-h"><b>Pellentesque suscipit fringilla libero eu.</b></h2>
        <button type="submit" class="btn btn-primary my-4" style={{backgroundColor:"rgba(76, 175, 79, 1)", borderColor:"rgba(76, 175, 79, 1)"}} onClick={props.demo}>Get a Demo →</button>
    </div>
    </div>
    </div>
  )
}

export default Frame
