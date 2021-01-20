import { Stepper } from "./components/Stepper";

function getFirstItem<T>(list: T[]): T {
  return list[0];
}

export {
  getFirstItem,
  Stepper
}
