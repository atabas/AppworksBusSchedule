package com.example.busSchedule;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/schedules")

@Produces( MediaType.APPLICATION_JSON )

public class BusSchedule 
{
	
    List<BusScheduleObject> scheduleList = null;  
    
    public BusSchedule() 
    {
    	scheduleList = new ArrayList<BusScheduleObject>();
        scheduleList.add(new BusScheduleObject("Toronto", "09:00 AM", "10:30 AM") );
        scheduleList.add(new BusScheduleObject("Toronto", "09:30 AM", "11:05 AM") );
        scheduleList.add(new BusScheduleObject("Toronto", "10:30 AM", "12:05 PM") );
        scheduleList.add(new BusScheduleObject("Toronto", "11:30 AM", "01:55 PM") );
        scheduleList.add(new BusScheduleObject("Toronto", "12:30 PM", "02:05 PM") );
        scheduleList.add(new BusScheduleObject("Toronto", "01:30 PM", "03:55 PM") );
        scheduleList.add(new BusScheduleObject("Toronto", "02:30 PM", "04:10 PM") );
        scheduleList.add(new BusScheduleObject("Toronto", "03:30 PM", "05:55 PM") );
        scheduleList.add(new BusScheduleObject("Toronto", "04:15 PM", "07:00 PM") );

    }
    
    // Handle HTTP GET requests on /schedules
    @GET
    public Response getBusSchedule()
    {
        // Return a 200 OK response with a JSON list of schedule
        return Response.ok( scheduleList ).build();
    }

}
