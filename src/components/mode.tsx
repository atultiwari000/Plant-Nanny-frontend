import ReactSwitch from "react-switch";
import { useEffect, useState } from "react";
import { onValue, ref, set } from "firebase/database";
import useApp from "../hooks/useFBApp";

function Mode() {
  const [isMotorOn, setIsMotorOn] = useState(false);
  const [isManualMode, setIsManualMode] = useState(false);
  const { db } = useApp();

  useEffect(() => {
    const motorManualOnOffRef = ref(db, "App/motor/manualMode");
    const motorIsOnRef = ref(db, "App/motor/isOn");

    onValue(motorManualOnOffRef, (snapshot) => {
      setIsManualMode(snapshot.val());
    });

    onValue(motorIsOnRef, (snapshot) => {
      setIsMotorOn(snapshot.val());
    });
  }, [db]);

  const setMotor = (value: boolean) => {
    set(ref(db, "App/motor/manualMode"), true); // Switch to manual mode
    set(ref(db, "App/motor/isOn"), value);
    setIsMotorOn(value);
    setIsManualMode(true);
  };

  const setAutoMode = (value: boolean) => {
    set(ref(db, "App/motor/manualMode"), !value);
    setIsManualMode(!value);
  };

  return (
    <div className="card mode">
      <div className="switch">
        <ReactSwitch
          checked={isMotorOn}
          onChange={() => setMotor(!isMotorOn)}
          disabled={!isManualMode}
        />
        <span>{isMotorOn ? "Motor ON" : "Motor OFF"}</span>
      </div>
      <div className="switch">
        <ReactSwitch
          checked={!isManualMode}
          onChange={() => setAutoMode(isManualMode)}
        />
        <span>{isManualMode ? "Manual Mode" : "Auto Mode"}</span>
      </div>
    </div>
  );
}

export default Mode;
