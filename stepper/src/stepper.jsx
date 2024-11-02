import { useEffect, useRef, useState } from "react";

const CheckoutStepper = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);

  // Update margins when steps change
  useEffect(() => {
    if (stepRef.current.length > 0) {
      setMargins({
        marginLeft: stepRef.current[0].offsetWidth / 2,
        marginRight: stepRef.current[stepsConfig.length - 1]?.offsetWidth / 2 || 0,
      });
    }
  }, [stepsConfig.length]);

  // Return empty if no steps are provided
  if (!stepsConfig.length) {
    return null;
  }

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setIsComplete(true);
        return prevStep;
      }
      return prevStep + 1;
    });
  };

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
  };

  const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

  return (
    <>
      <div className="stepper">
        {stepsConfig.map((step, index) => (
          <div
            key={step.name}
            ref={(el) => (stepRef.current[index] = el)}
            className={`step ${
              currentStep > index + 1 || isComplete ? "complete" : ""
            } ${currentStep === index + 1 ? "active" : ""}`}
          >
            <div className="step-number">
              {currentStep > index + 1 || isComplete ? (
                <span>&#10003;</span>
              ) : (
                index + 1
              )}
            </div>
            <div className="step-name">{step.name}</div>
          </div>
        ))}

        <div
          className="progress-bar"
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`, // Fixed calc syntax
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
          <div
            className="progress"
            style={{ width: `${calculateProgressBarWidth()}%` }}
          />
        </div>
      </div>

      {!isComplete && (
        <button className="btn" onClick={handleNext}>
          {currentStep === stepsConfig.length ? "Finish" : "Next"}
        </button>
      )}

      {isComplete && ActiveComponent && <ActiveComponent />} {/* Render the active component if complete */}
    </>
  );
};

export default CheckoutStepper;
