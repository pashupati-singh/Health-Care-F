import React, { useEffect, useRef, useState } from 'react';
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from '../CSS/Testimonial.module.css'
import { Stack, Card, CardFooter, Flex, Heading, Image, Text, Button } from '@chakra-ui/react';
import { Rating } from '@mui/material';



interface Testimonial {
  image:string;
  name: string;
  age: number;
  profession: string;
  rating: number;
  testimonial:string;
  disease: string;

}


export const Testimonial = () => {
  const [data,setData] = useState([]);

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

  console.log(data);
  

  const FetchData = async() =>{
     fetch(`http://localhost:8080/testimonial`)
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
      <Text className={style.Text}>Patient Recovery Stories</Text>
        <div>
      <Slider {...settings}>
        {data.map((item:Testimonial, index) => (
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
      <Flex style={{display:"flex",justifyContent:"space-between"}}>
      <Heading textAlign={"start"} fontSize={["12px","15px","18px"]} color={'rgb(83, 189, 193)'} fontWeight="500">{item.name}</Heading>
      <Rating
      className={style.rating}
  value={item.rating}
/>
      </Flex>
      <Text textAlign={"start"} fontSize={["12px","14px","14px"]} mt={'-20px'} fontWeight="500" color='blue.600'>
       Disease: {item.disease}
      </Text>
      <Text mt={'-10px'} textAlign={"start"} color='blue.600' fontSize={["15px"]}>
        {item.profession}
      </Text>
      <Text mt={'-10px'} textAlign={"start"} color='blue.600' fontSize={["15px"]}>
        Age: {item.age}
      </Text>
      <br />
      <Text mt={'-40px'} textAlign={"start"} color='blue.600' fontSize={["15px"]}>
        {item.testimonial.substring(0, 100)} ...
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
  );
};



