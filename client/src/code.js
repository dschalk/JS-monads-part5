import {h, pre} from '@motorcycle/dom'; 

import {subject} from 'most-subject'

var sub = subject
var observer = sub.observer;
var stream = sub.stream;

var Monad = function Monad(z, g) {
  var _this = this;

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
    window[_this.id] = new Monad(a,_this.id);
    return window[_this.id];
  };
};

var mMname = new Monad('Fred', 'mMname');

const monads = h('pre', {style: {color: '#AFEEEE' }}, `  var Monad = function Monad(z, g) {
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
      window[_this.id] = new Monad(a, _this.id);
      return window[_this.id]
    };
  };               

  class MonadIter {                

    constructor() {

      this.p = function() {};

      this.release = function () {
        return this.p();
      }
 
      this.bnd = function (func) {
          this.p = func;
      }
    }
  }; ` )

var fib = h('pre', `  var fib = function fib(x,k) {
    let j = k;
    while (j > 0) {
      x = [x[1], x[0] + x[1]];
      j -= 1;
    }
    return ret('fibonacci ' + k + ' = ' + x[0]);   // An anonymous monad holding the result.
  };
` )  


var driver = h('pre', `  var websocketsDriver = function () {
      return create((add) => {
        socket.onmessage = msg => add(msg)
      })
  };
` )

var messages = h('pre', `  const messages$ = (sources.WS).map(e => 
    mMar.ret(e.data.split(','))
    .bnd(array => mMscores.ret(array[3].split("<br>"))
    .bnd(() => mMsender.ret(mMar.x[2])
    .bnd(() => mMprefix.ret(mMar.x[0])
      .bnd(next, 'CA#$42', mMZ10)
      .bnd(next, 'CB#$42', mMZ11)
      .bnd(next, 'CC#$42', mMZ12)
      .bnd(next, 'CD#$42', mMZ13)
      .bnd(next, 'CE#$42', mMZ14)
      .bnd(next, 'EE#$42', mMZ15)))));
    mMZ10.bnd(() => mM$1
      .ret(mM1.ret([mMar.x[3], mMar.x[4], mMar.x[5], mMar.x[6]]))
      .bnd(() => mM$2.ret([]))
      .bnd(displayInline,'0')
      .bnd(displayInline,'1')
      .bnd(displayInline,'2')
      .bnd(displayInline,'3'));
    mMZ11.bnd(() => mMscbd
      .ret(mMscores.x)
      .bnd(updateScoreboard)
      .bnd(() => mM3.ret([])
      .bnd(() => mM8.ret(0) )));
    mMZ12.bnd(() => mM6
      .ret( mMsender.x + ' successfully logged in.'));
    mMZ13.bnd(() => mMar
      .bnd(splice, 0, 3, mMar)
      .bnd(reduce, (a,b) => a + ", " + b)
      .bnd(() => mMmsg
      .bnd(push, mMsender.x + ': ' + mMar.x, mMmsg)
      .bnd(updateMessages)));
    mMZ14.bnd(() => mMgoals2.ret('The winner is ' + mMname.x ));
    mMZ15.bnd(() => mMgoals2.ret('A player named ' + 
        mMname.x + 'is currently logged in. Page will refresh in 4 seconds.')
      .bnd(refresh));
`  )

var next = h('pre',  `  var next = function next(x, y, mon2) {
    if (x === y) {
      mon2.release();
    }
    return ret(x);  // An anonymous monad with the value of the calling monad.
  } `  )


var Monad$ = h('pre',  `  var Monad$ = function Monad$(z, g) {
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
      window[_this.id] = new Monad$(a,_this.id);
      _this.observer.next(a);
      return window[_this.id];
    };
  };
  `  )

var updateCalc = h('pre',  `  function updateCalc(mM1) { 
    mMZ2.bnd(() => mM13
                 .bnd(score, 1)
                 .bnd(next2, (mM13.x % 5 === 0), mMZ5) 
                 .bnd(newRoll));
    mMZ4.bnd(() => mM13
                 .bnd(score, 3)
                 .bnd(next2, (mM13.x % 5 === 0), mMZ5) 
                 .bnd(newRoll));
        mMZ5.bnd(() => mM13
                     .bnd(score,5)
                     .bnd(v => mM13.ret(v)
                     .bnd(next, 25, mMZ6)));
            mMZ6.bnd(() => mM9.bnd(score2) 
                         .bnd(next,3,mMZ7));
               mMZ7.bnd(() => mM13.bnd(winner));               
    mM3.bnd(x => mM7
                 .ret(calc(x[0], mM8.x, x[1]))
                 .bnd(next, 18, mMZ4)  
                 .bnd(next, 20, mMZ2) // Releases mMZ2 (above)
                 .bnd(() => mM$1.ret(mM1.bnd(push, mM7.x, mM1))
                 .bnd(() => mM3
                 .ret([])
                 .bnd(() => mM4
                 .ret(0).bnd(mM8.ret)
                 .bnd(cleanup)
                 ))))
  }
  `  )

var nums = h('pre',  `  
  const numClick$ = sources.DOM
    .select('.num').events('click');
     
  const numClickAction$ = numClick$.map(e => {
    console.log(e);
    if (mM3.x.length < 2) {
      mM3.bnd(push, e.target.innerHTML, mM3)
      ret(mMhistorymM1.x[mMindex2.x])
      .bnd(spliceRemove, e.target.id, mM1)
      .bnd(v => {e.target.innerHTML = ''; mM$1.ret(ret(v))})
      if (mM3.x.length === 2 && mM8.x !== 0) {
        updateCalc(mM1);
      }
    };
  });

  const opClick$ = sources.DOM
    .select('.op').events('click');

  const opClickAction$ = opClick$.map(e => {
    mM8.ret(e.target.textContent);
    if (mM3.x.length === 2) {
      updateCalc(mM1);
    }
  });

  const mM$1Action$ = mM$1.stream.map(v => {
    if (Array.isArray(v.x)) {
      mMhistorymM1.bnd(spliceAdd, mMindex2.x, v.x, mMhistorymM1);
      document.getElementById('0').innerHTML = (mMhistorymM1.x[mMindex2.x])[0]; 
      document.getElementById('1').innerHTML = (mMhistorymM1.x[mMindex2.x])[1]; 
      document.getElementById('2').innerHTML = (mMhistorymM1.x[mMindex2.x])[2]; 
      document.getElementById('3').innerHTML = (mMhistorymM1.x[mMindex2.x])[3]; 
      show2(4000)
    }
    else {
      console.log('mM$1.stream is providing defective data to mM$1Action');
    }
  });
  `  )

  const arrayFuncs = h('pre',  `  var push = function push(y,v,mon) {
      if (Array.isArray(y)) {
        let ar = [];
        let keys = Object.keys(y);
        for (let k in keys) {ar[k] = y[k]};
        ar.push(v);
        return mon.ret(ar);  
      }
      console.log('The value provided to push is not an array');
      return ret(y);
    };
    
    var spliceRemove = function splice(x, j, mon) {
      if (Array.isArray(x)) {
        let ar = [];
        let keys = Object.keys(x);
        for (let k in keys) {ar[k] = x[k]};
        ar.splice(j,1);
        return mon.ret(ar);  
      }
      console.log('The value provided to spliceRemove is not an array');
      return ret(x);
    };
    
    var spliceAdd = function splice(x, index, value, mon) {
      if (Array.isArray(x)) {
        let ar = [];
        let keys = Object.keys(x);
        for (let k in keys) {ar[k] = x[k]};
        ar.splice(index, 0, value);
        return mon.ret(ar);  
      }
      console.log('The value provided to spliceAdd is not an array');
      return ret(x);
    };
    
    var splice = function splice(x, start, end, mon) {
      if (Array.isArray(x)) {
        let ar = [];
        let keys = Object.keys(x);
        for (let k in keys) {ar[k] = x[k]};
        ar.splice(start, end);
        return mon.ret(ar);  
      }
      console.log('The value provided to spliceAdd is not an array');
      return ret(x);
    };
  `  )

var show2 = h('pre',  `  const show2 = function show(x) {
    let number0 = document.getElementById('0');
    let number1 = document.getElementById('1');
    let number2 = document.getElementById('2');
    let number3 = document.getElementById('3');
  
    if (mMhistorymM1.x[mMindex2.x].length === 0) {
      number0.style.display = 'none' 
      number1.style.display = 'none'   
      number2.style.display = 'none'   
      number3.style.display = 'none'   
    }
  
    if (mMhistorymM1.x[mMindex2.x].length === 1) {
      number0.style.display = 'inline' 
      number1.style.display = 'none'   
      number2.style.display = 'none'   
      number3.style.display = 'none'   
    }
  
    if (mMhistorymM1.x[mMindex2.x].length === 2) {
      number0.style.display = 'inline' 
      number1.style.display = 'inline'   
      number2.style.display = 'none'   
      number3.style.display = 'none'   
    }
  
    if (mMhistorymM1.x[mMindex2.x].length === 3) {
      number0.style.display = 'inline' 
      number1.style.display = 'inline'   
      number2.style.display = 'inline'   
      number3.style.display = 'none'   
    }
  
    if (mMhistorymM1.x[mMindex2.x].length === 4) {
      number0.style.display = 'inline' 
      number1.style.display = 'inline'   
      number2.style.display = 'inline'   
      number3.style.display = 'inline'   
    }
    return ret(x);
  }; `  )

  var travel = h('pre',  `  const forwardClick$ = sources.DOM
    .select('#forward2').events('click');

    const backClick$ = sources.DOM
      .select('#back2').events('click');
  
    const forwardClickAction$ = forwardClick$.map(() => {
      if (mMindex2.x < (mMhistorymM1.x.length - 1)) {
        inc(mMindex2.x, mMindex2)
        .bnd(() => mM$3.ret('Hello'))
      }
    });
  
    const backClickAction$ = backClick$.map(() => {
      if (mMindex2.x > 0) {
        dec(mMindex2.x, mMindex2)
        .bnd(() => mM$3.ret('You bet!'))
      }
    });
  
    const mM$3Action$ = mM$3.stream.map(v => {
      document.getElementById('0').innerHTML = (mMhistorymM1.x[mMindex2.x])[0]; 
      document.getElementById('1').innerHTML = (mMhistorymM1.x[mMindex2.x])[1]; 
      document.getElementById('2').innerHTML = (mMhistorymM1.x[mMindex2.x])[2]; 
      document.getElementById('3').innerHTML = (mMhistorymM1.x[mMindex2.x])[3]; 
      show2(7);
    })
  `  )

  var ret = h('pre',  `  var ret = function ret(v) {
    var mon = new Monad(v, 'anonymous');
    return mon;
  }
  `  )

  var C42 = h('pre',  `  mMZ10.bnd(() => mM$1
    .ret(mM1.ret([mMar.x[3], mMar.x[4], mMar.x[5], mMar.x[6]]))
    .bnd(() => mM$2.ret([]))
    .bnd(displayInline,'0')
    .bnd(displayInline,'1')
    .bnd(displayInline,'2')
    .bnd(displayInline,'3'));
  `  )

  var p6 = h('pre',  `  
  `  )

  var p5 = h('pre',  `  
  `  )

  var p4 = h('pre',  `  
  `  )

  var p3 = h('pre',  `  
  `  )

  var p2 = h('pre',  `  
  `  )

  var p1 = h('pre',  `  
  `  )

  var p7 = h('pre',  `  
  `  )





export default {monads, fib, driver, messages, next, Monad$, updateCalc, stream, arrayFuncs, travel, nums, show2, ret, C42 }
