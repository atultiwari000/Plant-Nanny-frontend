import { useEffect, useState } from "react";
import low from "../assets/low-meter.svg";
import { onValue, ref } from "firebase/database";
import useApp from "../hooks/useFBApp";

function TemperatureCard() {
  const { db } = useApp();
  const [tempValue, setTempValue] = useState(0);

  useEffect(() => {
    let tempRef = ref(db, "App/environment/temperature");
    onValue(tempRef, (snapshot) => {
      setTempValue(snapshot.val());
    });
  }, []);
  return (
    <div className="card temp">
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <img src={low} />
        <h4>Temperature</h4>
      </div>
      <span>{tempValue}</span>
    </div>
  );
}

export default TemperatureCard;
