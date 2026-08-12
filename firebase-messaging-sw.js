
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyACCEuWDQN7mqsrtkA7FR7zmdDvVIPvxdU",
    authDomain: "rp-world-f3fc1.firebaseapp.com",
    databaseURL: "https://rp-world-f3fc1-default-rtdb.firebaseio.com",
    projectId: "rp-world-f3fc1",
    storageBucket: "rp-world-f3fc1.firebasestorage.app",
    messagingSenderId: "789300849203",
    appId: "1:789300849203:web:eeec4b2b106f4839e81146"
});

try {
    const messaging = firebase.messaging();
    messaging.onBackgroundMessage(function(payload) {
        const notificationTitle = payload.notification.title || "Nova Mensagem";
        const notificationOptions = { body: payload.notification.body, icon: './logo.png' };
        self.registration.showNotification(notificationTitle, notificationOptions);
    });
} catch(e) {}
