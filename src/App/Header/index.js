import {
  HeaderContainer,
  HeaderHeading,
  HeaderImage,
  HeaderMenuContainer,
  NavElement,
  HamburgerMenuIconItem,
} from "./styled";
import HeaderImageSrc from "../../Utils/logo.png";

const Header = ({ isMenuButtonClicked, setMenuButtonStatus }) => {
  return (
    <HeaderContainer>
      <HeaderImage src={HeaderImageSrc} alt="this is a logo of the website" />
      <HeaderHeading>Galaxy Converter</HeaderHeading>
      <HeaderMenuContainer normalmenu>
        <NavElement href="#landingpageSection">Home</NavElement>
        <NavElement href="#calculatorSection">Calculator</NavElement>
      </HeaderMenuContainer>
      <HeaderMenuContainer
        as="button"
        hamburgermenu
        onClick={() => {
          setMenuButtonStatus((status) => (status = !status));
        }}
      >
        <HamburgerMenuIconItem
          topitem
          isMenuButtonClicked={isMenuButtonClicked}
        />
        <HamburgerMenuIconItem
          middleitem
          isMenuButtonClicked={isMenuButtonClicked}
        />
        <HamburgerMenuIconItem
          bottomitem
          isMenuButtonClicked={isMenuButtonClicked}
        />
      </HeaderMenuContainer>
    </HeaderContainer>
  );
};

export default Header;
