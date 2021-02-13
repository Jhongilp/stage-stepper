import React, { FC } from "react";
import { StepperProps, Step, CheckpointProps } from "../types";
import CheckpointCircularProgress from "./checkpoint/Checkpoint";
import "./_stepper.scss";

const Checkpoint: FC<CheckpointProps> = ({
  position,
  size,
  barHeight,
  progress,
}) => {
  return (
    <CheckpointCircularProgress
      progress={progress}
      position={position}
      size={size}
      barHeight={barHeight}
    />
  );
};

export const Stepper: FC<StepperProps> = ({ steps, height }) => {
  return (
    <div className="st-wrapper">
      <div className="st-progress_bar-container" style={{ height }}>
        {steps.map((step, i) => {
          const offset = 10; // 0 - 100, treat as %, 2 sides (left and right)
          const gap = (100 - offset * 2) / (steps.length - 1);
          const stepPosition = gap * i + offset;
          return (
            <Checkpoint
              position={stepPosition}
              size={step.size}
              barHeight={height}
              progress={step.progress}
            />
          );
        })}
        <div className="st-progress_bar-progress"></div>
      </div>
    </div>
  );
};
