
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header';

import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutIconLink from './components/AboutIconLink';

function App() {

  return (

    <FeedbackProvider>
      {/* The Router component is the parent component that wraps all the other components that will be using the react-router-dom library. The Router component is imported from react-router-dom. */}
      <Router>
        <Header />
        <div className="container">
          <Routes>
            The Routes component is the parent component that wraps all the Route components. The Routes component is imported from react-router-dom.
            <Route exact path='/' element={
              // Since FeedbackForm, FeedbackStats and FeedbackList are different components, they need to be wrapped in a parent element, in this case, a Fragment. Without the fragment an error will be thrown.
              <>
                <FeedbackForm />
                <FeedbackStats />
                {/* feedback is from the state that is referred to on line 10 */}
                <FeedbackList />
              </>
            }>
            </Route>
            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
