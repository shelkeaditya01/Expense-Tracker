// import { useMemo, useState } from "react";
// import styled from "styled-components";

// import bg from './img/bg.png';

// import {MainLayout} from './styles/Layouts'
// import Orb from './Components/Orb/Orb'
// import Navigation from "./Components/Navigation/Navigation";
// import Dashboard from "./Components/Dashboard/Dashboard";
// import Expenses from "./Components/Expenses/Expenses";
// import Income from "./Components/Income/Income";
// import { useGlobalContext } from "./context/globalContext";

// function App() {
//   const[active,setActive]=useState(1);

//   const global=useGlobalContext();
//   console.log(global);
  
//   const displayData = () => {
//     switch(active){
//       case 1:
//         return <Dashboard />
//       case 2:
//         return <Dashboard />
//       case 3:
//         return <Income />
//       case 4: 
//         return <Expenses />
//       default: 
//         return <Dashboard />
//     }
//   }

//   const orbMemo=useMemo(()=>{
//     return <Orb></Orb>
//   },[])
//   return (
//     <div className="App">
//       <AppStyled bg={bg} className="App">
//         {orbMemo}
//         <MainLayout>
//           <Navigation active={active} setActive={setActive}></Navigation>
//           <main>
//             {displayData()}
//           </main>
//         </MainLayout>
//       </AppStyled>
//     </div>
//   );
// }

// const AppStyled=styled.div`
//   height: 100vh;
//   background-image: url(${props=>props.bg});
//   position: relative;
//   main{
//     flex: 1;
//     background: rgba(252, 246, 249, 0.78);
//     border: 3px solid #FFFFFF;
//     backdrop-filter: blur(4.5px);
//     border-radius: 32px;
//     overflow-x: hidden;
//     &::-webkit-scrollbar{
//       width: 0;
//     }
//   }
// `;

// export default App;











import { useMemo, useState } from "react";
import styled from "styled-components";

import bg from './img/bg.png';

import {MainLayout} from './styles/Layouts'
import Orb from './Components/Orb/Orb'
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Components/Dashboard/Dashboard";
import Expenses from "./Components/Expenses/Expenses";
import Income from "./Components/Income/Income";
import LandingPage from "./Components/LandingPage/LandingPage";
import { useGlobalContext } from "./context/globalContext";

function App() {
  const [active, setActive] = useState(1);
  const [showDashboard, setShowDashboard] = useState(false);

  const global = useGlobalContext();
  console.log(global);
  
  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  const handleGetStarted = () => {
    setShowDashboard(true);
  }

  const orbMemo = useMemo(() => {
    return <Orb></Orb>
  }, [])

  // Show landing page first
  if (!showDashboard) {
    return (
      <LandingPageWrapper>
        <LandingPage onGetStarted={handleGetStarted} />
      </LandingPageWrapper>
    );
  }
  
  return (
    <div className="App">
      <AppStyled bg={bg} className="App">
        {orbMemo}
        <MainLayout>
          <Navigation active={active} setActive={setActive}></Navigation>
          <main>
            {displayData()}
          </main>
        </MainLayout>
      </AppStyled>
    </div>
  );
}

const LandingPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props=>props.bg});
  position: relative;
  
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;