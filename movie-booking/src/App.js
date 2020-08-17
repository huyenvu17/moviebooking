import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/styles/BaiTapBookingTicket.css';
function App() {
  return (
    <div className="bookingMovieBackground">
      <div className="container-fluid">
        <div className="row">
          <div className="col-7 mx-auto">
            <div className="bookingMovie__heading--large">đặt vé xem phim cyberlearn.vn</div>
            <div className="screen"></div>
          </div>
          <div className="col-5">
            <div className="bookingMovie__heading--mid">Danh sách ghế được chọn</div>
            <div>
              <div className="d-flex align-items-center text-light mb-2">
                <div className="gheDuocChon mr-2"></div>
                <span>ghế đã đặt</span>
              </div>
              <div className="d-flex align-items-center text-light mb-2">
                <div className="gheDangChon mr-2"></div>
                <span>ghế đang chọn</span>
              </div>
              <div className="d-flex align-items-center text-light mb-2">
                <div className="ghe mr-2"></div>
                <span>ghế chưa đặt</span>
              </div>
            </div>
            <table class="table table-bordered text-light">
              <thead>
                <tr>
                  <th>Số ghế</th>
                  <th>Giá</th>
                  <th>Huỷ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row"></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td scope="row"></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
