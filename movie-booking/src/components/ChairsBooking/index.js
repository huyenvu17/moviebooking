import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as movieActions from '../../Redux/Actions/MovieAction';
class ChairsBooking extends Component {
  render() {
    console.log(this.props.chairsBookingList);
    let {chairsBookingList, removeBookingChair, confirmChairBooked} = this.props;
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
              {/* <th>Huỷ</th> */}
            </tr>
          </thead>
          <tbody>
            {chairsBookingList?.map((chosenChair, index)=>{
              return(
                <tr key={index}>
                  <td>{chosenChair.soGhe}</td>
                  <td>{chosenChair.gia}</td>
                  {/* <td><button className="btn btn-danger" onClick={() => removeBookingChair(chosenChair)}>Huỷ</button></td> */}
                </tr>
              )
            })}
          </tbody>
        </table>
        <button className="btn btn-primary" onClick={() => confirmChairBooked()}>Xác nhận đặt chỗ</button>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return{
    chairsBookingList: state.stateMovieReducer.chosenChairList
  }
}
const mapDispatchToProps = dispatch => {
  return{
    removeBookingChair: (bookingChair) => {
      dispatch(movieActions.removeBookingChair(bookingChair));
    },
    confirmChairBooked: () => {
      dispatch(movieActions.newBookingChair());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChairsBooking)
