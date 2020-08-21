import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/styles/BaiTapBookingTicket.css';
import ChairsList from './components/ChairsList';
import ChairsBooking from './components/ChairsBooking';
function App() {
  return (
    <div className="bookingMovieBackground">
      <div className="container-fluid">
        <div className="row">
          <div className="col-7 mx-auto">
            <ChairsList />
          </div>
          <div className="col-5">
            <ChairsBooking />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
