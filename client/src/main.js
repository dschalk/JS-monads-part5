import Cycle from '@motorcycle/core';
import {h, p, span, h1, h2, h3, br, div, label, input, hr, makeDOMDriver} from '@motorcycle/dom';
import {just, create, merge, combine, fromEvent, periodic, observe, delay, filter, of} from 'most';
import code from './code.js';
import {subject} from 'most-subject'

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

const unitDriver = function () {
  return periodic(1000, 1);
}

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
    .bnd(() => mMsender.ret(O.mMar.x[2])
    .bnd(() => mMprefix.ret(O.mMar.x[0])
      .bnd(next, 'CA#$42', mMZ10)
      .bnd(next, 'CB#$42', mMZ11)
      .bnd(next, 'CC#$42', mMZ12)
      .bnd(next, 'CD#$42', mMZ13)
      .bnd(next, 'CE#$42', mMZ14)
      .bnd(next, 'EE#$42', mMZ15)))));
    mMZ10.bnd(() => mM$1
      .ret([O.mMar.x[3], O.mMar.x[4], O.mMar.x[5], O.mMar.x[6]])
      .bnd(() => mM$2.ret([]))
      .bnd(displayInline,'0')
      .bnd(displayInline,'1')
      .bnd(displayInline,'2')
      .bnd(displayInline,'3'));
    mMZ11.bnd(() => mMscbd
      .ret(O.mMscores.x)
      .bnd(updateScoreboard)
      .bnd(() => mM3.ret([])
      .bnd(() => mM8.ret(0) )));
    mMZ12.bnd(() => mM6
      .ret( O.mMsender.x + ' successfully logged in.'));
    mMZ13.bnd(() => O.mMar
      .bnd(splice, 0, 3, O.mMar)
      .bnd(reduce, (a,b) => a + ", " + b)
      .bnd(() => O.mMmsg
      .bnd(unshift, h('div', O.mMsender.x + ': ' + O.mMar.x), O.mMmsg)
      ));
    mMZ14.bnd(() => mMgoals2.ret('The winner is ' + O.mMname.x ));
    mMZ15.bnd(() => mMgoals2.ret('A player named ' + 
        O.mMname.x + 'is currently logged in. Page will refresh in 4 seconds.')
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
      socket.send(`CO#$42,${e.target.value},${O.mMname.x.trim()},${e.target.value}`);
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
      socket.send(`CD#$42,${O.mMgroup.x.trim()},${O.mMname.x.trim()},${e.target.value}`);
      e.target.value = '';
    }
  });

  const numClick$ = sources.DOM
    .select('.num').events('click');
     
  const numClickAction$ = numClick$.map(e => {
    console.log(e);
    if (O.mM3.x.length < 2) {
      O.mM3.bnd(push, e.target.innerHTML, O.mM3)
      mM28.ret(O.mMhistorymM1.x[O.mMindex2.x])
      .bnd(spliceRemove, e.target.id, O.mM$1)
      .bnd(mM$1.ret);
      if (O.mM3.x.length === 2 && O.mM8.x !== 0) {
        updateCalc();
      }
    };
  }).startWith([0,0,0,0]);

  const opClick$ = sources.DOM
    .select('.op').events('click');

  const opClickAction$ = opClick$.map(e => {
    mM8.ret(e.target.textContent);
    if (O.mM3.x.length === 2) {
      updateCalc();
    }
  })

  const rollClick$ = sources.DOM
    .select('.roll').events('click');

  const rollClickAction$ = rollClick$.map(e => {  
    mM13.ret(O.mM13.x - 1);
    socket.send('CG#$42,' + O.mMgroup.x.trim() + ',' + O.mMname.x.trim() + ',' + -1 + ',' + O.mMgoals.x);
    socket.send(`CA#$42,${O.mMgroup.x},${O.mMname.x.trim()},6,6,12,20`);
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
    if (O.mMindex2.x < (O.mMhistorymM1.x.length - 1)) {
      inc(O.mMindex2.x, mMindex2)
      .bnd(() => mM$3.ret('Hello'))
    }
  });

  const backClickAction$ = backClick$.map(() => {
    if (O.mMindex2.x > 0) {
      dec(O.mMindex2.x, mMindex2)
      .bnd(() => mM$3.ret('You bet!'))
    }
  });

  const mM$1Action$ = mM$1.stream.map(v => {
    if (Array.isArray(v)) {
      O.mMhistorymM1.bnd(spliceAdd, O.mMindex2.x, v, O.mMhistorymM1);
      document.getElementById('0').innerHTML = (O.mMhistorymM1.x[O.mMindex2.x])[0]; 
      document.getElementById('1').innerHTML = (O.mMhistorymM1.x[O.mMindex2.x])[1]; 
      document.getElementById('2').innerHTML = (O.mMhistorymM1.x[O.mMindex2.x])[2]; 
      document.getElementById('3').innerHTML = (O.mMhistorymM1.x[O.mMindex2.x])[3]; 
      cleanup()
    }
    else {
      console.log('O.mM$1.stream is providing defective data to O.mM$1Action');
    }
  });

  const mM$3Action$ = mM$3.stream.map(v => {
    document.getElementById('0').innerHTML = (O.mMhistorymM1.x[O.mMindex2.x])[0]; 
    document.getElementById('1').innerHTML = (O.mMhistorymM1.x[O.mMindex2.x])[1]; 
    document.getElementById('2').innerHTML = (O.mMhistorymM1.x[O.mMindex2.x])[2]; 
    document.getElementById('3').innerHTML = (O.mMhistorymM1.x[O.mMindex2.x])[3]; 
    cleanup();
  })

  const mM$2Action$ = mM$2.stream.map(v => {
    O.mMhistorymM3.bnd(push, v, O.mMhistorymM3);
    console.log('From mM$2.stream: ', v);
  })

  const calcStream$ = merge(mM$3Action$, mM$2Action$, mM$1Action$, backClickAction$, forwardClickAction$, fibPressAction$, groupPressAction$, rollClickAction$, messagePressAction$, loginPressAction$, messages$, numClickAction$, opClickAction$);

  return {
    DOM: 
      calcStream$.map(() => 
      h('div.content', [ 
      h('br'),
      h('h2', 'JS-monads-part5 - Specialized Monads' ),
      h('p',  ' In this installment of the JS-monads series, I continue to explore the utility of simple, little monads. In previous installments, I used instances of Monad in conjunction with instances of MonadIter to organize complex operations into small blocks of easy-to-maintain code. I showed how step-wise iteration and lazy evaluation can be accomplished without reliance on libraries or Javascript 2015 Promises or Iterators. In this installment of the series, I add a third monad constructor, Monad$, to the mix. Each instance emits a stream of the data it obtains with its "ret()" method. As we shall see, the code for traversing the history of the numbers display in the dice game becomes more efficient and easier to reason about with the help of an instance of Monad$. '),
      h('span.tao', ' The monads are independent, but they are a good match for '  ),
      h('a', {props: {href: 'https://github.com/motorcyclejs' }},'Motorcycle.js' ), 
      h('span', ', which is Cycle.js, only using '  ),  
      h('a', {props: {href: 'https://github.com/paldepind/snabbdom' }},'Snabbdom' ), 
      h('span',  ' instead of "virtual-dom", and ' ), 
      h('a', {props: {href: 'https://github.com/cujojs/most' }},'Most' ), 
      h('span',  ' instead of "RxJS". I much prefer Cycle.js technology over React.js, which I used preveiously.    '  ), 
      h('br'),
      h('br'),
      h('span.tao', 'This web page is an application that uses websockets. It sends and recieves websockets messages without regard for the type of server on the backend. The server happens to be a Haskell ' ),
      h('a', {props: {href: 'https://github.com/yesodweb/wai/tree/master/wai-websockets' }}, 'Wai Websockets server' ), 
      h('span', '. I like it because it is fast and reliable, and because the code is very easy to modify whenever the need arises due to list comprehension and pattern matching. You just tell Haskell what you want, kind of like talking to a robot, and you get it. When used as intended, Haskell won\'t surprise you with unintended side effects.  ' ),
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
      h('div.winner', O.mMgoals2.x+''  ),
      h('p.login', {style: tempStyle}, 'Please enter some name.'  ),
      h('br'),
      h('input.login', {style: tempStyle }   ),
      h('p', O.mM6.x.toString() ),
      h('p.group', {style: tempStyle2}, 'Change group: '  ),
      h('input.group', {style: tempStyle2} ),
      h('div.messages', [
      h('p', {style: tempStyle2}, 'Enter messages here: '  ),
      h('input.inputMessage', {style: tempStyle2} ),
      h('div', O.mMmsg.x  ) ]),
      h('p.group2', [ 
      h('br'),  
      h('span',  'Group: ' + O.mMgroup.x ),
      h('br'),
      h('span',  'Goals: ' + O.mMgoals.x ),
      h('br'),
      h('span',  'Name: ' + O.mMname.x ),
      h('br'),
      h('div.scoreDisplay', [
      h('span', 'player[score][goals]' ),
      h('div', O.mMscoreboard.x ) ]) ]),
      h('span.tao', 'People in the same group, other than solo, share text messages and dice rolls. '  ),
      h('hr'),
      h('h2',  'Streams and Time Travel'  ),
      h('span.tao',  'The monads presented in this series are simple and flexible. In their basic form, they are great for streamlining and organizing code. If you want error handling, enforcement of type rules, or something specific to your own application, you can modify the basic Monad constructor, give it a new name, and start spawning instances of your creation. Monad$ as a good example. It uses "subject" from the '  ), 
      h('a',  {props: {href:  "https://github.com/tylors/most-subject.git"}}, 'most-subject' ),
      h('span', ' library, and is defined as follow: '  ),
      code.Monad$,
      h('p',  'The function "ret" is frequently used to create instances of Monad. Before we go any farther, I\'ll show the definition of "ret": '  ),
     code.ret,
     h('p', 'There is also the Monad method ret(), and like the function ret(), it is used to create new instances of Monad. The ret() method has been modified for this installment of the JS monads series and for the foreseeable future. As always, for any instance of Monad, say "m", m.ret(v) gives m the value v. In other words, m.ret(v) results in m.x === v. This result can be accomplished through mutation by setting m.x = v, but we don\'t do that. The m.ret(v) method creates a new Monad instance named "m" with value v. ' ),
     h('p', 'In JS-monads-part4 the Monad instances created by the "ret()" method were in global scope. Like their originally created instances, they were attributes of window. In this, the fifth part of the series, I retain all of the benefits of a "no-mutations" policy and gain some advantage by attaching new monad instances created by "ret()" to the one and only object that I mutate, which I named "O". Instead of mutating window, I mutate O. '  ),
     h('p', 'The originally created instances of Monad and Monad$ always retain their original values. All updates are in the O name space. An original instance, say m, can do its work unincumbered. The latest value obtained by m.ret() is O.m.x, which can use its ret() method to transform the value that it holds. I find the code easier to reason about when I can see which instances are workers and which instances contain mission critical information by simply observing the presence or absence of the "O." prefix. ' ),
     h('p', 'The unique clones created by the ret() can be preserved, for example with variable references or adding them to arrays. That wasn\'t necessay in this demonstration, where the game number display is preserved in an array of arrays. ' ),
     h('p', 'The ret() method is central to the functionality of Monad$ instances. mM$1, an instance of Monad$, guides the flow of game play, using mM$1.ret(some array) to push new dice rolls or freshly computed numbers into mM$1.stream. mM$1Action observes mM$1.stream, using the arrays it receives to update the number display, and to popule mMhistorymM1, a monad used for traversing the numbers display history. Here are the functions that handle the flow of information when a player clicks a number or an operator: ' ),     
     code.nums,
     h('p', ' mM$3 assists in the traversal of game display history. The data carried in mM$3.stream is of no consequence, so the argument provided to mM$3.ret() doesn\'t matter either. The value of mMindex2 changes when BACK or FORWARD are clicked, and that affects the browser display the next time the DOM is patched. mM$3.ret is called in order to trigger a DOM. Here is the code: ' ), 
     code.travel,
     h('p', ' cleanup() keeps "undefined" from cluttering the display. ' ),
     code.cleanup,
     h('p', ' For history traversal, it is important to avoid mutating the underlying array when push, shift, and the other Javascript array methods are used. Here are some of the array functions that are provided to the Monad "bnd" method: ' ),
    code.arrayFuncs, 
      h('hr'),
      h('h2', 'Miscellaneous Functions'  ),
      h('p', 'The function responsible for updating scores is shown below. It gets called whenever two numbers and an operator have been selected, in any order.' ),  
      code.updateCalc,
      h('p', ' Note the seventh line up from the bottom. The newly computed value mM7.x gets pushed into mM1.x and mM$1.ret() puts the updated mM1 into mM$1.stream. mM$1Action$ observes mM$1.stream. It is merged into the stream that feeds information into the virtual DOM prior to the next patch. '  ),
      h('p', 'That is how a DOM description gets returned from the "main" function. Data comes in through main\'s only argument: "sources". sources.WS provides websockets messages to the messages stream, which parses and acts upon them as follows: '  ),  
      code.messages,
      h('p', 'When a message prefixed by "CA#$42" arrives from the server, the following code is executed: '  ),  
      code.C42,
      h('p', ' As always, mM$1.ret() is called on array. ' ), 
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
      h('p#code2', O.mM19.x ),  
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
      if (targetAr[i].innerHTML == 'undefined' )    {
        targetAr[i].style.display = 'none';
      }
      else {
        targetAr[i].style.display = 'inline';
      }
    }
    return ret(x);
};

function updateCalc() { 
  mMZ2.bnd(() => O.mM13
               .bnd(score, 1)
               .bnd(next2, (O.mM13.x % 5 === 0), mMZ5) 
               .bnd(newRoll));
  mMZ4.bnd(() => O.mM13
               .bnd(score, 3)
               .bnd(next2, (O.mM13.x % 5 === 0), mMZ5) 
               .bnd(newRoll));
      mMZ5.bnd(() => O.mM13
                   .bnd(score,5)
                   .bnd(v => mM13.ret(v)
                   .bnd(next, 25, mMZ6)));
          mMZ6.bnd(() => mM9.bnd(score2) 
                       .bnd(next,3,mMZ7));
             mMZ7.bnd(() => mM13.bnd(winner));               
  O.mM3.bnd(x => mM7
               .ret(calc(x[0], O.mM8.x, x[1]))
               .bnd(next, 18, mMZ4)  
               .bnd(next, 20, mMZ2) // Releases mMZ2 (above)
               .bnd(() => O.mM$1.bnd(push, O.mM7.x, mM$1)
               .bnd(() => mM3
               .ret([])
               .bnd(() => mM4
               .ret(0).bnd(mM8.ret)
               .bnd(cleanup)
               ))))
}

var updateScoreboard = function updateScoreboard(v) {
  mMscoreboard.ret([]);
  let ar = O.mMscbd.x;
  let keys = Object.keys(ar);
  for (let k in keys) {
    O.mMscoreboard.bnd(unshift, h('div.indent', ar[k]), mMscoreboard)
  }
  return O.mMscoreboard;
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
  socket.send('CG#$42,' + O.mMgroup.x + ',' + O.mMname.x + ',' + j + ',' + O.mMgoals.x);
  return mM13.ret(v + j);
}

var score2 = function score2() {
  mMgoals.ret(mMgoals.x + 1);
  let j = -25;
  socket.send('CG#$42,' + O.mMgroup.x + ',' + O.mMname.x + ',' + j + ',' + O.mMgoals.x);
  mM13.ret(0);
  return mMgoals;
}

var winner = function winner() {
  let k = -3
  mMgoals.ret(mMgoals.x - 3);
  socket.send('CG#$42,' + O.mMgroup.x + ',' + O.mMname.x + ',' + 0 + ',' + O.mMgoals.x);
  socket.send('CE#$42,' + O.mMgroup.x + ',' + O.mMname.x + ',nothing ');
  return ret(0);
}

var newRoll = function(v) {
  socket.send(`CA#$42,${O.mMgroup.x},${O.mMname.x.trim()},6,6,12,20`);
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


