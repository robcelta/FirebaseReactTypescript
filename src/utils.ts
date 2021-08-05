// v9 compat packages are API compatible with v8 code
import {initializeApp} from 'firebase/app';
import {getAuth, signInWithPopup, signOut} from 'firebase/compat/auth';
import {getFirestore, doc} from 'firebase/compat/firestore';

const firebaseApp = initializeApp({
	apiKey: "AIzaSyBq-wiolJ-acHkqmp27iJ74DOmL0saWhm8",
	authDomain: "fir-practice-react-94bfd.firebaseapp.com",
	databaseURL: "https://fir-practice-react-94bfd.firebaseio.com",
	projectId: "fir-practice-react-94bfd",
	storageBucket: "fir-practice-react-94bfd.appspot.com",
	messagingSenderId: "116113417835",
	appId: "1:116113417835:web:a055f20c195e15faed332e",
	measurementId: "G-D69KJFDD06",
});

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);