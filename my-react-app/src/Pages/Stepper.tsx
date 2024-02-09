import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import style from '../CSS/Navbar.module.css';
import { Contact } from './Contact';
import { Issue } from './Issue';
import { Duration } from './Duration';
import { Book } from './Book';

interface Contact {
    name: string;
    mobile: string;
  }
  
  interface Issue {
    age: string;
    profession:string
    problem: string;
  }
  interface Duration {
    year: string;
  }

  interface Book {
    time:string
   }

   
   

const steps = ['Contact', 'Issue', 'Duration', 'Book Now'];

export const StepperFun = () => {
    const [contact, setContact] = useState<Contact | null>(null);
    const [issue, setIssue] = useState<Issue | null>(null);
    const [duration, setDuration] = useState<Duration | null>(null);
    const [book, setBook] = useState<Book | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [contactCompleted, setContactCompleted] = useState(false);

  const handleContactCompleted = (value: Contact) => {
    setContact(value);
    setContactCompleted(true);
    handleNext();
  };


  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return false;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setContactCompleted(false);
  };
  const handleIssue = (value: Issue) =>{
      setIssue(value)
      handleNext();
  }

  const handleDuration = (value: Duration) =>{
    setDuration(value)
    handleNext();
}
// const handleBook = (value: Book) =>{
//     setBook(value)
//     console.log(value);
    
//     handleNext();
// }

const handleBook = (value: Book) => {
  setBook(value); // Set the book value in state
  handleNext(); // Move to the next step
};

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <Contact handleContactCompleted={handleContactCompleted} />;
      case 1:
        return <Issue handleIssue = {handleIssue} />;
      case 2:
        return <Duration handleDuration = {handleDuration}/>;
      case 3:
        return <Book handleBook = {handleBook} />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: '100%' }} borderRadius={'10px'} height={"400px"} className = {style.mainContainer}>
      {contactCompleted && (
        <div className={style.nav}>
          <div className={style.stepper}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                const labelProps: { optional?: React.ReactNode } = {};
                if (isStepOptional(index)) {
                  labelProps.optional = <Typography variant="caption">Optional</Typography>;
                }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </div>
        </div>
      )}
      {renderStepContent(activeStep)}
      {activeStep === steps.length ? (
        <React.Fragment>
<Typography sx={{ mt: 2, mb: 1 }}>
  Thank you {contact ?  `${contact.name}` : null} for visiting,  
</Typography>
<Typography>
  Your slot has been booked.
  </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Start</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};
