(function (Ot, N) {
  typeof exports == 'object' && typeof module < 'u'
    ? N(exports, require('react'))
    : typeof define == 'function' && define.amd
    ? define(['exports', 'react'], N)
    : ((Ot = typeof globalThis < 'u' ? globalThis : Ot || self),
      N((Ot['integration-component-library'] = {}), Ot.r__default));
})(this, function (Ot, N) {
  var ke;
  ('use strict');
  var lg = Object.defineProperty;
  var hg = (Ot, N, Se) =>
    N in Ot
      ? lg(Ot, N, { enumerable: !0, configurable: !0, writable: !0, value: Se })
      : (Ot[N] = Se);
  var L = (Ot, N, Se) => (hg(Ot, typeof N != 'symbol' ? N + '' : N, Se), Se);
  function Se(n) {
    const t = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (n) {
      for (const e in n)
        if (e !== 'default') {
          const i = Object.getOwnPropertyDescriptor(n, e);
          Object.defineProperty(t, e, i.get ? i : { enumerable: !0, get: () => n[e] });
        }
    }
    return (t.default = n), Object.freeze(t);
  }
  const Kt = Se(N);
  function Aa(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default') ? n.default : n;
  }
  var _i = { exports: {} },
    Ge = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Ss;
  function Ta() {
    if (Ss) return Ge;
    Ss = 1;
    var n = N,
      t = Symbol.for('react.element'),
      e = Symbol.for('react.fragment'),
      i = Object.prototype.hasOwnProperty,
      s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      r = { key: !0, ref: !0, __self: !0, __source: !0 };
    function o(a, c, l) {
      var h,
        f = {},
        u = null,
        d = null;
      l !== void 0 && (u = '' + l),
        c.key !== void 0 && (u = '' + c.key),
        c.ref !== void 0 && (d = c.ref);
      for (h in c) i.call(c, h) && !r.hasOwnProperty(h) && (f[h] = c[h]);
      if (a && a.defaultProps)
        for (h in ((c = a.defaultProps), c)) f[h] === void 0 && (f[h] = c[h]);
      return { $$typeof: t, type: a, key: u, ref: d, props: f, _owner: s.current };
    }
    return (Ge.Fragment = e), (Ge.jsx = o), (Ge.jsxs = o), Ge;
  }
  var Ke = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Cs;
  function Ra() {
    return (
      Cs ||
        ((Cs = 1),
        process.env.NODE_ENV !== 'production' &&
          (function () {
            var n = N,
              t = Symbol.for('react.element'),
              e = Symbol.for('react.portal'),
              i = Symbol.for('react.fragment'),
              s = Symbol.for('react.strict_mode'),
              r = Symbol.for('react.profiler'),
              o = Symbol.for('react.provider'),
              a = Symbol.for('react.context'),
              c = Symbol.for('react.forward_ref'),
              l = Symbol.for('react.suspense'),
              h = Symbol.for('react.suspense_list'),
              f = Symbol.for('react.memo'),
              u = Symbol.for('react.lazy'),
              d = Symbol.for('react.offscreen'),
              p = Symbol.iterator,
              m = '@@iterator';
            function b(g) {
              if (g === null || typeof g != 'object') return null;
              var v = (p && g[p]) || g[m];
              return typeof v == 'function' ? v : null;
            }
            var y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
            function _(g) {
              {
                for (var v = arguments.length, E = new Array(v > 1 ? v - 1 : 0), F = 1; F < v; F++)
                  E[F - 1] = arguments[F];
                S('error', g, E);
              }
            }
            function S(g, v, E) {
              {
                var F = y.ReactDebugCurrentFrame,
                  q = F.getStackAddendum();
                q !== '' && ((v += '%s'), (E = E.concat([q])));
                var nt = E.map(function (H) {
                  return String(H);
                });
                nt.unshift('Warning: ' + v), Function.prototype.apply.call(console[g], console, nt);
              }
            }
            var M = !1,
              w = !1,
              P = !1,
              k = !1,
              T = !1,
              B;
            B = Symbol.for('react.module.reference');
            function st(g) {
              return !!(
                typeof g == 'string' ||
                typeof g == 'function' ||
                g === i ||
                g === r ||
                T ||
                g === s ||
                g === l ||
                g === h ||
                k ||
                g === d ||
                M ||
                w ||
                P ||
                (typeof g == 'object' &&
                  g !== null &&
                  (g.$$typeof === u ||
                    g.$$typeof === f ||
                    g.$$typeof === o ||
                    g.$$typeof === a ||
                    g.$$typeof === c ||
                    g.$$typeof === B ||
                    g.getModuleId !== void 0))
              );
            }
            function rt(g, v, E) {
              var F = g.displayName;
              if (F) return F;
              var q = v.displayName || v.name || '';
              return q !== '' ? E + '(' + q + ')' : E;
            }
            function Y(g) {
              return g.displayName || 'Context';
            }
            function tt(g) {
              if (g == null) return null;
              if (
                (typeof g.tag == 'number' &&
                  _(
                    'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
                  ),
                typeof g == 'function')
              )
                return g.displayName || g.name || null;
              if (typeof g == 'string') return g;
              switch (g) {
                case i:
                  return 'Fragment';
                case e:
                  return 'Portal';
                case r:
                  return 'Profiler';
                case s:
                  return 'StrictMode';
                case l:
                  return 'Suspense';
                case h:
                  return 'SuspenseList';
              }
              if (typeof g == 'object')
                switch (g.$$typeof) {
                  case a:
                    var v = g;
                    return Y(v) + '.Consumer';
                  case o:
                    var E = g;
                    return Y(E._context) + '.Provider';
                  case c:
                    return rt(g, g.render, 'ForwardRef');
                  case f:
                    var F = g.displayName || null;
                    return F !== null ? F : tt(g.type) || 'Memo';
                  case u: {
                    var q = g,
                      nt = q._payload,
                      H = q._init;
                    try {
                      return tt(H(nt));
                    } catch {
                      return null;
                    }
                  }
                }
              return null;
            }
            var ot = Object.assign,
              j = 0,
              at,
              xt,
              St,
              Xt,
              $t,
              Gt,
              D;
            function O() {}
            O.__reactDisabledLog = !0;
            function A() {
              {
                if (j === 0) {
                  (at = console.log),
                    (xt = console.info),
                    (St = console.warn),
                    (Xt = console.error),
                    ($t = console.group),
                    (Gt = console.groupCollapsed),
                    (D = console.groupEnd);
                  var g = { configurable: !0, enumerable: !0, value: O, writable: !0 };
                  Object.defineProperties(console, {
                    info: g,
                    log: g,
                    warn: g,
                    error: g,
                    group: g,
                    groupCollapsed: g,
                    groupEnd: g,
                  });
                }
                j++;
              }
            }
            function z() {
              {
                if ((j--, j === 0)) {
                  var g = { configurable: !0, enumerable: !0, writable: !0 };
                  Object.defineProperties(console, {
                    log: ot({}, g, { value: at }),
                    info: ot({}, g, { value: xt }),
                    warn: ot({}, g, { value: St }),
                    error: ot({}, g, { value: Xt }),
                    group: ot({}, g, { value: $t }),
                    groupCollapsed: ot({}, g, { value: Gt }),
                    groupEnd: ot({}, g, { value: D }),
                  });
                }
                j < 0 &&
                  _('disabledDepth fell below zero. This is a bug in React. Please file an issue.');
              }
            }
            var x = y.ReactCurrentDispatcher,
              Z;
            function C(g, v, E) {
              {
                if (Z === void 0)
                  try {
                    throw Error();
                  } catch (q) {
                    var F = q.stack.trim().match(/\n( *(at )?)/);
                    Z = (F && F[1]) || '';
                  }
                return (
                  `
` +
                  Z +
                  g
                );
              }
            }
            var _t = !1,
              Q;
            {
              var ut = typeof WeakMap == 'function' ? WeakMap : Map;
              Q = new ut();
            }
            function V(g, v) {
              if (!g || _t) return '';
              {
                var E = Q.get(g);
                if (E !== void 0) return E;
              }
              var F;
              _t = !0;
              var q = Error.prepareStackTrace;
              Error.prepareStackTrace = void 0;
              var nt;
              (nt = x.current), (x.current = null), A();
              try {
                if (v) {
                  var H = function () {
                    throw Error();
                  };
                  if (
                    (Object.defineProperty(H.prototype, 'props', {
                      set: function () {
                        throw Error();
                      },
                    }),
                    typeof Reflect == 'object' && Reflect.construct)
                  ) {
                    try {
                      Reflect.construct(H, []);
                    } catch (de) {
                      F = de;
                    }
                    Reflect.construct(g, [], H);
                  } else {
                    try {
                      H.call();
                    } catch (de) {
                      F = de;
                    }
                    g.call(H.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (de) {
                    F = de;
                  }
                  g();
                }
              } catch (de) {
                if (de && F && typeof de.stack == 'string') {
                  for (
                    var W = de.stack.split(`
`),
                      Mt = F.stack.split(`
`),
                      gt = W.length - 1,
                      bt = Mt.length - 1;
                    gt >= 1 && bt >= 0 && W[gt] !== Mt[bt];

                  )
                    bt--;
                  for (; gt >= 1 && bt >= 0; gt--, bt--)
                    if (W[gt] !== Mt[bt]) {
                      if (gt !== 1 || bt !== 1)
                        do
                          if ((gt--, bt--, bt < 0 || W[gt] !== Mt[bt])) {
                            var Wt =
                              `
` + W[gt].replace(' at new ', ' at ');
                            return (
                              g.displayName &&
                                Wt.includes('<anonymous>') &&
                                (Wt = Wt.replace('<anonymous>', g.displayName)),
                              typeof g == 'function' && Q.set(g, Wt),
                              Wt
                            );
                          }
                        while (gt >= 1 && bt >= 0);
                      break;
                    }
                }
              } finally {
                (_t = !1), (x.current = nt), z(), (Error.prepareStackTrace = q);
              }
              var Xe = g ? g.displayName || g.name : '',
                Pa = Xe ? C(Xe) : '';
              return typeof g == 'function' && Q.set(g, Pa), Pa;
            }
            function Rt(g, v, E) {
              return V(g, !1);
            }
            function he(g) {
              var v = g.prototype;
              return !!(v && v.isReactComponent);
            }
            function $(g, v, E) {
              if (g == null) return '';
              if (typeof g == 'function') return V(g, he(g));
              if (typeof g == 'string') return C(g);
              switch (g) {
                case l:
                  return C('Suspense');
                case h:
                  return C('SuspenseList');
              }
              if (typeof g == 'object')
                switch (g.$$typeof) {
                  case c:
                    return Rt(g.render);
                  case f:
                    return $(g.type, v, E);
                  case u: {
                    var F = g,
                      q = F._payload,
                      nt = F._init;
                    try {
                      return $(nt(q), v, E);
                    } catch {}
                  }
                }
              return '';
            }
            var dt = Object.prototype.hasOwnProperty,
              U = {},
              mt = y.ReactDebugCurrentFrame;
            function ee(g) {
              if (g) {
                var v = g._owner,
                  E = $(g.type, g._source, v ? v.type : null);
                mt.setExtraStackFrame(E);
              } else mt.setExtraStackFrame(null);
            }
            function vt(g, v, E, F, q) {
              {
                var nt = Function.call.bind(dt);
                for (var H in g)
                  if (nt(g, H)) {
                    var W = void 0;
                    try {
                      if (typeof g[H] != 'function') {
                        var Mt = Error(
                          (F || 'React class') +
                            ': ' +
                            E +
                            ' type `' +
                            H +
                            '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                            typeof g[H] +
                            '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                        );
                        throw ((Mt.name = 'Invariant Violation'), Mt);
                      }
                      W = g[H](v, H, F, E, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                    } catch (gt) {
                      W = gt;
                    }
                    W &&
                      !(W instanceof Error) &&
                      (ee(q),
                      _(
                        '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                        F || 'React class',
                        E,
                        H,
                        typeof W
                      ),
                      ee(null)),
                      W instanceof Error &&
                        !(W.message in U) &&
                        ((U[W.message] = !0),
                        ee(q),
                        _('Failed %s type: %s', E, W.message),
                        ee(null));
                  }
              }
            }
            var He = Array.isArray;
            function fe(g) {
              return He(g);
            }
            function Nt(g) {
              {
                var v = typeof Symbol == 'function' && Symbol.toStringTag,
                  E = (v && g[Symbol.toStringTag]) || g.constructor.name || 'Object';
                return E;
              }
            }
            function R(g) {
              try {
                return ct(g), !1;
              } catch {
                return !0;
              }
            }
            function ct(g) {
              return '' + g;
            }
            function Ye(g) {
              if (R(g))
                return (
                  _(
                    'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                    Nt(g)
                  ),
                  ct(g)
                );
            }
            var ue = y.ReactCurrentOwner,
              ne = { key: !0, ref: !0, __self: !0, __source: !0 },
              wa,
              ka,
              _s;
            _s = {};
            function Gd(g) {
              if (dt.call(g, 'ref')) {
                var v = Object.getOwnPropertyDescriptor(g, 'ref').get;
                if (v && v.isReactWarning) return !1;
              }
              return g.ref !== void 0;
            }
            function Kd(g) {
              if (dt.call(g, 'key')) {
                var v = Object.getOwnPropertyDescriptor(g, 'key').get;
                if (v && v.isReactWarning) return !1;
              }
              return g.key !== void 0;
            }
            function qd(g, v) {
              if (typeof g.ref == 'string' && ue.current && v && ue.current.stateNode !== v) {
                var E = tt(ue.current.type);
                _s[E] ||
                  (_(
                    'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                    tt(ue.current.type),
                    g.ref
                  ),
                  (_s[E] = !0));
              }
            }
            function Zd(g, v) {
              {
                var E = function () {
                  wa ||
                    ((wa = !0),
                    _(
                      '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                      v
                    ));
                };
                (E.isReactWarning = !0),
                  Object.defineProperty(g, 'key', { get: E, configurable: !0 });
              }
            }
            function Qd(g, v) {
              {
                var E = function () {
                  ka ||
                    ((ka = !0),
                    _(
                      '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                      v
                    ));
                };
                (E.isReactWarning = !0),
                  Object.defineProperty(g, 'ref', { get: E, configurable: !0 });
              }
            }
            var Jd = function (g, v, E, F, q, nt, H) {
              var W = { $$typeof: t, type: g, key: v, ref: E, props: H, _owner: nt };
              return (
                (W._store = {}),
                Object.defineProperty(W._store, 'validated', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !0,
                  value: !1,
                }),
                Object.defineProperty(W, '_self', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !1,
                  value: F,
                }),
                Object.defineProperty(W, '_source', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !1,
                  value: q,
                }),
                Object.freeze && (Object.freeze(W.props), Object.freeze(W)),
                W
              );
            };
            function tg(g, v, E, F, q) {
              {
                var nt,
                  H = {},
                  W = null,
                  Mt = null;
                E !== void 0 && (Ye(E), (W = '' + E)),
                  Kd(v) && (Ye(v.key), (W = '' + v.key)),
                  Gd(v) && ((Mt = v.ref), qd(v, q));
                for (nt in v) dt.call(v, nt) && !ne.hasOwnProperty(nt) && (H[nt] = v[nt]);
                if (g && g.defaultProps) {
                  var gt = g.defaultProps;
                  for (nt in gt) H[nt] === void 0 && (H[nt] = gt[nt]);
                }
                if (W || Mt) {
                  var bt = typeof g == 'function' ? g.displayName || g.name || 'Unknown' : g;
                  W && Zd(H, bt), Mt && Qd(H, bt);
                }
                return Jd(g, W, Mt, q, F, ue.current, H);
              }
            }
            var vs = y.ReactCurrentOwner,
              Sa = y.ReactDebugCurrentFrame;
            function Ue(g) {
              if (g) {
                var v = g._owner,
                  E = $(g.type, g._source, v ? v.type : null);
                Sa.setExtraStackFrame(E);
              } else Sa.setExtraStackFrame(null);
            }
            var ws;
            ws = !1;
            function ks(g) {
              return typeof g == 'object' && g !== null && g.$$typeof === t;
            }
            function Ca() {
              {
                if (vs.current) {
                  var g = tt(vs.current.type);
                  if (g)
                    return (
                      `

Check the render method of \`` +
                      g +
                      '`.'
                    );
                }
                return '';
              }
            }
            function eg(g) {
              {
                if (g !== void 0) {
                  var v = g.fileName.replace(/^.*[\\\/]/, ''),
                    E = g.lineNumber;
                  return (
                    `

Check your code at ` +
                    v +
                    ':' +
                    E +
                    '.'
                  );
                }
                return '';
              }
            }
            var Ea = {};
            function ng(g) {
              {
                var v = Ca();
                if (!v) {
                  var E = typeof g == 'string' ? g : g.displayName || g.name;
                  E &&
                    (v =
                      `

Check the top-level render call using <` +
                      E +
                      '>.');
                }
                return v;
              }
            }
            function Ma(g, v) {
              {
                if (!g._store || g._store.validated || g.key != null) return;
                g._store.validated = !0;
                var E = ng(v);
                if (Ea[E]) return;
                Ea[E] = !0;
                var F = '';
                g &&
                  g._owner &&
                  g._owner !== vs.current &&
                  (F = ' It was passed a child from ' + tt(g._owner.type) + '.'),
                  Ue(g),
                  _(
                    'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                    E,
                    F
                  ),
                  Ue(null);
              }
            }
            function Oa(g, v) {
              {
                if (typeof g != 'object') return;
                if (fe(g))
                  for (var E = 0; E < g.length; E++) {
                    var F = g[E];
                    ks(F) && Ma(F, v);
                  }
                else if (ks(g)) g._store && (g._store.validated = !0);
                else if (g) {
                  var q = b(g);
                  if (typeof q == 'function' && q !== g.entries)
                    for (var nt = q.call(g), H; !(H = nt.next()).done; )
                      ks(H.value) && Ma(H.value, v);
                }
              }
            }
            function ig(g) {
              {
                var v = g.type;
                if (v == null || typeof v == 'string') return;
                var E;
                if (typeof v == 'function') E = v.propTypes;
                else if (typeof v == 'object' && (v.$$typeof === c || v.$$typeof === f))
                  E = v.propTypes;
                else return;
                if (E) {
                  var F = tt(v);
                  vt(E, g.props, 'prop', F, g);
                } else if (v.PropTypes !== void 0 && !ws) {
                  ws = !0;
                  var q = tt(v);
                  _(
                    'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                    q || 'Unknown'
                  );
                }
                typeof v.getDefaultProps == 'function' &&
                  !v.getDefaultProps.isReactClassApproved &&
                  _(
                    'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
                  );
              }
            }
            function sg(g) {
              {
                for (var v = Object.keys(g.props), E = 0; E < v.length; E++) {
                  var F = v[E];
                  if (F !== 'children' && F !== 'key') {
                    Ue(g),
                      _(
                        'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                        F
                      ),
                      Ue(null);
                    break;
                  }
                }
                g.ref !== null &&
                  (Ue(g), _('Invalid attribute `ref` supplied to `React.Fragment`.'), Ue(null));
              }
            }
            function Da(g, v, E, F, q, nt) {
              {
                var H = st(g);
                if (!H) {
                  var W = '';
                  (g === void 0 ||
                    (typeof g == 'object' && g !== null && Object.keys(g).length === 0)) &&
                    (W +=
                      " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                  var Mt = eg(q);
                  Mt ? (W += Mt) : (W += Ca());
                  var gt;
                  g === null
                    ? (gt = 'null')
                    : fe(g)
                    ? (gt = 'array')
                    : g !== void 0 && g.$$typeof === t
                    ? ((gt = '<' + (tt(g.type) || 'Unknown') + ' />'),
                      (W = ' Did you accidentally export a JSX literal instead of a component?'))
                    : (gt = typeof g),
                    _(
                      'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                      gt,
                      W
                    );
                }
                var bt = tg(g, v, E, q, nt);
                if (bt == null) return bt;
                if (H) {
                  var Wt = v.children;
                  if (Wt !== void 0)
                    if (F)
                      if (fe(Wt)) {
                        for (var Xe = 0; Xe < Wt.length; Xe++) Oa(Wt[Xe], g);
                        Object.freeze && Object.freeze(Wt);
                      } else
                        _(
                          'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.'
                        );
                    else Oa(Wt, g);
                }
                return g === i ? sg(bt) : ig(bt), bt;
              }
            }
            function rg(g, v, E) {
              return Da(g, v, E, !0);
            }
            function og(g, v, E) {
              return Da(g, v, E, !1);
            }
            var ag = og,
              cg = rg;
            (Ke.Fragment = i), (Ke.jsx = ag), (Ke.jsxs = cg);
          })()),
      Ke
    );
  }
  process.env.NODE_ENV === 'production' ? (_i.exports = Ta()) : (_i.exports = Ra());
  var vi = _i.exports;
  function Fa(n) {
    if (n.sheet) return n.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
      if (document.styleSheets[t].ownerNode === n) return document.styleSheets[t];
  }
  function La(n) {
    var t = document.createElement('style');
    return (
      t.setAttribute('data-emotion', n.key),
      n.nonce !== void 0 && t.setAttribute('nonce', n.nonce),
      t.appendChild(document.createTextNode('')),
      t
    );
  }
  var Ia = (function () {
    function n(e) {
      (this.isSpeedy = e.speedy === void 0 ? process.env.NODE_ENV === 'production' : e.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = e.nonce),
        (this.key = e.key),
        (this.container = e.container),
        (this.before = null);
    }
    var t = n.prototype;
    return (
      (t.insert = function (i) {
        if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
          var s = La(this),
            r;
          this.tags.length === 0
            ? (r = this.before)
            : (r = this.tags[this.tags.length - 1].nextSibling),
            this.container.insertBefore(s, r),
            this.tags.push(s);
        }
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var a = Fa(o);
          try {
            var c = i.charCodeAt(1) === 105 && i.charCodeAt(0) === 64;
            a.insertRule(i, c ? 0 : a.cssRules.length);
          } catch (l) {
            process.env.NODE_ENV !== 'production' &&
              console.warn('There was a problem inserting the following rule: "' + i + '"', l);
          }
        } else o.appendChild(document.createTextNode(i));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (i) {
          return i.parentNode.removeChild(i);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      n
    );
  })();
  function Na(n) {
    function t(D, O, A, z, x) {
      for (
        var Z = 0,
          C = 0,
          _t = 0,
          Q = 0,
          ut,
          V,
          Rt = 0,
          he = 0,
          $,
          dt = ($ = ut = 0),
          U = 0,
          mt = 0,
          ee = 0,
          vt = 0,
          He = A.length,
          fe = He - 1,
          Nt,
          R = '',
          ct = '',
          Ye = '',
          ue = '',
          ne;
        U < He;

      ) {
        if (
          ((V = A.charCodeAt(U)),
          U === fe &&
            C + Q + _t + Z !== 0 &&
            (C !== 0 && (V = C === 47 ? 10 : 47), (Q = _t = Z = 0), He++, fe++),
          C + Q + _t + Z === 0)
        ) {
          if (U === fe && (0 < mt && (R = R.replace(u, '')), 0 < R.trim().length)) {
            switch (V) {
              case 32:
              case 9:
              case 59:
              case 13:
              case 10:
                break;
              default:
                R += A.charAt(U);
            }
            V = 59;
          }
          switch (V) {
            case 123:
              for (R = R.trim(), ut = R.charCodeAt(0), $ = 1, vt = ++U; U < He; ) {
                switch ((V = A.charCodeAt(U))) {
                  case 123:
                    $++;
                    break;
                  case 125:
                    $--;
                    break;
                  case 47:
                    switch ((V = A.charCodeAt(U + 1))) {
                      case 42:
                      case 47:
                        t: {
                          for (dt = U + 1; dt < fe; ++dt)
                            switch (A.charCodeAt(dt)) {
                              case 47:
                                if (V === 42 && A.charCodeAt(dt - 1) === 42 && U + 2 !== dt) {
                                  U = dt + 1;
                                  break t;
                                }
                                break;
                              case 10:
                                if (V === 47) {
                                  U = dt + 1;
                                  break t;
                                }
                            }
                          U = dt;
                        }
                    }
                    break;
                  case 91:
                    V++;
                  case 40:
                    V++;
                  case 34:
                  case 39:
                    for (; U++ < fe && A.charCodeAt(U) !== V; );
                }
                if ($ === 0) break;
                U++;
              }
              switch (
                (($ = A.substring(vt, U)),
                ut === 0 && (ut = (R = R.replace(f, '').trim()).charCodeAt(0)),
                ut)
              ) {
                case 64:
                  switch ((0 < mt && (R = R.replace(u, '')), (V = R.charCodeAt(1)), V)) {
                    case 100:
                    case 109:
                    case 115:
                    case 45:
                      mt = O;
                      break;
                    default:
                      mt = at;
                  }
                  if (
                    (($ = t(O, mt, $, V, x + 1)),
                    (vt = $.length),
                    0 < St &&
                      ((mt = e(at, R, ee)),
                      (ne = a(3, $, mt, O, tt, Y, vt, V, x, z)),
                      (R = mt.join('')),
                      ne !== void 0 && (vt = ($ = ne.trim()).length) === 0 && ((V = 0), ($ = ''))),
                    0 < vt)
                  )
                    switch (V) {
                      case 115:
                        R = R.replace(P, o);
                      case 100:
                      case 109:
                      case 45:
                        $ = R + '{' + $ + '}';
                        break;
                      case 107:
                        (R = R.replace(_, '$1 $2')),
                          ($ = R + '{' + $ + '}'),
                          ($ =
                            j === 1 || (j === 2 && r('@' + $, 3))
                              ? '@-webkit-' + $ + '@' + $
                              : '@' + $);
                        break;
                      default:
                        ($ = R + $), z === 112 && ($ = ((ct += $), ''));
                    }
                  else $ = '';
                  break;
                default:
                  $ = t(O, e(O, R, ee), $, z, x + 1);
              }
              (Ye += $), ($ = ee = mt = dt = ut = 0), (R = ''), (V = A.charCodeAt(++U));
              break;
            case 125:
            case 59:
              if (((R = (0 < mt ? R.replace(u, '') : R).trim()), 1 < (vt = R.length)))
                switch (
                  (dt === 0 &&
                    ((ut = R.charCodeAt(0)), ut === 45 || (96 < ut && 123 > ut)) &&
                    (vt = (R = R.replace(' ', ':')).length),
                  0 < St &&
                    (ne = a(1, R, O, D, tt, Y, ct.length, z, x, z)) !== void 0 &&
                    (vt = (R = ne.trim()).length) === 0 &&
                    (R = '\0\0'),
                  (ut = R.charCodeAt(0)),
                  (V = R.charCodeAt(1)),
                  ut)
                ) {
                  case 0:
                    break;
                  case 64:
                    if (V === 105 || V === 99) {
                      ue += R + A.charAt(U);
                      break;
                    }
                  default:
                    R.charCodeAt(vt - 1) !== 58 && (ct += s(R, ut, V, R.charCodeAt(2)));
                }
              (ee = mt = dt = ut = 0), (R = ''), (V = A.charCodeAt(++U));
          }
        }
        switch (V) {
          case 13:
          case 10:
            C === 47
              ? (C = 0)
              : 1 + ut === 0 && z !== 107 && 0 < R.length && ((mt = 1), (R += '\0')),
              0 < St * $t && a(0, R, O, D, tt, Y, ct.length, z, x, z),
              (Y = 1),
              tt++;
            break;
          case 59:
          case 125:
            if (C + Q + _t + Z === 0) {
              Y++;
              break;
            }
          default:
            switch ((Y++, (Nt = A.charAt(U)), V)) {
              case 9:
              case 32:
                if (Q + Z + C === 0)
                  switch (Rt) {
                    case 44:
                    case 58:
                    case 9:
                    case 32:
                      Nt = '';
                      break;
                    default:
                      V !== 32 && (Nt = ' ');
                  }
                break;
              case 0:
                Nt = '\\0';
                break;
              case 12:
                Nt = '\\f';
                break;
              case 11:
                Nt = '\\v';
                break;
              case 38:
                Q + C + Z === 0 && ((mt = ee = 1), (Nt = '\f' + Nt));
                break;
              case 108:
                if (Q + C + Z + ot === 0 && 0 < dt)
                  switch (U - dt) {
                    case 2:
                      Rt === 112 && A.charCodeAt(U - 3) === 58 && (ot = Rt);
                    case 8:
                      he === 111 && (ot = he);
                  }
                break;
              case 58:
                Q + C + Z === 0 && (dt = U);
                break;
              case 44:
                C + _t + Q + Z === 0 && ((mt = 1), (Nt += '\r'));
                break;
              case 34:
              case 39:
                C === 0 && (Q = Q === V ? 0 : Q === 0 ? V : Q);
                break;
              case 91:
                Q + C + _t === 0 && Z++;
                break;
              case 93:
                Q + C + _t === 0 && Z--;
                break;
              case 41:
                Q + C + Z === 0 && _t--;
                break;
              case 40:
                if (Q + C + Z === 0) {
                  if (ut === 0)
                    switch (2 * Rt + 3 * he) {
                      case 533:
                        break;
                      default:
                        ut = 1;
                    }
                  _t++;
                }
                break;
              case 64:
                C + _t + Q + Z + dt + $ === 0 && ($ = 1);
                break;
              case 42:
              case 47:
                if (!(0 < Q + Z + _t))
                  switch (C) {
                    case 0:
                      switch (2 * V + 3 * A.charCodeAt(U + 1)) {
                        case 235:
                          C = 47;
                          break;
                        case 220:
                          (vt = U), (C = 42);
                      }
                      break;
                    case 42:
                      V === 47 &&
                        Rt === 42 &&
                        vt + 2 !== U &&
                        (A.charCodeAt(vt + 2) === 33 && (ct += A.substring(vt, U + 1)),
                        (Nt = ''),
                        (C = 0));
                  }
            }
            C === 0 && (R += Nt);
        }
        (he = Rt), (Rt = V), U++;
      }
      if (((vt = ct.length), 0 < vt)) {
        if (
          ((mt = O),
          0 < St &&
            ((ne = a(2, ct, mt, D, tt, Y, vt, z, x, z)), ne !== void 0 && (ct = ne).length === 0))
        )
          return ue + ct + Ye;
        if (((ct = mt.join(',') + '{' + ct + '}'), j * ot !== 0)) {
          switch ((j !== 2 || r(ct, 2) || (ot = 0), ot)) {
            case 111:
              ct = ct.replace(M, ':-moz-$1') + ct;
              break;
            case 112:
              ct =
                ct.replace(S, '::-webkit-input-$1') +
                ct.replace(S, '::-moz-$1') +
                ct.replace(S, ':-ms-input-$1') +
                ct;
          }
          ot = 0;
        }
      }
      return ue + ct + Ye;
    }
    function e(D, O, A) {
      var z = O.trim().split(b);
      O = z;
      var x = z.length,
        Z = D.length;
      switch (Z) {
        case 0:
        case 1:
          var C = 0;
          for (D = Z === 0 ? '' : D[0] + ' '; C < x; ++C) O[C] = i(D, O[C], A).trim();
          break;
        default:
          var _t = (C = 0);
          for (O = []; C < x; ++C)
            for (var Q = 0; Q < Z; ++Q) O[_t++] = i(D[Q] + ' ', z[C], A).trim();
      }
      return O;
    }
    function i(D, O, A) {
      var z = O.charCodeAt(0);
      switch ((33 > z && (z = (O = O.trim()).charCodeAt(0)), z)) {
        case 38:
          return O.replace(y, '$1' + D.trim());
        case 58:
          return D.trim() + O.replace(y, '$1' + D.trim());
        default:
          if (0 < 1 * A && 0 < O.indexOf('\f'))
            return O.replace(y, (D.charCodeAt(0) === 58 ? '' : '$1') + D.trim());
      }
      return D + O;
    }
    function s(D, O, A, z) {
      var x = D + ';',
        Z = 2 * O + 3 * A + 4 * z;
      if (Z === 944) {
        D = x.indexOf(':', 9) + 1;
        var C = x.substring(D, x.length - 1).trim();
        return (
          (C = x.substring(0, D).trim() + C + ';'),
          j === 1 || (j === 2 && r(C, 1)) ? '-webkit-' + C + C : C
        );
      }
      if (j === 0 || (j === 2 && !r(x, 1))) return x;
      switch (Z) {
        case 1015:
          return x.charCodeAt(10) === 97 ? '-webkit-' + x + x : x;
        case 951:
          return x.charCodeAt(3) === 116 ? '-webkit-' + x + x : x;
        case 963:
          return x.charCodeAt(5) === 110 ? '-webkit-' + x + x : x;
        case 1009:
          if (x.charCodeAt(4) !== 100) break;
        case 969:
        case 942:
          return '-webkit-' + x + x;
        case 978:
          return '-webkit-' + x + '-moz-' + x + x;
        case 1019:
        case 983:
          return '-webkit-' + x + '-moz-' + x + '-ms-' + x + x;
        case 883:
          if (x.charCodeAt(8) === 45) return '-webkit-' + x + x;
          if (0 < x.indexOf('image-set(', 11)) return x.replace(rt, '$1-webkit-$2') + x;
          break;
        case 932:
          if (x.charCodeAt(4) === 45)
            switch (x.charCodeAt(5)) {
              case 103:
                return (
                  '-webkit-box-' +
                  x.replace('-grow', '') +
                  '-webkit-' +
                  x +
                  '-ms-' +
                  x.replace('grow', 'positive') +
                  x
                );
              case 115:
                return '-webkit-' + x + '-ms-' + x.replace('shrink', 'negative') + x;
              case 98:
                return '-webkit-' + x + '-ms-' + x.replace('basis', 'preferred-size') + x;
            }
          return '-webkit-' + x + '-ms-' + x + x;
        case 964:
          return '-webkit-' + x + '-ms-flex-' + x + x;
        case 1023:
          if (x.charCodeAt(8) !== 99) break;
          return (
            (C = x
              .substring(x.indexOf(':', 15))
              .replace('flex-', '')
              .replace('space-between', 'justify')),
            '-webkit-box-pack' + C + '-webkit-' + x + '-ms-flex-pack' + C + x
          );
        case 1005:
          return p.test(x) ? x.replace(d, ':-webkit-') + x.replace(d, ':-moz-') + x : x;
        case 1e3:
          switch (
            ((C = x.substring(13).trim()),
            (O = C.indexOf('-') + 1),
            C.charCodeAt(0) + C.charCodeAt(O))
          ) {
            case 226:
              C = x.replace(w, 'tb');
              break;
            case 232:
              C = x.replace(w, 'tb-rl');
              break;
            case 220:
              C = x.replace(w, 'lr');
              break;
            default:
              return x;
          }
          return '-webkit-' + x + '-ms-' + C + x;
        case 1017:
          if (x.indexOf('sticky', 9) === -1) break;
        case 975:
          switch (
            ((O = (x = D).length - 10),
            (C = (x.charCodeAt(O) === 33 ? x.substring(0, O) : x)
              .substring(D.indexOf(':', 7) + 1)
              .trim()),
            (Z = C.charCodeAt(0) + (C.charCodeAt(7) | 0)))
          ) {
            case 203:
              if (111 > C.charCodeAt(8)) break;
            case 115:
              x = x.replace(C, '-webkit-' + C) + ';' + x;
              break;
            case 207:
            case 102:
              x =
                x.replace(C, '-webkit-' + (102 < Z ? 'inline-' : '') + 'box') +
                ';' +
                x.replace(C, '-webkit-' + C) +
                ';' +
                x.replace(C, '-ms-' + C + 'box') +
                ';' +
                x;
          }
          return x + ';';
        case 938:
          if (x.charCodeAt(5) === 45)
            switch (x.charCodeAt(6)) {
              case 105:
                return (
                  (C = x.replace('-items', '')),
                  '-webkit-' + x + '-webkit-box-' + C + '-ms-flex-' + C + x
                );
              case 115:
                return '-webkit-' + x + '-ms-flex-item-' + x.replace(T, '') + x;
              default:
                return (
                  '-webkit-' +
                  x +
                  '-ms-flex-line-pack' +
                  x.replace('align-content', '').replace(T, '') +
                  x
                );
            }
          break;
        case 973:
        case 989:
          if (x.charCodeAt(3) !== 45 || x.charCodeAt(4) === 122) break;
        case 931:
        case 953:
          if (st.test(D) === !0)
            return (C = D.substring(D.indexOf(':') + 1)).charCodeAt(0) === 115
              ? s(D.replace('stretch', 'fill-available'), O, A, z).replace(
                  ':fill-available',
                  ':stretch'
                )
              : x.replace(C, '-webkit-' + C) + x.replace(C, '-moz-' + C.replace('fill-', '')) + x;
          break;
        case 962:
          if (
            ((x = '-webkit-' + x + (x.charCodeAt(5) === 102 ? '-ms-' + x : '') + x),
            A + z === 211 && x.charCodeAt(13) === 105 && 0 < x.indexOf('transform', 10))
          )
            return x.substring(0, x.indexOf(';', 27) + 1).replace(m, '$1-webkit-$2') + x;
      }
      return x;
    }
    function r(D, O) {
      var A = D.indexOf(O === 1 ? ':' : '{'),
        z = D.substring(0, O !== 3 ? A : 10);
      return (A = D.substring(A + 1, D.length - 1)), Xt(O !== 2 ? z : z.replace(B, '$1'), A, O);
    }
    function o(D, O) {
      var A = s(O, O.charCodeAt(0), O.charCodeAt(1), O.charCodeAt(2));
      return A !== O + ';' ? A.replace(k, ' or ($1)').substring(4) : '(' + O + ')';
    }
    function a(D, O, A, z, x, Z, C, _t, Q, ut) {
      for (var V = 0, Rt = O, he; V < St; ++V)
        switch ((he = xt[V].call(h, D, Rt, A, z, x, Z, C, _t, Q, ut))) {
          case void 0:
          case !1:
          case !0:
          case null:
            break;
          default:
            Rt = he;
        }
      if (Rt !== O) return Rt;
    }
    function c(D) {
      switch (D) {
        case void 0:
        case null:
          St = xt.length = 0;
          break;
        default:
          if (typeof D == 'function') xt[St++] = D;
          else if (typeof D == 'object') for (var O = 0, A = D.length; O < A; ++O) c(D[O]);
          else $t = !!D | 0;
      }
      return c;
    }
    function l(D) {
      return (
        (D = D.prefix),
        D !== void 0 &&
          ((Xt = null), D ? (typeof D != 'function' ? (j = 1) : ((j = 2), (Xt = D))) : (j = 0)),
        l
      );
    }
    function h(D, O) {
      var A = D;
      if ((33 > A.charCodeAt(0) && (A = A.trim()), (Gt = A), (A = [Gt]), 0 < St)) {
        var z = a(-1, O, A, A, tt, Y, 0, 0, 0, 0);
        z !== void 0 && typeof z == 'string' && (O = z);
      }
      var x = t(at, A, O, 0, 0);
      return (
        0 < St && ((z = a(-2, x, A, A, tt, Y, x.length, 0, 0, 0)), z !== void 0 && (x = z)),
        (Gt = ''),
        (ot = 0),
        (Y = tt = 1),
        x
      );
    }
    var f = /^\0+/g,
      u = /[\0\r\f]/g,
      d = /: */g,
      p = /zoo|gra/,
      m = /([,: ])(transform)/g,
      b = /,\r+?/g,
      y = /([\t\r\n ])*\f?&/g,
      _ = /@(k\w+)\s*(\S*)\s*/,
      S = /::(place)/g,
      M = /:(read-only)/g,
      w = /[svh]\w+-[tblr]{2}/,
      P = /\(\s*(.*)\s*\)/g,
      k = /([\s\S]*?);/g,
      T = /-self|flex-/g,
      B = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      st = /stretch|:\s*\w+\-(?:conte|avail)/,
      rt = /([^-])(image-set\()/,
      Y = 1,
      tt = 1,
      ot = 0,
      j = 1,
      at = [],
      xt = [],
      St = 0,
      Xt = null,
      $t = 0,
      Gt = '';
    return (h.use = c), (h.set = l), n !== void 0 && l(n), h;
  }
  var wi = '/*|*/',
    za = wi + '}';
  function Ba(n) {
    n && qe.current.insert(n + '}');
  }
  var qe = { current: null },
    ja = function (t, e, i, s, r, o, a, c, l, h) {
      switch (t) {
        case 1: {
          switch (e.charCodeAt(0)) {
            case 64:
              return qe.current.insert(e + ';'), '';
            case 108:
              if (e.charCodeAt(2) === 98) return '';
          }
          break;
        }
        case 2: {
          if (c === 0) return e + wi;
          break;
        }
        case 3:
          switch (c) {
            case 102:
            case 112:
              return qe.current.insert(i[0] + e), '';
            default:
              return e + (h === 0 ? wi : '');
          }
        case -2:
          e.split(za).forEach(Ba);
      }
    },
    Es = function (t) {
      t === void 0 && (t = {});
      var e = t.key || 'css',
        i;
      t.prefix !== void 0 && (i = { prefix: t.prefix });
      var s = new Na(i);
      if (process.env.NODE_ENV !== 'production' && /[^a-z-]/.test(e))
        throw new Error(
          'Emotion key must only contain lower case alphabetical characters and - but "' +
            e +
            '" was passed'
        );
      var r = {},
        o;
      {
        o = t.container || document.head;
        var a = document.querySelectorAll('style[data-emotion-' + e + ']');
        Array.prototype.forEach.call(a, function (u) {
          var d = u.getAttribute('data-emotion-' + e);
          d.split(' ').forEach(function (p) {
            r[p] = !0;
          }),
            u.parentNode !== o && o.appendChild(u);
        });
      }
      var c;
      if (
        (s.use(t.stylisPlugins)(ja),
        (c = function (d, p, m, b) {
          var y = p.name;
          if (((qe.current = m), process.env.NODE_ENV !== 'production' && p.map !== void 0)) {
            var _ = p.map;
            qe.current = {
              insert: function (M) {
                m.insert(M + _);
              },
            };
          }
          s(d, p.styles), b && (f.inserted[y] = !0);
        }),
        process.env.NODE_ENV !== 'production')
      ) {
        var l = /\/\*/g,
          h = /\*\//g;
        s.use(function (u, d) {
          switch (u) {
            case -1: {
              for (; l.test(d); ) {
                if (((h.lastIndex = l.lastIndex), h.test(d))) {
                  l.lastIndex = h.lastIndex;
                  continue;
                }
                throw new Error(
                  'Your styles have an unterminated comment ("/*" without corresponding "*/").'
                );
              }
              l.lastIndex = 0;
              break;
            }
          }
        }),
          s.use(function (u, d, p) {
            switch (u) {
              case -1: {
                var m =
                    'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason',
                  b = d.match(/(:first|:nth|:nth-last)-child/g);
                b &&
                  f.compat !== !0 &&
                  b.forEach(function (y) {
                    var _ = new RegExp(y + '.*\\/\\* ' + m + ' \\*\\/'),
                      S = _.test(d);
                    y &&
                      !S &&
                      console.error(
                        'The pseudo class "' +
                          y +
                          '" is potentially unsafe when doing server-side rendering. Try changing it to "' +
                          y.split('-child')[0] +
                          '-of-type".'
                      );
                  });
                break;
              }
            }
          });
      }
      var f = {
        key: e,
        sheet: new Ia({ key: e, container: o, nonce: t.nonce, speedy: t.speedy }),
        nonce: t.nonce,
        inserted: r,
        registered: {},
        insert: c,
      };
      return f;
    },
    Va = !0;
  function ki(n, t, e) {
    var i = '';
    return (
      e.split(' ').forEach(function (s) {
        n[s] !== void 0 ? t.push(n[s]) : (i += s + ' ');
      }),
      i
    );
  }
  var Ms = function (t, e, i) {
    var s = t.key + '-' + e.name;
    if (
      ((i === !1 || Va === !1) && t.registered[s] === void 0 && (t.registered[s] = e.styles),
      t.inserted[e.name] === void 0)
    ) {
      var r = e;
      do t.insert('.' + s, r, t.sheet, !0), (r = r.next);
      while (r !== void 0);
    }
  };
  function $a(n) {
    for (var t = 0, e, i = 0, s = n.length; s >= 4; ++i, s -= 4)
      (e =
        (n.charCodeAt(i) & 255) |
        ((n.charCodeAt(++i) & 255) << 8) |
        ((n.charCodeAt(++i) & 255) << 16) |
        ((n.charCodeAt(++i) & 255) << 24)),
        (e = (e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16)),
        (e ^= e >>> 24),
        (t =
          ((e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16)) ^
          ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
    switch (s) {
      case 3:
        t ^= (n.charCodeAt(i + 2) & 255) << 16;
      case 2:
        t ^= (n.charCodeAt(i + 1) & 255) << 8;
      case 1:
        (t ^= n.charCodeAt(i) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
    }
    return (
      (t ^= t >>> 13),
      (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
      ((t ^ (t >>> 15)) >>> 0).toString(36)
    );
  }
  var Wa = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  };
  function Ha(n) {
    var t = {};
    return function (e) {
      return t[e] === void 0 && (t[e] = n(e)), t[e];
    };
  }
  var Os = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
    Ya =
      "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",
    Ua = /[A-Z]|^ms/g,
    Ds = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    Si = function (t) {
      return t.charCodeAt(1) === 45;
    },
    Ps = function (t) {
      return t != null && typeof t != 'boolean';
    },
    Ci = Ha(function (n) {
      return Si(n) ? n : n.replace(Ua, '-$&').toLowerCase();
    }),
    An = function (t, e) {
      switch (t) {
        case 'animation':
        case 'animationName':
          if (typeof e == 'string')
            return e.replace(Ds, function (i, s, r) {
              return (Ht = { name: s, styles: r, next: Ht }), s;
            });
      }
      return Wa[t] !== 1 && !Si(t) && typeof e == 'number' && e !== 0 ? e + 'px' : e;
    };
  if (process.env.NODE_ENV !== 'production') {
    var Xa = /(attr|calc|counters?|url)\(/,
      Ga = [
        'normal',
        'none',
        'counter',
        'open-quote',
        'close-quote',
        'no-open-quote',
        'no-close-quote',
        'initial',
        'inherit',
        'unset',
      ],
      Ka = An,
      qa = /^-ms-/,
      Za = /-(.)/g,
      As = {};
    An = function (t, e) {
      t === 'content' &&
        (typeof e != 'string' ||
          (Ga.indexOf(e) === -1 &&
            !Xa.test(e) &&
            (e.charAt(0) !== e.charAt(e.length - 1) ||
              (e.charAt(0) !== '"' && e.charAt(0) !== "'")))) &&
        console.error(
          "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" +
            e +
            '"\'`'
        );
      var i = Ka(t, e);
      return (
        i !== '' &&
          !Si(t) &&
          t.indexOf('-') !== -1 &&
          As[t] === void 0 &&
          ((As[t] = !0),
          console.error(
            'Using kebab-case for css properties in objects is not supported. Did you mean ' +
              t.replace(qa, 'ms-').replace(Za, function (s, r) {
                return r.toUpperCase();
              }) +
              '?'
          )),
        i
      );
    };
  }
  var Ts = !0;
  function Ze(n, t, e, i) {
    if (e == null) return '';
    if (e.__emotion_styles !== void 0) {
      if (process.env.NODE_ENV !== 'production' && e.toString() === 'NO_COMPONENT_SELECTOR')
        throw new Error(
          'Component selectors can only be used in conjunction with babel-plugin-emotion.'
        );
      return e;
    }
    switch (typeof e) {
      case 'boolean':
        return '';
      case 'object': {
        if (e.anim === 1) return (Ht = { name: e.name, styles: e.styles, next: Ht }), e.name;
        if (e.styles !== void 0) {
          var s = e.next;
          if (s !== void 0)
            for (; s !== void 0; )
              (Ht = { name: s.name, styles: s.styles, next: Ht }), (s = s.next);
          var r = e.styles + ';';
          return process.env.NODE_ENV !== 'production' && e.map !== void 0 && (r += e.map), r;
        }
        return Qa(n, t, e);
      }
      case 'function': {
        if (n !== void 0) {
          var o = Ht,
            a = e(n);
          return (Ht = o), Ze(n, t, a, i);
        } else process.env.NODE_ENV !== 'production' && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
        break;
      }
      case 'string':
        if (process.env.NODE_ENV !== 'production') {
          var c = [],
            l = e.replace(Ds, function (f, u, d) {
              var p = 'animation' + c.length;
              return (
                c.push(
                  'const ' + p + ' = keyframes`' + d.replace(/^@keyframes animation-\w+/, '') + '`'
                ),
                '${' + p + '}'
              );
            });
          c.length &&
            console.error(
              '`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n' +
                [].concat(c, ['`' + l + '`']).join(`
`) +
                `

You should wrap it with \`css\` like this:

` +
                ('css`' + l + '`')
            );
        }
        break;
    }
    if (t == null) return e;
    var h = t[e];
    return (
      process.env.NODE_ENV !== 'production' &&
        i &&
        Ts &&
        h !== void 0 &&
        (console.error(
          'Interpolating a className from css`` is not recommended and will cause problems with composition.\nInterpolating a className from css`` will be completely unsupported in a future major version of Emotion'
        ),
        (Ts = !1)),
      h !== void 0 && !i ? h : e
    );
  }
  function Qa(n, t, e) {
    var i = '';
    if (Array.isArray(e)) for (var s = 0; s < e.length; s++) i += Ze(n, t, e[s], !1);
    else
      for (var r in e) {
        var o = e[r];
        if (typeof o != 'object')
          t != null && t[o] !== void 0
            ? (i += r + '{' + t[o] + '}')
            : Ps(o) && (i += Ci(r) + ':' + An(r, o) + ';');
        else {
          if (r === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production')
            throw new Error(
              'Component selectors can only be used in conjunction with babel-plugin-emotion.'
            );
          if (Array.isArray(o) && typeof o[0] == 'string' && (t == null || t[o[0]] === void 0))
            for (var a = 0; a < o.length; a++) Ps(o[a]) && (i += Ci(r) + ':' + An(r, o[a]) + ';');
          else {
            var c = Ze(n, t, o, !1);
            switch (r) {
              case 'animation':
              case 'animationName': {
                i += Ci(r) + ':' + c + ';';
                break;
              }
              default:
                process.env.NODE_ENV !== 'production' && r === 'undefined' && console.error(Ya),
                  (i += r + '{' + c + '}');
            }
          }
        }
      }
    return i;
  }
  var Rs = /label:\s*([^\s;\n{]+)\s*;/g,
    Fs;
  process.env.NODE_ENV !== 'production' &&
    (Fs = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//);
  var Ht,
    Le = function (t, e, i) {
      if (t.length === 1 && typeof t[0] == 'object' && t[0] !== null && t[0].styles !== void 0)
        return t[0];
      var s = !0,
        r = '';
      Ht = void 0;
      var o = t[0];
      o == null || o.raw === void 0
        ? ((s = !1), (r += Ze(i, e, o, !1)))
        : (process.env.NODE_ENV !== 'production' && o[0] === void 0 && console.error(Os),
          (r += o[0]));
      for (var a = 1; a < t.length; a++)
        (r += Ze(i, e, t[a], r.charCodeAt(r.length - 1) === 46)),
          s &&
            (process.env.NODE_ENV !== 'production' && o[a] === void 0 && console.error(Os),
            (r += o[a]));
      var c;
      process.env.NODE_ENV !== 'production' &&
        (r = r.replace(Fs, function (u) {
          return (c = u), '';
        })),
        (Rs.lastIndex = 0);
      for (var l = '', h; (h = Rs.exec(r)) !== null; ) l += '-' + h[1];
      var f = $a(r) + l;
      return process.env.NODE_ENV !== 'production'
        ? {
            name: f,
            styles: r,
            map: c,
            next: Ht,
            toString: function () {
              return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
            },
          }
        : { name: f, styles: r, next: Ht };
    },
    Ja = Object.prototype.hasOwnProperty,
    Ls = N.createContext(typeof HTMLElement < 'u' ? Es() : null),
    tc = N.createContext({});
  Ls.Provider;
  var ec = function (t) {
      var e = function (s, r) {
        return N.createElement(Ls.Consumer, null, function (o) {
          return t(s, o, r);
        });
      };
      return N.forwardRef(e);
    },
    Is = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
    Ns = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__',
    nc = function () {
      return null;
    },
    zs = function (t, e, i, s) {
      var r = i === null ? e.css : e.css(i);
      typeof r == 'string' && t.registered[r] !== void 0 && (r = t.registered[r]);
      var o = e[Is],
        a = [r],
        c = '';
      typeof e.className == 'string'
        ? (c = ki(t.registered, a, e.className))
        : e.className != null && (c = e.className + ' ');
      var l = Le(a);
      if (process.env.NODE_ENV !== 'production' && l.name.indexOf('-') === -1) {
        var h = e[Ns];
        h && (l = Le([l, 'label:' + h + ';']));
      }
      Ms(t, l, typeof o == 'string'), (c += t.key + '-' + l.name);
      var f = {};
      for (var u in e)
        Ja.call(e, u) &&
          u !== 'css' &&
          u !== Is &&
          (process.env.NODE_ENV === 'production' || u !== Ns) &&
          (f[u] = e[u]);
      (f.ref = s), (f.className = c);
      var d = N.createElement(o, f),
        p = N.createElement(nc, null);
      return N.createElement(N.Fragment, null, p, d);
    },
    ic = ec(function (n, t, e) {
      return typeof n.css == 'function'
        ? N.createElement(tc.Consumer, null, function (i) {
            return zs(t, n, i, e);
          })
        : zs(t, n, null, e);
    });
  process.env.NODE_ENV !== 'production' && (ic.displayName = 'EmotionCssPropInternal');
  function sc() {
    for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++) t[e] = arguments[e];
    return Le(t);
  }
  var Ei = { exports: {} },
    rc = Ei.exports;
  Object.defineProperty(rc, '__esModule', { value: !0 }),
    (Ei.exports = {
      contentWidthDefault: '1280px',
      contentWidthText: '768px',
      contentWidthFull: '100%',
      spacing2Xs: '0.25rem',
      spacingXs: '0.5rem',
      spacingS: '0.75rem',
      spacingM: '1rem',
      spacingL: '1.5rem',
      spacingXl: '2rem',
      spacing2Xl: '3rem',
      spacing3Xl: '4rem',
      spacing4Xl: '5rem',
      zIndexNegative: -1,
      zIndexWorkbench: 0,
      zIndexDefault: 1,
      zIndexWorkbenchHeader: 10,
      zIndexModal: 100,
      zIndexModalContent: 101,
      zIndexDropdown: 1e3,
      zIndexTooltip: 1e4,
      zIndexNotification: 1e5,
      borderRadiusSmall: '4px',
      borderRadiusMedium: '6px',
      boxShadowPositive: '0px 1px 0px rgb(25, 37, 50, 0.1)',
      boxShadowDefault:
        '0px 0px 0px 1px rgba(25, 37, 50, 0.1), 0px 3px 7px -3px rgba(25, 37, 50, 0.1), 0px 6px 12px -2px rgba(25, 37, 50, 0.1);',
      boxShadowHeavy:
        '0px 0px 0px 1px rgba(25, 37, 50, 0.1), 0px -6px 16px -6px rgba(25, 37, 50, 0.03), 0px 8px 16px -8px rgba(25, 37, 50, 0.2), 0px 13px 27px -5px rgba(25, 37, 50, 0.15);',
      insetBoxShadowDefault: 'inset 0px 2px 0px rgba(225, 228, 232, 0.2);',
      glowPrimary: '0px 0px 0px 3px #98CBFF',
      glowNegative: '0px 0px 0px 3px #FFB1B2',
      glowPositive: '0px 0px 0px 3px #9ED696',
      glowWarning: '0px 0px 0px 3px #FDE5C0',
      glowMuted: '0px 0px 0px 3px #E7EBEE',
      colorBlack: '#0C141C',
      colorBlueLightest: '#E8F5FF',
      colorBlueLight: '#98CBFF',
      colorBlueMid: '#036FE3',
      colorBlueBase: '#0059C8',
      colorBlueDark: '#0041AB',
      blue100: '#E8F5FF',
      blue200: '#CEECFF',
      blue300: '#98CBFF',
      blue400: '#40A0FF',
      blue500: '#036FE3',
      blue600: '#0059C8',
      blue700: '#0041AB',
      blue800: '#003298',
      blue900: '#002A8E',
      colorContrastDark: '#0C141C',
      colorContrastMid: '#111B2B',
      colorContrastLight: '#1B273A',
      colorCoralDark: '#FFE0E0',
      colorCoralMid: '#FFF2F2',
      colorElementDarkest: '#67728A',
      colorElementDark: '#AEC1CC',
      colorElementMid: '#CFD9E0',
      colorElementLight: '#E7EBEE',
      colorElementLightest: '#F7F9FA',
      gray100: '#F7F9FA',
      gray200: '#E7EBEE',
      gray300: '#CFD9E0',
      gray400: '#AEC1CC',
      gray500: '#67728A',
      gray600: '#5A657C',
      gray700: '#414D63',
      gray800: '#1B273A',
      gray900: '#111B2B',
      colorGreenDark: '#00550C',
      colorGreenBase: '#006D23',
      colorGreenMid: '#008539',
      colorGreenLight: '#9ED696',
      colorGreenLightest: '#EAF9E8',
      green100: '#EAF9E8',
      green200: '#CDF3C6',
      green300: '#9ED696',
      green400: '#5DB057',
      green500: '#008539',
      green600: '#006D23',
      green700: '#00550C',
      green800: '#004700',
      green900: '#003F00',
      colorIceDark: '#CEECFF',
      colorIceMid: '#E8F5FF',
      colorMintDark: '#CDF3C6',
      colorMintMid: '#EAF9E8',
      colorOrangeDark: '#B12D00',
      colorOrangeBase: '#CC4500',
      colorOrangeMid: '#F07F23',
      colorOrangeLight: '#FDE5C0',
      colorOrangeLightest: '#FFF2E4',
      orange100: '#FFF2E4',
      orange200: '#FDE5C0',
      orange300: '#FDB882',
      orange400: '#F07F23',
      orange500: '#CC4500',
      orange600: '#B12D00',
      orange700: '#892300',
      orange800: '#731A00',
      orange900: '#631C00',
      colorPeachDark: '#FDE5C0',
      colorPeachMid: '#FFF2E4',
      colorPurpleDark: '#5127B5',
      colorPurpleBase: '#6C3ECF',
      colorPurpleMid: '#8553E7',
      colorPurpleLight: '#D1BBFF',
      colorPurpleLightest: '#F7F2FF',
      purple100: '#F7F2FF',
      purple200: '#EDE3FF',
      purple300: '#D1BBFF',
      purple400: '#AE89FF',
      purple500: '#8553E7',
      purple600: '#6C3ECF',
      purple700: '#5127B5',
      purple800: '#3E16A4',
      purple900: '#340E9C',
      colorRedDark: '#990017',
      colorRedBase: '#BD002A',
      colorRedMid: '#DA294A',
      colorRedLight: '#FFB1B2',
      colorRedLightest: '#FFF2F2',
      red100: '#FFF2F2',
      red200: '#FFE0E0',
      red300: '#FFB1B2',
      red400: '#FF707D',
      red500: '#DA294A',
      red600: '#BD002A',
      red700: '#990017',
      red800: '#7F0010',
      red900: '#72000E',
      colorPrimary: '#036FE3',
      colorPositive: '#008539',
      colorNegative: '#DA294A',
      colorWarning: '#F07F23',
      colorTextDark: '#111B2B',
      colorTextBase: '#1B273A',
      colorTextMid: '#414D63',
      colorTextLight: '#5A657C',
      colorTextLightest: '#67728A',
      colorWhite: '#ffffff',
      colorYellowDark: '#956300',
      colorYellowBase: '#EAAF09',
      colorYellowMid: '#FFC835',
      colorYellowLight: '#FFD960',
      colorYellowLightest: '#FFF6CC',
      yellow100: '#FEF9DF',
      yellow200: '#FFF6CC',
      yellow300: '#FFE993',
      yellow400: '#FFD960',
      yellow500: '#FFC835',
      yellow600: '#EAAF09',
      yellow700: '#B78300',
      yellow800: '#956300',
      yellow900: '#7F5200',
      transitionDurationShort: '0.1s',
      transitionDurationDefault: '0.2s',
      transitionDurationLong: '0.3s',
      transitionEasingDefault: 'ease-in-out',
      transitionEasingCubicBezier: 'cubic-bezier(0.13, 0.62, 0.11, 0.99)',
      fontBaseDefault: '16',
      fontSize4Xl: '3rem',
      fontSize3Xl: '2.25rem',
      fontSize2Xl: '1.75rem',
      fontSizeXl: '1.25rem',
      fontSizeL: '1rem',
      fontSizeM: '0.875rem',
      fontSizeS: '0.75rem',
      fontStackPrimary:
        '-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
      fontStackMonospace: 'SFMono-Regular, Consolas, Liberation Mono, Menlo,monospace',
      fontWeightNormal: 400,
      fontWeightMedium: 500,
      fontWeightDemiBold: 600,
      letterSpacingWide: '0.1rem',
      lineHeightDefault: '1.5',
      lineHeightCondensed: '1.25',
      lineHeight4Xl: '3.5rem',
      lineHeight3Xl: '3rem',
      lineHeight2Xl: '2.25rem',
      lineHeightXl: '2rem',
      lineHeightL: '1.5rem',
      lineHeightM: '1.25rem',
      lineHeightS: '1rem',
    });
  var oc = Ei.exports;
  const I = Aa(oc);
  function Bs(n, t) {
    if (n.inserted[t.name] === void 0) return n.insert('', t, n.sheet, !0);
  }
  function js(n, t, e) {
    var i = [],
      s = ki(n, i, e);
    return i.length < 2 ? e : s + t(i);
  }
  var ac = function (t) {
      var e = Es(t);
      (e.sheet.speedy = function (a) {
        if (process.env.NODE_ENV !== 'production' && this.ctr !== 0)
          throw new Error('speedy must be changed before any rules are inserted');
        this.isSpeedy = a;
      }),
        (e.compat = !0);
      var i = function () {
          for (var c = arguments.length, l = new Array(c), h = 0; h < c; h++) l[h] = arguments[h];
          var f = Le(l, e.registered, void 0);
          return Ms(e, f, !1), e.key + '-' + f.name;
        },
        s = function () {
          for (var c = arguments.length, l = new Array(c), h = 0; h < c; h++) l[h] = arguments[h];
          var f = Le(l, e.registered),
            u = 'animation-' + f.name;
          return Bs(e, { name: f.name, styles: '@keyframes ' + u + '{' + f.styles + '}' }), u;
        },
        r = function () {
          for (var c = arguments.length, l = new Array(c), h = 0; h < c; h++) l[h] = arguments[h];
          var f = Le(l, e.registered);
          Bs(e, f);
        },
        o = function () {
          for (var c = arguments.length, l = new Array(c), h = 0; h < c; h++) l[h] = arguments[h];
          return js(e.registered, i, cc(l));
        };
      return {
        css: i,
        cx: o,
        injectGlobal: r,
        keyframes: s,
        hydrate: function (c) {
          c.forEach(function (l) {
            e.inserted[l] = !0;
          });
        },
        flush: function () {
          (e.registered = {}), (e.inserted = {}), e.sheet.flush();
        },
        sheet: e.sheet,
        cache: e,
        getRegisteredStyles: ki.bind(null, e.registered),
        merge: js.bind(null, e.registered, i),
      };
    },
    cc = function n(t) {
      for (var e = '', i = 0; i < t.length; i++) {
        var s = t[i];
        if (s != null) {
          var r = void 0;
          switch (typeof s) {
            case 'boolean':
              break;
            case 'object': {
              if (Array.isArray(s)) r = n(s);
              else {
                r = '';
                for (var o in s) s[o] && o && (r && (r += ' '), (r += o));
              }
              break;
            }
            default:
              r = s;
          }
          r && (e && (e += ' '), (e += r));
        }
      }
      return e;
    },
    Vs = ac(),
    Ie = Vs.cx,
    ie = Vs.css,
    lc = Object.defineProperty,
    hc = Object.defineProperties,
    fc = Object.getOwnPropertyDescriptors,
    Tn = Object.getOwnPropertySymbols,
    $s = Object.prototype.hasOwnProperty,
    Ws = Object.prototype.propertyIsEnumerable,
    Hs = (n, t, e) =>
      t in n ? lc(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (n[t] = e),
    qt = (n, t) => {
      for (var e in t || (t = {})) $s.call(t, e) && Hs(n, e, t[e]);
      if (Tn) for (var e of Tn(t)) Ws.call(t, e) && Hs(n, e, t[e]);
      return n;
    },
    ge = (n, t) => hc(n, fc(t)),
    Qe = (n, t) => {
      var e = {};
      for (var i in n) $s.call(n, i) && t.indexOf(i) < 0 && (e[i] = n[i]);
      if (n != null && Tn) for (var i of Tn(n)) t.indexOf(i) < 0 && Ws.call(n, i) && (e[i] = n[i]);
      return e;
    };
  sc`
  /* Remove default margin */
  /* Button has default margin in some browsers, like safari */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd,
  button {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
  var uc = {
    none: 0,
    spacing2Xs: I.spacing2Xs,
    spacingXs: I.spacingXs,
    spacingS: I.spacingS,
    spacingM: I.spacingM,
    spacingL: I.spacingL,
    spacingXl: I.spacingXl,
    spacing2Xl: I.spacing2Xl,
    spacing3Xl: I.spacing3Xl,
    spacing4Xl: I.spacing4Xl,
  };
  function zt(n) {
    return uc[n];
  }
  function dc(n) {
    return Object.assign(
      {},
      n.margin ? { margin: zt(n.margin) } : null,
      n.marginLeft ? { marginLeft: zt(n.marginLeft) } : null,
      n.marginRight ? { marginRight: zt(n.marginRight) } : null,
      n.marginTop ? { marginTop: zt(n.marginTop) } : null,
      n.marginBottom ? { marginBottom: zt(n.marginBottom) } : null,
      n.padding ? { padding: zt(n.padding) } : null,
      n.paddingLeft ? { paddingLeft: zt(n.paddingLeft) } : null,
      n.paddingRight ? { paddingRight: zt(n.paddingRight) } : null,
      n.paddingTop ? { paddingTop: zt(n.paddingTop) } : null,
      n.paddingBottom ? { paddingBottom: zt(n.paddingBottom) } : null
    );
  }
  var gc = 'div';
  function Je(n) {
    let t = n,
      {
        display: e,
        className: i,
        margin: s,
        marginBottom: r,
        marginLeft: o,
        marginRight: a,
        marginTop: c,
        padding: l,
        paddingBottom: h,
        paddingLeft: f,
        paddingRight: u,
        paddingTop: d,
        testId: p,
        as: m = gc,
      } = t,
      b = Qe(t, [
        'display',
        'className',
        'margin',
        'marginBottom',
        'marginLeft',
        'marginRight',
        'marginTop',
        'padding',
        'paddingBottom',
        'paddingLeft',
        'paddingRight',
        'paddingTop',
        'testId',
        'as',
      ]);
    return {
      boxProps: qt(
        {
          className: Ie(
            ie({ display: e }),
            ie(
              qt(
                {},
                dc({
                  margin: s,
                  marginBottom: r,
                  marginLeft: o,
                  marginRight: a,
                  marginTop: c,
                  padding: l,
                  paddingBottom: h,
                  paddingLeft: f,
                  paddingRight: u,
                  paddingTop: d,
                })
              )
            ),
            i
          ),
          ['data-test-id']: p,
        },
        b
      ),
      Element: m,
    };
  }
  function Ys(n, t) {
    let { boxProps: e, Element: i } = Je(n);
    return Kt.createElement(i, ge(qt({}, e), { ref: t }), n.children);
  }
  (Ys.displayName = 'Box'), Kt.forwardRef(Ys);
  var pc = 'div';
  function Us(n, t) {
    var e = n,
      {
        isInline: i,
        alignItems: s,
        alignSelf: r,
        alignContent: o,
        flex: a,
        flexBasis: c,
        flexShrink: l,
        flexDirection: h,
        flexGrow: f,
        flexWrap: u,
        fullHeight: d,
        fullWidth: p,
        gap: m,
        justifyContent: b,
        justifyItems: y,
        justifySelf: _,
        order: S,
        children: M,
        as: w,
      } = e,
      P = Qe(e, [
        'isInline',
        'alignItems',
        'alignSelf',
        'alignContent',
        'flex',
        'flexBasis',
        'flexShrink',
        'flexDirection',
        'flexGrow',
        'flexWrap',
        'fullHeight',
        'fullWidth',
        'gap',
        'justifyContent',
        'justifyItems',
        'justifySelf',
        'order',
        'children',
        'as',
      ]),
      k;
    let { boxProps: T, Element: B } = Je(ge(qt({}, P), { as: w || pc }));
    return Kt.createElement(
      B,
      ge(qt({}, T), {
        className: Ie(
          ie({
            display: i ? 'inline-flex' : 'flex',
            width: p ? '100%' : void 0,
            height: d ? '100%' : void 0,
            flex: a,
            flexBasis: c,
            flexShrink: l,
            flexDirection: h,
            gap: (k = I[m]) != null ? k : m,
            justifyContent: b,
            justifyItems: y,
            justifySelf: _,
            alignItems: s,
            alignSelf: r,
            alignContent: o,
            order: S,
            flexWrap: u,
            flexGrow: f,
          }),
          T.className
        ),
        ref: t,
      }),
      M
    );
  }
  Us.displayName = 'Flex';
  var Xs = Kt.forwardRef(Us),
    mc = 'div';
  function Gs(n, t) {
    var e = n,
      {
        alignContent: i,
        children: s,
        columnGap: r = 'spacingM',
        columns: o = 'auto',
        flow: a,
        isInline: c,
        justifyContent: l,
        rowGap: h = 'none',
        rows: f = 'auto',
        as: u,
      } = e,
      d = Qe(e, [
        'alignContent',
        'children',
        'columnGap',
        'columns',
        'flow',
        'isInline',
        'justifyContent',
        'rowGap',
        'rows',
        'as',
      ]),
      p,
      m;
    let b = (S) => (typeof S == 'number' ? `repeat(${S}, minmax(0, 1fr))` : S),
      { boxProps: y, Element: _ } = Je(ge(qt({}, d), { as: u || mc }));
    return Kt.createElement(
      _,
      ge(qt({}, y), {
        className: Ie(
          ie({
            display: c ? 'inline-grid' : 'grid',
            gridTemplateColumns: b(o),
            gridTemplateRows: b(f),
            flow: a,
            justifyContent: l,
            alignContent: i,
            columnGap: (p = zt(r)) != null ? p : 0,
            rowGap: (m = zt(h)) != null ? m : 0,
          }),
          y.className
        ),
        ref: t,
      }),
      s
    );
  }
  Gs.displayName = 'Grid';
  var bc = Kt.forwardRef(Gs);
  function Ks(n, t) {
    var e = n,
      { children: i, columnStart: s, columnEnd: r, rowStart: o, rowEnd: a, area: c, order: l } = e,
      h = Qe(e, ['children', 'columnStart', 'columnEnd', 'rowStart', 'rowEnd', 'area', 'order']);
    let f = c || [o || 'auto', s || 'auto', a || 'auto', r || 'auto'].join(' / '),
      { boxProps: u, Element: d } = Je(h);
    return Kt.createElement(
      d,
      ge(qt({}, u), { className: Ie(ie({ gridArea: f, order: l }), u.className), ref: t }),
      i
    );
  }
  Ks.displayName = 'GridItem';
  var yc = Kt.forwardRef(Ks),
    xc = bc;
  xc.Item = yc;
  var _c = 'div';
  function qs(n, t) {
    var e = n,
      {
        flexDirection: i = 'row',
        alignItems: s = 'center',
        isInline: r = !1,
        spacing: o = 'spacingM',
        children: a,
        as: c,
      } = e,
      l = Qe(e, ['flexDirection', 'alignItems', 'isInline', 'spacing', 'children', 'as']);
    let { boxProps: h, Element: f } = Je(ge(qt({}, l), { as: c || _c }));
    return Kt.createElement(
      Xs,
      ge(qt({}, h), {
        as: f,
        flexDirection: i,
        alignItems: s,
        isInline: r,
        className: h.className,
        gap: o,
        ref: t,
      }),
      a
    );
  }
  (qs.displayName = 'Stack'), Kt.forwardRef(qs);
  var vc = Object.defineProperty,
    wc = Object.defineProperties,
    kc = Object.getOwnPropertyDescriptors,
    Rn = Object.getOwnPropertySymbols,
    Zs = Object.prototype.hasOwnProperty,
    Qs = Object.prototype.propertyIsEnumerable,
    Js = (n, t, e) =>
      t in n ? vc(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (n[t] = e),
    tn = (n, t) => {
      for (var e in t || (t = {})) Zs.call(t, e) && Js(n, e, t[e]);
      if (Rn) for (var e of Rn(t)) Qs.call(t, e) && Js(n, e, t[e]);
      return n;
    },
    Mi = (n, t) => wc(n, kc(t)),
    Sc = (n, t) => {
      var e = {};
      for (var i in n) Zs.call(n, i) && t.indexOf(i) < 0 && (e[i] = n[i]);
      if (n != null && Rn) for (var i of Rn(n)) t.indexOf(i) < 0 && Qs.call(n, i) && (e[i] = n[i]);
      return e;
    },
    Cc = (n) => {
      switch (n) {
        case 'primary':
          return { color: I.blue600, '&:hover, &:focus': { color: I.blue700 } };
        case 'secondary':
          return { color: I.gray600, '&:hover, &:focus': { color: I.gray700 } };
        case 'positive':
          return { color: I.green600, '&:hover, &:focus': { color: I.green700 } };
        case 'negative':
          return { color: I.red600, '&:hover, &:focus': { color: I.red700 } };
        case 'muted':
          return { color: I.gray400, '&:hover, &:focus': { color: I.gray500 } };
        case 'white':
          return { color: I.colorWhite, '&:hover, &:focus': { color: I.gray100 } };
        default:
          return { color: I.colorWhite };
      }
    },
    Ec = ({ variant: n, isDisabled: t }) =>
      ie(
        Mi(
          tn(
            {
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxSizing: 'border-box',
              border: 0,
              padding: 0,
              margin: 0,
              fontFamily: I.fontStackPrimary,
              fontSize: I.fontSizeM,
              fontWeight: I.fontWeightMedium,
              transition: `color ${I.transitionDurationShort} ${I.transitionEasingDefault}`,
              textDecoration: 'none',
              background: 'none',
              appearance: 'none',
              whiteSpace: 'normal',
              textAlign: 'left',
              cursor: t ? 'not-allowed' : 'pointer',
              opacity: t ? 0.5 : 1,
            },
            Cc(n)
          ),
          {
            outline: 'none',
            verticalAlign: 'bottom',
            '&:focus, &:focus-visible, &:hover': { textDecoration: t ? 'none' : 'underline' },
            '&:focus': { boxShadow: t ? 'none' : I.glowPrimary, borderRadius: I.borderRadiusSmall },
            '&:focus:not(:focus-visible)': { borderRadius: 0, boxShadow: 'none' },
            '&:focus-visible': {
              borderRadius: I.borderRadiusSmall,
              boxShadow: t ? 'none' : I.glowPrimary,
            },
          }
        )
      ),
    Mc = () =>
      ie({
        fill: 'currentColor',
        transition: `fill ${I.transitionDurationShort} ${I.transitionEasingDefault}`,
      }),
    Oc = ({ alignIcon: n }) => {
      if (n === 'start') return ie({ marginLeft: I.spacing2Xs });
      if (n === 'end') return ie({ marginRight: I.spacing2Xs });
    },
    Oi = { textLink: Ec, textLinkIcon: Mc, textLinkText: Oc },
    Dc = 'a';
  function tr(n, t) {
    let e = n,
      {
        children: i,
        className: s,
        testId: r = 'cf-ui-text-link',
        variant: o = 'primary',
        href: a,
        icon: c,
        alignIcon: l = 'start',
        isDisabled: h,
        as: f = Dc,
      } = e,
      u = Sc(e, [
        'children',
        'className',
        'testId',
        'variant',
        'href',
        'icon',
        'alignIcon',
        'isDisabled',
        'as',
      ]),
      d = tn(
        {
          ref: t,
          className: Ie(Oi.textLink({ variant: o, isDisabled: h }), n.className),
          ['data-test-id']: r,
        },
        u
      ),
      p = c
        ? N.createElement(
            Xs,
            { as: 'span' },
            N.cloneElement(c, {
              className: Ie(c.props.className, Oi.textLinkIcon()),
              size: 'small',
            })
          )
        : null,
      m = N.createElement(
        N.Fragment,
        null,
        c && l === 'start' && p,
        i &&
          N.createElement('span', { className: Oi.textLinkText({ alignIcon: c ? l : void 0 }) }, i),
        c && l === 'end' && p
      );
    return f === 'button'
      ? N.createElement('button', Mi(tn({}, d), { disabled: h, type: 'button' }), m)
      : N.createElement(
          'a',
          tn(
            Mi(tn({}, d), {
              onClick: h
                ? (b) => {
                    b.preventDefault();
                  }
                : d.onClick,
              href: a,
            }),
            h ? { tabIndex: -1 } : {}
          ),
          m
        );
  }
  tr.displayName = 'TextLink';
  var Pc = N.forwardRef(tr);
  const Ac = (n) => {
    const {
        body: t,
        substring: e,
        onClick: i = () => {},
        hyperLinkHref: s,
        icon: r,
        alignIcon: o,
      } = n,
      a = (l) =>
        vi.jsx(
          Pc,
          {
            onClick: i,
            href: s,
            target: '_blank',
            rel: 'noopener noreferer',
            icon: r,
            alignIcon: o,
            children: e,
          },
          `textLink-${l}`
        );
    return (() => t.split(e).reduce((h, f, u) => (u ? h.concat(a(u), f) : [f]), []))();
  };
  /*!
   * @kurkle/color v0.3.2
   * https://github.com/kurkle/color#readme
   * (c) 2023 Jukka Kurkela
   * Released under the MIT License
   */ function en(n) {
    return (n + 0.5) | 0;
  }
  const pe = (n, t, e) => Math.max(Math.min(n, e), t);
  function nn(n) {
    return pe(en(n * 2.55), 0, 255);
  }
  function me(n) {
    return pe(en(n * 255), 0, 255);
  }
  function se(n) {
    return pe(en(n / 2.55) / 100, 0, 1);
  }
  function er(n) {
    return pe(en(n * 100), 0, 100);
  }
  const Bt = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15,
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15,
    },
    Di = [...'0123456789ABCDEF'],
    Tc = (n) => Di[n & 15],
    Rc = (n) => Di[(n & 240) >> 4] + Di[n & 15],
    Fn = (n) => (n & 240) >> 4 === (n & 15),
    Fc = (n) => Fn(n.r) && Fn(n.g) && Fn(n.b) && Fn(n.a);
  function Lc(n) {
    var t = n.length,
      e;
    return (
      n[0] === '#' &&
        (t === 4 || t === 5
          ? (e = {
              r: 255 & (Bt[n[1]] * 17),
              g: 255 & (Bt[n[2]] * 17),
              b: 255 & (Bt[n[3]] * 17),
              a: t === 5 ? Bt[n[4]] * 17 : 255,
            })
          : (t === 7 || t === 9) &&
            (e = {
              r: (Bt[n[1]] << 4) | Bt[n[2]],
              g: (Bt[n[3]] << 4) | Bt[n[4]],
              b: (Bt[n[5]] << 4) | Bt[n[6]],
              a: t === 9 ? (Bt[n[7]] << 4) | Bt[n[8]] : 255,
            })),
      e
    );
  }
  const Ic = (n, t) => (n < 255 ? t(n) : '');
  function Nc(n) {
    var t = Fc(n) ? Tc : Rc;
    return n ? '#' + t(n.r) + t(n.g) + t(n.b) + Ic(n.a, t) : void 0;
  }
  const zc =
    /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
  function nr(n, t, e) {
    const i = t * Math.min(e, 1 - e),
      s = (r, o = (r + n / 30) % 12) => e - i * Math.max(Math.min(o - 3, 9 - o, 1), -1);
    return [s(0), s(8), s(4)];
  }
  function Bc(n, t, e) {
    const i = (s, r = (s + n / 60) % 6) => e - e * t * Math.max(Math.min(r, 4 - r, 1), 0);
    return [i(5), i(3), i(1)];
  }
  function jc(n, t, e) {
    const i = nr(n, 1, 0.5);
    let s;
    for (t + e > 1 && ((s = 1 / (t + e)), (t *= s), (e *= s)), s = 0; s < 3; s++)
      (i[s] *= 1 - t - e), (i[s] += t);
    return i;
  }
  function Vc(n, t, e, i, s) {
    return n === s ? (t - e) / i + (t < e ? 6 : 0) : t === s ? (e - n) / i + 2 : (n - t) / i + 4;
  }
  function Pi(n) {
    const e = n.r / 255,
      i = n.g / 255,
      s = n.b / 255,
      r = Math.max(e, i, s),
      o = Math.min(e, i, s),
      a = (r + o) / 2;
    let c, l, h;
    return (
      r !== o &&
        ((h = r - o),
        (l = a > 0.5 ? h / (2 - r - o) : h / (r + o)),
        (c = Vc(e, i, s, h, r)),
        (c = c * 60 + 0.5)),
      [c | 0, l || 0, a]
    );
  }
  function Ai(n, t, e, i) {
    return (Array.isArray(t) ? n(t[0], t[1], t[2]) : n(t, e, i)).map(me);
  }
  function Ti(n, t, e) {
    return Ai(nr, n, t, e);
  }
  function $c(n, t, e) {
    return Ai(jc, n, t, e);
  }
  function Wc(n, t, e) {
    return Ai(Bc, n, t, e);
  }
  function ir(n) {
    return ((n % 360) + 360) % 360;
  }
  function Hc(n) {
    const t = zc.exec(n);
    let e = 255,
      i;
    if (!t) return;
    t[5] !== i && (e = t[6] ? nn(+t[5]) : me(+t[5]));
    const s = ir(+t[2]),
      r = +t[3] / 100,
      o = +t[4] / 100;
    return (
      t[1] === 'hwb' ? (i = $c(s, r, o)) : t[1] === 'hsv' ? (i = Wc(s, r, o)) : (i = Ti(s, r, o)),
      { r: i[0], g: i[1], b: i[2], a: e }
    );
  }
  function Yc(n, t) {
    var e = Pi(n);
    (e[0] = ir(e[0] + t)), (e = Ti(e)), (n.r = e[0]), (n.g = e[1]), (n.b = e[2]);
  }
  function Uc(n) {
    if (!n) return;
    const t = Pi(n),
      e = t[0],
      i = er(t[1]),
      s = er(t[2]);
    return n.a < 255 ? `hsla(${e}, ${i}%, ${s}%, ${se(n.a)})` : `hsl(${e}, ${i}%, ${s}%)`;
  }
  const sr = {
      x: 'dark',
      Z: 'light',
      Y: 're',
      X: 'blu',
      W: 'gr',
      V: 'medium',
      U: 'slate',
      A: 'ee',
      T: 'ol',
      S: 'or',
      B: 'ra',
      C: 'lateg',
      D: 'ights',
      R: 'in',
      Q: 'turquois',
      E: 'hi',
      P: 'ro',
      O: 'al',
      N: 'le',
      M: 'de',
      L: 'yello',
      F: 'en',
      K: 'ch',
      G: 'arks',
      H: 'ea',
      I: 'ightg',
      J: 'wh',
    },
    rr = {
      OiceXe: 'f0f8ff',
      antiquewEte: 'faebd7',
      aqua: 'ffff',
      aquamarRe: '7fffd4',
      azuY: 'f0ffff',
      beige: 'f5f5dc',
      bisque: 'ffe4c4',
      black: '0',
      blanKedOmond: 'ffebcd',
      Xe: 'ff',
      XeviTet: '8a2be2',
      bPwn: 'a52a2a',
      burlywood: 'deb887',
      caMtXe: '5f9ea0',
      KartYuse: '7fff00',
      KocTate: 'd2691e',
      cSO: 'ff7f50',
      cSnflowerXe: '6495ed',
      cSnsilk: 'fff8dc',
      crimson: 'dc143c',
      cyan: 'ffff',
      xXe: '8b',
      xcyan: '8b8b',
      xgTMnPd: 'b8860b',
      xWay: 'a9a9a9',
      xgYF: '6400',
      xgYy: 'a9a9a9',
      xkhaki: 'bdb76b',
      xmagFta: '8b008b',
      xTivegYF: '556b2f',
      xSange: 'ff8c00',
      xScEd: '9932cc',
      xYd: '8b0000',
      xsOmon: 'e9967a',
      xsHgYF: '8fbc8f',
      xUXe: '483d8b',
      xUWay: '2f4f4f',
      xUgYy: '2f4f4f',
      xQe: 'ced1',
      xviTet: '9400d3',
      dAppRk: 'ff1493',
      dApskyXe: 'bfff',
      dimWay: '696969',
      dimgYy: '696969',
      dodgerXe: '1e90ff',
      fiYbrick: 'b22222',
      flSOwEte: 'fffaf0',
      foYstWAn: '228b22',
      fuKsia: 'ff00ff',
      gaRsbSo: 'dcdcdc',
      ghostwEte: 'f8f8ff',
      gTd: 'ffd700',
      gTMnPd: 'daa520',
      Way: '808080',
      gYF: '8000',
      gYFLw: 'adff2f',
      gYy: '808080',
      honeyMw: 'f0fff0',
      hotpRk: 'ff69b4',
      RdianYd: 'cd5c5c',
      Rdigo: '4b0082',
      ivSy: 'fffff0',
      khaki: 'f0e68c',
      lavFMr: 'e6e6fa',
      lavFMrXsh: 'fff0f5',
      lawngYF: '7cfc00',
      NmoncEffon: 'fffacd',
      ZXe: 'add8e6',
      ZcSO: 'f08080',
      Zcyan: 'e0ffff',
      ZgTMnPdLw: 'fafad2',
      ZWay: 'd3d3d3',
      ZgYF: '90ee90',
      ZgYy: 'd3d3d3',
      ZpRk: 'ffb6c1',
      ZsOmon: 'ffa07a',
      ZsHgYF: '20b2aa',
      ZskyXe: '87cefa',
      ZUWay: '778899',
      ZUgYy: '778899',
      ZstAlXe: 'b0c4de',
      ZLw: 'ffffe0',
      lime: 'ff00',
      limegYF: '32cd32',
      lRF: 'faf0e6',
      magFta: 'ff00ff',
      maPon: '800000',
      VaquamarRe: '66cdaa',
      VXe: 'cd',
      VScEd: 'ba55d3',
      VpurpN: '9370db',
      VsHgYF: '3cb371',
      VUXe: '7b68ee',
      VsprRggYF: 'fa9a',
      VQe: '48d1cc',
      VviTetYd: 'c71585',
      midnightXe: '191970',
      mRtcYam: 'f5fffa',
      mistyPse: 'ffe4e1',
      moccasR: 'ffe4b5',
      navajowEte: 'ffdead',
      navy: '80',
      Tdlace: 'fdf5e6',
      Tive: '808000',
      TivedBb: '6b8e23',
      Sange: 'ffa500',
      SangeYd: 'ff4500',
      ScEd: 'da70d6',
      pOegTMnPd: 'eee8aa',
      pOegYF: '98fb98',
      pOeQe: 'afeeee',
      pOeviTetYd: 'db7093',
      papayawEp: 'ffefd5',
      pHKpuff: 'ffdab9',
      peru: 'cd853f',
      pRk: 'ffc0cb',
      plum: 'dda0dd',
      powMrXe: 'b0e0e6',
      purpN: '800080',
      YbeccapurpN: '663399',
      Yd: 'ff0000',
      Psybrown: 'bc8f8f',
      PyOXe: '4169e1',
      saddNbPwn: '8b4513',
      sOmon: 'fa8072',
      sandybPwn: 'f4a460',
      sHgYF: '2e8b57',
      sHshell: 'fff5ee',
      siFna: 'a0522d',
      silver: 'c0c0c0',
      skyXe: '87ceeb',
      UXe: '6a5acd',
      UWay: '708090',
      UgYy: '708090',
      snow: 'fffafa',
      sprRggYF: 'ff7f',
      stAlXe: '4682b4',
      tan: 'd2b48c',
      teO: '8080',
      tEstN: 'd8bfd8',
      tomato: 'ff6347',
      Qe: '40e0d0',
      viTet: 'ee82ee',
      JHt: 'f5deb3',
      wEte: 'ffffff',
      wEtesmoke: 'f5f5f5',
      Lw: 'ffff00',
      LwgYF: '9acd32',
    };
  function Xc() {
    const n = {},
      t = Object.keys(rr),
      e = Object.keys(sr);
    let i, s, r, o, a;
    for (i = 0; i < t.length; i++) {
      for (o = a = t[i], s = 0; s < e.length; s++) (r = e[s]), (a = a.replace(r, sr[r]));
      (r = parseInt(rr[o], 16)), (n[a] = [(r >> 16) & 255, (r >> 8) & 255, r & 255]);
    }
    return n;
  }
  let Ln;
  function Gc(n) {
    Ln || ((Ln = Xc()), (Ln.transparent = [0, 0, 0, 0]));
    const t = Ln[n.toLowerCase()];
    return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
  }
  const Kc =
    /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
  function qc(n) {
    const t = Kc.exec(n);
    let e = 255,
      i,
      s,
      r;
    if (t) {
      if (t[7] !== i) {
        const o = +t[7];
        e = t[8] ? nn(o) : pe(o * 255, 0, 255);
      }
      return (
        (i = +t[1]),
        (s = +t[3]),
        (r = +t[5]),
        (i = 255 & (t[2] ? nn(i) : pe(i, 0, 255))),
        (s = 255 & (t[4] ? nn(s) : pe(s, 0, 255))),
        (r = 255 & (t[6] ? nn(r) : pe(r, 0, 255))),
        { r: i, g: s, b: r, a: e }
      );
    }
  }
  function Zc(n) {
    return (
      n && (n.a < 255 ? `rgba(${n.r}, ${n.g}, ${n.b}, ${se(n.a)})` : `rgb(${n.r}, ${n.g}, ${n.b})`)
    );
  }
  const Ri = (n) => (n <= 0.0031308 ? n * 12.92 : Math.pow(n, 1 / 2.4) * 1.055 - 0.055),
    Ne = (n) => (n <= 0.04045 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4));
  function Qc(n, t, e) {
    const i = Ne(se(n.r)),
      s = Ne(se(n.g)),
      r = Ne(se(n.b));
    return {
      r: me(Ri(i + e * (Ne(se(t.r)) - i))),
      g: me(Ri(s + e * (Ne(se(t.g)) - s))),
      b: me(Ri(r + e * (Ne(se(t.b)) - r))),
      a: n.a + e * (t.a - n.a),
    };
  }
  function In(n, t, e) {
    if (n) {
      let i = Pi(n);
      (i[t] = Math.max(0, Math.min(i[t] + i[t] * e, t === 0 ? 360 : 1))),
        (i = Ti(i)),
        (n.r = i[0]),
        (n.g = i[1]),
        (n.b = i[2]);
    }
  }
  function or(n, t) {
    return n && Object.assign(t || {}, n);
  }
  function ar(n) {
    var t = { r: 0, g: 0, b: 0, a: 255 };
    return (
      Array.isArray(n)
        ? n.length >= 3 &&
          ((t = { r: n[0], g: n[1], b: n[2], a: 255 }), n.length > 3 && (t.a = me(n[3])))
        : ((t = or(n, { r: 0, g: 0, b: 0, a: 1 })), (t.a = me(t.a))),
      t
    );
  }
  function Jc(n) {
    return n.charAt(0) === 'r' ? qc(n) : Hc(n);
  }
  class sn {
    constructor(t) {
      if (t instanceof sn) return t;
      const e = typeof t;
      let i;
      e === 'object' ? (i = ar(t)) : e === 'string' && (i = Lc(t) || Gc(t) || Jc(t)),
        (this._rgb = i),
        (this._valid = !!i);
    }
    get valid() {
      return this._valid;
    }
    get rgb() {
      var t = or(this._rgb);
      return t && (t.a = se(t.a)), t;
    }
    set rgb(t) {
      this._rgb = ar(t);
    }
    rgbString() {
      return this._valid ? Zc(this._rgb) : void 0;
    }
    hexString() {
      return this._valid ? Nc(this._rgb) : void 0;
    }
    hslString() {
      return this._valid ? Uc(this._rgb) : void 0;
    }
    mix(t, e) {
      if (t) {
        const i = this.rgb,
          s = t.rgb;
        let r;
        const o = e === r ? 0.5 : e,
          a = 2 * o - 1,
          c = i.a - s.a,
          l = ((a * c === -1 ? a : (a + c) / (1 + a * c)) + 1) / 2;
        (r = 1 - l),
          (i.r = 255 & (l * i.r + r * s.r + 0.5)),
          (i.g = 255 & (l * i.g + r * s.g + 0.5)),
          (i.b = 255 & (l * i.b + r * s.b + 0.5)),
          (i.a = o * i.a + (1 - o) * s.a),
          (this.rgb = i);
      }
      return this;
    }
    interpolate(t, e) {
      return t && (this._rgb = Qc(this._rgb, t._rgb, e)), this;
    }
    clone() {
      return new sn(this.rgb);
    }
    alpha(t) {
      return (this._rgb.a = me(t)), this;
    }
    clearer(t) {
      const e = this._rgb;
      return (e.a *= 1 - t), this;
    }
    greyscale() {
      const t = this._rgb,
        e = en(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
      return (t.r = t.g = t.b = e), this;
    }
    opaquer(t) {
      const e = this._rgb;
      return (e.a *= 1 + t), this;
    }
    negate() {
      const t = this._rgb;
      return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
    }
    lighten(t) {
      return In(this._rgb, 2, t), this;
    }
    darken(t) {
      return In(this._rgb, 2, -t), this;
    }
    saturate(t) {
      return In(this._rgb, 1, t), this;
    }
    desaturate(t) {
      return In(this._rgb, 1, -t), this;
    }
    rotate(t) {
      return Yc(this._rgb, t), this;
    }
  }
  /*!
   * Chart.js v4.3.0
   * https://www.chartjs.org
   * (c) 2023 Chart.js Contributors
   * Released under the MIT License
   */ function re() {}
  const tl = (() => {
    let n = 0;
    return () => n++;
  })();
  function it(n) {
    return n === null || typeof n > 'u';
  }
  function lt(n) {
    if (Array.isArray && Array.isArray(n)) return !0;
    const t = Object.prototype.toString.call(n);
    return t.slice(0, 7) === '[object' && t.slice(-6) === 'Array]';
  }
  function X(n) {
    return n !== null && Object.prototype.toString.call(n) === '[object Object]';
  }
  function wt(n) {
    return (typeof n == 'number' || n instanceof Number) && isFinite(+n);
  }
  function Ft(n, t) {
    return wt(n) ? n : t;
  }
  function et(n, t) {
    return typeof n > 'u' ? t : n;
  }
  const el = (n, t) => (typeof n == 'string' && n.endsWith('%') ? (parseFloat(n) / 100) * t : +n);
  function ht(n, t, e) {
    if (n && typeof n.call == 'function') return n.apply(e, t);
  }
  function J(n, t, e, i) {
    let s, r, o;
    if (lt(n))
      if (((r = n.length), i)) for (s = r - 1; s >= 0; s--) t.call(e, n[s], s);
      else for (s = 0; s < r; s++) t.call(e, n[s], s);
    else if (X(n))
      for (o = Object.keys(n), r = o.length, s = 0; s < r; s++) t.call(e, n[o[s]], o[s]);
  }
  function Nn(n, t) {
    let e, i, s, r;
    if (!n || !t || n.length !== t.length) return !1;
    for (e = 0, i = n.length; e < i; ++e)
      if (((s = n[e]), (r = t[e]), s.datasetIndex !== r.datasetIndex || s.index !== r.index))
        return !1;
    return !0;
  }
  function zn(n) {
    if (lt(n)) return n.map(zn);
    if (X(n)) {
      const t = Object.create(null),
        e = Object.keys(n),
        i = e.length;
      let s = 0;
      for (; s < i; ++s) t[e[s]] = zn(n[e[s]]);
      return t;
    }
    return n;
  }
  function cr(n) {
    return ['__proto__', 'prototype', 'constructor'].indexOf(n) === -1;
  }
  function nl(n, t, e, i) {
    if (!cr(n)) return;
    const s = t[n],
      r = e[n];
    X(s) && X(r) ? rn(s, r, i) : (t[n] = zn(r));
  }
  function rn(n, t, e) {
    const i = lt(t) ? t : [t],
      s = i.length;
    if (!X(n)) return n;
    e = e || {};
    const r = e.merger || nl;
    let o;
    for (let a = 0; a < s; ++a) {
      if (((o = i[a]), !X(o))) continue;
      const c = Object.keys(o);
      for (let l = 0, h = c.length; l < h; ++l) r(c[l], n, o, e);
    }
    return n;
  }
  function on(n, t) {
    return rn(n, t, { merger: il });
  }
  function il(n, t, e) {
    if (!cr(n)) return;
    const i = t[n],
      s = e[n];
    X(i) && X(s) ? on(i, s) : Object.prototype.hasOwnProperty.call(t, n) || (t[n] = zn(s));
  }
  const lr = { '': (n) => n, x: (n) => n.x, y: (n) => n.y };
  function sl(n) {
    const t = n.split('.'),
      e = [];
    let i = '';
    for (const s of t)
      (i += s), i.endsWith('\\') ? (i = i.slice(0, -1) + '.') : (e.push(i), (i = ''));
    return e;
  }
  function rl(n) {
    const t = sl(n);
    return (e) => {
      for (const i of t) {
        if (i === '') break;
        e = e && e[i];
      }
      return e;
    };
  }
  function Bn(n, t) {
    return (lr[t] || (lr[t] = rl(t)))(n);
  }
  function Fi(n) {
    return n.charAt(0).toUpperCase() + n.slice(1);
  }
  const jn = (n) => typeof n < 'u',
    be = (n) => typeof n == 'function',
    hr = (n, t) => {
      if (n.size !== t.size) return !1;
      for (const e of n) if (!t.has(e)) return !1;
      return !0;
    };
  function ol(n) {
    return n.type === 'mouseup' || n.type === 'click' || n.type === 'contextmenu';
  }
  const yt = Math.PI,
    jt = 2 * yt,
    al = jt + yt,
    Vn = Number.POSITIVE_INFINITY,
    cl = yt / 180,
    Dt = yt / 2,
    Ce = yt / 4,
    fr = (yt * 2) / 3,
    ye = Math.log10,
    ze = Math.sign;
  function an(n, t, e) {
    return Math.abs(n - t) < e;
  }
  function ur(n) {
    const t = Math.round(n);
    n = an(n, t, n / 1e3) ? t : n;
    const e = Math.pow(10, Math.floor(ye(n))),
      i = n / e;
    return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * e;
  }
  function ll(n) {
    const t = [],
      e = Math.sqrt(n);
    let i;
    for (i = 1; i < e; i++) n % i === 0 && (t.push(i), t.push(n / i));
    return e === (e | 0) && t.push(e), t.sort((s, r) => s - r).pop(), t;
  }
  function cn(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  function hl(n, t) {
    const e = Math.round(n);
    return e - t <= n && e + t >= n;
  }
  function dr(n, t, e) {
    let i, s, r;
    for (i = 0, s = n.length; i < s; i++)
      (r = n[i][e]), isNaN(r) || ((t.min = Math.min(t.min, r)), (t.max = Math.max(t.max, r)));
  }
  function xe(n) {
    return n * (yt / 180);
  }
  function Li(n) {
    return n * (180 / yt);
  }
  function gr(n) {
    if (!wt(n)) return;
    let t = 1,
      e = 0;
    for (; Math.round(n * t) / t !== n; ) (t *= 10), e++;
    return e;
  }
  function fl(n, t) {
    const e = t.x - n.x,
      i = t.y - n.y,
      s = Math.sqrt(e * e + i * i);
    let r = Math.atan2(i, e);
    return r < -0.5 * yt && (r += jt), { angle: r, distance: s };
  }
  function Ii(n, t) {
    return Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2));
  }
  function ul(n, t) {
    return ((n - t + al) % jt) - yt;
  }
  function Yt(n) {
    return ((n % jt) + jt) % jt;
  }
  function pr(n, t, e, i) {
    const s = Yt(n),
      r = Yt(t),
      o = Yt(e),
      a = Yt(r - s),
      c = Yt(o - s),
      l = Yt(s - r),
      h = Yt(s - o);
    return s === r || s === o || (i && r === o) || (a > c && l < h);
  }
  function Vt(n, t, e) {
    return Math.max(t, Math.min(e, n));
  }
  function dl(n) {
    return Vt(n, -32768, 32767);
  }
  function gl(n, t, e, i = 1e-6) {
    return n >= Math.min(t, e) - i && n <= Math.max(t, e) + i;
  }
  function Ni(n, t, e) {
    e = e || ((o) => n[o] < t);
    let i = n.length - 1,
      s = 0,
      r;
    for (; i - s > 1; ) (r = (s + i) >> 1), e(r) ? (s = r) : (i = r);
    return { lo: s, hi: i };
  }
  const Ee = (n, t, e, i) =>
      Ni(
        n,
        e,
        i
          ? (s) => {
              const r = n[s][t];
              return r < e || (r === e && n[s + 1][t] === e);
            }
          : (s) => n[s][t] < e
      ),
    pl = (n, t, e) => Ni(n, e, (i) => n[i][t] >= e);
  function ml(n, t, e) {
    let i = 0,
      s = n.length;
    for (; i < s && n[i] < t; ) i++;
    for (; s > i && n[s - 1] > e; ) s--;
    return i > 0 || s < n.length ? n.slice(i, s) : n;
  }
  const mr = ['push', 'pop', 'shift', 'splice', 'unshift'];
  function bl(n, t) {
    if (n._chartjs) {
      n._chartjs.listeners.push(t);
      return;
    }
    Object.defineProperty(n, '_chartjs', {
      configurable: !0,
      enumerable: !1,
      value: { listeners: [t] },
    }),
      mr.forEach((e) => {
        const i = '_onData' + Fi(e),
          s = n[e];
        Object.defineProperty(n, e, {
          configurable: !0,
          enumerable: !1,
          value(...r) {
            const o = s.apply(this, r);
            return (
              n._chartjs.listeners.forEach((a) => {
                typeof a[i] == 'function' && a[i](...r);
              }),
              o
            );
          },
        });
      });
  }
  function br(n, t) {
    const e = n._chartjs;
    if (!e) return;
    const i = e.listeners,
      s = i.indexOf(t);
    s !== -1 && i.splice(s, 1),
      !(i.length > 0) &&
        (mr.forEach((r) => {
          delete n[r];
        }),
        delete n._chartjs);
  }
  function yl(n) {
    const t = new Set(n);
    return t.size === n.length ? n : Array.from(t);
  }
  const yr = (function () {
    return typeof window > 'u'
      ? function (n) {
          return n();
        }
      : window.requestAnimationFrame;
  })();
  function xr(n, t) {
    let e = [],
      i = !1;
    return function (...s) {
      (e = s),
        i ||
          ((i = !0),
          yr.call(window, () => {
            (i = !1), n.apply(t, e);
          }));
    };
  }
  function xl(n, t) {
    let e;
    return function (...i) {
      return t ? (clearTimeout(e), (e = setTimeout(n, t, i))) : n.apply(this, i), t;
    };
  }
  const _r = (n) => (n === 'start' ? 'left' : n === 'end' ? 'right' : 'center'),
    ln = (n, t, e) => (n === 'start' ? t : n === 'end' ? e : (t + e) / 2);
  function _l(n, t, e) {
    const i = t.length;
    let s = 0,
      r = i;
    if (n._sorted) {
      const { iScale: o, _parsed: a } = n,
        c = o.axis,
        { min: l, max: h, minDefined: f, maxDefined: u } = o.getUserBounds();
      f &&
        (s = Vt(
          Math.min(Ee(a, o.axis, l).lo, e ? i : Ee(t, c, o.getPixelForValue(l)).lo),
          0,
          i - 1
        )),
        u
          ? (r =
              Vt(
                Math.max(
                  Ee(a, o.axis, h, !0).hi + 1,
                  e ? 0 : Ee(t, c, o.getPixelForValue(h), !0).hi + 1
                ),
                s,
                i
              ) - s)
          : (r = i - s);
    }
    return { start: s, count: r };
  }
  function vl(n) {
    const { xScale: t, yScale: e, _scaleRanges: i } = n,
      s = { xmin: t.min, xmax: t.max, ymin: e.min, ymax: e.max };
    if (!i) return (n._scaleRanges = s), !0;
    const r = i.xmin !== t.min || i.xmax !== t.max || i.ymin !== e.min || i.ymax !== e.max;
    return Object.assign(i, s), r;
  }
  const $n = (n) => n === 0 || n === 1,
    vr = (n, t, e) => -(Math.pow(2, 10 * (n -= 1)) * Math.sin(((n - t) * jt) / e)),
    wr = (n, t, e) => Math.pow(2, -10 * n) * Math.sin(((n - t) * jt) / e) + 1,
    hn = {
      linear: (n) => n,
      easeInQuad: (n) => n * n,
      easeOutQuad: (n) => -n * (n - 2),
      easeInOutQuad: (n) => ((n /= 0.5) < 1 ? 0.5 * n * n : -0.5 * (--n * (n - 2) - 1)),
      easeInCubic: (n) => n * n * n,
      easeOutCubic: (n) => (n -= 1) * n * n + 1,
      easeInOutCubic: (n) => ((n /= 0.5) < 1 ? 0.5 * n * n * n : 0.5 * ((n -= 2) * n * n + 2)),
      easeInQuart: (n) => n * n * n * n,
      easeOutQuart: (n) => -((n -= 1) * n * n * n - 1),
      easeInOutQuart: (n) =>
        (n /= 0.5) < 1 ? 0.5 * n * n * n * n : -0.5 * ((n -= 2) * n * n * n - 2),
      easeInQuint: (n) => n * n * n * n * n,
      easeOutQuint: (n) => (n -= 1) * n * n * n * n + 1,
      easeInOutQuint: (n) =>
        (n /= 0.5) < 1 ? 0.5 * n * n * n * n * n : 0.5 * ((n -= 2) * n * n * n * n + 2),
      easeInSine: (n) => -Math.cos(n * Dt) + 1,
      easeOutSine: (n) => Math.sin(n * Dt),
      easeInOutSine: (n) => -0.5 * (Math.cos(yt * n) - 1),
      easeInExpo: (n) => (n === 0 ? 0 : Math.pow(2, 10 * (n - 1))),
      easeOutExpo: (n) => (n === 1 ? 1 : -Math.pow(2, -10 * n) + 1),
      easeInOutExpo: (n) =>
        $n(n)
          ? n
          : n < 0.5
          ? 0.5 * Math.pow(2, 10 * (n * 2 - 1))
          : 0.5 * (-Math.pow(2, -10 * (n * 2 - 1)) + 2),
      easeInCirc: (n) => (n >= 1 ? n : -(Math.sqrt(1 - n * n) - 1)),
      easeOutCirc: (n) => Math.sqrt(1 - (n -= 1) * n),
      easeInOutCirc: (n) =>
        (n /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - n * n) - 1)
          : 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1),
      easeInElastic: (n) => ($n(n) ? n : vr(n, 0.075, 0.3)),
      easeOutElastic: (n) => ($n(n) ? n : wr(n, 0.075, 0.3)),
      easeInOutElastic(n) {
        return $n(n)
          ? n
          : n < 0.5
          ? 0.5 * vr(n * 2, 0.1125, 0.45)
          : 0.5 + 0.5 * wr(n * 2 - 1, 0.1125, 0.45);
      },
      easeInBack(n) {
        return n * n * ((1.70158 + 1) * n - 1.70158);
      },
      easeOutBack(n) {
        return (n -= 1) * n * ((1.70158 + 1) * n + 1.70158) + 1;
      },
      easeInOutBack(n) {
        let t = 1.70158;
        return (n /= 0.5) < 1
          ? 0.5 * (n * n * (((t *= 1.525) + 1) * n - t))
          : 0.5 * ((n -= 2) * n * (((t *= 1.525) + 1) * n + t) + 2);
      },
      easeInBounce: (n) => 1 - hn.easeOutBounce(1 - n),
      easeOutBounce(n) {
        return n < 1 / 2.75
          ? 7.5625 * n * n
          : n < 2 / 2.75
          ? 7.5625 * (n -= 1.5 / 2.75) * n + 0.75
          : n < 2.5 / 2.75
          ? 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375
          : 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375;
      },
      easeInOutBounce: (n) =>
        n < 0.5 ? hn.easeInBounce(n * 2) * 0.5 : hn.easeOutBounce(n * 2 - 1) * 0.5 + 0.5,
    };
  function zi(n) {
    if (n && typeof n == 'object') {
      const t = n.toString();
      return t === '[object CanvasPattern]' || t === '[object CanvasGradient]';
    }
    return !1;
  }
  function kr(n) {
    return zi(n) ? n : new sn(n);
  }
  function Bi(n) {
    return zi(n) ? n : new sn(n).saturate(0.5).darken(0.1).hexString();
  }
  const wl = ['x', 'y', 'borderWidth', 'radius', 'tension'],
    kl = ['color', 'borderColor', 'backgroundColor'];
  function Sl(n) {
    n.set('animation', {
      delay: void 0,
      duration: 1e3,
      easing: 'easeOutQuart',
      fn: void 0,
      from: void 0,
      loop: void 0,
      to: void 0,
      type: void 0,
    }),
      n.describe('animation', {
        _fallback: !1,
        _indexable: !1,
        _scriptable: (t) => t !== 'onProgress' && t !== 'onComplete' && t !== 'fn',
      }),
      n.set('animations', {
        colors: { type: 'color', properties: kl },
        numbers: { type: 'number', properties: wl },
      }),
      n.describe('animations', { _fallback: 'animation' }),
      n.set('transitions', {
        active: { animation: { duration: 400 } },
        resize: { animation: { duration: 0 } },
        show: {
          animations: {
            colors: { from: 'transparent' },
            visible: { type: 'boolean', duration: 0 },
          },
        },
        hide: {
          animations: {
            colors: { to: 'transparent' },
            visible: { type: 'boolean', easing: 'linear', fn: (t) => t | 0 },
          },
        },
      });
  }
  function Cl(n) {
    n.set('layout', { autoPadding: !0, padding: { top: 0, right: 0, bottom: 0, left: 0 } });
  }
  const Sr = new Map();
  function El(n, t) {
    t = t || {};
    const e = n + JSON.stringify(t);
    let i = Sr.get(e);
    return i || ((i = new Intl.NumberFormat(n, t)), Sr.set(e, i)), i;
  }
  function ji(n, t, e) {
    return El(t, e).format(n);
  }
  const Cr = {
    values(n) {
      return lt(n) ? n : '' + n;
    },
    numeric(n, t, e) {
      if (n === 0) return '0';
      const i = this.chart.options.locale;
      let s,
        r = n;
      if (e.length > 1) {
        const l = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
        (l < 1e-4 || l > 1e15) && (s = 'scientific'), (r = Ml(n, e));
      }
      const o = ye(Math.abs(r)),
        a = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0),
        c = { notation: s, minimumFractionDigits: a, maximumFractionDigits: a };
      return Object.assign(c, this.options.ticks.format), ji(n, i, c);
    },
    logarithmic(n, t, e) {
      if (n === 0) return '0';
      const i = e[t].significand || n / Math.pow(10, Math.floor(ye(n)));
      return [1, 2, 3, 5, 10, 15].includes(i) || t > 0.8 * e.length
        ? Cr.numeric.call(this, n, t, e)
        : '';
    },
  };
  function Ml(n, t) {
    let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
    return Math.abs(e) >= 1 && n !== Math.floor(n) && (e = n - Math.floor(n)), e;
  }
  var Wn = { formatters: Cr };
  function Ol(n) {
    n.set('scale', {
      display: !0,
      offset: !1,
      reverse: !1,
      beginAtZero: !1,
      bounds: 'ticks',
      grace: 0,
      grid: {
        display: !0,
        lineWidth: 1,
        drawOnChartArea: !0,
        drawTicks: !0,
        tickLength: 8,
        tickWidth: (t, e) => e.lineWidth,
        tickColor: (t, e) => e.color,
        offset: !1,
      },
      border: { display: !0, dash: [], dashOffset: 0, width: 1 },
      title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
      ticks: {
        minRotation: 0,
        maxRotation: 50,
        mirror: !1,
        textStrokeWidth: 0,
        textStrokeColor: '',
        padding: 3,
        display: !0,
        autoSkip: !0,
        autoSkipPadding: 3,
        labelOffset: 0,
        callback: Wn.formatters.values,
        minor: {},
        major: {},
        align: 'center',
        crossAlign: 'near',
        showLabelBackdrop: !1,
        backdropColor: 'rgba(255, 255, 255, 0.75)',
        backdropPadding: 2,
      },
    }),
      n.route('scale.ticks', 'color', '', 'color'),
      n.route('scale.grid', 'color', '', 'borderColor'),
      n.route('scale.border', 'color', '', 'borderColor'),
      n.route('scale.title', 'color', '', 'color'),
      n.describe('scale', {
        _fallback: !1,
        _scriptable: (t) =>
          !t.startsWith('before') && !t.startsWith('after') && t !== 'callback' && t !== 'parser',
        _indexable: (t) => t !== 'borderDash' && t !== 'tickBorderDash' && t !== 'dash',
      }),
      n.describe('scales', { _fallback: 'scale' }),
      n.describe('scale.ticks', {
        _scriptable: (t) => t !== 'backdropPadding' && t !== 'callback',
        _indexable: (t) => t !== 'backdropPadding',
      });
  }
  const Me = Object.create(null),
    Vi = Object.create(null);
  function fn(n, t) {
    if (!t) return n;
    const e = t.split('.');
    for (let i = 0, s = e.length; i < s; ++i) {
      const r = e[i];
      n = n[r] || (n[r] = Object.create(null));
    }
    return n;
  }
  function $i(n, t, e) {
    return typeof t == 'string' ? rn(fn(n, t), e) : rn(fn(n, ''), t);
  }
  class Dl {
    constructor(t, e) {
      (this.animation = void 0),
        (this.backgroundColor = 'rgba(0,0,0,0.1)'),
        (this.borderColor = 'rgba(0,0,0,0.1)'),
        (this.color = '#666'),
        (this.datasets = {}),
        (this.devicePixelRatio = (i) => i.chart.platform.getDevicePixelRatio()),
        (this.elements = {}),
        (this.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']),
        (this.font = {
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          size: 12,
          style: 'normal',
          lineHeight: 1.2,
          weight: null,
        }),
        (this.hover = {}),
        (this.hoverBackgroundColor = (i, s) => Bi(s.backgroundColor)),
        (this.hoverBorderColor = (i, s) => Bi(s.borderColor)),
        (this.hoverColor = (i, s) => Bi(s.color)),
        (this.indexAxis = 'x'),
        (this.interaction = { mode: 'nearest', intersect: !0, includeInvisible: !1 }),
        (this.maintainAspectRatio = !0),
        (this.onHover = null),
        (this.onClick = null),
        (this.parsing = !0),
        (this.plugins = {}),
        (this.responsive = !0),
        (this.scale = void 0),
        (this.scales = {}),
        (this.showLine = !0),
        (this.drawActiveElementsOnTop = !0),
        this.describe(t),
        this.apply(e);
    }
    set(t, e) {
      return $i(this, t, e);
    }
    get(t) {
      return fn(this, t);
    }
    describe(t, e) {
      return $i(Vi, t, e);
    }
    override(t, e) {
      return $i(Me, t, e);
    }
    route(t, e, i, s) {
      const r = fn(this, t),
        o = fn(this, i),
        a = '_' + e;
      Object.defineProperties(r, {
        [a]: { value: r[e], writable: !0 },
        [e]: {
          enumerable: !0,
          get() {
            const c = this[a],
              l = o[s];
            return X(c) ? Object.assign({}, l, c) : et(c, l);
          },
          set(c) {
            this[a] = c;
          },
        },
      });
    }
    apply(t) {
      t.forEach((e) => e(this));
    }
  }
  var ft = new Dl(
    {
      _scriptable: (n) => !n.startsWith('on'),
      _indexable: (n) => n !== 'events',
      hover: { _fallback: 'interaction' },
      interaction: { _scriptable: !1, _indexable: !1 },
    },
    [Sl, Cl, Ol]
  );
  function Pl(n) {
    return !n || it(n.size) || it(n.family)
      ? null
      : (n.style ? n.style + ' ' : '') +
          (n.weight ? n.weight + ' ' : '') +
          n.size +
          'px ' +
          n.family;
  }
  function Hn(n, t, e, i, s) {
    let r = t[s];
    return r || ((r = t[s] = n.measureText(s).width), e.push(s)), r > i && (i = r), i;
  }
  function Al(n, t, e, i) {
    i = i || {};
    let s = (i.data = i.data || {}),
      r = (i.garbageCollect = i.garbageCollect || []);
    i.font !== t && ((s = i.data = {}), (r = i.garbageCollect = []), (i.font = t)),
      n.save(),
      (n.font = t);
    let o = 0;
    const a = e.length;
    let c, l, h, f, u;
    for (c = 0; c < a; c++)
      if (((f = e[c]), f != null && !lt(f))) o = Hn(n, s, r, o, f);
      else if (lt(f))
        for (l = 0, h = f.length; l < h; l++)
          (u = f[l]), u != null && !lt(u) && (o = Hn(n, s, r, o, u));
    n.restore();
    const d = r.length / 2;
    if (d > e.length) {
      for (c = 0; c < d; c++) delete s[r[c]];
      r.splice(0, d);
    }
    return o;
  }
  function Oe(n, t, e) {
    const i = n.currentDevicePixelRatio,
      s = e !== 0 ? Math.max(e / 2, 0.5) : 0;
    return Math.round((t - s) * i) / i + s;
  }
  function Er(n, t) {
    (t = t || n.getContext('2d')),
      t.save(),
      t.resetTransform(),
      t.clearRect(0, 0, n.width, n.height),
      t.restore();
  }
  function Wi(n, t, e, i) {
    Tl(n, t, e, i, null);
  }
  function Tl(n, t, e, i, s) {
    let r, o, a, c, l, h, f, u;
    const d = t.pointStyle,
      p = t.rotation,
      m = t.radius;
    let b = (p || 0) * cl;
    if (
      d &&
      typeof d == 'object' &&
      ((r = d.toString()), r === '[object HTMLImageElement]' || r === '[object HTMLCanvasElement]')
    ) {
      n.save(),
        n.translate(e, i),
        n.rotate(b),
        n.drawImage(d, -d.width / 2, -d.height / 2, d.width, d.height),
        n.restore();
      return;
    }
    if (!(isNaN(m) || m <= 0)) {
      switch ((n.beginPath(), d)) {
        default:
          s ? n.ellipse(e, i, s / 2, m, 0, 0, jt) : n.arc(e, i, m, 0, jt), n.closePath();
          break;
        case 'triangle':
          (h = s ? s / 2 : m),
            n.moveTo(e + Math.sin(b) * h, i - Math.cos(b) * m),
            (b += fr),
            n.lineTo(e + Math.sin(b) * h, i - Math.cos(b) * m),
            (b += fr),
            n.lineTo(e + Math.sin(b) * h, i - Math.cos(b) * m),
            n.closePath();
          break;
        case 'rectRounded':
          (l = m * 0.516),
            (c = m - l),
            (o = Math.cos(b + Ce) * c),
            (f = Math.cos(b + Ce) * (s ? s / 2 - l : c)),
            (a = Math.sin(b + Ce) * c),
            (u = Math.sin(b + Ce) * (s ? s / 2 - l : c)),
            n.arc(e - f, i - a, l, b - yt, b - Dt),
            n.arc(e + u, i - o, l, b - Dt, b),
            n.arc(e + f, i + a, l, b, b + Dt),
            n.arc(e - u, i + o, l, b + Dt, b + yt),
            n.closePath();
          break;
        case 'rect':
          if (!p) {
            (c = Math.SQRT1_2 * m), (h = s ? s / 2 : c), n.rect(e - h, i - c, 2 * h, 2 * c);
            break;
          }
          b += Ce;
        case 'rectRot':
          (f = Math.cos(b) * (s ? s / 2 : m)),
            (o = Math.cos(b) * m),
            (a = Math.sin(b) * m),
            (u = Math.sin(b) * (s ? s / 2 : m)),
            n.moveTo(e - f, i - a),
            n.lineTo(e + u, i - o),
            n.lineTo(e + f, i + a),
            n.lineTo(e - u, i + o),
            n.closePath();
          break;
        case 'crossRot':
          b += Ce;
        case 'cross':
          (f = Math.cos(b) * (s ? s / 2 : m)),
            (o = Math.cos(b) * m),
            (a = Math.sin(b) * m),
            (u = Math.sin(b) * (s ? s / 2 : m)),
            n.moveTo(e - f, i - a),
            n.lineTo(e + f, i + a),
            n.moveTo(e + u, i - o),
            n.lineTo(e - u, i + o);
          break;
        case 'star':
          (f = Math.cos(b) * (s ? s / 2 : m)),
            (o = Math.cos(b) * m),
            (a = Math.sin(b) * m),
            (u = Math.sin(b) * (s ? s / 2 : m)),
            n.moveTo(e - f, i - a),
            n.lineTo(e + f, i + a),
            n.moveTo(e + u, i - o),
            n.lineTo(e - u, i + o),
            (b += Ce),
            (f = Math.cos(b) * (s ? s / 2 : m)),
            (o = Math.cos(b) * m),
            (a = Math.sin(b) * m),
            (u = Math.sin(b) * (s ? s / 2 : m)),
            n.moveTo(e - f, i - a),
            n.lineTo(e + f, i + a),
            n.moveTo(e + u, i - o),
            n.lineTo(e - u, i + o);
          break;
        case 'line':
          (o = s ? s / 2 : Math.cos(b) * m),
            (a = Math.sin(b) * m),
            n.moveTo(e - o, i - a),
            n.lineTo(e + o, i + a);
          break;
        case 'dash':
          n.moveTo(e, i), n.lineTo(e + Math.cos(b) * (s ? s / 2 : m), i + Math.sin(b) * m);
          break;
        case !1:
          n.closePath();
          break;
      }
      n.fill(), t.borderWidth > 0 && n.stroke();
    }
  }
  function oe(n, t, e) {
    return (
      (e = e || 0.5),
      !t || (n && n.x > t.left - e && n.x < t.right + e && n.y > t.top - e && n.y < t.bottom + e)
    );
  }
  function Mr(n, t) {
    n.save(), n.beginPath(), n.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), n.clip();
  }
  function Or(n) {
    n.restore();
  }
  function Rl(n, t, e, i, s) {
    if (!t) return n.lineTo(e.x, e.y);
    if (s === 'middle') {
      const r = (t.x + e.x) / 2;
      n.lineTo(r, t.y), n.lineTo(r, e.y);
    } else (s === 'after') != !!i ? n.lineTo(t.x, e.y) : n.lineTo(e.x, t.y);
    n.lineTo(e.x, e.y);
  }
  function Fl(n, t, e, i) {
    if (!t) return n.lineTo(e.x, e.y);
    n.bezierCurveTo(
      i ? t.cp1x : t.cp2x,
      i ? t.cp1y : t.cp2y,
      i ? e.cp2x : e.cp1x,
      i ? e.cp2y : e.cp1y,
      e.x,
      e.y
    );
  }
  function Ll(n, t) {
    t.translation && n.translate(t.translation[0], t.translation[1]),
      it(t.rotation) || n.rotate(t.rotation),
      t.color && (n.fillStyle = t.color),
      t.textAlign && (n.textAlign = t.textAlign),
      t.textBaseline && (n.textBaseline = t.textBaseline);
  }
  function Il(n, t, e, i, s) {
    if (s.strikethrough || s.underline) {
      const r = n.measureText(i),
        o = t - r.actualBoundingBoxLeft,
        a = t + r.actualBoundingBoxRight,
        c = e - r.actualBoundingBoxAscent,
        l = e + r.actualBoundingBoxDescent,
        h = s.strikethrough ? (c + l) / 2 : l;
      (n.strokeStyle = n.fillStyle),
        n.beginPath(),
        (n.lineWidth = s.decorationWidth || 2),
        n.moveTo(o, h),
        n.lineTo(a, h),
        n.stroke();
    }
  }
  function Nl(n, t) {
    const e = n.fillStyle;
    (n.fillStyle = t.color), n.fillRect(t.left, t.top, t.width, t.height), (n.fillStyle = e);
  }
  function un(n, t, e, i, s, r = {}) {
    const o = lt(t) ? t : [t],
      a = r.strokeWidth > 0 && r.strokeColor !== '';
    let c, l;
    for (n.save(), n.font = s.string, Ll(n, r), c = 0; c < o.length; ++c)
      (l = o[c]),
        r.backdrop && Nl(n, r.backdrop),
        a &&
          (r.strokeColor && (n.strokeStyle = r.strokeColor),
          it(r.strokeWidth) || (n.lineWidth = r.strokeWidth),
          n.strokeText(l, e, i, r.maxWidth)),
        n.fillText(l, e, i, r.maxWidth),
        Il(n, e, i, l, r),
        (i += Number(s.lineHeight));
    n.restore();
  }
  function Hi(n, t) {
    const { x: e, y: i, w: s, h: r, radius: o } = t;
    n.arc(e + o.topLeft, i + o.topLeft, o.topLeft, -Dt, yt, !0),
      n.lineTo(e, i + r - o.bottomLeft),
      n.arc(e + o.bottomLeft, i + r - o.bottomLeft, o.bottomLeft, yt, Dt, !0),
      n.lineTo(e + s - o.bottomRight, i + r),
      n.arc(e + s - o.bottomRight, i + r - o.bottomRight, o.bottomRight, Dt, 0, !0),
      n.lineTo(e + s, i + o.topRight),
      n.arc(e + s - o.topRight, i + o.topRight, o.topRight, 0, -Dt, !0),
      n.lineTo(e + o.topLeft, i);
  }
  const zl = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
    Bl = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
  function jl(n, t) {
    const e = ('' + n).match(zl);
    if (!e || e[1] === 'normal') return t * 1.2;
    switch (((n = +e[2]), e[3])) {
      case 'px':
        return n;
      case '%':
        n /= 100;
        break;
    }
    return t * n;
  }
  const Vl = (n) => +n || 0;
  function Dr(n, t) {
    const e = {},
      i = X(t),
      s = i ? Object.keys(t) : t,
      r = X(n) ? (i ? (o) => et(n[o], n[t[o]]) : (o) => n[o]) : () => n;
    for (const o of s) e[o] = Vl(r(o));
    return e;
  }
  function $l(n) {
    return Dr(n, { top: 'y', right: 'x', bottom: 'y', left: 'x' });
  }
  function dn(n) {
    return Dr(n, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
  }
  function Lt(n) {
    const t = $l(n);
    return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
  }
  function Et(n, t) {
    (n = n || {}), (t = t || ft.font);
    let e = et(n.size, t.size);
    typeof e == 'string' && (e = parseInt(e, 10));
    let i = et(n.style, t.style);
    i &&
      !('' + i).match(Bl) &&
      (console.warn('Invalid font style specified: "' + i + '"'), (i = void 0));
    const s = {
      family: et(n.family, t.family),
      lineHeight: jl(et(n.lineHeight, t.lineHeight), e),
      size: e,
      style: i,
      weight: et(n.weight, t.weight),
      string: '',
    };
    return (s.string = Pl(s)), s;
  }
  function Yn(n, t, e, i) {
    let s = !0,
      r,
      o,
      a;
    for (r = 0, o = n.length; r < o; ++r)
      if (
        ((a = n[r]),
        a !== void 0 &&
          (t !== void 0 && typeof a == 'function' && ((a = a(t)), (s = !1)),
          e !== void 0 && lt(a) && ((a = a[e % a.length]), (s = !1)),
          a !== void 0))
      )
        return i && !s && (i.cacheable = !1), a;
  }
  function Wl(n, t, e) {
    const { min: i, max: s } = n,
      r = el(t, (s - i) / 2),
      o = (a, c) => (e && a === 0 ? 0 : a + c);
    return { min: o(i, -Math.abs(r)), max: o(s, r) };
  }
  function _e(n, t) {
    return Object.assign(Object.create(n), t);
  }
  function Yi(n, t = [''], e, i, s = () => n[0]) {
    const r = e || n;
    typeof i > 'u' && (i = Fr('_fallback', n));
    const o = {
      [Symbol.toStringTag]: 'Object',
      _cacheable: !0,
      _scopes: n,
      _rootScopes: r,
      _fallback: i,
      _getTarget: s,
      override: (a) => Yi([a, ...n], t, r, i),
    };
    return new Proxy(o, {
      deleteProperty(a, c) {
        return delete a[c], delete a._keys, delete n[0][c], !0;
      },
      get(a, c) {
        return Ar(a, c, () => Zl(c, t, n, a));
      },
      getOwnPropertyDescriptor(a, c) {
        return Reflect.getOwnPropertyDescriptor(a._scopes[0], c);
      },
      getPrototypeOf() {
        return Reflect.getPrototypeOf(n[0]);
      },
      has(a, c) {
        return Lr(a).includes(c);
      },
      ownKeys(a) {
        return Lr(a);
      },
      set(a, c, l) {
        const h = a._storage || (a._storage = s());
        return (a[c] = h[c] = l), delete a._keys, !0;
      },
    });
  }
  function Be(n, t, e, i) {
    const s = {
      _cacheable: !1,
      _proxy: n,
      _context: t,
      _subProxy: e,
      _stack: new Set(),
      _descriptors: Pr(n, i),
      setContext: (r) => Be(n, r, e, i),
      override: (r) => Be(n.override(r), t, e, i),
    };
    return new Proxy(s, {
      deleteProperty(r, o) {
        return delete r[o], delete n[o], !0;
      },
      get(r, o, a) {
        return Ar(r, o, () => Yl(r, o, a));
      },
      getOwnPropertyDescriptor(r, o) {
        return r._descriptors.allKeys
          ? Reflect.has(n, o)
            ? { enumerable: !0, configurable: !0 }
            : void 0
          : Reflect.getOwnPropertyDescriptor(n, o);
      },
      getPrototypeOf() {
        return Reflect.getPrototypeOf(n);
      },
      has(r, o) {
        return Reflect.has(n, o);
      },
      ownKeys() {
        return Reflect.ownKeys(n);
      },
      set(r, o, a) {
        return (n[o] = a), delete r[o], !0;
      },
    });
  }
  function Pr(n, t = { scriptable: !0, indexable: !0 }) {
    const {
      _scriptable: e = t.scriptable,
      _indexable: i = t.indexable,
      _allKeys: s = t.allKeys,
    } = n;
    return {
      allKeys: s,
      scriptable: e,
      indexable: i,
      isScriptable: be(e) ? e : () => e,
      isIndexable: be(i) ? i : () => i,
    };
  }
  const Hl = (n, t) => (n ? n + Fi(t) : t),
    Ui = (n, t) =>
      X(t) && n !== 'adapters' && (Object.getPrototypeOf(t) === null || t.constructor === Object);
  function Ar(n, t, e) {
    if (Object.prototype.hasOwnProperty.call(n, t)) return n[t];
    const i = e();
    return (n[t] = i), i;
  }
  function Yl(n, t, e) {
    const { _proxy: i, _context: s, _subProxy: r, _descriptors: o } = n;
    let a = i[t];
    return (
      be(a) && o.isScriptable(t) && (a = Ul(t, a, n, e)),
      lt(a) && a.length && (a = Xl(t, a, n, o.isIndexable)),
      Ui(t, a) && (a = Be(a, s, r && r[t], o)),
      a
    );
  }
  function Ul(n, t, e, i) {
    const { _proxy: s, _context: r, _subProxy: o, _stack: a } = e;
    if (a.has(n)) throw new Error('Recursion detected: ' + Array.from(a).join('->') + '->' + n);
    a.add(n);
    let c = t(r, o || i);
    return a.delete(n), Ui(n, c) && (c = Xi(s._scopes, s, n, c)), c;
  }
  function Xl(n, t, e, i) {
    const { _proxy: s, _context: r, _subProxy: o, _descriptors: a } = e;
    if (typeof r.index < 'u' && i(n)) return t[r.index % t.length];
    if (X(t[0])) {
      const c = t,
        l = s._scopes.filter((h) => h !== c);
      t = [];
      for (const h of c) {
        const f = Xi(l, s, n, h);
        t.push(Be(f, r, o && o[n], a));
      }
    }
    return t;
  }
  function Tr(n, t, e) {
    return be(n) ? n(t, e) : n;
  }
  const Gl = (n, t) => (n === !0 ? t : typeof n == 'string' ? Bn(t, n) : void 0);
  function Kl(n, t, e, i, s) {
    for (const r of t) {
      const o = Gl(e, r);
      if (o) {
        n.add(o);
        const a = Tr(o._fallback, e, s);
        if (typeof a < 'u' && a !== e && a !== i) return a;
      } else if (o === !1 && typeof i < 'u' && e !== i) return null;
    }
    return !1;
  }
  function Xi(n, t, e, i) {
    const s = t._rootScopes,
      r = Tr(t._fallback, e, i),
      o = [...n, ...s],
      a = new Set();
    a.add(i);
    let c = Rr(a, o, e, r || e, i);
    return c === null || (typeof r < 'u' && r !== e && ((c = Rr(a, o, r, c, i)), c === null))
      ? !1
      : Yi(Array.from(a), [''], s, r, () => ql(t, e, i));
  }
  function Rr(n, t, e, i, s) {
    for (; e; ) e = Kl(n, t, e, i, s);
    return e;
  }
  function ql(n, t, e) {
    const i = n._getTarget();
    t in i || (i[t] = {});
    const s = i[t];
    return lt(s) && X(e) ? e : s || {};
  }
  function Zl(n, t, e, i) {
    let s;
    for (const r of t)
      if (((s = Fr(Hl(r, n), e)), typeof s < 'u')) return Ui(n, s) ? Xi(e, i, n, s) : s;
  }
  function Fr(n, t) {
    for (const e of t) {
      if (!e) continue;
      const i = e[n];
      if (typeof i < 'u') return i;
    }
  }
  function Lr(n) {
    let t = n._keys;
    return t || (t = n._keys = Ql(n._scopes)), t;
  }
  function Ql(n) {
    const t = new Set();
    for (const e of n) for (const i of Object.keys(e).filter((s) => !s.startsWith('_'))) t.add(i);
    return Array.from(t);
  }
  const Jl = Number.EPSILON || 1e-14,
    je = (n, t) => t < n.length && !n[t].skip && n[t],
    Ir = (n) => (n === 'x' ? 'y' : 'x');
  function th(n, t, e, i) {
    const s = n.skip ? t : n,
      r = t,
      o = e.skip ? t : e,
      a = Ii(r, s),
      c = Ii(o, r);
    let l = a / (a + c),
      h = c / (a + c);
    (l = isNaN(l) ? 0 : l), (h = isNaN(h) ? 0 : h);
    const f = i * l,
      u = i * h;
    return {
      previous: { x: r.x - f * (o.x - s.x), y: r.y - f * (o.y - s.y) },
      next: { x: r.x + u * (o.x - s.x), y: r.y + u * (o.y - s.y) },
    };
  }
  function eh(n, t, e) {
    const i = n.length;
    let s,
      r,
      o,
      a,
      c,
      l = je(n, 0);
    for (let h = 0; h < i - 1; ++h)
      if (((c = l), (l = je(n, h + 1)), !(!c || !l))) {
        if (an(t[h], 0, Jl)) {
          e[h] = e[h + 1] = 0;
          continue;
        }
        (s = e[h] / t[h]),
          (r = e[h + 1] / t[h]),
          (a = Math.pow(s, 2) + Math.pow(r, 2)),
          !(a <= 9) && ((o = 3 / Math.sqrt(a)), (e[h] = s * o * t[h]), (e[h + 1] = r * o * t[h]));
      }
  }
  function nh(n, t, e = 'x') {
    const i = Ir(e),
      s = n.length;
    let r,
      o,
      a,
      c = je(n, 0);
    for (let l = 0; l < s; ++l) {
      if (((o = a), (a = c), (c = je(n, l + 1)), !a)) continue;
      const h = a[e],
        f = a[i];
      o && ((r = (h - o[e]) / 3), (a[`cp1${e}`] = h - r), (a[`cp1${i}`] = f - r * t[l])),
        c && ((r = (c[e] - h) / 3), (a[`cp2${e}`] = h + r), (a[`cp2${i}`] = f + r * t[l]));
    }
  }
  function ih(n, t = 'x') {
    const e = Ir(t),
      i = n.length,
      s = Array(i).fill(0),
      r = Array(i);
    let o,
      a,
      c,
      l = je(n, 0);
    for (o = 0; o < i; ++o)
      if (((a = c), (c = l), (l = je(n, o + 1)), !!c)) {
        if (l) {
          const h = l[t] - c[t];
          s[o] = h !== 0 ? (l[e] - c[e]) / h : 0;
        }
        r[o] = a ? (l ? (ze(s[o - 1]) !== ze(s[o]) ? 0 : (s[o - 1] + s[o]) / 2) : s[o - 1]) : s[o];
      }
    eh(n, s, r), nh(n, r, t);
  }
  function Un(n, t, e) {
    return Math.max(Math.min(n, e), t);
  }
  function sh(n, t) {
    let e,
      i,
      s,
      r,
      o,
      a = oe(n[0], t);
    for (e = 0, i = n.length; e < i; ++e)
      (o = r),
        (r = a),
        (a = e < i - 1 && oe(n[e + 1], t)),
        r &&
          ((s = n[e]),
          o && ((s.cp1x = Un(s.cp1x, t.left, t.right)), (s.cp1y = Un(s.cp1y, t.top, t.bottom))),
          a && ((s.cp2x = Un(s.cp2x, t.left, t.right)), (s.cp2y = Un(s.cp2y, t.top, t.bottom))));
  }
  function rh(n, t, e, i, s) {
    let r, o, a, c;
    if ((t.spanGaps && (n = n.filter((l) => !l.skip)), t.cubicInterpolationMode === 'monotone'))
      ih(n, s);
    else {
      let l = i ? n[n.length - 1] : n[0];
      for (r = 0, o = n.length; r < o; ++r)
        (a = n[r]),
          (c = th(l, a, n[Math.min(r + 1, o - (i ? 0 : 1)) % o], t.tension)),
          (a.cp1x = c.previous.x),
          (a.cp1y = c.previous.y),
          (a.cp2x = c.next.x),
          (a.cp2y = c.next.y),
          (l = a);
    }
    t.capBezierPoints && sh(n, e);
  }
  function Nr() {
    return typeof window < 'u' && typeof document < 'u';
  }
  function Gi(n) {
    let t = n.parentNode;
    return t && t.toString() === '[object ShadowRoot]' && (t = t.host), t;
  }
  function Xn(n, t, e) {
    let i;
    return (
      typeof n == 'string'
        ? ((i = parseInt(n, 10)), n.indexOf('%') !== -1 && (i = (i / 100) * t.parentNode[e]))
        : (i = n),
      i
    );
  }
  const Gn = (n) => n.ownerDocument.defaultView.getComputedStyle(n, null);
  function oh(n, t) {
    return Gn(n).getPropertyValue(t);
  }
  const ah = ['top', 'right', 'bottom', 'left'];
  function De(n, t, e) {
    const i = {};
    e = e ? '-' + e : '';
    for (let s = 0; s < 4; s++) {
      const r = ah[s];
      i[r] = parseFloat(n[t + '-' + r + e]) || 0;
    }
    return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i;
  }
  const ch = (n, t, e) => (n > 0 || t > 0) && (!e || !e.shadowRoot);
  function lh(n, t) {
    const e = n.touches,
      i = e && e.length ? e[0] : n,
      { offsetX: s, offsetY: r } = i;
    let o = !1,
      a,
      c;
    if (ch(s, r, n.target)) (a = s), (c = r);
    else {
      const l = t.getBoundingClientRect();
      (a = i.clientX - l.left), (c = i.clientY - l.top), (o = !0);
    }
    return { x: a, y: c, box: o };
  }
  function Pe(n, t) {
    if ('native' in n) return n;
    const { canvas: e, currentDevicePixelRatio: i } = t,
      s = Gn(e),
      r = s.boxSizing === 'border-box',
      o = De(s, 'padding'),
      a = De(s, 'border', 'width'),
      { x: c, y: l, box: h } = lh(n, e),
      f = o.left + (h && a.left),
      u = o.top + (h && a.top);
    let { width: d, height: p } = t;
    return (
      r && ((d -= o.width + a.width), (p -= o.height + a.height)),
      {
        x: Math.round((((c - f) / d) * e.width) / i),
        y: Math.round((((l - u) / p) * e.height) / i),
      }
    );
  }
  function hh(n, t, e) {
    let i, s;
    if (t === void 0 || e === void 0) {
      const r = Gi(n);
      if (!r) (t = n.clientWidth), (e = n.clientHeight);
      else {
        const o = r.getBoundingClientRect(),
          a = Gn(r),
          c = De(a, 'border', 'width'),
          l = De(a, 'padding');
        (t = o.width - l.width - c.width),
          (e = o.height - l.height - c.height),
          (i = Xn(a.maxWidth, r, 'clientWidth')),
          (s = Xn(a.maxHeight, r, 'clientHeight'));
      }
    }
    return { width: t, height: e, maxWidth: i || Vn, maxHeight: s || Vn };
  }
  const Kn = (n) => Math.round(n * 10) / 10;
  function fh(n, t, e, i) {
    const s = Gn(n),
      r = De(s, 'margin'),
      o = Xn(s.maxWidth, n, 'clientWidth') || Vn,
      a = Xn(s.maxHeight, n, 'clientHeight') || Vn,
      c = hh(n, t, e);
    let { width: l, height: h } = c;
    if (s.boxSizing === 'content-box') {
      const u = De(s, 'border', 'width'),
        d = De(s, 'padding');
      (l -= d.width + u.width), (h -= d.height + u.height);
    }
    return (
      (l = Math.max(0, l - r.width)),
      (h = Math.max(0, i ? l / i : h - r.height)),
      (l = Kn(Math.min(l, o, c.maxWidth))),
      (h = Kn(Math.min(h, a, c.maxHeight))),
      l && !h && (h = Kn(l / 2)),
      (t !== void 0 || e !== void 0) &&
        i &&
        c.height &&
        h > c.height &&
        ((h = c.height), (l = Kn(Math.floor(h * i)))),
      { width: l, height: h }
    );
  }
  function zr(n, t, e) {
    const i = t || 1,
      s = Math.floor(n.height * i),
      r = Math.floor(n.width * i);
    (n.height = Math.floor(n.height)), (n.width = Math.floor(n.width));
    const o = n.canvas;
    return (
      o.style &&
        (e || (!o.style.height && !o.style.width)) &&
        ((o.style.height = `${n.height}px`), (o.style.width = `${n.width}px`)),
      n.currentDevicePixelRatio !== i || o.height !== s || o.width !== r
        ? ((n.currentDevicePixelRatio = i),
          (o.height = s),
          (o.width = r),
          n.ctx.setTransform(i, 0, 0, i, 0, 0),
          !0)
        : !1
    );
  }
  const uh = (function () {
    let n = !1;
    try {
      const t = {
        get passive() {
          return (n = !0), !1;
        },
      };
      window.addEventListener('test', null, t), window.removeEventListener('test', null, t);
    } catch {}
    return n;
  })();
  function Br(n, t) {
    const e = oh(n, t),
      i = e && e.match(/^(\d+)(\.\d+)?px$/);
    return i ? +i[1] : void 0;
  }
  function Ae(n, t, e, i) {
    return { x: n.x + e * (t.x - n.x), y: n.y + e * (t.y - n.y) };
  }
  function dh(n, t, e, i) {
    return {
      x: n.x + e * (t.x - n.x),
      y:
        i === 'middle'
          ? e < 0.5
            ? n.y
            : t.y
          : i === 'after'
          ? e < 1
            ? n.y
            : t.y
          : e > 0
          ? t.y
          : n.y,
    };
  }
  function gh(n, t, e, i) {
    const s = { x: n.cp2x, y: n.cp2y },
      r = { x: t.cp1x, y: t.cp1y },
      o = Ae(n, s, e),
      a = Ae(s, r, e),
      c = Ae(r, t, e),
      l = Ae(o, a, e),
      h = Ae(a, c, e);
    return Ae(l, h, e);
  }
  const ph = function (n, t) {
      return {
        x(e) {
          return n + n + t - e;
        },
        setWidth(e) {
          t = e;
        },
        textAlign(e) {
          return e === 'center' ? e : e === 'right' ? 'left' : 'right';
        },
        xPlus(e, i) {
          return e - i;
        },
        leftForLtr(e, i) {
          return e - i;
        },
      };
    },
    mh = function () {
      return {
        x(n) {
          return n;
        },
        setWidth(n) {},
        textAlign(n) {
          return n;
        },
        xPlus(n, t) {
          return n + t;
        },
        leftForLtr(n, t) {
          return n;
        },
      };
    };
  function Ki(n, t, e) {
    return n ? ph(t, e) : mh();
  }
  function bh(n, t) {
    let e, i;
    (t === 'ltr' || t === 'rtl') &&
      ((e = n.canvas.style),
      (i = [e.getPropertyValue('direction'), e.getPropertyPriority('direction')]),
      e.setProperty('direction', t, 'important'),
      (n.prevTextDirection = i));
  }
  function yh(n, t) {
    t !== void 0 &&
      (delete n.prevTextDirection, n.canvas.style.setProperty('direction', t[0], t[1]));
  }
  function jr(n) {
    return n === 'angle'
      ? { between: pr, compare: ul, normalize: Yt }
      : { between: gl, compare: (t, e) => t - e, normalize: (t) => t };
  }
  function Vr({ start: n, end: t, count: e, loop: i, style: s }) {
    return { start: n % e, end: t % e, loop: i && (t - n + 1) % e === 0, style: s };
  }
  function xh(n, t, e) {
    const { property: i, start: s, end: r } = e,
      { between: o, normalize: a } = jr(i),
      c = t.length;
    let { start: l, end: h, loop: f } = n,
      u,
      d;
    if (f) {
      for (l += c, h += c, u = 0, d = c; u < d && o(a(t[l % c][i]), s, r); ++u) l--, h--;
      (l %= c), (h %= c);
    }
    return h < l && (h += c), { start: l, end: h, loop: f, style: n.style };
  }
  function _h(n, t, e) {
    if (!e) return [n];
    const { property: i, start: s, end: r } = e,
      o = t.length,
      { compare: a, between: c, normalize: l } = jr(i),
      { start: h, end: f, loop: u, style: d } = xh(n, t, e),
      p = [];
    let m = !1,
      b = null,
      y,
      _,
      S;
    const M = () => c(s, S, y) && a(s, S) !== 0,
      w = () => a(r, y) === 0 || c(r, S, y),
      P = () => m || M(),
      k = () => !m || w();
    for (let T = h, B = h; T <= f; ++T)
      (_ = t[T % o]),
        !_.skip &&
          ((y = l(_[i])),
          y !== S &&
            ((m = c(y, s, r)),
            b === null && P() && (b = a(y, s) === 0 ? T : B),
            b !== null &&
              k() &&
              (p.push(Vr({ start: b, end: T, loop: u, count: o, style: d })), (b = null)),
            (B = T),
            (S = y)));
    return b !== null && p.push(Vr({ start: b, end: f, loop: u, count: o, style: d })), p;
  }
  function vh(n, t) {
    const e = [],
      i = n.segments;
    for (let s = 0; s < i.length; s++) {
      const r = _h(i[s], n.points, t);
      r.length && e.push(...r);
    }
    return e;
  }
  function wh(n, t, e, i) {
    let s = 0,
      r = t - 1;
    if (e && !i) for (; s < t && !n[s].skip; ) s++;
    for (; s < t && n[s].skip; ) s++;
    for (s %= t, e && (r += s); r > s && n[r % t].skip; ) r--;
    return (r %= t), { start: s, end: r };
  }
  function kh(n, t, e, i) {
    const s = n.length,
      r = [];
    let o = t,
      a = n[t],
      c;
    for (c = t + 1; c <= e; ++c) {
      const l = n[c % s];
      l.skip || l.stop
        ? a.skip ||
          ((i = !1),
          r.push({ start: t % s, end: (c - 1) % s, loop: i }),
          (t = o = l.stop ? c : null))
        : ((o = c), a.skip && (t = c)),
        (a = l);
    }
    return o !== null && r.push({ start: t % s, end: o % s, loop: i }), r;
  }
  function Sh(n, t) {
    const e = n.points,
      i = n.options.spanGaps,
      s = e.length;
    if (!s) return [];
    const r = !!n._loop,
      { start: o, end: a } = wh(e, s, r, i);
    if (i === !0) return $r(n, [{ start: o, end: a, loop: r }], e, t);
    const c = a < o ? a + s : a,
      l = !!n._fullLoop && o === 0 && a === s - 1;
    return $r(n, kh(e, o, c, l), e, t);
  }
  function $r(n, t, e, i) {
    return !i || !i.setContext || !e ? t : Ch(n, t, e, i);
  }
  function Ch(n, t, e, i) {
    const s = n._chart.getContext(),
      r = Wr(n.options),
      {
        _datasetIndex: o,
        options: { spanGaps: a },
      } = n,
      c = e.length,
      l = [];
    let h = r,
      f = t[0].start,
      u = f;
    function d(p, m, b, y) {
      const _ = a ? -1 : 1;
      if (p !== m) {
        for (p += c; e[p % c].skip; ) p -= _;
        for (; e[m % c].skip; ) m += _;
        p % c !== m % c &&
          (l.push({ start: p % c, end: m % c, loop: b, style: y }), (h = y), (f = m % c));
      }
    }
    for (const p of t) {
      f = a ? f : p.start;
      let m = e[f % c],
        b;
      for (u = f + 1; u <= p.end; u++) {
        const y = e[u % c];
        (b = Wr(
          i.setContext(
            _e(s, {
              type: 'segment',
              p0: m,
              p1: y,
              p0DataIndex: (u - 1) % c,
              p1DataIndex: u % c,
              datasetIndex: o,
            })
          )
        )),
          Eh(b, h) && d(f, u - 1, p.loop, h),
          (m = y),
          (h = b);
      }
      f < u - 1 && d(f, u - 1, p.loop, h);
    }
    return l;
  }
  function Wr(n) {
    return {
      backgroundColor: n.backgroundColor,
      borderCapStyle: n.borderCapStyle,
      borderDash: n.borderDash,
      borderDashOffset: n.borderDashOffset,
      borderJoinStyle: n.borderJoinStyle,
      borderWidth: n.borderWidth,
      borderColor: n.borderColor,
    };
  }
  function Eh(n, t) {
    if (!t) return !1;
    const e = [],
      i = function (s, r) {
        return zi(r) ? (e.includes(r) || e.push(r), e.indexOf(r)) : r;
      };
    return JSON.stringify(n, i) !== JSON.stringify(t, i);
  }
  /*!
   * Chart.js v4.3.0
   * https://www.chartjs.org
   * (c) 2023 Chart.js Contributors
   * Released under the MIT License
   */ class Mh {
    constructor() {
      (this._request = null),
        (this._charts = new Map()),
        (this._running = !1),
        (this._lastDate = void 0);
    }
    _notify(t, e, i, s) {
      const r = e.listeners[s],
        o = e.duration;
      r.forEach((a) =>
        a({ chart: t, initial: e.initial, numSteps: o, currentStep: Math.min(i - e.start, o) })
      );
    }
    _refresh() {
      this._request ||
        ((this._running = !0),
        (this._request = yr.call(window, () => {
          this._update(), (this._request = null), this._running && this._refresh();
        })));
    }
    _update(t = Date.now()) {
      let e = 0;
      this._charts.forEach((i, s) => {
        if (!i.running || !i.items.length) return;
        const r = i.items;
        let o = r.length - 1,
          a = !1,
          c;
        for (; o >= 0; --o)
          (c = r[o]),
            c._active
              ? (c._total > i.duration && (i.duration = c._total), c.tick(t), (a = !0))
              : ((r[o] = r[r.length - 1]), r.pop());
        a && (s.draw(), this._notify(s, i, t, 'progress')),
          r.length || ((i.running = !1), this._notify(s, i, t, 'complete'), (i.initial = !1)),
          (e += r.length);
      }),
        (this._lastDate = t),
        e === 0 && (this._running = !1);
    }
    _getAnims(t) {
      const e = this._charts;
      let i = e.get(t);
      return (
        i ||
          ((i = { running: !1, initial: !0, items: [], listeners: { complete: [], progress: [] } }),
          e.set(t, i)),
        i
      );
    }
    listen(t, e, i) {
      this._getAnims(t).listeners[e].push(i);
    }
    add(t, e) {
      !e || !e.length || this._getAnims(t).items.push(...e);
    }
    has(t) {
      return this._getAnims(t).items.length > 0;
    }
    start(t) {
      const e = this._charts.get(t);
      e &&
        ((e.running = !0),
        (e.start = Date.now()),
        (e.duration = e.items.reduce((i, s) => Math.max(i, s._duration), 0)),
        this._refresh());
    }
    running(t) {
      if (!this._running) return !1;
      const e = this._charts.get(t);
      return !(!e || !e.running || !e.items.length);
    }
    stop(t) {
      const e = this._charts.get(t);
      if (!e || !e.items.length) return;
      const i = e.items;
      let s = i.length - 1;
      for (; s >= 0; --s) i[s].cancel();
      (e.items = []), this._notify(t, e, Date.now(), 'complete');
    }
    remove(t) {
      return this._charts.delete(t);
    }
  }
  var ae = new Mh();
  const Hr = 'transparent',
    Oh = {
      boolean(n, t, e) {
        return e > 0.5 ? t : n;
      },
      color(n, t, e) {
        const i = kr(n || Hr),
          s = i.valid && kr(t || Hr);
        return s && s.valid ? s.mix(i, e).hexString() : t;
      },
      number(n, t, e) {
        return n + (t - n) * e;
      },
    };
  class Dh {
    constructor(t, e, i, s) {
      const r = e[i];
      s = Yn([t.to, s, r, t.from]);
      const o = Yn([t.from, r, s]);
      (this._active = !0),
        (this._fn = t.fn || Oh[t.type || typeof o]),
        (this._easing = hn[t.easing] || hn.linear),
        (this._start = Math.floor(Date.now() + (t.delay || 0))),
        (this._duration = this._total = Math.floor(t.duration)),
        (this._loop = !!t.loop),
        (this._target = e),
        (this._prop = i),
        (this._from = o),
        (this._to = s),
        (this._promises = void 0);
    }
    active() {
      return this._active;
    }
    update(t, e, i) {
      if (this._active) {
        this._notify(!1);
        const s = this._target[this._prop],
          r = i - this._start,
          o = this._duration - r;
        (this._start = i),
          (this._duration = Math.floor(Math.max(o, t.duration))),
          (this._total += r),
          (this._loop = !!t.loop),
          (this._to = Yn([t.to, e, s, t.from])),
          (this._from = Yn([t.from, s, e]));
      }
    }
    cancel() {
      this._active && (this.tick(Date.now()), (this._active = !1), this._notify(!1));
    }
    tick(t) {
      const e = t - this._start,
        i = this._duration,
        s = this._prop,
        r = this._from,
        o = this._loop,
        a = this._to;
      let c;
      if (((this._active = r !== a && (o || e < i)), !this._active)) {
        (this._target[s] = a), this._notify(!0);
        return;
      }
      if (e < 0) {
        this._target[s] = r;
        return;
      }
      (c = (e / i) % 2),
        (c = o && c > 1 ? 2 - c : c),
        (c = this._easing(Math.min(1, Math.max(0, c)))),
        (this._target[s] = this._fn(r, a, c));
    }
    wait() {
      const t = this._promises || (this._promises = []);
      return new Promise((e, i) => {
        t.push({ res: e, rej: i });
      });
    }
    _notify(t) {
      const e = t ? 'res' : 'rej',
        i = this._promises || [];
      for (let s = 0; s < i.length; s++) i[s][e]();
    }
  }
  class Yr {
    constructor(t, e) {
      (this._chart = t), (this._properties = new Map()), this.configure(e);
    }
    configure(t) {
      if (!X(t)) return;
      const e = Object.keys(ft.animation),
        i = this._properties;
      Object.getOwnPropertyNames(t).forEach((s) => {
        const r = t[s];
        if (!X(r)) return;
        const o = {};
        for (const a of e) o[a] = r[a];
        ((lt(r.properties) && r.properties) || [s]).forEach((a) => {
          (a === s || !i.has(a)) && i.set(a, o);
        });
      });
    }
    _animateOptions(t, e) {
      const i = e.options,
        s = Ah(t, i);
      if (!s) return [];
      const r = this._createAnimations(s, i);
      return (
        i.$shared &&
          Ph(t.options.$animations, i).then(
            () => {
              t.options = i;
            },
            () => {}
          ),
        r
      );
    }
    _createAnimations(t, e) {
      const i = this._properties,
        s = [],
        r = t.$animations || (t.$animations = {}),
        o = Object.keys(e),
        a = Date.now();
      let c;
      for (c = o.length - 1; c >= 0; --c) {
        const l = o[c];
        if (l.charAt(0) === '$') continue;
        if (l === 'options') {
          s.push(...this._animateOptions(t, e));
          continue;
        }
        const h = e[l];
        let f = r[l];
        const u = i.get(l);
        if (f)
          if (u && f.active()) {
            f.update(u, h, a);
            continue;
          } else f.cancel();
        if (!u || !u.duration) {
          t[l] = h;
          continue;
        }
        (r[l] = f = new Dh(u, t, l, h)), s.push(f);
      }
      return s;
    }
    update(t, e) {
      if (this._properties.size === 0) {
        Object.assign(t, e);
        return;
      }
      const i = this._createAnimations(t, e);
      if (i.length) return ae.add(this._chart, i), !0;
    }
  }
  function Ph(n, t) {
    const e = [],
      i = Object.keys(t);
    for (let s = 0; s < i.length; s++) {
      const r = n[i[s]];
      r && r.active() && e.push(r.wait());
    }
    return Promise.all(e);
  }
  function Ah(n, t) {
    if (!t) return;
    let e = n.options;
    if (!e) {
      n.options = t;
      return;
    }
    return e.$shared && (n.options = e = Object.assign({}, e, { $shared: !1, $animations: {} })), e;
  }
  function Ur(n, t) {
    const e = (n && n.options) || {},
      i = e.reverse,
      s = e.min === void 0 ? t : 0,
      r = e.max === void 0 ? t : 0;
    return { start: i ? r : s, end: i ? s : r };
  }
  function Th(n, t, e) {
    if (e === !1) return !1;
    const i = Ur(n, e),
      s = Ur(t, e);
    return { top: s.end, right: i.end, bottom: s.start, left: i.start };
  }
  function Rh(n) {
    let t, e, i, s;
    return (
      X(n) ? ((t = n.top), (e = n.right), (i = n.bottom), (s = n.left)) : (t = e = i = s = n),
      { top: t, right: e, bottom: i, left: s, disabled: n === !1 }
    );
  }
  function Xr(n, t) {
    const e = [],
      i = n._getSortedDatasetMetas(t);
    let s, r;
    for (s = 0, r = i.length; s < r; ++s) e.push(i[s].index);
    return e;
  }
  function Gr(n, t, e, i = {}) {
    const s = n.keys,
      r = i.mode === 'single';
    let o, a, c, l;
    if (t !== null) {
      for (o = 0, a = s.length; o < a; ++o) {
        if (((c = +s[o]), c === e)) {
          if (i.all) continue;
          break;
        }
        (l = n.values[c]), wt(l) && (r || t === 0 || ze(t) === ze(l)) && (t += l);
      }
      return t;
    }
  }
  function Fh(n) {
    const t = Object.keys(n),
      e = new Array(t.length);
    let i, s, r;
    for (i = 0, s = t.length; i < s; ++i) (r = t[i]), (e[i] = { x: r, y: n[r] });
    return e;
  }
  function Kr(n, t) {
    const e = n && n.options.stacked;
    return e || (e === void 0 && t.stack !== void 0);
  }
  function Lh(n, t, e) {
    return `${n.id}.${t.id}.${e.stack || e.type}`;
  }
  function Ih(n) {
    const { min: t, max: e, minDefined: i, maxDefined: s } = n.getUserBounds();
    return { min: i ? t : Number.NEGATIVE_INFINITY, max: s ? e : Number.POSITIVE_INFINITY };
  }
  function Nh(n, t, e) {
    const i = n[t] || (n[t] = {});
    return i[e] || (i[e] = {});
  }
  function qr(n, t, e, i) {
    for (const s of t.getMatchingVisibleMetas(i).reverse()) {
      const r = n[s.index];
      if ((e && r > 0) || (!e && r < 0)) return s.index;
    }
    return null;
  }
  function Zr(n, t) {
    const { chart: e, _cachedMeta: i } = n,
      s = e._stacks || (e._stacks = {}),
      { iScale: r, vScale: o, index: a } = i,
      c = r.axis,
      l = o.axis,
      h = Lh(r, o, i),
      f = t.length;
    let u;
    for (let d = 0; d < f; ++d) {
      const p = t[d],
        { [c]: m, [l]: b } = p,
        y = p._stacks || (p._stacks = {});
      (u = y[l] = Nh(s, h, m)),
        (u[a] = b),
        (u._top = qr(u, o, !0, i.type)),
        (u._bottom = qr(u, o, !1, i.type));
      const _ = u._visualValues || (u._visualValues = {});
      _[a] = b;
    }
  }
  function qi(n, t) {
    const e = n.scales;
    return Object.keys(e)
      .filter((i) => e[i].axis === t)
      .shift();
  }
  function zh(n, t) {
    return _e(n, {
      active: !1,
      dataset: void 0,
      datasetIndex: t,
      index: t,
      mode: 'default',
      type: 'dataset',
    });
  }
  function Bh(n, t, e) {
    return _e(n, {
      active: !1,
      dataIndex: t,
      parsed: void 0,
      raw: void 0,
      element: e,
      index: t,
      mode: 'default',
      type: 'data',
    });
  }
  function gn(n, t) {
    const e = n.controller.index,
      i = n.vScale && n.vScale.axis;
    if (i) {
      t = t || n._parsed;
      for (const s of t) {
        const r = s._stacks;
        if (!r || r[i] === void 0 || r[i][e] === void 0) return;
        delete r[i][e],
          r[i]._visualValues !== void 0 &&
            r[i]._visualValues[e] !== void 0 &&
            delete r[i]._visualValues[e];
      }
    }
  }
  const Zi = (n) => n === 'reset' || n === 'none',
    Qr = (n, t) => (t ? n : Object.assign({}, n)),
    jh = (n, t, e) => n && !t.hidden && t._stacked && { keys: Xr(e, !0), values: null };
  class pn {
    constructor(t, e) {
      (this.chart = t),
        (this._ctx = t.ctx),
        (this.index = e),
        (this._cachedDataOpts = {}),
        (this._cachedMeta = this.getMeta()),
        (this._type = this._cachedMeta.type),
        (this.options = void 0),
        (this._parsing = !1),
        (this._data = void 0),
        (this._objectData = void 0),
        (this._sharedOptions = void 0),
        (this._drawStart = void 0),
        (this._drawCount = void 0),
        (this.enableOptionSharing = !1),
        (this.supportsDecimation = !1),
        (this.$context = void 0),
        (this._syncList = []),
        (this.datasetElementType = new.target.datasetElementType),
        (this.dataElementType = new.target.dataElementType),
        this.initialize();
    }
    initialize() {
      const t = this._cachedMeta;
      this.configure(),
        this.linkScales(),
        (t._stacked = Kr(t.vScale, t)),
        this.addElements(),
        this.options.fill &&
          !this.chart.isPluginEnabled('filler') &&
          console.warn(
            "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
          );
    }
    updateIndex(t) {
      this.index !== t && gn(this._cachedMeta), (this.index = t);
    }
    linkScales() {
      const t = this.chart,
        e = this._cachedMeta,
        i = this.getDataset(),
        s = (f, u, d, p) => (f === 'x' ? u : f === 'r' ? p : d),
        r = (e.xAxisID = et(i.xAxisID, qi(t, 'x'))),
        o = (e.yAxisID = et(i.yAxisID, qi(t, 'y'))),
        a = (e.rAxisID = et(i.rAxisID, qi(t, 'r'))),
        c = e.indexAxis,
        l = (e.iAxisID = s(c, r, o, a)),
        h = (e.vAxisID = s(c, o, r, a));
      (e.xScale = this.getScaleForId(r)),
        (e.yScale = this.getScaleForId(o)),
        (e.rScale = this.getScaleForId(a)),
        (e.iScale = this.getScaleForId(l)),
        (e.vScale = this.getScaleForId(h));
    }
    getDataset() {
      return this.chart.data.datasets[this.index];
    }
    getMeta() {
      return this.chart.getDatasetMeta(this.index);
    }
    getScaleForId(t) {
      return this.chart.scales[t];
    }
    _getOtherScale(t) {
      const e = this._cachedMeta;
      return t === e.iScale ? e.vScale : e.iScale;
    }
    reset() {
      this._update('reset');
    }
    _destroy() {
      const t = this._cachedMeta;
      this._data && br(this._data, this), t._stacked && gn(t);
    }
    _dataCheck() {
      const t = this.getDataset(),
        e = t.data || (t.data = []),
        i = this._data;
      if (X(e)) this._data = Fh(e);
      else if (i !== e) {
        if (i) {
          br(i, this);
          const s = this._cachedMeta;
          gn(s), (s._parsed = []);
        }
        e && Object.isExtensible(e) && bl(e, this), (this._syncList = []), (this._data = e);
      }
    }
    addElements() {
      const t = this._cachedMeta;
      this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
    }
    buildOrUpdateElements(t) {
      const e = this._cachedMeta,
        i = this.getDataset();
      let s = !1;
      this._dataCheck();
      const r = e._stacked;
      (e._stacked = Kr(e.vScale, e)),
        e.stack !== i.stack && ((s = !0), gn(e), (e.stack = i.stack)),
        this._resyncElements(t),
        (s || r !== e._stacked) && Zr(this, e._parsed);
    }
    configure() {
      const t = this.chart.config,
        e = t.datasetScopeKeys(this._type),
        i = t.getOptionScopes(this.getDataset(), e, !0);
      (this.options = t.createResolver(i, this.getContext())),
        (this._parsing = this.options.parsing),
        (this._cachedDataOpts = {});
    }
    parse(t, e) {
      const { _cachedMeta: i, _data: s } = this,
        { iScale: r, _stacked: o } = i,
        a = r.axis;
      let c = t === 0 && e === s.length ? !0 : i._sorted,
        l = t > 0 && i._parsed[t - 1],
        h,
        f,
        u;
      if (this._parsing === !1) (i._parsed = s), (i._sorted = !0), (u = s);
      else {
        lt(s[t])
          ? (u = this.parseArrayData(i, s, t, e))
          : X(s[t])
          ? (u = this.parseObjectData(i, s, t, e))
          : (u = this.parsePrimitiveData(i, s, t, e));
        const d = () => f[a] === null || (l && f[a] < l[a]);
        for (h = 0; h < e; ++h) (i._parsed[h + t] = f = u[h]), c && (d() && (c = !1), (l = f));
        i._sorted = c;
      }
      o && Zr(this, u);
    }
    parsePrimitiveData(t, e, i, s) {
      const { iScale: r, vScale: o } = t,
        a = r.axis,
        c = o.axis,
        l = r.getLabels(),
        h = r === o,
        f = new Array(s);
      let u, d, p;
      for (u = 0, d = s; u < d; ++u)
        (p = u + i), (f[u] = { [a]: h || r.parse(l[p], p), [c]: o.parse(e[p], p) });
      return f;
    }
    parseArrayData(t, e, i, s) {
      const { xScale: r, yScale: o } = t,
        a = new Array(s);
      let c, l, h, f;
      for (c = 0, l = s; c < l; ++c)
        (h = c + i), (f = e[h]), (a[c] = { x: r.parse(f[0], h), y: o.parse(f[1], h) });
      return a;
    }
    parseObjectData(t, e, i, s) {
      const { xScale: r, yScale: o } = t,
        { xAxisKey: a = 'x', yAxisKey: c = 'y' } = this._parsing,
        l = new Array(s);
      let h, f, u, d;
      for (h = 0, f = s; h < f; ++h)
        (u = h + i), (d = e[u]), (l[h] = { x: r.parse(Bn(d, a), u), y: o.parse(Bn(d, c), u) });
      return l;
    }
    getParsed(t) {
      return this._cachedMeta._parsed[t];
    }
    getDataElement(t) {
      return this._cachedMeta.data[t];
    }
    applyStack(t, e, i) {
      const s = this.chart,
        r = this._cachedMeta,
        o = e[t.axis],
        a = { keys: Xr(s, !0), values: e._stacks[t.axis]._visualValues };
      return Gr(a, o, r.index, { mode: i });
    }
    updateRangeFromParsed(t, e, i, s) {
      const r = i[e.axis];
      let o = r === null ? NaN : r;
      const a = s && i._stacks[e.axis];
      s && a && ((s.values = a), (o = Gr(s, r, this._cachedMeta.index))),
        (t.min = Math.min(t.min, o)),
        (t.max = Math.max(t.max, o));
    }
    getMinMax(t, e) {
      const i = this._cachedMeta,
        s = i._parsed,
        r = i._sorted && t === i.iScale,
        o = s.length,
        a = this._getOtherScale(t),
        c = jh(e, i, this.chart),
        l = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
        { min: h, max: f } = Ih(a);
      let u, d;
      function p() {
        d = s[u];
        const m = d[a.axis];
        return !wt(d[t.axis]) || h > m || f < m;
      }
      for (u = 0; u < o && !(!p() && (this.updateRangeFromParsed(l, t, d, c), r)); ++u);
      if (r) {
        for (u = o - 1; u >= 0; --u)
          if (!p()) {
            this.updateRangeFromParsed(l, t, d, c);
            break;
          }
      }
      return l;
    }
    getAllParsedValues(t) {
      const e = this._cachedMeta._parsed,
        i = [];
      let s, r, o;
      for (s = 0, r = e.length; s < r; ++s) (o = e[s][t.axis]), wt(o) && i.push(o);
      return i;
    }
    getMaxOverflow() {
      return !1;
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        i = e.iScale,
        s = e.vScale,
        r = this.getParsed(t);
      return {
        label: i ? '' + i.getLabelForValue(r[i.axis]) : '',
        value: s ? '' + s.getLabelForValue(r[s.axis]) : '',
      };
    }
    _update(t) {
      const e = this._cachedMeta;
      this.update(t || 'default'),
        (e._clip = Rh(et(this.options.clip, Th(e.xScale, e.yScale, this.getMaxOverflow()))));
    }
    update(t) {}
    draw() {
      const t = this._ctx,
        e = this.chart,
        i = this._cachedMeta,
        s = i.data || [],
        r = e.chartArea,
        o = [],
        a = this._drawStart || 0,
        c = this._drawCount || s.length - a,
        l = this.options.drawActiveElementsOnTop;
      let h;
      for (i.dataset && i.dataset.draw(t, r, a, c), h = a; h < a + c; ++h) {
        const f = s[h];
        f.hidden || (f.active && l ? o.push(f) : f.draw(t, r));
      }
      for (h = 0; h < o.length; ++h) o[h].draw(t, r);
    }
    getStyle(t, e) {
      const i = e ? 'active' : 'default';
      return t === void 0 && this._cachedMeta.dataset
        ? this.resolveDatasetElementOptions(i)
        : this.resolveDataElementOptions(t || 0, i);
    }
    getContext(t, e, i) {
      const s = this.getDataset();
      let r;
      if (t >= 0 && t < this._cachedMeta.data.length) {
        const o = this._cachedMeta.data[t];
        (r = o.$context || (o.$context = Bh(this.getContext(), t, o))),
          (r.parsed = this.getParsed(t)),
          (r.raw = s.data[t]),
          (r.index = r.dataIndex = t);
      } else (r = this.$context || (this.$context = zh(this.chart.getContext(), this.index))), (r.dataset = s), (r.index = r.datasetIndex = this.index);
      return (r.active = !!e), (r.mode = i), r;
    }
    resolveDatasetElementOptions(t) {
      return this._resolveElementOptions(this.datasetElementType.id, t);
    }
    resolveDataElementOptions(t, e) {
      return this._resolveElementOptions(this.dataElementType.id, e, t);
    }
    _resolveElementOptions(t, e = 'default', i) {
      const s = e === 'active',
        r = this._cachedDataOpts,
        o = t + '-' + e,
        a = r[o],
        c = this.enableOptionSharing && jn(i);
      if (a) return Qr(a, c);
      const l = this.chart.config,
        h = l.datasetElementScopeKeys(this._type, t),
        f = s ? [`${t}Hover`, 'hover', t, ''] : [t, ''],
        u = l.getOptionScopes(this.getDataset(), h),
        d = Object.keys(ft.elements[t]),
        p = () => this.getContext(i, s, e),
        m = l.resolveNamedOptions(u, d, p, f);
      return m.$shared && ((m.$shared = c), (r[o] = Object.freeze(Qr(m, c)))), m;
    }
    _resolveAnimations(t, e, i) {
      const s = this.chart,
        r = this._cachedDataOpts,
        o = `animation-${e}`,
        a = r[o];
      if (a) return a;
      let c;
      if (s.options.animation !== !1) {
        const h = this.chart.config,
          f = h.datasetAnimationScopeKeys(this._type, e),
          u = h.getOptionScopes(this.getDataset(), f);
        c = h.createResolver(u, this.getContext(t, i, e));
      }
      const l = new Yr(s, c && c.animations);
      return c && c._cacheable && (r[o] = Object.freeze(l)), l;
    }
    getSharedOptions(t) {
      if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
    }
    includeOptions(t, e) {
      return !e || Zi(t) || this.chart._animationsDisabled;
    }
    _getSharedOptions(t, e) {
      const i = this.resolveDataElementOptions(t, e),
        s = this._sharedOptions,
        r = this.getSharedOptions(i),
        o = this.includeOptions(e, r) || r !== s;
      return this.updateSharedOptions(r, e, i), { sharedOptions: r, includeOptions: o };
    }
    updateElement(t, e, i, s) {
      Zi(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i);
    }
    updateSharedOptions(t, e, i) {
      t && !Zi(e) && this._resolveAnimations(void 0, e).update(t, i);
    }
    _setStyle(t, e, i, s) {
      t.active = s;
      const r = this.getStyle(e, s);
      this._resolveAnimations(e, i, s).update(t, {
        options: (!s && this.getSharedOptions(r)) || r,
      });
    }
    removeHoverStyle(t, e, i) {
      this._setStyle(t, i, 'active', !1);
    }
    setHoverStyle(t, e, i) {
      this._setStyle(t, i, 'active', !0);
    }
    _removeDatasetHoverStyle() {
      const t = this._cachedMeta.dataset;
      t && this._setStyle(t, void 0, 'active', !1);
    }
    _setDatasetHoverStyle() {
      const t = this._cachedMeta.dataset;
      t && this._setStyle(t, void 0, 'active', !0);
    }
    _resyncElements(t) {
      const e = this._data,
        i = this._cachedMeta.data;
      for (const [a, c, l] of this._syncList) this[a](c, l);
      this._syncList = [];
      const s = i.length,
        r = e.length,
        o = Math.min(r, s);
      o && this.parse(0, o),
        r > s ? this._insertElements(s, r - s, t) : r < s && this._removeElements(r, s - r);
    }
    _insertElements(t, e, i = !0) {
      const s = this._cachedMeta,
        r = s.data,
        o = t + e;
      let a;
      const c = (l) => {
        for (l.length += e, a = l.length - 1; a >= o; a--) l[a] = l[a - e];
      };
      for (c(r), a = t; a < o; ++a) r[a] = new this.dataElementType();
      this._parsing && c(s._parsed), this.parse(t, e), i && this.updateElements(r, t, e, 'reset');
    }
    updateElements(t, e, i, s) {}
    _removeElements(t, e) {
      const i = this._cachedMeta;
      if (this._parsing) {
        const s = i._parsed.splice(t, e);
        i._stacked && gn(i, s);
      }
      i.data.splice(t, e);
    }
    _sync(t) {
      if (this._parsing) this._syncList.push(t);
      else {
        const [e, i, s] = t;
        this[e](i, s);
      }
      this.chart._dataChanges.push([this.index, ...t]);
    }
    _onDataPush() {
      const t = arguments.length;
      this._sync(['_insertElements', this.getDataset().data.length - t, t]);
    }
    _onDataPop() {
      this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
    }
    _onDataShift() {
      this._sync(['_removeElements', 0, 1]);
    }
    _onDataSplice(t, e) {
      e && this._sync(['_removeElements', t, e]);
      const i = arguments.length - 2;
      i && this._sync(['_insertElements', t, i]);
    }
    _onDataUnshift() {
      this._sync(['_insertElements', 0, arguments.length]);
    }
  }
  L(pn, 'defaults', {}), L(pn, 'datasetElementType', null), L(pn, 'dataElementType', null);
  class qn extends pn {
    initialize() {
      (this.enableOptionSharing = !0), (this.supportsDecimation = !0), super.initialize();
    }
    update(t) {
      const e = this._cachedMeta,
        { dataset: i, data: s = [], _dataset: r } = e,
        o = this.chart._animationsDisabled;
      let { start: a, count: c } = _l(e, s, o);
      (this._drawStart = a),
        (this._drawCount = c),
        vl(e) && ((a = 0), (c = s.length)),
        (i._chart = this.chart),
        (i._datasetIndex = this.index),
        (i._decimated = !!r._decimated),
        (i.points = s);
      const l = this.resolveDatasetElementOptions(t);
      this.options.showLine || (l.borderWidth = 0),
        (l.segment = this.options.segment),
        this.updateElement(i, void 0, { animated: !o, options: l }, t),
        this.updateElements(s, a, c, t);
    }
    updateElements(t, e, i, s) {
      const r = s === 'reset',
        { iScale: o, vScale: a, _stacked: c, _dataset: l } = this._cachedMeta,
        { sharedOptions: h, includeOptions: f } = this._getSharedOptions(e, s),
        u = o.axis,
        d = a.axis,
        { spanGaps: p, segment: m } = this.options,
        b = cn(p) ? p : Number.POSITIVE_INFINITY,
        y = this.chart._animationsDisabled || r || s === 'none',
        _ = e + i,
        S = t.length;
      let M = e > 0 && this.getParsed(e - 1);
      for (let w = 0; w < S; ++w) {
        const P = t[w],
          k = y ? P : {};
        if (w < e || w >= _) {
          k.skip = !0;
          continue;
        }
        const T = this.getParsed(w),
          B = it(T[d]),
          st = (k[u] = o.getPixelForValue(T[u], w)),
          rt = (k[d] =
            r || B ? a.getBasePixel() : a.getPixelForValue(c ? this.applyStack(a, T, c) : T[d], w));
        (k.skip = isNaN(st) || isNaN(rt) || B),
          (k.stop = w > 0 && Math.abs(T[u] - M[u]) > b),
          m && ((k.parsed = T), (k.raw = l.data[w])),
          f && (k.options = h || this.resolveDataElementOptions(w, P.active ? 'active' : s)),
          y || this.updateElement(P, w, k, s),
          (M = T);
      }
    }
    getMaxOverflow() {
      const t = this._cachedMeta,
        e = t.dataset,
        i = (e.options && e.options.borderWidth) || 0,
        s = t.data || [];
      if (!s.length) return i;
      const r = s[0].size(this.resolveDataElementOptions(0)),
        o = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
      return Math.max(i, r, o) / 2;
    }
    draw() {
      const t = this._cachedMeta;
      t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
    }
  }
  L(qn, 'id', 'line'),
    L(qn, 'defaults', {
      datasetElementType: 'line',
      dataElementType: 'point',
      showLine: !0,
      spanGaps: !1,
    }),
    L(qn, 'overrides', { scales: { _index_: { type: 'category' }, _value_: { type: 'linear' } } });
  function Te() {
    throw new Error(
      'This method is not implemented: Check that a complete date adapter is provided.'
    );
  }
  class Qi {
    constructor(t) {
      L(this, 'options');
      this.options = t || {};
    }
    static override(t) {
      Object.assign(Qi.prototype, t);
    }
    init() {}
    formats() {
      return Te();
    }
    parse() {
      return Te();
    }
    format() {
      return Te();
    }
    add() {
      return Te();
    }
    diff() {
      return Te();
    }
    startOf() {
      return Te();
    }
    endOf() {
      return Te();
    }
  }
  var Vh = { _date: Qi };
  function $h(n, t, e, i) {
    const { controller: s, data: r, _sorted: o } = n,
      a = s._cachedMeta.iScale;
    if (a && t === a.axis && t !== 'r' && o && r.length) {
      const c = a._reversePixels ? pl : Ee;
      if (i) {
        if (s._sharedOptions) {
          const l = r[0],
            h = typeof l.getRange == 'function' && l.getRange(t);
          if (h) {
            const f = c(r, t, e - h),
              u = c(r, t, e + h);
            return { lo: f.lo, hi: u.hi };
          }
        }
      } else return c(r, t, e);
    }
    return { lo: 0, hi: r.length - 1 };
  }
  function mn(n, t, e, i, s) {
    const r = n.getSortedVisibleDatasetMetas(),
      o = e[t];
    for (let a = 0, c = r.length; a < c; ++a) {
      const { index: l, data: h } = r[a],
        { lo: f, hi: u } = $h(r[a], t, o, s);
      for (let d = f; d <= u; ++d) {
        const p = h[d];
        p.skip || i(p, l, d);
      }
    }
  }
  function Wh(n) {
    const t = n.indexOf('x') !== -1,
      e = n.indexOf('y') !== -1;
    return function (i, s) {
      const r = t ? Math.abs(i.x - s.x) : 0,
        o = e ? Math.abs(i.y - s.y) : 0;
      return Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2));
    };
  }
  function Ji(n, t, e, i, s) {
    const r = [];
    return (
      (!s && !n.isPointInArea(t)) ||
        mn(
          n,
          e,
          t,
          function (a, c, l) {
            (!s && !oe(a, n.chartArea, 0)) ||
              (a.inRange(t.x, t.y, i) && r.push({ element: a, datasetIndex: c, index: l }));
          },
          !0
        ),
      r
    );
  }
  function Hh(n, t, e, i) {
    let s = [];
    function r(o, a, c) {
      const { startAngle: l, endAngle: h } = o.getProps(['startAngle', 'endAngle'], i),
        { angle: f } = fl(o, { x: t.x, y: t.y });
      pr(f, l, h) && s.push({ element: o, datasetIndex: a, index: c });
    }
    return mn(n, e, t, r), s;
  }
  function Yh(n, t, e, i, s, r) {
    let o = [];
    const a = Wh(e);
    let c = Number.POSITIVE_INFINITY;
    function l(h, f, u) {
      const d = h.inRange(t.x, t.y, s);
      if (i && !d) return;
      const p = h.getCenterPoint(s);
      if (!(!!r || n.isPointInArea(p)) && !d) return;
      const b = a(t, p);
      b < c
        ? ((o = [{ element: h, datasetIndex: f, index: u }]), (c = b))
        : b === c && o.push({ element: h, datasetIndex: f, index: u });
    }
    return mn(n, e, t, l), o;
  }
  function ts(n, t, e, i, s, r) {
    return !r && !n.isPointInArea(t) ? [] : e === 'r' && !i ? Hh(n, t, e, s) : Yh(n, t, e, i, s, r);
  }
  function Jr(n, t, e, i, s) {
    const r = [],
      o = e === 'x' ? 'inXRange' : 'inYRange';
    let a = !1;
    return (
      mn(n, e, t, (c, l, h) => {
        c[o](t[e], s) &&
          (r.push({ element: c, datasetIndex: l, index: h }), (a = a || c.inRange(t.x, t.y, s)));
      }),
      i && !a ? [] : r
    );
  }
  var Uh = {
    evaluateInteractionItems: mn,
    modes: {
      index(n, t, e, i) {
        const s = Pe(t, n),
          r = e.axis || 'x',
          o = e.includeInvisible || !1,
          a = e.intersect ? Ji(n, s, r, i, o) : ts(n, s, r, !1, i, o),
          c = [];
        return a.length
          ? (n.getSortedVisibleDatasetMetas().forEach((l) => {
              const h = a[0].index,
                f = l.data[h];
              f && !f.skip && c.push({ element: f, datasetIndex: l.index, index: h });
            }),
            c)
          : [];
      },
      dataset(n, t, e, i) {
        const s = Pe(t, n),
          r = e.axis || 'xy',
          o = e.includeInvisible || !1;
        let a = e.intersect ? Ji(n, s, r, i, o) : ts(n, s, r, !1, i, o);
        if (a.length > 0) {
          const c = a[0].datasetIndex,
            l = n.getDatasetMeta(c).data;
          a = [];
          for (let h = 0; h < l.length; ++h) a.push({ element: l[h], datasetIndex: c, index: h });
        }
        return a;
      },
      point(n, t, e, i) {
        const s = Pe(t, n),
          r = e.axis || 'xy',
          o = e.includeInvisible || !1;
        return Ji(n, s, r, i, o);
      },
      nearest(n, t, e, i) {
        const s = Pe(t, n),
          r = e.axis || 'xy',
          o = e.includeInvisible || !1;
        return ts(n, s, r, e.intersect, i, o);
      },
      x(n, t, e, i) {
        const s = Pe(t, n);
        return Jr(n, s, 'x', e.intersect, i);
      },
      y(n, t, e, i) {
        const s = Pe(t, n);
        return Jr(n, s, 'y', e.intersect, i);
      },
    },
  };
  const to = ['left', 'top', 'right', 'bottom'];
  function bn(n, t) {
    return n.filter((e) => e.pos === t);
  }
  function eo(n, t) {
    return n.filter((e) => to.indexOf(e.pos) === -1 && e.box.axis === t);
  }
  function yn(n, t) {
    return n.sort((e, i) => {
      const s = t ? i : e,
        r = t ? e : i;
      return s.weight === r.weight ? s.index - r.index : s.weight - r.weight;
    });
  }
  function Xh(n) {
    const t = [];
    let e, i, s, r, o, a;
    for (e = 0, i = (n || []).length; e < i; ++e)
      (s = n[e]),
        ({
          position: r,
          options: { stack: o, stackWeight: a = 1 },
        } = s),
        t.push({
          index: e,
          box: s,
          pos: r,
          horizontal: s.isHorizontal(),
          weight: s.weight,
          stack: o && r + o,
          stackWeight: a,
        });
    return t;
  }
  function Gh(n) {
    const t = {};
    for (const e of n) {
      const { stack: i, pos: s, stackWeight: r } = e;
      if (!i || !to.includes(s)) continue;
      const o = t[i] || (t[i] = { count: 0, placed: 0, weight: 0, size: 0 });
      o.count++, (o.weight += r);
    }
    return t;
  }
  function Kh(n, t) {
    const e = Gh(n),
      { vBoxMaxWidth: i, hBoxMaxHeight: s } = t;
    let r, o, a;
    for (r = 0, o = n.length; r < o; ++r) {
      a = n[r];
      const { fullSize: c } = a.box,
        l = e[a.stack],
        h = l && a.stackWeight / l.weight;
      a.horizontal
        ? ((a.width = h ? h * i : c && t.availableWidth), (a.height = s))
        : ((a.width = i), (a.height = h ? h * s : c && t.availableHeight));
    }
    return e;
  }
  function qh(n) {
    const t = Xh(n),
      e = yn(
        t.filter((l) => l.box.fullSize),
        !0
      ),
      i = yn(bn(t, 'left'), !0),
      s = yn(bn(t, 'right')),
      r = yn(bn(t, 'top'), !0),
      o = yn(bn(t, 'bottom')),
      a = eo(t, 'x'),
      c = eo(t, 'y');
    return {
      fullSize: e,
      leftAndTop: i.concat(r),
      rightAndBottom: s.concat(c).concat(o).concat(a),
      chartArea: bn(t, 'chartArea'),
      vertical: i.concat(s).concat(c),
      horizontal: r.concat(o).concat(a),
    };
  }
  function no(n, t, e, i) {
    return Math.max(n[e], t[e]) + Math.max(n[i], t[i]);
  }
  function io(n, t) {
    (n.top = Math.max(n.top, t.top)),
      (n.left = Math.max(n.left, t.left)),
      (n.bottom = Math.max(n.bottom, t.bottom)),
      (n.right = Math.max(n.right, t.right));
  }
  function Zh(n, t, e, i) {
    const { pos: s, box: r } = e,
      o = n.maxPadding;
    if (!X(s)) {
      e.size && (n[s] -= e.size);
      const f = i[e.stack] || { size: 0, count: 1 };
      (f.size = Math.max(f.size, e.horizontal ? r.height : r.width)),
        (e.size = f.size / f.count),
        (n[s] += e.size);
    }
    r.getPadding && io(o, r.getPadding());
    const a = Math.max(0, t.outerWidth - no(o, n, 'left', 'right')),
      c = Math.max(0, t.outerHeight - no(o, n, 'top', 'bottom')),
      l = a !== n.w,
      h = c !== n.h;
    return (n.w = a), (n.h = c), e.horizontal ? { same: l, other: h } : { same: h, other: l };
  }
  function Qh(n) {
    const t = n.maxPadding;
    function e(i) {
      const s = Math.max(t[i] - n[i], 0);
      return (n[i] += s), s;
    }
    (n.y += e('top')), (n.x += e('left')), e('right'), e('bottom');
  }
  function Jh(n, t) {
    const e = t.maxPadding;
    function i(s) {
      const r = { left: 0, top: 0, right: 0, bottom: 0 };
      return (
        s.forEach((o) => {
          r[o] = Math.max(t[o], e[o]);
        }),
        r
      );
    }
    return i(n ? ['left', 'right'] : ['top', 'bottom']);
  }
  function xn(n, t, e, i) {
    const s = [];
    let r, o, a, c, l, h;
    for (r = 0, o = n.length, l = 0; r < o; ++r) {
      (a = n[r]), (c = a.box), c.update(a.width || t.w, a.height || t.h, Jh(a.horizontal, t));
      const { same: f, other: u } = Zh(t, e, a, i);
      (l |= f && s.length), (h = h || u), c.fullSize || s.push(a);
    }
    return (l && xn(s, t, e, i)) || h;
  }
  function Zn(n, t, e, i, s) {
    (n.top = e), (n.left = t), (n.right = t + i), (n.bottom = e + s), (n.width = i), (n.height = s);
  }
  function so(n, t, e, i) {
    const s = e.padding;
    let { x: r, y: o } = t;
    for (const a of n) {
      const c = a.box,
        l = i[a.stack] || { count: 1, placed: 0, weight: 1 },
        h = a.stackWeight / l.weight || 1;
      if (a.horizontal) {
        const f = t.w * h,
          u = l.size || c.height;
        jn(l.start) && (o = l.start),
          c.fullSize
            ? Zn(c, s.left, o, e.outerWidth - s.right - s.left, u)
            : Zn(c, t.left + l.placed, o, f, u),
          (l.start = o),
          (l.placed += f),
          (o = c.bottom);
      } else {
        const f = t.h * h,
          u = l.size || c.width;
        jn(l.start) && (r = l.start),
          c.fullSize
            ? Zn(c, r, s.top, u, e.outerHeight - s.bottom - s.top)
            : Zn(c, r, t.top + l.placed, u, f),
          (l.start = r),
          (l.placed += f),
          (r = c.right);
      }
    }
    (t.x = r), (t.y = o);
  }
  var ve = {
    addBox(n, t) {
      n.boxes || (n.boxes = []),
        (t.fullSize = t.fullSize || !1),
        (t.position = t.position || 'top'),
        (t.weight = t.weight || 0),
        (t._layers =
          t._layers ||
          function () {
            return [
              {
                z: 0,
                draw(e) {
                  t.draw(e);
                },
              },
            ];
          }),
        n.boxes.push(t);
    },
    removeBox(n, t) {
      const e = n.boxes ? n.boxes.indexOf(t) : -1;
      e !== -1 && n.boxes.splice(e, 1);
    },
    configure(n, t, e) {
      (t.fullSize = e.fullSize), (t.position = e.position), (t.weight = e.weight);
    },
    update(n, t, e, i) {
      if (!n) return;
      const s = Lt(n.options.layout.padding),
        r = Math.max(t - s.width, 0),
        o = Math.max(e - s.height, 0),
        a = qh(n.boxes),
        c = a.vertical,
        l = a.horizontal;
      J(n.boxes, (m) => {
        typeof m.beforeLayout == 'function' && m.beforeLayout();
      });
      const h =
          c.reduce((m, b) => (b.box.options && b.box.options.display === !1 ? m : m + 1), 0) || 1,
        f = Object.freeze({
          outerWidth: t,
          outerHeight: e,
          padding: s,
          availableWidth: r,
          availableHeight: o,
          vBoxMaxWidth: r / 2 / h,
          hBoxMaxHeight: o / 2,
        }),
        u = Object.assign({}, s);
      io(u, Lt(i));
      const d = Object.assign({ maxPadding: u, w: r, h: o, x: s.left, y: s.top }, s),
        p = Kh(c.concat(l), f);
      xn(a.fullSize, d, f, p),
        xn(c, d, f, p),
        xn(l, d, f, p) && xn(c, d, f, p),
        Qh(d),
        so(a.leftAndTop, d, f, p),
        (d.x += d.w),
        (d.y += d.h),
        so(a.rightAndBottom, d, f, p),
        (n.chartArea = {
          left: d.left,
          top: d.top,
          right: d.left + d.w,
          bottom: d.top + d.h,
          height: d.h,
          width: d.w,
        }),
        J(a.chartArea, (m) => {
          const b = m.box;
          Object.assign(b, n.chartArea),
            b.update(d.w, d.h, { left: 0, top: 0, right: 0, bottom: 0 });
        });
    },
  };
  class ro {
    acquireContext(t, e) {}
    releaseContext(t) {
      return !1;
    }
    addEventListener(t, e, i) {}
    removeEventListener(t, e, i) {}
    getDevicePixelRatio() {
      return 1;
    }
    getMaximumSize(t, e, i, s) {
      return (
        (e = Math.max(0, e || t.width)),
        (i = i || t.height),
        { width: e, height: Math.max(0, s ? Math.floor(e / s) : i) }
      );
    }
    isAttached(t) {
      return !0;
    }
    updateConfig(t) {}
  }
  class tf extends ro {
    acquireContext(t) {
      return (t && t.getContext && t.getContext('2d')) || null;
    }
    updateConfig(t) {
      t.options.animation = !1;
    }
  }
  const Qn = '$chartjs',
    ef = {
      touchstart: 'mousedown',
      touchmove: 'mousemove',
      touchend: 'mouseup',
      pointerenter: 'mouseenter',
      pointerdown: 'mousedown',
      pointermove: 'mousemove',
      pointerup: 'mouseup',
      pointerleave: 'mouseout',
      pointerout: 'mouseout',
    },
    oo = (n) => n === null || n === '';
  function nf(n, t) {
    const e = n.style,
      i = n.getAttribute('height'),
      s = n.getAttribute('width');
    if (
      ((n[Qn] = {
        initial: {
          height: i,
          width: s,
          style: { display: e.display, height: e.height, width: e.width },
        },
      }),
      (e.display = e.display || 'block'),
      (e.boxSizing = e.boxSizing || 'border-box'),
      oo(s))
    ) {
      const r = Br(n, 'width');
      r !== void 0 && (n.width = r);
    }
    if (oo(i))
      if (n.style.height === '') n.height = n.width / (t || 2);
      else {
        const r = Br(n, 'height');
        r !== void 0 && (n.height = r);
      }
    return n;
  }
  const ao = uh ? { passive: !0 } : !1;
  function sf(n, t, e) {
    n.addEventListener(t, e, ao);
  }
  function rf(n, t, e) {
    n.canvas.removeEventListener(t, e, ao);
  }
  function of(n, t) {
    const e = ef[n.type] || n.type,
      { x: i, y: s } = Pe(n, t);
    return { type: e, chart: t, native: n, x: i !== void 0 ? i : null, y: s !== void 0 ? s : null };
  }
  function Jn(n, t) {
    for (const e of n) if (e === t || e.contains(t)) return !0;
  }
  function af(n, t, e) {
    const i = n.canvas,
      s = new MutationObserver((r) => {
        let o = !1;
        for (const a of r) (o = o || Jn(a.addedNodes, i)), (o = o && !Jn(a.removedNodes, i));
        o && e();
      });
    return s.observe(document, { childList: !0, subtree: !0 }), s;
  }
  function cf(n, t, e) {
    const i = n.canvas,
      s = new MutationObserver((r) => {
        let o = !1;
        for (const a of r) (o = o || Jn(a.removedNodes, i)), (o = o && !Jn(a.addedNodes, i));
        o && e();
      });
    return s.observe(document, { childList: !0, subtree: !0 }), s;
  }
  const _n = new Map();
  let co = 0;
  function lo() {
    const n = window.devicePixelRatio;
    n !== co &&
      ((co = n),
      _n.forEach((t, e) => {
        e.currentDevicePixelRatio !== n && t();
      }));
  }
  function lf(n, t) {
    _n.size || window.addEventListener('resize', lo), _n.set(n, t);
  }
  function hf(n) {
    _n.delete(n), _n.size || window.removeEventListener('resize', lo);
  }
  function ff(n, t, e) {
    const i = n.canvas,
      s = i && Gi(i);
    if (!s) return;
    const r = xr((a, c) => {
        const l = s.clientWidth;
        e(a, c), l < s.clientWidth && e();
      }, window),
      o = new ResizeObserver((a) => {
        const c = a[0],
          l = c.contentRect.width,
          h = c.contentRect.height;
        (l === 0 && h === 0) || r(l, h);
      });
    return o.observe(s), lf(n, r), o;
  }
  function es(n, t, e) {
    e && e.disconnect(), t === 'resize' && hf(n);
  }
  function uf(n, t, e) {
    const i = n.canvas,
      s = xr((r) => {
        n.ctx !== null && e(of(r, n));
      }, n);
    return sf(i, t, s), s;
  }
  class df extends ro {
    acquireContext(t, e) {
      const i = t && t.getContext && t.getContext('2d');
      return i && i.canvas === t ? (nf(t, e), i) : null;
    }
    releaseContext(t) {
      const e = t.canvas;
      if (!e[Qn]) return !1;
      const i = e[Qn].initial;
      ['height', 'width'].forEach((r) => {
        const o = i[r];
        it(o) ? e.removeAttribute(r) : e.setAttribute(r, o);
      });
      const s = i.style || {};
      return (
        Object.keys(s).forEach((r) => {
          e.style[r] = s[r];
        }),
        (e.width = e.width),
        delete e[Qn],
        !0
      );
    }
    addEventListener(t, e, i) {
      this.removeEventListener(t, e);
      const s = t.$proxies || (t.$proxies = {}),
        o = { attach: af, detach: cf, resize: ff }[e] || uf;
      s[e] = o(t, e, i);
    }
    removeEventListener(t, e) {
      const i = t.$proxies || (t.$proxies = {}),
        s = i[e];
      if (!s) return;
      (({ attach: es, detach: es, resize: es })[e] || rf)(t, e, s), (i[e] = void 0);
    }
    getDevicePixelRatio() {
      return window.devicePixelRatio;
    }
    getMaximumSize(t, e, i, s) {
      return fh(t, e, i, s);
    }
    isAttached(t) {
      const e = Gi(t);
      return !!(e && e.isConnected);
    }
  }
  function gf(n) {
    return !Nr() || (typeof OffscreenCanvas < 'u' && n instanceof OffscreenCanvas) ? tf : df;
  }
  class we {
    constructor() {
      L(this, 'x');
      L(this, 'y');
      L(this, 'active', !1);
      L(this, 'options');
      L(this, '$animations');
    }
    tooltipPosition(t) {
      const { x: e, y: i } = this.getProps(['x', 'y'], t);
      return { x: e, y: i };
    }
    hasValue() {
      return cn(this.x) && cn(this.y);
    }
    getProps(t, e) {
      const i = this.$animations;
      if (!e || !i) return this;
      const s = {};
      return (
        t.forEach((r) => {
          s[r] = i[r] && i[r].active() ? i[r]._to : this[r];
        }),
        s
      );
    }
  }
  L(we, 'defaults', {}), L(we, 'defaultRoutes');
  function pf(n, t) {
    const e = n.options.ticks,
      i = mf(n),
      s = Math.min(e.maxTicksLimit || i, i),
      r = e.major.enabled ? yf(t) : [],
      o = r.length,
      a = r[0],
      c = r[o - 1],
      l = [];
    if (o > s) return xf(t, l, r, o / s), l;
    const h = bf(r, t, s);
    if (o > 0) {
      let f, u;
      const d = o > 1 ? Math.round((c - a) / (o - 1)) : null;
      for (ti(t, l, h, it(d) ? 0 : a - d, a), f = 0, u = o - 1; f < u; f++)
        ti(t, l, h, r[f], r[f + 1]);
      return ti(t, l, h, c, it(d) ? t.length : c + d), l;
    }
    return ti(t, l, h), l;
  }
  function mf(n) {
    const t = n.options.offset,
      e = n._tickSize(),
      i = n._length / e + (t ? 0 : 1),
      s = n._maxLength / e;
    return Math.floor(Math.min(i, s));
  }
  function bf(n, t, e) {
    const i = _f(n),
      s = t.length / e;
    if (!i) return Math.max(s, 1);
    const r = ll(i);
    for (let o = 0, a = r.length - 1; o < a; o++) {
      const c = r[o];
      if (c > s) return c;
    }
    return Math.max(s, 1);
  }
  function yf(n) {
    const t = [];
    let e, i;
    for (e = 0, i = n.length; e < i; e++) n[e].major && t.push(e);
    return t;
  }
  function xf(n, t, e, i) {
    let s = 0,
      r = e[0],
      o;
    for (i = Math.ceil(i), o = 0; o < n.length; o++) o === r && (t.push(n[o]), s++, (r = e[s * i]));
  }
  function ti(n, t, e, i, s) {
    const r = et(i, 0),
      o = Math.min(et(s, n.length), n.length);
    let a = 0,
      c,
      l,
      h;
    for (e = Math.ceil(e), s && ((c = s - i), (e = c / Math.floor(c / e))), h = r; h < 0; )
      a++, (h = Math.round(r + a * e));
    for (l = Math.max(r, 0); l < o; l++)
      l === h && (t.push(n[l]), a++, (h = Math.round(r + a * e)));
  }
  function _f(n) {
    const t = n.length;
    let e, i;
    if (t < 2) return !1;
    for (i = n[0], e = 1; e < t; ++e) if (n[e] - n[e - 1] !== i) return !1;
    return i;
  }
  const vf = (n) => (n === 'left' ? 'right' : n === 'right' ? 'left' : n),
    ho = (n, t, e) => (t === 'top' || t === 'left' ? n[t] + e : n[t] - e),
    fo = (n, t) => Math.min(t || n, n);
  function uo(n, t) {
    const e = [],
      i = n.length / t,
      s = n.length;
    let r = 0;
    for (; r < s; r += i) e.push(n[Math.floor(r)]);
    return e;
  }
  function wf(n, t, e) {
    const i = n.ticks.length,
      s = Math.min(t, i - 1),
      r = n._startPixel,
      o = n._endPixel,
      a = 1e-6;
    let c = n.getPixelForTick(s),
      l;
    if (
      !(
        e &&
        (i === 1
          ? (l = Math.max(c - r, o - c))
          : t === 0
          ? (l = (n.getPixelForTick(1) - c) / 2)
          : (l = (c - n.getPixelForTick(s - 1)) / 2),
        (c += s < t ? l : -l),
        c < r - a || c > o + a)
      )
    )
      return c;
  }
  function kf(n, t) {
    J(n, (e) => {
      const i = e.gc,
        s = i.length / 2;
      let r;
      if (s > t) {
        for (r = 0; r < s; ++r) delete e.data[i[r]];
        i.splice(0, s);
      }
    });
  }
  function vn(n) {
    return n.drawTicks ? n.tickLength : 0;
  }
  function go(n, t) {
    if (!n.display) return 0;
    const e = Et(n.font, t),
      i = Lt(n.padding);
    return (lt(n.text) ? n.text.length : 1) * e.lineHeight + i.height;
  }
  function Sf(n, t) {
    return _e(n, { scale: t, type: 'scale' });
  }
  function Cf(n, t, e) {
    return _e(n, { tick: e, index: t, type: 'tick' });
  }
  function Ef(n, t, e) {
    let i = _r(n);
    return ((e && t !== 'right') || (!e && t === 'right')) && (i = vf(i)), i;
  }
  function Mf(n, t, e, i) {
    const { top: s, left: r, bottom: o, right: a, chart: c } = n,
      { chartArea: l, scales: h } = c;
    let f = 0,
      u,
      d,
      p;
    const m = o - s,
      b = a - r;
    if (n.isHorizontal()) {
      if (((d = ln(i, r, a)), X(e))) {
        const y = Object.keys(e)[0],
          _ = e[y];
        p = h[y].getPixelForValue(_) + m - t;
      } else e === 'center' ? (p = (l.bottom + l.top) / 2 + m - t) : (p = ho(n, e, t));
      u = a - r;
    } else {
      if (X(e)) {
        const y = Object.keys(e)[0],
          _ = e[y];
        d = h[y].getPixelForValue(_) - b + t;
      } else e === 'center' ? (d = (l.left + l.right) / 2 - b + t) : (d = ho(n, e, t));
      (p = ln(i, o, s)), (f = e === 'left' ? -Dt : Dt);
    }
    return { titleX: d, titleY: p, maxWidth: u, rotation: f };
  }
  class Re extends we {
    constructor(t) {
      super(),
        (this.id = t.id),
        (this.type = t.type),
        (this.options = void 0),
        (this.ctx = t.ctx),
        (this.chart = t.chart),
        (this.top = void 0),
        (this.bottom = void 0),
        (this.left = void 0),
        (this.right = void 0),
        (this.width = void 0),
        (this.height = void 0),
        (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
        (this.maxWidth = void 0),
        (this.maxHeight = void 0),
        (this.paddingTop = void 0),
        (this.paddingBottom = void 0),
        (this.paddingLeft = void 0),
        (this.paddingRight = void 0),
        (this.axis = void 0),
        (this.labelRotation = void 0),
        (this.min = void 0),
        (this.max = void 0),
        (this._range = void 0),
        (this.ticks = []),
        (this._gridLineItems = null),
        (this._labelItems = null),
        (this._labelSizes = null),
        (this._length = 0),
        (this._maxLength = 0),
        (this._longestTextCache = {}),
        (this._startPixel = void 0),
        (this._endPixel = void 0),
        (this._reversePixels = !1),
        (this._userMax = void 0),
        (this._userMin = void 0),
        (this._suggestedMax = void 0),
        (this._suggestedMin = void 0),
        (this._ticksLength = 0),
        (this._borderValue = 0),
        (this._cache = {}),
        (this._dataLimitsCached = !1),
        (this.$context = void 0);
    }
    init(t) {
      (this.options = t.setContext(this.getContext())),
        (this.axis = t.axis),
        (this._userMin = this.parse(t.min)),
        (this._userMax = this.parse(t.max)),
        (this._suggestedMin = this.parse(t.suggestedMin)),
        (this._suggestedMax = this.parse(t.suggestedMax));
    }
    parse(t, e) {
      return t;
    }
    getUserBounds() {
      let { _userMin: t, _userMax: e, _suggestedMin: i, _suggestedMax: s } = this;
      return (
        (t = Ft(t, Number.POSITIVE_INFINITY)),
        (e = Ft(e, Number.NEGATIVE_INFINITY)),
        (i = Ft(i, Number.POSITIVE_INFINITY)),
        (s = Ft(s, Number.NEGATIVE_INFINITY)),
        { min: Ft(t, i), max: Ft(e, s), minDefined: wt(t), maxDefined: wt(e) }
      );
    }
    getMinMax(t) {
      let { min: e, max: i, minDefined: s, maxDefined: r } = this.getUserBounds(),
        o;
      if (s && r) return { min: e, max: i };
      const a = this.getMatchingVisibleMetas();
      for (let c = 0, l = a.length; c < l; ++c)
        (o = a[c].controller.getMinMax(this, t)),
          s || (e = Math.min(e, o.min)),
          r || (i = Math.max(i, o.max));
      return (
        (e = r && e > i ? i : e),
        (i = s && e > i ? e : i),
        { min: Ft(e, Ft(i, e)), max: Ft(i, Ft(e, i)) }
      );
    }
    getPadding() {
      return {
        left: this.paddingLeft || 0,
        top: this.paddingTop || 0,
        right: this.paddingRight || 0,
        bottom: this.paddingBottom || 0,
      };
    }
    getTicks() {
      return this.ticks;
    }
    getLabels() {
      const t = this.chart.data;
      return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
    }
    getLabelItems(t = this.chart.chartArea) {
      return this._labelItems || (this._labelItems = this._computeLabelItems(t));
    }
    beforeLayout() {
      (this._cache = {}), (this._dataLimitsCached = !1);
    }
    beforeUpdate() {
      ht(this.options.beforeUpdate, [this]);
    }
    update(t, e, i) {
      const { beginAtZero: s, grace: r, ticks: o } = this.options,
        a = o.sampleSize;
      this.beforeUpdate(),
        (this.maxWidth = t),
        (this.maxHeight = e),
        (this._margins = i = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
        (this.ticks = null),
        (this._labelSizes = null),
        (this._gridLineItems = null),
        (this._labelItems = null),
        this.beforeSetDimensions(),
        this.setDimensions(),
        this.afterSetDimensions(),
        (this._maxLength = this.isHorizontal()
          ? this.width + i.left + i.right
          : this.height + i.top + i.bottom),
        this._dataLimitsCached ||
          (this.beforeDataLimits(),
          this.determineDataLimits(),
          this.afterDataLimits(),
          (this._range = Wl(this, r, s)),
          (this._dataLimitsCached = !0)),
        this.beforeBuildTicks(),
        (this.ticks = this.buildTicks() || []),
        this.afterBuildTicks();
      const c = a < this.ticks.length;
      this._convertTicksToLabels(c ? uo(this.ticks, a) : this.ticks),
        this.configure(),
        this.beforeCalculateLabelRotation(),
        this.calculateLabelRotation(),
        this.afterCalculateLabelRotation(),
        o.display &&
          (o.autoSkip || o.source === 'auto') &&
          ((this.ticks = pf(this, this.ticks)), (this._labelSizes = null), this.afterAutoSkip()),
        c && this._convertTicksToLabels(this.ticks),
        this.beforeFit(),
        this.fit(),
        this.afterFit(),
        this.afterUpdate();
    }
    configure() {
      let t = this.options.reverse,
        e,
        i;
      this.isHorizontal()
        ? ((e = this.left), (i = this.right))
        : ((e = this.top), (i = this.bottom), (t = !t)),
        (this._startPixel = e),
        (this._endPixel = i),
        (this._reversePixels = t),
        (this._length = i - e),
        (this._alignToPixels = this.options.alignToPixels);
    }
    afterUpdate() {
      ht(this.options.afterUpdate, [this]);
    }
    beforeSetDimensions() {
      ht(this.options.beforeSetDimensions, [this]);
    }
    setDimensions() {
      this.isHorizontal()
        ? ((this.width = this.maxWidth), (this.left = 0), (this.right = this.width))
        : ((this.height = this.maxHeight), (this.top = 0), (this.bottom = this.height)),
        (this.paddingLeft = 0),
        (this.paddingTop = 0),
        (this.paddingRight = 0),
        (this.paddingBottom = 0);
    }
    afterSetDimensions() {
      ht(this.options.afterSetDimensions, [this]);
    }
    _callHooks(t) {
      this.chart.notifyPlugins(t, this.getContext()), ht(this.options[t], [this]);
    }
    beforeDataLimits() {
      this._callHooks('beforeDataLimits');
    }
    determineDataLimits() {}
    afterDataLimits() {
      this._callHooks('afterDataLimits');
    }
    beforeBuildTicks() {
      this._callHooks('beforeBuildTicks');
    }
    buildTicks() {
      return [];
    }
    afterBuildTicks() {
      this._callHooks('afterBuildTicks');
    }
    beforeTickToLabelConversion() {
      ht(this.options.beforeTickToLabelConversion, [this]);
    }
    generateTickLabels(t) {
      const e = this.options.ticks;
      let i, s, r;
      for (i = 0, s = t.length; i < s; i++)
        (r = t[i]), (r.label = ht(e.callback, [r.value, i, t], this));
    }
    afterTickToLabelConversion() {
      ht(this.options.afterTickToLabelConversion, [this]);
    }
    beforeCalculateLabelRotation() {
      ht(this.options.beforeCalculateLabelRotation, [this]);
    }
    calculateLabelRotation() {
      const t = this.options,
        e = t.ticks,
        i = fo(this.ticks.length, t.ticks.maxTicksLimit),
        s = e.minRotation || 0,
        r = e.maxRotation;
      let o = s,
        a,
        c,
        l;
      if (!this._isVisible() || !e.display || s >= r || i <= 1 || !this.isHorizontal()) {
        this.labelRotation = s;
        return;
      }
      const h = this._getLabelSizes(),
        f = h.widest.width,
        u = h.highest.height,
        d = Vt(this.chart.width - f, 0, this.maxWidth);
      (a = t.offset ? this.maxWidth / i : d / (i - 1)),
        f + 6 > a &&
          ((a = d / (i - (t.offset ? 0.5 : 1))),
          (c = this.maxHeight - vn(t.grid) - e.padding - go(t.title, this.chart.options.font)),
          (l = Math.sqrt(f * f + u * u)),
          (o = Li(
            Math.min(
              Math.asin(Vt((h.highest.height + 6) / a, -1, 1)),
              Math.asin(Vt(c / l, -1, 1)) - Math.asin(Vt(u / l, -1, 1))
            )
          )),
          (o = Math.max(s, Math.min(r, o)))),
        (this.labelRotation = o);
    }
    afterCalculateLabelRotation() {
      ht(this.options.afterCalculateLabelRotation, [this]);
    }
    afterAutoSkip() {}
    beforeFit() {
      ht(this.options.beforeFit, [this]);
    }
    fit() {
      const t = { width: 0, height: 0 },
        {
          chart: e,
          options: { ticks: i, title: s, grid: r },
        } = this,
        o = this._isVisible(),
        a = this.isHorizontal();
      if (o) {
        const c = go(s, e.options.font);
        if (
          (a
            ? ((t.width = this.maxWidth), (t.height = vn(r) + c))
            : ((t.height = this.maxHeight), (t.width = vn(r) + c)),
          i.display && this.ticks.length)
        ) {
          const { first: l, last: h, widest: f, highest: u } = this._getLabelSizes(),
            d = i.padding * 2,
            p = xe(this.labelRotation),
            m = Math.cos(p),
            b = Math.sin(p);
          if (a) {
            const y = i.mirror ? 0 : b * f.width + m * u.height;
            t.height = Math.min(this.maxHeight, t.height + y + d);
          } else {
            const y = i.mirror ? 0 : m * f.width + b * u.height;
            t.width = Math.min(this.maxWidth, t.width + y + d);
          }
          this._calculatePadding(l, h, b, m);
        }
      }
      this._handleMargins(),
        a
          ? ((this.width = this._length = e.width - this._margins.left - this._margins.right),
            (this.height = t.height))
          : ((this.width = t.width),
            (this.height = this._length = e.height - this._margins.top - this._margins.bottom));
    }
    _calculatePadding(t, e, i, s) {
      const {
          ticks: { align: r, padding: o },
          position: a,
        } = this.options,
        c = this.labelRotation !== 0,
        l = a !== 'top' && this.axis === 'x';
      if (this.isHorizontal()) {
        const h = this.getPixelForTick(0) - this.left,
          f = this.right - this.getPixelForTick(this.ticks.length - 1);
        let u = 0,
          d = 0;
        c
          ? l
            ? ((u = s * t.width), (d = i * e.height))
            : ((u = i * t.height), (d = s * e.width))
          : r === 'start'
          ? (d = e.width)
          : r === 'end'
          ? (u = t.width)
          : r !== 'inner' && ((u = t.width / 2), (d = e.width / 2)),
          (this.paddingLeft = Math.max(((u - h + o) * this.width) / (this.width - h), 0)),
          (this.paddingRight = Math.max(((d - f + o) * this.width) / (this.width - f), 0));
      } else {
        let h = e.height / 2,
          f = t.height / 2;
        r === 'start' ? ((h = 0), (f = t.height)) : r === 'end' && ((h = e.height), (f = 0)),
          (this.paddingTop = h + o),
          (this.paddingBottom = f + o);
      }
    }
    _handleMargins() {
      this._margins &&
        ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
        (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
        (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
        (this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom)));
    }
    afterFit() {
      ht(this.options.afterFit, [this]);
    }
    isHorizontal() {
      const { axis: t, position: e } = this.options;
      return e === 'top' || e === 'bottom' || t === 'x';
    }
    isFullSize() {
      return this.options.fullSize;
    }
    _convertTicksToLabels(t) {
      this.beforeTickToLabelConversion(), this.generateTickLabels(t);
      let e, i;
      for (e = 0, i = t.length; e < i; e++) it(t[e].label) && (t.splice(e, 1), i--, e--);
      this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
      let t = this._labelSizes;
      if (!t) {
        const e = this.options.ticks.sampleSize;
        let i = this.ticks;
        e < i.length && (i = uo(i, e)),
          (this._labelSizes = t =
            this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit));
      }
      return t;
    }
    _computeLabelSizes(t, e, i) {
      const { ctx: s, _longestTextCache: r } = this,
        o = [],
        a = [],
        c = Math.floor(e / fo(e, i));
      let l = 0,
        h = 0,
        f,
        u,
        d,
        p,
        m,
        b,
        y,
        _,
        S,
        M,
        w;
      for (f = 0; f < e; f += c) {
        if (
          ((p = t[f].label),
          (m = this._resolveTickFontOptions(f)),
          (s.font = b = m.string),
          (y = r[b] = r[b] || { data: {}, gc: [] }),
          (_ = m.lineHeight),
          (S = M = 0),
          !it(p) && !lt(p))
        )
          (S = Hn(s, y.data, y.gc, S, p)), (M = _);
        else if (lt(p))
          for (u = 0, d = p.length; u < d; ++u)
            (w = p[u]), !it(w) && !lt(w) && ((S = Hn(s, y.data, y.gc, S, w)), (M += _));
        o.push(S), a.push(M), (l = Math.max(S, l)), (h = Math.max(M, h));
      }
      kf(r, e);
      const P = o.indexOf(l),
        k = a.indexOf(h),
        T = (B) => ({ width: o[B] || 0, height: a[B] || 0 });
      return { first: T(0), last: T(e - 1), widest: T(P), highest: T(k), widths: o, heights: a };
    }
    getLabelForValue(t) {
      return t;
    }
    getPixelForValue(t, e) {
      return NaN;
    }
    getValueForPixel(t) {}
    getPixelForTick(t) {
      const e = this.ticks;
      return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
    }
    getPixelForDecimal(t) {
      this._reversePixels && (t = 1 - t);
      const e = this._startPixel + t * this._length;
      return dl(this._alignToPixels ? Oe(this.chart, e, 0) : e);
    }
    getDecimalForPixel(t) {
      const e = (t - this._startPixel) / this._length;
      return this._reversePixels ? 1 - e : e;
    }
    getBasePixel() {
      return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
      const { min: t, max: e } = this;
      return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
    }
    getContext(t) {
      const e = this.ticks || [];
      if (t >= 0 && t < e.length) {
        const i = e[t];
        return i.$context || (i.$context = Cf(this.getContext(), t, i));
      }
      return this.$context || (this.$context = Sf(this.chart.getContext(), this));
    }
    _tickSize() {
      const t = this.options.ticks,
        e = xe(this.labelRotation),
        i = Math.abs(Math.cos(e)),
        s = Math.abs(Math.sin(e)),
        r = this._getLabelSizes(),
        o = t.autoSkipPadding || 0,
        a = r ? r.widest.width + o : 0,
        c = r ? r.highest.height + o : 0;
      return this.isHorizontal() ? (c * i > a * s ? a / i : c / s) : c * s < a * i ? c / i : a / s;
    }
    _isVisible() {
      const t = this.options.display;
      return t !== 'auto' ? !!t : this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(t) {
      const e = this.axis,
        i = this.chart,
        s = this.options,
        { grid: r, position: o, border: a } = s,
        c = r.offset,
        l = this.isHorizontal(),
        f = this.ticks.length + (c ? 1 : 0),
        u = vn(r),
        d = [],
        p = a.setContext(this.getContext()),
        m = p.display ? p.width : 0,
        b = m / 2,
        y = function (at) {
          return Oe(i, at, m);
        };
      let _, S, M, w, P, k, T, B, st, rt, Y, tt;
      if (o === 'top')
        (_ = y(this.bottom)),
          (k = this.bottom - u),
          (B = _ - b),
          (rt = y(t.top) + b),
          (tt = t.bottom);
      else if (o === 'bottom')
        (_ = y(this.top)), (rt = t.top), (tt = y(t.bottom) - b), (k = _ + b), (B = this.top + u);
      else if (o === 'left')
        (_ = y(this.right)), (P = this.right - u), (T = _ - b), (st = y(t.left) + b), (Y = t.right);
      else if (o === 'right')
        (_ = y(this.left)), (st = t.left), (Y = y(t.right) - b), (P = _ + b), (T = this.left + u);
      else if (e === 'x') {
        if (o === 'center') _ = y((t.top + t.bottom) / 2 + 0.5);
        else if (X(o)) {
          const at = Object.keys(o)[0],
            xt = o[at];
          _ = y(this.chart.scales[at].getPixelForValue(xt));
        }
        (rt = t.top), (tt = t.bottom), (k = _ + b), (B = k + u);
      } else if (e === 'y') {
        if (o === 'center') _ = y((t.left + t.right) / 2);
        else if (X(o)) {
          const at = Object.keys(o)[0],
            xt = o[at];
          _ = y(this.chart.scales[at].getPixelForValue(xt));
        }
        (P = _ - b), (T = P - u), (st = t.left), (Y = t.right);
      }
      const ot = et(s.ticks.maxTicksLimit, f),
        j = Math.max(1, Math.ceil(f / ot));
      for (S = 0; S < f; S += j) {
        const at = this.getContext(S),
          xt = r.setContext(at),
          St = a.setContext(at),
          Xt = xt.lineWidth,
          $t = xt.color,
          Gt = St.dash || [],
          D = St.dashOffset,
          O = xt.tickWidth,
          A = xt.tickColor,
          z = xt.tickBorderDash || [],
          x = xt.tickBorderDashOffset;
        (M = wf(this, S, c)),
          M !== void 0 &&
            ((w = Oe(i, M, Xt)),
            l ? (P = T = st = Y = w) : (k = B = rt = tt = w),
            d.push({
              tx1: P,
              ty1: k,
              tx2: T,
              ty2: B,
              x1: st,
              y1: rt,
              x2: Y,
              y2: tt,
              width: Xt,
              color: $t,
              borderDash: Gt,
              borderDashOffset: D,
              tickWidth: O,
              tickColor: A,
              tickBorderDash: z,
              tickBorderDashOffset: x,
            }));
      }
      return (this._ticksLength = f), (this._borderValue = _), d;
    }
    _computeLabelItems(t) {
      const e = this.axis,
        i = this.options,
        { position: s, ticks: r } = i,
        o = this.isHorizontal(),
        a = this.ticks,
        { align: c, crossAlign: l, padding: h, mirror: f } = r,
        u = vn(i.grid),
        d = u + h,
        p = f ? -h : d,
        m = -xe(this.labelRotation),
        b = [];
      let y,
        _,
        S,
        M,
        w,
        P,
        k,
        T,
        B,
        st,
        rt,
        Y,
        tt = 'middle';
      if (s === 'top') (P = this.bottom - p), (k = this._getXAxisLabelAlignment());
      else if (s === 'bottom') (P = this.top + p), (k = this._getXAxisLabelAlignment());
      else if (s === 'left') {
        const j = this._getYAxisLabelAlignment(u);
        (k = j.textAlign), (w = j.x);
      } else if (s === 'right') {
        const j = this._getYAxisLabelAlignment(u);
        (k = j.textAlign), (w = j.x);
      } else if (e === 'x') {
        if (s === 'center') P = (t.top + t.bottom) / 2 + d;
        else if (X(s)) {
          const j = Object.keys(s)[0],
            at = s[j];
          P = this.chart.scales[j].getPixelForValue(at) + d;
        }
        k = this._getXAxisLabelAlignment();
      } else if (e === 'y') {
        if (s === 'center') w = (t.left + t.right) / 2 - d;
        else if (X(s)) {
          const j = Object.keys(s)[0],
            at = s[j];
          w = this.chart.scales[j].getPixelForValue(at);
        }
        k = this._getYAxisLabelAlignment(u).textAlign;
      }
      e === 'y' && (c === 'start' ? (tt = 'top') : c === 'end' && (tt = 'bottom'));
      const ot = this._getLabelSizes();
      for (y = 0, _ = a.length; y < _; ++y) {
        (S = a[y]), (M = S.label);
        const j = r.setContext(this.getContext(y));
        (T = this.getPixelForTick(y) + r.labelOffset),
          (B = this._resolveTickFontOptions(y)),
          (st = B.lineHeight),
          (rt = lt(M) ? M.length : 1);
        const at = rt / 2,
          xt = j.color,
          St = j.textStrokeColor,
          Xt = j.textStrokeWidth;
        let $t = k;
        o
          ? ((w = T),
            k === 'inner' &&
              (y === _ - 1
                ? ($t = this.options.reverse ? 'left' : 'right')
                : y === 0
                ? ($t = this.options.reverse ? 'right' : 'left')
                : ($t = 'center')),
            s === 'top'
              ? l === 'near' || m !== 0
                ? (Y = -rt * st + st / 2)
                : l === 'center'
                ? (Y = -ot.highest.height / 2 - at * st + st)
                : (Y = -ot.highest.height + st / 2)
              : l === 'near' || m !== 0
              ? (Y = st / 2)
              : l === 'center'
              ? (Y = ot.highest.height / 2 - at * st)
              : (Y = ot.highest.height - rt * st),
            f && (Y *= -1),
            m !== 0 && !j.showLabelBackdrop && (w += (st / 2) * Math.sin(m)))
          : ((P = T), (Y = ((1 - rt) * st) / 2));
        let Gt;
        if (j.showLabelBackdrop) {
          const D = Lt(j.backdropPadding),
            O = ot.heights[y],
            A = ot.widths[y];
          let z = Y - D.top,
            x = 0 - D.left;
          switch (tt) {
            case 'middle':
              z -= O / 2;
              break;
            case 'bottom':
              z -= O;
              break;
          }
          switch (k) {
            case 'center':
              x -= A / 2;
              break;
            case 'right':
              x -= A;
              break;
          }
          Gt = {
            left: x,
            top: z,
            width: A + D.width,
            height: O + D.height,
            color: j.backdropColor,
          };
        }
        b.push({
          label: M,
          font: B,
          textOffset: Y,
          options: {
            rotation: m,
            color: xt,
            strokeColor: St,
            strokeWidth: Xt,
            textAlign: $t,
            textBaseline: tt,
            translation: [w, P],
            backdrop: Gt,
          },
        });
      }
      return b;
    }
    _getXAxisLabelAlignment() {
      const { position: t, ticks: e } = this.options;
      if (-xe(this.labelRotation)) return t === 'top' ? 'left' : 'right';
      let s = 'center';
      return (
        e.align === 'start'
          ? (s = 'left')
          : e.align === 'end'
          ? (s = 'right')
          : e.align === 'inner' && (s = 'inner'),
        s
      );
    }
    _getYAxisLabelAlignment(t) {
      const {
          position: e,
          ticks: { crossAlign: i, mirror: s, padding: r },
        } = this.options,
        o = this._getLabelSizes(),
        a = t + r,
        c = o.widest.width;
      let l, h;
      return (
        e === 'left'
          ? s
            ? ((h = this.right + r),
              i === 'near'
                ? (l = 'left')
                : i === 'center'
                ? ((l = 'center'), (h += c / 2))
                : ((l = 'right'), (h += c)))
            : ((h = this.right - a),
              i === 'near'
                ? (l = 'right')
                : i === 'center'
                ? ((l = 'center'), (h -= c / 2))
                : ((l = 'left'), (h = this.left)))
          : e === 'right'
          ? s
            ? ((h = this.left + r),
              i === 'near'
                ? (l = 'right')
                : i === 'center'
                ? ((l = 'center'), (h -= c / 2))
                : ((l = 'left'), (h -= c)))
            : ((h = this.left + a),
              i === 'near'
                ? (l = 'left')
                : i === 'center'
                ? ((l = 'center'), (h += c / 2))
                : ((l = 'right'), (h = this.right)))
          : (l = 'right'),
        { textAlign: l, x: h }
      );
    }
    _computeLabelArea() {
      if (this.options.ticks.mirror) return;
      const t = this.chart,
        e = this.options.position;
      if (e === 'left' || e === 'right')
        return { top: 0, left: this.left, bottom: t.height, right: this.right };
      if (e === 'top' || e === 'bottom')
        return { top: this.top, left: 0, bottom: this.bottom, right: t.width };
    }
    drawBackground() {
      const {
        ctx: t,
        options: { backgroundColor: e },
        left: i,
        top: s,
        width: r,
        height: o,
      } = this;
      e && (t.save(), (t.fillStyle = e), t.fillRect(i, s, r, o), t.restore());
    }
    getLineWidthForValue(t) {
      const e = this.options.grid;
      if (!this._isVisible() || !e.display) return 0;
      const s = this.ticks.findIndex((r) => r.value === t);
      return s >= 0 ? e.setContext(this.getContext(s)).lineWidth : 0;
    }
    drawGrid(t) {
      const e = this.options.grid,
        i = this.ctx,
        s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
      let r, o;
      const a = (c, l, h) => {
        !h.width ||
          !h.color ||
          (i.save(),
          (i.lineWidth = h.width),
          (i.strokeStyle = h.color),
          i.setLineDash(h.borderDash || []),
          (i.lineDashOffset = h.borderDashOffset),
          i.beginPath(),
          i.moveTo(c.x, c.y),
          i.lineTo(l.x, l.y),
          i.stroke(),
          i.restore());
      };
      if (e.display)
        for (r = 0, o = s.length; r < o; ++r) {
          const c = s[r];
          e.drawOnChartArea && a({ x: c.x1, y: c.y1 }, { x: c.x2, y: c.y2 }, c),
            e.drawTicks &&
              a(
                { x: c.tx1, y: c.ty1 },
                { x: c.tx2, y: c.ty2 },
                {
                  color: c.tickColor,
                  width: c.tickWidth,
                  borderDash: c.tickBorderDash,
                  borderDashOffset: c.tickBorderDashOffset,
                }
              );
        }
    }
    drawBorder() {
      const {
          chart: t,
          ctx: e,
          options: { border: i, grid: s },
        } = this,
        r = i.setContext(this.getContext()),
        o = i.display ? r.width : 0;
      if (!o) return;
      const a = s.setContext(this.getContext(0)).lineWidth,
        c = this._borderValue;
      let l, h, f, u;
      this.isHorizontal()
        ? ((l = Oe(t, this.left, o) - o / 2), (h = Oe(t, this.right, a) + a / 2), (f = u = c))
        : ((f = Oe(t, this.top, o) - o / 2), (u = Oe(t, this.bottom, a) + a / 2), (l = h = c)),
        e.save(),
        (e.lineWidth = r.width),
        (e.strokeStyle = r.color),
        e.beginPath(),
        e.moveTo(l, f),
        e.lineTo(h, u),
        e.stroke(),
        e.restore();
    }
    drawLabels(t) {
      if (!this.options.ticks.display) return;
      const i = this.ctx,
        s = this._computeLabelArea();
      s && Mr(i, s);
      const r = this.getLabelItems(t);
      for (const o of r) {
        const a = o.options,
          c = o.font,
          l = o.label,
          h = o.textOffset;
        un(i, l, 0, h, c, a);
      }
      s && Or(i);
    }
    drawTitle() {
      const {
        ctx: t,
        options: { position: e, title: i, reverse: s },
      } = this;
      if (!i.display) return;
      const r = Et(i.font),
        o = Lt(i.padding),
        a = i.align;
      let c = r.lineHeight / 2;
      e === 'bottom' || e === 'center' || X(e)
        ? ((c += o.bottom), lt(i.text) && (c += r.lineHeight * (i.text.length - 1)))
        : (c += o.top);
      const { titleX: l, titleY: h, maxWidth: f, rotation: u } = Mf(this, c, e, a);
      un(t, i.text, 0, 0, r, {
        color: i.color,
        maxWidth: f,
        rotation: u,
        textAlign: Ef(a, e, s),
        textBaseline: 'middle',
        translation: [l, h],
      });
    }
    draw(t) {
      this._isVisible() &&
        (this.drawBackground(),
        this.drawGrid(t),
        this.drawBorder(),
        this.drawTitle(),
        this.drawLabels(t));
    }
    _layers() {
      const t = this.options,
        e = (t.ticks && t.ticks.z) || 0,
        i = et(t.grid && t.grid.z, -1),
        s = et(t.border && t.border.z, 0);
      return !this._isVisible() || this.draw !== Re.prototype.draw
        ? [
            {
              z: e,
              draw: (r) => {
                this.draw(r);
              },
            },
          ]
        : [
            {
              z: i,
              draw: (r) => {
                this.drawBackground(), this.drawGrid(r), this.drawTitle();
              },
            },
            {
              z: s,
              draw: () => {
                this.drawBorder();
              },
            },
            {
              z: e,
              draw: (r) => {
                this.drawLabels(r);
              },
            },
          ];
    }
    getMatchingVisibleMetas(t) {
      const e = this.chart.getSortedVisibleDatasetMetas(),
        i = this.axis + 'AxisID',
        s = [];
      let r, o;
      for (r = 0, o = e.length; r < o; ++r) {
        const a = e[r];
        a[i] === this.id && (!t || a.type === t) && s.push(a);
      }
      return s;
    }
    _resolveTickFontOptions(t) {
      const e = this.options.ticks.setContext(this.getContext(t));
      return Et(e.font);
    }
    _maxDigits() {
      const t = this._resolveTickFontOptions(0).lineHeight;
      return (this.isHorizontal() ? this.width : this.height) / t;
    }
  }
  class ei {
    constructor(t, e, i) {
      (this.type = t), (this.scope = e), (this.override = i), (this.items = Object.create(null));
    }
    isForType(t) {
      return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
    }
    register(t) {
      const e = Object.getPrototypeOf(t);
      let i;
      Pf(e) && (i = this.register(e));
      const s = this.items,
        r = t.id,
        o = this.scope + '.' + r;
      if (!r) throw new Error('class does not have id: ' + t);
      return (
        r in s || ((s[r] = t), Of(t, o, i), this.override && ft.override(t.id, t.overrides)), o
      );
    }
    get(t) {
      return this.items[t];
    }
    unregister(t) {
      const e = this.items,
        i = t.id,
        s = this.scope;
      i in e && delete e[i], s && i in ft[s] && (delete ft[s][i], this.override && delete Me[i]);
    }
  }
  function Of(n, t, e) {
    const i = rn(Object.create(null), [e ? ft.get(e) : {}, ft.get(t), n.defaults]);
    ft.set(t, i),
      n.defaultRoutes && Df(t, n.defaultRoutes),
      n.descriptors && ft.describe(t, n.descriptors);
  }
  function Df(n, t) {
    Object.keys(t).forEach((e) => {
      const i = e.split('.'),
        s = i.pop(),
        r = [n].concat(i).join('.'),
        o = t[e].split('.'),
        a = o.pop(),
        c = o.join('.');
      ft.route(r, s, c, a);
    });
  }
  function Pf(n) {
    return 'id' in n && 'defaults' in n;
  }
  class Af {
    constructor() {
      (this.controllers = new ei(pn, 'datasets', !0)),
        (this.elements = new ei(we, 'elements')),
        (this.plugins = new ei(Object, 'plugins')),
        (this.scales = new ei(Re, 'scales')),
        (this._typedRegistries = [this.controllers, this.scales, this.elements]);
    }
    add(...t) {
      this._each('register', t);
    }
    remove(...t) {
      this._each('unregister', t);
    }
    addControllers(...t) {
      this._each('register', t, this.controllers);
    }
    addElements(...t) {
      this._each('register', t, this.elements);
    }
    addPlugins(...t) {
      this._each('register', t, this.plugins);
    }
    addScales(...t) {
      this._each('register', t, this.scales);
    }
    getController(t) {
      return this._get(t, this.controllers, 'controller');
    }
    getElement(t) {
      return this._get(t, this.elements, 'element');
    }
    getPlugin(t) {
      return this._get(t, this.plugins, 'plugin');
    }
    getScale(t) {
      return this._get(t, this.scales, 'scale');
    }
    removeControllers(...t) {
      this._each('unregister', t, this.controllers);
    }
    removeElements(...t) {
      this._each('unregister', t, this.elements);
    }
    removePlugins(...t) {
      this._each('unregister', t, this.plugins);
    }
    removeScales(...t) {
      this._each('unregister', t, this.scales);
    }
    _each(t, e, i) {
      [...e].forEach((s) => {
        const r = i || this._getRegistryForType(s);
        i || r.isForType(s) || (r === this.plugins && s.id)
          ? this._exec(t, r, s)
          : J(s, (o) => {
              const a = i || this._getRegistryForType(o);
              this._exec(t, a, o);
            });
      });
    }
    _exec(t, e, i) {
      const s = Fi(t);
      ht(i['before' + s], [], i), e[t](i), ht(i['after' + s], [], i);
    }
    _getRegistryForType(t) {
      for (let e = 0; e < this._typedRegistries.length; e++) {
        const i = this._typedRegistries[e];
        if (i.isForType(t)) return i;
      }
      return this.plugins;
    }
    _get(t, e, i) {
      const s = e.get(t);
      if (s === void 0) throw new Error('"' + t + '" is not a registered ' + i + '.');
      return s;
    }
  }
  var Zt = new Af();
  class Tf {
    constructor() {
      this._init = [];
    }
    notify(t, e, i, s) {
      e === 'beforeInit' &&
        ((this._init = this._createDescriptors(t, !0)), this._notify(this._init, t, 'install'));
      const r = s ? this._descriptors(t).filter(s) : this._descriptors(t),
        o = this._notify(r, t, e, i);
      return (
        e === 'afterDestroy' &&
          (this._notify(r, t, 'stop'), this._notify(this._init, t, 'uninstall')),
        o
      );
    }
    _notify(t, e, i, s) {
      s = s || {};
      for (const r of t) {
        const o = r.plugin,
          a = o[i],
          c = [e, s, r.options];
        if (ht(a, c, o) === !1 && s.cancelable) return !1;
      }
      return !0;
    }
    invalidate() {
      it(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
    }
    _descriptors(t) {
      if (this._cache) return this._cache;
      const e = (this._cache = this._createDescriptors(t));
      return this._notifyStateChanges(t), e;
    }
    _createDescriptors(t, e) {
      const i = t && t.config,
        s = et(i.options && i.options.plugins, {}),
        r = Rf(i);
      return s === !1 && !e ? [] : Lf(t, r, s, e);
    }
    _notifyStateChanges(t) {
      const e = this._oldCache || [],
        i = this._cache,
        s = (r, o) => r.filter((a) => !o.some((c) => a.plugin.id === c.plugin.id));
      this._notify(s(e, i), t, 'stop'), this._notify(s(i, e), t, 'start');
    }
  }
  function Rf(n) {
    const t = {},
      e = [],
      i = Object.keys(Zt.plugins.items);
    for (let r = 0; r < i.length; r++) e.push(Zt.getPlugin(i[r]));
    const s = n.plugins || [];
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      e.indexOf(o) === -1 && (e.push(o), (t[o.id] = !0));
    }
    return { plugins: e, localIds: t };
  }
  function Ff(n, t) {
    return !t && n === !1 ? null : n === !0 ? {} : n;
  }
  function Lf(n, { plugins: t, localIds: e }, i, s) {
    const r = [],
      o = n.getContext();
    for (const a of t) {
      const c = a.id,
        l = Ff(i[c], s);
      l !== null && r.push({ plugin: a, options: If(n.config, { plugin: a, local: e[c] }, l, o) });
    }
    return r;
  }
  function If(n, { plugin: t, local: e }, i, s) {
    const r = n.pluginScopeKeys(t),
      o = n.getOptionScopes(i, r);
    return (
      e && t.defaults && o.push(t.defaults),
      n.createResolver(o, s, [''], { scriptable: !1, indexable: !1, allKeys: !0 })
    );
  }
  function ns(n, t) {
    const e = ft.datasets[n] || {};
    return ((t.datasets || {})[n] || {}).indexAxis || t.indexAxis || e.indexAxis || 'x';
  }
  function Nf(n, t) {
    let e = n;
    return n === '_index_' ? (e = t) : n === '_value_' && (e = t === 'x' ? 'y' : 'x'), e;
  }
  function zf(n, t) {
    return n === t ? '_index_' : '_value_';
  }
  function po(n) {
    if (n === 'x' || n === 'y' || n === 'r') return n;
  }
  function Bf(n) {
    if (n === 'top' || n === 'bottom') return 'x';
    if (n === 'left' || n === 'right') return 'y';
  }
  function is(n, ...t) {
    if (po(n)) return n;
    for (const e of t) {
      const i = e.axis || Bf(e.position) || (n.length > 1 && po(n[0].toLowerCase()));
      if (i) return i;
    }
    throw new Error(
      `Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`
    );
  }
  function mo(n, t, e) {
    if (e[t + 'AxisID'] === n) return { axis: t };
  }
  function jf(n, t) {
    if (t.data && t.data.datasets) {
      const e = t.data.datasets.filter((i) => i.xAxisID === n || i.yAxisID === n);
      if (e.length) return mo(n, 'x', e[0]) || mo(n, 'y', e[0]);
    }
    return {};
  }
  function Vf(n, t) {
    const e = Me[n.type] || { scales: {} },
      i = t.scales || {},
      s = ns(n.type, t),
      r = Object.create(null);
    return (
      Object.keys(i).forEach((o) => {
        const a = i[o];
        if (!X(a)) return console.error(`Invalid scale configuration for scale: ${o}`);
        if (a._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${o}`);
        const c = is(o, a, jf(o, n), ft.scales[a.type]),
          l = zf(c, s),
          h = e.scales || {};
        r[o] = on(Object.create(null), [{ axis: c }, a, h[c], h[l]]);
      }),
      n.data.datasets.forEach((o) => {
        const a = o.type || n.type,
          c = o.indexAxis || ns(a, t),
          h = (Me[a] || {}).scales || {};
        Object.keys(h).forEach((f) => {
          const u = Nf(f, c),
            d = o[u + 'AxisID'] || u;
          (r[d] = r[d] || Object.create(null)), on(r[d], [{ axis: u }, i[d], h[f]]);
        });
      }),
      Object.keys(r).forEach((o) => {
        const a = r[o];
        on(a, [ft.scales[a.type], ft.scale]);
      }),
      r
    );
  }
  function bo(n) {
    const t = n.options || (n.options = {});
    (t.plugins = et(t.plugins, {})), (t.scales = Vf(n, t));
  }
  function yo(n) {
    return (n = n || {}), (n.datasets = n.datasets || []), (n.labels = n.labels || []), n;
  }
  function $f(n) {
    return (n = n || {}), (n.data = yo(n.data)), bo(n), n;
  }
  const xo = new Map(),
    _o = new Set();
  function ni(n, t) {
    let e = xo.get(n);
    return e || ((e = t()), xo.set(n, e), _o.add(e)), e;
  }
  const wn = (n, t, e) => {
    const i = Bn(t, e);
    i !== void 0 && n.add(i);
  };
  class Wf {
    constructor(t) {
      (this._config = $f(t)), (this._scopeCache = new Map()), (this._resolverCache = new Map());
    }
    get platform() {
      return this._config.platform;
    }
    get type() {
      return this._config.type;
    }
    set type(t) {
      this._config.type = t;
    }
    get data() {
      return this._config.data;
    }
    set data(t) {
      this._config.data = yo(t);
    }
    get options() {
      return this._config.options;
    }
    set options(t) {
      this._config.options = t;
    }
    get plugins() {
      return this._config.plugins;
    }
    update() {
      const t = this._config;
      this.clearCache(), bo(t);
    }
    clearCache() {
      this._scopeCache.clear(), this._resolverCache.clear();
    }
    datasetScopeKeys(t) {
      return ni(t, () => [[`datasets.${t}`, '']]);
    }
    datasetAnimationScopeKeys(t, e) {
      return ni(`${t}.transition.${e}`, () => [
        [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
        [`datasets.${t}`, ''],
      ]);
    }
    datasetElementScopeKeys(t, e) {
      return ni(`${t}-${e}`, () => [
        [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ''],
      ]);
    }
    pluginScopeKeys(t) {
      const e = t.id,
        i = this.type;
      return ni(`${i}-plugin-${e}`, () => [[`plugins.${e}`, ...(t.additionalOptionScopes || [])]]);
    }
    _cachedScopes(t, e) {
      const i = this._scopeCache;
      let s = i.get(t);
      return (!s || e) && ((s = new Map()), i.set(t, s)), s;
    }
    getOptionScopes(t, e, i) {
      const { options: s, type: r } = this,
        o = this._cachedScopes(t, i),
        a = o.get(e);
      if (a) return a;
      const c = new Set();
      e.forEach((h) => {
        t && (c.add(t), h.forEach((f) => wn(c, t, f))),
          h.forEach((f) => wn(c, s, f)),
          h.forEach((f) => wn(c, Me[r] || {}, f)),
          h.forEach((f) => wn(c, ft, f)),
          h.forEach((f) => wn(c, Vi, f));
      });
      const l = Array.from(c);
      return l.length === 0 && l.push(Object.create(null)), _o.has(e) && o.set(e, l), l;
    }
    chartOptionScopes() {
      const { options: t, type: e } = this;
      return [t, Me[e] || {}, ft.datasets[e] || {}, { type: e }, ft, Vi];
    }
    resolveNamedOptions(t, e, i, s = ['']) {
      const r = { $shared: !0 },
        { resolver: o, subPrefixes: a } = vo(this._resolverCache, t, s);
      let c = o;
      if (Yf(o, e)) {
        (r.$shared = !1), (i = be(i) ? i() : i);
        const l = this.createResolver(t, i, a);
        c = Be(o, i, l);
      }
      for (const l of e) r[l] = c[l];
      return r;
    }
    createResolver(t, e, i = [''], s) {
      const { resolver: r } = vo(this._resolverCache, t, i);
      return X(e) ? Be(r, e, void 0, s) : r;
    }
  }
  function vo(n, t, e) {
    let i = n.get(t);
    i || ((i = new Map()), n.set(t, i));
    const s = e.join();
    let r = i.get(s);
    return (
      r ||
        ((r = {
          resolver: Yi(t, e),
          subPrefixes: e.filter((a) => !a.toLowerCase().includes('hover')),
        }),
        i.set(s, r)),
      r
    );
  }
  const Hf = (n) => X(n) && Object.getOwnPropertyNames(n).reduce((t, e) => t || be(n[e]), !1);
  function Yf(n, t) {
    const { isScriptable: e, isIndexable: i } = Pr(n);
    for (const s of t) {
      const r = e(s),
        o = i(s),
        a = (o || r) && n[s];
      if ((r && (be(a) || Hf(a))) || (o && lt(a))) return !0;
    }
    return !1;
  }
  var Uf = '4.3.0';
  const Xf = ['top', 'bottom', 'left', 'right', 'chartArea'];
  function wo(n, t) {
    return n === 'top' || n === 'bottom' || (Xf.indexOf(n) === -1 && t === 'x');
  }
  function ko(n, t) {
    return function (e, i) {
      return e[n] === i[n] ? e[t] - i[t] : e[n] - i[n];
    };
  }
  function So(n) {
    const t = n.chart,
      e = t.options.animation;
    t.notifyPlugins('afterRender'), ht(e && e.onComplete, [n], t);
  }
  function Gf(n) {
    const t = n.chart,
      e = t.options.animation;
    ht(e && e.onProgress, [n], t);
  }
  function Co(n) {
    return (
      Nr() && typeof n == 'string' ? (n = document.getElementById(n)) : n && n.length && (n = n[0]),
      n && n.canvas && (n = n.canvas),
      n
    );
  }
  const ii = {},
    Eo = (n) => {
      const t = Co(n);
      return Object.values(ii)
        .filter((e) => e.canvas === t)
        .pop();
    };
  function Kf(n, t, e) {
    const i = Object.keys(n);
    for (const s of i) {
      const r = +s;
      if (r >= t) {
        const o = n[s];
        delete n[s], (e > 0 || r > t) && (n[r + e] = o);
      }
    }
  }
  function qf(n, t, e, i) {
    return !e || n.type === 'mouseout' ? null : i ? t : n;
  }
  function Zf(n) {
    const { xScale: t, yScale: e } = n;
    if (t && e) return { left: t.left, right: t.right, top: e.top, bottom: e.bottom };
  }
  let ce =
    ((ke = class {
      static register(...t) {
        Zt.add(...t), Mo();
      }
      static unregister(...t) {
        Zt.remove(...t), Mo();
      }
      constructor(t, e) {
        const i = (this.config = new Wf(e)),
          s = Co(t),
          r = Eo(s);
        if (r)
          throw new Error(
            "Canvas is already in use. Chart with ID '" +
              r.id +
              "' must be destroyed before the canvas with ID '" +
              r.canvas.id +
              "' can be reused."
          );
        const o = i.createResolver(i.chartOptionScopes(), this.getContext());
        (this.platform = new (i.platform || gf(s))()), this.platform.updateConfig(i);
        const a = this.platform.acquireContext(s, o.aspectRatio),
          c = a && a.canvas,
          l = c && c.height,
          h = c && c.width;
        if (
          ((this.id = tl()),
          (this.ctx = a),
          (this.canvas = c),
          (this.width = h),
          (this.height = l),
          (this._options = o),
          (this._aspectRatio = this.aspectRatio),
          (this._layers = []),
          (this._metasets = []),
          (this._stacks = void 0),
          (this.boxes = []),
          (this.currentDevicePixelRatio = void 0),
          (this.chartArea = void 0),
          (this._active = []),
          (this._lastEvent = void 0),
          (this._listeners = {}),
          (this._responsiveListeners = void 0),
          (this._sortedMetasets = []),
          (this.scales = {}),
          (this._plugins = new Tf()),
          (this.$proxies = {}),
          (this._hiddenIndices = {}),
          (this.attached = !1),
          (this._animationsDisabled = void 0),
          (this.$context = void 0),
          (this._doResize = xl((f) => this.update(f), o.resizeDelay || 0)),
          (this._dataChanges = []),
          (ii[this.id] = this),
          !a || !c)
        ) {
          console.error("Failed to create chart: can't acquire context from the given item");
          return;
        }
        ae.listen(this, 'complete', So),
          ae.listen(this, 'progress', Gf),
          this._initialize(),
          this.attached && this.update();
      }
      get aspectRatio() {
        const {
          options: { aspectRatio: t, maintainAspectRatio: e },
          width: i,
          height: s,
          _aspectRatio: r,
        } = this;
        return it(t) ? (e && r ? r : s ? i / s : null) : t;
      }
      get data() {
        return this.config.data;
      }
      set data(t) {
        this.config.data = t;
      }
      get options() {
        return this._options;
      }
      set options(t) {
        this.config.options = t;
      }
      get registry() {
        return Zt;
      }
      _initialize() {
        return (
          this.notifyPlugins('beforeInit'),
          this.options.responsive ? this.resize() : zr(this, this.options.devicePixelRatio),
          this.bindEvents(),
          this.notifyPlugins('afterInit'),
          this
        );
      }
      clear() {
        return Er(this.canvas, this.ctx), this;
      }
      stop() {
        return ae.stop(this), this;
      }
      resize(t, e) {
        ae.running(this) ? (this._resizeBeforeDraw = { width: t, height: e }) : this._resize(t, e);
      }
      _resize(t, e) {
        const i = this.options,
          s = this.canvas,
          r = i.maintainAspectRatio && this.aspectRatio,
          o = this.platform.getMaximumSize(s, t, e, r),
          a = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
          c = this.width ? 'resize' : 'attach';
        (this.width = o.width),
          (this.height = o.height),
          (this._aspectRatio = this.aspectRatio),
          zr(this, a, !0) &&
            (this.notifyPlugins('resize', { size: o }),
            ht(i.onResize, [this, o], this),
            this.attached && this._doResize(c) && this.render());
      }
      ensureScalesHaveIDs() {
        const e = this.options.scales || {};
        J(e, (i, s) => {
          i.id = s;
        });
      }
      buildOrUpdateScales() {
        const t = this.options,
          e = t.scales,
          i = this.scales,
          s = Object.keys(i).reduce((o, a) => ((o[a] = !1), o), {});
        let r = [];
        e &&
          (r = r.concat(
            Object.keys(e).map((o) => {
              const a = e[o],
                c = is(o, a),
                l = c === 'r',
                h = c === 'x';
              return {
                options: a,
                dposition: l ? 'chartArea' : h ? 'bottom' : 'left',
                dtype: l ? 'radialLinear' : h ? 'category' : 'linear',
              };
            })
          )),
          J(r, (o) => {
            const a = o.options,
              c = a.id,
              l = is(c, a),
              h = et(a.type, o.dtype);
            (a.position === void 0 || wo(a.position, l) !== wo(o.dposition)) &&
              (a.position = o.dposition),
              (s[c] = !0);
            let f = null;
            if (c in i && i[c].type === h) f = i[c];
            else {
              const u = Zt.getScale(h);
              (f = new u({ id: c, type: h, ctx: this.ctx, chart: this })), (i[f.id] = f);
            }
            f.init(a, t);
          }),
          J(s, (o, a) => {
            o || delete i[a];
          }),
          J(i, (o) => {
            ve.configure(this, o, o.options), ve.addBox(this, o);
          });
      }
      _updateMetasets() {
        const t = this._metasets,
          e = this.data.datasets.length,
          i = t.length;
        if ((t.sort((s, r) => s.index - r.index), i > e)) {
          for (let s = e; s < i; ++s) this._destroyDatasetMeta(s);
          t.splice(e, i - e);
        }
        this._sortedMetasets = t.slice(0).sort(ko('order', 'index'));
      }
      _removeUnreferencedMetasets() {
        const {
          _metasets: t,
          data: { datasets: e },
        } = this;
        t.length > e.length && delete this._stacks,
          t.forEach((i, s) => {
            e.filter((r) => r === i._dataset).length === 0 && this._destroyDatasetMeta(s);
          });
      }
      buildOrUpdateControllers() {
        const t = [],
          e = this.data.datasets;
        let i, s;
        for (this._removeUnreferencedMetasets(), i = 0, s = e.length; i < s; i++) {
          const r = e[i];
          let o = this.getDatasetMeta(i);
          const a = r.type || this.config.type;
          if (
            (o.type && o.type !== a && (this._destroyDatasetMeta(i), (o = this.getDatasetMeta(i))),
            (o.type = a),
            (o.indexAxis = r.indexAxis || ns(a, this.options)),
            (o.order = r.order || 0),
            (o.index = i),
            (o.label = '' + r.label),
            (o.visible = this.isDatasetVisible(i)),
            o.controller)
          )
            o.controller.updateIndex(i), o.controller.linkScales();
          else {
            const c = Zt.getController(a),
              { datasetElementType: l, dataElementType: h } = ft.datasets[a];
            Object.assign(c, {
              dataElementType: Zt.getElement(h),
              datasetElementType: l && Zt.getElement(l),
            }),
              (o.controller = new c(this, i)),
              t.push(o.controller);
          }
        }
        return this._updateMetasets(), t;
      }
      _resetElements() {
        J(
          this.data.datasets,
          (t, e) => {
            this.getDatasetMeta(e).controller.reset();
          },
          this
        );
      }
      reset() {
        this._resetElements(), this.notifyPlugins('reset');
      }
      update(t) {
        const e = this.config;
        e.update();
        const i = (this._options = e.createResolver(e.chartOptionScopes(), this.getContext())),
          s = (this._animationsDisabled = !i.animation);
        if (
          (this._updateScales(),
          this._checkEventBindings(),
          this._updateHiddenIndices(),
          this._plugins.invalidate(),
          this.notifyPlugins('beforeUpdate', { mode: t, cancelable: !0 }) === !1)
        )
          return;
        const r = this.buildOrUpdateControllers();
        this.notifyPlugins('beforeElementsUpdate');
        let o = 0;
        for (let l = 0, h = this.data.datasets.length; l < h; l++) {
          const { controller: f } = this.getDatasetMeta(l),
            u = !s && r.indexOf(f) === -1;
          f.buildOrUpdateElements(u), (o = Math.max(+f.getMaxOverflow(), o));
        }
        (o = this._minPadding = i.layout.autoPadding ? o : 0),
          this._updateLayout(o),
          s ||
            J(r, (l) => {
              l.reset();
            }),
          this._updateDatasets(t),
          this.notifyPlugins('afterUpdate', { mode: t }),
          this._layers.sort(ko('z', '_idx'));
        const { _active: a, _lastEvent: c } = this;
        c ? this._eventHandler(c, !0) : a.length && this._updateHoverStyles(a, a, !0),
          this.render();
      }
      _updateScales() {
        J(this.scales, (t) => {
          ve.removeBox(this, t);
        }),
          this.ensureScalesHaveIDs(),
          this.buildOrUpdateScales();
      }
      _checkEventBindings() {
        const t = this.options,
          e = new Set(Object.keys(this._listeners)),
          i = new Set(t.events);
        (!hr(e, i) || !!this._responsiveListeners !== t.responsive) &&
          (this.unbindEvents(), this.bindEvents());
      }
      _updateHiddenIndices() {
        const { _hiddenIndices: t } = this,
          e = this._getUniformDataChanges() || [];
        for (const { method: i, start: s, count: r } of e) {
          const o = i === '_removeElements' ? -r : r;
          Kf(t, s, o);
        }
      }
      _getUniformDataChanges() {
        const t = this._dataChanges;
        if (!t || !t.length) return;
        this._dataChanges = [];
        const e = this.data.datasets.length,
          i = (r) =>
            new Set(t.filter((o) => o[0] === r).map((o, a) => a + ',' + o.splice(1).join(','))),
          s = i(0);
        for (let r = 1; r < e; r++) if (!hr(s, i(r))) return;
        return Array.from(s)
          .map((r) => r.split(','))
          .map((r) => ({ method: r[1], start: +r[2], count: +r[3] }));
      }
      _updateLayout(t) {
        if (this.notifyPlugins('beforeLayout', { cancelable: !0 }) === !1) return;
        ve.update(this, this.width, this.height, t);
        const e = this.chartArea,
          i = e.width <= 0 || e.height <= 0;
        (this._layers = []),
          J(
            this.boxes,
            (s) => {
              (i && s.position === 'chartArea') ||
                (s.configure && s.configure(), this._layers.push(...s._layers()));
            },
            this
          ),
          this._layers.forEach((s, r) => {
            s._idx = r;
          }),
          this.notifyPlugins('afterLayout');
      }
      _updateDatasets(t) {
        if (this.notifyPlugins('beforeDatasetsUpdate', { mode: t, cancelable: !0 }) !== !1) {
          for (let e = 0, i = this.data.datasets.length; e < i; ++e)
            this.getDatasetMeta(e).controller.configure();
          for (let e = 0, i = this.data.datasets.length; e < i; ++e)
            this._updateDataset(e, be(t) ? t({ datasetIndex: e }) : t);
          this.notifyPlugins('afterDatasetsUpdate', { mode: t });
        }
      }
      _updateDataset(t, e) {
        const i = this.getDatasetMeta(t),
          s = { meta: i, index: t, mode: e, cancelable: !0 };
        this.notifyPlugins('beforeDatasetUpdate', s) !== !1 &&
          (i.controller._update(e),
          (s.cancelable = !1),
          this.notifyPlugins('afterDatasetUpdate', s));
      }
      render() {
        this.notifyPlugins('beforeRender', { cancelable: !0 }) !== !1 &&
          (ae.has(this)
            ? this.attached && !ae.running(this) && ae.start(this)
            : (this.draw(), So({ chart: this })));
      }
      draw() {
        let t;
        if (this._resizeBeforeDraw) {
          const { width: i, height: s } = this._resizeBeforeDraw;
          this._resize(i, s), (this._resizeBeforeDraw = null);
        }
        if (
          (this.clear(),
          this.width <= 0 ||
            this.height <= 0 ||
            this.notifyPlugins('beforeDraw', { cancelable: !0 }) === !1)
        )
          return;
        const e = this._layers;
        for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
        for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
        this.notifyPlugins('afterDraw');
      }
      _getSortedDatasetMetas(t) {
        const e = this._sortedMetasets,
          i = [];
        let s, r;
        for (s = 0, r = e.length; s < r; ++s) {
          const o = e[s];
          (!t || o.visible) && i.push(o);
        }
        return i;
      }
      getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(!0);
      }
      _drawDatasets() {
        if (this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 }) === !1) return;
        const t = this.getSortedVisibleDatasetMetas();
        for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
        this.notifyPlugins('afterDatasetsDraw');
      }
      _drawDataset(t) {
        const e = this.ctx,
          i = t._clip,
          s = !i.disabled,
          r = Zf(t) || this.chartArea,
          o = { meta: t, index: t.index, cancelable: !0 };
        this.notifyPlugins('beforeDatasetDraw', o) !== !1 &&
          (s &&
            Mr(e, {
              left: i.left === !1 ? 0 : r.left - i.left,
              right: i.right === !1 ? this.width : r.right + i.right,
              top: i.top === !1 ? 0 : r.top - i.top,
              bottom: i.bottom === !1 ? this.height : r.bottom + i.bottom,
            }),
          t.controller.draw(),
          s && Or(e),
          (o.cancelable = !1),
          this.notifyPlugins('afterDatasetDraw', o));
      }
      isPointInArea(t) {
        return oe(t, this.chartArea, this._minPadding);
      }
      getElementsAtEventForMode(t, e, i, s) {
        const r = Uh.modes[e];
        return typeof r == 'function' ? r(this, t, i, s) : [];
      }
      getDatasetMeta(t) {
        const e = this.data.datasets[t],
          i = this._metasets;
        let s = i.filter((r) => r && r._dataset === e).pop();
        return (
          s ||
            ((s = {
              type: null,
              data: [],
              dataset: null,
              controller: null,
              hidden: null,
              xAxisID: null,
              yAxisID: null,
              order: (e && e.order) || 0,
              index: t,
              _dataset: e,
              _parsed: [],
              _sorted: !1,
            }),
            i.push(s)),
          s
        );
      }
      getContext() {
        return this.$context || (this.$context = _e(null, { chart: this, type: 'chart' }));
      }
      getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
      }
      isDatasetVisible(t) {
        const e = this.data.datasets[t];
        if (!e) return !1;
        const i = this.getDatasetMeta(t);
        return typeof i.hidden == 'boolean' ? !i.hidden : !e.hidden;
      }
      setDatasetVisibility(t, e) {
        const i = this.getDatasetMeta(t);
        i.hidden = !e;
      }
      toggleDataVisibility(t) {
        this._hiddenIndices[t] = !this._hiddenIndices[t];
      }
      getDataVisibility(t) {
        return !this._hiddenIndices[t];
      }
      _updateVisibility(t, e, i) {
        const s = i ? 'show' : 'hide',
          r = this.getDatasetMeta(t),
          o = r.controller._resolveAnimations(void 0, s);
        jn(e)
          ? ((r.data[e].hidden = !i), this.update())
          : (this.setDatasetVisibility(t, i),
            o.update(r, { visible: i }),
            this.update((a) => (a.datasetIndex === t ? s : void 0)));
      }
      hide(t, e) {
        this._updateVisibility(t, e, !1);
      }
      show(t, e) {
        this._updateVisibility(t, e, !0);
      }
      _destroyDatasetMeta(t) {
        const e = this._metasets[t];
        e && e.controller && e.controller._destroy(), delete this._metasets[t];
      }
      _stop() {
        let t, e;
        for (this.stop(), ae.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
          this._destroyDatasetMeta(t);
      }
      destroy() {
        this.notifyPlugins('beforeDestroy');
        const { canvas: t, ctx: e } = this;
        this._stop(),
          this.config.clearCache(),
          t &&
            (this.unbindEvents(),
            Er(t, e),
            this.platform.releaseContext(e),
            (this.canvas = null),
            (this.ctx = null)),
          delete ii[this.id],
          this.notifyPlugins('afterDestroy');
      }
      toBase64Image(...t) {
        return this.canvas.toDataURL(...t);
      }
      bindEvents() {
        this.bindUserEvents(),
          this.options.responsive ? this.bindResponsiveEvents() : (this.attached = !0);
      }
      bindUserEvents() {
        const t = this._listeners,
          e = this.platform,
          i = (r, o) => {
            e.addEventListener(this, r, o), (t[r] = o);
          },
          s = (r, o, a) => {
            (r.offsetX = o), (r.offsetY = a), this._eventHandler(r);
          };
        J(this.options.events, (r) => i(r, s));
      }
      bindResponsiveEvents() {
        this._responsiveListeners || (this._responsiveListeners = {});
        const t = this._responsiveListeners,
          e = this.platform,
          i = (c, l) => {
            e.addEventListener(this, c, l), (t[c] = l);
          },
          s = (c, l) => {
            t[c] && (e.removeEventListener(this, c, l), delete t[c]);
          },
          r = (c, l) => {
            this.canvas && this.resize(c, l);
          };
        let o;
        const a = () => {
          s('attach', a), (this.attached = !0), this.resize(), i('resize', r), i('detach', o);
        };
        (o = () => {
          (this.attached = !1), s('resize', r), this._stop(), this._resize(0, 0), i('attach', a);
        }),
          e.isAttached(this.canvas) ? a() : o();
      }
      unbindEvents() {
        J(this._listeners, (t, e) => {
          this.platform.removeEventListener(this, e, t);
        }),
          (this._listeners = {}),
          J(this._responsiveListeners, (t, e) => {
            this.platform.removeEventListener(this, e, t);
          }),
          (this._responsiveListeners = void 0);
      }
      updateHoverStyle(t, e, i) {
        const s = i ? 'set' : 'remove';
        let r, o, a, c;
        for (
          e === 'dataset' &&
            ((r = this.getDatasetMeta(t[0].datasetIndex)),
            r.controller['_' + s + 'DatasetHoverStyle']()),
            a = 0,
            c = t.length;
          a < c;
          ++a
        ) {
          o = t[a];
          const l = o && this.getDatasetMeta(o.datasetIndex).controller;
          l && l[s + 'HoverStyle'](o.element, o.datasetIndex, o.index);
        }
      }
      getActiveElements() {
        return this._active || [];
      }
      setActiveElements(t) {
        const e = this._active || [],
          i = t.map(({ datasetIndex: r, index: o }) => {
            const a = this.getDatasetMeta(r);
            if (!a) throw new Error('No dataset found at index ' + r);
            return { datasetIndex: r, element: a.data[o], index: o };
          });
        !Nn(i, e) && ((this._active = i), (this._lastEvent = null), this._updateHoverStyles(i, e));
      }
      notifyPlugins(t, e, i) {
        return this._plugins.notify(this, t, e, i);
      }
      isPluginEnabled(t) {
        return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
      }
      _updateHoverStyles(t, e, i) {
        const s = this.options.hover,
          r = (c, l) =>
            c.filter(
              (h) => !l.some((f) => h.datasetIndex === f.datasetIndex && h.index === f.index)
            ),
          o = r(e, t),
          a = i ? t : r(t, e);
        o.length && this.updateHoverStyle(o, s.mode, !1),
          a.length && s.mode && this.updateHoverStyle(a, s.mode, !0);
      }
      _eventHandler(t, e) {
        const i = { event: t, replay: e, cancelable: !0, inChartArea: this.isPointInArea(t) },
          s = (o) => (o.options.events || this.options.events).includes(t.native.type);
        if (this.notifyPlugins('beforeEvent', i, s) === !1) return;
        const r = this._handleEvent(t, e, i.inChartArea);
        return (
          (i.cancelable = !1),
          this.notifyPlugins('afterEvent', i, s),
          (r || i.changed) && this.render(),
          this
        );
      }
      _handleEvent(t, e, i) {
        const { _active: s = [], options: r } = this,
          o = e,
          a = this._getActiveElements(t, s, i, o),
          c = ol(t),
          l = qf(t, this._lastEvent, i, c);
        i &&
          ((this._lastEvent = null),
          ht(r.onHover, [t, a, this], this),
          c && ht(r.onClick, [t, a, this], this));
        const h = !Nn(a, s);
        return (
          (h || e) && ((this._active = a), this._updateHoverStyles(a, s, e)),
          (this._lastEvent = l),
          h
        );
      }
      _getActiveElements(t, e, i, s) {
        if (t.type === 'mouseout') return [];
        if (!i) return e;
        const r = this.options.hover;
        return this.getElementsAtEventForMode(t, r.mode, r, s);
      }
    }),
    L(ke, 'defaults', ft),
    L(ke, 'instances', ii),
    L(ke, 'overrides', Me),
    L(ke, 'registry', Zt),
    L(ke, 'version', Uf),
    L(ke, 'getChart', Eo),
    ke);
  function Mo() {
    return J(ce.instances, (n) => n._plugins.invalidate());
  }
  function Oo(n, t, e = t) {
    (n.lineCap = et(e.borderCapStyle, t.borderCapStyle)),
      n.setLineDash(et(e.borderDash, t.borderDash)),
      (n.lineDashOffset = et(e.borderDashOffset, t.borderDashOffset)),
      (n.lineJoin = et(e.borderJoinStyle, t.borderJoinStyle)),
      (n.lineWidth = et(e.borderWidth, t.borderWidth)),
      (n.strokeStyle = et(e.borderColor, t.borderColor));
  }
  function Qf(n, t, e) {
    n.lineTo(e.x, e.y);
  }
  function Jf(n) {
    return n.stepped ? Rl : n.tension || n.cubicInterpolationMode === 'monotone' ? Fl : Qf;
  }
  function Do(n, t, e = {}) {
    const i = n.length,
      { start: s = 0, end: r = i - 1 } = e,
      { start: o, end: a } = t,
      c = Math.max(s, o),
      l = Math.min(r, a),
      h = (s < o && r < o) || (s > a && r > a);
    return { count: i, start: c, loop: t.loop, ilen: l < c && !h ? i + l - c : l - c };
  }
  function tu(n, t, e, i) {
    const { points: s, options: r } = t,
      { count: o, start: a, loop: c, ilen: l } = Do(s, e, i),
      h = Jf(r);
    let { move: f = !0, reverse: u } = i || {},
      d,
      p,
      m;
    for (d = 0; d <= l; ++d)
      (p = s[(a + (u ? l - d : d)) % o]),
        !p.skip && (f ? (n.moveTo(p.x, p.y), (f = !1)) : h(n, m, p, u, r.stepped), (m = p));
    return c && ((p = s[(a + (u ? l : 0)) % o]), h(n, m, p, u, r.stepped)), !!c;
  }
  function eu(n, t, e, i) {
    const s = t.points,
      { count: r, start: o, ilen: a } = Do(s, e, i),
      { move: c = !0, reverse: l } = i || {};
    let h = 0,
      f = 0,
      u,
      d,
      p,
      m,
      b,
      y;
    const _ = (M) => (o + (l ? a - M : M)) % r,
      S = () => {
        m !== b && (n.lineTo(h, b), n.lineTo(h, m), n.lineTo(h, y));
      };
    for (c && ((d = s[_(0)]), n.moveTo(d.x, d.y)), u = 0; u <= a; ++u) {
      if (((d = s[_(u)]), d.skip)) continue;
      const M = d.x,
        w = d.y,
        P = M | 0;
      P === p
        ? (w < m ? (m = w) : w > b && (b = w), (h = (f * h + M) / ++f))
        : (S(), n.lineTo(M, w), (p = P), (f = 0), (m = b = w)),
        (y = w);
    }
    S();
  }
  function ss(n) {
    const t = n.options,
      e = t.borderDash && t.borderDash.length;
    return !n._decimated &&
      !n._loop &&
      !t.tension &&
      t.cubicInterpolationMode !== 'monotone' &&
      !t.stepped &&
      !e
      ? eu
      : tu;
  }
  function nu(n) {
    return n.stepped ? dh : n.tension || n.cubicInterpolationMode === 'monotone' ? gh : Ae;
  }
  function iu(n, t, e, i) {
    let s = t._path;
    s || ((s = t._path = new Path2D()), t.path(s, e, i) && s.closePath()),
      Oo(n, t.options),
      n.stroke(s);
  }
  function su(n, t, e, i) {
    const { segments: s, options: r } = t,
      o = ss(t);
    for (const a of s)
      Oo(n, r, a.style),
        n.beginPath(),
        o(n, t, a, { start: e, end: e + i - 1 }) && n.closePath(),
        n.stroke();
  }
  const ru = typeof Path2D == 'function';
  function ou(n, t, e, i) {
    ru && !t.options.segment ? iu(n, t, e, i) : su(n, t, e, i);
  }
  class kn extends we {
    constructor(t) {
      super(),
        (this.animated = !0),
        (this.options = void 0),
        (this._chart = void 0),
        (this._loop = void 0),
        (this._fullLoop = void 0),
        (this._path = void 0),
        (this._points = void 0),
        (this._segments = void 0),
        (this._decimated = !1),
        (this._pointsUpdated = !1),
        (this._datasetIndex = void 0),
        t && Object.assign(this, t);
    }
    updateControlPoints(t, e) {
      const i = this.options;
      if (
        (i.tension || i.cubicInterpolationMode === 'monotone') &&
        !i.stepped &&
        !this._pointsUpdated
      ) {
        const s = i.spanGaps ? this._loop : this._fullLoop;
        rh(this._points, i, t, s, e), (this._pointsUpdated = !0);
      }
    }
    set points(t) {
      (this._points = t), delete this._segments, delete this._path, (this._pointsUpdated = !1);
    }
    get points() {
      return this._points;
    }
    get segments() {
      return this._segments || (this._segments = Sh(this, this.options.segment));
    }
    first() {
      const t = this.segments,
        e = this.points;
      return t.length && e[t[0].start];
    }
    last() {
      const t = this.segments,
        e = this.points,
        i = t.length;
      return i && e[t[i - 1].end];
    }
    interpolate(t, e) {
      const i = this.options,
        s = t[e],
        r = this.points,
        o = vh(this, { property: e, start: s, end: s });
      if (!o.length) return;
      const a = [],
        c = nu(i);
      let l, h;
      for (l = 0, h = o.length; l < h; ++l) {
        const { start: f, end: u } = o[l],
          d = r[f],
          p = r[u];
        if (d === p) {
          a.push(d);
          continue;
        }
        const m = Math.abs((s - d[e]) / (p[e] - d[e])),
          b = c(d, p, m, i.stepped);
        (b[e] = t[e]), a.push(b);
      }
      return a.length === 1 ? a[0] : a;
    }
    pathSegment(t, e, i) {
      return ss(this)(t, this, e, i);
    }
    path(t, e, i) {
      const s = this.segments,
        r = ss(this);
      let o = this._loop;
      (e = e || 0), (i = i || this.points.length - e);
      for (const a of s) o &= r(t, this, a, { start: e, end: e + i - 1 });
      return !!o;
    }
    draw(t, e, i, s) {
      const r = this.options || {};
      (this.points || []).length && r.borderWidth && (t.save(), ou(t, this, i, s), t.restore()),
        this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
    }
  }
  L(kn, 'id', 'line'),
    L(kn, 'defaults', {
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: 'miter',
      borderWidth: 3,
      capBezierPoints: !0,
      cubicInterpolationMode: 'default',
      fill: !1,
      spanGaps: !1,
      stepped: !1,
      tension: 0,
    }),
    L(kn, 'defaultRoutes', { backgroundColor: 'backgroundColor', borderColor: 'borderColor' }),
    L(kn, 'descriptors', {
      _scriptable: !0,
      _indexable: (t) => t !== 'borderDash' && t !== 'fill',
    });
  function Po(n, t, e, i) {
    const s = n.options,
      { [e]: r } = n.getProps([e], i);
    return Math.abs(t - r) < s.radius + s.hitRadius;
  }
  class si extends we {
    constructor(e) {
      super();
      L(this, 'parsed');
      L(this, 'skip');
      L(this, 'stop');
      (this.options = void 0),
        (this.parsed = void 0),
        (this.skip = void 0),
        (this.stop = void 0),
        e && Object.assign(this, e);
    }
    inRange(e, i, s) {
      const r = this.options,
        { x: o, y: a } = this.getProps(['x', 'y'], s);
      return Math.pow(e - o, 2) + Math.pow(i - a, 2) < Math.pow(r.hitRadius + r.radius, 2);
    }
    inXRange(e, i) {
      return Po(this, e, 'x', i);
    }
    inYRange(e, i) {
      return Po(this, e, 'y', i);
    }
    getCenterPoint(e) {
      const { x: i, y: s } = this.getProps(['x', 'y'], e);
      return { x: i, y: s };
    }
    size(e) {
      e = e || this.options || {};
      let i = e.radius || 0;
      i = Math.max(i, (i && e.hoverRadius) || 0);
      const s = (i && e.borderWidth) || 0;
      return (i + s) * 2;
    }
    draw(e, i) {
      const s = this.options;
      this.skip ||
        s.radius < 0.1 ||
        !oe(this, i, this.size(s) / 2) ||
        ((e.strokeStyle = s.borderColor),
        (e.lineWidth = s.borderWidth),
        (e.fillStyle = s.backgroundColor),
        Wi(e, s, this.x, this.y));
    }
    getRange() {
      const e = this.options || {};
      return e.radius + e.hitRadius;
    }
  }
  L(si, 'id', 'point'),
    L(si, 'defaults', {
      borderWidth: 1,
      hitRadius: 1,
      hoverBorderWidth: 1,
      hoverRadius: 4,
      pointStyle: 'circle',
      radius: 3,
      rotation: 0,
    }),
    L(si, 'defaultRoutes', { backgroundColor: 'backgroundColor', borderColor: 'borderColor' });
  class Ao extends we {
    constructor(t) {
      super(),
        (this.chart = t.chart),
        (this.options = t.options),
        (this.ctx = t.ctx),
        (this._padding = void 0),
        (this.top = void 0),
        (this.bottom = void 0),
        (this.left = void 0),
        (this.right = void 0),
        (this.width = void 0),
        (this.height = void 0),
        (this.position = void 0),
        (this.weight = void 0),
        (this.fullSize = void 0);
    }
    update(t, e) {
      const i = this.options;
      if (((this.left = 0), (this.top = 0), !i.display)) {
        this.width = this.height = this.right = this.bottom = 0;
        return;
      }
      (this.width = this.right = t), (this.height = this.bottom = e);
      const s = lt(i.text) ? i.text.length : 1;
      this._padding = Lt(i.padding);
      const r = s * Et(i.font).lineHeight + this._padding.height;
      this.isHorizontal() ? (this.height = r) : (this.width = r);
    }
    isHorizontal() {
      const t = this.options.position;
      return t === 'top' || t === 'bottom';
    }
    _drawArgs(t) {
      const { top: e, left: i, bottom: s, right: r, options: o } = this,
        a = o.align;
      let c = 0,
        l,
        h,
        f;
      return (
        this.isHorizontal()
          ? ((h = ln(a, i, r)), (f = e + t), (l = r - i))
          : (o.position === 'left'
              ? ((h = i + t), (f = ln(a, s, e)), (c = yt * -0.5))
              : ((h = r - t), (f = ln(a, e, s)), (c = yt * 0.5)),
            (l = s - e)),
        { titleX: h, titleY: f, maxWidth: l, rotation: c }
      );
    }
    draw() {
      const t = this.ctx,
        e = this.options;
      if (!e.display) return;
      const i = Et(e.font),
        r = i.lineHeight / 2 + this._padding.top,
        { titleX: o, titleY: a, maxWidth: c, rotation: l } = this._drawArgs(r);
      un(t, e.text, 0, 0, i, {
        color: e.color,
        maxWidth: c,
        rotation: l,
        textAlign: _r(e.align),
        textBaseline: 'middle',
        translation: [o, a],
      });
    }
  }
  function au(n, t) {
    const e = new Ao({ ctx: n.ctx, options: t, chart: n });
    ve.configure(n, e, t), ve.addBox(n, e), (n.titleBlock = e);
  }
  var cu = {
    id: 'title',
    _element: Ao,
    start(n, t, e) {
      au(n, e);
    },
    stop(n) {
      const t = n.titleBlock;
      ve.removeBox(n, t), delete n.titleBlock;
    },
    beforeUpdate(n, t, e) {
      const i = n.titleBlock;
      ve.configure(n, i, e), (i.options = e);
    },
    defaults: {
      align: 'center',
      display: !1,
      font: { weight: 'bold' },
      fullSize: !0,
      padding: 10,
      position: 'top',
      text: '',
      weight: 2e3,
    },
    defaultRoutes: { color: 'color' },
    descriptors: { _scriptable: !0, _indexable: !1 },
  };
  const Sn = {
    average(n) {
      if (!n.length) return !1;
      let t,
        e,
        i = 0,
        s = 0,
        r = 0;
      for (t = 0, e = n.length; t < e; ++t) {
        const o = n[t].element;
        if (o && o.hasValue()) {
          const a = o.tooltipPosition();
          (i += a.x), (s += a.y), ++r;
        }
      }
      return { x: i / r, y: s / r };
    },
    nearest(n, t) {
      if (!n.length) return !1;
      let e = t.x,
        i = t.y,
        s = Number.POSITIVE_INFINITY,
        r,
        o,
        a;
      for (r = 0, o = n.length; r < o; ++r) {
        const c = n[r].element;
        if (c && c.hasValue()) {
          const l = c.getCenterPoint(),
            h = Ii(t, l);
          h < s && ((s = h), (a = c));
        }
      }
      if (a) {
        const c = a.tooltipPosition();
        (e = c.x), (i = c.y);
      }
      return { x: e, y: i };
    },
  };
  function Qt(n, t) {
    return t && (lt(t) ? Array.prototype.push.apply(n, t) : n.push(t)), n;
  }
  function le(n) {
    return (typeof n == 'string' || n instanceof String) &&
      n.indexOf(`
`) > -1
      ? n.split(`
`)
      : n;
  }
  function lu(n, t) {
    const { element: e, datasetIndex: i, index: s } = t,
      r = n.getDatasetMeta(i).controller,
      { label: o, value: a } = r.getLabelAndValue(s);
    return {
      chart: n,
      label: o,
      parsed: r.getParsed(s),
      raw: n.data.datasets[i].data[s],
      formattedValue: a,
      dataset: r.getDataset(),
      dataIndex: s,
      datasetIndex: i,
      element: e,
    };
  }
  function To(n, t) {
    const e = n.chart.ctx,
      { body: i, footer: s, title: r } = n,
      { boxWidth: o, boxHeight: a } = t,
      c = Et(t.bodyFont),
      l = Et(t.titleFont),
      h = Et(t.footerFont),
      f = r.length,
      u = s.length,
      d = i.length,
      p = Lt(t.padding);
    let m = p.height,
      b = 0,
      y = i.reduce((M, w) => M + w.before.length + w.lines.length + w.after.length, 0);
    if (
      ((y += n.beforeBody.length + n.afterBody.length),
      f && (m += f * l.lineHeight + (f - 1) * t.titleSpacing + t.titleMarginBottom),
      y)
    ) {
      const M = t.displayColors ? Math.max(a, c.lineHeight) : c.lineHeight;
      m += d * M + (y - d) * c.lineHeight + (y - 1) * t.bodySpacing;
    }
    u && (m += t.footerMarginTop + u * h.lineHeight + (u - 1) * t.footerSpacing);
    let _ = 0;
    const S = function (M) {
      b = Math.max(b, e.measureText(M).width + _);
    };
    return (
      e.save(),
      (e.font = l.string),
      J(n.title, S),
      (e.font = c.string),
      J(n.beforeBody.concat(n.afterBody), S),
      (_ = t.displayColors ? o + 2 + t.boxPadding : 0),
      J(i, (M) => {
        J(M.before, S), J(M.lines, S), J(M.after, S);
      }),
      (_ = 0),
      (e.font = h.string),
      J(n.footer, S),
      e.restore(),
      (b += p.width),
      { width: b, height: m }
    );
  }
  function hu(n, t) {
    const { y: e, height: i } = t;
    return e < i / 2 ? 'top' : e > n.height - i / 2 ? 'bottom' : 'center';
  }
  function fu(n, t, e, i) {
    const { x: s, width: r } = i,
      o = e.caretSize + e.caretPadding;
    if ((n === 'left' && s + r + o > t.width) || (n === 'right' && s - r - o < 0)) return !0;
  }
  function uu(n, t, e, i) {
    const { x: s, width: r } = e,
      {
        width: o,
        chartArea: { left: a, right: c },
      } = n;
    let l = 'center';
    return (
      i === 'center'
        ? (l = s <= (a + c) / 2 ? 'left' : 'right')
        : s <= r / 2
        ? (l = 'left')
        : s >= o - r / 2 && (l = 'right'),
      fu(l, n, t, e) && (l = 'center'),
      l
    );
  }
  function Ro(n, t, e) {
    const i = e.yAlign || t.yAlign || hu(n, e);
    return { xAlign: e.xAlign || t.xAlign || uu(n, t, e, i), yAlign: i };
  }
  function du(n, t) {
    let { x: e, width: i } = n;
    return t === 'right' ? (e -= i) : t === 'center' && (e -= i / 2), e;
  }
  function gu(n, t, e) {
    let { y: i, height: s } = n;
    return t === 'top' ? (i += e) : t === 'bottom' ? (i -= s + e) : (i -= s / 2), i;
  }
  function Fo(n, t, e, i) {
    const { caretSize: s, caretPadding: r, cornerRadius: o } = n,
      { xAlign: a, yAlign: c } = e,
      l = s + r,
      { topLeft: h, topRight: f, bottomLeft: u, bottomRight: d } = dn(o);
    let p = du(t, a);
    const m = gu(t, c, l);
    return (
      c === 'center'
        ? a === 'left'
          ? (p += l)
          : a === 'right' && (p -= l)
        : a === 'left'
        ? (p -= Math.max(h, u) + s)
        : a === 'right' && (p += Math.max(f, d) + s),
      { x: Vt(p, 0, i.width - t.width), y: Vt(m, 0, i.height - t.height) }
    );
  }
  function ri(n, t, e) {
    const i = Lt(e.padding);
    return t === 'center'
      ? n.x + n.width / 2
      : t === 'right'
      ? n.x + n.width - i.right
      : n.x + i.left;
  }
  function Lo(n) {
    return Qt([], le(n));
  }
  function pu(n, t, e) {
    return _e(n, { tooltip: t, tooltipItems: e, type: 'tooltip' });
  }
  function Io(n, t) {
    const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
    return e ? n.override(e) : n;
  }
  const No = {
    beforeTitle: re,
    title(n) {
      if (n.length > 0) {
        const t = n[0],
          e = t.chart.data.labels,
          i = e ? e.length : 0;
        if (this && this.options && this.options.mode === 'dataset') return t.dataset.label || '';
        if (t.label) return t.label;
        if (i > 0 && t.dataIndex < i) return e[t.dataIndex];
      }
      return '';
    },
    afterTitle: re,
    beforeBody: re,
    beforeLabel: re,
    label(n) {
      if (this && this.options && this.options.mode === 'dataset')
        return n.label + ': ' + n.formattedValue || n.formattedValue;
      let t = n.dataset.label || '';
      t && (t += ': ');
      const e = n.formattedValue;
      return it(e) || (t += e), t;
    },
    labelColor(n) {
      const e = n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);
      return {
        borderColor: e.borderColor,
        backgroundColor: e.backgroundColor,
        borderWidth: e.borderWidth,
        borderDash: e.borderDash,
        borderDashOffset: e.borderDashOffset,
        borderRadius: 0,
      };
    },
    labelTextColor() {
      return this.options.bodyColor;
    },
    labelPointStyle(n) {
      const e = n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);
      return { pointStyle: e.pointStyle, rotation: e.rotation };
    },
    afterLabel: re,
    afterBody: re,
    beforeFooter: re,
    footer: re,
    afterFooter: re,
  };
  function Pt(n, t, e, i) {
    const s = n[t].call(e, i);
    return typeof s > 'u' ? No[t].call(e, i) : s;
  }
  class rs extends we {
    constructor(t) {
      super(),
        (this.opacity = 0),
        (this._active = []),
        (this._eventPosition = void 0),
        (this._size = void 0),
        (this._cachedAnimations = void 0),
        (this._tooltipItems = []),
        (this.$animations = void 0),
        (this.$context = void 0),
        (this.chart = t.chart),
        (this.options = t.options),
        (this.dataPoints = void 0),
        (this.title = void 0),
        (this.beforeBody = void 0),
        (this.body = void 0),
        (this.afterBody = void 0),
        (this.footer = void 0),
        (this.xAlign = void 0),
        (this.yAlign = void 0),
        (this.x = void 0),
        (this.y = void 0),
        (this.height = void 0),
        (this.width = void 0),
        (this.caretX = void 0),
        (this.caretY = void 0),
        (this.labelColors = void 0),
        (this.labelPointStyles = void 0),
        (this.labelTextColors = void 0);
    }
    initialize(t) {
      (this.options = t), (this._cachedAnimations = void 0), (this.$context = void 0);
    }
    _resolveAnimations() {
      const t = this._cachedAnimations;
      if (t) return t;
      const e = this.chart,
        i = this.options.setContext(this.getContext()),
        s = i.enabled && e.options.animation && i.animations,
        r = new Yr(this.chart, s);
      return s._cacheable && (this._cachedAnimations = Object.freeze(r)), r;
    }
    getContext() {
      return (
        this.$context || (this.$context = pu(this.chart.getContext(), this, this._tooltipItems))
      );
    }
    getTitle(t, e) {
      const { callbacks: i } = e,
        s = Pt(i, 'beforeTitle', this, t),
        r = Pt(i, 'title', this, t),
        o = Pt(i, 'afterTitle', this, t);
      let a = [];
      return (a = Qt(a, le(s))), (a = Qt(a, le(r))), (a = Qt(a, le(o))), a;
    }
    getBeforeBody(t, e) {
      return Lo(Pt(e.callbacks, 'beforeBody', this, t));
    }
    getBody(t, e) {
      const { callbacks: i } = e,
        s = [];
      return (
        J(t, (r) => {
          const o = { before: [], lines: [], after: [] },
            a = Io(i, r);
          Qt(o.before, le(Pt(a, 'beforeLabel', this, r))),
            Qt(o.lines, Pt(a, 'label', this, r)),
            Qt(o.after, le(Pt(a, 'afterLabel', this, r))),
            s.push(o);
        }),
        s
      );
    }
    getAfterBody(t, e) {
      return Lo(Pt(e.callbacks, 'afterBody', this, t));
    }
    getFooter(t, e) {
      const { callbacks: i } = e,
        s = Pt(i, 'beforeFooter', this, t),
        r = Pt(i, 'footer', this, t),
        o = Pt(i, 'afterFooter', this, t);
      let a = [];
      return (a = Qt(a, le(s))), (a = Qt(a, le(r))), (a = Qt(a, le(o))), a;
    }
    _createItems(t) {
      const e = this._active,
        i = this.chart.data,
        s = [],
        r = [],
        o = [];
      let a = [],
        c,
        l;
      for (c = 0, l = e.length; c < l; ++c) a.push(lu(this.chart, e[c]));
      return (
        t.filter && (a = a.filter((h, f, u) => t.filter(h, f, u, i))),
        t.itemSort && (a = a.sort((h, f) => t.itemSort(h, f, i))),
        J(a, (h) => {
          const f = Io(t.callbacks, h);
          s.push(Pt(f, 'labelColor', this, h)),
            r.push(Pt(f, 'labelPointStyle', this, h)),
            o.push(Pt(f, 'labelTextColor', this, h));
        }),
        (this.labelColors = s),
        (this.labelPointStyles = r),
        (this.labelTextColors = o),
        (this.dataPoints = a),
        a
      );
    }
    update(t, e) {
      const i = this.options.setContext(this.getContext()),
        s = this._active;
      let r,
        o = [];
      if (!s.length) this.opacity !== 0 && (r = { opacity: 0 });
      else {
        const a = Sn[i.position].call(this, s, this._eventPosition);
        (o = this._createItems(i)),
          (this.title = this.getTitle(o, i)),
          (this.beforeBody = this.getBeforeBody(o, i)),
          (this.body = this.getBody(o, i)),
          (this.afterBody = this.getAfterBody(o, i)),
          (this.footer = this.getFooter(o, i));
        const c = (this._size = To(this, i)),
          l = Object.assign({}, a, c),
          h = Ro(this.chart, i, l),
          f = Fo(i, l, h, this.chart);
        (this.xAlign = h.xAlign),
          (this.yAlign = h.yAlign),
          (r = {
            opacity: 1,
            x: f.x,
            y: f.y,
            width: c.width,
            height: c.height,
            caretX: a.x,
            caretY: a.y,
          });
      }
      (this._tooltipItems = o),
        (this.$context = void 0),
        r && this._resolveAnimations().update(this, r),
        t && i.external && i.external.call(this, { chart: this.chart, tooltip: this, replay: e });
    }
    drawCaret(t, e, i, s) {
      const r = this.getCaretPosition(t, i, s);
      e.lineTo(r.x1, r.y1), e.lineTo(r.x2, r.y2), e.lineTo(r.x3, r.y3);
    }
    getCaretPosition(t, e, i) {
      const { xAlign: s, yAlign: r } = this,
        { caretSize: o, cornerRadius: a } = i,
        { topLeft: c, topRight: l, bottomLeft: h, bottomRight: f } = dn(a),
        { x: u, y: d } = t,
        { width: p, height: m } = e;
      let b, y, _, S, M, w;
      return (
        r === 'center'
          ? ((M = d + m / 2),
            s === 'left'
              ? ((b = u), (y = b - o), (S = M + o), (w = M - o))
              : ((b = u + p), (y = b + o), (S = M - o), (w = M + o)),
            (_ = b))
          : (s === 'left'
              ? (y = u + Math.max(c, h) + o)
              : s === 'right'
              ? (y = u + p - Math.max(l, f) - o)
              : (y = this.caretX),
            r === 'top'
              ? ((S = d), (M = S - o), (b = y - o), (_ = y + o))
              : ((S = d + m), (M = S + o), (b = y + o), (_ = y - o)),
            (w = S)),
        { x1: b, x2: y, x3: _, y1: S, y2: M, y3: w }
      );
    }
    drawTitle(t, e, i) {
      const s = this.title,
        r = s.length;
      let o, a, c;
      if (r) {
        const l = Ki(i.rtl, this.x, this.width);
        for (
          t.x = ri(this, i.titleAlign, i),
            e.textAlign = l.textAlign(i.titleAlign),
            e.textBaseline = 'middle',
            o = Et(i.titleFont),
            a = i.titleSpacing,
            e.fillStyle = i.titleColor,
            e.font = o.string,
            c = 0;
          c < r;
          ++c
        )
          e.fillText(s[c], l.x(t.x), t.y + o.lineHeight / 2),
            (t.y += o.lineHeight + a),
            c + 1 === r && (t.y += i.titleMarginBottom - a);
      }
    }
    _drawColorBox(t, e, i, s, r) {
      const o = this.labelColors[i],
        a = this.labelPointStyles[i],
        { boxHeight: c, boxWidth: l } = r,
        h = Et(r.bodyFont),
        f = ri(this, 'left', r),
        u = s.x(f),
        d = c < h.lineHeight ? (h.lineHeight - c) / 2 : 0,
        p = e.y + d;
      if (r.usePointStyle) {
        const m = {
            radius: Math.min(l, c) / 2,
            pointStyle: a.pointStyle,
            rotation: a.rotation,
            borderWidth: 1,
          },
          b = s.leftForLtr(u, l) + l / 2,
          y = p + c / 2;
        (t.strokeStyle = r.multiKeyBackground),
          (t.fillStyle = r.multiKeyBackground),
          Wi(t, m, b, y),
          (t.strokeStyle = o.borderColor),
          (t.fillStyle = o.backgroundColor),
          Wi(t, m, b, y);
      } else {
        (t.lineWidth = X(o.borderWidth)
          ? Math.max(...Object.values(o.borderWidth))
          : o.borderWidth || 1),
          (t.strokeStyle = o.borderColor),
          t.setLineDash(o.borderDash || []),
          (t.lineDashOffset = o.borderDashOffset || 0);
        const m = s.leftForLtr(u, l),
          b = s.leftForLtr(s.xPlus(u, 1), l - 2),
          y = dn(o.borderRadius);
        Object.values(y).some((_) => _ !== 0)
          ? (t.beginPath(),
            (t.fillStyle = r.multiKeyBackground),
            Hi(t, { x: m, y: p, w: l, h: c, radius: y }),
            t.fill(),
            t.stroke(),
            (t.fillStyle = o.backgroundColor),
            t.beginPath(),
            Hi(t, { x: b, y: p + 1, w: l - 2, h: c - 2, radius: y }),
            t.fill())
          : ((t.fillStyle = r.multiKeyBackground),
            t.fillRect(m, p, l, c),
            t.strokeRect(m, p, l, c),
            (t.fillStyle = o.backgroundColor),
            t.fillRect(b, p + 1, l - 2, c - 2));
      }
      t.fillStyle = this.labelTextColors[i];
    }
    drawBody(t, e, i) {
      const { body: s } = this,
        {
          bodySpacing: r,
          bodyAlign: o,
          displayColors: a,
          boxHeight: c,
          boxWidth: l,
          boxPadding: h,
        } = i,
        f = Et(i.bodyFont);
      let u = f.lineHeight,
        d = 0;
      const p = Ki(i.rtl, this.x, this.width),
        m = function (T) {
          e.fillText(T, p.x(t.x + d), t.y + u / 2), (t.y += u + r);
        },
        b = p.textAlign(o);
      let y, _, S, M, w, P, k;
      for (
        e.textAlign = o,
          e.textBaseline = 'middle',
          e.font = f.string,
          t.x = ri(this, b, i),
          e.fillStyle = i.bodyColor,
          J(this.beforeBody, m),
          d = a && b !== 'right' ? (o === 'center' ? l / 2 + h : l + 2 + h) : 0,
          M = 0,
          P = s.length;
        M < P;
        ++M
      ) {
        for (
          y = s[M],
            _ = this.labelTextColors[M],
            e.fillStyle = _,
            J(y.before, m),
            S = y.lines,
            a && S.length && (this._drawColorBox(e, t, M, p, i), (u = Math.max(f.lineHeight, c))),
            w = 0,
            k = S.length;
          w < k;
          ++w
        )
          m(S[w]), (u = f.lineHeight);
        J(y.after, m);
      }
      (d = 0), (u = f.lineHeight), J(this.afterBody, m), (t.y -= r);
    }
    drawFooter(t, e, i) {
      const s = this.footer,
        r = s.length;
      let o, a;
      if (r) {
        const c = Ki(i.rtl, this.x, this.width);
        for (
          t.x = ri(this, i.footerAlign, i),
            t.y += i.footerMarginTop,
            e.textAlign = c.textAlign(i.footerAlign),
            e.textBaseline = 'middle',
            o = Et(i.footerFont),
            e.fillStyle = i.footerColor,
            e.font = o.string,
            a = 0;
          a < r;
          ++a
        )
          e.fillText(s[a], c.x(t.x), t.y + o.lineHeight / 2),
            (t.y += o.lineHeight + i.footerSpacing);
      }
    }
    drawBackground(t, e, i, s) {
      const { xAlign: r, yAlign: o } = this,
        { x: a, y: c } = t,
        { width: l, height: h } = i,
        { topLeft: f, topRight: u, bottomLeft: d, bottomRight: p } = dn(s.cornerRadius);
      (e.fillStyle = s.backgroundColor),
        (e.strokeStyle = s.borderColor),
        (e.lineWidth = s.borderWidth),
        e.beginPath(),
        e.moveTo(a + f, c),
        o === 'top' && this.drawCaret(t, e, i, s),
        e.lineTo(a + l - u, c),
        e.quadraticCurveTo(a + l, c, a + l, c + u),
        o === 'center' && r === 'right' && this.drawCaret(t, e, i, s),
        e.lineTo(a + l, c + h - p),
        e.quadraticCurveTo(a + l, c + h, a + l - p, c + h),
        o === 'bottom' && this.drawCaret(t, e, i, s),
        e.lineTo(a + d, c + h),
        e.quadraticCurveTo(a, c + h, a, c + h - d),
        o === 'center' && r === 'left' && this.drawCaret(t, e, i, s),
        e.lineTo(a, c + f),
        e.quadraticCurveTo(a, c, a + f, c),
        e.closePath(),
        e.fill(),
        s.borderWidth > 0 && e.stroke();
    }
    _updateAnimationTarget(t) {
      const e = this.chart,
        i = this.$animations,
        s = i && i.x,
        r = i && i.y;
      if (s || r) {
        const o = Sn[t.position].call(this, this._active, this._eventPosition);
        if (!o) return;
        const a = (this._size = To(this, t)),
          c = Object.assign({}, o, this._size),
          l = Ro(e, t, c),
          h = Fo(t, c, l, e);
        (s._to !== h.x || r._to !== h.y) &&
          ((this.xAlign = l.xAlign),
          (this.yAlign = l.yAlign),
          (this.width = a.width),
          (this.height = a.height),
          (this.caretX = o.x),
          (this.caretY = o.y),
          this._resolveAnimations().update(this, h));
      }
    }
    _willRender() {
      return !!this.opacity;
    }
    draw(t) {
      const e = this.options.setContext(this.getContext());
      let i = this.opacity;
      if (!i) return;
      this._updateAnimationTarget(e);
      const s = { width: this.width, height: this.height },
        r = { x: this.x, y: this.y };
      i = Math.abs(i) < 0.001 ? 0 : i;
      const o = Lt(e.padding),
        a =
          this.title.length ||
          this.beforeBody.length ||
          this.body.length ||
          this.afterBody.length ||
          this.footer.length;
      e.enabled &&
        a &&
        (t.save(),
        (t.globalAlpha = i),
        this.drawBackground(r, t, s, e),
        bh(t, e.textDirection),
        (r.y += o.top),
        this.drawTitle(r, t, e),
        this.drawBody(r, t, e),
        this.drawFooter(r, t, e),
        yh(t, e.textDirection),
        t.restore());
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t, e) {
      const i = this._active,
        s = t.map(({ datasetIndex: a, index: c }) => {
          const l = this.chart.getDatasetMeta(a);
          if (!l) throw new Error('Cannot find a dataset at index ' + a);
          return { datasetIndex: a, element: l.data[c], index: c };
        }),
        r = !Nn(i, s),
        o = this._positionChanged(s, e);
      (r || o) &&
        ((this._active = s),
        (this._eventPosition = e),
        (this._ignoreReplayEvents = !0),
        this.update(!0));
    }
    handleEvent(t, e, i = !0) {
      if (e && this._ignoreReplayEvents) return !1;
      this._ignoreReplayEvents = !1;
      const s = this.options,
        r = this._active || [],
        o = this._getActiveElements(t, r, e, i),
        a = this._positionChanged(o, t),
        c = e || !Nn(o, r) || a;
      return (
        c &&
          ((this._active = o),
          (s.enabled || s.external) &&
            ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, e))),
        c
      );
    }
    _getActiveElements(t, e, i, s) {
      const r = this.options;
      if (t.type === 'mouseout') return [];
      if (!s) return e;
      const o = this.chart.getElementsAtEventForMode(t, r.mode, r, i);
      return r.reverse && o.reverse(), o;
    }
    _positionChanged(t, e) {
      const { caretX: i, caretY: s, options: r } = this,
        o = Sn[r.position].call(this, t, e);
      return o !== !1 && (i !== o.x || s !== o.y);
    }
  }
  L(rs, 'positioners', Sn);
  var mu = {
    id: 'tooltip',
    _element: rs,
    positioners: Sn,
    afterInit(n, t, e) {
      e && (n.tooltip = new rs({ chart: n, options: e }));
    },
    beforeUpdate(n, t, e) {
      n.tooltip && n.tooltip.initialize(e);
    },
    reset(n, t, e) {
      n.tooltip && n.tooltip.initialize(e);
    },
    afterDraw(n) {
      const t = n.tooltip;
      if (t && t._willRender()) {
        const e = { tooltip: t };
        if (n.notifyPlugins('beforeTooltipDraw', { ...e, cancelable: !0 }) === !1) return;
        t.draw(n.ctx), n.notifyPlugins('afterTooltipDraw', e);
      }
    },
    afterEvent(n, t) {
      if (n.tooltip) {
        const e = t.replay;
        n.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
      }
    },
    defaults: {
      enabled: !0,
      external: null,
      position: 'average',
      backgroundColor: 'rgba(0,0,0,0.8)',
      titleColor: '#fff',
      titleFont: { weight: 'bold' },
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleAlign: 'left',
      bodyColor: '#fff',
      bodySpacing: 2,
      bodyFont: {},
      bodyAlign: 'left',
      footerColor: '#fff',
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFont: { weight: 'bold' },
      footerAlign: 'left',
      padding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      boxHeight: (n, t) => t.bodyFont.size,
      boxWidth: (n, t) => t.bodyFont.size,
      multiKeyBackground: '#fff',
      displayColors: !0,
      boxPadding: 0,
      borderColor: 'rgba(0,0,0,0)',
      borderWidth: 0,
      animation: { duration: 400, easing: 'easeOutQuart' },
      animations: {
        numbers: { type: 'number', properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'] },
        opacity: { easing: 'linear', duration: 200 },
      },
      callbacks: No,
    },
    defaultRoutes: { bodyFont: 'font', footerFont: 'font', titleFont: 'font' },
    descriptors: {
      _scriptable: (n) => n !== 'filter' && n !== 'itemSort' && n !== 'external',
      _indexable: !1,
      callbacks: { _scriptable: !1, _indexable: !1 },
      animation: { _fallback: !1 },
      animations: { _fallback: 'animation' },
    },
    additionalOptionScopes: ['interaction'],
  };
  const bu = (n, t, e, i) => (
    typeof t == 'string'
      ? ((e = n.push(t) - 1), i.unshift({ index: e, label: t }))
      : isNaN(t) && (e = null),
    e
  );
  function yu(n, t, e, i) {
    const s = n.indexOf(t);
    if (s === -1) return bu(n, t, e, i);
    const r = n.lastIndexOf(t);
    return s !== r ? e : s;
  }
  const xu = (n, t) => (n === null ? null : Vt(Math.round(n), 0, t));
  function zo(n) {
    const t = this.getLabels();
    return n >= 0 && n < t.length ? t[n] : n;
  }
  class os extends Re {
    constructor(t) {
      super(t), (this._startValue = void 0), (this._valueRange = 0), (this._addedLabels = []);
    }
    init(t) {
      const e = this._addedLabels;
      if (e.length) {
        const i = this.getLabels();
        for (const { index: s, label: r } of e) i[s] === r && i.splice(s, 1);
        this._addedLabels = [];
      }
      super.init(t);
    }
    parse(t, e) {
      if (it(t)) return null;
      const i = this.getLabels();
      return (
        (e = isFinite(e) && i[e] === t ? e : yu(i, t, et(e, t), this._addedLabels)),
        xu(e, i.length - 1)
      );
    }
    determineDataLimits() {
      const { minDefined: t, maxDefined: e } = this.getUserBounds();
      let { min: i, max: s } = this.getMinMax(!0);
      this.options.bounds === 'ticks' && (t || (i = 0), e || (s = this.getLabels().length - 1)),
        (this.min = i),
        (this.max = s);
    }
    buildTicks() {
      const t = this.min,
        e = this.max,
        i = this.options.offset,
        s = [];
      let r = this.getLabels();
      (r = t === 0 && e === r.length - 1 ? r : r.slice(t, e + 1)),
        (this._valueRange = Math.max(r.length - (i ? 0 : 1), 1)),
        (this._startValue = this.min - (i ? 0.5 : 0));
      for (let o = t; o <= e; o++) s.push({ value: o });
      return s;
    }
    getLabelForValue(t) {
      return zo.call(this, t);
    }
    configure() {
      super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
    }
    getPixelForValue(t) {
      return (
        typeof t != 'number' && (t = this.parse(t)),
        t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
      );
    }
    getPixelForTick(t) {
      const e = this.ticks;
      return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
    }
    getValueForPixel(t) {
      return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
    }
    getBasePixel() {
      return this.bottom;
    }
  }
  L(os, 'id', 'category'), L(os, 'defaults', { ticks: { callback: zo } });
  function _u(n, t) {
    const e = [],
      {
        bounds: s,
        step: r,
        min: o,
        max: a,
        precision: c,
        count: l,
        maxTicks: h,
        maxDigits: f,
        includeBounds: u,
      } = n,
      d = r || 1,
      p = h - 1,
      { min: m, max: b } = t,
      y = !it(o),
      _ = !it(a),
      S = !it(l),
      M = (b - m) / (f + 1);
    let w = ur((b - m) / p / d) * d,
      P,
      k,
      T,
      B;
    if (w < 1e-14 && !y && !_) return [{ value: m }, { value: b }];
    (B = Math.ceil(b / w) - Math.floor(m / w)),
      B > p && (w = ur((B * w) / p / d) * d),
      it(c) || ((P = Math.pow(10, c)), (w = Math.ceil(w * P) / P)),
      s === 'ticks'
        ? ((k = Math.floor(m / w) * w), (T = Math.ceil(b / w) * w))
        : ((k = m), (T = b)),
      y && _ && r && hl((a - o) / r, w / 1e3)
        ? ((B = Math.round(Math.min((a - o) / w, h))), (w = (a - o) / B), (k = o), (T = a))
        : S
        ? ((k = y ? o : k), (T = _ ? a : T), (B = l - 1), (w = (T - k) / B))
        : ((B = (T - k) / w),
          an(B, Math.round(B), w / 1e3) ? (B = Math.round(B)) : (B = Math.ceil(B)));
    const st = Math.max(gr(w), gr(k));
    (P = Math.pow(10, it(c) ? st : c)), (k = Math.round(k * P) / P), (T = Math.round(T * P) / P);
    let rt = 0;
    for (
      y &&
      (u && k !== o
        ? (e.push({ value: o }),
          k < o && rt++,
          an(Math.round((k + rt * w) * P) / P, o, Bo(o, M, n)) && rt++)
        : k < o && rt++);
      rt < B;
      ++rt
    ) {
      const Y = Math.round((k + rt * w) * P) / P;
      if (_ && Y > a) break;
      e.push({ value: Y });
    }
    return (
      _ && u && T !== a
        ? e.length && an(e[e.length - 1].value, a, Bo(a, M, n))
          ? (e[e.length - 1].value = a)
          : e.push({ value: a })
        : (!_ || T === a) && e.push({ value: T }),
      e
    );
  }
  function Bo(n, t, { horizontal: e, minRotation: i }) {
    const s = xe(i),
      r = (e ? Math.sin(s) : Math.cos(s)) || 0.001,
      o = 0.75 * t * ('' + n).length;
    return Math.min(t / r, o);
  }
  class oi extends Re {
    constructor(t) {
      super(t),
        (this.start = void 0),
        (this.end = void 0),
        (this._startValue = void 0),
        (this._endValue = void 0),
        (this._valueRange = 0);
    }
    parse(t, e) {
      return it(t) || ((typeof t == 'number' || t instanceof Number) && !isFinite(+t)) ? null : +t;
    }
    handleTickRangeOptions() {
      const { beginAtZero: t } = this.options,
        { minDefined: e, maxDefined: i } = this.getUserBounds();
      let { min: s, max: r } = this;
      const o = (c) => (s = e ? s : c),
        a = (c) => (r = i ? r : c);
      if (t) {
        const c = ze(s),
          l = ze(r);
        c < 0 && l < 0 ? a(0) : c > 0 && l > 0 && o(0);
      }
      if (s === r) {
        let c = r === 0 ? 1 : Math.abs(r * 0.05);
        a(r + c), t || o(s - c);
      }
      (this.min = s), (this.max = r);
    }
    getTickLimit() {
      const t = this.options.ticks;
      let { maxTicksLimit: e, stepSize: i } = t,
        s;
      return (
        i
          ? ((s = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
            s > 1e3 &&
              (console.warn(
                `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`
              ),
              (s = 1e3)))
          : ((s = this.computeTickLimit()), (e = e || 11)),
        e && (s = Math.min(e, s)),
        s
      );
    }
    computeTickLimit() {
      return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
      const t = this.options,
        e = t.ticks;
      let i = this.getTickLimit();
      i = Math.max(2, i);
      const s = {
          maxTicks: i,
          bounds: t.bounds,
          min: t.min,
          max: t.max,
          precision: e.precision,
          step: e.stepSize,
          count: e.count,
          maxDigits: this._maxDigits(),
          horizontal: this.isHorizontal(),
          minRotation: e.minRotation || 0,
          includeBounds: e.includeBounds !== !1,
        },
        r = this._range || this,
        o = _u(s, r);
      return (
        t.bounds === 'ticks' && dr(o, this, 'value'),
        t.reverse
          ? (o.reverse(), (this.start = this.max), (this.end = this.min))
          : ((this.start = this.min), (this.end = this.max)),
        o
      );
    }
    configure() {
      const t = this.ticks;
      let e = this.min,
        i = this.max;
      if ((super.configure(), this.options.offset && t.length)) {
        const s = (i - e) / Math.max(t.length - 1, 1) / 2;
        (e -= s), (i += s);
      }
      (this._startValue = e), (this._endValue = i), (this._valueRange = i - e);
    }
    getLabelForValue(t) {
      return ji(t, this.chart.options.locale, this.options.ticks.format);
    }
  }
  class as extends oi {
    determineDataLimits() {
      const { min: t, max: e } = this.getMinMax(!0);
      (this.min = wt(t) ? t : 0), (this.max = wt(e) ? e : 1), this.handleTickRangeOptions();
    }
    computeTickLimit() {
      const t = this.isHorizontal(),
        e = t ? this.width : this.height,
        i = xe(this.options.ticks.minRotation),
        s = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
        r = this._resolveTickFontOptions(0);
      return Math.ceil(e / Math.min(40, r.lineHeight / s));
    }
    getPixelForValue(t) {
      return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
    }
    getValueForPixel(t) {
      return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
    }
  }
  L(as, 'id', 'linear'), L(as, 'defaults', { ticks: { callback: Wn.formatters.numeric } });
  const Cn = (n) => Math.floor(ye(n)),
    Fe = (n, t) => Math.pow(10, Cn(n) + t);
  function jo(n) {
    return n / Math.pow(10, Cn(n)) === 1;
  }
  function Vo(n, t, e) {
    const i = Math.pow(10, e),
      s = Math.floor(n / i);
    return Math.ceil(t / i) - s;
  }
  function vu(n, t) {
    const e = t - n;
    let i = Cn(e);
    for (; Vo(n, t, i) > 10; ) i++;
    for (; Vo(n, t, i) < 10; ) i--;
    return Math.min(i, Cn(n));
  }
  function wu(n, { min: t, max: e }) {
    t = Ft(n.min, t);
    const i = [],
      s = Cn(t);
    let r = vu(t, e),
      o = r < 0 ? Math.pow(10, Math.abs(r)) : 1;
    const a = Math.pow(10, r),
      c = s > r ? Math.pow(10, s) : 0,
      l = Math.round((t - c) * o) / o,
      h = Math.floor((t - c) / a / 10) * a * 10;
    let f = Math.floor((l - h) / Math.pow(10, r)),
      u = Ft(n.min, Math.round((c + h + f * Math.pow(10, r)) * o) / o);
    for (; u < e; )
      i.push({ value: u, major: jo(u), significand: f }),
        f >= 10 ? (f = f < 15 ? 15 : 20) : f++,
        f >= 20 && (r++, (f = 2), (o = r >= 0 ? 1 : o)),
        (u = Math.round((c + h + f * Math.pow(10, r)) * o) / o);
    const d = Ft(n.max, u);
    return i.push({ value: d, major: jo(d), significand: f }), i;
  }
  class $o extends Re {
    constructor(t) {
      super(t),
        (this.start = void 0),
        (this.end = void 0),
        (this._startValue = void 0),
        (this._valueRange = 0);
    }
    parse(t, e) {
      const i = oi.prototype.parse.apply(this, [t, e]);
      if (i === 0) {
        this._zero = !0;
        return;
      }
      return wt(i) && i > 0 ? i : null;
    }
    determineDataLimits() {
      const { min: t, max: e } = this.getMinMax(!0);
      (this.min = wt(t) ? Math.max(0, t) : null),
        (this.max = wt(e) ? Math.max(0, e) : null),
        this.options.beginAtZero && (this._zero = !0),
        this._zero &&
          this.min !== this._suggestedMin &&
          !wt(this._userMin) &&
          (this.min = t === Fe(this.min, 0) ? Fe(this.min, -1) : Fe(this.min, 0)),
        this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
      const { minDefined: t, maxDefined: e } = this.getUserBounds();
      let i = this.min,
        s = this.max;
      const r = (a) => (i = t ? i : a),
        o = (a) => (s = e ? s : a);
      i === s && (i <= 0 ? (r(1), o(10)) : (r(Fe(i, -1)), o(Fe(s, 1)))),
        i <= 0 && r(Fe(s, -1)),
        s <= 0 && o(Fe(i, 1)),
        (this.min = i),
        (this.max = s);
    }
    buildTicks() {
      const t = this.options,
        e = { min: this._userMin, max: this._userMax },
        i = wu(e, this);
      return (
        t.bounds === 'ticks' && dr(i, this, 'value'),
        t.reverse
          ? (i.reverse(), (this.start = this.max), (this.end = this.min))
          : ((this.start = this.min), (this.end = this.max)),
        i
      );
    }
    getLabelForValue(t) {
      return t === void 0 ? '0' : ji(t, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
      const t = this.min;
      super.configure(), (this._startValue = ye(t)), (this._valueRange = ye(this.max) - ye(t));
    }
    getPixelForValue(t) {
      return (
        (t === void 0 || t === 0) && (t = this.min),
        t === null || isNaN(t)
          ? NaN
          : this.getPixelForDecimal(
              t === this.min ? 0 : (ye(t) - this._startValue) / this._valueRange
            )
      );
    }
    getValueForPixel(t) {
      const e = this.getDecimalForPixel(t);
      return Math.pow(10, this._startValue + e * this._valueRange);
    }
  }
  L($o, 'id', 'logarithmic'),
    L($o, 'defaults', { ticks: { callback: Wn.formatters.logarithmic, major: { enabled: !0 } } });
  function cs(n) {
    const t = n.ticks;
    if (t.display && n.display) {
      const e = Lt(t.backdropPadding);
      return et(t.font && t.font.size, ft.font.size) + e.height;
    }
    return 0;
  }
  function ku(n, t, e) {
    return (e = lt(e) ? e : [e]), { w: Al(n, t.string, e), h: e.length * t.lineHeight };
  }
  function Wo(n, t, e, i, s) {
    return n === i || n === s
      ? { start: t - e / 2, end: t + e / 2 }
      : n < i || n > s
      ? { start: t - e, end: t }
      : { start: t, end: t + e };
  }
  function Su(n) {
    const t = {
        l: n.left + n._padding.left,
        r: n.right - n._padding.right,
        t: n.top + n._padding.top,
        b: n.bottom - n._padding.bottom,
      },
      e = Object.assign({}, t),
      i = [],
      s = [],
      r = n._pointLabels.length,
      o = n.options.pointLabels,
      a = o.centerPointLabels ? yt / r : 0;
    for (let c = 0; c < r; c++) {
      const l = o.setContext(n.getPointLabelContext(c));
      s[c] = l.padding;
      const h = n.getPointPosition(c, n.drawingArea + s[c], a),
        f = Et(l.font),
        u = ku(n.ctx, f, n._pointLabels[c]);
      i[c] = u;
      const d = Yt(n.getIndexAngle(c) + a),
        p = Math.round(Li(d)),
        m = Wo(p, h.x, u.w, 0, 180),
        b = Wo(p, h.y, u.h, 90, 270);
      Cu(e, t, d, m, b);
    }
    n.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b),
      (n._pointLabelItems = Ou(n, i, s));
  }
  function Cu(n, t, e, i, s) {
    const r = Math.abs(Math.sin(e)),
      o = Math.abs(Math.cos(e));
    let a = 0,
      c = 0;
    i.start < t.l
      ? ((a = (t.l - i.start) / r), (n.l = Math.min(n.l, t.l - a)))
      : i.end > t.r && ((a = (i.end - t.r) / r), (n.r = Math.max(n.r, t.r + a))),
      s.start < t.t
        ? ((c = (t.t - s.start) / o), (n.t = Math.min(n.t, t.t - c)))
        : s.end > t.b && ((c = (s.end - t.b) / o), (n.b = Math.max(n.b, t.b + c)));
  }
  function Eu(n, t, e) {
    const i = n.drawingArea,
      { extra: s, additionalAngle: r, padding: o, size: a } = e,
      c = n.getPointPosition(t, i + s + o, r),
      l = Math.round(Li(Yt(c.angle + Dt))),
      h = Au(c.y, a.h, l),
      f = Du(l),
      u = Pu(c.x, a.w, f);
    return {
      visible: !0,
      x: c.x,
      y: h,
      textAlign: f,
      left: u,
      top: h,
      right: u + a.w,
      bottom: h + a.h,
    };
  }
  function Mu(n, t) {
    if (!t) return !0;
    const { left: e, top: i, right: s, bottom: r } = n;
    return !(
      oe({ x: e, y: i }, t) ||
      oe({ x: e, y: r }, t) ||
      oe({ x: s, y: i }, t) ||
      oe({ x: s, y: r }, t)
    );
  }
  function Ou(n, t, e) {
    const i = [],
      s = n._pointLabels.length,
      r = n.options,
      { centerPointLabels: o, display: a } = r.pointLabels,
      c = { extra: cs(r) / 2, additionalAngle: o ? yt / s : 0 };
    let l;
    for (let h = 0; h < s; h++) {
      (c.padding = e[h]), (c.size = t[h]);
      const f = Eu(n, h, c);
      i.push(f), a === 'auto' && ((f.visible = Mu(f, l)), f.visible && (l = f));
    }
    return i;
  }
  function Du(n) {
    return n === 0 || n === 180 ? 'center' : n < 180 ? 'left' : 'right';
  }
  function Pu(n, t, e) {
    return e === 'right' ? (n -= t) : e === 'center' && (n -= t / 2), n;
  }
  function Au(n, t, e) {
    return e === 90 || e === 270 ? (n -= t / 2) : (e > 270 || e < 90) && (n -= t), n;
  }
  function Tu(n, t, e) {
    const { left: i, top: s, right: r, bottom: o } = e,
      { backdropColor: a } = t;
    if (!it(a)) {
      const c = dn(t.borderRadius),
        l = Lt(t.backdropPadding);
      n.fillStyle = a;
      const h = i - l.left,
        f = s - l.top,
        u = r - i + l.width,
        d = o - s + l.height;
      Object.values(c).some((p) => p !== 0)
        ? (n.beginPath(), Hi(n, { x: h, y: f, w: u, h: d, radius: c }), n.fill())
        : n.fillRect(h, f, u, d);
    }
  }
  function Ru(n, t) {
    const {
      ctx: e,
      options: { pointLabels: i },
    } = n;
    for (let s = t - 1; s >= 0; s--) {
      const r = n._pointLabelItems[s];
      if (!r.visible) continue;
      const o = i.setContext(n.getPointLabelContext(s));
      Tu(e, o, r);
      const a = Et(o.font),
        { x: c, y: l, textAlign: h } = r;
      un(e, n._pointLabels[s], c, l + a.lineHeight / 2, a, {
        color: o.color,
        textAlign: h,
        textBaseline: 'middle',
      });
    }
  }
  function Ho(n, t, e, i) {
    const { ctx: s } = n;
    if (e) s.arc(n.xCenter, n.yCenter, t, 0, jt);
    else {
      let r = n.getPointPosition(0, t);
      s.moveTo(r.x, r.y);
      for (let o = 1; o < i; o++) (r = n.getPointPosition(o, t)), s.lineTo(r.x, r.y);
    }
  }
  function Fu(n, t, e, i, s) {
    const r = n.ctx,
      o = t.circular,
      { color: a, lineWidth: c } = t;
    (!o && !i) ||
      !a ||
      !c ||
      e < 0 ||
      (r.save(),
      (r.strokeStyle = a),
      (r.lineWidth = c),
      r.setLineDash(s.dash),
      (r.lineDashOffset = s.dashOffset),
      r.beginPath(),
      Ho(n, e, o, i),
      r.closePath(),
      r.stroke(),
      r.restore());
  }
  function Lu(n, t, e) {
    return _e(n, { label: e, index: t, type: 'pointLabel' });
  }
  class ai extends oi {
    constructor(t) {
      super(t),
        (this.xCenter = void 0),
        (this.yCenter = void 0),
        (this.drawingArea = void 0),
        (this._pointLabels = []),
        (this._pointLabelItems = []);
    }
    setDimensions() {
      const t = (this._padding = Lt(cs(this.options) / 2)),
        e = (this.width = this.maxWidth - t.width),
        i = (this.height = this.maxHeight - t.height);
      (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
        (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
        (this.drawingArea = Math.floor(Math.min(e, i) / 2));
    }
    determineDataLimits() {
      const { min: t, max: e } = this.getMinMax(!1);
      (this.min = wt(t) && !isNaN(t) ? t : 0),
        (this.max = wt(e) && !isNaN(e) ? e : 0),
        this.handleTickRangeOptions();
    }
    computeTickLimit() {
      return Math.ceil(this.drawingArea / cs(this.options));
    }
    generateTickLabels(t) {
      oi.prototype.generateTickLabels.call(this, t),
        (this._pointLabels = this.getLabels()
          .map((e, i) => {
            const s = ht(this.options.pointLabels.callback, [e, i], this);
            return s || s === 0 ? s : '';
          })
          .filter((e, i) => this.chart.getDataVisibility(i)));
    }
    fit() {
      const t = this.options;
      t.display && t.pointLabels.display ? Su(this) : this.setCenterPoint(0, 0, 0, 0);
    }
    setCenterPoint(t, e, i, s) {
      (this.xCenter += Math.floor((t - e) / 2)),
        (this.yCenter += Math.floor((i - s) / 2)),
        (this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, s)));
    }
    getIndexAngle(t) {
      const e = jt / (this._pointLabels.length || 1),
        i = this.options.startAngle || 0;
      return Yt(t * e + xe(i));
    }
    getDistanceFromCenterForValue(t) {
      if (it(t)) return NaN;
      const e = this.drawingArea / (this.max - this.min);
      return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
    }
    getValueForDistanceFromCenter(t) {
      if (it(t)) return NaN;
      const e = t / (this.drawingArea / (this.max - this.min));
      return this.options.reverse ? this.max - e : this.min + e;
    }
    getPointLabelContext(t) {
      const e = this._pointLabels || [];
      if (t >= 0 && t < e.length) {
        const i = e[t];
        return Lu(this.getContext(), t, i);
      }
    }
    getPointPosition(t, e, i = 0) {
      const s = this.getIndexAngle(t) - Dt + i;
      return { x: Math.cos(s) * e + this.xCenter, y: Math.sin(s) * e + this.yCenter, angle: s };
    }
    getPointPositionForValue(t, e) {
      return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
    }
    getBasePosition(t) {
      return this.getPointPositionForValue(t || 0, this.getBaseValue());
    }
    getPointLabelPosition(t) {
      const { left: e, top: i, right: s, bottom: r } = this._pointLabelItems[t];
      return { left: e, top: i, right: s, bottom: r };
    }
    drawBackground() {
      const {
        backgroundColor: t,
        grid: { circular: e },
      } = this.options;
      if (t) {
        const i = this.ctx;
        i.save(),
          i.beginPath(),
          Ho(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length),
          i.closePath(),
          (i.fillStyle = t),
          i.fill(),
          i.restore();
      }
    }
    drawGrid() {
      const t = this.ctx,
        e = this.options,
        { angleLines: i, grid: s, border: r } = e,
        o = this._pointLabels.length;
      let a, c, l;
      if (
        (e.pointLabels.display && Ru(this, o),
        s.display &&
          this.ticks.forEach((h, f) => {
            if (f !== 0) {
              c = this.getDistanceFromCenterForValue(h.value);
              const u = this.getContext(f),
                d = s.setContext(u),
                p = r.setContext(u);
              Fu(this, d, c, o, p);
            }
          }),
        i.display)
      ) {
        for (t.save(), a = o - 1; a >= 0; a--) {
          const h = i.setContext(this.getPointLabelContext(a)),
            { color: f, lineWidth: u } = h;
          !u ||
            !f ||
            ((t.lineWidth = u),
            (t.strokeStyle = f),
            t.setLineDash(h.borderDash),
            (t.lineDashOffset = h.borderDashOffset),
            (c = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max)),
            (l = this.getPointPosition(a, c)),
            t.beginPath(),
            t.moveTo(this.xCenter, this.yCenter),
            t.lineTo(l.x, l.y),
            t.stroke());
        }
        t.restore();
      }
    }
    drawBorder() {}
    drawLabels() {
      const t = this.ctx,
        e = this.options,
        i = e.ticks;
      if (!i.display) return;
      const s = this.getIndexAngle(0);
      let r, o;
      t.save(),
        t.translate(this.xCenter, this.yCenter),
        t.rotate(s),
        (t.textAlign = 'center'),
        (t.textBaseline = 'middle'),
        this.ticks.forEach((a, c) => {
          if (c === 0 && !e.reverse) return;
          const l = i.setContext(this.getContext(c)),
            h = Et(l.font);
          if (
            ((r = this.getDistanceFromCenterForValue(this.ticks[c].value)), l.showLabelBackdrop)
          ) {
            (t.font = h.string),
              (o = t.measureText(a.label).width),
              (t.fillStyle = l.backdropColor);
            const f = Lt(l.backdropPadding);
            t.fillRect(-o / 2 - f.left, -r - h.size / 2 - f.top, o + f.width, h.size + f.height);
          }
          un(t, a.label, 0, -r, h, { color: l.color });
        }),
        t.restore();
    }
    drawTitle() {}
  }
  L(ai, 'id', 'radialLinear'),
    L(ai, 'defaults', {
      display: !0,
      animate: !0,
      position: 'chartArea',
      angleLines: { display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0 },
      grid: { circular: !1 },
      startAngle: 0,
      ticks: { showLabelBackdrop: !0, callback: Wn.formatters.numeric },
      pointLabels: {
        backdropColor: void 0,
        backdropPadding: 2,
        display: !0,
        font: { size: 10 },
        callback(t) {
          return t;
        },
        padding: 5,
        centerPointLabels: !1,
      },
    }),
    L(ai, 'defaultRoutes', {
      'angleLines.color': 'borderColor',
      'pointLabels.color': 'color',
      'ticks.color': 'color',
    }),
    L(ai, 'descriptors', { angleLines: { _fallback: 'grid' } });
  const ci = {
      millisecond: { common: !0, size: 1, steps: 1e3 },
      second: { common: !0, size: 1e3, steps: 60 },
      minute: { common: !0, size: 6e4, steps: 60 },
      hour: { common: !0, size: 36e5, steps: 24 },
      day: { common: !0, size: 864e5, steps: 30 },
      week: { common: !1, size: 6048e5, steps: 4 },
      month: { common: !0, size: 2628e6, steps: 12 },
      quarter: { common: !1, size: 7884e6, steps: 4 },
      year: { common: !0, size: 3154e7 },
    },
    At = Object.keys(ci);
  function Iu(n, t) {
    return n - t;
  }
  function Yo(n, t) {
    if (it(t)) return null;
    const e = n._adapter,
      { parser: i, round: s, isoWeekday: r } = n._parseOpts;
    let o = t;
    return (
      typeof i == 'function' && (o = i(o)),
      wt(o) || (o = typeof i == 'string' ? e.parse(o, i) : e.parse(o)),
      o === null
        ? null
        : (s &&
            (o =
              s === 'week' && (cn(r) || r === !0) ? e.startOf(o, 'isoWeek', r) : e.startOf(o, s)),
          +o)
    );
  }
  function Uo(n, t, e, i) {
    const s = At.length;
    for (let r = At.indexOf(n); r < s - 1; ++r) {
      const o = ci[At[r]],
        a = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
      if (o.common && Math.ceil((e - t) / (a * o.size)) <= i) return At[r];
    }
    return At[s - 1];
  }
  function Nu(n, t, e, i, s) {
    for (let r = At.length - 1; r >= At.indexOf(e); r--) {
      const o = At[r];
      if (ci[o].common && n._adapter.diff(s, i, o) >= t - 1) return o;
    }
    return At[e ? At.indexOf(e) : 0];
  }
  function zu(n) {
    for (let t = At.indexOf(n) + 1, e = At.length; t < e; ++t) if (ci[At[t]].common) return At[t];
  }
  function Xo(n, t, e) {
    if (!e) n[t] = !0;
    else if (e.length) {
      const { lo: i, hi: s } = Ni(e, t),
        r = e[i] >= t ? e[i] : e[s];
      n[r] = !0;
    }
  }
  function Bu(n, t, e, i) {
    const s = n._adapter,
      r = +s.startOf(t[0].value, i),
      o = t[t.length - 1].value;
    let a, c;
    for (a = r; a <= o; a = +s.add(a, 1, i)) (c = e[a]), c >= 0 && (t[c].major = !0);
    return t;
  }
  function Go(n, t, e) {
    const i = [],
      s = {},
      r = t.length;
    let o, a;
    for (o = 0; o < r; ++o) (a = t[o]), (s[a] = o), i.push({ value: a, major: !1 });
    return r === 0 || !e ? i : Bu(n, i, s, e);
  }
  class li extends Re {
    constructor(t) {
      super(t),
        (this._cache = { data: [], labels: [], all: [] }),
        (this._unit = 'day'),
        (this._majorUnit = void 0),
        (this._offsets = {}),
        (this._normalized = !1),
        (this._parseOpts = void 0);
    }
    init(t, e = {}) {
      const i = t.time || (t.time = {}),
        s = (this._adapter = new Vh._date(t.adapters.date));
      s.init(e),
        on(i.displayFormats, s.formats()),
        (this._parseOpts = { parser: i.parser, round: i.round, isoWeekday: i.isoWeekday }),
        super.init(t),
        (this._normalized = e.normalized);
    }
    parse(t, e) {
      return t === void 0 ? null : Yo(this, t);
    }
    beforeLayout() {
      super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
    }
    determineDataLimits() {
      const t = this.options,
        e = this._adapter,
        i = t.time.unit || 'day';
      let { min: s, max: r, minDefined: o, maxDefined: a } = this.getUserBounds();
      function c(l) {
        !o && !isNaN(l.min) && (s = Math.min(s, l.min)),
          !a && !isNaN(l.max) && (r = Math.max(r, l.max));
      }
      (!o || !a) &&
        (c(this._getLabelBounds()),
        (t.bounds !== 'ticks' || t.ticks.source !== 'labels') && c(this.getMinMax(!1))),
        (s = wt(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i)),
        (r = wt(r) && !isNaN(r) ? r : +e.endOf(Date.now(), i) + 1),
        (this.min = Math.min(s, r - 1)),
        (this.max = Math.max(s + 1, r));
    }
    _getLabelBounds() {
      const t = this.getLabelTimestamps();
      let e = Number.POSITIVE_INFINITY,
        i = Number.NEGATIVE_INFINITY;
      return t.length && ((e = t[0]), (i = t[t.length - 1])), { min: e, max: i };
    }
    buildTicks() {
      const t = this.options,
        e = t.time,
        i = t.ticks,
        s = i.source === 'labels' ? this.getLabelTimestamps() : this._generate();
      t.bounds === 'ticks' &&
        s.length &&
        ((this.min = this._userMin || s[0]), (this.max = this._userMax || s[s.length - 1]));
      const r = this.min,
        o = this.max,
        a = ml(s, r, o);
      return (
        (this._unit =
          e.unit ||
          (i.autoSkip
            ? Uo(e.minUnit, this.min, this.max, this._getLabelCapacity(r))
            : Nu(this, a.length, e.minUnit, this.min, this.max))),
        (this._majorUnit = !i.major.enabled || this._unit === 'year' ? void 0 : zu(this._unit)),
        this.initOffsets(s),
        t.reverse && a.reverse(),
        Go(this, a, this._majorUnit)
      );
    }
    afterAutoSkip() {
      this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
    }
    initOffsets(t = []) {
      let e = 0,
        i = 0,
        s,
        r;
      this.options.offset &&
        t.length &&
        ((s = this.getDecimalForValue(t[0])),
        t.length === 1 ? (e = 1 - s) : (e = (this.getDecimalForValue(t[1]) - s) / 2),
        (r = this.getDecimalForValue(t[t.length - 1])),
        t.length === 1 ? (i = r) : (i = (r - this.getDecimalForValue(t[t.length - 2])) / 2));
      const o = t.length < 3 ? 0.5 : 0.25;
      (e = Vt(e, 0, o)),
        (i = Vt(i, 0, o)),
        (this._offsets = { start: e, end: i, factor: 1 / (e + 1 + i) });
    }
    _generate() {
      const t = this._adapter,
        e = this.min,
        i = this.max,
        s = this.options,
        r = s.time,
        o = r.unit || Uo(r.minUnit, e, i, this._getLabelCapacity(e)),
        a = et(s.ticks.stepSize, 1),
        c = o === 'week' ? r.isoWeekday : !1,
        l = cn(c) || c === !0,
        h = {};
      let f = e,
        u,
        d;
      if (
        (l && (f = +t.startOf(f, 'isoWeek', c)),
        (f = +t.startOf(f, l ? 'day' : o)),
        t.diff(i, e, o) > 1e5 * a)
      )
        throw new Error(e + ' and ' + i + ' are too far apart with stepSize of ' + a + ' ' + o);
      const p = s.ticks.source === 'data' && this.getDataTimestamps();
      for (u = f, d = 0; u < i; u = +t.add(u, a, o), d++) Xo(h, u, p);
      return (
        (u === i || s.bounds === 'ticks' || d === 1) && Xo(h, u, p),
        Object.keys(h)
          .sort((m, b) => m - b)
          .map((m) => +m)
      );
    }
    getLabelForValue(t) {
      const e = this._adapter,
        i = this.options.time;
      return i.tooltipFormat
        ? e.format(t, i.tooltipFormat)
        : e.format(t, i.displayFormats.datetime);
    }
    format(t, e) {
      const s = this.options.time.displayFormats,
        r = this._unit,
        o = e || s[r];
      return this._adapter.format(t, o);
    }
    _tickFormatFunction(t, e, i, s) {
      const r = this.options,
        o = r.ticks.callback;
      if (o) return ht(o, [t, e, i], this);
      const a = r.time.displayFormats,
        c = this._unit,
        l = this._majorUnit,
        h = c && a[c],
        f = l && a[l],
        u = i[e],
        d = l && f && u && u.major;
      return this._adapter.format(t, s || (d ? f : h));
    }
    generateTickLabels(t) {
      let e, i, s;
      for (e = 0, i = t.length; e < i; ++e)
        (s = t[e]), (s.label = this._tickFormatFunction(s.value, e, t));
    }
    getDecimalForValue(t) {
      return t === null ? NaN : (t - this.min) / (this.max - this.min);
    }
    getPixelForValue(t) {
      const e = this._offsets,
        i = this.getDecimalForValue(t);
      return this.getPixelForDecimal((e.start + i) * e.factor);
    }
    getValueForPixel(t) {
      const e = this._offsets,
        i = this.getDecimalForPixel(t) / e.factor - e.end;
      return this.min + i * (this.max - this.min);
    }
    _getLabelSize(t) {
      const e = this.options.ticks,
        i = this.ctx.measureText(t).width,
        s = xe(this.isHorizontal() ? e.maxRotation : e.minRotation),
        r = Math.cos(s),
        o = Math.sin(s),
        a = this._resolveTickFontOptions(0).size;
      return { w: i * r + a * o, h: i * o + a * r };
    }
    _getLabelCapacity(t) {
      const e = this.options.time,
        i = e.displayFormats,
        s = i[e.unit] || i.millisecond,
        r = this._tickFormatFunction(t, 0, Go(this, [t], this._majorUnit), s),
        o = this._getLabelSize(r),
        a = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1;
      return a > 0 ? a : 1;
    }
    getDataTimestamps() {
      let t = this._cache.data || [],
        e,
        i;
      if (t.length) return t;
      const s = this.getMatchingVisibleMetas();
      if (this._normalized && s.length)
        return (this._cache.data = s[0].controller.getAllParsedValues(this));
      for (e = 0, i = s.length; e < i; ++e) t = t.concat(s[e].controller.getAllParsedValues(this));
      return (this._cache.data = this.normalize(t));
    }
    getLabelTimestamps() {
      const t = this._cache.labels || [];
      let e, i;
      if (t.length) return t;
      const s = this.getLabels();
      for (e = 0, i = s.length; e < i; ++e) t.push(Yo(this, s[e]));
      return (this._cache.labels = this._normalized ? t : this.normalize(t));
    }
    normalize(t) {
      return yl(t.sort(Iu));
    }
  }
  L(li, 'id', 'time'),
    L(li, 'defaults', {
      bounds: 'data',
      adapters: {},
      time: {
        parser: !1,
        unit: !1,
        round: !1,
        isoWeekday: !1,
        minUnit: 'millisecond',
        displayFormats: {},
      },
      ticks: { source: 'auto', callback: !1, major: { enabled: !1 } },
    });
  function hi(n, t, e) {
    let i = 0,
      s = n.length - 1,
      r,
      o,
      a,
      c;
    e
      ? (t >= n[i].pos && t <= n[s].pos && ({ lo: i, hi: s } = Ee(n, 'pos', t)),
        ({ pos: r, time: a } = n[i]),
        ({ pos: o, time: c } = n[s]))
      : (t >= n[i].time && t <= n[s].time && ({ lo: i, hi: s } = Ee(n, 'time', t)),
        ({ time: r, pos: a } = n[i]),
        ({ time: o, pos: c } = n[s]));
    const l = o - r;
    return l ? a + ((c - a) * (t - r)) / l : a;
  }
  class Ko extends li {
    constructor(t) {
      super(t), (this._table = []), (this._minPos = void 0), (this._tableRange = void 0);
    }
    initOffsets() {
      const t = this._getTimestampsForTable(),
        e = (this._table = this.buildLookupTable(t));
      (this._minPos = hi(e, this.min)),
        (this._tableRange = hi(e, this.max) - this._minPos),
        super.initOffsets(t);
    }
    buildLookupTable(t) {
      const { min: e, max: i } = this,
        s = [],
        r = [];
      let o, a, c, l, h;
      for (o = 0, a = t.length; o < a; ++o) (l = t[o]), l >= e && l <= i && s.push(l);
      if (s.length < 2)
        return [
          { time: e, pos: 0 },
          { time: i, pos: 1 },
        ];
      for (o = 0, a = s.length; o < a; ++o)
        (h = s[o + 1]),
          (c = s[o - 1]),
          (l = s[o]),
          Math.round((h + c) / 2) !== l && r.push({ time: l, pos: o / (a - 1) });
      return r;
    }
    _getTimestampsForTable() {
      let t = this._cache.all || [];
      if (t.length) return t;
      const e = this.getDataTimestamps(),
        i = this.getLabelTimestamps();
      return (
        e.length && i.length ? (t = this.normalize(e.concat(i))) : (t = e.length ? e : i),
        (t = this._cache.all = t),
        t
      );
    }
    getDecimalForValue(t) {
      return (hi(this._table, t) - this._minPos) / this._tableRange;
    }
    getValueForPixel(t) {
      const e = this._offsets,
        i = this.getDecimalForPixel(t) / e.factor - e.end;
      return hi(this._table, i * this._tableRange + this._minPos, !0);
    }
  }
  L(Ko, 'id', 'timeseries'), L(Ko, 'defaults', li.defaults);
  const qo = 'label';
  function Zo(n, t) {
    typeof n == 'function' ? n(t) : n && (n.current = t);
  }
  function ju(n, t) {
    const e = n.options;
    e && t && Object.assign(e, t);
  }
  function Qo(n, t) {
    n.labels = t;
  }
  function Jo(n, t) {
    let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : qo;
    const i = [];
    n.datasets = t.map((s) => {
      const r = n.datasets.find((o) => o[e] === s[e]);
      return !r || !s.data || i.includes(r) ? { ...s } : (i.push(r), Object.assign(r, s), r);
    });
  }
  function Vu(n) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qo;
    const e = { labels: [], datasets: [] };
    return Qo(e, n.labels), Jo(e, n.datasets, t), e;
  }
  function $u(n, t) {
    const {
        height: e = 150,
        width: i = 300,
        redraw: s = !1,
        datasetIdKey: r,
        type: o,
        data: a,
        options: c,
        plugins: l = [],
        fallbackContent: h,
        updateMode: f,
        ...u
      } = n,
      d = N.useRef(null),
      p = N.useRef(),
      m = () => {
        d.current &&
          ((p.current = new ce(d.current, {
            type: o,
            data: Vu(a, r),
            options: c && { ...c },
            plugins: l,
          })),
          Zo(t, p.current));
      },
      b = () => {
        Zo(t, null), p.current && (p.current.destroy(), (p.current = null));
      };
    return (
      N.useEffect(() => {
        !s && p.current && c && ju(p.current, c);
      }, [s, c]),
      N.useEffect(() => {
        !s && p.current && Qo(p.current.config.data, a.labels);
      }, [s, a.labels]),
      N.useEffect(() => {
        !s && p.current && a.datasets && Jo(p.current.config.data, a.datasets, r);
      }, [s, a.datasets]),
      N.useEffect(() => {
        p.current && (s ? (b(), setTimeout(m)) : p.current.update(f));
      }, [s, c, a.labels, a.datasets, f]),
      N.useEffect(() => {
        p.current && (b(), setTimeout(m));
      }, [o]),
      N.useEffect(() => (m(), () => b()), []),
      N.createElement('canvas', Object.assign({ ref: d, role: 'img', height: e, width: i }, u), h)
    );
  }
  const Wu = N.forwardRef($u);
  function Hu(n, t) {
    return (
      ce.register(t),
      N.forwardRef((e, i) => N.createElement(Wu, Object.assign({}, e, { ref: i, type: n })))
    );
  }
  const Yu = Hu('line', qn),
    Uu = (n) => 16 * n,
    ls = ((n) => (t) => {
      const e = t.split(`${n}`)[0],
        i = Number(e);
      return n === 'rem' ? Uu(i) : i;
    })('rem');
  function Xu(n) {
    if (n.sheet) return n.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
      if (document.styleSheets[t].ownerNode === n) return document.styleSheets[t];
  }
  function Gu(n) {
    var t = document.createElement('style');
    return (
      t.setAttribute('data-emotion', n.key),
      n.nonce !== void 0 && t.setAttribute('nonce', n.nonce),
      t.appendChild(document.createTextNode('')),
      t.setAttribute('data-s', ''),
      t
    );
  }
  var Ku = (function () {
      function n(e) {
        var i = this;
        (this._insertTag = function (s) {
          var r;
          i.tags.length === 0
            ? i.insertionPoint
              ? (r = i.insertionPoint.nextSibling)
              : i.prepend
              ? (r = i.container.firstChild)
              : (r = i.before)
            : (r = i.tags[i.tags.length - 1].nextSibling),
            i.container.insertBefore(s, r),
            i.tags.push(s);
        }),
          (this.isSpeedy = e.speedy === void 0 ? process.env.NODE_ENV === 'production' : e.speedy),
          (this.tags = []),
          (this.ctr = 0),
          (this.nonce = e.nonce),
          (this.key = e.key),
          (this.container = e.container),
          (this.prepend = e.prepend),
          (this.insertionPoint = e.insertionPoint),
          (this.before = null);
      }
      var t = n.prototype;
      return (
        (t.hydrate = function (i) {
          i.forEach(this._insertTag);
        }),
        (t.insert = function (i) {
          this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Gu(this));
          var s = this.tags[this.tags.length - 1];
          if (process.env.NODE_ENV !== 'production') {
            var r = i.charCodeAt(0) === 64 && i.charCodeAt(1) === 105;
            r &&
              this._alreadyInsertedOrderInsensitiveRule &&
              console.error(
                `You're attempting to insert the following rule:
` +
                  i +
                  '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.'
              ),
              (this._alreadyInsertedOrderInsensitiveRule =
                this._alreadyInsertedOrderInsensitiveRule || !r);
          }
          if (this.isSpeedy) {
            var o = Xu(s);
            try {
              o.insertRule(i, o.cssRules.length);
            } catch (a) {
              process.env.NODE_ENV !== 'production' &&
                !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(
                  i
                ) &&
                console.error('There was a problem inserting the following rule: "' + i + '"', a);
            }
          } else s.appendChild(document.createTextNode(i));
          this.ctr++;
        }),
        (t.flush = function () {
          this.tags.forEach(function (i) {
            return i.parentNode && i.parentNode.removeChild(i);
          }),
            (this.tags = []),
            (this.ctr = 0),
            process.env.NODE_ENV !== 'production' &&
              (this._alreadyInsertedOrderInsensitiveRule = !1);
        }),
        n
      );
    })(),
    Ct = '-ms-',
    fi = '-moz-',
    G = '-webkit-',
    hs = 'comm',
    fs = 'rule',
    us = 'decl',
    qu = '@import',
    ta = '@keyframes',
    Zu = '@layer',
    Qu = Math.abs,
    ui = String.fromCharCode,
    Ju = Object.assign;
  function td(n, t) {
    return kt(n, 0) ^ 45
      ? (((((((t << 2) ^ kt(n, 0)) << 2) ^ kt(n, 1)) << 2) ^ kt(n, 2)) << 2) ^ kt(n, 3)
      : 0;
  }
  function ea(n) {
    return n.trim();
  }
  function ed(n, t) {
    return (n = t.exec(n)) ? n[0] : n;
  }
  function K(n, t, e) {
    return n.replace(t, e);
  }
  function ds(n, t) {
    return n.indexOf(t);
  }
  function kt(n, t) {
    return n.charCodeAt(t) | 0;
  }
  function En(n, t, e) {
    return n.slice(t, e);
  }
  function Jt(n) {
    return n.length;
  }
  function gs(n) {
    return n.length;
  }
  function di(n, t) {
    return t.push(n), n;
  }
  function nd(n, t) {
    return n.map(t).join('');
  }
  var gi = 1,
    Ve = 1,
    na = 0,
    Tt = 0,
    pt = 0,
    $e = '';
  function pi(n, t, e, i, s, r, o) {
    return {
      value: n,
      root: t,
      parent: e,
      type: i,
      props: s,
      children: r,
      line: gi,
      column: Ve,
      length: o,
      return: '',
    };
  }
  function Mn(n, t) {
    return Ju(pi('', null, null, '', null, null, 0), n, { length: -n.length }, t);
  }
  function id() {
    return pt;
  }
  function sd() {
    return (pt = Tt > 0 ? kt($e, --Tt) : 0), Ve--, pt === 10 && ((Ve = 1), gi--), pt;
  }
  function It() {
    return (pt = Tt < na ? kt($e, Tt++) : 0), Ve++, pt === 10 && ((Ve = 1), gi++), pt;
  }
  function te() {
    return kt($e, Tt);
  }
  function mi() {
    return Tt;
  }
  function On(n, t) {
    return En($e, n, t);
  }
  function Dn(n) {
    switch (n) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function ia(n) {
    return (gi = Ve = 1), (na = Jt(($e = n))), (Tt = 0), [];
  }
  function sa(n) {
    return ($e = ''), n;
  }
  function bi(n) {
    return ea(On(Tt - 1, ps(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
  }
  function rd(n) {
    for (; (pt = te()) && pt < 33; ) It();
    return Dn(n) > 2 || Dn(pt) > 3 ? '' : ' ';
  }
  function od(n, t) {
    for (; --t && It() && !(pt < 48 || pt > 102 || (pt > 57 && pt < 65) || (pt > 70 && pt < 97)); );
    return On(n, mi() + (t < 6 && te() == 32 && It() == 32));
  }
  function ps(n) {
    for (; It(); )
      switch (pt) {
        case n:
          return Tt;
        case 34:
        case 39:
          n !== 34 && n !== 39 && ps(pt);
          break;
        case 40:
          n === 41 && ps(n);
          break;
        case 92:
          It();
          break;
      }
    return Tt;
  }
  function ad(n, t) {
    for (; It() && n + pt !== 47 + 10; ) if (n + pt === 42 + 42 && te() === 47) break;
    return '/*' + On(t, Tt - 1) + '*' + ui(n === 47 ? n : It());
  }
  function cd(n) {
    for (; !Dn(te()); ) It();
    return On(n, Tt);
  }
  function ld(n) {
    return sa(yi('', null, null, null, [''], (n = ia(n)), 0, [0], n));
  }
  function yi(n, t, e, i, s, r, o, a, c) {
    for (
      var l = 0,
        h = 0,
        f = o,
        u = 0,
        d = 0,
        p = 0,
        m = 1,
        b = 1,
        y = 1,
        _ = 0,
        S = '',
        M = s,
        w = r,
        P = i,
        k = S;
      b;

    )
      switch (((p = _), (_ = It()))) {
        case 40:
          if (p != 108 && kt(k, f - 1) == 58) {
            ds((k += K(bi(_), '&', '&\f')), '&\f') != -1 && (y = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          k += bi(_);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          k += rd(p);
          break;
        case 92:
          k += od(mi() - 1, 7);
          continue;
        case 47:
          switch (te()) {
            case 42:
            case 47:
              di(hd(ad(It(), mi()), t, e), c);
              break;
            default:
              k += '/';
          }
          break;
        case 123 * m:
          a[l++] = Jt(k) * y;
        case 125 * m:
        case 59:
        case 0:
          switch (_) {
            case 0:
            case 125:
              b = 0;
            case 59 + h:
              y == -1 && (k = K(k, /\f/g, '')),
                d > 0 &&
                  Jt(k) - f &&
                  di(d > 32 ? oa(k + ';', i, e, f - 1) : oa(K(k, ' ', '') + ';', i, e, f - 2), c);
              break;
            case 59:
              k += ';';
            default:
              if ((di((P = ra(k, t, e, l, h, s, a, S, (M = []), (w = []), f)), r), _ === 123))
                if (h === 0) yi(k, t, P, P, M, r, f, a, w);
                else
                  switch (u === 99 && kt(k, 3) === 110 ? 100 : u) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      yi(
                        n,
                        P,
                        P,
                        i && di(ra(n, P, P, 0, 0, s, a, S, s, (M = []), f), w),
                        s,
                        w,
                        f,
                        a,
                        i ? M : w
                      );
                      break;
                    default:
                      yi(k, P, P, P, [''], w, 0, a, w);
                  }
          }
          (l = h = d = 0), (m = y = 1), (S = k = ''), (f = o);
          break;
        case 58:
          (f = 1 + Jt(k)), (d = p);
        default:
          if (m < 1) {
            if (_ == 123) --m;
            else if (_ == 125 && m++ == 0 && sd() == 125) continue;
          }
          switch (((k += ui(_)), _ * m)) {
            case 38:
              y = h > 0 ? 1 : ((k += '\f'), -1);
              break;
            case 44:
              (a[l++] = (Jt(k) - 1) * y), (y = 1);
              break;
            case 64:
              te() === 45 && (k += bi(It())), (u = te()), (h = f = Jt((S = k += cd(mi())))), _++;
              break;
            case 45:
              p === 45 && Jt(k) == 2 && (m = 0);
          }
      }
    return r;
  }
  function ra(n, t, e, i, s, r, o, a, c, l, h) {
    for (var f = s - 1, u = s === 0 ? r : [''], d = gs(u), p = 0, m = 0, b = 0; p < i; ++p)
      for (var y = 0, _ = En(n, f + 1, (f = Qu((m = o[p])))), S = n; y < d; ++y)
        (S = ea(m > 0 ? u[y] + ' ' + _ : K(_, /&\f/g, u[y]))) && (c[b++] = S);
    return pi(n, t, e, s === 0 ? fs : a, c, l, h);
  }
  function hd(n, t, e) {
    return pi(n, t, e, hs, ui(id()), En(n, 2, -2), 0);
  }
  function oa(n, t, e, i) {
    return pi(n, t, e, us, En(n, 0, i), En(n, i + 1, -1), i);
  }
  function We(n, t) {
    for (var e = '', i = gs(n), s = 0; s < i; s++) e += t(n[s], s, n, t) || '';
    return e;
  }
  function fd(n, t, e, i) {
    switch (n.type) {
      case Zu:
        if (n.children.length) break;
      case qu:
      case us:
        return (n.return = n.return || n.value);
      case hs:
        return '';
      case ta:
        return (n.return = n.value + '{' + We(n.children, i) + '}');
      case fs:
        n.value = n.props.join(',');
    }
    return Jt((e = We(n.children, i))) ? (n.return = n.value + '{' + e + '}') : '';
  }
  function ud(n) {
    var t = gs(n);
    return function (e, i, s, r) {
      for (var o = '', a = 0; a < t; a++) o += n[a](e, i, s, r) || '';
      return o;
    };
  }
  function dd(n) {
    return function (t) {
      t.root || ((t = t.return) && n(t));
    };
  }
  function gd(n) {
    var t = Object.create(null);
    return function (e) {
      return t[e] === void 0 && (t[e] = n(e)), t[e];
    };
  }
  var pd = function (t, e, i) {
      for (var s = 0, r = 0; (s = r), (r = te()), s === 38 && r === 12 && (e[i] = 1), !Dn(r); )
        It();
      return On(t, Tt);
    },
    md = function (t, e) {
      var i = -1,
        s = 44;
      do
        switch (Dn(s)) {
          case 0:
            s === 38 && te() === 12 && (e[i] = 1), (t[i] += pd(Tt - 1, e, i));
            break;
          case 2:
            t[i] += bi(s);
            break;
          case 4:
            if (s === 44) {
              (t[++i] = te() === 58 ? '&\f' : ''), (e[i] = t[i].length);
              break;
            }
          default:
            t[i] += ui(s);
        }
      while ((s = It()));
      return t;
    },
    bd = function (t, e) {
      return sa(md(ia(t), e));
    },
    aa = new WeakMap(),
    yd = function (t) {
      if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
        for (
          var e = t.value, i = t.parent, s = t.column === i.column && t.line === i.line;
          i.type !== 'rule';

        )
          if (((i = i.parent), !i)) return;
        if (!(t.props.length === 1 && e.charCodeAt(0) !== 58 && !aa.get(i)) && !s) {
          aa.set(t, !0);
          for (var r = [], o = bd(e, r), a = i.props, c = 0, l = 0; c < o.length; c++)
            for (var h = 0; h < a.length; h++, l++)
              t.props[l] = r[c] ? o[c].replace(/&\f/g, a[h]) : a[h] + ' ' + o[c];
        }
      }
    },
    xd = function (t) {
      if (t.type === 'decl') {
        var e = t.value;
        e.charCodeAt(0) === 108 && e.charCodeAt(2) === 98 && ((t.return = ''), (t.value = ''));
      }
    },
    _d =
      'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason',
    vd = function (t) {
      return t.type === 'comm' && t.children.indexOf(_d) > -1;
    },
    wd = function (t) {
      return function (e, i, s) {
        if (!(e.type !== 'rule' || t.compat)) {
          var r = e.value.match(/(:first|:nth|:nth-last)-child/g);
          if (r) {
            for (var o = !!e.parent, a = o ? e.parent.children : s, c = a.length - 1; c >= 0; c--) {
              var l = a[c];
              if (l.line < e.line) break;
              if (l.column < e.column) {
                if (vd(l)) return;
                break;
              }
            }
            r.forEach(function (h) {
              console.error(
                'The pseudo class "' +
                  h +
                  '" is potentially unsafe when doing server-side rendering. Try changing it to "' +
                  h.split('-child')[0] +
                  '-of-type".'
              );
            });
          }
        }
      };
    },
    ca = function (t) {
      return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
    },
    kd = function (t, e) {
      for (var i = t - 1; i >= 0; i--) if (!ca(e[i])) return !0;
      return !1;
    },
    la = function (t) {
      (t.type = ''), (t.value = ''), (t.return = ''), (t.children = ''), (t.props = '');
    },
    Sd = function (t, e, i) {
      ca(t) &&
        (t.parent
          ? (console.error(
              "`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."
            ),
            la(t))
          : kd(e, i) &&
            (console.error(
              "`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."
            ),
            la(t)));
    };
  function ha(n, t) {
    switch (td(n, t)) {
      case 5103:
        return G + 'print-' + n + n;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return G + n + n;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return G + n + fi + n + Ct + n + n;
      case 6828:
      case 4268:
        return G + n + Ct + n + n;
      case 6165:
        return G + n + Ct + 'flex-' + n + n;
      case 5187:
        return G + n + K(n, /(\w+).+(:[^]+)/, G + 'box-$1$2' + Ct + 'flex-$1$2') + n;
      case 5443:
        return G + n + Ct + 'flex-item-' + K(n, /flex-|-self/, '') + n;
      case 4675:
        return G + n + Ct + 'flex-line-pack' + K(n, /align-content|flex-|-self/, '') + n;
      case 5548:
        return G + n + Ct + K(n, 'shrink', 'negative') + n;
      case 5292:
        return G + n + Ct + K(n, 'basis', 'preferred-size') + n;
      case 6060:
        return G + 'box-' + K(n, '-grow', '') + G + n + Ct + K(n, 'grow', 'positive') + n;
      case 4554:
        return G + K(n, /([^-])(transform)/g, '$1' + G + '$2') + n;
      case 6187:
        return K(K(K(n, /(zoom-|grab)/, G + '$1'), /(image-set)/, G + '$1'), n, '') + n;
      case 5495:
      case 3959:
        return K(n, /(image-set\([^]*)/, G + '$1$`$1');
      case 4968:
        return (
          K(
            K(n, /(.+:)(flex-)?(.*)/, G + 'box-pack:$3' + Ct + 'flex-pack:$3'),
            /s.+-b[^;]+/,
            'justify'
          ) +
          G +
          n +
          n
        );
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return K(n, /(.+)-inline(.+)/, G + '$1$2') + n;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (Jt(n) - 1 - t > 6)
          switch (kt(n, t + 1)) {
            case 109:
              if (kt(n, t + 4) !== 45) break;
            case 102:
              return (
                K(
                  n,
                  /(.+:)(.+)-([^]+)/,
                  '$1' + G + '$2-$3$1' + fi + (kt(n, t + 3) == 108 ? '$3' : '$2-$3')
                ) + n
              );
            case 115:
              return ~ds(n, 'stretch') ? ha(K(n, 'stretch', 'fill-available'), t) + n : n;
          }
        break;
      case 4949:
        if (kt(n, t + 1) !== 115) break;
      case 6444:
        switch (kt(n, Jt(n) - 3 - (~ds(n, '!important') && 10))) {
          case 107:
            return K(n, ':', ':' + G) + n;
          case 101:
            return (
              K(
                n,
                /(.+:)([^;!]+)(;|!.+)?/,
                '$1' +
                  G +
                  (kt(n, 14) === 45 ? 'inline-' : '') +
                  'box$3$1' +
                  G +
                  '$2$3$1' +
                  Ct +
                  '$2box$3'
              ) + n
            );
        }
        break;
      case 5936:
        switch (kt(n, t + 11)) {
          case 114:
            return G + n + Ct + K(n, /[svh]\w+-[tblr]{2}/, 'tb') + n;
          case 108:
            return G + n + Ct + K(n, /[svh]\w+-[tblr]{2}/, 'tb-rl') + n;
          case 45:
            return G + n + Ct + K(n, /[svh]\w+-[tblr]{2}/, 'lr') + n;
        }
        return G + n + Ct + n + n;
    }
    return n;
  }
  var Cd = function (t, e, i, s) {
      if (t.length > -1 && !t.return)
        switch (t.type) {
          case us:
            t.return = ha(t.value, t.length);
            break;
          case ta:
            return We([Mn(t, { value: K(t.value, '@', '@' + G) })], s);
          case fs:
            if (t.length)
              return nd(t.props, function (r) {
                switch (ed(r, /(::plac\w+|:read-\w+)/)) {
                  case ':read-only':
                  case ':read-write':
                    return We([Mn(t, { props: [K(r, /:(read-\w+)/, ':' + fi + '$1')] })], s);
                  case '::placeholder':
                    return We(
                      [
                        Mn(t, { props: [K(r, /:(plac\w+)/, ':' + G + 'input-$1')] }),
                        Mn(t, { props: [K(r, /:(plac\w+)/, ':' + fi + '$1')] }),
                        Mn(t, { props: [K(r, /:(plac\w+)/, Ct + 'input-$1')] }),
                      ],
                      s
                    );
                }
                return '';
              });
        }
    },
    Ed = [Cd],
    Md = function (t) {
      var e = t.key;
      if (process.env.NODE_ENV !== 'production' && !e)
        throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
      if (e === 'css') {
        var i = document.querySelectorAll('style[data-emotion]:not([data-s])');
        Array.prototype.forEach.call(i, function (m) {
          var b = m.getAttribute('data-emotion');
          b.indexOf(' ') !== -1 && (document.head.appendChild(m), m.setAttribute('data-s', ''));
        });
      }
      var s = t.stylisPlugins || Ed;
      if (process.env.NODE_ENV !== 'production' && /[^a-z-]/.test(e))
        throw new Error(
          'Emotion key must only contain lower case alphabetical characters and - but "' +
            e +
            '" was passed'
        );
      var r = {},
        o,
        a = [];
      (o = t.container || document.head),
        Array.prototype.forEach.call(
          document.querySelectorAll('style[data-emotion^="' + e + ' "]'),
          function (m) {
            for (var b = m.getAttribute('data-emotion').split(' '), y = 1; y < b.length; y++)
              r[b[y]] = !0;
            a.push(m);
          }
        );
      var c,
        l = [yd, xd];
      process.env.NODE_ENV !== 'production' &&
        l.push(
          wd({
            get compat() {
              return p.compat;
            },
          }),
          Sd
        );
      {
        var h,
          f = [
            fd,
            process.env.NODE_ENV !== 'production'
              ? function (m) {
                  m.root ||
                    (m.return
                      ? h.insert(m.return)
                      : m.value && m.type !== hs && h.insert(m.value + '{}'));
                }
              : dd(function (m) {
                  h.insert(m);
                }),
          ],
          u = ud(l.concat(s, f)),
          d = function (b) {
            return We(ld(b), u);
          };
        c = function (b, y, _, S) {
          (h = _),
            process.env.NODE_ENV !== 'production' &&
              y.map !== void 0 &&
              (h = {
                insert: function (w) {
                  _.insert(w + y.map);
                },
              }),
            d(b ? b + '{' + y.styles + '}' : y.styles),
            S && (p.inserted[y.name] = !0);
        };
      }
      var p = {
        key: e,
        sheet: new Ku({
          key: e,
          container: o,
          nonce: t.nonce,
          speedy: t.speedy,
          prepend: t.prepend,
          insertionPoint: t.insertionPoint,
        }),
        nonce: t.nonce,
        inserted: r,
        registered: {},
        insert: c,
      };
      return p.sheet.hydrate(a), p;
    };
  function Od(n) {
    for (var t = 0, e, i = 0, s = n.length; s >= 4; ++i, s -= 4)
      (e =
        (n.charCodeAt(i) & 255) |
        ((n.charCodeAt(++i) & 255) << 8) |
        ((n.charCodeAt(++i) & 255) << 16) |
        ((n.charCodeAt(++i) & 255) << 24)),
        (e = (e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16)),
        (e ^= e >>> 24),
        (t =
          ((e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16)) ^
          ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
    switch (s) {
      case 3:
        t ^= (n.charCodeAt(i + 2) & 255) << 16;
      case 2:
        t ^= (n.charCodeAt(i + 1) & 255) << 8;
      case 1:
        (t ^= n.charCodeAt(i) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
    }
    return (
      (t ^= t >>> 13),
      (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
      ((t ^ (t >>> 15)) >>> 0).toString(36)
    );
  }
  var Dd = {
      animationIterationCount: 1,
      aspectRatio: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1,
    },
    fa = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
    Pd =
      "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",
    Ad = /[A-Z]|^ms/g,
    ua = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    ms = function (t) {
      return t.charCodeAt(1) === 45;
    },
    da = function (t) {
      return t != null && typeof t != 'boolean';
    },
    bs = gd(function (n) {
      return ms(n) ? n : n.replace(Ad, '-$&').toLowerCase();
    }),
    xi = function (t, e) {
      switch (t) {
        case 'animation':
        case 'animationName':
          if (typeof e == 'string')
            return e.replace(ua, function (i, s, r) {
              return (Ut = { name: s, styles: r, next: Ut }), s;
            });
      }
      return Dd[t] !== 1 && !ms(t) && typeof e == 'number' && e !== 0 ? e + 'px' : e;
    };
  if (process.env.NODE_ENV !== 'production') {
    var Td =
        /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/,
      Rd = ['normal', 'none', 'initial', 'inherit', 'unset'],
      Fd = xi,
      Ld = /^-ms-/,
      Id = /-(.)/g,
      ga = {};
    xi = function (t, e) {
      if (
        t === 'content' &&
        (typeof e != 'string' ||
          (Rd.indexOf(e) === -1 &&
            !Td.test(e) &&
            (e.charAt(0) !== e.charAt(e.length - 1) ||
              (e.charAt(0) !== '"' && e.charAt(0) !== "'"))))
      )
        throw new Error(
          "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" +
            e +
            '"\'`'
        );
      var i = Fd(t, e);
      return (
        i !== '' &&
          !ms(t) &&
          t.indexOf('-') !== -1 &&
          ga[t] === void 0 &&
          ((ga[t] = !0),
          console.error(
            'Using kebab-case for css properties in objects is not supported. Did you mean ' +
              t.replace(Ld, 'ms-').replace(Id, function (s, r) {
                return r.toUpperCase();
              }) +
              '?'
          )),
        i
      );
    };
  }
  var pa =
    'Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.';
  function Pn(n, t, e) {
    if (e == null) return '';
    if (e.__emotion_styles !== void 0) {
      if (process.env.NODE_ENV !== 'production' && e.toString() === 'NO_COMPONENT_SELECTOR')
        throw new Error(pa);
      return e;
    }
    switch (typeof e) {
      case 'boolean':
        return '';
      case 'object': {
        if (e.anim === 1) return (Ut = { name: e.name, styles: e.styles, next: Ut }), e.name;
        if (e.styles !== void 0) {
          var i = e.next;
          if (i !== void 0)
            for (; i !== void 0; )
              (Ut = { name: i.name, styles: i.styles, next: Ut }), (i = i.next);
          var s = e.styles + ';';
          return process.env.NODE_ENV !== 'production' && e.map !== void 0 && (s += e.map), s;
        }
        return Nd(n, t, e);
      }
      case 'function': {
        if (n !== void 0) {
          var r = Ut,
            o = e(n);
          return (Ut = r), Pn(n, t, o);
        } else process.env.NODE_ENV !== 'production' && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
        break;
      }
      case 'string':
        if (process.env.NODE_ENV !== 'production') {
          var a = [],
            c = e.replace(ua, function (h, f, u) {
              var d = 'animation' + a.length;
              return (
                a.push(
                  'const ' + d + ' = keyframes`' + u.replace(/^@keyframes animation-\w+/, '') + '`'
                ),
                '${' + d + '}'
              );
            });
          a.length &&
            console.error(
              '`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n' +
                [].concat(a, ['`' + c + '`']).join(`
`) +
                `

You should wrap it with \`css\` like this:

` +
                ('css`' + c + '`')
            );
        }
        break;
    }
    if (t == null) return e;
    var l = t[e];
    return l !== void 0 ? l : e;
  }
  function Nd(n, t, e) {
    var i = '';
    if (Array.isArray(e)) for (var s = 0; s < e.length; s++) i += Pn(n, t, e[s]) + ';';
    else
      for (var r in e) {
        var o = e[r];
        if (typeof o != 'object')
          t != null && t[o] !== void 0
            ? (i += r + '{' + t[o] + '}')
            : da(o) && (i += bs(r) + ':' + xi(r, o) + ';');
        else {
          if (r === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production')
            throw new Error(pa);
          if (Array.isArray(o) && typeof o[0] == 'string' && (t == null || t[o[0]] === void 0))
            for (var a = 0; a < o.length; a++) da(o[a]) && (i += bs(r) + ':' + xi(r, o[a]) + ';');
          else {
            var c = Pn(n, t, o);
            switch (r) {
              case 'animation':
              case 'animationName': {
                i += bs(r) + ':' + c + ';';
                break;
              }
              default:
                process.env.NODE_ENV !== 'production' && r === 'undefined' && console.error(Pd),
                  (i += r + '{' + c + '}');
            }
          }
        }
      }
    return i;
  }
  var ma = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
    ba;
  process.env.NODE_ENV !== 'production' &&
    (ba = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
  var Ut,
    ys = function (t, e, i) {
      if (t.length === 1 && typeof t[0] == 'object' && t[0] !== null && t[0].styles !== void 0)
        return t[0];
      var s = !0,
        r = '';
      Ut = void 0;
      var o = t[0];
      o == null || o.raw === void 0
        ? ((s = !1), (r += Pn(i, e, o)))
        : (process.env.NODE_ENV !== 'production' && o[0] === void 0 && console.error(fa),
          (r += o[0]));
      for (var a = 1; a < t.length; a++)
        (r += Pn(i, e, t[a])),
          s &&
            (process.env.NODE_ENV !== 'production' && o[a] === void 0 && console.error(fa),
            (r += o[a]));
      var c;
      process.env.NODE_ENV !== 'production' &&
        (r = r.replace(ba, function (u) {
          return (c = u), '';
        })),
        (ma.lastIndex = 0);
      for (var l = '', h; (h = ma.exec(r)) !== null; ) l += '-' + h[1];
      var f = Od(r) + l;
      return process.env.NODE_ENV !== 'production'
        ? {
            name: f,
            styles: r,
            map: c,
            next: Ut,
            toString: function () {
              return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
            },
          }
        : { name: f, styles: r, next: Ut };
    },
    zd = !0;
  function ya(n, t, e) {
    var i = '';
    return (
      e.split(' ').forEach(function (s) {
        n[s] !== void 0 ? t.push(n[s] + ';') : (i += s + ' ');
      }),
      i
    );
  }
  var Bd = function (t, e, i) {
      var s = t.key + '-' + e.name;
      (i === !1 || zd === !1) && t.registered[s] === void 0 && (t.registered[s] = e.styles);
    },
    jd = function (t, e, i) {
      Bd(t, e, i);
      var s = t.key + '-' + e.name;
      if (t.inserted[e.name] === void 0) {
        var r = e;
        do t.insert(e === r ? '.' + s : '', r, t.sheet, !0), (r = r.next);
        while (r !== void 0);
      }
    };
  function xa(n, t) {
    if (n.inserted[t.name] === void 0) return n.insert('', t, n.sheet, !0);
  }
  function _a(n, t, e) {
    var i = [],
      s = ya(n, i, e);
    return i.length < 2 ? e : s + t(i);
  }
  var Vd = function (t) {
      var e = Md(t);
      (e.sheet.speedy = function (a) {
        if (process.env.NODE_ENV !== 'production' && this.ctr !== 0)
          throw new Error('speedy must be changed before any rules are inserted');
        this.isSpeedy = a;
      }),
        (e.compat = !0);
      var i = function () {
          for (var c = arguments.length, l = new Array(c), h = 0; h < c; h++) l[h] = arguments[h];
          var f = ys(l, e.registered, void 0);
          return jd(e, f, !1), e.key + '-' + f.name;
        },
        s = function () {
          for (var c = arguments.length, l = new Array(c), h = 0; h < c; h++) l[h] = arguments[h];
          var f = ys(l, e.registered),
            u = 'animation-' + f.name;
          return xa(e, { name: f.name, styles: '@keyframes ' + u + '{' + f.styles + '}' }), u;
        },
        r = function () {
          for (var c = arguments.length, l = new Array(c), h = 0; h < c; h++) l[h] = arguments[h];
          var f = ys(l, e.registered);
          xa(e, f);
        },
        o = function () {
          for (var c = arguments.length, l = new Array(c), h = 0; h < c; h++) l[h] = arguments[h];
          return _a(e.registered, i, $d(l));
        };
      return {
        css: i,
        cx: o,
        injectGlobal: r,
        keyframes: s,
        hydrate: function (c) {
          c.forEach(function (l) {
            e.inserted[l] = !0;
          });
        },
        flush: function () {
          (e.registered = {}), (e.inserted = {}), e.sheet.flush();
        },
        sheet: e.sheet,
        cache: e,
        getRegisteredStyles: ya.bind(null, e.registered),
        merge: _a.bind(null, e.registered, i),
      };
    },
    $d = function n(t) {
      for (var e = '', i = 0; i < t.length; i++) {
        var s = t[i];
        if (s != null) {
          var r = void 0;
          switch (typeof s) {
            case 'boolean':
              break;
            case 'object': {
              if (Array.isArray(s)) r = n(s);
              else {
                r = '';
                for (var o in s) s[o] && o && (r && (r += ' '), (r += o));
              }
              break;
            }
            default:
              r = s;
          }
          r && (e && (e += ' '), (e += r));
        }
      }
      return e;
    },
    Wd = Vd({ key: 'css' }),
    Hd = Wd.css;
  const Yd = { root: Hd({ position: 'relative' }) },
    Ud = 'Analytics line chart';
  ce.register(os, as, si, kn, cu, mu);
  const xs = ls(I.fontSizeS);
  (ce.defaults.font.size = xs),
    (ce.defaults.font.family = I.fontStackPrimary),
    (ce.defaults.font.weight = I.fontWeightMedium.toString()),
    (ce.defaults.borderColor = I.gray200),
    (ce.defaults.datasets.line.borderColor = I.colorPrimary);
  const Xd = 1.2,
    va = (n) => {
      const { dataValues: t, xAxisLabels: e, tooltipMetricLabel: i, accessibilityLabel: s } = n,
        r = { labels: e, datasets: [{ data: t }] },
        o = {
          responsive: !0,
          scales: {
            y: { beginAtZero: !0, suggestedMax: Math.max(...t) * Xd, ticks: { precision: 0 } },
          },
          plugins: {
            tooltip: {
              backgroundColor: I.gray900,
              bodyColor: I.colorWhite,
              padding: ls(I.spacingXs),
              titleMarginBottom: ls(I.spacing2Xs),
              titleFont: { size: xs },
              bodyFont: { size: xs, weight: '700' },
              displayColors: !1,
              callbacks: { beforeBody: () => i },
            },
          },
        },
        a = { 'aria-label': s };
      return vi.jsx('div', {
        className: Yd.root,
        children: vi.jsx(Yu, { data: r, options: o, fallbackContent: s, ...a }),
      });
    };
  (va.defaultProps = { accessibilityLabel: Ud }),
    (Ot.HyperLink = Ac),
    (Ot.LineChart = va),
    Object.defineProperty(Ot, Symbol.toStringTag, { value: 'Module' });
});
