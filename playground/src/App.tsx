import './App.css';
// @ts-ignore
import { Stepper, Step, StepperProps, StepList, CheckpointProps } from 'stage-stepper'

const STEP_SIZE = 50;

const steps: StepList = [
  {
    name: "En planta",
    progress: 80,
    size: STEP_SIZE
  },
  {
    name: "Transito a puerto",
    progress: 0,
    size: STEP_SIZE
  },
  {
    name: "En puerto",
    progress: 0,
    size: STEP_SIZE
  },
  {
    name: "Tránsito internacional",
    progress: 0,
    size: STEP_SIZE
  },
  {
    name: "En destino",
    progress: 0,
    size: STEP_SIZE
  },
]



function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <Stepper steps={steps} height={5}/>

      </div>
    </div>
  );
}

export default App;
