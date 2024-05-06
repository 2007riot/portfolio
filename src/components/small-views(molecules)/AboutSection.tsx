import { FC } from "react";
import Heading3 from "../Heading3";
import { AboutMeContent } from "../../data/aboutme";

interface AboutSectionProp {aboutContent: AboutMeContent}



export const AboutSection: FC<AboutSectionProp> = ({aboutContent}) => {
  return (
    <>
      <Heading3 title={aboutContent.title} />
      <p>{aboutContent.description}</p>
    </>
  )
}
