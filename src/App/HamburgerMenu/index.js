import { Wrapper, Paragraph, Date, Button, ButtonImage } from "./styled";
import SrcSoonImage from "../../Utils/sun-logo.png";
import SrcMoonImage from "../../Utils/moon-logo.png";
import useCurrentDate from "../useCurrentDate";

const HamburgerMenu = ({ isDarkModeOn, setDarkMode, isButtonClicked }) => {
  const date = useCurrentDate();

  const onButtonClick = () => {
    setDarkMode((mode) => (mode = !mode));
  };

  return (
    <Wrapper isbuttonclicked={isButtonClicked}>
      <Paragraph>
        Zmień Motyw:{" "}
        <Button onClick={onButtonClick}>
          <ButtonImage isclicked={isDarkModeOn} src={SrcSoonImage} />
          <ButtonImage isclicked={isDarkModeOn} src={SrcMoonImage} />
        </Button>
      </Paragraph>
      <Date>Aktualna&nbsp;Data: {date}</Date>
    </Wrapper>
  );
};

export default HamburgerMenu;
