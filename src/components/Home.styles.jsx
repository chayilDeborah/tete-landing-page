import styled from "styled-components";

export const Container = styled.div`
  // background: #fffff;
`;
export const Pages = styled.div`
  @media screen and (min-width: 320px) and (max-width: 576px) {
    // display: none;
  }
`;
export const LogoWrap = styled.div`
  background: #043873;
  padding: 25px 0 15px 70.5px;
  // padding: 5% 0 3% 13%;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    width: 100%;
    padding: 25px 0 10px 0;
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

  @media screen and (min-width: 320px) and (max-width: 576px) {
    width: 155px;
    height: 48px;
  }
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

  @media screen and (min-width: 320px) and (max-width: 576px) {
    padding-left: 10px;
    width: 80px;
    height: 55px;
  }
`;
export const FirstPage = styled.div`
  border: 1px solid #043873;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 576px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    border: 0px solid #043873;
  }
`;
export const FirstText = styled.div`
  margin-top: 10%;
  color: #4f9cf9;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    text-align: center;
    // align-items: center;
  }
`;
export const BigText = styled.div`
  font-size: 68px;
  font-weight: 700;
  // line-height: 77.45px;
  width: 656px;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    font-weight: 700;
    font-size: 36px;
    width: 100%;
    line-height: 44px;
    text-align: center;
  }
`;
export const Options = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-top: 15px;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    // display: none;
    width: 93%;
    margin-left: 2%;
  }
`;

export const SmallText = styled.div`
  margin-top: 24px;
  font-size: 24px;
  font-weight: 400;
  line-height: 35px;
  width: 656px;
  height: 60px;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    // display: none;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    width: 84%;
    margin-left: 8%;
    height: 2%;
    text-align: center;
    align-items: center;
  }
`;
export const FirstImageDiv = styled.img`
  height: 547px;
  width: 724px;
  margin-top: 6%;
  border-radius: 20px;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    width: 100%;
    max-width: 350px;
    height: 47%;
    align-items: center;
    // margin-left: 4%;
    border-radius: 8px;
  }
`;
export const SecondPage = styled.div`
  height: 547px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    // display: none;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
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
  @media screen and (min-width: 320px) and (max-width: 576px) {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    width: 100%;
    text-align: center;
    margin-top: 33%;
  }
`;
export const SecondSmallText = styled.div`
  width: 672px;
  height: 90px;
  font-size: 27px;
  font-weight: 400;
  line-height: 40px;
  margin-top: 24px;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    // display: none;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    width: 93%;
    height: 1%;
    margin-left: 4%;
  }
`;
export const SecondImageDiv = styled.img`
  width: 748px;
  height: 547px;
  border-radius: 15px;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    // display: none;
    width: 100%;
    max-width: 350px;
    height: 47%;
    margin-top: 8;
  }
`;
export const ThirdPage = styled.div`
  // margin: 100px 0 0 175px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  // align-items: center;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    // display: none;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
export const ThirdImageDiv = styled.img`
  width: 661px;
  height: 561px;
  border-radius: 15px;
  @media screen and (min-width: 320px) and (max-width: 576px) {
    width: 100%;
    max-width: 350px;
    height: 300px;
    // margin-left: 4%;
    background-size: cover;
    order: 2;
  }
`;
export const ThirdText = styled.div`
  color: #212529;
  // margin-left: 114px;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    // display: none;
    order: 1;
  }
`;
export const ThirdBigText = styled.div`
  font-size: 72px;
  font-weight: 700;
  line-height: 87.14px;
  width: 670px;
  height: 87px;
  margin-top: 15%;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    width: 98%;
    height: 60px;
    text-align: center;
    margin-left: 1%;
    margin-top: 1%;
  }
`;
export const ThirdSmallText = styled.div`
  font-size: 27px;
  font-weight: 400;
  line-height: 40px;
  width: 670px;
  height: 60px;
  margin-top: 24px;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    // display: none;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    width: 93%;
    height: 1%;
    margin-left: 4%;
    margin-top: 1%;
  }
`;
export const ForthPage = styled.div`
  margin-top: 140px;
  // height: 479px;
  display: flex;
  justify-content: center;
  // align-items: center;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    // display: none;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 1%;
  }
`;
export const ForthText = styled.div`
  color: #212529;
  // margin-right: 5%;
`;
export const ForthBigText = styled.div`
  // margin-top: 70px;
  font-size: 72px;
  font-weight: 700;
  // line-height: 87.14px;
  width: 672px;
  margin-top: 12%;
  // height: 174px;
  @media screen and (min-width: 320px) and (max-width: 576px) {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    width: 100%;
    text-align: center;
    margin-top: 14%;
  }
`;
export const ForthImageDiv = styled.img`
  width: 661px;
  height: 561px;
  border-radius: 15px;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    width: 100%;
    max-width: 350px;
    max-height: 350px;
    margin-top: 5%;
  }
`;
export const FifthDiv = styled.div`
  margin-top: 140px;
  background: #043873;
  height: 574px;
  position: relative;
  // display: flex;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    // display: none;
    flex-direction: column;
    width: 100%;
    height: 510px;
    margin-top: -30px;
  }
`;
export const GroupSvg = styled.img`
  position: absolute;
  color: #a7cefc;
  top: -175px;
  opacity: 0.3;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    display: none;
  }
`;
export const FifthText = styled.div`
  margin-left: 428.5px;
  // display: flex;
  // justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    text-align: inherit;
    padding-left: 16px;
    margin-left: 0.5px;
  }
`;
export const FifthBigText = styled.div`
  font-weight: 700;
  font-size: 72px;
  line-height: 87px;
  color: #ffffff;
  margin-top: 140px;
  margin-bottom: 24px;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    width: 288px;
    height: 115px;
    padding-top: 80px;
    font-size: 36px;
    line-height: 44px;
    margin-bottom: 1px;
  }
`;
export const FifthSmallText = styled.div`
  width: 1064px;
  height: 60px;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #ffffff;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    // display: none;
    width: 288px;
    height: 240px;
  }
`;
export const SixthDiv = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  height: 591px;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    justify-content: center;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;
export const SixthText = styled.div`
  // margin-left: 222px;
  // height: 381.13px;;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    width: 100%;
  }
`;
export const SixthBigText = styled.div`
  margin: 160px 0 24px 0;
  font-weight: 700;
  font-size: 72px;
  line-height: 87px;
  width: 672px;
  color: #4f9cf9;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    width: 288px;
    font-size: 36px;
    line-height: 44px;
    margin: 3px 0 0 0;
    width: 93%;
    // text-align: left;
    margin-left: 16px;
  }
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

  @media screen and (min-width: 320px) and (max-width: 576px) {
    width: 100%;
    max-width: 350px;
    height: 58%;
    // margin-left: 4%
  }
`;
export const LastDiv = styled.div`
  background: #043873;
  // height: 40%;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    // display: none;
  }
`;
export const SeventhDiv = styled.div`
  display: flex;
  margin-bottom: 90px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    // justify-content: center;
    flex-direction: column;
    width: 100%;
    // align-items: center;
  }
`;
export const SeventhImage = styled.img`
  width: 582px;
  height: 470.8px;
  margin: 140px 100px 0 220px;
  border-radius: 15px;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    order: 2;
    display: none;
  }
`;
export const SeventhText = styled.div`
  width: 798px;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    order: 1;
    width: 100%;
  }
`;
export const SeventhBigText = styled.div`
  font-weight: 700;
  font-size: 62px;
  // line-height: 87px;
  margin: 141.4px 0 24px 0;
  color: #ffffff;
  height: 161px;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    font-size: 36px;
    line-height: 44px;
    width: 288px;
    // width: 100%;
    padding: 80px 0 0 16px;
    margin: 0 0 0 0;
  }
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

  @media screen and (min-width: 320px) and (max-width: 576px) {
    // display: none;
  }
`;
export const IconsText = styled.div`
  color: #ffffff;
  font-weight: 500;
  font-size: 56px;

  @media screen and (min-width: 320px) and (max-width: 576px) {
font-size: 36px;
line-height: 44px;
width: 288px;
width: 100%;
  }
 
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
export const Form = styled.div`
  background-color: #6699cc;
  padding: 10px;
  width: 80%;
  border-radius: 5px;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    // display: none;
    margin-left: 7%;
    // width: 100%;
    // max-width: 250px;
  }
`;
export const Input = styled.input`
  padding: 15px 20px;
  background-color: #6699cc;
  outline: none;
  border: none;
// font-size: 14px;
  @media screen and (min-width: 320px) and (max-width: 576px) {

  }
`;
export const Button = styled.button`
// // border-radius: 5px;
padding: 15px 20px;
border: 1px rgb(29,155,240) solid;
background: rgb(29,155,240);
`;
