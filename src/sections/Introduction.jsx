import { CardGradient } from "../components/CardGradient";

export default function Introduction({id}) {
  const description = `I'm Richard Roberson, a first-year graduate student pursuing a Master's in Computer Science at the University of Colorado, Boulder, 
  where I also completed my undergraduate degree in Computer Science. 
  My journey into technology began in middle school with iOS app development, sparking a lasting interest in coding and problem-solving. 
  I bring professional experience from Ricoh, where I developed enterprise software solutions using modern technologies like Docker, Kubernetes, and cloud platforms. 
  Currently, I focus on AI and machine learning, specializing in LangChain, LangGraph, and AI-driven applications, 
  alongside research including a paper on text-to-SQL conversions. 
  I'm a driven learner, excited to take on new challenges, expand my skills, and contribute meaningfully to the field of technology.`; 

  return (
    <div id={id}>
      <CardGradient title={'Hello, allow me to introduce myself...'} description={description} />
    </div>
  );
}