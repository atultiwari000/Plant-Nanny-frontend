import { useEffect, useState } from "react";
import high from "../assets/high-meter.svg";
import { onValue, ref } from "firebase/database";
import useApp from "../hooks/useFBApp";

function HumidityCard() {
  const { db } = useApp();
  const [humidityValue, setHumidityValue] = useState(0);

  useEffect(() => {
    let humRef = ref(db, "App/environment/humidity");
    onValue(humRef, (snapshot) => {
      setHumidityValue(snapshot.val());
    });
  }, []);
  return (
    <div className="card hum">
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <img src={high} />
        <h4>Humidity</h4>
      </div>
      <span>{humidityValue}</span>
    </div>
  );
}

export default HumidityCard;
