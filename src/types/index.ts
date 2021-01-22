export interface Step {
  name: string;
  progress: number;
  size: number;
}

export type StepList = Step[];

export interface StepperProps {
  steps: StepList;
  height: number;
}

export interface CheckpointProps {
  position: number;
  size: number;
  barHeight: number;
}
