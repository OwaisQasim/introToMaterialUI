import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { useState } from 'react';

export const FormDemo = () => {
    const [value, setValue] = useState('')
    const [volume, setVolume] = useState(30)

    const updateValue = (evnt) => {
        setValue(evnt.target.value)
    }

    const handleVolumeChange = (evnt, newValue) => {
        setVolume(newValue)
    }

    return (
        <Box sx={{
            border: '2px solid red',
            width: 400,
            height: 500,
            p: 4,

        }}>
            <h1>Input is: {value}</h1>
            <TextField
                id="outlined-basic"
                placeholder='Add Input'
                label="Outlined"
                variant="outlined"
                value={value}
                onChange={updateValue}
            />
            <h2>Volume is: {volume}</h2>
            <Slider
                aria-label="Volume"
                value={volume}
                onChange={handleVolumeChange}
            />

        </Box>
    )
}
