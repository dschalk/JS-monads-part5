import Cycle from '@motorcycle/core';
import {h, p, span, h1, h2, h3, br, div, label, input, hr, makeDOMDriver} from '@motorcycle/dom'; 
import {just, create, merge, combine, fromEvent, periodic, observe, delay, filter, of} from 'most'; 
import code from './code.js'; 
import {subject} from 'most-subject'

window.subject = subject;
window.create = create;

var sub = subject();
var observer = sub.observer;
var stream = sub.stream;

var Monad$ = function Monad$(z, g, h) {
  var _this = this;
  
  this.subject = sub;
  this.observer = this.subject.observer;
  this.stream = this.subject.stream;
  this.history = h;

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
    window[_this.id] = new Monad$(a,_this.id, _this.history);
    _this.history.push(a);
    observer.next(a);
    return window[_this.id];
  };
};

var mM$1 = new Monad$(null, 'mM$1', []);

mM$1.ret(mM1.x);

var tempStyle = {display: 'inline'}
var tempStyle2 = {display: 'none'}
mM6.ret('');

function createWebSocket(path) {
    let host = window.location.hostname;
    if(host == '') host = 'localhost';
    let uri = 'ws://' + host + ':3099' + path;
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
    change2Elem = document.getElementById('change2');
    console.log('typeof change2Elem: ', typeof change2Elem, change2Elem);
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
    mMmain.bnd(() =>
    (mMZ10.bnd(() => mM1
      .ret([mMar.x[3], mMar.x[4], mMar.x[5], mMar.x[6]])
      .bnd(mM$1.ret)
      .bnd(displayInline,'0')
      .bnd(displayInline,'1')
      .bnd(displayInline,'2')
      .bnd(displayInline,'3')))),
    (mMZ11.bnd(() => mMscbd
      .ret(mMscores.x)
      .bnd(updateScoreboard)
      .bnd(() => mM3.ret([])
      .bnd(() => mM8.ret(0) )))),
    (mMZ12.bnd(() => mM6
      .ret( mMsender.x + ' successfully logged in.'))),
    (mMZ13.bnd(() => mMar
      .bnd(splice2, 0, 3, mMar)
      .bnd(reduce, (a,b) => a + ", " + b)
      .bnd(() => mMmsg
      .bnd(push, mMsender.x + ': ' + mMar.x, mMmsg)
      .bnd(updateMessages)))),
    (mMZ14.bnd(() => mMgoals2.ret('The winner is ' + mMname.x ))), 
    (mMZ15.bnd(() => mMgoals2.ret('A player named ' + 
        mMname.x + 'is currently logged in. Page will refresh in 4 seconds.')
      .bnd(refresh)))
  
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
    mM3
    .bnd(push,e.target.textContent, mM3)
    mM28.ret([mM1.x[0], mM1.x[1], mM1.x[2], mM1.x[3]]);
    mM28.x[e.target.id] = "";
    mM28.bnd(clean,mM1)
    .bnd(cleanup); 
    if (mM3.x.length === 2 && mM8.x !== 0) {
      updateCalc();
    }
  }).startWith(mM1.x[0]);

  const opClick$ = sources.DOM
    .select('.op').events('click');

  const opClickAction$ = opClick$.map(e => {
    mM8.ret(e.target.textContent);
    if (mM3.x.length === 2) {
      updateCalc();
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
    if (mMindex2.x < (mM$1.history.length - 1)) {
      mMindex2.bnd(add,1)
      .bnd(mMindex2.ret)
      .bnd(() => mM1
      .ret(mM$1.history[mMindex2.x]))
      .bnd(() => show());
    }
  });

  const backClickAction$ = backClick$.map(() => {
    if (mMindex2.x > 1) {
      mMindex2.bnd(add, -1)
      .bnd(mMindex2.ret)
      .bnd(() => mM1
      .ret(mM$1.history[mMindex2.x])) 
      .bnd(() => show());
    }
  });

  const mM$1Action$ = mM$1.stream.map(v => {
    mMindex2.ret(mM$1.history.length - 1);
    console.log('From mM$1.stream: ', v);
  })

  const calcStream$ = merge(mM$1Action$, forwardClickAction$, backClickAction$, fibPressAction$, groupPressAction$, rollClickAction$, messagePressAction$, loginPressAction$, messages$, numClickAction$, opClickAction$);

  return {
    DOM: 
      calcStream$.map(() => 
      h('div.content', [ 
      h('br'),
      h('h2', 'JS-monads-part4' ),
      h('br'),
      h('span', 'This installment of the JS-monads series features ' ),
      h('a', {props: {href: 'https://github.com/motorcyclejs' },  style: {color: '#EECCFF'}},'Motorcyclejs' ), 
      h('span', ' handling the monads. Motorcyclejs is Cyclejs, only using '  ),  
      h('a', {props: {href: 'https://github.com/paldepind/snabbdom' },  style: {color: '#EECCFF'}},'Snabbdom' ), 
      h('span',  ' instead of "virtual-dom", and ' ), 
      h('a', {props: {href: 'https://github.com/cujojs/most' },  style: {color: '#EECCFF'}},'Most' ), 
      h('span',  ' instead of "RxJS".'  ), 
      h('h3', 'The Game From JS-monads-part3' ),
      h('p', 'If clicking two numbers and an operator (in any order) results in 20 or 18, the score increases by 1 or 3, respectively. If the score becomes 0 mod 5, 5 points are added. A score of 25 results in one goal. That can only be achieved by arriving at a score of 20, which jumps the score to 25. Directly computing 25 results in a score of 30, and no goal. Each time ROLL is clicked, one point is deducted. Three goals wins the game. '    ),
      h('br'),
      h('br'),
      h('button#0.num', mM1.x[0] + '' ),
      h('button#1.num', mM1.x[1] + '' ),
      h('button#2.num', mM1.x[2] + '' ),
      h('button#3.num', mM1.x[3] + '' ),
      h('br'),
      h('button#4.op', 'add'  ),
      h('button#5.op', 'subtract' ),
      h('button#5.op', 'mult' ),
      h('button#5.op', 'div' ),
      h('button#5.op', 'concat' ),
      h('br'),
      h('button.roll', {style: tempStyle2}, 'ROLL' ),
      h('br'),
      h('button#back2',  'TAKE BACK'  ),
      h('button#forward2',  'FORWARD'  ),
      h('br'),
      h('div.winner', mMgoals2.x+''  ),
      h('br'),
      h('br'),
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
      h('span', 'People in the same group, other than solo, share text messages and dice rolls. '  ),
      h('p', 'The TAKE BACK and FORWARD feature relies on the immutability of display code saved in an array. TAKE BACK and FORWARD change the array index for the display and computations. A simpler example of the general algorithm is presented in the "Time Travel" section below.' ),
      h('hr'),
      h('p', 'Here are the definitions of the monad constructors: '   ),
      code.monads,
      h('p', 'As is apparent from the definition of Monad, when some monad "m" uses its "bnd" method on some function "f(x,v)", the first argument is the value of m (which is m.x). The return value of m.bnd(f,v) is f(m.x, v). Here is a function which takes two arguments: ' ),
      code.fib,
      h('p', 'If you enter some number "n" in the box below, mMfib, whose initial value is [0,1], uses its bnd method as follows:' ),  
      h('p', {style: {color: '#FF0000'}}, 'mMfib.bnd(fib,n)' ),
      h('p',   'The result will be displayed underneath the input box. ' ),
      h('br'),
      h('input#code', ),  
      h('p#code2', mM19.x ),  
      h('hr', ),  
      h('span', 'I won\'t discuss every aspect of the multi-player websockets game code. It is open source and available at '  ),  
      h('a', {props: {href: 'https://github.com/dschalk/JS-monads-part4'}, style: {color: '#EECCFF'}},  'https://github.com/dschalk/JS-monads-part4'  ),
      h('span', ' I want to show how I used the monads to organize code and to control browser interactions with the Haskell websockets server. Let\'s begin with the parsing and routing of incoming websockets messages. This is how the websockets driver is defined:' ),  
      code.driver,
      h('p', '"create" comes from the most library. It creates a blank stream; and with "add", it becomes a stream of incoming messages. '  ),  
      h('p', 'This is how the driver, referenced by "sources.WS", is used: '   ),  
      code.main,
      h('p', 'MonadIter instances have the "mMZ" prefix. Each instance has a "p" attribute which is a selector pointing to all of the code which comes after the call to its "bnd" method. Here is its definition of "next": ' ),  
      code.next,
      h('p', ' "main.js" has other code for handling keyboard and mouse events, and for combining everything into a single stream. It returns a stream of descriptions of the virtual DOM. The Motorcycle function "run" takes main and the sources object, with attributes DOM and JS referencing the drivers. It is called only once. "run" establishes the relationships between "main" and the drivers. After that, everything is automatic. Click events, keypress events, and websockets messages come in, Most updates the virtual dom stream, and Snabbdom diffs and patches the DOM. '   ),  
      h('hr', ),  
      h('p', 'Game clicks are handled as follows: ' ),  
      code.game,
      h('p', 'mM3 is populated by clicks on numbers, mM8 changes from 0 to the name of a clicked operator. So, when mM3.x.length equals 2 and mM8 is no longer 0, it is time to call updateCalc. Here is updateCalc: ' ),  
      code.updateCalc,
      h('p', 'This is light-weight, non-blocking asynchronous code. There are no data base, ajax, or websockets calls; nothing that would require error handling. Promises and JS6 iterators can be used to avoid "pyramid of doom" nested code structures, but that would entail excess baggage here. updateCalc illuminates a niche where the monads are right at home. ' ),  
      h('hr',),  
      h('p', ' . ' ), 
      h('p', ),  
      h('p', ), 
      h('p', ), 
      h('p', )  
      ])
    )  
  } 
}
 
const show = function show() {
  let number0 = document.getElementById('0');
  let number1 = document.getElementById('1');
  let number2 = document.getElementById('2');
  let number3 = document.getElementById('3');

  if (mM1.x.length === 1) {
    number0.style.display = 'inline' 
    number1.style.display = 'none'   
    number2.style.display = 'none'   
    number3.style.display = 'none'   
  }

  if (mM1.x.length === 2) {
    number0.style.display = 'inline' 
    number1.style.display = 'inline'   
    number2.style.display = 'none'   
    number3.style.display = 'none'   
  }

  if (mM1.x.length === 3) {
    number0.style.display = 'inline' 
    number1.style.display = 'inline'   
    number2.style.display = 'inline'   
    number3.style.display = 'none'   
  }

  if (mM1.x.length === 4) {
    number0.style.display = 'inline' 
    number1.style.display = 'inline'   
    number2.style.display = 'inline'   
    number3.style.display = 'inline'   
  }
};

function show2(x) {
  mMsaveAr.bnd(unshift, [mM1.x[0], mM1.x[1], mM1.x[2], mM1.x[3]], mMsaveAr);
  return ret(x);
};

function cleanup (x) {
    let target0 = document.getElementById('0');
    let target1 = document.getElementById('1');
    let target2 = document.getElementById('2');
    let target3 = document.getElementById('3');
    let targetAr = [target0, target1, target2, target3];
    for (let i = 0; i < 4; i+=1) {
      if (mM1.x[i] === undefined) {
        targetAr[i].style.display = 'none';
      }
      else {targetAr[i].style.display = 'inline'}
    }
    return ret(x);
};

function updateCalc() { 
       mMZ2.bnd(() => mM13
                    .bnd(score, 1)
                    .bnd(next2, (mM13.x % 5 === 0), mMZ5)  // Releases mMZ5.
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
                    .bnd(next, 18, mMZ4)  // Releases mMZ4.
                    .bnd(next, 20, mMZ2) 
                    .bnd(() => mM1.bnd(push, mM7.x, mM1)
                    .bnd(mM$1.ret)
                    .bnd(displayOff, ((mM1.x.length)+''))
                    .bnd(() => mM3
                    .ret([])
                    .bnd(() => mM4
                    .ret(0).bnd(mM8.ret).bnd(cleanup)
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


