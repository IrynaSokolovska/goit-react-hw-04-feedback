import React  from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOption';
import { Container } from "@mui/material";
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { useState } from 'react';

export  function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = option => {
    if (option === 'good')
      return setGood(prevState => prevState + 1);
    if (option === 'neutral')
      return setNeutral(prevState => prevState + 1);
    if (option === 'bad')
      return setBad(prevState => prevState + 1);    
  };

  const countTotalFeedback = good + bad + neutral;

  
    
 const  countPositiveFeedbackPercentage = () => {
   if (countTotalFeedback === 0) {
     return 0;
    }
    
    return Math.round((good / countTotalFeedback) * 100) || 0;
   };

  return (
      <Container>        
        <Section title="Please leave feedback">
          <FeedbackOptions handleClick={handleClick} options={Object.keys} />
        </Section>
        <Section title="Statistics">
          <Statistics good={good}
          bad={bad}
          neutral={neutral}
          total={countTotalFeedback}
          percentage={countPositiveFeedbackPercentage()} />
        </Section>        
      </Container>
    )
};

  

    
  


   

    
  

