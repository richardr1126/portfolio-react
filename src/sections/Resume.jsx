import { MediaQuery, Title, rem } from "@mantine/core";

function Resume({ id }) {
  return (
    <section id={id}>
      <Title order={2} mb={rem(15)}>Resume (currently outdated)</Title>

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
