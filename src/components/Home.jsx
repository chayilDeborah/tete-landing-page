import {
  BigText,
  Container,
  FirstImageDiv,
  FirstPage,
  FirstText,
  Logo,
  LogoWrap,
  SecondBigText,
  SecondImageDiv,
  SecondPage,
  SecondSmallText,
  SecondText,
  SmallText,
  ThirdImageDiv,
  ThirdPage,
  ThirdText,
  ThirdBigText,
  ThirdSmallText,
  ForthPage,
  FifthDiv,
  GroupSvg,
  FifthText,
  FifthBigText,
  FifthSmallText,
  SixthDiv,
  SixthText,
  SixthBigText,
  SixthSmallText,
  SeventhDiv,
  SeventhImage,
  SeventhText,
  SeventhBigText,
  SeventhSmallText,
  LastDiv,
  LineBreak,
  IconsDiv,
  IconsText,
  Icons,
  Twitter,
  Discord
} from "./Home.styles";
import tetelogo from "../assets/tetelogo.svg";
import Group from '../assets/Group.svg'

const Home = () => {
  return (
    <>
      <Container>
        <LogoWrap>
          <Logo src={tetelogo} alt="" />
        </LogoWrap>
        <FirstPage>
          <FirstText>
            <BigText>Unlimited betting
            Make more money with more betting options.

            </BigText>
            <SmallText>
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </SmallText>
          </FirstText>
          <FirstImageDiv>

          </FirstImageDiv>
        </FirstPage>
        <SecondPage>
            <SecondText>
                <SecondBigText>Project Management</SecondBigText>
                <SecondSmallText>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</SecondSmallText>
            </SecondText>
            <SecondImageDiv>

            </SecondImageDiv>
        </SecondPage>
        <ThirdPage>
            <ThirdImageDiv>

            </ThirdImageDiv>
            <ThirdText>
                <ThirdBigText>Work together</ThirdBigText>
                <ThirdSmallText>With whitepace, share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with others.
</ThirdSmallText>
            </ThirdText>
        </ThirdPage>
        <ForthPage>
        <SecondText>
                <SecondBigText>Customise it to your needs</SecondBigText>
                <SecondSmallText>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</SecondSmallText>
            </SecondText>
            <SecondImageDiv>
                
            </SecondImageDiv>
        </ForthPage>
        <FifthDiv>
            <GroupSvg src={Group} alt='' />
            <FifthText>
                <FifthBigText>Your work, everywhere you are</FifthBigText>
                <FifthSmallText>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</FifthSmallText>
            </FifthText>
        </FifthDiv>
        <SixthDiv>
            <SixthText>
                <SixthBigText>100% your data</SixthBigText>
                <SixthSmallText>The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.</SixthSmallText>
            </SixthText>
        </SixthDiv>
        <LastDiv>
        <SeventhDiv>
          <SeventhImage></SeventhImage>
          <SeventhText>
            <SeventhBigText>Work with Your Favorite Apps Using whitepace</SeventhBigText>
            <SeventhSmallText>Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.</SeventhSmallText>
          </SeventhText>
        </SeventhDiv>
        <LineBreak />
        <IconsDiv>
          <IconsText>Join our community</IconsText>
          <Icons>
            <Twitter href="#"><ion-icon name="logo-twitter"></ion-icon></Twitter>
            <Discord href="#"><ion-icon name="logo-discord"></ion-icon></Discord>
          </Icons>
        </IconsDiv>
        </LastDiv>
        

      </Container>
    </>
  );
};
export default Home;
