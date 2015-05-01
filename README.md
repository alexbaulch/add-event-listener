#addEventListener
A minature module to provide a helper method for using addEventListener with IE8 support

##Installation
```npm install @alexbaulch/add-event-listener --save```

##Usage
Require the module and assign it to a variable, name is up to you obviously.

```javascript
var addEventListener = require('add-event-listener');

var button = document.querySelector('button');

addEventListener(button, 'click', function() {
    alert('button clicked!'); 
});
```