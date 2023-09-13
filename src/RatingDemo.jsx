import Rating from '@mui/material/Rating';
import { useState } from 'react';

export default function RatingDemo() {
    const [score, setScore] = useState(0)
    const [hover, setHover] = useState(0);

    const handleChange = (event, newValue) => {
        setScore(newValue)
    }
    return (
        <div>
            <h1>Rating is: {hover}</h1>
            <Rating
                size='large'
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
                value={hover}
                onChange={handleChange}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
            />
        </div>
    )
}