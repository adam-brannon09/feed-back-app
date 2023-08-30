import { useState } from 'react';
import React from 'react';
import './App.css';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';

function App() {
  //Feedback is the prop passed from app.js that refers to the array of objects in FeedbackData.js.
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className="App">
        {/* feedback is from the state that is referred to on line 10 */}
        <FeedbackList feedback={feedback} />
      </div>

    </>


  );
}

export default App;
