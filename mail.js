const firebaseConfig = {
  apiKey: "AIzaSyB7xihG4ZrIIEMLsuJlq229rLVL8xI_Ggo",
  authDomain: "insta-89439.firebaseapp.com",
  databaseURL: "https://insta-89439-default-rtdb.firebaseio.com",
  projectId: "insta-89439",
  storageBucket: "insta-89439.appspot.com",
  messagingSenderId: "495342631127",
  appId: "1:495342631127:web:7a8d6a689a41a71a771892"
};

  //   copy your firebase config informations

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");

  saveMessages(name, emailid );

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
