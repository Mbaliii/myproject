import { Box, Button, Modal, Typography } from '@mui/material';
import './App.css';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import main from './img/sb-zoom-blazer-mid-skate-shoes-TtJD6k.png';
import section from './img/f46cf5ef24e5afdca966fcf0315c3889.png';

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box className="main">
      <Box position="static" className="banner">
        <Box className="icon">
          <img src="https://freepngimg.com/thumb/nike_logo/3-2-nike-logo-png.png" />
        </Box>

        <Box className="section">
          <Box className="icon">
            <img src="img/f46cf5ef24e5afdca966fcfc0315c3889.png" />
          </Box>
        </Box>

        <Box className="option">
          <Button>Men</Button>
          <Button>Women</Button>
          <Button>Kids</Button>
          <Button>Customize</Button>
          <Button>Favorites</Button>
        </Box>
        <Box className="mobile">0
          <Button onClick={handleOpen}>
            <MenuIcon />
          </Button>
        </Box>

        <Box className="cart">
          <Button>
            <LocalMallIcon />
          </Button>
        </Box>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box className="modal">
          <Button>Men</Button>
          <Button>Women</Button>
          <Button>Kids</Button>
          <Button>Customize</Button>
          <Button>Favorites</Button>
        </Box>
      </Modal>
      <Box className="card">
        <Box>
          <Typography id="title">
            NIKE
            <br /> MID <br />
            BLAZER
          </Typography>
        
          <Typography id="price">
            $260
            <Button>
              <LocalMallIcon />
            </Button>
          </Typography>

          <Typography id="dollar-sign">
            GET IT NOW
            <Button>
             
            </Button>
          </Typography>
        </Box>

        <img className="card-img" src={main} />
       
      </Box>
      <Box className="scroll">
        <Box id="card-1">
          <Box>
            <img
              id="list-img"
              src="https://static.sneakerjagers.com/products/660x660/219347.jpg"
            />
          </Box>
          <Typography>NIKE AIR HUARHE PREMIUM </Typography>

          <Typography> * * * * * </Typography>          
          <Typography> $185 </Typography>
          <Typography> 3COLORS           +</Typography>
        

        </Box>
        




        <Box id="card-2">
          <Box>
            <img
              id="list-img"
              src="https://image.goat.com/glow-4-5-25/375/attachments/product_template_pictures/images/078/461/362/original/12155_00.png.png"
            />
          </Box>
          <Typography>NIKE AIR FORCE I HIGH</Typography>
          <Typography>* * * * *</Typography>
          <Typography>$235 </Typography>
          <Typography> 3COLORS     +</Typography>
          </Box>
       

        <Box id="card-3">
          <Box>
            <img
              id="list-img"
              src="https://static.nike.com/a/images/t_default/7dcc6fd4-b41c-493e-85bd-58b8944b6b1d/blazer-mid-77-shoes-GpF2lM.png"
            />
          </Box>
          <Typography> NIKE AIR SPAN II PREMIUM</Typography>
          <Typography> *  *  *  *  *  </Typography>
          <Typography> $270 </Typography>
          <Typography> 3COLORS </Typography>


          
        </Box>
        
        <Box id="card-4">
          <Box>
            <img
              id="list-img"
              src="https://onfeet.fra1.cdn.digitaloceanspaces.com/sneakers/0/AJ1700-600/Nike-SF-Air-Force-1-Vintage-Wine-(W)-0.png"
            />
          </Box>
          <Typography>NIKE AIR</Typography>
          <Typography> *  *  *  *  *  </Typography>
          <Typography> $185 </Typography>
          <Typography> 3COLORS </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
