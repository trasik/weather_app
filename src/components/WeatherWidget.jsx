import { Card, Container, CardContent, Typography, Grid} from "@mui/material";
import React from "react";

export default function WeatherWidget(props) {

    const datePicker = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day}, ${month} ${date}, ${year}`;
    }
    
    return(
        <Container maxWidth="sm" sx={{marginTop: "50px"}}>
            <Card 
            sx={{ 
                backgroundColor: "#1f1f1f",
                color: "#ffffff"
            }}>
                <CardContent>
                    <Typography sx={{ fontSize: 12, fontWeight: "bold" }} gutterBottom>
                        {datePicker(new Date())}
                    </Typography>
                    <Typography sx={{ fontSize: 22, fontWeight: "900" }} gutterBottom>
                        {props.city}, {props.country}
                    </Typography>
                    <Grid container direction="row" alignItems="center">
                        <Grid item>
                            <img 
                            width="80" height="80"
                            src={`http://openweathermap.org/img/w/${props.image_icon}.png`} 
                            alt="Weather icon" 
                            loading="lazy" 
                            />
                        </Grid>
                        <Grid item>
                            <Typography sx={{ fontSize: 30, fontWeight: "bold" }} gutterBottom>
                                {Math.round(props.main.temp)}&#176;F
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography sx={{ fontSize: 16, fontWeight: "bold" }} gutterBottom>
                        Feels like {Math.round(props.main.feels_like)}&#176;F. {props.weather_details.main}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}