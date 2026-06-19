import { Box, Typography, FormControlLabel, Checkbox, Divider, styled } from "@mui/material";

const Sidebar = styled(Box)`
  width: 220px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 2px 15px rgba(0,0,0,0.1);
  height: fit-content;
`;

const FilterSidebar = () => {
  return (
    <Sidebar>
      <Typography style={{ fontWeight: 800, fontSize: 18, marginBottom: 10 }}>
        Filters
      </Typography>

      <Typography style={{ fontWeight: 700, marginTop: 15 }}>Price</Typography>
      <FormControlLabel control={<Checkbox />} label="Under ₹500" />
      <FormControlLabel control={<Checkbox />} label="₹500 - ₹1000" />
      <FormControlLabel control={<Checkbox />} label="₹1000 - ₹1500" />

      <Divider style={{ margin: "15px 0" }} />

      <Typography style={{ fontWeight: 700 }}>Discount</Typography>
      <FormControlLabel control={<Checkbox />} label="30% and above" />
      <FormControlLabel control={<Checkbox />} label="40% and above" />
      <FormControlLabel control={<Checkbox />} label="50% and above" />
    </Sidebar>
  );
};

export default FilterSidebar;
