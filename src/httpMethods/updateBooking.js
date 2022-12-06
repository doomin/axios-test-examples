import {bookingEndpoint} from "../util/variables";
import axios from "axios";

export function updateBookingInfo(body, headers, bookingid){
    return axios.put(`${bookingEndpoint}/booking/${bookingid}`, body, headers)
}