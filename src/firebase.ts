// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAapK6QXTwxxQXc2_5wHx30Ia27iCztuBQ",
  authDomain: "santhosh-portfolio-1e3f3.firebaseapp.com",
  projectId: "santhosh-portfolio-1e3f3",
  storageBucket: "santhosh-portfolio-1e3f3.firebasestorage.app",
  messagingSenderId: "551403562147",
  appId: "1:551403562147:web:464c0f2f2251ee08610b16",
  measurementId: "G-BM03143N08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
