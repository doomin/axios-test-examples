import * as randomFunctions from "../util/randomGenerator"

export const createBookingBody = {
    firstname : randomFunctions.getRandomFirtName(),
    lastname : randomFunctions.getRandomLastName(),
    totalprice :  randomFunctions.getRandomPrice(20, 100),
    depositpaid : randomFunctions.getDepositPaid(),
    bookingdates :
        {
            checkin : randomFunctions.getCheckinDate(),
            checkout : randomFunctions.getCheckoutdate(2, 4)
        },
    additionalneeds : randomFunctions.getAdditionalNeeds()
}