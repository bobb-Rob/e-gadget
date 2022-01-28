// import {useContext} from 'react';
// import DataContext from '../../DataProvider';
import Basket from './Basket';
import './Checkout.css'

const Checkout = ({show}) => {
    let drawerClasses = 'side-drawer';
    if(show){
      drawerClasses = 'side-drawer open'
    }
   
  return (  
    <div className={drawerClasses} >
      <Basket  />     
    </div>
  );
};

export default Checkout;
