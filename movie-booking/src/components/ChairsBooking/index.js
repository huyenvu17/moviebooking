import React, { Component } from 'react'
import {connect} from 'react-redux';
class ChairsBooking extends Component {
  render() {
    console.log(this.props.chairsBookingList)
    return (
      <div>
        <div className="bookingMovie__heading--mid">Danh sách ghế được chọn</div>
        <div>
          <div className="d-flex align-items-center text-light mb-2">
            <div className="gheDuocChon mr-2" />
            <span>ghế đã đặt</span>
          </div>
          <div className="d-flex align-items-center text-light mb-2">
            <div className="gheDangChon mr-2" />
            <span>ghế đang chọn</span>
          </div>
          <div className="d-flex align-items-center text-light mb-2">
            <div className="gheChuaChon mr-2" />
            <span>ghế chưa đặt</span>
          </div>
        </div>
        <table className="table table-bordered text-light">
          <thead>
            <tr>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Huỷ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row" />
              <td />
              <td />
            </tr>
            <tr>
              <td scope="row" />
              <td />
              <td />
            </tr>
          </tbody>
        </table>
        <button className="btn btn-primary">Xác nhận đặt chỗ</button>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return{
    chairsBookingList: state.stateMovieReducer.chosenChairList
  }
}

export default connect(mapStateToProps)(ChairsBooking)
