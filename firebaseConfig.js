import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCvoNqpoGcKmpQX9jxJM_pcgdCvr5PZNQA",
  authDomain: "pc-master-b9db9.firebaseapp.com",
  projectId: "pc-master-b9db9",
  storageBucket: "pc-master-b9db9.appspot.com",
  messagingSenderId: "56886089452",
  appId: "1:56886089452:web:822f1e18e72ecf4f61f7c9",
  measurementId: "G-HWLJLJBNBH"
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };