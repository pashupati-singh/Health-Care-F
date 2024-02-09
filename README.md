# Health-Care

Welcome to the Joint and Muscular Patient Appointment Booking System repository! This project aims to provide a platform for patients suffering from joint and muscular issues to easily book appointments with doctors.

Deploy Links
https://health-f1fh.onrender.com : server-side.

https://prismatic-douhua-1c4ff9.netlify.app/?city=Lucknow : client-side.

#Features
Appointment Booking: Users can book appointments with doctors through a simple 4-step form.
Location-Based Doctor Availability: Users can view available doctors based on their location (currently supports Lucknow and Bangalore).

Testimonials: Testimonials from recovered patients are showcased to build trust and confidence in the services provided.
Usage

#Appointment Booking:
Fill out the 4-step form to book your appointment.
Provide all the required information accurately.
Choose a suitable time slot for your appointment.

#View Available Doctors:
By default, available doctors are displayed based on the default location (Lucknow).
To view available doctors in Bangalore, change the city name in the URL to http://localhost:3000?city=Bangalore.

Testimonials:

Testimonials from recovered patients are showcased to inspire confidence in the treatment provided.
Read through the testimonials to learn about others' experiences with the service

#API Endpoints

Doctors GET /doc?city=Lucknow : For getting Doctors or (Bangalore)

GET /testimonial: Get a list of Testimonials.
