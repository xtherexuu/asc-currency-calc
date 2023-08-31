import {
  Wrapper,
  LoaderElement,
  Loader,
  LoaderIcon,
  Information,
  LoaderPiece,
  LoaderErrorPiece,
} from "./styled";
import planet from "../../Utils/spaceicons/planet1.png";
import satelite from "../../Utils/spaceicons/satelite.png";
import loadingIcon from "../../Utils/loading-icon.png";
import errorIcon from "../../Utils/error-icon.png";

const LoadingSection = ({ isLoaded, isError }) => {
  return (
    <Wrapper isLoaded={isLoaded}>
      <LoaderElement>
        <LoaderIcon satelite src={satelite} />
        <Loader>
          {isError ? null : (
            <>
              <LoaderPiece firstPiece src={loadingIcon} />
              <LoaderPiece secoundPiece src={loadingIcon} />
              <LoaderPiece thirdPiece src={loadingIcon} />
            </>
          )}
          {isError ? <LoaderErrorPiece src={errorIcon} /> : null}
        </Loader>
        <LoaderIcon src={planet} />
      </LoaderElement>
      {isError ? null : (
        <Information>
          Trwa ładowanie informacji o stawkach walutowych z naszej satelity...
        </Information>
      )}
      {isError ? (
        <Information errorMessage>
          Ups... Coś poszło nie tak przy próbie pobrania walut z satelity.
          Odświerz stronę, lub spróbuj ponownie później.
        </Information>
      ) : null}
    </Wrapper>
  );
};

export default LoadingSection;
