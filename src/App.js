import React from 'react'
import NewsApi from './Compoents/NewsApi';
import Coin from './features/coin/Coin';
import Counter from './features/counter/Counter';
import Theme from './features/theme/Theme';
// import Book from './Compoents/Book';
// import { NewsContextProvider } from './Compoents/ContetxAPI/ContextApi';
// import News from './Compoents/News';

// import Bookapi from './Compoents/Bookapi';
// import Home from './Compoents/Home';
// import { lazy, Suspense } from 'react';
// import Memohook from './Compoents/Memohook';
// import User from './Compoents/User';
// import Refcomp from './Compoents/Refcomp';
// import Login from './Compoents/Login/Login';
// import PureComp from './Compoents/PureComp';
// import CounterHoc from './Compoents/CounterHoc';
// import HocRed from './Compoents/HocRed';
// import HocGreen from './HocGreen';
// const Bookapi = lazy(()=>import('./Compoents/Bookapi'))
function App() {
  // const [token, setToken] = useState();
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  // let name="mukesh"
  // // function a function for data get from Child
  // function ChildtoParent(name){
  //   return name
  //   alert(name)
  // }
  return (
    <div className="App">
         {/* <h1 >State and Props</h1>
         <Home data={name}/>
         <Suspense fallback={<div>please wait...</div>}>
           <Bookapi />
         </Suspense>
         <Memohook />
         <User data={ChildtoParent}/>
         <Refcomp />
         <PureComp />
         <HocRed cmp={CounterHoc}/>
         <HocGreen cmp={CounterHoc}/> */}
        
        {/* <NewsContextProvider>
          <News />
        </NewsContextProvider>   
        <NewsContextProvider>
          <Book/>
        </NewsContextProvider>   */}
        {/* <Statem /> */}
        <Counter />
        <Coin />
        <Theme/>
        <NewsApi />
    </div>
    
  );
}

export default App;
