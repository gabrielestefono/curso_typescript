import { MockedDataSocialItem } from "@/pages";
import Button from "./Button";

interface GridButtonsProps {
  github: MockedDataSocialItem;
  frontendMentor: MockedDataSocialItem;
  linkedin: MockedDataSocialItem;
  twitter: MockedDataSocialItem;
  instagram: MockedDataSocialItem;
}

export default function GridButtons({
  github,
  frontendMentor,
  linkedin,
  twitter,
  instagram,
}: Readonly<GridButtonsProps>) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
      }}
    >
      <Button text={github.redeSocial} link={github.link} />
      <Button text={frontendMentor.redeSocial} link={frontendMentor.link} />
      <Button text={linkedin.redeSocial} link={linkedin.link} />
      <Button text={twitter.redeSocial} link={twitter.link} />
      <Button text={instagram.redeSocial} link={instagram.link} />
    </div>
  );
}
