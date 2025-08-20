import OnClickTesting from '../Component/OnClickTesting';

const HomePage = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
                    <h4>First React App</h4>
                    <h6>Learn React</h6>

                    <h6>Button ELement:</h6>
                    <OnClickTesting />
                </div>

                <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12'>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/MV5a36eNrTc?si=IkAFZ-6iYZDdx0Tj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
      </div>
    )
}

export default HomePage;