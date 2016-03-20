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
      h('h2', 'JS-monads-part5 - Specialized Monads' ),
      h('br'),
      h('span.tao',  ' In this installment of the JS-monads series,' ),
      h('span', 'I demonstrate the tools I use for front-end web application development. The server is built on top of the '  ),
      h('a', {props: {href: 'https://github.com/yesodweb/wai/tree/master/wai-websockets' },  style: {color: '#EECCFF'}},'Wai Websockets server' ), 
      h('span', ' It is very easy to modify whenever the need arises because the Haskell Programming Language provides list comprehension and pattern matching and, when used as intended, is not likely to surprise you with unintended side effects. The front end is a ' ),
      h('a', {props: {href: 'https://github.com/motorcyclejs' },  style: {color: '#EECCFF'}},'Motorcyclejs' ), 
      h('span', ' application. Motorcyclejs is Cycle.js, only using '  ),  
      h('a', {props: {href: 'https://github.com/paldepind/snabbdom' },  style: {color: '#EECCFF'}},'Snabbdom' ), 
      h('span',  ' instead of "virtual-dom", and ' ), 
      h('a', {props: {href: 'https://github.com/cujojs/most' },  style: {color: '#EECCFF'}},'Most' ), 
      h('span',  ' instead of "RxJS".'  ), 
      h('br'),
      h('br'),
      h('span.tao', 'The rules and the code for the '  ),
      h('span',  ' game used in this demonstration are discussed in earlier installments of this series, which can be found at  ' ),
      h('a', {props: {href: 'http://schalk.net' },  style: {color: '#EECCFF'}},'http://schalk.net' ), 
      h('span', ' The code repository is at '   ),
      h('a', {props: {href: 'https://github.com/dschalk/JS-monads-part5' },  style: {color: '#EECCFF'}},'Code.' ),
      h('span', ' Here are the basic rules:' ), 
      h('p', 'RULES: If clicking two numbers and an operator (in any order) results in 20 or 18, the score increases by 1 or 3, respectively. If the score becomes 0 mod 5, 5 points are added. A score of 25 results in one goal. That can only be achieved by arriving at a score of 20, which jumps the score to 25. Directly computing 25 results in a score of 30, and no goal. Each time ROLL is clicked, one point is deducted. Three goals wins the game. '    ),
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
      h('button#back2', {style: tempStyle2}, 'BACK'  ),
      h('button#forward2', {style: tempStyle2}, 'FORWARD'  ),
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
      h('p',  'The monads presented in this series are simple and flexible. The reference at the bottom of this page presents the definitions of the two basic monads. There isn\'t much to them, but they are great for streamlining and organizing code. If you want error handling, enforcement of type rules, or something specific to your own application, just modify the basic Monad constructor, give it a new name, and start creating specialized monad instances. Monad$ as a good example. It is defined as follow: '  ),
   code.Monad$,
     h('p', 'I created an instance, which I named "mM$1", and use its "history" attribute to keep a chronological record of all dice rolls and computations in the game for use with the BACK and FORWARD history-traversal buttons. I mM$1\'s "stream" attribute to display each dice roll and computation result in the browser log as they occur. The monad mM1 maintains the array of numbers which populate the game display. Normally, this array results from dice rolls or computations, but the BACK and FORWARD buttons cause the generation of new instances of mM1 in which mM1.x is the value of prior or subsequent dice rolls and computations held in mM$1.history. You can travel backwards and resume play starting with numbers that were previously displayed and used in a different way. This would create a paradox in a science fiction story, but it causes no problems here. ' ),
     h('p',  'I created the same history traversal functionality in JS-monads-part4, but in a more complex, harder-to-reason-about manner. In this demonstration, the mM$1.history array is traversed with mMindex2. So a new Monad instance named "mM1" can be created with the selected value of mM$1.history by: '  ),
     h('pre.indent',  'mM1.ret(mM$1.history[mMindex.x])'  ),
     h('p', ' Traversing the history of the game boils down to increasing and decreasing mMindex.x, then providing mM$1.history[mMindex.x] to mM1. mM$1.stream keeps mMindex current as game play progresses. '  ), 
     h('p',  'A developer not familiar with Cycle.js or Motorcycle.js, and new to the idea of object methods taking functions as arguments, would need some time to study Motorcycle.js and functional programming. After that, some experimentation with code such as '  ), 
     h('pre.indent',  'mM1.x === mM1.bnd(v => mM1.ret(v).bnd(mM1.ret)).x'  ), 
     h('p', ' but '  ), 
     h('pre.indent',  'mM1 !== mM1.bnd(v => mM1.ret(v).bnd(mM1.ret))'  ),
     h('p', ' would get them up and running. Unfortunately, new Javascript front-end web developers seem to progress from coding JQuery-based web pages to cumbersome, opinionated frameworks that don\'t foster creativity, innovation, or fun. For anyone reading this who is somewhat bewildered, the above example might seem anomolous, but it does give the expected results. That is because the "ret" method returns a new monad with the calling monad\'s name and whatever value is provided to ret. When a monad calls ret on its own value, for instance with "mM1.bnd(mM1.ret)" or "mM1.ret(mM1.x)", the returned monad is nearly indistinguishable from the calling monad, but it resides in a different location in memory, and that causes mM1 === mM1.bnd(mM1.ret) to return false. It is possible to save old versions of mM1 by assigning them to variables or placing them in an array, confident that they will remain unchanged unless extraordinary measures are taken to locate and mutate them. I use the simple monads to hold values and use only the "ret" method (never mM1.x = newValuer) to update them. My data is, therefore, never mutated. ' ),
     h('p', 'SUGGESTION: If pressing F12 takes you to the browser console, you can go there and see the output from mM$1.stream. If you type "mM$1.history", you should see an array containing arrays holding the same numbers that are displayed in the browser console. '  ),  
      h('hr'),
      h('h2', 'A Closer Look'  ),
      h('p', 'The function responsible for updating scores is shown below. It gets called whenever two numbers and an operator have been selected, in any order.' ),  
      code.updateCalc,
      h('p', ' Toward the end, before the final comment, ".bnd(mM$1.ret)" is one of two places where mM$1 places the array mM1.x in mM$1.history and sends it to the browser console. The other time this happens is after a dice roll, caused either by clicking ROLL or automatically when a player scores. The mM$1.history update and the browser update occur when a websockets message prefixed by "CA#$42" arrives from the server. Messages with that prefix contain four pseudo-random numbers representing a roll of the dice. The code is shown below: '  ),  
      code.messages,
      h('p', 'mM$1\'s stream updates the browser console and increases the value of mMindex as follows: ' ),
      code.stream,
      h('span.tao', 'When a player presses BACK for the first' ),
      h('span', ' time, the cursor is at mMindex.x (mM$1.history.length - 1), making mM$1.history[mMindex.x - 1] the most recent prior value of mM1. mM$1Action$ gets merged into the stream that feeds data to the virtual DOM, setting the stage for the next patch of the DOM. The client/src/main.js file at ' ),
      h('a', {props: {href: 'https://github.com/dschalk/JS-monads-part5'}, style: {color: '#EECCFF'}}, 'JS-monads-part5'  ),
      h('span', ' shows the details.  ' ),

      
      
      h('hr'),
      h('h2', 'REFERENCE'  ),
      h('p', 'This reference section is not comprehensive. For the reader\'s convenience, here are the basic monad constructors: '   ),
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
      h('p', ' The message-handling code is shown above. Here is the websockets driver: ' ),  
      code.driver,
      h('p', '"create" comes from the most library. It creates a blank stream; and with "add", it becomes a stream of incoming messages. '  ),  
      h('p', 'MonadIter instances have the "mMZ" prefix. Each instance has a "p" attribute which is a selector pointing to all of the code which comes after the call to its "bnd" method. Here is its definition of "next": ' ),  
      code.next,
      h('p', '"next" provides a simple but reliable way to assure that the messages$ stream and the updateCalc function respond appropriately to incoming data. The code using "next" is like a switch block, only more compact.  ' ),
      h('hr', ),  
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


