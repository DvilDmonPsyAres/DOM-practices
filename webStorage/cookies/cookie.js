const firstCookie = "favoriteCat=million";
document.cookie = firstCookie;

const secondCookie = "myfavoriteDog=bambi";
document.cookie.secondCookie;

document.cookie; // returns "favoriteCat=million; favoriteDog=bambi";

//using the following syntax create a new cookie
document.cookie = aNewCookieHere;



// specify the cookies "name" (the key) with an "="
// and set the expiration date to the past
document.cookie = "favoriteCat=; expires = Thu, 01 Jan 1970 00:00:00 GMT";
document.cookie; // ""
