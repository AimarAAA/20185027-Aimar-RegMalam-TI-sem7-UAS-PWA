var cacheName = 'abuhasanalanshori';
var filesToCache = [
  '/',
  './index.html',
  './index.js',
  './assets/js/main.js',
  './manifest.json',
  './assets/css/bootstrap.min.css',
  './assets/css/main.css',
  './favicon.ico',
  './assets/images/profile-image.png',
  './assets/images/hello-icon-152.png',
  './assets/images/hello-icon-144.png',
  './assets/js/jquery.min.js',
  './assets/js/bootstrap.bundle.min.js',
  './assets/js/main_pwa.js',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

firebase.initializeApp({
  messagingSenderId: "69943007877"
});

import { initializeApp } from 'node_modules/firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyC77Stsa0dK3BiC4OIMZN4Je1pDe1LIPGo",
  authDomain: "abuhasan-pwa.firebaseapp.com",
  databaseURL: "https://abuhasan-pwa-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "abuhasan-pwa",
  storageBucket: "abuhasan-pwa.appspot.com",
  messagingSenderId: "69943007877",
  appId: "1:69943007877:web:4d5f08658a0c7bcdcb67ec",
  measurementId: "G-SYMHBYBKX6"
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);
getToken(messaging, {vapidKey: 'BJ2IUzeG1R7NiaRebOtDjgKeb-d3NG-3R66MPlg4qpcNWkxDfk0YqoW6PsbIZ64LR35UoS8-nlG5zFI19lDYOik'})
.then((currentToken) => {
  if (currentToken) {
    console.log('currentToken: '. currentToken);
  } else {
    console.log('ora metu')
  }
})

