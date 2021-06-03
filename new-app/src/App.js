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


function App() {
  return (
    <div className="App">
      <ErrorBoundary>
      <Hero heroName="Pushpa" />
      <Hero heroName="Veekshith" />
      <Hero heroName = "Joker" />
      </ErrorBoundary>
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
