import {bookingEndpoint} from "../util/variables";
import axios from "axios";

export function patchBookingInfo(body, headers, bookingid){
    return axios.patch(`${bookingEndpoint}/booking/${bookingid}`, body, headers)
}