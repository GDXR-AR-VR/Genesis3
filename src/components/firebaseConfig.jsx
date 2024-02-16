// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { setDoc, collection ,doc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP63Jr4i_Z0k1sB-IiDSHLzlCgf6CdjpA",
  authDomain: "genesis-iii.firebaseapp.com",
  projectId: "genesis-iii",
  storageBucket: "genesis-iii.appspot.com",
  messagingSenderId: "826112030743",
  appId: "1:826112030743:web:60ab9ff12977bdf8934452",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const newRecord = async (info) => {
  try {
    const docRef = await setDoc(doc(db, "sponsorList", info.name), info);
    return "success";
  } catch (e) {
    console.error("Error adding document: ", e);
    return "fail";
  }
};

export default newRecord;
// Initialize Firebase
