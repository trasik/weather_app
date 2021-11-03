import React from "react";
import { AppBar, Link, Toolbar, Typography, Box, Container } from "@mui/material";
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function Topbar() {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky" style={{backgroundColor : "#1f1f1f"}}>
                <Container>
                    <Toolbar>
                        <WbSunnyIcon />
                        <Link href="/" style={{textDecoration: "none", color: "inherit"}}>
                            <Typography variant="h5" fontWeight="bold" marginLeft="5px">Weather App</Typography>
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}