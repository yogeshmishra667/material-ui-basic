import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import BluetoothAudioIcon from '@material-ui/icons/BluetoothAudio';
import BluetoothDisabledIcon from '@material-ui/icons/BluetoothDisabled';

export default function Check() {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            size="small"
            checked={checked}
            icon={<BluetoothDisabledIcon />}
            checkedIcon={<BluetoothAudioIcon />}
            onChange={(e) => setChecked(e.target.checked)}
            color="primary"
          ></Checkbox>
        }
        label="bluetooth"
      />
    </div>
  );
}
