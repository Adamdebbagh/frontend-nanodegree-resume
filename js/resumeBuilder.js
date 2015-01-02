// variables Declation 

var bio = {};
var work = {};
var education = {};
var projects = {};
//User Data
//bio
bio = {
  name : "Adam Debbagh",
  role : "Web Developer",
  contact : {
    "mobile" : "202-202-202",
    "email": "info@info.com",
    "github": "adamdebbagh",
    "twitter": "@adamdebbagh",
    "location": "Washington DC"
  },

  "welcomeMessage" : "hello, Welcome to my resume",
  "bioPic" : "images/fry.jpg",
  "skills" : [ "grading", "learning", "teaching", "programming"]
};

//education 
education = {
  "schools" : [
    {
      "name" : "",
      "location" : "",
      "degree" : "",
      "major" : "",
      "dates" : "",
      "url": "http://school.com"
    },
    {
      "name" : "",
      "location" : "",
      "degree" : "",
      "major" : ["CS", "Design"],
      "dates" : "",
      "url": "http://school.com"
    }
  ],
  "onlineCourses" : [
    {
      "title": "leraning javascript",
      "school" : "tekwin",
      "dates": 2014,
      "url": "http://www.tekwin.org"
    },
    {
      "title": "leraning javascript",
      "school" : "tekwin",
      "dates": 2014,
      "url": "http://www.tekwin.org"
    }
  ]

};

//work experience
work = {
  "jobs" : [
    {
      "employer": "tekwin,inc",
      "title": "CEO",
      "location": "washington dc",
      "dates": "since 2010",
      "description": "provide best education service"
    },
    {
      "employer": "tekwin,inc",
      "title": "CEO",
      "location": "washington dc",
      "dates": "since 2010",
      "description": "provide best education service"
    }
  ]

};

// Prejects 
projects = {
  "projects" : [
    {
      "title": "WRONG The Effects of Caffeine on the Human Body",
      "dates": "1987 - Now",
      "description": "I drink caffeine and see what happens.",
      "images": ["fry.jpg"]
    }
  ]
};
 



// replacing placeholders in helper.js with user data
var formattedName =  HTMLheaderName.replace("%data%", bio.name);
var formattedRole =  HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPicture = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedContactMobile = HTMLmobile.replace("%data%", bio.contact.email);
var formattedJobPosition = HTMLworkDescription.replace("%data%", work.description);
var formattedEducationName = HTMLschoolName.replace("%data%", education.name);

// filling the index template 
$("#header").prepend(formattedBioPicture);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").prepend(formattedContactMobile);
$("#workExperience").append(formattedJobPosition);
$("#education").append(formattedEducationName);

















