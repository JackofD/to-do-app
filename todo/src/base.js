import Rebase from 're-base';
import firebase from 'firebase';

//OLD REBASE/FIREBASE SYNTAX
// const base = Rebase.createClass({
//   apiKey: "AIzaSyC9BDOy0eGnFc2-XdhrW_1MOGf-MdZr3LI",
//   authDomain: "toudo-bf0a4.firebaseapp.com",
//   databaseURL: "https://toudo-bf0a4.firebaseio.com"
// });

// export default base;

//NEW FIREBASE SYNTAX
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC9BDOy0eGnFc2-XdhrW_1MOGf-MdZr3LI",
  authDomain: "toudo-bf0a4.firebaseapp.com",
  databaseURL: "https://toudo-bf0a4.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export { firebaseApp };

//This is a default export
export default base;