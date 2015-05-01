/**
 * @module Event listener
 * @param  {DOM Element} el - dom element to attach the event to
 * @param  {String} eventName - name of the event
 * @param  {function} handler - function to be fired when the event is triggered
 */
module.exports = function(el, eventName, handler) {
    // check to see if the browser supports addEventListener
    if (el.addEventListener) {
        // attach event listener
        el.addEventListener(eventName, handler);
    } else {
        // otherwise fire attachEvent
        el.attachEvent('on' + eventName, function() {
            handler.call(el);
        });
    }
};