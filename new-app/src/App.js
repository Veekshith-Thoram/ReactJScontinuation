import logo from './logo.svg';
import './App.css';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import ParentRef from './components/ParentRef';
import FRParentRef from './components/FRParentRef';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';


function App() {
  return (
    <div className="App">
      <User render={(count, incrementCounter) => <ClickCounterTwo count={count} incrementCounter={incrementCounter}/>}/>
      
      <User render={(count, incrementCounter) => <HoverCounterTwo count={count} incrementCounter={incrementCounter}/>}/>
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User name={(isLoggedIn)=>isLoggedIn ? "Veekshith" : "Pushpa" }/> */}
      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}
      {/* <ErrorBoundary>
      <Hero heroName="Pushpa" />
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Veekshith" />
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName = "Joker" />
      </ErrorBoundary> */}
      {/* <PortalDemo /> */}
      {/* <FRParentRef /> */}
      {/* <ParentRef /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
    {/* <LifeCycleA />       */}
    </div>
  );
}

export default App;
