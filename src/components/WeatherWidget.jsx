import { Container, Typography, Grid, Card, CardContent, Box} from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCloud, faCloudRain, faSnowflake} from "@fortawesome/free-solid-svg-icons";
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
        <Container maxWidth="xl" sx={{marginTop: "50px"}}>
            <Typography sx={{ fontSize: 24, fontWeight: "bold" }} gutterBottom>
                {props.city}, {props.country}
            </Typography>
            <Typography sx={{ fontSize: 16, fontWeight: "500" }} gutterBottom>
                {datePicker(new Date())}
            </Typography>
            <Grid mt={1} container spacing={2}>
                <Grid item xs={6}>
                    <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    >
                        <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                        >
                            {(function() {
                                switch(props.weather_details.main) {
                                    case "Clear":
                                    return <FontAwesomeIcon icon={faSun} size="6x" />;
                                    case "Clouds":
                                    return <FontAwesomeIcon icon={faCloud} size="6x" />
                                    case "Rain":
                                    return <FontAwesomeIcon icon={faCloudRain} size="6x" />
                                    case "Drizzle":
                                    return <FontAwesomeIcon icon={faCloudRain} size="6x" />
                                    case "Snow":
                                    return <FontAwesomeIcon icon={faSnowflake} size="6x" />
                                    default:
                                    return <FontAwesomeIcon icon={faCloud} size="6x" />;
                                }
                            })()}
                            <Typography sx={{ marginTop:2, marginLeft: 1, fontSize: 60, fontWeight: "500", color:"#1f1f1f" }} gutterBottom>
                                {Math.round(props.main.temp)}&#176;F
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Card sx={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        color: "#ffffff"
                    }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} gutterBottom>
                            Word of the Day
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}