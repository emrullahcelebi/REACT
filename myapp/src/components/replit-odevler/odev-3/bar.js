import ProgressBar from 'react-bootstrap/ProgressBar';

function AnimatedExample({now}) {

    
  return( 
  <ProgressBar animated now={now}  label={`${now}%`}/>
  
  );
}

export default AnimatedExample;