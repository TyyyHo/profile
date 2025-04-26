import Title from "../title/bouncy/title";

export default function Showcase({ isMobile }) {
  return (
    <div id="showcase" className="section">
      <Title title={"Showcase"} />

      <section id="showcaseContainer"></section>
    </div>
  );
}
