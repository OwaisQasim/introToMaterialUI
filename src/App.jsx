import Button from '@mui/material/Button';
import "./App.css"
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RatingDemo from './RatingDemo';
import { FormDemo } from './FormDemo';



function App() {
  const clickHandle = () => {
    console.log('Button Clicked')
  }

  return (
    <>
      {/* <Button
        color='success'
        size='large'
        variant="contained"
        onClick={clickHandle}>Contained
      </Button>
      <IconButton color="primary" size='large' aria-label="add to shopping cart">
        <AddShoppingCartIcon fontSize='large' />
      </IconButton> */}

      {/* <RatingDemo /> */}

      <FormDemo />
    </>
  )
}

export default App
