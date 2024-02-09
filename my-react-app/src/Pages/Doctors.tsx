import React, { useEffect, useState } from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from '../CSS/Testimonial.module.css'
import { Stack, Card, CardFooter, Flex, Heading, Image, Text, Button } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

interface Doctor {
    image:string;
    name: string;
    experience: number;
    expertise: string;
    location:string;
    degree: string;
  
  }

export const Doctors = () => {
    const [data,setData] = useState([]);
    const [searchParams] = useSearchParams(); 
    const city = searchParams.get('city')
    
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  
  

  const FetchData = async() =>{
     fetch(`https://health-f1fh.onrender.com/doc?city=${city}`)
     .then((res)=>res.json())
     .then((data)=>setData(data))
     .catch((error)=>console.log(error)
     )
  }


  useEffect(()=>{
    FetchData();
  },[])

  return (
    <div>
    <Text className={style.Text}>Our Experts</Text>
    <div style={{maxWidth:"95%",margin:"auto"}}>
  <Slider {...settings}>
    {data.map((item:Doctor, index) => (
      <div key={index}>
      <Card maxW={["510px"]} maxH={["800px"]} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"} >
<Image
  src={item.image}
  alt='Green double couch with wooden legs'
  borderTopLeftRadius='20px'
  borderTopRightRadius="20px"
  width={["80px","150px","250px"]}
  height={"320px"}  
  objectFit='fill'
/>
<Stack ml={'10px'}>
  <Heading textAlign={"start"} fontSize={["12px","15px","18px"]} color={'rgb(83, 189, 193)'} fontWeight="500">{item.name}</Heading>
  <Text textAlign={"start"} fontSize={["12px","14px","14px"]} mt={'-20px'} fontWeight="500" color='blue.600'>
   {item.experience} years of experience
  </Text>
  <Text mt={'-10px'} textAlign={"start"} color='blue.600' fontSize={["15px"]}>
    {item.degree.substring(0,35)}...
  </Text>
  <Text mt={'-10px'} textAlign={"start"} color='blue.600' fontSize={["15px"]}>
    {item.location}
  </Text>
  <br />
  <Text mt={'-40px'} textAlign={"start"} color='blue.600' fontSize={["15px"]}>
    {item.expertise}
  </Text>

</Stack>
<CardFooter>
  <Button className={style.button} variant='solid' colorScheme='blue' width="150px" ml={["-2px","20px","10px"]} fontSize={"18px"}>
    know more
  </Button>
 
</CardFooter>
</Card>
      </div>
    ))}
  </Slider>

</div>

</div>
  )
}
