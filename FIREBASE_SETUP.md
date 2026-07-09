# 🔥 Firebase Setup Guide for ITC Learning Portal

Follow these steps to create your Firebase project and hook it up to your website. This should take about 5 minutes.

---

## Step 1: Create a Firebase Project

1. Open your browser and go to **[console.firebase.google.com](https://console.firebase.google.com)**
2. Sign in using your Google Account (`rrjrenomeron@mlgcl.edu.ph`)
3. Click **"Create a project"** (or **"Add project"**)
4. Enter the project name: **`itc-learning-portal`** (or another name you prefer)
5. **Disable** Google Analytics for this project (it is not needed) and click **Create project**
6. Wait for the setup to complete and click **Continue**

---

## Step 2: Register a Web App

1. On the project overview page, click the **Web icon** (`</>`) to add an app
2. Enter the app nickname: **`ITC Learning Portal`**
3. Click **Register app**
4. Copy the values from the `firebaseConfig` object shown on the screen:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "itc-learning-portal.firebaseapp.com",
  projectId: "itc-learning-portal",
  storageBucket: "itc-learning-portal.firebasestorage.app",
  messagingSenderId: "...",
  appId: "..."
};
```
5. Paste these copied credentials directly into your project's configuration file at:
   👉 [js/firebase-config.js](file:///c:/Users/ordnr/Desktop/ITC/js/firebase-config.js)
6. Click **Continue to console**

---

## Step 3: Enable Google Sign-In Provider

1. In the Firebase Console left-hand menu, go to **Build** → **Authentication**
2. Click **Get started**
3. Select **Google** from the sign-in providers list
4. Toggle the **Enable** switch to ON
5. Choose your support email: `rrjrenomeron@mlgcl.edu.ph`
6. Click **Save**

---

## Step 4: Add Authorized Domain for Google Sign-In

To allow sign-ins from your published website, we must whitelist your GitHub Pages domain:
1. In **Authentication**, select the **Settings** tab
2. Scroll to the **Authorized domains** list
3. Click **Add domain**
4. Enter: **`rreno1.github.io`**
5. Click **Add**

*(Note: `localhost` is already in the list by default, which allows you to test sign-in locally on your computer!)*

---

## Step 5: Initialize Cloud Firestore Database

1. In the left-hand menu, go to **Build** → **Firestore Database**
2. Click **Create database**
3. Select your Database Location: **`asia-southeast1` (Singapore)** for best performance in the Philippines
4. Select **Start in test mode**
5. Click **Create**

---

## Step 6: Publish Security Rules

To secure your students' quiz grades and profiles, publish these security rules:
1. In the Firestore tab, click **Rules** at the top
2. Replace all existing text with the following rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Helper function: is the current user an admin?
    function isAdmin() {
      return request.auth != null && 
        (request.auth.token.email == 'rrjrenomeron@mlgcl.edu.ph' || 
         request.auth.token.email == 'rrenomeronjr@gmail.com');
    }
    
    // Users collection
    match /users/{userId} {
      // Any signed-in user can read (needed for admin dashboard)
      allow read: if request.auth != null;
      // Users can write their own doc, admin can write any doc (for approvals)
      allow write: if request.auth != null && 
        (request.auth.uid == userId || isAdmin());
      
      // Quiz results subcollection
      match /quizResults/{moduleId} {
        allow read: if request.auth != null;
        allow write: if request.auth != null && request.auth.uid == userId;
      }
    }
  }
}
```
3. Click **Publish**

---

## Step 7: Push the Config to GitHub

Once you save [js/firebase-config.js](file:///c:/Users/ordnr/Desktop/ITC/js/firebase-config.js) with your real credentials, commit it and push it to your repository:

```bash
git add js/firebase-config.js
git commit -m "Configure Firebase keys"
git push origin main
```

Your CC 101 interactive portal is now ready! 🚀
