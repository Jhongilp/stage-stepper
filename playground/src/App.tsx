import './App.css';
// @ts-ignore
import { getFirstItem, Stepper } from 'stage-stepper'

function App() {
  return (
    <div className="App">
      <div>
        <p>Hello from my awesome library, again me ; {getFirstItem("jonathan".split(''))}</p>
      </div>
      <Stepper />
    </div>
  );
}

export default App;
