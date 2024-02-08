
import style from '../CSS/Image.module.css';
import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Box, FormLabel } from '@chakra-ui/react';

interface CheckboxData {
  label: string;
  name: string;
}

interface FormData {
    year: string;
  }

interface DurationProps {
    handleDuration: (formData: FormData) => void;
  }


export const Duration: React.FC<DurationProps> = ({ handleDuration })=> {
    const [formData, setFormData] = useState<FormData>({ year: ''});
  const [selectedCheckbox, setSelectedCheckbox] = useState<string | null>(null);

  const checkboxes: CheckboxData[] = [
    { label: '3 Months', name: '3 Months' },
    { label: '6 Months', name: '6 Months' },
    { label: '1 year', name: '1 year' },
    { label: 'more than 1 year', name: 'more than 1 year' }
  ];

  const handleCheckboxChange = (label: string, name: string) => {

    if (selectedCheckbox === label) {
      setSelectedCheckbox(null);
      setFormData(prevState => ({ ...prevState, year: name }))
      console.log('Unchecked:', name);
    } else {
      setSelectedCheckbox(label);
     
      console.log('Checked:', name);
    }
    handleDuration(formData)
  };



  return (
    <div  className={style.container}>
         <FormLabel style={{marginBottom : "20px",fontSize:"20px"}} className={style.FormLabel}>How Long</FormLabel>
      {checkboxes.map(({ label, name }) => (
         <Box key={label} style={{ display: "flex", justifyContent: "space-between" }}>
         <label style={{ textAlign: "left", marginRight: '10px' }}>{label}</label>
         <Checkbox
         required
           checked={selectedCheckbox === label}
           onChange={() => handleCheckboxChange(label, name)}
         />
       </Box>
        
      ))}
    </div>
  );
};