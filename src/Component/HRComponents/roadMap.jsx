// import React from "react";

// const Roadmap = () => {
//   return (
// <div className="page-wrapper">
//       <div className="container mt-5">
//         <h4 className="fw-bold">My Roadmap</h4>
//         <p className="text-muted">
//           {" "}
//           {/* <i className="fa-solid fa-house" /> / Pages / My Roadmap */}
//         </p>
//         <div
//           className="row my-5"
//           style={{
//             backgroundColor: "rgb(245 245 245)",
//             border: "5px soild #4d4d54",
//             borderRadius: 5,
//             padding: 15,
//           }}
//         >
//           <div className="col-md-12">
//             <div className="row my-5">
//               <div className="col-md-2 d-flex align-items-center">
//                 <span>24 Sep 2024</span>
//               </div>
//               <div className="col-md-1 stepline ">
//                 <div className="timeline-item-circle" />
//               </div>
//               <div className="col-md-8 ms-4">
//                 <span>
//                   <h5 className="fw-bold">Study of A trainnig</h5>
//                 </span>
//                 <p>This text will explain about this training</p>
//               </div>
//             </div>
//             <div className="row my-5">
//               <div className="col-md-2 d-flex align-items-center">
//                 <span>20 Sep 2024</span>
//               </div>
//               <div className="col-md-1 stepline ">
//                 <div className="timeline-item-circle secondcircle" />
//               </div>
//               <div className="col-md-8 ms-4">
//                 <span>
//                   <h5 className="fw-bold">Do Training A Test</h5>
//                 </span>
//                 <p>This text will explain about this test</p>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-md-2 d-flex align-items-center d-flex flex-align-items ">
//                 <span>10 Sep 2024</span>
//               </div>
//               <div className="col-md-1 stepline">
//                 <div className="timeline-item-circle thirdcircle me-2" />
//               </div>
//               <div className="col-md-8 ms-4">
//                 <span>
//                   <h5 className="fw-bold">Study for training B</h5>
//                 </span>
//                 <p>This text will explain about this training</p>
//               </div>
//             </div>
//             <div className="row my-5">
//               <div className="col-md-2 d-flex align-items-center">
//                 <span>02 Sep 2024</span>
//               </div>
//               <div className="col-md-1 stepline">
//                 <div className="timeline-item-circle fourthcircle" />
//               </div>
//               <div className="col-md-8 ms-4">
//                 <span>
//                   <h5 className="fw-bold">Trainig B Final exam</h5>
//                 </span>
//                 <p>This text will explain about this test</p>
//               </div>
//             </div>
//             <div className="row my-5">
//               <div className="col-md-2 d-flex align-items-center">
//                 <span>01 Sep 2024</span>
//               </div>
//               <div className="col-md-1 stepline">
//                 <div className="timeline-item-circle fifthcircle" />
//               </div>
//               <div className="col-md-8 ms-4">
//                 <span>
//                   <h5 className="fw-bold">Start training to be a manager</h5>
//                 </span>
//                 <p>This text will explain about this training</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
    
//   );
// };

// export default Roadmap;

import React from "react";

const Roadmap = () => {
  return (
    <div className="page-wrapper">
      <div className="container mt-5">
        <h4 className="fw-bold">My Roadmap</h4>
        <p className="text-muted">
          {/* <i className="fa-solid fa-house" /> / Pages / My Roadmap */}
        </p>
        <div
          className="row my-5"
          style={{
            backgroundColor: "rgb(245 245 245)",
            border: "5px solid #4d4d54", // Fixed typo: 'soild' => 'solid'
            borderRadius: 5,
            padding: 15,
          }}
        >
          <div className="col-md-12">
            {[
              {
                date: "24 Sep 2024",
                title: "Study of A training",
                description: "This text will explain about this training",
                circleClass: "timeline-item-circle",
              },
              {
                date: "20 Sep 2024",
                title: "Do Training A Test",
                description: "This text will explain about this test",
                circleClass: "timeline-item-circle secondcircle",
              },
              {
                date: "10 Sep 2024",
                title: "Study for training B",
                description: "This text will explain about this training",
                circleClass: "timeline-item-circle thirdcircle me-2",
              },
              {
                date: "02 Sep 2024",
                title: "Training B Final exam",
                description: "This text will explain about this test",
                circleClass: "timeline-item-circle fourthcircle",
              },
              {
                date: "01 Sep 2024",
                title: "Start training to be a manager",
                description: "This text will explain about this training",
                circleClass: "timeline-item-circle fifthcircle",
              },
            ].map(({ date, title, description, circleClass }, index) => (
              <div className="row my-5" key={index}>
                <div className="col-md-2 d-flex align-items-center justify-content-center">
                  <span>{date}</span>
                </div>
                <div className="col-md-1 d-flex justify-content-center stepline">
                  <div className={circleClass} />
                </div>
                <div className="col-md-8 ms-4">
                  <h5 className="fw-bold">{title}</h5>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
