// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth"
// import { getFirestore } from "firebase/firestore" // 7/7/23

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA53gyXf46JqltrQ5qZKAkIVkzsqRiPE6Q",
//   authDomain: "movienetwork-7990f.firebaseapp.com",
//   projectId: "movienetwork-7990f",
//   storageBucket: "movienetwork-7990f.appspot.com",
//   messagingSenderId: "793259206750",
//   appId: "1:793259206750:web:75c0f7f64f9fc9feb32ccf"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app)
// const db = getFirestore(app);

// export default auth


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA53gyXf46JqltrQ5qZKAkIVkzsqRiPE6Q",
  authDomain: "movienetwork-7990f.firebaseapp.com",
  projectId: "movienetwork-7990f",
  storageBucket: "movienetwork-7990f.appspot.com",
  messagingSenderId: "793259206750",
  appId: "1:793259206750:web:75c0f7f64f9fc9feb32ccf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
