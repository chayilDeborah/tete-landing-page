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
  ForthImageDiv,
  ForthText,
  FifthDiv,
  GroupSvg,
  FifthText,
  FifthBigText,
  FifthSmallText,
  SixthDiv,SixthImage,
  SixthText,
  SixthBigText,
  // SixthSmallText,
  SeventhDiv,
  SeventhImage,
  SeventhText,
  SeventhBigText,
  // SeventhSmallText,
  LastDiv,
  LineBreak,
  IconsDiv,
  IconsText,
  Icons,
  Twitter,
  Discord,
  LaunchButton,
  LaunchText,
  Options,
  Pages,
  Form,
  Input,
  Button,
} from "./Home.styles";
import tetelogo from "../assets/tetelogo.svg";
import Group from "../assets/Group.svg";
import man from "../assets/man.svg";
import nft from "../assets/nft.svg";
import peer from "../assets/peer.svg";
import ball from '../assets/ball.jpg'
import betting from "../assets/betting.jpg";
import money from '../assets/money.jpg'

const Home = () => {
  return (
    <>
      <Container>
        <LogoWrap>
          <Logo src={tetelogo} alt="" />
          <LaunchButton>
            <LaunchText>Launch App</LaunchText>
          </LaunchButton>
        </LogoWrap>
        <Pages>
          <FirstPage>
            <FirstText>
              <BigText>Unlimited betting</BigText>
              <Options>Make more money with more betting options.</Options>
              <SmallText>
                Our users can bet(stake) their passion for sports, music,
                movies, and political events.
                <p>Betting just got crazier...</p>
                <div>NFT Betting</div>
                <div>Peer2Peer Betting</div>
                <div>Sports Betting</div>
                <div>Social Betting</div>
              </SmallText>
            </FirstText>
            <FirstImageDiv src={man} alt="" />
          </FirstPage>
          <SecondPage>
            <SecondText>
              <SecondBigText>NFT Betting</SecondBigText>
              <SecondSmallText>
                Imagine you could stake on your favourite NFT collection without
                buying it. Amazing right?
                <p>
                  On Tete, you can make money by correctly predicting the rise
                  and fall of your favourite NFT’s collection floor price.
                </p>
              </SecondSmallText>
            </SecondText>
            <SecondImageDiv src={nft} alt="" />
          </SecondPage>
          <ThirdPage>
            <ThirdImageDiv src={peer} alt="" />
            <ThirdText>
              <ThirdBigText>Peer2Peer Betting</ThirdBigText>
              <ThirdSmallText>
                We allow you to create a private betting pool for yourself and
                your friends.
                <p>
                  The winners take all, and the prize is shared according to the
                  money each winner stake in the pool.
                </p>
              </ThirdSmallText>
            </ThirdText>
          </ThirdPage>
          <ForthPage>
            <ForthText>
              <SecondBigText>Sport Betting</SecondBigText>
              <SecondSmallText>
                Stake on your favourite sports and win by correctly predicting
                the outcome of the matches.
                <p>
                  Predict who will score, what half, number of fouls. Your
                  options are unlimited...
                </p>
                <p>It gets crazier!!</p>
              </SecondSmallText>
            </ForthText>
            <ForthImageDiv src={betting} alt="" />
          </ForthPage>
          <FifthDiv>
            <GroupSvg src={Group} alt="" />
            <FifthText>
              <FifthBigText>With our Social Betting...</FifthBigText>
              <FifthSmallText>
                You can stake on popular music awards, movies, election results,
                technology updates, stock prices, and lots more.
                <p>
                  Our goal is to help you make money from your passion. We are
                  launching soon.!
                </p>
                <p>If you have passion for it, bet on it!</p>
              </FifthSmallText>
            </FifthText>
          </FifthDiv>
          <SixthDiv>
            <SixthText>
              <SixthBigText>If you have passion for it, bet on it!</SixthBigText>
              {/* <SixthSmallText>
                The app is open source and your notes are saved to an open
                format, so you'll always have access to them. Uses End-To-End
                Encryption (E2EE) to secure your notes and ensure no-one but
                yourself can access them.
              </SixthSmallText> */}
            </SixthText>
            <SixthImage src={money} alt=''/>
          </SixthDiv>
          <LastDiv>
            <SeventhDiv>
              <SeventhImage src={ball} alt=''/>
              <SeventhText>
                <SeventhBigText>
                Be the first to know when we launch!
                </SeventhBigText>
                {/* <SeventhSmallText>
                  Whitepace teams up with your favorite software. Integrate with
                  over 1000+ apps with Zapier to have all the tools you need for
                  your project success.
                </SeventhSmallText> */}
                <Form>
                  <Input type='email' placeholder="Input your email addresss"/>
                  <Button type="submit">Submit</Button>
                </Form>
              </SeventhText>
            </SeventhDiv>
            <LineBreak />
            <IconsDiv>
              <IconsText>Join our community</IconsText>
              <Icons>
                <Twitter href="#">
                  <ion-icon name="logo-twitter"></ion-icon>
                </Twitter>
                <Discord href="#">
                  <ion-icon name="logo-discord"></ion-icon>
                </Discord>
              </Icons>
            </IconsDiv>
          </LastDiv>
        </Pages>
      </Container>
    </>
  );
};
export default Home;
