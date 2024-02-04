// SwitchExample.tsx
import React, { ChangeEvent, useState } from 'react';
import Switch from 'react-switch';
import './ReactSwitchButtonCard.css';

const ReactSwitchButtonCard: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (newChecked: boolean) => {
    setChecked(newChecked);
  };

  return (
    <div className="react-switch-card">
      <label htmlFor="normal-switch">
        <Switch
          onChange={handleChange}
          checked={checked}
          onColor="#9932FF"
          className="react-switch"
          id="normal-switch"
          height={20} 
          width={40}
        />
      </label>
    </div>
  );
};

export default ReactSwitchButtonCard;
