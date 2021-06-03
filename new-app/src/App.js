import logo from './logo.svg';
import './App.css';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import ParentRef from './components/ParentRef';

function App() {
  return (
    <div className="App">
      <ParentRef />
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
    {/* <LifeCycleA />       */}
    </div>
  );
}

export default App;
