import {bookingEndpoint} from "../util/variables";
import axios from "axios";

export function deleteBooking(headers, bookingid){
    return axios.delete(`${bookingEndpoint}/booking/${bookingid}`, headers)
}