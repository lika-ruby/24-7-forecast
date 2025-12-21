import { Container } from "../Container/Container.jsx";
import avatar from "../../images/avatar.webp";
import Logo from "../../images/logo.svg";
import Burger from "../../images/burger.svg";
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
  BurgerS,
} from "./Header.js";
import { UsersContext } from "../../contexts/UsersContext.jsx";
import { useContext } from "react";

export const Header = () => {
  const { openModalS, openModalL, isLogin, logOutUser, name } =
    useContext(UsersContext);

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
            {isLogin === false ? (
              <Right>
                <Buttons>
                  <Button>
                    <Btn1 onClick={openModalS}>Sign Up</Btn1>
                  </Button>
                  <Button>
                    <Btn2 onClick={openModalL}>Log In</Btn2>
                  </Button>
                </Buttons>
                <Avatar src={avatar} alt="Your avatar" />
                <ButtonB>
                  <BurgerS>
                    <use href={Burger}></use>
                  </BurgerS>
                </ButtonB>
              </Right>
            ) : (
              <Right>
                <Buttons>
                  <Button>
                    <Btn1 onClick={logOutUser}>Log out</Btn1>
                  </Button>
                </Buttons>
                <Link>Hi, {name}</Link>
                <Avatar src={avatar} alt="Your avatar" />
                <ButtonB>
                  <BurgerS>
                    <use href={Burger}></use>
                  </BurgerS>
                </ButtonB>
              </Right>
            )}
          </Right>
        </HeaderCont>
      </Container>
    </HeaderS>
  );
};
