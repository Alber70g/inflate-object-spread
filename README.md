Inflate Object Spread
=====================

[![Greenkeeper badge](https://badges.greenkeeper.io/Alber70g/inflate-object-spread.svg)](https://greenkeeper.io/)

The library exposes one function `inflate(obj: Object, newObj: Object) => Object`.

Example:

```

```

[![Travis CI](https://img.shields.io/travis/Alber70g/inflate-object-spread.svg)](https://travis-ci.org/Alber70g/inflate-object-spread)
[![Codecov](https://img.shields.io/codecov/c/github/Alber70g/inflate-object-spread/master.svg)](https://codecov.io/gh/hyperapp/hyperapp)
[![npm](https://img.shields.io/npm/v/inflate-object-spread.svg)](https://www.npmjs.org/package/inflate-object-spread)



Installation & Usage
--------------------

You can import the mixin and use it in the app like so:

```javascript
import inflate from 'inflate-object-spread';
// umd
// const inflate = inflateObjectSpread;
// pre es6
// var inflate = inflateObjectSpread.inflate;

const oldState = { foo: { bar: 0 } };
const increment = (state) => inflate(state, { 'foo.bar': state.foo.bar + 1 });
const newState = increment(oldState); // { foo: { bar: 1 } }
increment(newState); // { foo: { bar: 2 } }

```

### Deep object with spread
Set an the properties of a deep path, while retaining the other properties.
This means that you can send an object, and it's properties will be set instead of the new object replaces the existing one

```javascript
setName: (state, { name, email }) =>
  inflate(state, { '...login': { name, email })
```

before
```json
{ "login": { "prop": "value"  } }
```

after
```json
{ "login": { "prop": "value", "name": "name", "email": "email" } }
```

Author notes
------------

Further improvements:

- array manipulation with index (possible api's)
  - `{ 'app.counters.0.value': 10 }`
  - `{ 'app.counters[0].value': 10 }`
  - `{ 'app.counters.[0].value': 10 }`
