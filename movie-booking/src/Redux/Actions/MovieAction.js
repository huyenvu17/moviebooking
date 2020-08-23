import * as MovieConstant from '../Constant/MovieConstant';
export function bookingTicket(chairItem){
  return{
    type: MovieConstant.NEW_BOOKING,
    chairItem,
  }
}
export function removeBookingChair(bookingChairItem){
  return{
    type: MovieConstant.REMOVE_CHAIR,
    bookingChairItem,
  }
}
export function newBookingChair(){
  return{
    type: MovieConstant.CHAIR_BOOKED,
  }
}
