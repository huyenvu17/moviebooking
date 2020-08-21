import React, { Component } from 'react'
import {connect} from 'react-redux';
class ChairsList extends Component {
  render() {
    const {chairList} = this.props;
    //console.log(chairList)
    //console.log(chairList.includes(chairList[0]))
    let gheHangDau = chairList[0] ? 'gheHangDau' : 'ghe';
    return (
      <div>
        <div className="bookingMovie__heading--large">Đặt vé xem phim cyberlearn.vn</div>
        <div className="text-white text-center font-weight-bold">Màn hình</div>
        <div className="screen"></div>
        <div>Màn hình</div>
        <div className="d-flex align-items-center text-center flex-column">
        {chairList.map((chairList, index)=>{
            let gheHangDau = index == 0 ? 'gheHangDau' : 'ghe';
            return (
              <div key={index}  className="d-flex align-items-center flex-row">
                <div className="firstChar">{chairList.hang}</div>
                <div className="d-flex flex-row">
                  {chairList.danhSachGhe.map((danhSachGhe, i) => {
                    return (
                      <div key={i} className={gheHangDau} onClick={() => console.log('abs')}>{danhSachGhe.soGhe}</div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return{
    chairList: state.stateMovieReducer.chairList
  }
}
const mapDispatchToProps = dispatch => {

}
export default connect(mapStateToProps, mapDispatchToProps)(ChairsList);
