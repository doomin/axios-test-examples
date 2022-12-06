import {bookingEndpoint} from "../util/variables";
import axios from "axios";

export function getBookingInfo(bookingid, headers){
    return axios.get(`${bookingEndpoint}/booking/${bookingid}`, headers)
}