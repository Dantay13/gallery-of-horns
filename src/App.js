import React from "react";
import Header from "./Header";
import Footer from "./Footer"; 
import Main from "./Main";

class App extends React.Component{ 
  render(){ 
    return(
      <>
      <Header/>
      <Main/>
      <Footer/>
      </>
    ) 
  }
}

export default App; 




// STEPS TO CREATE A COMPONENT

// import React from "react"; /* Step 1 of creatiating a component*/

// class App extends React.Component{ /*Step 2 of creating a component*/
//   render(){ /* Step 3 of creating componenet. its a function within the class*/
//     return(<div>hello world</div>) /* always render something*/
//   }
// }

// export default App; /*Step 4 of creatinga component. this export allow it to be available in other parts of our application */