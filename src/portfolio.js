/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mubarak Ali",
  title: "Hi all, I'm Mubarak",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nextjs /   Nestjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mubarakali826",
  linkedin: "https://www.linkedin.com/in/mubarak-ali-rd/",
  gmail: "dev.mubarakali@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/profile.php?id=100064798702685",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Full-stack development using MERN stack and NestJS for scalable web and mobile applications"),
    emoji("⚡ Development of highly interactive and responsive UIs with ShadCN and React Native"),
    emoji("⚡ Integration of cloud services such as Firebase, AWS, PostgreSQL and MongoDB for backend and database solutions"),
  ]
,  

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
   
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs NEST",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fas fa-mobile"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Mongo DB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Threejs",
      fontAwesomeClassname: "fas fa-cubes"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Abbottabad University Of Science And Technology",
      logo: "data:image/jpeg;base64,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",
      subHeader: "Bachelors of Science in Software Engineering",
      duration: "March 2021 - March 2025",
      desc: "Graduated with a CGPA of 3.89.",
      descBullets: [
        "Served as a lead web developer in departmental development team.",
        "Completing three major university projects.",
        "FYP Administration System being at the front."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Engineer",
      company: "Pixelabs",
      companylogo:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxENDxAOEBMRDg4QEBIQFhAQDQ8WEA8RGB0YIhgYGhkYHyggHSAxIBkfITIkMSotMDAvIys0Pz8tNyk5MC0BCgoKDg0OFxAQFysfHiExMCs3NzctLS03Mjc3NzAuKzctKzc3KystMSw0KzgwKy0tLS0tKzUuKy0rKys3LS0tLf/AABEIAMgAyAMBIgACEQEDEQH/xAAcAAEBAAMBAQEBAAAAAAAAAAAAAQUGBwQDAgj/xAA9EAACAgECAwILBQcEAwAAAAAAAQIDBAURBhIhMVEHExQiMkFhcYGRsTRCcpPRFRYjU3Oh4TNSY8EXgrL/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQQFAwIG/8QALBEBAAICAQIEBAYDAAAAAAAAAAECAxEEEhMFIUFRFDGB8CMkYqGx0SIyYf/aAAwDAQACEQMRAD8A7IADisAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKCgCAoAgKAICgCAoAgKAICgCAoAgKAICgCAoAgKAICgACglCAoAgKAICgCAoAgKAICmpa/xZLFyfFQjGyEEudNtPmfXo/dsc8uamKOq0+Trg4+TPbppG5bYDG6HrEM6DnBSjyvlakl2+x+syZ6peLx1VnyeL0tS01tGphAUHp5QFAEBQBAUAQFAAFBKEBQBAUAQFAHzttjBc0mopettJHw/aFP8yv8yJieOvsU/wAUPqjmZncrnThv09O2twfDI5OObzbXnp2uElJJrqmt916y7Hj0b7NR/Sr+iPaX6zuIllWjUzDzahlKiqdsvRhFv3+w5BfdK2cpy6znJyftbZu3hC1HaMMaL6yfPL3L0V8/oYDg7TvKMqLa3hV/El716K+f0MbnWnNmrir6Po/C6Rx+NfkW9fv95b7w/grExoQlsmo88309J9X8uz4Hp/aFP8yv8yJ+dZ+zX/0rPozj5a5PJ+FitYruNKPD4Xxs3va2p3/LtNVsZrmi1JP1ppo/exr/AAL9ih+Kf1ZsJdxX66Rb3Z2fH28lqe06QFB0ckBQBAUAQFAAFAQgKAICgCGl8T8SZGLkyqrcOVRi/Oju+pupo/FXD2Rk5Mra4qUHGK3c4rsKfN7nb/D3vfo0PDez3vxta16vNpeq26pasTI2dUk2+SO0t49V1M5+5WL/AMn5n+DBaPpdum3LKyVyUxTi5JqT3l0XRGxfvjh/75flT/Qq8fomv5j/AG/7813l9yMn5PfR+n5bZvHpVcIwXowiorfuS2P1OSim30SW7fcSi1WQjOPWMoqS7exrdGB441HxGM616d3mL8P3n8unxNHJkrjxzb0hkYcVsuWKesy0HWs95WRZc+yUto+yK6I33gfTvEYysa8+7z//AF+7+vxNC0XBeVkV0+qUvO9kV1f9jr1cFFJLoktku5GX4bjm97ZrNzxjLGPHTj0+/Z+MihWwlCXozi4v3NbGv/uVi/8AJ+Z/g2G+1VwlOXSMYuT7exLdmD/fHD/3y/Kn+ho54w7jua+rH408nU9nf0a9qmq26Xa8TH5VVFJrnW73l1fU9nDHEmRlZMarOTlcZPzY7PoeLWNLt1K55WNHnpklFSclF7x6Poz1cK8PZGNkxttiowUZLdTi+0zaTn78dO+jf002ckcX4aZvrua8/ff9t3BQbT5xAUAQFAEBQBQASAAAAAAAAhrvHX2Kf4ofVHMjtWRjwtjyTjGcX92UU18meX9i438in8qH6Gby+DOe8WideTY4HideNimk1357XRfs1H9Kv6I55xlqPlGVJJ7wq/hr3/efz+hvuvZqw8Wc47RajyQSSS3fRbL2f9HKaKpWzjCPWc5KK9rbOHiWTVa4YWfBsMTe/It8o+5bt4O9O2jPJkusvMj+Fek/n9Dc0efTsRUVQpj6MIpe/vZ6TS42LtY4qx+XnnPmtf3eHWvs1/8ASs+jOPHbZwUk4tJprZppbNHi/Y2N/Ip/Kh+hX5nDnPMTE60ueHeIxxYtE13tjOBfsUPxT+rNhPnj48Ko8sIxhFfdjFJfJH1LeKnRStfaGfnydzJa/vOwAHRzAAAAAAAAUABAAAAAAAAAAAMTxBosc6ChKcoOL5k1s1v7V6zB8OcKTxsrxtrjOEE+RrfrJ9Oq9XTc3EFe/Gx3vGSY84WsfMzUxziif8ZUAFhVAAAAAAAAAAAAAAAAUAEoAABAcGhrmfDV8mrGstttnk5NFVc7ZuuDcpJS5X06Lr3LYyXEHA+qYtU8/wArlkW1rxk+S65WRS6txb7dvgNI26xr2Pddi3148/FXzqlGE92uWTXeuz3+owHg40fOwqLYZ03OUrOaEHa5utbdfO9vd+preg8X25+i6hGyb8rxaH/Fi3Gc4NPll0+8tmvkefwdUX6pp2fTLIvVvjIOu13281c+Xp137O9EjrYOS+DbiyzEuydP1GyScPGTU7ptuEoL+JHd+xbr3PvPlwvdla/qluU7L6sCqak642zjBxX+nXtF9r23l8e9EG3Xwcd1rXM3XtRnp+FY6MatyTlGbipRi9pWScerW/Yvaj5a7wzqOgVrOozJ3QhKKmlzx5d3suaEm1KO/T4g23Hwt6ldiYELKLJ02PJhDmrk4yceWzp/ZGR8HWZZkaXi3XTlbbJWc05yblLayaW79yRpPHmurU9AxsrZRm8uEZxW+0bIxt3239Xr+JkdE1HKxeG8aWHVO/Jm7K48lTm697Ld5tLu2+bRI6SDj2n+D/Us+pZWTl2UXT3kq7fHOcfxdVye49Hg14jy6dQnpOXOVy3trTnJylXbXu3tJ9XFqL/sQbODteyrteux7L7Z0KzKSrlNuCUXLl6PuOtH89YWXkU6zk+SRUsqzIyaa99toynKS5uvct2Z3iHgfVMSqWf5XK+2teMs5Lr1ZFetxb7dvgDbtAOY8Mcf2z0nMut2sy8KMVzNf6im9q5S27n2+72mB4W4ey+IYW5d+dZXy2OtLzpPm2T9FSiox6+r2jRt2spzDg+Oq6bqHkV6vy8Fvk8c4WSrh03jOM32L1Nb7dvcdPCQAAANgABQBAUAcM4UyIVcTWObSUsvMgm/VOTsUfn2fE7Lrd8KsXIssaVcKbHLfu2Zw3T9FjqOuZeLKTr57sxxnHthOMpOMvmjPanwTruSljW5Kvx0150smXI+5yW3M/juS8w1/gWuTw9Zn9xYPK/e30+jNy8BX2fL/rV//JnMHgdYek5ODTKM8nIrkpWy3jGVjWyXsiv1MVwxwnqOm4GZRW6FlZE4qE1bLlrjttKW/L29wGm+EicNR1S1YdbslTU1bOHXxjrTc5fBeb7dvcb54HdRot0/yetKu+mcnYvXY5dlny6fA9Xg34MelV2zv5J5Vz5W4NuMal2RTa9b6v4dxicPgbM07VXmYLp8klLrVKyUW6penDZLbo+z3IDQuBdFvysy3Gryp4F8a5tyhz80+WSUo+bKPv8AgbtqXg+y/FT8p1ezxGy5vHO3xW2/Tm5rNu3Y9fF3g7tsynqGnWrHyHLnlBylH+J65QlHs39aftMXkcHa5qXLTnZMI0Rab3nF7+3krSUn7wMfxPosMDQlVXk15sJalGzxlXLyRfi5Ll6Sfd/c9lXFlmlaBp6oS8oyHkKMpJNVxjZLmez6N+cjZOKeBnZpVGm4XIvFXRsbtk1z9J80m0u1uR5cjweTyNHxcKycK8zFdsozTcq3zzk3F9N9mmuvsA8OlcM6xn015Nup2UK6EbFCErN1GSTW6g4pdPUa1wLQ6uIo1ysd8oXZUHc997WoWJy6t9vvNi0nhTXowjhyy44+JFcvNGxSnGHdDaPN8N0fbhfweZGBq0ctOt4lc7uX+LJ2uEoyUd1y7b9VuBrfB+RCviSbm0ubJy4Rb9U5OaXz7Pidl16+FWJkWWNKuNNjlv3cr6HMv/F2Rdm5N1064U2zvshOuyTsrnJt1y22Xs36nx1LgnXcnbGuyI3Y6a86eTLke3Y5LbmfxTA8HgkopmtQWU4QxJUV1Tdk1GG8m9vOfY+j2MnX4OLoN5Gk6hFwb2TV0o9n3fGVbqXyRuGj8BY+Pptunzbsd/nW2pJN2dOVx7ttlt/k1PC4P1zSnOvAyK50SlzdsPm4WJqL9wHz4f4w1HB1GvTdQfjlOyupt8jnBz25JKcfSXVdp105vwv4Psjy1alqVsbr4yVkYRblvNei5S2XZ6ku5e46SEwgKCEoCgACgIQFAGkaJwB5JqdmpeUc/PO+fivEbbeM36c3P6t+43YoAgKAICgCAoAgKAICgCAoAgKAICgCAoAgKAKACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQEICgCAoAgKAICgCAoAgKAICgCAoAgKAICgCAoAgKAKACUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z",
      date: "June 2023",
      desc: "Developed responsive and user-friendly interfaces using React and Tailwind CSS, ensuring seamless user experiences across web platforms.",
      descBullets: [
        "Built responsive UIs with React & Tailwind for a seamless user experience.",
        "Improved frontend scalability, accelerating project delivery"
      ]
    },
    {
      role: "Back-End Developer",
      company: "Codematics",
      companylogo: "data:image/jpeg;base64,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mi7A5smXMNRcnkgGIbWsigq5PLztmpIPMGGVrWOdGc2R9wSMt2OvrcWOizBjA3sYkzQNNNPO+OZjQ4NjfE0vLw4hoGfhzzcrKAOyc8ja8FkNOKygFLG1sks5bIN765HuAvfeDh0UjXYLPWuDp2xwB+HVVFII3mUtdM6HK5pLW3Fo3HlyQGUzaeLdOndDUxxAM3bnx23xkcGRhjb3u4uaLOA4qSw6sMzS4wywkOylswaHcAbjKSCNevVRLIqx9O6Cpo6SW0bWZTM8xT2IDtDF6BYXA11sO67tl8PngbKJvSx0maCLeyVO4jytBbvHgE3cCbcBewQGLBtQGNldUBx/9jJQwCFrnOcQC5gsOZynXhw4LLZtLBu55JBLCaZzWzRyNO9Dn23YAbfNmzADKTcmywItnpg5jiY7NxeSuOp/cuikY0cPvXeNPqmKbOzSvrJGOjDpZKOenzZrb2mcHgSWGjSWgXF+KAncNrTO0uMM0FnWyzhrXHQG4yki2qzVFQVFa7d56eCO81pQJXyWhyG7mndtu7NYW6KVQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH/9k=",
      date: "May 2023",
      desc: "Developed efficient and scalable backend solutions, driving seamless functionality for web applications.",
      descBullets: [
        "Engineered RESTful APIs and database schemas for robust application backends.",
        "Optimized server performance, reducing response times by implementing efficient algorithms."
      ]
      

    },
    {
      role: "Software Engineer",
      company: "Firnas.tech",
      companylogo:"data:image/jpeg;base64,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",
      date: "November 2023 – current",
      desc: "Designed and implemented scalable full-stack solutions using NestJS, Django, and a variety of modern technologies.",
      descBullets: [
        "Developed and maintained dynamic APIs and robust backend systems with NestJS and Django.",
        "Delivered end-to-end solutions, integrating PostgreSQL, MongoDB, and cloud services for seamless performance."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/logo1.png"),
      projectName: "Brand Centro",
      projectDesc: "A modern rental residence offering fully detailed 3D models, floor plans, and sales insights for every unit.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://brandcentromodel.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/logo (2).png"),
      projectName: "4kstreamUK",
      projectDesc: "Your go-to platform for seamless IPTV streaming, offering flexible subscription plans and online access.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://4kstreamuk.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const whatIDid = {
  title: "What I Did",
  subtitle: "STARTUPS AND PROJECTS WHERE I CONTRIBUTED TO TECH DEVELOPMENT",
  projects: [
    {
      image: require("./assets/images/pharmazone.webp"),
      image1:require("./assets/images/pharmazone1.jpg"),
      image2:require("./assets/images/pharmazone2.jpg"),
      projectName: "Pharmazone",
      projectDesc: "A React Native-based pharmacy platform enabling customers to order medicines, consult pharmacists, and track orders in real-time."
    },
    {
      image: require("./assets/images/iptv.webp"),
      image1: require("./assets/images/iptv1.png"),
      image2: require("./assets/images/iptv2.png"),
      projectName: "IPTV Streaming Platform",
      projectDesc: "A scalable IPTV subscription service with seamless streaming, user-friendly dashboards, and secure payment integration."
    },
    {
      image: require("./assets/images/luxelook.jpg"),
      image1:require("./assets/images/luxelook1.png"),
      image2:require("./assets/images/luxelook2.png"),
      projectName: "Luxe Look",
      projectDesc: "A feature-rich online store built with MERN stack, offering advanced filtering, secure checkout, and real-time order tracking."
    },
    {
      image: require("./assets/images/brandCentro.jpg"),
      image1: require("./assets/images/brandCentro1.png"),
      image2: require("./assets/images/brandCentro2.png"),
      projectName: "Brand Centro",
      projectDesc: "A comprehensive motel booking platform featuring 3D models, detailed floor plans, and seamless apartment rentals, built with MERN stack."
    },    
    {
      image: require("./assets/images/careerLink.webp"),
      image1:require("./assets/images/careerLink1.png"),
      image2:require("./assets/images/careerLink2.png"),
      projectName: "CareerLink",
      projectDesc: "A MERN stack-powered job portal connecting employers and job seekers with advanced filtering, resume uploads, and real-time job applications."
    },
    {
      image: require("./assets/images/liveLonger.jpg"),
      image1:require("./assets/images/liveLonger1.jpg"),
      image2:require("./assets/images/liveLonger2.jpg"),
      projectName: "Live Longer",
      projectDesc: "A life-saving blood donation app built with React Native, enabling real-time donor search, emergency requests, and location-based matching."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "How to use roadmaps in JIRA",
      subtitle:
        "Earned a Coursera certificate in using Jira roadmaps to plan and manage projects effectively.",
      image: require("./assets/images/jira.png"),
      imageAlt: "Jira Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/DPUGRJINHRFF"
        }
      ]
    },
    {
      title: "Docker Specialization Certificate",
      subtitle:
        "Certified in Docker Specialization, gaining expertise in containerization, deployment, and orchestration.",
      image: require("./assets/images/docker.png"),
      imageAlt: "Docker Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/6A7DNPCLCIEG"
        }
      ]
    },

    {
      title: "Generative AI Certificates",
      subtitle: "Certified in Generative AI, gaining expertise in creating AI-driven content, models, and applications.",
      image: require("./assets/images/generativeAI.png"),
      imageAlt: "Generative AI logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1G71hml7b7qDkrVUzt1D8RWAWIlPbkm02/view?usp=sharing"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I want to share my achievements.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@kingjohn135251/visio-spark-a2c7fdbf1231",
      title: "Represented my university at VISIO spark hackathon as a web developer",
      description:
        "Developed and showcased innovative web solutions at VISIO Spark Hackathon, representing my university."
    },
    {
      url: "https://medium.com/@kingjohn135251/high-achievers-ceremony-4cd7114c9e95",
      title: "High achievers ceremony",
      description:
        "Honored to be recognized by the Vice Chancellor of Abbottabad University Of Science And Technology at the High Achievers Ceremony. Grateful for the support and motivated to keep striving for excellence!"
    },
    {
      url: "https://medium.com/@kingjohn135251/firnas-at-comsats-646d6e415a48",
      title: "Firnas.tech at COMSATS",
      description:
        "Firnas.tech had the privilege of visiting COMSATS University, Islamabad (Dhamtor Campus) to conduct a seminar aimed at bridging the gap between academia and industry. "
    },
    {
      url: "https://medium.com/@kingjohn135251/empowered-by-excellence-a-gift-from-the-prime-ministers-youth-program-e781d508f167",
      title: " A Gift from the Prime Minister’s Youth Program",
      description:
        "Honored to receive a laptop from the Government of Pakistan through the Prime Minister’s Youth Program, recognizing my academic achievements. Grateful for this empowering initiative!"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3161531077",
  email_address: "dev.mubarakali@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  whatIDid,
  resumeSection
};
