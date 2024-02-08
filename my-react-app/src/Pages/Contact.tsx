import React, { useState } from 'react';
import style from '../CSS/Image.module.css';
import {Typography, Input } from '@mui/material';
import { Button,FormControl, FormLabel } from '@chakra-ui/react';

interface FormData {
  name: string;
  mobile: string;
}

interface ContactProps {
  handleContactCompleted: (formData: FormData) => void;
}

export const Contact: React.FC<ContactProps> = ({ handleContactCompleted }) => {
  const [formData, setFormData] = useState<FormData>({ name: '', mobile: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleContactCompleted(formData);
  };

  const isDisabled = formData.name === '' || formData.mobile === '';

  return (
    <div className={style.container}>
      <Typography variant="h5" component="h2" className={style.text}>
        Enter Name and Mobile Number
      </Typography>
      <form className={style.form} onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel className={style.FormLabel}>First name</FormLabel>
          <Input className={style.field} 
          placeholder='First name'
           value={formData.name} 
           name='name'
           onChange={handleChange} 
           required
           />
        </FormControl>
        <FormControl isRequired>
          <FormLabel className={style.FormLabel}>Mobile No.</FormLabel>
          <Input required className={style.field} placeholder='Mobile No.' value={formData.mobile} onChange={handleChange}  name='mobile' />
        </FormControl>
        <Button className={style.button} type="submit" disabled={isDisabled}>Submit</Button>
      </form>
    </div>
  );
};
