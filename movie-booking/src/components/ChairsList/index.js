import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as movieActions from '../../Redux/Actions/MovieAction';
class ChairsList extends Component {
  render() {
    const {chairList, chosenChairsList} = this.props;
    console.log(chairList)
    //console.log(chairList.includes(chairList[0]))
    let gheHangDau = chairList[0] ? 'gheHangDau' : 'ghe';
    return (
      <div>
        <div className="bookingMovie__heading--large">Đặt vé xem phim cyberlearn.vn</div>
        <div className="text-white text-center font-weight-bold">Màn hình</div>
        <div className="screen"></div>
        <div className="d-flex align-items-center text-center flex-column">
        {chairList?.map((chairList, index)=>{
            let gheHangDau = index == 0 ? 'gheHangDau' : 'ghe';
          return (
            <div key={index} className="d-flex align-items-center flex-row">
              <div className="firstChar">{chairList.hang}</div>
              <div className="d-flex flex-row">
                {chairList?.danhSachGhe.map((chairItem, i) => {
                  let gheDat = chairItem.daDat;
                  let indexGhe = chosenChairsList.findIndex(gheDangDat => gheDangDat.soGhe === chairItem.soGhe);
                  let classGheDangDat = indexGhe !== -1 ? 'gheDangChon' : '';
                  return gheDat ? <div key={i} className={`${gheHangDau} gheDuocChon`}>{chairItem.soGhe}</div>
                    :
                    <div key={i} className={`${gheHangDau} ${classGheDangDat}`} onClick={() => this.props.bookingMovieTicket(chairItem)}>{chairItem.soGhe}</div>
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
    chairList: state.stateMovieReducer.chairList,
    chosenChairsList: state.stateMovieReducer.chosenChairList
  }
}
const mapDispatchToProps = dispatch => {
  return {
    bookingMovieTicket: (chairItem) => {
      dispatch(movieActions.bookingTicket(chairItem))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChairsList);
