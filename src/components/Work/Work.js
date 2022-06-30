import { useEffect, useState } from "react";
import {
  WorkSection,
  WorkTitle,
  TitleSpan,
  WorkPart,
  PartIcon,
  PartTitle,
  Line,
  PartDesc,
} from "./WorkStyle";

const Work = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    requestWorks();
  }, []);

  async function requestWorks() {
    const result = await fetch("js/data.json");
    const res = await result.json();

    const worksData = res.works;
    setWorks(worksData);
  }

  const WorksList = works.map((workItem) => {
    return (
      <WorkPart first={workItem.id === 1 ? true : false} key={workItem.id}>
        <PartIcon className={workItem.icon_name}></PartIcon>
        <PartTitle>{workItem.title}</PartTitle>
        <Line />
        <PartDesc>{workItem.body}</PartDesc>
      </WorkPart>
    );
  });
  return (
    <WorkSection>
      <div className="container">
        <WorkTitle>
          <TitleSpan>My</TitleSpan> Work
        </WorkTitle>
        {WorksList}
      </div>
    </WorkSection>
  );
};

export default Work;
