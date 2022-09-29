import {
  BigText,
  Container,
  FirstPage,
  FirstText,
  Logo,
  LogoWrap,
  SmallText,
} from "./Home.styles";
import tetelogo from "../assets/tetelogo.svg";

const Home = () => {
  return (
    <>
      <Container>
        <LogoWrap>
          <Logo src={tetelogo} alt="" />
        </LogoWrap>
        <FirstPage>
          <FirstText>
            <BigText>Get More Done with whitepace</BigText>
            <SmallText>
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </SmallText>
          </FirstText>
          
        </FirstPage>
      </Container>
    </>
  );
};
export default Home;
