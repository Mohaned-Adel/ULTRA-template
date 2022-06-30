import { useEffect, useState } from "react";
import {
  PortfolioSection,
  PortfolioTitle,
  PortfolioList,
  PortfolioItems,
  TitleSpan,
  BoxDiv,
  BoxImg,
  BoxSpan,
  OverLay,
} from "./PortfolioStyle";

const Portfolio = () => {
  const [Boxes, setBoxes] = useState([]);

  useEffect(() => {
    requestPortfolio();
  }, []);

  async function requestPortfolio() {
    const result = await fetch("js/data.json");
    const res = await result.json();

    // const resBoxes = res.portfolio;
    setBoxes(res.portfolio);
  }

  const Box = Boxes.map((boxItem, index) => {
    return (
      <BoxDiv key={index}>
        <BoxImg src={boxItem.image} alt="" />
        <OverLay>
          <BoxSpan>Show Image</BoxSpan>
        </OverLay>
      </BoxDiv>
    );
  });
  return (
    <PortfolioSection>
      <PortfolioTitle>
        <TitleSpan>My</TitleSpan> Portfolio
      </PortfolioTitle>
      <PortfolioList>
        <PortfolioItems active={true}>All</PortfolioItems>
        <PortfolioItems>HTML</PortfolioItems>
        <PortfolioItems>Photoshop</PortfolioItems>
        <PortfolioItems>Wordpress</PortfolioItems>
        <PortfolioItems>Mobile</PortfolioItems>
      </PortfolioList>

      <div className="box">{Box}</div>
    </PortfolioSection>
  );
};

export default Portfolio;
