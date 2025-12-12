import { Container } from "../Container/Container.jsx";
import avatar from "../../images/avatar.webp";
import Logo from "../../images/logo.svg";
import BurgerSVG from "../../images/burger.svg";
import {
  HeaderS,
  HeaderCont,
  LogoA,
  LogoS,
  Nav,
  List,
  Item,
  Link,
  Right,
  Buttons,
  Button,
  Btn1,
  Btn2,
  Avatar,
  ButtonB,
  Burger,
} from "./Header.js";

export const Header = () => {
  return (
    <HeaderS>
      <Container>
        <HeaderCont>
          <LogoA>
            <LogoS>
              <use href={Logo}></use>
            </LogoS>
          </LogoA>
          <Nav>
            <List>
              <Item>
                <Link href="">Favorites</Link>
              </Item>
              <Item>
                <Link href="">About us</Link>
              </Item>
              <Item>
                <Link href="">Contacts</Link>
              </Item>
            </List>
          </Nav>
          <Right>
            <Buttons>
              <Button>
                <Btn1>Sign Up</Btn1>
              </Button>
              <Button>
                <Btn2>Log In</Btn2>
              </Button>
            </Buttons>
            <Avatar src={avatar} alt="Your avatar" />
            <ButtonB>
              <Burger>
                <use href={BurgerSVG}></use>
              </Burger>
            </ButtonB>
          </Right>
        </HeaderCont>
      </Container>
    </HeaderS>
  );
};
