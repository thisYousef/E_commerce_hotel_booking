// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signOut, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, fetchSignInMethodsForEmail, EmailAuthProvider, linkWithCredential } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};
console.log(process.env.REACT_APP_FIREBASE_API_KEY,
);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.languageCode = "en";
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      return { user, token };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      return { errorCode, errorMessage, email, credential };
    });
};
export const signInWithGitHub = () => {
  return signInWithPopup(auth, githubProvider)
    .then((result) => {
      const user = result.user;
      return { user };
    })
    .catch(async (error) => {
      if (error.code === 'auth/account-exists-with-different-credential') {
        const email = error.customData.email;
        const pendingCredential = GithubAuthProvider.credentialFromError(error);
        const signInMethods = await fetchSignInMethodsForEmail(auth, email);

        if (signInMethods.length) {
          // Ask user to sign in with existing provider
          let provider;
          if (signInMethods.includes('google.com')) {
            provider = googleProvider;
          } else if (signInMethods.includes('github.com')) {
            provider = githubProvider;
          } else if (signInMethods.includes('password')) {
            provider = new EmailAuthProvider();
          }
          if (provider) {
            try {
              const userCredential = await signInWithPopup(auth, provider);
              await linkWithCredential(userCredential.user, pendingCredential);
              return { user: userCredential.user };
            } catch (linkError) {
              console.error("Error linking credentials:", linkError);
            }
          }
        }
      } else {
        console.error("GitHub sign-in error:", error);
      }
    });
};
export const logout = () => {
  return signOut(auth);
};

export default app;