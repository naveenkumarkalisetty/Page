const button = document.getElementById('notification-btn');

button.addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        if (perm === 'granted') {
            new Notification("Left-over Food", {
                body: "Food is available come and claim it!",
                icon: "https://cdn-icons-png.flaticon.com/512/8279/8279643.png",
                tag:"welcome Message" // overrides the notification rather than stacking them top on other
            })
        } else {
            alert("Please allow the messages");
        }
    });
})

let notification;
let interval;
// document.addEventListener("visibilitychange", () => {
//     if (document.visibilityState === 'hidden') {
//         const leaveDate = new Date();
//         interval = setInterval(() => {
//             notification = new Notification("come back again", {
//                 body: `You have been gone for ${ (new Date() - leaveDate) / 1000 } seconds`,
//                 tag:"Come back"
//             });
//         }, 100) 
        
//     } else {
//         if (notification) notification.close();
//         clearInterval(interval);
//     }
// })