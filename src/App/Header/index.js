import {
  HeaderContainer,
  HeaderHeading,
  HeaderImage,
  HeaderMenuContainer,
  NavElement,
  HamburgerMenuIconItem,
} from "./styled";
import HeaderImageSrc from "../../Utils/logo.png";

const Header = ({
  isDarkModeOn,
  setDarkMode,
  isButtonClicked,
  setButtonStatus,
}) => {
  const onButtonClick = () => {
    setDarkMode((mode) => (mode = !mode));
  };

  const date = useCurrentDate();

  const getFormatedDate = () => {
    const dateString = date.toLocaleDateString("pl-PL", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    const timeString = date.toLocaleTimeString("pl-PL");

    return dateString + " " + timeString;
  };

const Header = ({ isMenuButtonClicked, setMenuButtonStatus }) => {
  return (
    <Wrapper>
      <Container>
        <TitleImage src={SrcTitleImage} />
        <Title>
          Currency <Span>Calculator</Span>
        </Title>
      </Container>
      <Container data>
        <Date>{getFormatedDate()}</Date>
        <Button onClick={onButtonClick}>
          <ButtonImage isclicked={isDarkModeOn} src={SrcSoonImage} />
          <ButtonImage isclicked={isDarkModeOn} src={SrcMoonImage} />
        </Button>
      </Container>
      <Button
    <HeaderContainer>
      <HeaderImage src={HeaderImageSrc} alt="this is a logo of the website" />
      <HeaderHeading>Galaxy Converter</HeaderHeading>
      <HeaderMenuContainer normalmenu>
        <NavElement>Home</NavElement>
        <NavElement>Calculator</NavElement>
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
