import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from '../responsive'

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column"})}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1`
`
const Desc = styled.p`
  margin: 20px 0px;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none"})}
`
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8"})}
`

const Title = styled.h3`
  margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Payment = styled.img`
  width: 100%auto;  
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA</Logo>
        <Desc>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, iure. Non fuga, laborum vitae esse molestiae officiis ea pariatur quam asperiores voluptatum dicta numquam amet nihil architecto distinctio atque saepe!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon/>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon/>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon/>
          </SocialIcon>
          <SocialIcon color="E60032">
            <PinterestIcon/>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men's Fashion</ListItem>
          <ListItem>Women's Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><MapIcon style={{marginRight: '10px'}}/>183 Penny Lane, South Washington 9 8948</ContactItem>
        <ContactItem><PhoneIcon style={{marginRight: '10px'}}/>+1 509-930-5582</ContactItem>
        <ContactItem><EmailIcon style={{marginRight: '10px'}}/>contact@giraffe.io</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer
