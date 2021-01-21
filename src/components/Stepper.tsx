import React, {FC} from "react";
import { StepperProps, Step, CheckpointProps } from '../types';
import './_stepper.scss';

const Checkpoint:FC<CheckpointProps> = ({position}) => {
  return (
    <div className="st-progress-bar-checkpoint" style={{left: position}}>

    </div>
  )
}

export const Stepper: FC<StepperProps> = ({steps}) => {
  return (
    <div className="st-wrapper">
      <div className="st-progress_bar-container">
        {
          steps.map((step, i) => {
            const stepPosition = 100 / steps.length;
            return <Checkpoint position={stepPosition}/>
          })
        }
        <div className="st-progress_bar-progress"></div>
      </div>
    </div>
  );
};