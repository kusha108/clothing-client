import { useState, useContext } from 'react';
import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material';

import { authenticateSignup, authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
  height: auto;
  width: 90vw;
  max-width: 750px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  border: 3px solid #FFD700;
  border-radius: 10px;
  background: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90vw;
    height: auto;
  }
`;

const Image = styled(Box)`
  background: #000 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    no-repeat center 85%;
  height: auto;
  width: 28%;
  padding: 45px 35px;
  color: #FFD700;
  border-right: 3px solid #FFD700;

  & > p,
  & > h5 {
    font-weight: 700;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 30px 20px;
    text-align: center;
    border-right: none;
    border-bottom: 3px solid #FFD700;
  }
`;

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #FFFFFF;

  & > div,
  & > button,
  & > p {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const LoginButton = styled(Button)`
  background-color: #000;
  text-transform: none;
  color: #FFD700;
  height: 48px;
  font-weight: 700;
  border-radius: 6px;
  border: 2px solid #FFD700;

  &:hover {
    background-color: #222;
  }
`;

const RequestOTP = styled(Button)`
  background-color: #FFD700;
  color: #000;
  height: 48px;
  border-radius: 6px;
  border: 2px solid #000;
  font-weight: 700;
  text-transform: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #f0c200;
  }
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #555;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #000;
  cursor: pointer;
  font-weight: 700;
  text-decoration: underline;
  text-decoration-color: #FFD700;

  &:hover {
    color: #FFD700;
  }
`;

const Error = styled(Typography)`
  font-size: 12px;
  font-weight: 600;
  color: #ff0000;
`;

const accountInitialValues = {
  login: {
    view: 'login',
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: 'signup',
    heading: "Looks like you are new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const signupInitialValues = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  phone: '',
};
const loginInitialValues = {
  username: '',
  password: '',
};

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);
  const { setAccount } = useContext(DataContext);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    setError(false);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const onInputchange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    const res = await authenticateSignup(signup);
    if (!res) return;
    setAccount(signup.firstname);
    handleClose();
  }

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    console.log(response);
    if (response.status === 200) {
      handleClose();
      setAccount(response.data.data.firstname);
    } else {
      setError(true);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { borderRadius: 2, maxWidth: 'unset' } }}
    >
      <Component>
        <Image>
          <Typography variant="h5">{account.heading}</Typography>
          <Typography sx={{ mt: 2, fontSize: 14, lineHeight: '20px' }}>
            {account.subHeading}
          </Typography>
        </Image>

        {account.view === 'login' ? (
          <Wrapper>
            <TextField variant="standard" onChange={(e) => onValueChange(e)} name='username' label="Enter username" />
            {error && <Error> Invalid username or password </Error>}
            <TextField variant="standard" onChange={(e) => onValueChange(e)} name='password' label="Enter Password" type="password" />

            <Text>
              By continuing, you agree to Studs Online Shop's Terms of Use and Privacy Policy.
            </Text>

            <LoginButton onClick={() => loginUser()}>Login</LoginButton>
            <Text sx={{ textAlign: 'center' }}>OR</Text>
            <RequestOTP fullWidth>Request OTP</RequestOTP>

            <CreateAccount onClick={toggleSignup}>
              New to Studs Online Shop? Create an account
            </CreateAccount>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField variant="standard" onChange={onInputchange} name="firstname" label="Enter Firstname" value={signup.firstname} />
            <TextField variant="standard" onChange={onInputchange} name="lastname" label="Enter Lastname" value={signup.lastname} />
            <TextField variant="standard" onChange={onInputchange} name="username" label="Enter Username" value={signup.username} />
            <TextField variant="standard" onChange={onInputchange} name="email" label="Enter Email" value={signup.email} />
            <TextField variant="standard" onChange={onInputchange} name="password" label="Enter Password" type="password" value={signup.password} />
            <TextField variant="standard" onChange={onInputchange} name="phone" label="Enter Phone" value={signup.phone} />

            <LoginButton onClick={signupUser}>Continue</LoginButton>
          </Wrapper>
        )}
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
