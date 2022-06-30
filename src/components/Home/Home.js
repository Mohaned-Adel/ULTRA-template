import {
  HomeSection,
  HomeInformation,
  HomeTitle,
  HomeInfo,
  HomeDesc,
  HomeBtn,
  HomeSpan,
} from "./HomeStyle";

const Home = () => {
  return (
    <HomeSection>
      <div className="container">
        <HomeInformation>
          <HomeTitle>Mohaned Adel</HomeTitle>
          <HomeInfo>Software Developer</HomeInfo>
          <HomeDesc>
            Iam a professional <HomeSpan>UX Designer</HomeSpan> and Front-End Developer
            creating modern and resposive designs to Web and Mobile. Let us work
            together. Thank you.
          </HomeDesc>
          <HomeBtn className="home-btn">Let's Begin</HomeBtn>
        </HomeInformation>
      </div>
    </HomeSection>
  );
};

export default Home;
