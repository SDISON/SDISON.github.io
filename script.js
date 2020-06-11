function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return (
    React.createElement("div", { className: `menu-container ${props.showMenu}` },
    React.createElement("div", { className: "overlay" }),
    React.createElement("div", { className: "menu-items" },
    React.createElement("ul", null,
    React.createElement("li", null,
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")),



    React.createElement("li", null,
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "ABOUT")),



    React.createElement("li", null,
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")),



    React.createElement("li", null,
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACT"))),




    React.createElement(SocialLinks, null))));



};


/***********************
     Nav Component
    ***********************/

const Nav = props => {
  return (
    React.createElement(React.Fragment, null,
    React.createElement("nav", { id: "navbar" },
    React.createElement("div", { className: "nav-wrapper" },
    React.createElement("p", { className: "brand" }, "",

    React.createElement("strong", null, "3rx")),

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' },

    React.createElement("span", null))))));





};



/***********************
     Header Component
    ***********************/

const Header = props => {
  return (
    React.createElement("header", { id: "welcome-section" },
    React.createElement("div", { className: "forest" }),
    React.createElement("div", { className: "silhouette" }),
    React.createElement("div", { className: "moon" }),
    React.createElement("div", { className: "container" },
    React.createElement("h1", null,
    React.createElement("span", { className: "line" }, "I do"),
    React.createElement("span", { className: "line" }, "deepLearning, bigData"),
    React.createElement("span", { className: "line" }, "blockChain development"),
    React.createElement("span", { className: "line" },
    React.createElement("span", { className: "color" }, "&"), " competitive coding.")),


    React.createElement("div", { className: "buttons" },
    React.createElement("a", { href: "#projects" }, "my portfolio"),
    React.createElement("a", { href: "https://drive.google.com/uc?export=download&id=1X3k5IQTEdJhjh99UNmK7BtxSfAsMd_L9", className: "cta" }, "Download Resume(pdf)")))));






};


/***********************
     About Component
    ***********************/

const About = props => {
  return (
    React.createElement("section", { id: "about" },
    React.createElement("div", { className: "wrapper" },
    React.createElement("article", null,
    React.createElement("div", { className: "title" },
    React.createElement("h3", null, "Who's this guy?"),
    React.createElement("p", { className: "separator" })),

    React.createElement("div", { className: "desc full" },
    React.createElement("h4", { className: "subtitle" }, "My name is SUSHEN SHROTRIYA."),
    React.createElement("p", null, 
    React.createElement("center", null, "I am a computer science student from JAYPEE INSTITUTE OF INFORMATION TECHNOLOGY."), ""),



    React.createElement("p", null,
    React.createElement("center", null, "I really enjoy solving problems. I can't stop learning new things; the more, the better. I also love cricket, a hobby."),"")),










    React.createElement("div", { className: "title" },
    React.createElement("h3", null, "Education"),
    React.createElement("p", { className: "separator" })),

    React.createElement("div", { className: "desc full" },
    React.createElement("h4", { className: "subtitle" }, "Graduation"),
    React.createElement("p", null, 
    React.createElement("center", null, "Currently pursuing my B.Tech from Jaypee Institute Of Information Technology with a GPA of 7.7 ."),'')),
    
     React.createElement("div", { className: "desc full" },
    React.createElement("h4", { className: "subtitle" }, "High School"),
    React.createElement("p", null, 
    React.createElement("center",null,"Sacred Heart Senior Secondary Convent School with 92.6% ."),""))

  ))));








};


/***********************
     Project Component
    ***********************/

const Project = props => {
  const tech = {
    django: 'fab fa-django',
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node' };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return (
    React.createElement("div", { className: "project" },
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" },
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })),

    React.createElement("div", { className: "project-details" },
    React.createElement("div", { className: "project-tile" },
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) =>
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children,
    React.createElement("div", { className: "buttons" },
    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "View source ",
    React.createElement("i", { className: "fas fa-external-link-alt" })),

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Try it Live ",
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));





};



/***********************
     Projects Component
    ***********************/

const Projects = props => {
  return (
    React.createElement("section", { id: "projects" },
    React.createElement("div", { className: "projects-container" },
    React.createElement("div", { className: "heading" },
    React.createElement("h3", { className: "title" }, "My Works"),
    React.createElement("p", { className: "separator" }),
    React.createElement("p", { className: "subtitle" }, "Here's a list of ",
    React.createElement("u", null, "most"), " of the projects I've been working on lately. All of these were built during my graduation @",
    ' ',
    React.createElement("a", { href: "http://www.jiit.ac.in/", target: "_blank", rel: "noopener noreferrer" }, "JIIT"), ", where I've been coding for almost 3 years until I completed all the projects required to get my resume ready.")),






    React.createElement("div", { className: "projects-wrapper" },
    React.createElement(Project, {
      title: "Decentralized-aerial-mapping.",
      img: 'https://raw.githubusercontent.com/SDISON/Decentralized-aerial-mapping/master/README_images/02.png',
      tech: "",
      link: "http://tester3.pythonanywhere.com/home/",
      repo: "https://github.com/SDISON/Decentralized-aerial-mapping" },

    React.createElement("small", null, "Built using Django, EthereumChain, JavaScript, CSS . "),


    React.createElement("p", null, "A ethereum based web app to get data from drone and store in chain.")),




    React.createElement(Project, {
      title: "CovidSafe",
      img: 'https://raw.githubusercontent.com/SDISON/Portfolio/master/covid.png',
      tech: "",
      link: "",
      repo: "" },

    React.createElement("small", null, "Built using Android, Web3j, EthereumChain."),


    React.createElement("p", null, "Another full-stack android app to provide mapping of users through ethreum chain for covid-19 protection.")),




    React.createElement(Project, {
      title: "VIDEO BASED EMOTION RECOGNITION.",
      img: 'https://raw.githubusercontent.com/SDISON/Portfolio/master/images.jpeg',
      tech: "",
      link: "",
      repo: "" },

    React.createElement("small", null, "Built using Python, TensorFlow, Keras, OpenCV."),
    React.createElement("p", null, "A deep learning model to categorize video based on emotions.")),




    React.createElement(Project, {
      title: "Skin Cancer Recognition.",
      img: 'https://raw.githubusercontent.com/SDISON/Portfolio/master/CDR624959.jpg',
      tech: "",
      link: "",
      repo: "https://github.com/SDISON/Skin_Cancer" },

    React.createElement("small", null, "Built using Python, Keras, Django, JS + jQuery, CSS + Bootstrap and Pug."),
    React.createElement("p", null, "A deep learning model to categorize mole as cancerous or not based on image.")),

    React.createElement(Project, {
      title: "Twitter Sentiment Analysis Using Spark Streaming And Kafka.",
      img: 'https://raw.githubusercontent.com/SDISON/Portfolio/master/1_Xj8-Jpi5TppZHA8dFRml6A.jpeg',
      tech: "",
      link: "",
      repo: "" },

    React.createElement("small", null, "Built using Apache Spark, Kafka, Python."),
    React.createElement("p", null, "A simple spark application which display the plot sentiment(positive or negative) of tweets in a given duration.")),

     React.createElement(Project, {
      title: "Data Entry Management System.",
      img: 'https://raw.githubusercontent.com/SDISON/Portfolio/master/Screenshot.png',
      tech: "",
      link: "",
      repo: "" },

    React.createElement("small", null, "Built using Python, Django, Js, Css."),
    React.createElement("p", null, "A simple web based application to maintain the entry logs.")),


))));







};



/***********************
     Contact Component
    ***********************/

const Contact = props => {
  return (
    React.createElement("section", { id: "contact" },
    React.createElement("div", { className: "container" },
    React.createElement("div", { className: "heading-wrapper" },
    React.createElement("div", { className: "heading" },
    React.createElement("p", { className: "title" }, "Want to ",
    React.createElement("br", null), "contact me?"),


    React.createElement("p", { className: "separator" }),
    React.createElement("p", { className: "subtitle" }, "Please, use the form below to send an email")),





    React.createElement(SocialLinks, null)),

    React.createElement("form", { id: "contact-form", action: "#" },
    React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }),
    React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }),
    React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }),
    React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" })))));




};



/***********************
     Footer Component
    ***********************/

const Footer = props => {
  return (
    React.createElement("footer", null,
    React.createElement("div", { className: "desc full" },
    React.createElement("br",null),
    React.createElement("h3", null, 
    React.createElement("center", null, "THANKS FOR VISITING"),""),
  )));



};




/***********************
     Social Links Component
    ***********************/

const SocialLinks = props => {
  return (
    React.createElement("div", { className: "social" },
    

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/SDISON",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's GitHub Profile" },

    ' ',
    React.createElement("i", { className: "fab fa-github" })),

    ));



};



/***********************
     Main Component
    ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return (
      React.createElement(React.Fragment, null,
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }),
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }),
      React.createElement(Header, null),
      React.createElement(About, null),
      React.createElement(Projects, null),
      React.createElement(Contact, null),
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}



ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
