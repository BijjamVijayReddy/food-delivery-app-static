import React from 'react';
import Internet from './components/intrentTracker/Internet';
import LayOut from './layOut/LayOut';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from './store/shippingCart/cartSlice';

const App = () => {
  const language = useSelector((state) => state.cart.language);
  const preLanguage=sessionStorage.getItem("selectedLanguage");
  const languageDispatch = useDispatch();

React.useEffect(() => {
    if(preLanguage){
      languageDispatch(cartActions.setLangaugeAction(preLanguage));
    } 
  console.log("App is Running Fine" + language);
}, []);

  return (
    <div>
    
      <Internet />
      <LayOut />
    
    </div>
  )
}

export default App
