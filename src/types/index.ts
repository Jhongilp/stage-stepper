export interface Step {
  name: string;
  progress: number;
}

export type StepList = Step[];

export interface StepperProps {
  steps: StepList;
}

export interface CheckpointProps {
  position: number;
}
