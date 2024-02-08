import style from '../CSS/Image.module.css';
import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Box, FormLabel } from '@chakra-ui/react';

interface CheckboxData {
  label: string;
  name: string;
}

interface FormData {
    time: string;
  }

interface BookProps {
    handleBook: (formData: FormData) => void;
  }


export const Book: React.FC<BookProps> = ({ handleBook })=> {
    const [formData, setFormData] = useState<FormData>({ time: ''});
  const [selectedCheckbox, setSelectedCheckbox] = useState<string | null>(null);

  const checkboxes: CheckboxData[] = [
    { label: '9 a.m. - 10 a.m.', name:  '9 a.m. - 10 a.m.'},
    { label: '10:15 a.m. - 11:15 a.m.', name:  '10:15 a.m. - 11:15 a.m.'},
    { label: '11:30 a.m. - 12:30 p.m.', name:  '11:30 a.m. - 12:30 p.m.'},
    { label: '1 p.m. - 2 p.m.', name:  '1 p.m. - 2 p.m.'},
    { label: '2:15 p.m. - 3:15 p.m.', name:  '2:15 p.m. - 3:15 p.m.'},
    { label: '3:30 p.m. - 4:30 p.m.', name:  '3:30 p.m. - 4:30 p.m.'}
  ];

  const handleCheckboxChange = (label: string, name: string) => {

    if (selectedCheckbox === label) {
      setSelectedCheckbox(null);
      setFormData(prevState => ({ ...prevState, time: name }))
    } else {
      setSelectedCheckbox(label);
    }
    handleBook(formData)
  };



  return (
    <div  className={style.container}>
         <FormLabel style={{marginBottom : "20px",fontSize:"20px"}} className={style.FormLabel}>Tommorow slots</FormLabel>
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