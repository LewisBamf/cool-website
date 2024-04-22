import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";
import worker1 from './worker-photos/worker1.jpg';
import worker2 from './worker-photos/worker2.jpg';
import worker3 from './worker-photos/worker3.jpg';
import './workers.css';

const Workercards = () => {

  return (
    <div className="cards">
      <Fade duration={800} cascade={true} damping={0.3}>
    <div className='card-container'>
      <div className="card" >
        <div className='card-front'>
          <div className='card-img1'>
          <p>hover to flip</p>
          </div>
          
        </div>
        <div className='card-back'>
        <div className='card-img1-back'></div>
        <div className='worker-description'>
        <div className='name'>ava</div>
        <div className='position'>Software team leader</div>
        <div className='testomonial'>"Hi, I'm Ava, the software team leader! I believe in harnessing the power of collaboration and innovation to drive our projects forward. With a passion for problem-solving and a keen eye for detail, I lead by example to ensure our team delivers high-quality software solutions. Together, we strive for excellence, embracing challenges as opportunities for growth. Let's code our way to success!"</div>

        </div>
          
        </div>
      </div>
    </div>

    <div className='card-container'>
      <div className="card" >
        <div className='card-front'>
         <div className='card-img2'>
         <p>hover to flip</p>
         </div>
         
        </div>
        <div className='card-back'>
        <div className='card-img2-back'></div>
        <div className='worker-description'>
        <div className='name'>sarah</div>
        <div className='position'>HR manager</div>
        <div className='testomonial'>"Working at our company has been an incredibly rewarding experience for me as the HR manager. I've cherished every moment spent here, from collaborating with talented colleagues to contributing to a positive work environment. The support and camaraderie within the team have made my journey here truly exceptional. I'm proud to be part of such a dynamic and supportive workplace!"</div>

        </div>
         </div>
        </div>
      </div>

    <div className='card-container'>
      <div className="card" >
        <div className='card-front'>
          <div className='card-img3'>
          <p>hover to flip</p>
          </div>
        </div>
        <div className='card-back'>
        <div className='card-img3-back'></div>
        <div className='worker-description'>
        <div className='name'>Andrew</div>
        <div className='position'>Senior engineering manager</div>
        <div className='testomonial'>"As the senior engineering manager, I've found immense fulfillment in leading our talented team. The collaborative spirit and dedication to excellence make every project a success. I'm grateful for the opportunities for growth and the supportive environment. It's a privilege to be part of such a dynamic organization."</div>

        </div>
        </div>
      </div>
    </div>
    
      </Fade>
    </div>
  );

};

export default Workercards
