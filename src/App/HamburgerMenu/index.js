import { Wrapper, NavItem } from "./styled";

const HamburgerMenu = ({ isMenuButtonClicked }) => {
  return (
    <Wrapper isclicked={isMenuButtonClicked}>
      <NavItem href="#landingpageSection">Home</NavItem>
      <NavItem href="#calculatorSection">Calculator</NavItem>
    </Wrapper>
  );
};

export default HamburgerMenu;
