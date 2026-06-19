import { useEffect } from 'react';
import { Box, Typography, Button, Grid, styled } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';

import TotalView from './TotalView';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem';

// MAIN PAGE WRAPPER (Black background)
const Component = styled(Grid)(({ theme }) => ({
  padding: '30px 135px',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  background: '#0a0a0a',              
  minHeight: '100vh',
  [theme.breakpoints.down('md')]: {
    padding: '20px 20px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '10px 10px',
    flexDirection: 'column',
  }
}));

// LEFT SIDE (ITEMS)
const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  background: '#ffffff',
  borderRadius: '14px',                
  border: '2px solid #FFD700',         
  boxShadow: '0px 4px 12px rgba(0,0,0,0.4)',
  [theme.breakpoints.down('sm')]: {
    paddingRight: 0,
    marginBottom: 15,
  }
}));

// HEADER (Black + yellow)
const Header = styled(Box)`
  padding: 15px 24px;
  background: #000;
  border-radius: 12px 12px 0 0;
  border-bottom: 2px solid #FFD700;
  color: #FFD700;
`;

const BottonWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  border-radius: 0 0 12px 12px;
  box-shadow: inset 0px 2px 8px rgba(0,0,0,0.2);
  margin-top: 10px;
`;

// BUTTON (Black + yellow + curved)
const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #000;
  color: #FFD700;
  font-weight: 700;
  border-radius: 10px;                
  border: 2px solid #FFD700;
  width: 250px;
  height: 51px;
  &:hover {
    background: #1a1a1a;
  }
`;

const Cart = () => {

  const cart = useSelector(state => state.cart);
  const cartItems = cart.cartItems || [];

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, 1));
    }
  }, [dispatch, id]);

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  }

  return (
    <>
      {cartItems.length > 0 ?
        <Component container>

          {/* LEFT SIDE */}
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                My Cart ({cartItems.length})
              </Typography>
            </Header>

            {cartItems.map(item => (
              <CartItem
                key={item.id}
                item={item}
                removeItemFromCart={removeItemFromCart}
              />
            ))}

            <BottonWrapper>
              <StyledButton variant="contained">
                Place Order
              </StyledButton>
            </BottonWrapper>
          </LeftComponent>

          {/* RIGHT SIDE */}
          <Grid
            item
            lg={3}
            md={3}
            sm={12}
            xs={12}
            style={{ marginTop: "10px" }}
          >
            <TotalView cartItems={cartItems} />
          </Grid>

        </Component>
        :
        <EmptyCart />
      }
    </>
  );
};

export default Cart;
