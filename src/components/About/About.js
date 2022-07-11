import {
  CreativeSection,
  CreativeInfo,
  InfoTitle,
  InfoDir,
  InfoDesc,
  InfoTitleSpan,
  InfoAnchor,
} from "./AboutStyle";

const About = () => {
  return (
    <CreativeSection id="about">
      <div className="container">
        <CreativeInfo>
          <InfoTitle>
            <InfoTitleSpan>This is</InfoTitleSpan> Me
          </InfoTitle>
          <InfoDir>Creative Director</InfoDir>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est{" "}
            <InfoAnchor href="#">explicabo</InfoAnchor> maxime quibusdam quaerat
            nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi
            cupiditate ad veritatis?
          </InfoDesc>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
            repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </InfoDesc>
        </CreativeInfo>
      </div>
    </CreativeSection>
  );
};

export default About;
