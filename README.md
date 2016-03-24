#JS-monads-part5

This demonstration picks up where [JS-monads-part4](http://schalk.net:3099) left off. It introduces a third monad constructor named "Monad$". Here is the definition:

```javascript
  var Monad$ = function Monad$(z, g) {
    var _this = this;
    
    this.subject = sub();
    this.observer = this.subject.observer;
    this.stream = this.subject.stream;
    this.x = z;
  
    if (arguments.length === 1) {
      this.id = 'anonymous';
    } else {
      this.id = g;
    }
  
    this.bnd = function (func) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
  
      return func.apply(undefined, [_this.x].concat(args));
    };
  
    this.ret = function (a) {
      window[_this.id] = new Monad$(a,_this.id);
      _this.observer.next(a);
      return window[_this.id];
    };
  };
```
The "most" streams facilitate taking back game moves, traversing the whole history of play if the BACK button is clicked enough times. If a player in your group rolls the dice before you are done with a computation sequence, you can go back and finish what you were doing.

