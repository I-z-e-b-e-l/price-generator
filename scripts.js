

let item=prompt ("Please enter the name of the item");
let itemPrice=Number(prompt ("What is the base price of that item?"));
let isItBlackFriday=prompt ("Is today Black Friday? Answer yes or no.");
let searchEngineUsed=prompt ("Did the purchaser find the product through a search engine? Answer yes or no.");
let shopAround=prompt ("Did the purchaser visit a comparison-shopping site? Answer yes or no.");

let finalPrice = itemPrice; 
let message = "";


if (isItBlackFriday=="yes") {
    message += `Since it's Black Friday, we will reduce the price of ${item} by 25%. `;
    finalPrice *= .75;
} else {
    message += `It's not Black Friday, so the price didn't change for that. `;
}

if (searchEngineUsed=="yes"){
    message += `We will increase the price by 1% to pay the search engine. `;
    finalPrice = finalPrice + (finalPrice * .01);
} else {
    message += `The customer didn't use a search engine, so the price didn't change for that. `;
}

if (shopAround == "yes") {
    message += `Since the customer visited a comparison-shopping site, we will reduce the price by 10%. `;
    finalPrice *= .90;
} else {
    message += `The customer didn't visit a comparison-shopping site, so the price didn't change for that. `
}

alert (`${message}The final price of the ${item} is: 💲${finalPrice.toFixed(2)}🤑💰💸`)






