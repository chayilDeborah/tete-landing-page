import styled from "styled-components";

export const Container = styled.div`
  // background: #fffff;
`;
export const LogoWrap = styled.div`
  background: #043873;
  padding: 25px 0 15px 70.5px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    width: 100%;
  }
`;
export const LaunchButton = styled.button`
  width: 165px;
  height: 58px;
  background: #4f9cf9;
  border-radius: 8px;
  border: 1px solid #4f9cf9;
  cursor: pointer;
  margin-right: 9%;
`;
export const LaunchText = styled.div`
  color: #ffffff;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  &:hover {
    color: #043873;
  }
`;
export const Logo = styled.img`
  width: 90px;
  height: 70px;
`;
export const FirstPage = styled.div`
  // margin-top: 29px;
  // border: 1px solid #043873;
  height: 730px;
  display: flex;
  justify-content: center;
  // align-items: center;
`;
export const FirstText = styled.div`
  margin-top: 10%;
  color: #4f9cf9;
`;
export const BigText = styled.div`
  font-size: 68px;
  font-weight: 700;
  // line-height: 77.45px;
  width: 656px;
  // height: 154px;
`;
export const Options = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-top: 15px;
`;

export const SmallText = styled.div`
  margin-top: 24px;
  font-size: 24px;
  font-weight: 400;
  line-height: 35px;
  width: 656px;
  height: 60px;
`;
export const FirstImageDiv = styled.img`
  height: 547px;
  width: 724px;
  margin-top: 6%;
  border-radius: 20px;
`;
export const SecondPage = styled.div`
  height: 547px;
  display: flex;
  justify-content: center;
`;
export const SecondText = styled.div`
  color: #212529;
`;
export const SecondBigText = styled.div`
  // margin-top: 70px;
  font-size: 72px;
  font-weight: 700;
  // line-height: 87.14px;
  width: 672px;
  margin-top: 12%;
  // height: 174px;
`;
export const SecondSmallText = styled.div`
  width: 672px;
  height: 90px;
  font-size: 27px;
  font-weight: 400;
  line-height: 40px;
  margin-top: 24px;
`;
export const SecondImageDiv = styled.img`
  width: 748px;
  height: 547px;
  border-radius: 15px;
`;
export const ThirdPage = styled.div`
  // margin: 100px 0 0 175px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  // align-items: center;
`;
export const ThirdImageDiv = styled.img`
  width: 661px;
  height: 561px;
  border-radius: 15px;
`;
export const ThirdText = styled.div`
  color: #212529;
  margin-left: 114px;
`;
export const ThirdBigText = styled.div`
  font-size: 72px;
  font-weight: 700;
  line-height: 87.14px;
  width: 670px;
  height: 87px;
  margin-top: 15%;
`;
export const ThirdSmallText = styled.div`
  font-size: 27px;
  font-weight: 400;
  line-height: 40px;
  width: 670px;
  height: 60px;
  margin-top: 24px;
`;
export const ForthPage = styled.div`
  margin-top: 140px;
  height: 479px;
  display: flex;
  justify-content: center;
  // align-items: center;
`;
export const ForthText = styled.div`
  color: #212529;
  margin-right: 5%;
`;
export const ForthImageDiv = styled.img`
  width: 661px;
  height: 561px;
  border-radius: 15px;
`;
export const FifthDiv = styled.div`
  margin-top: 140px;
  background: #043873;
  height: 574px;
  position: relative;
  display: flex;
`;
export const GroupSvg = styled.img`
  position: absolute;
  color: #a7cefc;
  top: -175px;
  opacity: 0.3;
`;
export const FifthText = styled.div`
  margin-left: 428.5px;
  // display: flex;
  // justify-content: center;
  align-items: center;
  text-align: center;
`;
export const FifthBigText = styled.div`
  font-weight: 700;
  font-size: 72px;
  line-height: 87px;
  color: #ffffff;
  margin-top: 140px;
  margin-bottom: 24px;
`;
export const FifthSmallText = styled.div`
  width: 1064px;
  height: 60px;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #ffffff;
`;
export const SixthDiv = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  height: 591px;
`;
export const SixthText = styled.div`
  // margin-left: 222px;
  height: 381.13px;
`;
export const SixthBigText = styled.div`
  margin: 160px 0 24px 0;
  font-weight: 700;
  font-size: 72px;
  line-height: 87px;
  width: 672px;
  color: #4f9cf9
`;
export const SixthSmallText = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  width: 800px;
  height: 90px;
  margin-bottom: 221px;
`;
export const SixthImage = styled.img`
  width: 561px;
  height: 461px;
  border-radius: 15px;
  margin-top: 5%;
`;
export const LastDiv = styled.div`
  background: #043873;
  height: 40%;
`;
export const SeventhDiv = styled.div`
  display: flex;
  margin-bottom: 90px;
  justify-content: center;
  align-items: center;
`;
export const SeventhImage = styled.img`
  width: 582px;
  height: 470.8px;
  margin: 140px 100px 0 220px;
  border-radius: 15px;
`;
export const SeventhText = styled.div`
  width: 798px;
`;
export const SeventhBigText = styled.div`
  font-weight: 700;
  font-size: 62px;
  // line-height: 87px;
  margin: 141.4px 0 24px 0;
  color: #ffffff;
  height: 161px;
`;
export const SeventhSmallText = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #ffffff;
  height: 60px;
`;
export const LineBreak = styled.hr`
  opacity: 0.3;
`;
export const IconsDiv = styled.div`
  text-align: center;
  padding-top: 24.5px;
`;
export const IconsText = styled.div`
  color: #ffffff;
  font-weight: 500;
  font-size: 56px;
`;
export const Icons = styled.div`
  margin-top: 15px;
`;
export const Twitter = styled.a`
  color: rgb(29, 155, 240);
  font-size: 60px;
  margin-right: 30px;
  &:hover {
    color: #043873;
  }
`;
export const Discord = styled.a`
  color: #8ab4f8;
  margin-left: 30px;
  font-size: 55px;
  &:hover {
    color: #043873;
  }
`;
export const Pages = styled.div``;
export const Form = styled.form`
display: flex;
  justify-content: center;
  // align-items: center;
 

`;
export const Input = styled.input`
width: 100%;
max-width: 250px;
padding: 15px 20px;
border-radius: 25px;
border: 3px #4f9cf9 solid;
`;
export const Button = styled.button`
border-radius: 5px;
padding: 5px 10px
border: 3px #4f9cf9 solid;
`;