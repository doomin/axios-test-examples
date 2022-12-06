import {bookingEndpoint} from "../util/variables";
import axios from "axios";

export function getAllBookings(headers){
    return axios.get(`${bookingEndpoint}/booking`, headers)
}