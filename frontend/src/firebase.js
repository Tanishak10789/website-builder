import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aiwebsitebuilder-82844.firebaseapp.com",
  projectId: "aiwebsitebuilder-82844",
  storageBucket: "aiwebsitebuilder-82844.firebasestorage.app",
  messagingSenderId: "167259396566",
  appId: "1:167259396566:web:63c7939b4f70ecbd71ec77",
  measurementId: "G-J7F94Q6DBZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}