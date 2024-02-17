import React from "react";
import Logo from "./Logo";
import { Button } from "../ui/button";
import { Container, FlexBox } from "../util/index.util";
import { useNavigate } from "react-router-dom";

const Nav = ({ openEditor = false }) => {
  const navigation = useNavigate();
  return (
    <nav className="py-3 border-b bg-white dark:bg-black">
      <Container>
        <FlexBox>
          <Logo />
          {!openEditor && (
            <FlexBox>
              <Button onClick={() => navigation("/user/signup")}>
                Sing up
              </Button>
              <Button
                onClick={() => navigation("/user/login")}
                variant="outline"
              >
                Login
              </Button>
            </FlexBox>
          )}
        </FlexBox>
      </Container>
    </nav>
  );
};

export default Nav;
