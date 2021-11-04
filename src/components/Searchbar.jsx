import React from "react";
import { FormControl, InputLabel, OutlinedInput, InputAdornment, Container, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function Searchbar(props) {
    return(
        <Container maxWidth="xs">
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
                <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-city">Enter City...</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-city"
                    endAdornment={
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                    }
                    label="Enter City..."
                    onChange={props.city}
                    onKeyPress={props.weather}
                />
                </FormControl>
            </Box>
        </Container>
    );
}