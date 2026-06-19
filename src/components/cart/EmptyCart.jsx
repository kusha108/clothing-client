import { Typography, Box, styled } from '@mui/material';

// MAIN WRAPPER
const Component = styled(Box)`
  width: 80%;
  height: 60vh;
  background: #000000;                     /* Black background */
  margin: 80px auto;
  border-radius: 16px;
  border: 3px solid #FFD700;              /* Yellow border */
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 90%;
    height: 50vh;
    margin: 40px auto;
  }
`;

const Container = styled(Box)`
  text-align: center;
  padding: 20px;
`;

const Image = styled('img')({
  width: '18%',
  marginBottom: '20px',
});

const EmptyCart = () => {
  const imgurl =
    'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

  return (
    <Component>
      <Container>
        <Image src={imgurl} />
        
        <Typography 
          sx={{ 
            color: '#FFD700', 
            fontSize: 22, 
            fontWeight: 700,
            marginBottom: 1 
          }}
        >
          Your cart is empty!
        </Typography>

        <Typography 
          component="span" 
          sx={{ color: '#ffffff', fontSize: 16 }}
        >
          Add items to it now.
        </Typography>
      </Container>
    </Component>
  );
};

export default EmptyCart;
