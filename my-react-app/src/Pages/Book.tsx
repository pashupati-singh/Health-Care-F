import style from '../CSS/Image.module.css';
import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Box, FormLabel } from '@chakra-ui/react';

interface Checkbox {
  label: string;
  name: string;
}

interface FormData1 {
    time: string;
  }

interface BookProps {
    handleBook: (formData1: FormData1) => void;
  }


export const Book: React.FC<BookProps> = ({ handleBook })=> {
    const [formData1, setFormData1] = useState<FormData1>({ time: ''});
  const [selectedCheck, setSelectedCheck] = useState<string | null>(null);

  const checkbox: Checkbox[] = [
    { label: '9 a.m. - 10 a.m.', name:  '9 a.m. - 10 a.m.'},
    { label: '10:15 a.m. - 11:15 a.m.', name:  '10:15 a.m. - 11:15 a.m.'},
    { label: '11:30 a.m. - 12:30 p.m.', name:  '11:30 a.m. - 12:30 p.m.'},
    { label: '1 p.m. - 2 p.m.', name:  '1 p.m. - 2 p.m.'},
    { label: '2:15 p.m. - 3:15 p.m.', name:  '2:15 p.m. - 3:15 p.m.'},
    { label: '3:30 p.m. - 4:30 p.m.', name:  '3:30 p.m. - 4:30 p.m.'}
  ];

  const handleCheckboxChange = (label: string, name: string) => {
    // console.log(name);
    if (selectedCheck === label) {
      setSelectedCheck(null);
      console.log('unchecked' , name);
      
    } else {
      setSelectedCheck(label);
      console.log('checked' , name);
      const updatedFormData = { time: name };
     setFormData1(updatedFormData);
     console.log(updatedFormData);
     
    }
    handleBook(formData1)
  };



  return (
    <div  className={style.container}>
         <FormLabel style={{marginBottom : "20px",fontSize:"20px"}} className={style.FormLabel}>Tomorrow slots</FormLabel>
      {checkbox.map(({ label, name }) => (
         <Box key={label} style={{ display: "flex", justifyContent: "space-between" }}>
         <label style={{ textAlign: "left", marginRight: '10px' }}>{label}</label>
         <Checkbox
         required
           checked={selectedCheck === label}
           onChange={() => handleCheckboxChange(label, name)}
         />
       </Box>
        
      ))}
    </div>
  );
};