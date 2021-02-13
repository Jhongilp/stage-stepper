import React, { FC, useState, useRef, useEffect, ReactNode } from "react";
import { CheckpointProps } from "../../types";

type CircularProgressProps = {
  progress: number;
};

const CheckpointCircularProgress: FC<
  CircularProgressProps & CheckpointProps
> = ({ progress, position, size, barHeight }) => {
  const [circumference, setCircumference] = useState(0);
  const [cssStyle, setStyle] = useState({
    strokeDasharray: `${0} ${0}`,
    strokeDashoffset: `${0}`,
  });

  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const radio = circleRef?.current?.r?.baseVal?.value;
    if (radio) {
      const circumference = radio * 2 * Math.PI;
      console.log("[mount] radio value: ", radio);
      console.log("[mount] circumference value: ", circumference);
      const offset = circumference - (progress / 100) * circumference;
      const style = {
        strokeDasharray: `${circumference} ${circumference}`,
        strokeDashoffset: `${offset}`,
      };
      setCircumference(circumference);
      setStyle(style);
    }
  }, [circleRef.current]);

  useEffect(() => {
    const offset = circumference - (progress / 100) * circumference;
    console.log("offset: ", offset);
    console.log("on change circumference: ", circumference);
    const style = {
      strokeDasharray: `${circumference} ${circumference}`,
      strokeDashoffset: `${offset}`,
    };
    setStyle(style);
  }, [progress]);

  return (
    <div
      className="st-progress-bar-checkpoint"
      style={{
        left: `calc(${position}% - ${size / 2}px)`,
        top: `${-(size / 2 - barHeight / 2)}px`,
        width: size,
        height: size,
      }}
    >
      <svg
        className="progress-ring"
        viewBox="0 0 24 24"
        width="100%"
        height="100%"
      >
        <circle
          ref={circleRef}
          className="progress-ring__circle"
          stroke="green"
          strokeWidth="2"
          fill="white"
          r="11"
          cx="12"
          cy="12"
          style={cssStyle}
        />
      </svg>
    </div>
  );
};

export default CheckpointCircularProgress;
