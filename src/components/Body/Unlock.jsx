const Unlock = (props) => {
  return (
    <main className="container-fluid" style={{backgroundColor:"white"}}>
    <div className="row align-items-center">
      <div className="col-12 col-md-5 image-container d-flex justify-content-center">
        <img src=".\images\Frame 35.png" alt="Illustration" />
      </div>
      <div className="col-12 col-md-6 text-container d-flex justify-content-center py-2">
        <div className="px-3">
          <h2><b>The unseen of spending three</b> <h2> <b>years at pixel grade</b> </h2 > </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
          <button type="button" class="btn btn-primary mb-5" style={{backgroundColor:"rgba(76, 175, 79, 1)", borderColor:"rgba(76, 175, 79, 1)"}} onClick={props.history}>Learn More</button>
        </div>
      </div>
    </div>
    </main>
  )
}

export default Unlock
