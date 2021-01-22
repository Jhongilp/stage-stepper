import React, {FC} from "react";
import { StepperProps, Step, CheckpointProps } from '../types';
import './_stepper.scss';

const Checkpoint:FC<CheckpointProps> = ({position, size, barHeight}) => {
  return (
    <div className="st-progress-bar-checkpoint" 
      style={
        {
          left: `calc(${position}% - ${size / 2}px)`, 
          top: `${-((size/2)-(barHeight/2))}px`, 
          // top: `${size / 2}px - ${barHeight / 2}px)`, 
          width: size, 
          height: size 
        }
      }
    >
    </div>
  )
}

export const Stepper: FC<StepperProps> = ({steps, height}) => {
  return (
    <div className="st-wrapper">
      <div className="st-progress_bar-container" style={{height}}>
        {
          steps.map((step, i) => {
            const offset = 10; // 0 - 100, treat as %, 2 sides (left and right)  
            const gap = (100 - (offset * 2)) / (steps.length - 1) ;
            const stepPosition = (gap * i) + (offset);
            return <Checkpoint position={stepPosition} size={step.size} barHeight={height}/>
          })
        }
        <div className="st-progress_bar-progress"></div>
      </div>
    </div>
  );
};