import {bookingEndpoint} from "../util/variables";
import axios from "axios";

export function createBooking(body, headers){
    return axios.post(`${bookingEndpoint}/booking`, body, headers)
}