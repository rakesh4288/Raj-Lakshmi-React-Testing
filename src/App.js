import logo from './logo.svg';
import './App.css';
import InputElement from './Component/InputElement';
import OnClickTesting from './Component/OnClickTesting';
import FunctionTesting from './Component/FunctionTesting';
import GetByRoleQuery from './Component/GetByRoleQuery';
import MultipleElementsCustomRole from './Component/MultipleElementsCustomRole';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} className="App-logo" alt="logo"  />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='container'>
        <div className='row'>
          <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
            <h4>First React App</h4>
            <h6>Learn React</h6>

            <h6>Button ELement:</h6>
            <OnClickTesting />

            <h6>Input Element:</h6>
            <InputElement />
          </div>

          <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12'>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/MV5a36eNrTc?si=IkAFZ-6iYZDdx0Tj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
        
        <div className='row'>
          <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
            <FunctionTesting />
          </div>

          <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12'>
            <GetByRoleQuery />
          </div>
        </div>

        <div className='row'>
          <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
            <h6>How to test images:</h6>
            <img src="https://images.news18.com/ibnlive/uploads/2025/04/Kishkindha-Kaandam-2025-04-08de7d9b28d93a3b178a530623251268-16x9.png?impolicy=website&amp;width=400&amp;height=225" alt="Kishkindha Kaandam img" className='img-fluid' title="Kishkindha Kaandam Movie" />
          </div>

          <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
            <MultipleElementsCustomRole />
          </div>          
        </div>
      </div>
    </div>
  );
}

export default App;
