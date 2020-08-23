import * as MovieConstant from '../Constant/MovieConstant';

import danhSachGheData from '../../data/danhSachGhe.json';

const movieState = {
  chairList: danhSachGheData,
  chosenChairList: [],
}

export default (state = movieState, action) => {
  switch (action.type){
    case MovieConstant.NEW_BOOKING: {
      //console.log(MovieConstant.NEW_BOOKING, action.chairItem)
      let chosenChairListUpdate = [...state.chosenChairList];
      let {chairItem} = action;
      let index = chosenChairListUpdate.findIndex(chairItem => chairItem.soGhe === chairItem.soGhe);
      if (index != -1) {
        //chairItem.daDat = true;
        //console.log(chairItem, index);
        //chosenChairListUpdate.splice(index, 1);
      }
      chosenChairListUpdate.push(chairItem)
      state.chosenChairList = chosenChairListUpdate;
      console.log(state.chosenChairList)

      return {...state, ...state.chosenChairList}
    }
    case MovieConstant.REMOVE_CHAIR: {
      let chosenChairListUpdate = [...state.chosenChairList];
      let {bookingChairItem} = action;
      let index = chosenChairListUpdate.findIndex(ChairItembooking => ChairItembooking.soGhe === bookingChairItem.soGhe);
      if (index != -1) {
        chosenChairListUpdate.splice(index, 1);
      }
      state.chosenChairList = chosenChairListUpdate;
      console.log(chosenChairListUpdate)
    }
    case MovieConstant.CHAIR_BOOKED: {
      let chosenChairListUpdate = [...state.chosenChairList];
      chosenChairListUpdate.forEach(element => {
        element.daDat = true;
      });
      state.chosenChairList = chosenChairListUpdate;
    }
  }
  return {...state, ...state.chosenChairList}
}
