//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel orci porta non pulvinar neque. Molestie at elementum eu facilisis sed odio morbi. Sit amet dictum sit amet justo donec enim diam. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Varius vel pharetra vel turpis nunc eget. Vitae ultricies leo integer malesuada nunc vel risus commodo. Volutpat sed cras ornare arcu dui. Sapien et ligula ullamcorper malesuada. Mattis molestie a iaculis at erat.Gravida arcu ac tortor dignissim convallis aenean et tortor. Fames ac turpis egestas maecenas. Lorem ipsum dolor sit amet. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Nisl purus in mollis nunc sed id semper. Enim neque volutpat ac tincidunt vitae semper quis lectus. Eget nullam non nisi est. Risus quis varius quam quisque id diam vel quam elementum. Enim nec dui nunc mattis enim. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Cras adipiscing enim eu turpis egestas pretium. Augue mauris augue neque gravida. Sed enim ut sem viverra aliquet eget. Sed libero enim sed faucibus. Amet aliquam id diam maecenas ultricies mi eget mauris.Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Dignissim suspendisse in est ante in. Sed blandit libero volutpat sed cras ornare arcu dui. Semper viverra nam libero justo laoreet sit. Diam maecenas ultricies mi eget mauris pharetra. Massa tincidunt dui ut ornare. Vel quam elementum pulvinar etiam non. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Odio aenean sed adipiscing diam donec adipiscing tristique risus. Eget duis at tellus at urna condimentum."
const aboutContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel orci porta non pulvinar neque. Molestie at elementum eu facilisis sed odio morbi. Sit amet dictum sit amet justo donec enim diam. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Varius vel pharetra vel turpis nunc eget. Vitae ultricies leo integer malesuada nunc vel risus commodo. Volutpat sed cras ornare arcu dui. Sapien et ligula ullamcorper malesuada. Mattis molestie a iaculis at erat.Gravida arcu ac tortor dignissim convallis aenean et tortor. Fames ac turpis egestas maecenas. Lorem ipsum dolor sit amet. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Nisl purus in mollis nunc sed id semper. Enim neque volutpat ac tincidunt vitae semper quis lectus. Eget nullam non nisi est. Risus quis varius quam quisque id diam vel quam elementum. Enim nec dui nunc mattis enim. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Cras adipiscing enim eu turpis egestas pretium. Augue mauris augue neque gravida. Sed enim ut sem viverra aliquet eget. Sed libero enim sed faucibus. Amet aliquam id diam maecenas ultricies mi eget mauris.Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Dignissim suspendisse in est ante in. Sed blandit libero volutpat sed cras ornare arcu dui. Semper viverra nam libero justo laoreet sit. Diam maecenas ultricies mi eget mauris pharetra. Massa tincidunt dui ut ornare. Vel quam elementum pulvinar etiam non. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Odio aenean sed adipiscing diam donec adipiscing tristique risus. Eget duis at tellus at urna condimentum."
const contactContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel orci porta non pulvinar neque. Molestie at elementum eu facilisis sed odio morbi. Sit amet dictum sit amet justo donec enim diam. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Varius vel pharetra vel turpis nunc eget. Vitae ultricies leo integer malesuada nunc vel risus commodo. Volutpat sed cras ornare arcu dui. Sapien et ligula ullamcorper malesuada. Mattis molestie a iaculis at erat.Gravida arcu ac tortor dignissim convallis aenean et tortor. Fames ac turpis egestas maecenas. Lorem ipsum dolor sit amet. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Nisl purus in mollis nunc sed id semper. Enim neque volutpat ac tincidunt vitae semper quis lectus. Eget nullam non nisi est. Risus quis varius quam quisque id diam vel quam elementum. Enim nec dui nunc mattis enim. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Cras adipiscing enim eu turpis egestas pretium. Augue mauris augue neque gravida. Sed enim ut sem viverra aliquet eget. Sed libero enim sed faucibus. Amet aliquam id diam maecenas ultricies mi eget mauris.Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Dignissim suspendisse in est ante in. Sed blandit libero volutpat sed cras ornare arcu dui. Semper viverra nam libero justo laoreet sit. Diam maecenas ultricies mi eget mauris pharetra. Massa tincidunt dui ut ornare. Vel quam elementum pulvinar etiam non. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Odio aenean sed adipiscing diam donec adipiscing tristique risus. Eget duis at tellus at urna condimentum."

const app = express();

var posts = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render('home', {
    homeStart : homeStartingContent,
    posts : posts
  })
});

app.get("/about", (req, res) => {
  res.render("about", {aboutMatter : aboutContent});
});

app.get("/contact", (req, res) => {
  res.render("contact", {contactMatter : contactContent});
});


app.get("/compose", (req, res) => {
  res.render("compose");
});


app.get("/posts/:postName", (req, res) => {
  const postNameVar = _.lowerCase(req.params.postName);
  posts.forEach(function(ele) {
    var titleVar = _.lowerCase(ele.title);
    if(titleVar === postNameVar) {
      res.render('post', {title : postNameVar, matter : ele.postbody});
    }
  })
});


app.post("/compose", (req, res) => {
  const post  = {
    title : req.body.publish,
    postbody : req.body.postBody
  }
  posts.push(post);
  res.redirect("/");
});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
