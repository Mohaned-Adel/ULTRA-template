import { useEffect, useState } from "react";
import {
  ProfileSkills,
  ProfileDiv,
  ProfileTitle,
  ProfileList,
  ProfileItem,
  ProfileTitleSpan,
  ProfileItemSpan,
  Skills,
  SkillsTitle,
  SkillsTitleSpan,
  SkillsDesc,
  SkillBar,
  SkillTitle,
  SkillPerc,
  SkillParent,
  SkillParentSpan,
} from "./ProfileStyle";

const Profile = () => {
  const [profiles, setProfile] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    requestData();
  }, []);

  async function requestData() {
    const results = await fetch("js/data.json");

    const response = await results.json();

    console.log(response);

    setProfile(response.profile);
    setSkills(response.skills);
  }

  const ProfileData = profiles.map((profile, index) => {
    return (
      <ProfileItem key={index}>
        <ProfileItemSpan>{profile.title}</ProfileItemSpan>
        {profile.title !== "Website" ? (
          profile.body
        ) : (
          <ProfileItemSpan web={true}>{profile.body}</ProfileItemSpan>
        )}
      </ProfileItem>
    );
  });

  const SkillsData = skills.map((skill, index) => {
    return (
      <SkillBar key={index}>
        <SkillTitle>{skill.title}</SkillTitle>
        <SkillPerc>{skill.perc}</SkillPerc>
        <SkillParent>
          <SkillParentSpan sp={index}></SkillParentSpan>
        </SkillParent>
      </SkillBar>
    );
  });

  return (
    <ProfileSkills>
      <div className="container">
        <ProfileDiv>
          <ProfileTitle>
            <ProfileTitleSpan>My </ProfileTitleSpan>Profile
          </ProfileTitle>
          <ProfileList>{ProfileData}</ProfileList>
        </ProfileDiv>

        <Skills>
          <SkillsTitle>
            Some <SkillsTitleSpan>skills</SkillsTitleSpan>
          </SkillsTitle>
          <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            praesentium blanditiis esse cupiditate, omnis similique.
          </SkillsDesc>
          {SkillsData}
        </Skills>
      </div>
    </ProfileSkills>
  );
};

export default Profile;
