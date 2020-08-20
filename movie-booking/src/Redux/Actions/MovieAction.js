import * as MovieConstant from '../Constant/MovieConstant';
export function tangGiamMenu(burgerItem, tangGiam){
  return{
    type: MovieConstant.INCREASE_DECREASE_ORDER,
    burgerItem,
    tangGiam: tangGiam
  }
}
