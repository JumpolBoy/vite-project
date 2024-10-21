import React from 'react';
import './App.css';

const App: React.FC = () => {
  const [weight, setWeight] = React.useState('');
  const [waterIntake, setWaterIntake] = React.useState(0);
  const [isLightMode, setIsLightMode] = React.useState(true);

  const calculateWaterIntake = (weight: string) => {
    const weightNumber = parseFloat(weight);
    if (!isNaN(weightNumber)) {
      const intake = (weightNumber * 2.2 * 30) / 2;
      setWaterIntake(parseFloat(intake.toFixed(2)));
    } else {
      setWaterIntake(0);
    }
  };

  return (
    <div style={{ background: isLightMode ? '#fff' : '#333', color: isLightMode ? '#000' : '#fff', padding: '200px', margin: '0px'}}>
      
      <h1>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>

      <input
        type="number"
        placeholder="น้ำหนักของคุณ (กิโลกรัม)"
        value={weight}
        onChange={(e) => {
          setWeight(e.target.value);
          calculateWaterIntake(e.target.value);
        }}
        style={{ padding: '10px', fontSize: '16px' ,margin: '20px' ,borderRadius: '15px' ,border: 'none'}}
      />

      <p>ปริมาณน้ำที่ควรดื่ม : {waterIntake} มล.</p>
      
      <button onClick={() => setIsLightMode(!isLightMode)} style={{ padding: '10px', fontSize: '16px' ,margin: '20px'}}>
        {isLightMode ? 'Dark' : 'Light'} Mode
      </button>

    </div>
  );
};

export default App;