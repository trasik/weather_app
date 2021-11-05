import { Container, Typography, Grid, Stack, Card, CardContent, Box} from "@mui/material";
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
            <Typography sx={{ color: "#FFFFFF", fontSize: 24, fontWeight: "bold" }} gutterBottom>
                {props.city}, {props.country}
            </Typography>
            <Typography sx={{ color: "#FFFFFF", fontSize: 16, fontWeight: "500" }} gutterBottom>
                {datePicker(new Date())}
            </Typography>
            <Grid mt={1} container spacing={2}>
                <Grid mt={3} item xs={6}>
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
                            <Typography sx={{ marginTop:2, marginLeft: 1, fontSize: 60, fontWeight: "500", color:"#FFFFFF" }} gutterBottom>
                                {Math.round(props.main.temp)}&#176;F
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Card sx={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        color: "#ffffff"
                    }}>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                <Stack spacing={2}>
                                    <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                    >
                                        <Typography sx={{ fontSize: 18, fontWeight: "400" }}>
                                            {Math.round(props.main.temp_max)}&#176;F
                                        </Typography>
                                        <Typography sx={{ fontSize: 18, fontWeight: "bold" }} gutterBottom>
                                            High
                                        </Typography>
                                    </Box>
                                    <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                    >
                                        <Typography sx={{ fontSize: 18, fontWeight: "400" }}>
                                        {Math.round(props.main.temp_min)}&#176;F
                                    </Typography>
                                        <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                                            Low
                                        </Typography>
                                    </Box>
                                </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                <Stack spacing={2}>
                                    <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                    >
                                        <Typography sx={{ fontSize: 18, fontWeight: "400" }} >
                                            {Math.round(props.main.humidity)}%
                                        </Typography>
                                        <Typography sx={{ fontSize: 18, fontWeight: "bold" }} gutterBottom>
                                            Humidty
                                        </Typography>
                                    </Box>
                                    <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                    >
                                        <Typography sx={{ fontSize: 18, fontWeight: "400" }} >
                                            {Math.round(props.wind.speed)}mph
                                        </Typography>
                                        <Typography sx={{ fontSize: 18, fontWeight: "bold" }} >
                                            Wind
                                        </Typography>
                                    </Box>
                                </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                <Stack spacing={2}>
                                    <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                    >
                                        <Typography sx={{ fontSize: 18, fontWeight: "400" }} >
                                            {new Date(props.sys.sunrise * 1000).toLocaleTimeString("en-US")}
                                        </Typography>
                                        <Typography sx={{ fontSize: 18, fontWeight: "bold" }} gutterBottom>
                                            Sunrise
                                        </Typography>
                                    </Box>
                                    <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                    >
                                        <Typography sx={{ fontSize: 18, fontWeight: "400" }} >
                                            {new Date(props.sys.sunset * 1000).toLocaleTimeString("en-US")}
                                        </Typography>
                                        <Typography sx={{ fontSize: 18, fontWeight: "bold" }} >
                                            Sunset
                                        </Typography>
                                    </Box>
                                </Stack>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}