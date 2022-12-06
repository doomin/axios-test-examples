import * as randomFunctions from "../util/randomGenerator"
import {auth} from "../httpMethods/auth";
import {authBody} from "../bodies/authBody";
import {createBooking} from "../httpMethods/createBooking";
import {createBookingBody} from "../bodies/bookingBody";
import {getAllBookings} from "../httpMethods/getAllBookings";
import {getBookingInfo} from "../httpMethods/getBookingInfo";
import {updateBookingInfo} from "../httpMethods/updateBooking";
import {patchBookingInfo} from "../httpMethods/patchBooking";
import {deleteBooking} from "../httpMethods/deleteBooking";
import {content} from "../util/variables";

export let bookingId;
export let request;
export let requestPatch;
export let token;
export let response;

describe("Auth", () => {
    beforeAll(async () => {
        response = await auth(authBody, content);
        token = response.data.token;
    });  
    
    afterAll( () => {
        content.headers.Cookie = `token=${token}`;    
    });

    test("status code is 200", async() => {
        await expect(response.status).toEqual(200)
    });

    test("status text is OK", async () =>{
        await expect(response.statusText).toEqual("OK")
    }); 
});

describe("Get all bookings", () => {
    beforeAll(async () => {
        response = await getAllBookings(content);
    })

    test("status code is 200", async() => {
        await expect(response.status).toEqual(200)
    });

    test("status text is OK", async () =>{
        await expect(response.statusText).toEqual("OK")
    });
});

describe("Create booking", () => {
    beforeAll(async () => {
        request = createBookingBody;
        response = await createBooking(request,content);
    });

    afterAll(async () =>{
        bookingId = response.data.bookingid;
    });

    test("status code is 200", async() => {
        await expect(response.status).toEqual(200)
    });

    test("status text is OK", async () =>{
        await expect(response.statusText).toEqual("OK")
    });

    test("first name is equal expected value", async () => {
        await expect(response.data.booking.firstname).toEqual(request.firstname);
    });

    test("last name is equal expected value", async () => {
        await expect(response.data.booking.lastname).toEqual(request.lastname);
    });

    test("price in response is equal generated value", async () => {
        await expect(response.data.booking.totalprice).toEqual(request.totalprice);
    });

    test("depositPaid in response is equal generated value", async () => {
        await expect(response.data.booking.depositpaid).toEqual(request.depositpaid);
    });

    test("checkin date is equal expected value", async () => {
        await expect(response.data.booking.bookingdates.checkin).toEqual(request.bookingdates.checkin);
    });

    test("checkout date is equal expected value", async () => {
        await expect(response.data.booking.bookingdates.checkout).toEqual(request.bookingdates.checkout);
    });

    test("additional needs in response is equal generated value", async () => {
        await expect(response.data.booking.additionalneeds).toEqual(request.additionalneeds);
    });
});

describe("Get booking info by booking id", () => {
    beforeAll(async () => {
        response = await getBookingInfo(bookingId, content);
    });

    test("status code is 200", async() => {
        await expect(response.status).toEqual(200)
    });

    test("status text is OK", async () =>{
        await expect(response.statusText).toEqual("OK")
    });

    test("first name is equal expected value", async () => {
        await expect(response.data.firstname).toEqual(request.firstname);
    });

    test("last name is equal expected value", async () => {
        await expect(response.data.lastname).toEqual(request.lastname);
    });

    test("price in response is equal generated value", async () => {
        await expect(response.data.totalprice).toEqual(request.totalprice);
    });

    test("depositPaid in response is equal generated value", async () => {
        await expect(response.data.depositpaid).toEqual(request.depositpaid);
    });

    test("checkin date is equal expected value", async () => {
        await expect(response.data.bookingdates.checkin).toEqual(request.bookingdates.checkin);
    });

    test("checkout date is equal expected value", async () => {
        await expect(response.data.bookingdates.checkout).toEqual(request.bookingdates.checkout);
    });

    test("additional needs in response is equal generated value", async () => {
        await expect(response.data.additionalneeds).toEqual(request.additionalneeds);
    });
});

describe("Update booking info", () => {
    beforeAll(async () => {
        request.totalprice = randomFunctions.getRandomPrice(100, 500);
        request.bookingdates.checkout = randomFunctions.getCheckoutdate(5, 8);
        response = await updateBookingInfo(request,content,bookingId);
    });

    test("status code is 200", async() => {
        await expect(response.status).toEqual(200)
    });

    test("status text is OK", async () =>{
        await expect(response.statusText).toEqual("OK")
    });

    test("first name is equal expected value", async () => {
        await expect(response.data.firstname).toEqual(request.firstname);
    });

    test("last name is equal expected value", async () => {
        await expect(response.data.lastname).toEqual(request.lastname);
    });

    test("price in response is equal generated value", async () => {
        await expect(response.data.totalprice).toEqual(request.totalprice);
    });

    test("depositPaid in response is equal generated value", async () => {
        await expect(response.data.depositpaid).toEqual(request.depositpaid);
    });

    test("checkin date is equal expected value", async () => {
        await expect(response.data.bookingdates.checkin).toEqual(request.bookingdates.checkin);
    });

    test("checkout date is equal expected value", async () => {
        await expect(response.data.bookingdates.checkout).toEqual(request.bookingdates.checkout);
    });

    test("additional needs in response is equal generated value", async () => {
        await expect(response.data.additionalneeds).toEqual(request.additionalneeds);
    });
});

describe("Patch booking info", () => {
    beforeAll(async () => {
        requestPatch = {
            depositpaid: randomFunctions.getDepositPaid(),
            additionalneeds: randomFunctions.getAdditionalNeeds()
        }
        response = await patchBookingInfo(requestPatch,content,bookingId);
    });

    test("status code is 200", async() => {
        await expect(response.status).toEqual(200)
    });

    test("status text is OK", async () =>{
        await expect(response.statusText).toEqual("OK")
    });

    test("first name is equal expected value", async () => {
        await expect(response.data.firstname).toEqual(request.firstname);
    });

    test("last name is equal expected value", async () => {
        await expect(response.data.lastname).toEqual(request.lastname);
    });

    test("price in response is equal generated value", async () => {
        await expect(response.data.totalprice).toEqual(request.totalprice);
    });

    test("depositPaid in response is equal generated value", async () => {
        await expect(response.data.depositpaid).toEqual(requestPatch.depositpaid);
    });

    test("checkin date is equal expected value", async () => {
        await expect(response.data.bookingdates.checkin).toEqual(request.bookingdates.checkin);
    });

    test("checkout date is equal expected value", async () => {
        await expect(response.data.bookingdates.checkout).toEqual(request.bookingdates.checkout);
    });

    test("additional needs in response is equal generated value", async () => {
        await expect(response.data.additionalneeds).toEqual(requestPatch.additionalneeds);
    });
});

describe("Delete booking", () => {
    beforeAll(async () => {
        response = await deleteBooking(content,bookingId);
    });

    test("status code is 201", async() => {
        await expect(response.status).toEqual(201)
    });

    test("status text is Created", async () =>{
        await expect(response.statusText).toEqual("Created")
    });
});

describe("Confirm booking deletion by booking id", () => {
    let status, statusText;
    beforeAll(async () => {
        try{
            response = await getBookingInfo("31383", content);
        } catch (err) {
            status = err.response.status;
            statusText = err.response.statusText;
        }
    });

    test("status code is 404", async() => {
        await expect(status).toEqual(404)
    });

    test("status text is Not Found", async () =>{
        await expect(statusText).toEqual("Not Found")
    });
});