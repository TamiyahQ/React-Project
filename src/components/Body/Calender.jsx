const Calender = (props) => {
  return (
    <main className="container-fluid" style={{backgroundColor:"white"}}>
    <div className="row align-items-center">
      <div className="col-12 col-md-5 image-container d-flex justify-content-center py-5">
        <img src=".\images\pana.png" alt="Illustration" />
      </div>
      <div className="col-12 col-md-6 text-container d-flex justify-content-center py-2">
        <div className="px-3">
          <h2><b>How to design your site footer like we did</b></h2>
          <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
          <button type="button" class="btn btn-primary mb-5" style={{backgroundColor:"rgba(76, 175, 79, 1)", borderColor:"rgba(76, 175, 79, 1)"}} onClick={props.learn}>Learn More</button>
        </div>
      </div>
    </div>
    </main>
  )
}

export default Calender
