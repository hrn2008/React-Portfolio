
/* Progress Component */
/*
REACT Portfolio Assignment
Hamidreza Naji
S#: 200503068
Course: Advance Client-side JavaScript - COMP2112
*/
function Progress() {
  return (
    <div className="skill-container">
      <h2></h2>
      <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ "width": "95%" }}
          aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
      </div>
      <p className="small">HTML5</p>

      <div className="progress">
        <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar"
          style=
          {{ "width": "90%" }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
      </div>
      <p className="small">CSS3</p>

      <div className="progress">
        <div className="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar"
          style=
          {{ "width": "55%" }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}></div>
      </div>
      <p className="small">JavaScript</p>

      <div className="progress">
        <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar"
          style=
          {{ "width": "60%" }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}></div>
      </div>
      <p className="small">PHP</p>

      <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style=
          {{ "width": "40%" }}
          aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}></div>
      </div>
      <p className="small">ASP.NET CORE</p>

      <div className="progress">
        <div className="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar"
          style=
          {{ "width": "93%" }} aria-valuenow={93} aria-valuemin={0} aria-valuemax={100}></div>
      </div>
      <p className="small">WordPress</p>
    </div>


  )
}

export default Progress;