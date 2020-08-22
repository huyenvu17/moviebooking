import * as MovieConstant from '../Constant/MovieConstant';

import danhSachGheData from '../../data/danhSachGhe.json';

const movieState = {
  chairList: danhSachGheData,
  chosenChairList: []
}

export default (state = movieState, action) => {
  switch (action.type){
    case MovieConstant.NEW_BOOKING: {
      console.log(MovieConstant.NEW_BOOKING, action.chairItem)
      let chosenChairList = [...state.chairList];
      let {chairItem} = action;
      chosenChairList.forEach((element) => {
        let index = element.danhSachGhe.findIndex(chairItem => chairItem.soGhe === chairItem.soGhe)
        console.log(index);
        if(index !== -1){
          chairItem.daDat = true;
          //chosenChairList[index] = {...chairItem}
          state.chairList = chosenChairList;
        }
      })
      return {...state}
    }
  }
  return {...state}
}
