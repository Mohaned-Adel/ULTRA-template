import { useEffect, useState } from "react";
import {
  SocialSection,
  SocialDiv,
  Icon,
  SocialParagraph,
  SocialParSpan,
} from "./SocialStyle";

const SocialMedia = () => {
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    requestData();
    // eslint-disable-next-line
  }, []);

  async function requestData() {
    const result = await fetch("js/data.json");
    const res = await result.json();

    setSocials(res.social);
    console.log(socials);
  }

  const SocialData = socials.map((social) => {
    return (
      <SocialDiv key={social.id} id={social.id}>
        <Icon className={social.icon}></Icon>
        <SocialParagraph>
          <SocialParSpan>{social.title}</SocialParSpan>
          <SocialParSpan info2={true}>{social.body}</SocialParSpan>
        </SocialParagraph>
      </SocialDiv>
    );
  });
  return <SocialSection>{SocialData}</SocialSection>;
};

export default SocialMedia;
