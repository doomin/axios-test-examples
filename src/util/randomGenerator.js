import { faker } from '@faker-js/faker';
import moment from 'moment';

export function getRandomFirtName(){
    return faker.name.firstName();
}

export function getRandomLastName(){
    return faker.name.lastName();
}

export function getRandomPrice(min, max){
    return randomNumber(min, max);
}

export function getDepositPaid(){
    const val = randomNumber(1,100);
    return val%2 == 0 ? true : false;   
}

export function getCheckinDate(){
    return moment().format("YYYY-MM-DD");
}

export function getCheckoutdate(min, max){
    return moment().add(randomNumber(min, max), 'days').format("YYYY-MM-DD");
}

export function getAdditionalNeeds(){
    let additionalNeeds = "";
    for(let i = 0; i < randomNumber(1, 10); i++){
        if(i != 0){
            additionalNeeds += ", ";
        }
        additionalNeeds += faker.word.noun();
    }
    return additionalNeeds;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

