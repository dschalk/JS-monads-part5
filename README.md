#JS-monads-part5

This page picks up where [JS-monads-part4](http://schalk.net:3099) left off, but with the Monad "ret()" method re-defined, and a new type of monad named "Monad$".

## One Big Mutable Object    

For any instance of Monad m, m.ret(v) gives m the value v. In other words, m.ret(v) results in m.x === v. This result can be accomplished through mutation by setting m.x = v, but we don't do that. The m.ret(v) creates a new Monad instance named "m" with value v.

In JS-monads-part4 the Monad instances created by the "ret()" method were in global scope. Like their originally created instances, they were attributes of window. In this, the fifth part of the series, I retain all of the benefits of a "no-mutations" policy and gain some advantage by attaching new monad instances created by "ret()" to the one and only object that I mutate, which I named "O". Instead of mutating window, I mutate O. 

The originally created instances of Monad and Monad$ always retain their original values. All updates are in the O name space. An original instance, say m, can do its work unincumbered. The latest value obtained by m.ret() is O.m.x, which can use its ret() method to transform the value that it holds. I find the code easier to reason about when I can see which instances are workers and which instances contain mission critical information by simply observing the presence or absence of the "O." prefix. 

References to historical instances of Monad which share the same name and id can still be stored in variables, arrays, etc. It is easier to reason about code now that we retain the never-changing original version of a Monad instance while having the option of doing whatever we want with the O name space clones created by ret(). Here is the new definition:
```javascript                 
  var Monad = function Monad(z, g) {
    var _this = this;

    uthis.x = z;
    if (arguments.length === 1) {
      this.id = 'anonymous';
    } else {
      this.id = g;
    };

    this.bnd = function (func, ...args) {
       return func(_this.x, ...args);
    };

    this.ret = function (a) {
      O[_this.id] = new Monad(a, _this.id);
      return O[_this.id]
    };
  };               
```
The originally defined Monad instances are useful for manipulating information. Monads in the O namespace, the creations of the ret() method, are useful for storing application data.

## Monad$
This fifth part of the monad series features a souped up version of ret(). It is a method of the new monad constructor named "Monad$". ret() not only creates new instances in O, it also pushes ret's argument in a stream for immediate use anywhere in the application. The Monad$ instance mM$1 causes the game number display history to update each time it calls its ret() method on an array of numbers. in updateCalc, O.mM$1 helps compute results when two numbers and an operator have been selected. Here is the definition of Monad$:

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
  
    this.bnd = function (func, ...args) {
       return func(_this.x, ...args);
    };
  
    this.ret = function (a) {
      O[_this.id] = new Monad$(a,_this.id);
      _this.observer.next(a);
      return O[_this.id];
    };
  };
```




.
.
.

