import styled from "styled-components";
import BackImage from "./images/background.png";
import LogoImg from "./images/logo.png";
import User from "./images/user.png";
import SearchImg from "./images/search.png";
import Facebook from "./images/fb.png";
import Pinterest from "./images/pt.png";
import Instagram from "./images/ig.png";
import Twitter from "./images/tw.png";
import { mobile } from "./responsive/mobile.js";

import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BackImage});
  background-position: center;
  background-size: cover;
  position: relative;
  padding-top: 30px;
  box-sizing: border-box;
  ${mobile({ backgroundImage: "none", backgroundColor: "#6970E6" })}
`;

const NavigationContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background: rgba(29, 33, 61, 0.5);
  padding: 0 60px;
  box-sizing: border-box;
  justify-content: space-around;
  ${mobile({ padding: "0px 10px" })}
`;

const Navbar = styled.nav`
  flex: 1;
`;

const Menu = styled.ul`
  ${mobile({ display: "none" })}
`;

const MenuItems = styled.li`
  list-style: none;
  display: inline-block;
  margin-right: 60px;
  color: #fff;
  font-size: 14px;
  :hover {
    border-bottom: 1px solid white;
  }
  cursor: pointer;
`;

const LogoContainer = styled.div`
  width: 155px;
`;

const Logo = styled.img`
  width: 60px;
  position: relative;
  z-index: 10;
  cursor: pointer;
  ${mobile({ width: "50px" })}
`;
const Username = styled.p`
  color: #fff;
  font-size: 14px;
`;
const Avatar = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarImage = styled.img`
  width: 30px;
  margin-left: 15px;
  cursor: pointer;
`;

const Sidebar = styled.div`
  width: 15vw;
  height: 100vh;
  background: rgba(29, 31, 58, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  ${mobile({
    bottom: "50%",
    right: "0",
    top: "90%",
    height: "10vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
  })}
`;

const SearchImage = styled.img`
  width: 20px;
  display: block;
  margin: 120px auto 0;
  ${mobile({ margin: "0px auto 0", height: "20px" })}
`;

const SocialLinkContainer = styled.div`
  width: 20px;
  display: block;
  margin: 220px auto 0;
  text-align: center;
  ${mobile({ display: "flex", margin: "0px auto 0" })}
`;

const SocialImg = styled.img`
  height: 15px;
  margin-bottom: 30px;
  ${mobile({ display: "flex", marginBottom: "0px", marginLeft: "10px" })}
`;

const MessageContainer = styled.div`
  height: 40vh;
  width: 40vw;
  position: absolute;
  left: 16%;
  top: 57%;
  transform: translateY(-50%);
  overflow: hidden;
  ${mobile({ width: "70vw", height: "70vh", transform: "translateY(-30%)" })}
`;

const Slider = styled.div`
  display: inline-flex;
  transition: 0.5s;
  transform: translateX(-${(props) => props.sliderPosition}%);
`;

const MessageColumn = styled.div`
  height: 40vh;
  width: 40vw;
  ${mobile({ width: "70vw", height: "70vh" })}
`;

const MessageHeader = styled.h1`
  color: #fff;
  fot-size: 80px;
  font-weight: 100;
  margin: 10px 0;
`;

const Message = styled.p`
  color: #fff;
  font-size: 15px;
  line-height: 25px;
  ${mobile({ fontSize: "12px", lineHeight: "20px" })}
`;

const MessageLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #555;
  background: #fff;
  font-size: 15px;
  padding: 10px 35px;
  border-radius: 30px;
  margin-top: 25px;
  cursor: pointer;
  ${mobile({ marginTop: "0px" })}
`;

const Controller = styled.div`
  width: 1px;
  height: 240px;
  display: block;
  background: #c0c0c0;
  position: absolute;
  top: 55%;
  right: 50px;
  transform: translateY(-50%);
`;

const Line = styled.div`
  height: 80px;
  width: 10px;
  cursor: pointer;
  transform: translate(-50%);
`;

const ActiveLine = styled.div`
  width: 5px;
  height: 80px;
  border-radius: 10px;
  background: #fff;
  position: absolute;
  top: ${(props) => props.activeTop}px;
  transfrom: translateX(-50%);
  transition: 0.5s;
`;

function App() {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [activeTop, setActiveTop] = useState(0);

  const handleLineClick = (width, top) => {
    setSliderPosition(width);
    setActiveTop(top);
  };

  return (
    <Container>
      <NavigationContainer>
        <LogoContainer>
          <Logo src={LogoImg} />
        </LogoContainer>
        <Navbar>
          <Menu>
            <MenuItems>About</MenuItems>
            <MenuItems>library</MenuItems>
            <MenuItems>Blog</MenuItems>
            <MenuItems>Contact</MenuItems>
          </Menu>
        </Navbar>
        <Avatar>
          <Username>Murat Arslan</Username>
          <AvatarImage src={User} />
        </Avatar>
      </NavigationContainer>
      <Sidebar>
        <SearchImage src={SearchImg} />
        <SocialLinkContainer>
          <SocialImg src={Facebook} />
          <SocialImg src={Twitter} />
          <SocialImg src={Instagram} />
          <SocialImg src={Pinterest} />
        </SocialLinkContainer>
      </Sidebar>

      <MessageContainer>
        <Slider sliderPosition={sliderPosition}>
          <MessageColumn>
            <MessageHeader>The reasoning</MessageHeader>
            <Message>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Message>
            <MessageLink>Learn more...</MessageLink>
          </MessageColumn>
          <MessageColumn>
            <MessageHeader>The reasoning</MessageHeader>
            <Message>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Message>
            <MessageLink>Learn more...</MessageLink>
          </MessageColumn>
          <MessageColumn>
            <MessageHeader>The integration</MessageHeader>
            <Message>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Message>
            <MessageLink>Learn more...</MessageLink>
          </MessageColumn>
          <MessageColumn>
            <MessageHeader>The Knowledge</MessageHeader>
            <Message>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Message>
            <MessageLink>Learn more...</MessageLink>
          </MessageColumn>
        </Slider>
      </MessageContainer>
      <Controller>
        <Line onClick={() => handleLineClick(25, 0)}></Line>
        <Line onClick={() => handleLineClick(50, 80)}></Line>
        <Line onClick={() => handleLineClick(75, 160)}></Line>
        <ActiveLine activeTop={activeTop}></ActiveLine>
      </Controller>
    </Container>
  );
}

export default App;
