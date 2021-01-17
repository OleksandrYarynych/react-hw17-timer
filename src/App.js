import "./App.css";
import Timer from "./components/Timer";

function App() {
  const firstTimer = {
    id: 1,
    time: 10000,
    autostart: true,
    step: 2000,
  };
  const secondTimer={
    id:2,
    time:35000,
    autostart:false,
    step:1000
  }

  return (
    <div>
    <Timer
      time={firstTimer.time}
      autostart={firstTimer.autostart}
      step={firstTimer.step}
    />
    <Timer
      time={secondTimer.time}
      autostart={secondTimer.autostart}
      step={secondTimer.step}
    />
    </div>
  );
}

export default App;
