import { MediaQuery } from "@mantine/core";

function Resume({ id }) {
  return (
    <section id={id}>
      <h2>Resume (currently outdated)</h2>

      <MediaQuery smallerThan={'sm'} styles={{ display: 'none'}}>
        <iframe
          src="https://drive.google.com/file/d/1lq_ojDOxMp-16QLF8Jdrc1eT8Kb7n2Qe/preview"
          width="100%"
          height="950px"
          allow="autoplay"
          title="Resume PDF"
          style={{ border: "none" }}
        ></iframe>
      </MediaQuery>

      <MediaQuery largerThan={'sm'} styles={{ display: 'none'}}>
        <iframe
          src="https://drive.google.com/file/d/1lq_ojDOxMp-16QLF8Jdrc1eT8Kb7n2Qe/preview"
          width="100%"
          height="500px"
          allow="autoplay"
          title="Resume PDF"
          style={{ border: "none" }}
        ></iframe>
      </MediaQuery>
    </section>
  );
}

export default Resume;
