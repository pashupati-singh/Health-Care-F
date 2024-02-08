import React from 'react'

interface Testimonial {
    image:string;
    name: string;
    age: number;
    profession: string;
    rating: number;
  }

export const TestimonialList:React.FC<Testimonial> = ({image,name,age,profession,rating}) => {
    return (
        <div>
<img src={image} alt="error"  />
        </div>
    )
  }
