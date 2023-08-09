import { CardGradient } from "../components/CardGradient";

export default function Introduction({id}) {
  const description = `I'm Richard Roberson, currently studying Computer Science at the University of Colorado, Boulder. 
    My journey into technology began in middle school when I started exploring iOS App development. 
    The early exposure to coding and problem-solving not only guided me towards computer science, 
    but also ignited a passion that still fuels me to this day. Now, I focus on software engineering and web development, 
    and am particularly interested in the transformative potential of artificial intelligence, especially Large Language Models (LLMs). 
    I'm a dedicated worker, driven by the urge to learn, evolve, and face new challenges. 
    As I look ahead, I'm excited about diving into unexplored territories within the field, 
    continually striving to expand my skill set and make meaningful contributions to the industry.`;

  return (
    <div id={id}>
      <CardGradient title={'Hello, allow me to introduce myself...'} description={description} />
    </div>
  );
}