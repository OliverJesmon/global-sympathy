import img1 from '../images/e1.jpg';
import img2 from '../images/e2.jpg';
import img3 from '../images/e3.jpg';
import img4 from '../images/e4.jpg';
import img5 from '../images/e5.jpg';
import img6 from '../images/e6.jpg';
import img7 from '../images/e7.jpg';
import img8 from '../images/e8.jpg';
import './Education.css';

function Edu() {
    return (
        <div className='edu-gallery-container'>
          <h2 className='edu-gallery-title'>Education Gallery</h2>
    
          <div className='edu-grid-layout'>
            <div className='edu-grid-row'>
              <img src={img1} alt='Education 1' className='edu-grid-item' />
              <img src={img2} alt='Education 2' className='edu-grid-item' />
            </div>
            <div className='edu-grid-row'>
              <img src={img3} alt='Education 3' className='edu-grid-item' />
              <img src={img4} alt='Education 4' className='edu-grid-item' />
            </div>
            <div className='edu-grid-row'>
              <img src={img5} alt='Education 5' className='edu-grid-item' />
              <img src={img6} alt='Education 6' className='edu-grid-item' />
            </div>
            <div className='edu-grid-row'>
              <img src={img7} alt='Education 7' className='edu-grid-item' />
              <img src={img8} alt='Education 8' className='edu-grid-item' />
            </div>
          </div>
        </div>
    );
}

export default Edu;
