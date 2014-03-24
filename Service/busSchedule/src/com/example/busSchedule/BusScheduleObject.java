package com.example.busSchedule;

public class BusScheduleObject 

{
	
	 private String departureTime;
	 private String arrivalTime;
	 private String city;
	 
	 public BusScheduleObject(String city, String departureTime, String arrivalTime) 
	 {
		    this.city = city;
	        this.departureTime = departureTime;
	        this.arrivalTime = arrivalTime;
	 }
	 
	 //Getters and setters
	 public String getDepartureTime() 
	 {
	        return departureTime;
     }
	
	 public void setDepartureTime(String departureTime) 
	 {
	        this.departureTime = departureTime;
	 }

     public String getArrivalTime() 
     {
	        return arrivalTime;
	 }
     public void setArrivalTime(String arrivalTime) 
     {
	        this.arrivalTime = arrivalTime;
	 }
     public String getCity() 
     {
         return city;
     }
     public void setCity(String city) 
     {
         this.city = city;
     }
}
