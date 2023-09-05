import { useState } from 'react';
import React from 'react';
import './App.css';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';

function App() {
  //Feedback is the prop passed from app.js that refers to the array of objects in FeedbackData.js.
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  return (
    <>
      <Header />
      <div className="App">
        <FeedbackStats feedback={feedback} />
        {/* feedback is from the state that is referred to on line 10 */}
        <FeedbackList feedback={feedback}
          handleDelete={deleteFeedback} />
      </div>

    </>


  );
}

export default App;
