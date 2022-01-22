import React from 'react';
import {MdArrowForward} from 'react-icons/md'
import './Home.css'



const Home = ({hotDeals}) => {
  return (
        <main>           
            <h1 className='home-header' >
                Find all sorts of gadgets you'll love. Support independent sellers. <br /> Only on Gadgette.
            </h1>
            <button className='see-product-btn' >
                <div>More products</div> 
                <MdArrowForward className='forward-btn' />
            </button>
             <div className='image-background' >
                <div className='hot-deal-section' >
                {hotDeals}
                
                </div>             
             </div>
           
        </main>
    );
};

export default Home;
