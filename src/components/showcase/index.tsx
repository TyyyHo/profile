import Title from "../title/bouncy/title";

interface ShowcaseProps {
  isMobile: boolean;
}

export default function Showcase({ isMobile }: ShowcaseProps) {
  return (
    <div id="showcase" className="section" data-mobile={isMobile}>
      <Title title={"Showcase"} />

      <section id="showcaseContainer"></section>
    </div>
  );
}
