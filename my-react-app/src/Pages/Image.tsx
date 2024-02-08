
import React from 'react';
import Imag from '../Image/Doc.jpg';
import style from '../CSS/Image.module.css';
import { StepperFun } from './Stepper';


export const Image = () => {
  

  return (
    <div>
      <div>
        <img src={Imag} alt="err" className={style.img} />
      </div>
      <div>
        <div className={style.modal}>
          <StepperFun />
        </div>
      </div>
    </div>
  );
}