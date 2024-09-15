import { CardGradient } from "../components/CardGradient";

export default function Introduction({id}) {
  const description = `I'm Richard Roberson, a first-year graduate student pursuing a Master's in Computer Science at the University of Colorado, Boulder, 
  where I also completed my undergraduate degree in Computer Science. 
  My journey into technology began in middle school with iOS app development, sparking a lasting interest in coding and problem-solving. 
  Currently, I focus on software engineering and web development, alongside research in artificial intelligence, 
  including a paper on AI-driven text-to-SQL conversions. 
  I'm a driven learner, excited to take on new challenges, expand my skills, and contribute meaningfully to the field of technology.`; 

  return (
    <div id={id}>
      <CardGradient title={'Hello, allow me to introduce myself...'} description={description} />
    </div>
  );
}