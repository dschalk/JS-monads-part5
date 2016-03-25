import Cycle from '@motorcycle/core';
import {h, p, span, h1, h2, h3, br, div, label, input, hr, makeDOMDriver} from '@motorcycle/dom'; 
import {just, create, merge, combine, fromEvent, periodic, observe, delay, filter, of} from 'most'; 
import code from './code.js'; 
import {subject} from 'most-subject'

//window.subject = subject;
//window.create = create;

var sub = subject
var observer = sub.observer;
var stream = sub.stream;

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

var mM$1 = new Monad$([], 'mM$1');
var mM$2 = new Monad$([], 'mM$2');
var mM$3 = new Monad$([], 'mM$3');

var tempStyle = {display: 'inline'}
var tempStyle2 = {display: 'none'}
mM6.ret('');

function createWebSocket(path) {
    let host = window.location.hostname;
    if(host == '') host = 'localhost';
    let uri = 'ws://' + host + ':3077' + path;
    let Socket = "MozWebSocket" in window ? MozWebSocket : WebSocket;
    return new Socket(uri);
}

const socket = createWebSocket('/');

const websocketsDriver = function () {
    return create((add) => {
      socket.onmessage = msg => add(msg)
    })
}

var mM1ob = {'mM1': mM1};

const unitDriver = function () {
  return periodic(1000, 1);
}

mM1.ret([0,0,0,0]);
mM3.ret([]);

window.onload = function (event) {
    console.log('onopen event: ', event);
};

function main(sources) {

  mMfib.ret([0,1]);
  mMpause.ret(0);

  const messages$ = (sources.WS).map(e => 
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
      .ret([mMar.x[3], mMar.x[4], mMar.x[5], mMar.x[6]])
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
  
  const loginPress$ = sources.DOM
    .select('input.login').events('keypress');

  const loginPressAction$ = loginPress$.map(e => {
    let v = (e.target.value);
    if (v == '' ) {
      return;
    } 
    if( e.keyCode == 13 ) {
      socket.send("CC#$42" + v);
      mMname.ret(v.trim())
      mM3.ret([]).bnd(mM2.ret);
      e.target.value = '';
      tempStyle = {display: 'none'}
      tempStyle2 = {display: 'inline'}
    }
  });

  const groupPress$ = sources.DOM
    .select('input.group').events('keypress');

  const groupPressAction$ = groupPress$.map(e => {
    let v = e.target.value;
    if (v == '' ) {
      return;
    } 
    if( e.keyCode == 13 ) 
      mMgroup.ret(e.target.value);
      socket.send(`CO#$42,${e.target.value},${mMname.x.trim()},${e.target.value}`);
  });

  var addS = function addS (x,y) {
    if (typeof x === 'number') {
      return ret(x + y);
    }
    else if (typeof x.product === 'number') {
      return ret(x.product + y);
    }
    else console.log('Problem in addS');
  }
  
  const messagePress$ = sources.DOM
    .select('input.inputMessage').events('keydown');

  const messagePressAction$ = messagePress$.map(e => {
    if( e.keyCode == 13 ) {
      socket.send(`CD#$42,${mMgroup.x.trim()},${mMname.x.trim()},${e.target.value}`);
      e.target.value = '';
    }
  });

  const numClick$ = sources.DOM
    .select('.num').events('click');
     
  const numClickAction$ = numClick$.map(e => {
    console.log(e);
    if (mM3.x.length < 2) {
      mM3.bnd(push, e.target.innerHTML, mM3)
      mM$1.ret(
        ret(mMhistorymM1.x[mMindex2.x])
        .bnd(spliceRemove, e.target.id, mM1).x
      )
      if (mM3.x.length === 2 && mM8.x !== 0) {
        updateCalc(mM1);
      }
    };
  }).startWith(mM1.x[0]);

  const opClick$ = sources.DOM
    .select('.op').events('click');

  const opClickAction$ = opClick$.map(e => {
    mM8.ret(e.target.textContent);
    if (mM3.x.length === 2) {
      updateCalc(mM1);
    }
  })

  const rollClick$ = sources.DOM
    .select('.roll').events('click');

  const rollClickAction$ = rollClick$.map(e => {  
    mM13.ret(mM13.x - 1);
    socket.send('CG#$42,' + mMgroup.x.trim() + ',' + mMname.x.trim() + ',' + -1 + ',' + mMgoals.x);
    socket.send(`CA#$42,${mMgroup.x},${mMname.x.trim()},6,6,12,20`);
  });

  const fibPress$ = sources.DOM
    .select('input#code').events('keydown');

  const fibPressAction$ = fibPress$.map(e => {
    let v = e.target.value;
    if (v == '' ) {
      return;
    } 
    if( e.keyCode == 13 && Number.isInteger(v*1) ) {
      var result = mMfib.bnd(fib,v).x;
      mM19.ret(result);
    }
    if( e.keyCode == 13 && !Number.isInteger(v*1) ) mM19.ret("You didn't provide an integer");
  });

  const forwardClick$ = sources.DOM
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

  const mM$1Action$ = mM$1.stream.map(v => {
    if (Array.isArray(v)) {
      mMhistorymM1.bnd(spliceAdd, mMindex2.x, v, mMhistorymM1);
      document.getElementById('0').innerHTML = (mMhistorymM1.x[mMindex2.x])[0]; 
      document.getElementById('1').innerHTML = (mMhistorymM1.x[mMindex2.x])[1]; 
      document.getElementById('2').innerHTML = (mMhistorymM1.x[mMindex2.x])[2]; 
      document.getElementById('3').innerHTML = (mMhistorymM1.x[mMindex2.x])[3]; 
      cleanup(42)
    }
    else {
      console.log('mM$1.stream is providing defective data to mM$1Action');
    }
  });

  const mM$3Action$ = mM$3.stream.map(v => {
    document.getElementById('0').innerHTML = (mMhistorymM1.x[mMindex2.x])[0]; 
    document.getElementById('1').innerHTML = (mMhistorymM1.x[mMindex2.x])[1]; 
    document.getElementById('2').innerHTML = (mMhistorymM1.x[mMindex2.x])[2]; 
    document.getElementById('3').innerHTML = (mMhistorymM1.x[mMindex2.x])[3]; 
    cleanup('nothing much');
  })

  const mM$2Action$ = mM$2.stream.map(v => {
    mMhistorymM3.bnd(push, v, mMhistorymM3);
    console.log('From mM$2.stream: ', v);
  })

  const calcStream$ = merge(mM$3Action$, mM$2Action$, mM$1Action$, backClickAction$, forwardClickAction$, fibPressAction$, groupPressAction$, rollClickAction$, messagePressAction$, loginPressAction$, messages$, numClickAction$, opClickAction$);

  return {
    DOM: 
      calcStream$.map(() => 
      h('div.content', [ 
      h('br'),
      h('h2', 'JS-monads-part5 - Specialized Monads' ),
      h('br'),
      h('span.tao',  ' In this installment of the JS-monads series,' ),
      h('span', 'I demonstrate the tools I use for front-end web application development. The server is built on top of the '  ),
      h('a', {props: {href: 'https://github.com/yesodweb/wai/tree/master/wai-websockets' }}, 'Wai Websockets server' ), 
      h('span', ' It is very easy to modify whenever the need arises because the Haskell Programming Language provides list comprehension and pattern matching and, when used as intended, is not likely to surprise you with unintended side effects. The front end is a ' ),
      h('a', {props: {href: 'https://github.com/motorcyclejs' }},'Motorcyclejs' ), 
      h('span', ' application. Motorcyclejs is Cycle.js, only using '  ),  
      h('a', {props: {href: 'https://github.com/paldepind/snabbdom' }},'Snabbdom' ), 
      h('span',  ' instead of "virtual-dom", and ' ), 
      h('a', {props: {href: 'https://github.com/cujojs/most' }},'Most' ), 
      h('span',  ' instead of "RxJS".'  ), 
      h('br'),
      h('br'),
      h('span.tao', 'The rules and the code for the '  ),
      h('span',  ' game used in this demonstration are discussed in earlier installments of this series, which can be found at  ' ),
      h('a', {props: {href: 'http://schalk.net' }},'http://schalk.net' ), 
      h('span', ' The code repository is at '   ),
      h('a', {props: {href: 'https://github.com/dschalk/JS-monads-part5' }},'Code.' ),
      h('span', ' Here are the basic rules:' ), 
      h('p', 'RULES: If clicking two numbers and an operator (in any order) results in 20 or 18, the score increases by 1 or 3, respectively. If the score becomes 0 mod 5, 5 points are added. A score of 25 results in one goal. That can only be achieved by arriving at a score of 20, which jumps the score to 25. Directly computing 25 results in a score of 30, and no goal. Each time ROLL is clicked, one point is deducted. Three goals wins the game. '    ),
      h('br'),
      h('br'),
      h('button#0.num'),
      h('button#1.num'),
      h('button#2.num'),
      h('button#3.num'),
      h('br'),
      h('button#4.op', 'add'  ),
      h('button#5.op', 'subtract' ),
      h('button#5.op', 'mult' ),
      h('button#5.op', 'div' ),
      h('button#5.op', 'concat' ),
      h('br'),
      h('button.roll', {style: tempStyle2}, 'ROLL' ),
      h('br'),
      h('button#back2', {style: tempStyle2}, 'FORWARD'  ),
      h('button#forward2', {style: tempStyle2}, 'BACK'  ),
      h('br'),
      h('div.winner', mMgoals2.x+''  ),
      h('p.login', {style: tempStyle}, 'Please enter some name.'  ),
      h('br'),
      h('input.login', {style: tempStyle }   ),
      h('p', mM6.x.toString() ),
      h('p.group', {style: tempStyle2}, 'Change group: '  ),
      h('input.group', {style: tempStyle2} ),
      h('div.messages', [
      h('p', {style: tempStyle2}, 'Enter messages here: '  ),
      h('input.inputMessage', {style: tempStyle2} ),
      h('div', mMmessages.x  ) ]),
      h('p.group2', [ 
      h('br'),  
      h('span',  'Group: ' + mMgroup.x ),
      h('br'),
      h('span',  'Goals: ' + mMgoals.x ),
      h('br'),
      h('span',  'Name: ' + mMname.x ),
      h('br'),
      h('div.scoreDisplay', [
      h('span', 'player[score][goals]' ),
      h('div', mMscoreboard.x ) ]) ]),
      h('span.tao', 'People in the same group, other than solo, share text messages and dice rolls. '  ),
      h('hr'),
      h('h2',  'Streams and Time Travel'  ),
      h('p',  'The monads presented in this series are simple and flexible. The reference at the bottom of this page presents the definitions of the two basic monads. There isn\'t much to them, but they are great for streamlining and organizing code. If you want error handling, enforcement of type rules, or something specific to your own application, just modify the basic Monad constructor, give it a new name, and start creating specialized monad instances. Monad$ as a good example. It uses "subject" from the "most" library, and is defined as follow: '  ),
   code.Monad$,
   h('p',  'The function "ret" is frequently used to create instances of Monad. Here is the definition of "ret": '  ),
   code.ret,
     h('p', 'mM$1, an instance of Monad$, guides the flow of game play data. mM$1.ret(some array) is used to feed arrays into mM$1.stream for use in updating the number display in the browser, and for populating mMhistorymM1, which is used for traversing the numbers display. Here are the functions that handle the flow of information when a player clicks a number or an operator: ' ),     
     code.nums,
     h('p', ' mM$3 assists in the traversal of game display history. The data carried in mM$3.stream is of no consequence, so the argument provided to mM$3.ret() doesn\'t matter either. The value of mMindex2 changes when BACK or FORWARD are clicked, and that affects the browser display the next time the DOM is patched. mM$3.ret is called in order to trigger a DOM. Here is the code: ' ), 
     code.travel,
     h('p', ' cleanup() keeps "undefined" from cluttering the display. ' ),
     code.cleanup,
     h('p', ' For history traversal, it is important to avoid mutating the underlying array when push, shift, and the other Javascript array methods are used. Here are some of the array functions that are provided to the Monad "bnd" method: ' ),
    code.arrayFuncs, 
     h('p', ' mM1 can be conveniently updated by making it the final argument in these functions. ' ), 
     h('p', 'The "ret()" method updates monads without mutating them. You can press F12 and, in the browser console, try things like: '  ),
     h('pre.indent',  'mM1.x === mM1.bnd(v => mM1.ret(v).bnd(mM1.ret)).x'  ), 
     h('p', ' but '  ), 
     h('pre.indent',  'mM1 !== mM1.bnd(v => mM1.ret(v).bnd(mM1.ret))'  ),
     h('p', 'to verify this feature. As is apparent in the definition of "Monad", the "ret" method returns a new monad with the calling monad\'s name and whatever value is provided to ret. When a monad calls ret on its own value, for instance with "mM1.bnd(mM1.ret)" or "mM1.ret(mM1.x)", the returned monad is nearly indistinguishable from the calling monad, but it resides in a different location in memory, and mM1 === mM1.bnd(mM1.ret) returns false.' ),
      h('hr'),
      h('h2', 'Miscellaneous Functions'  ),
      h('p', 'The function responsible for updating scores is shown below. It gets called whenever two numbers and an operator have been selected, in any order.' ),  
      code.updateCalc,
      h('p', ' Note the seventh line up from the bottom. The newly computed value mM7.x gets pushed into mM1.x and mM$1.ret() puts the updated mM1 into mM$1.stream. mM$1Action$ observes mM$1.stream. It is merged into the stream that feeds information into the virtual DOM prior to the next patch. '  ),
      h('p', 'That is how a DOM description gets returned from the "main" function. Data comes in through main\'s only argument: "sources". sources.WS provides websockets messages to the messages stream, which parses and acts upon them as follows: '  ),  
      code.messages,
      h('p', 'When a message prefixed by "CA#$42" arrives from the server, the following code is executed: '  ),  
      code.C42,
      h('p', ' As always, mM$1.ret() is called on a monad whose value is an array. Sometimes, as here, that monad is mM1. Other times it is an anonymous monad manufactured by the sand-alone "ret()" function. The name doesn\'t matter because the names and id\'s of the monads get left behind when mM$1Action$ makes its deep copyies of the monads\' values. Those deep copies are what go into mMhistorymM1. ' ), 
      h('hr'),
      h('h2', 'A Little More Background'  ),
      h('p', 'Here are the basic monad constructors: '   ),
      code.monads,
      h('p', 'As is apparent from the definition of Monad, when some monad "m" uses its "bnd" method on some function "f(x,v)", the first argument is the value of m (which is m.x). The return value of m.bnd(f,v) is f(m.x, v). Here is a function which takes two arguments: ' ),
      code.fib,
      h('p', 'If you enter some number "n" in the box below, mMfib, whose initial value is [0,1], uses its bnd method as follows:' ),  
      h('p', {style: {color: '#FF0000'}}, 'mMfib.bnd(fib,n)' ),
      h('p',   'The result will be displayed underneath the input box. ' ),
      h('br'),
      h('input#code', ),  
      h('p#code2', mM19.x ),  
      h('br', ),  
      h('p', ' The message-handling code is shown above. This is how the websockets driver, the "WS" attribute of "sources", is defined: ' ),  
      code.driver,
      h('p', 'MonadIter instances have the "mMZ" prefix. Each instance has a "p" attribute which is a selector pointing to all of the code which comes after the call to its "bnd" method. Here is its definition of "next": ' ),  
      code.next,
      h('p', '"next" provides a simple but reliable way to assure that the messages$ stream and the updateCalc function respond appropriately to incoming data. The code using "next" is like a switch block, only more compact.  ' ),
      h('span.tao', 'This is a link ot the Github repository: '  ), 
      h('a', {props: {href: 'https://github.com/dschalk/JS-monads-part5'}}, 'JS-monads-part5'  ),
      h('p', ), 
      h('hr', ),  
      h('hr',),  
      h('p', ' . ' ), 
      h('p', ),  
      h('p', )  
      ])
    )  
  } 
}

function cleanup (x) {
    let target0 = document.getElementById('0');
    let target1 = document.getElementById('1');
    let target2 = document.getElementById('2');
    let target3 = document.getElementById('3');
    let targetAr = [target0, target1, target2, target3];
    for (let i in [0,1,2,3]) {
      if (mM1.x[i] === undefined)    {
        targetAr[i].style.display = 'none';
      }
      else {targetAr[i].style.display = 'inline'}
    }
    return ret(x);
};

function updateCalc(mM1) { 
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
               .bnd(() => mM$1.ret(mM1.bnd(push, mM7.x, mM1).x)
               .bnd(() => mM3
               .ret([])
               .bnd(() => mM4
               .ret(0).bnd(mM8.ret)
               .bnd(cleanup)
               ))))
}

var updateScoreboard = function updateScoreboard(v) {
  mMscoreboard.ret([]);
  let ar = mMscbd.x;
  let keys = Object.keys(ar);
  for (let k in keys) {
    mMscoreboard.bnd(unshift, h('div.indent', ar[k]), mMscoreboard)
  }
  return mMscoreboard;
}

var updateMessages = function updateMessages(v) {
  mMmessages.ret([]);
  let ar = mMmsg.x;
  let keys = Object.keys(ar);
  for (let k in keys) {
    mMmessages.bnd(unshift, h('div', ar[k]),mMmessages)
  }
  return mMmessages;
}

var displayOff = function displayOff(x,a) {
    document.getElementById(a).style.display = 'none';
    return ret(x);
};

var displayInline = function displayInline(x,a) {
    if (document.getElementById(a)) document.getElementById(a).style.display = 'inline';
    return ret(x);
};

var score = function score(v,j) {
  socket.send('CG#$42,' + mMgroup.x + ',' + mMname.x + ',' + j + ',' + mMgoals.x);
  return mM13.ret(v + j);
}

var score2 = function score2() {
  mMgoals.ret(mMgoals.x + 1);
  let j = -25;
  socket.send('CG#$42,' + mMgroup.x + ',' + mMname.x + ',' + j + ',' + mMgoals.x);
  mM13.ret(0);
  return mMgoals;
}

var winner = function winner() {
  let k = -3
  mMgoals.ret(mMgoals.x - 3);
  socket.send('CG#$42,' + mMgroup.x + ',' + mMname.x + ',' + 0 + ',' + mMgoals.x);
  socket.send('CE#$42,' + mMgroup.x + ',' + mMname.x + ',nothing ');
  return ret(0);
}

var newRoll = function(v) {
  socket.send(`CA#$42,${mMgroup.x},${mMname.x.trim()},6,6,12,20`);
  return ret(v);
};

var refresh = function() {
  setTimeout( function () {
     document.location.reload(false);
   },4000);
};

const sources = {
  DOM: makeDOMDriver('#main-container'),
  WS: websocketsDriver,
  UNIT: unitDriver
}

Cycle.run(main, sources);


