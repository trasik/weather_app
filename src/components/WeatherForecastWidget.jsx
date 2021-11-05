import React from "react";
import { Container, Typography, Grid, Box, Card, CardContent} from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCloud, faCloudRain, faSnowflake} from "@fortawesome/free-solid-svg-icons";

export default function WeatherForecastWidget(props) {

    const forecastDay = (d) => {
        let month = d.getMonth() + 1;
        let date = d.getDate();
        return `${month}/${date}`;
    }

    const forecastTime = (d) => {
        return d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    }


    const WeatherForecastCards = props.forecast.list.map((item, index) => {
        return (
            <Grid item key={item.dt_txt} xl={1}>
                <Card sx={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                }}>
                    <CardContent>
                        <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                        >
                            <Typography sx={{ color: "#ffffff", fontSize: 18, fontWeight: "400" }}>
                                {forecastDay(new Date(item.dt * 1000))}
                            </Typography>
                            <Typography sx={{ color: "#ffffff", fontSize: 18, fontWeight: "400" }} gutterBottom>
                                {forecastTime(new Date(item.dt * 1000))}
                            </Typography>
                            {(function() {
                                switch(item.weather[0].main) {
                                    case "Clear":
                                    return <FontAwesomeIcon icon={faSun} size="2x"/>;
                                    case "Clouds":
                                    return <FontAwesomeIcon icon={faCloud} size="2x" />
                                    case "Rain":
                                    return <FontAwesomeIcon icon={faCloudRain} size="2x" />
                                    case "Drizzle":
                                    return <FontAwesomeIcon icon={faCloudRain} size="2x" />
                                    case "Snow":
                                    return <FontAwesomeIcon icon={faSnowflake} size="2x" />
                                    default:
                                    return <FontAwesomeIcon icon={faCloud} size="2x" />;
                                }
                            })()}
                            <Typography sx={{ marginTop: "8px", color: "#ffffff", fontSize: 18, fontWeight: "500" }} >
                                {Math.round(item.main.temp)}&#176;F
                            </Typography>
                        </Box>

                    </CardContent>
                </Card>
            </Grid>
        )
    });
    
    return (
        <Container  maxWidth="xl" sx={{marginTop: "50px"}}>
            <Typography sx={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }} gutterBottom>
                Forecast
            </Typography>
            <Grid mt={1} container spacing={0.5} justifyContent="space-between">
                {WeatherForecastCards}
            </Grid>
        </Container>
    );
}