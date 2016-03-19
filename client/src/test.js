
Clean history can be obtained from mMdata as follows:
var a = mMdata.x.filter(v => v[0] === 'mM1')
var c = a.filter(v => v !== a[0] && v[1][v[1].length - 1] !== a[a.indexOf(v)-1][1][v[1].length - 1])

We lose [0,0,0,0], but that is good. It was not user-generated.

this.stream = function(mon) {
  return most.create((add) => {
    mon.bnd(v => add(v))
  })
}

var h = mM1.history.filter(v => v !== mM1.history[0] && v.length - 1 !== mM1.history[mM1.history.indexOf(v)-1][v.length - 1])

mMdata.bnd(v => most.create((add) => {
  add(v)
}).bnd(mMdata2.ret) 
emitEvent(mMdata.x);

var cleaned = a.map(ar => ar[1].filter(v => v !== "" && v!== undefined))
var a = mMdata.x.filter(v => v[0] === 'mM1')



  mM1change$ = create((add) => {
        add(mM1 === mMchange.x)
      })

  mM1changeAction$ = mM1change$.map(bool => {
    if (!bool) {
      mMchange.ret(mM1);
      console.log('mM1 has changed. mM1.x: ', mM1.x);
    }
  });

  const changes2$ = sources.DOM
    .select('.change2').events('click');

  const changesAction2$ = changes2$.map(e => {
    console.log('In changes2$  e = ', e)
      setTimeout( function() {
        console.log('In changesAction2$  typeof change2Elem is ', typeof change2Elem, change2Elem);
      },2000 );
  });

  const mM1changeAction$ = sources.MM1.map(bool => {
    console.log('In mM1changeAction$  change[0] === mM1x ', bool);
    if (!bool) {
      let old = change.pop();
      change[0] = mM1;
      console.log('mM1 has changed. old value = ', old.x, ' new value = ', mM1.x);
      change[0].ret(mM1);
      setTimeout( function() {
        console.log('In mM1changeAction$  typeof change2Elem is ', typeof change2Elem, change2Elem);
        console.log('In mM1changeAction$  mMchange.x.change.newVal is ', mMchange.x.change.newVal);
      },2000 );
    }
  });

  const changes3$ = sources.DOM
    .select('.change2').events('click');

  const changesAction3$ = changes3$.map(e => {
    console.log('In changes3$  e = ', e)
  });
  p
  const mMchange1$ = sources.DOM.select('#change').events('change');
  const mMchange2$ = sources.DOM.select('#change').events('click');
  const mMchange3$ = sources.DOM.select('#change2').events('change');
  const mMchange4$ = sources.DOM.select('#change2').events('click');

  const mMchangeAction1$ = mMchange1$.map(v => {
    console.log('In mMchange1Action1$ newVal: ', v);
  });

  const mMchangeAction2$ = mMchange2$.map(v => {
    console.log('In mMchangeAction2$ newVal: ', v);
  });

  const mMchangeAction3$ = mMchange3$.map(v => {
    console.log('In mMchangeAction3$ newVal: ', v);
  });

  const mMchangeAction4$ = mMchange4$.map(v => {
    console.log('In mMchangeAction4$ newVal: ', v);
  });
mMchangeAction1$, mMchangeAction2$, mMchangeAction3$, mMchangeAction4$, 
