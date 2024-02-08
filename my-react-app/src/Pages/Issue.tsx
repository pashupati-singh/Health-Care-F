import React, { useState } from 'react'
import style from '../CSS/Image.module.css';
import { Button, FormControl, FormLabel } from '@chakra-ui/react';
import { Input } from '@mui/material';

interface FormData {
    age: string;
    profession:string
    problem: string;
  }
  
interface issueProps {
    handleIssue: (formData: FormData) => void;
  }

export const Issue : React.FC<issueProps> = ({ handleIssue })  => {
    const [formData, setFormData] = useState<FormData>({ age: '', problem: '',profession:'' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleIssue(formData);
      };

  return (
    <div className={style.container}>
        <form className={style.form} onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel className={style.FormLabel}>Your Age</FormLabel>
          <Input className={style.field} 
          placeholder='Your Age'
           value={formData.age} 
           name='age'
           required
           onChange={handleChange} 
           />
        </FormControl>
        <FormControl isRequired>
          <FormLabel className={style.FormLabel}>Profession</FormLabel>
          <Input className={style.field} 
          placeholder='Your Profession'
           value={formData.profession} 
           name='profession'
           onChange={handleChange} 
           required
           />
        </FormControl>
        <FormControl isRequired>
          <FormLabel className={style.FormLabel}>Your Issue</FormLabel>
          <Input className={style.field}
           placeholder='Your Issue'
           value={formData.problem} 
           onChange={handleChange}
           required
             name='problem' />
        </FormControl>
        <Button className={style.button} type="submit">Submit</Button>
      </form>
    </div>
  )
}
