//import pictures
import booksearch from "../assets/booksearch.jpg";
import codingquiz from "../assets/Coding-Quiz-Time.jpg";
import cureforboredom from "../assets/cureforboredom.JPG";
import dejabrew from "../assets/dejabrew.JPG";
import techblog from "../assets/thetechblog.png";
import weatherdashboard from "../assets/weatherdashboard.JPG"


function ProjectCard(title, description, img, appLink, gitHubLink) {
    this.title = title;
    this.description = description;
    this.img = img;
    this.appLink = appLink;
    this.gitHubLink = gitHubLink;
};

const bookSearch = new ProjectCard(
    "Google Book Search",
    "A MERN app to search for and save books of interest.",
    booksearch,
    "https://serene-forest-21005.herokuapp.com/",
    "https://github.com/jasminekay505/Book-Search"
);

const codingQuiz = new ProjectCard(
    "Code Quiz",
    "A timed multiple-choice code quiz designed to test basic JavaScript knowledge.",
    codingquiz,
    "https://jasminekay505.github.io/Code-Quiz/",
    "https://github.com/jasminekay505/Code-Quiz"
);

const cureForBoredom = new ProjectCard(
    "Cure for Boredom",
    "Distraction from the current global pandemic with personalized entertainment.",
    cureforboredom,
    "https://jasminekay505.github.io/CureForBoredom/",
    "https://github.com/jasminekay505/CureForBoredom"
);

const dejaBrew = new ProjectCard(
    "Deja Brew",
    "Discover breweries in an area and interact with other beer drinkers.",
    dejabrew,
    "https://guarded-bayou-67190.herokuapp.com/",
    "https://github.com/jasminekay505/Deja-Brew"
);

const techBlog = new ProjectCard(
    "The Tech Blog",
    "CMS-style blog site similar to a Wordpress site.",
    techblog,
    "https://cherry-cobbler-39150.herokuapp.com/",
    "https://github.com/jasminekay505/Tech-Blog"
);

const weatherDashboard = new ProjectCard(
    "Weather Dashboard",
    "OpenWeather API to retrieve current and forecasted weather data for different cities.",
    weatherdashboard,
    "https://jasminekay505.github.io/Weather-Dashboard/",
    "https://github.com/jasminekay505/Weather-Dashboard"
);

let projects = [bookSearch, codingQuiz, cureForBoredom, dejaBrew, techBlog, weatherDashboard];

export default projects;