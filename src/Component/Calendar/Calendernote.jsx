import React from 'react'

const Calendarnote = () => {
  return (
    <>

        <div className="content">
            <div className="row">
            <div className="bg-light col-sm-8 border-1 rounded-3" >
                <div className="p-4" style={{backgroundColor: "white", width: "700px", borderRadius: "10px"}} >
                <img style={{width: "100px"}} src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" />
          <div className='d-flex' style={{justifyContent: "space-between"}}>
            <h4>Banjamin Price</h4>
             <h5>GMT / 03:52 PM</h5>
                </div>
                <div className='mt-3'>
                    <h6>Founder</h6>
                    <p className='mt-2'>Behind every great company lies a passionate founder with a dream. At [Company Name], our story begins with [Founder’s Name], a visionary driven by a profound belief in [core mission/value]. With [specific experience or background], [he/she/they] identified a gap in [specific industry or market] and set out to create innovative solutions that would not only fill that gap but also redefine standards.</p>
                </div>
                <div className='mt-4 d-flex'>
                    <div className="lindin" style={{width: "40px", height: "40px", borderRadius: "5px", backgroundColor: "whitesmoke", textAlign: "center", top: "20%"}}>
                    <i className="fa-brands fa-linkedin-in fs-3 mt-1"></i>
                    </div>
                    <div className="lindin" style={{width: "40px", height: "40px", borderRadius: "5px", backgroundColor: "whitesmoke", textAlign: "center", top: "20%", marginLeft: "20px"}}>
                    <i className="fa-brands fa-facebook fs-3 mt-1"></i>
                    </div>

                </div>
                <div className='mt-3'>
                    <h4>Book a meeting with me</h4>
                    <div className='d-flex'>

                    
                    <div className="meet-box1 mt-3 p-3" style={{width: "250px", height: "150px", backgroundColor: "whitesmoke", borderRadius: "10px"}}>
<h5>Metting with Banjiman</h5>
<div className='mt-3'>
<i className="fa-solid fa-hourglass" style={{fontSize: "18px"}}> </i> <span className='ms-2'>30 Second</span>
</div>
<button className='btn btn-primary mt-3'>Schedule</button>
                    </div>
                    <div className="meet-box1 mt-3 p-3" style={{width: "250px", height: "150px", backgroundColor: "whitesmoke", marginLeft: "20px", borderRadius: "10px"}}>
<h5>Metting with Banjiman</h5>
<div className='mt-3'>
<i className="fa-solid fa-hourglass" style={{fontSize: "18px"}}> </i> <span className='ms-2'>60 Minutes</span>
</div>
<button className='btn btn-primary mt-3'>Schedule</button>
                    </div>
                    </div>
                </div>
                
</div>
</div>
            </div>

    </div>


    </>
  )
}

export default Calendarnote