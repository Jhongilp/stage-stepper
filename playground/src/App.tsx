import './App.css';
// @ts-ignore
import { Stepper, Step, StepperProps, StepList, CheckpointProps } from 'stage-stepper'

const steps: StepList = [
  {
    name: "En planta",
    progress: 0
  },
  {
    name: "Transito a puerto",
    progress: 0
  },
  {
    name: "En puerto",
    progress: 0
  },
  {
    name: "Tránsito internacional",
    progress: 0
  },
  {
    name: "En destino",
    progress: 0
  },
]



function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <Stepper steps={steps}/>

      </div>
    </div>
  );
}

export default App;
