(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(7),i=t.n(o),r=(t(14),t(1)),s=t(2),c=t(4),m=t(3),u=t(5),d=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),l.a.createElement("h3",null,"I am a ",e.role,".",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),p=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.website)))))))}}]),a}(n.Component),h=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase()),style:{width:e.level+"%"}}),l.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),f=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Youc can check out some of my works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(a){return l.a.createElement("a",{href:null!=a.link?a.link:e.linkedinUrl},l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap",title:"See descriptions on Linkedin -> Projects"},l.a.createElement("img",{src:"".concat(a.imgurl),className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,a.name),l.a.createElement("p",null,"Technologies: ",a.technologies),l.a.createElement("p",null,"Date: ",a.date))))))})))))}}]),a}(n.Component);n.Component;var E=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Linked in :",e.linkedinId)))))}}]),a}(n.Component),v=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))})),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2014 CeeVee"),l.a.createElement("li",null,"Design by ",l.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),g={imagebaseurl:"https://techonoeticsclub.github.io/",name:"Denis Reinoso",role:"Computer Engineer",linkedinId:"denisreinoso",linkedinUrl:"https://www.linkedin.com/in/denisreinoso/",skypeid:"live:denis.reinoso",roleDescription:"Computer Engineer with 4 + years of experience working with agile methodologies in different kind of projects, from low to high level systems, actually with JAVA and Android as main development languages.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/denisreinoso/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/dreinoso/",className:"fa fa-github"},{name:"skype",url:"https://join.skype.com/invite/qNqUvKS7ROdd/",className:"fa fa-skype"}],aboutme:"I have finished my studies as Computer Engineer and have been working in software industry for past few years. I alwasys try to be up to date with last technologies.",address:"C\xf3rdoba, Argentina",website:"https://www.yourchainreaction.com",education:[{UniversityName:"Universidad Nacional de Cordoba",specialization:"Computer Engineering specialization",MonthOfPassing:"Dec",YearOfPassing:"2016",Achievements:"Smart Communicator for Embedded Systems"}],work:[{CompanyName:"SimTLiX S.R.L.",specialization:"Android Engineer",MonthOfLeaving:"-",YearOfLeaving:"Currently Working here",Achievements:"Developing of Android apps in a huge project for a important car manufactured. Involves all the applications of audio, setting, phone, etc.. that make the whole system."},{CompanyName:"Taller Technologies",specialization:"Software Engineer",MonthOfLeaving:"Feb",YearOfLeaving:"2017",Achievements:"Working  with C++ and C#, using the Visual Studio environment for the development of a large and complex application for data protection in Windows Systems. "},{CompanyName:"Facultad de Ciencias Exactas, F\xedsicas y Naturales",specialization:"Software Developer",MonthOfLeaving:"Dec",YearOfLeaving:"2016",Achievements:"Project in python for a data-logger system, developing the communication module that let the data-logger transfer data by many technologies (email, bluetooth, network, GPRS, 3G, SMS, calls) in a smart and flexible way. "}],skillsDescription:"",skills:[{skillname:"Java",level:95},{skillname:"Android",level:90},{skillname:"Python",level:50},{skillname:"Linux",level:92},{skillname:"Git",level:96},{skillname:"C",level:60},{skillname:"C++",level:70},{skillname:"Golang",level:20},{skillname:"Kotlin",level:10},{skillname:"React",level:30},{skillname:"Flutter",level:10},{skillname:"Embedded Android",level:50},{skillname:"Agile Methodology",level:90},{skillname:"Embedded Systems",level:80}],portfolio:[{name:"Android App for Application of Pomodoro Study Tecnique",technologies:"Android, Java",date:"2019",imgurl:"images/portfolio/pomodoro.jpeg"},{name:"Android App for a Kanban Task Organizer",technologies:"Android, Java",date:"2018",imgurl:"images/portfolio/kanban.jpeg"},{name:"Android Infotainment System for an Acura Car",technologies:"Android, Java, C",date:"2017 - Present",imgurl:"images/portfolio/androidInfoteinment.jpg"},{name:"Interface for Data Protection System of Intel",technologies:"C#; C++",date:"2016 - 2017",imgurl:"images/portfolio/dataProtection.jpeg"},{name:"Smart Communicator for Embedded Systems",technologies:"Python",date:"2015 - 2016",imgurl:"images/portfolio/communicator.png",link:"https://github.com/dreinoso/communicator"},{name:"Segmented Processor based on MIPS ",technologies:"Verilog, Python",date:"2013",imgurl:"images/portfolio/mips.png"},{name:"Home Control and Supervision ",technologies:"C, Django",date:"2014",imgurl:"images/portfolio/homeControl.jpg",link:"https://github.com/dreinoso/illumination-control"}],testimonials:[{description:"todo This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},w=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,{resumeData:g}),l.a.createElement(p,{resumeData:g}),l.a.createElement(h,{resumeData:g}),l.a.createElement(f,{resumeData:g}),l.a.createElement(E,{resumeData:g}),l.a.createElement(v,{resumeData:g}))}}]),a}(n.Component),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(l.a.createElement(w,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");b?(function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):k(e)})}}()},8:function(e,a,t){e.exports=t(16)}},[[8,2,1]]]);
//# sourceMappingURL=main.407ed599.chunk.js.map