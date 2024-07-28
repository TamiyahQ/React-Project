const HeroSection = (props) => {
  return (
    <div className="container-fluid">
  <div className="row align-items-center">
    <div className="col-12 col-md-5 col-lg-6 text-container d-flex justify-content-center">
      <div className="px-3 ps-lg-5">
        <h1 className="herosec pt-3"><b>Lessons and insights </b> <span className="herosec pt-3" style={{color:"rgba(76, 175, 79, 1)"}}><b>from 8 years</b> </span> </h1>
        <p>Where to grow your business as a photographer: site or social media?</p>
        <button type="submit" class="btn btn-primary" style={{backgroundColor:"rgba(76, 175, 79, 1)", borderColor:"rgba(76, 175, 79, 1)"}} onClick={props.register}>Register </button>
      </div>
    </div>
    <div className="col-12 col-md-6 image-container d-flex justify-content-center">
      <img src=".\images\Illustration.png" alt="Illustration" className="pt-3"/>
    </div>
  </div>
  <div className="d-flex justify-content-center align-items-end py-3">
    <img src=".\images\Dot.png" alt="" />
  </div>
</div>

  )
}

export default HeroSection
