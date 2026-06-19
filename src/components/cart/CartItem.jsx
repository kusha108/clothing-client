import { Card, Box, Typography, Button, styled } from '@mui/material';

import GroupButton from './GroupButton';
import { addEllipsis } from '../../utils/common-utils';

// OUTER CARD — Curved + Yellow Border + White
const Component = styled(Card)`
  border-radius: 14px;
  display: flex;
  background: #ffffff;
  padding: 18px 12px;
  flex-wrap: wrap;
  border: 2px solid #FFD700;         /* Yellow border */
  box-shadow: 0 4px 12px rgba(0,0,0,0.25);
  margin-bottom: 16px;
`;

// LEFT SIDE (Image + qty)
const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 120px;
`;

const SmallText = styled(Typography)`
  color: #777;
  font-size: 14px;
  margin-top: 10px;
`;

const Cost = styled(Typography)`
  font-size: 20px;
  font-weight: 700;
`;

const MRP = styled(Typography)`
  color: #878787;
`;

const Discount = styled(Typography)`
  color: #31A24C;
  font-weight: 600;
`;

const Remove = styled(Button)`
  margin-top: 20px;
  font-size: 15px;
  color: #FFD700;
  font-weight: 700;
  background: #000000;
  padding: 6px 18px;
  border-radius: 10px;
  border: 2px solid #FFD700;
  text-transform: none;
  &:hover {
    background: #111;
  }
`;

// RIGHT SIDE (Details)
const DetailBox = styled(Box)`
  margin: 20px;
  flex: 1;
  min-width: 200px;
`;

const CartItem = ({ item, removeItemFromCart }) => {

  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

  return (
    <Component>
      
      {/* LEFT SIDE */}
      <LeftComponent>
        <img
          src={item?.detailUrl}
          alt={item?.title?.shortTitle || "product"}
          style={{
            height: 120,
            width: 120,
            objectFit: "contain",
            borderRadius: "12px",
            background: "#fff"
          }}
        />

        {/* quantity buttons */}
        <GroupButton item={item} />
      </LeftComponent>

      {/* RIGHT SIDE */}
      <DetailBox>
        <Typography style={{ fontSize: 17, fontWeight: 600 }}>
          {addEllipsis(item?.title?.longTitle)}
        </Typography>

        <SmallText>
          Seller: RetailNet
          <span>
            <img
              src={fassured}
              alt="fassured"
              style={{ width: 50, marginLeft: 10 }}
            />
          </span>
        </SmallText>

        {/* PRICE ROW */}
        <Typography style={{ margin: '20px 0' }}>
          <Cost component="span">₹{item?.price?.cost}</Cost>
          &nbsp;&nbsp;

          <MRP component="span">
            <strike>₹{item?.price?.mrp}</strike>
          </MRP>
          &nbsp;&nbsp;

          <Discount component="span">
            {item?.price?.discount} off
          </Discount>
        </Typography>

        {/* REMOVE */}
        <Remove onClick={() => removeItemFromCart(item.id)}>
          Remove
        </Remove>
      </DetailBox>

    </Component>
  );
}

export default CartItem;

