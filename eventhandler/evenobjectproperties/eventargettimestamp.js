let social = document.getElementById("social-media");
let share = document.getElementById("share-button");
let text = document.getElementById("text");

// Write your code below
let sharePhoto = function (event) {
  event.target.style.display = "none";
  text.innerHTML = event.timeStamp;
};
share.addEventListener("click", sharePhoto);

// Event Object Properties
// JavaScript stores events as Event objects with their related data and functionalities as properties and methods. When an event is triggered, the event object can be passed as an argument to the event handler function.
// sample
// function eventHandlerFunction(event){
//    console.log(event.timeStamp);
// }

// eventTarget.addEventListener('click', eventHandlerFunction);
//
// In the example above, when the 'click' event is triggered on the eventTarget, the eventHandlerFunction receives event, the Event object, which has information related to the 'click' event. Then, we log the time it took for the event to be triggered since the document was loaded by accessing the .timeStamp property of the event object.

// There are pre-determined properties associated with event objects. You can call these properties to see information about the event, for example:

// the .target property to reference the element that the event is registered to.
// the .type property to access the name of the event.
// the .timeStamp property to access the number of milliseconds that passed since the document loaded and the event was triggered.
