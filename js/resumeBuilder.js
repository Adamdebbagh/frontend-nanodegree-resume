//User Data
var bio = {
    name : "Adam Debbagh",
    role : "Web Developer",
    contact : {
        mobile: "650-55-5555",
        location : "3350 huntley square",
        email: "info@tekwin.org",
        github:"Adamdebbagh",
        twitter:"@adamdebbagh"
    },
    picture_url : "images/fry.jpg",
    welcome_message : "hello, Welcome to my resume"
};

// replacing placeholders in helper.js with user data
var formattedName =  HTMLheaderName.replace("%data%",bio.name);

var formattedRole =  HTMLheaderRole.replace("%data%",bio.role);

var formattedBioPicture = HTMLbioPic.replace("%data%",bio.picture_url);
var formattedContactMobile = HTMLmobile.replace("%data%",bio.contact.email);

// filling the index template 
$("#header").prepend(formattedBioPicture);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#header").prepend(formattedContactMobile);

