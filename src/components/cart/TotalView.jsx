import { useState, useEffect } from 'react';
import { Box, Typography, styled } from '@mui/material';


const Wrapper = styled(Box)`
  border: 2px solid #FFD700;      /* Full yellow border */
  border-radius: 12px;            /* Smooth curved corners */
  overflow: hidden;               /* Makes header attach perfectly */
  background: #fff;
`;

// HEADER BAR
const Header = styled(Box)`
  padding: 15px 24px;
  background: #000;               /* Black */
  border-bottom: 2px solid #FFD700; /* Yellow line bottom */
`;

// HEADING TEXT
const Heading = styled(Typography)`
  color: #FFD700;
  font-size: 18px;
  font-weight: 700;
`;

// CONTENT SECTION
const Container = styled(Box)`
  padding: 20px 24px;
  background: #FFFFFF;

  & > p {
    margin-bottom: 18px;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Price = styled(Typography)`
  font-size: 15px;
  font-weight: 600;
`;

const TotalAmount = styled(Typography)`
  font-size: 20px;
  font-weight: 700;
  border-top: 1px dashed #999;
  border-bottom: 1px dashed #999;
  padding: 18px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Discount = styled(Typography)`
  font-size: 15px;
  color: #2ecc71;
  margin-top: 10px;
  font-weight: 600;
`;

const TotalView = ({ cartItems }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    let totalPrice = 0;
    let totalDiscount = 0;

    cartItems.forEach(item => {
      totalPrice += item.price.mrp;
      totalDiscount += (item.price.mrp - item.price.cost);
    });

    setPrice(totalPrice);
    setDiscount(totalDiscount);
  }, [cartItems]);

  return (
    <Wrapper sx={{ width: "100%", marginTop: "10px" }}>
      
      <Header>
        <Heading>PRICE DETAILS</Heading>
      </Header>

      <Container>

        <Typography>
          Price ({cartItems?.length} item)
          <Price component="span">₹{price}</Price>
        </Typography>

        <Typography>
          Discount
          <Price component="span">-₹{discount}</Price>
        </Typography>

        <Typography>
          Delivery Charges
          <Price component="span">₹40</Price>
        </Typography>

        <TotalAmount>
          Total Amount
          <Price component="span">₹{price - discount + 40}</Price>
        </TotalAmount>

        <Discount>
          You will save ₹{discount - 40} on this order
        </Discount>

      </Container>

    </Wrapper>
  );
};

export default TotalView;
