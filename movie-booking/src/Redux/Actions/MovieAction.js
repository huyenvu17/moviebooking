import * as MovieConstant from '../Constant/MovieConstant';
export function bookingTicket(chairItem){
  return{
    type: MovieConstant.NEW_BOOKING,
    chairItem,
  }
}
