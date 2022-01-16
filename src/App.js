import './App.css';
import Tab from './Components/Tab';

let TabInput = [
  {header: "Tab 1", content:" Tab 1 is here"},
  {header: "Tab 2", content:" Tab 2 is here"},
  {header: "Tab 3", content:" Tab 3 is here"}

]

function App() {

  return (

    <div className="App">

      <Tab TabInput = {TabInput} />

    </div>

  );
}

export default App;
