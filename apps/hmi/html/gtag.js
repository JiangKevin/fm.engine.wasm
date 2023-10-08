// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    resource: {
      version: "1",

      macros: [{ function: "__e" }, { function: "__cid" }],
      tags: [
        {
          function: "__rep",
          once_per_event: true,
          vtp_containerId: ["macro", 1],
          tag_id: 1,
        },
      ],
      predicates: [{ function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" }],
      rules: [
        [
          ["if", 0],
          ["add", 0],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__cid",
        [46, "a"],
        [
          36,
          [
            17,
            [
              13,
              [41, "$0"],
              [3, "$0", ["require", "getContainerVersion"]],
              ["$0"],
            ],
            "containerId",
          ],
        ],
      ],
    ],
    entities: {
      __cid: { 4: true, 3: true },
    },
    permissions: {
      __cid: { read_container_data: {} },
    },

    security_groups: {
      google: ["__cid"],
    },
  };

  var aa,
    ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ca = function (a) {
      return (a.raw = a);
    },
    da = function (a, b) {
      a.raw = b;
      return a;
    },
    fa = function (a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return { next: ba(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    ia = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    ka =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    la;
  if ("function" == typeof Object.setPrototypeOf) la = Object.setPrototypeOf;
  else {
    var na;
    a: {
      var oa = { a: !0 },
        pa = {};
      try {
        pa.__proto__ = oa;
        na = pa.a;
        break a;
      } catch (a) {}
      na = !1;
    }
    la = na
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var qa = la,
    ra = function (a, b) {
      a.prototype = ka(b.prototype);
      a.prototype.constructor = a;
      if (qa) qa(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.pn = b.prototype;
    }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var sa = this || self,
    ta = function (a) {
      return a;
    };
  var va = function (a, b) {
    this.h = a;
    this.C = b;
  };
  var wa = function () {
    this.C = {};
    this.I = {};
  };
  aa = wa.prototype;
  aa.get = function (a) {
    return this.C["dust." + a];
  };
  aa.set = function (a, b) {
    a = "dust." + a;
    this.I.hasOwnProperty(a) || (this.C[a] = b);
  };
  aa.Gh = function (a, b) {
    this.set(a, b);
    this.I["dust." + a] = !0;
  };
  aa.has = function (a) {
    return this.C.hasOwnProperty("dust." + a);
  };
  aa.remove = function (a) {
    a = "dust." + a;
    this.I.hasOwnProperty(a) || delete this.C[a];
  };
  var xa = function () {
    this.quota = {};
  };
  xa.prototype.reset = function () {
    this.quota = {};
  };
  var ya = function (a, b) {
    this.X = a;
    this.M = function (c, d, e) {
      return c.apply(d, e);
    };
    this.D = b;
    this.C = new wa();
    this.h = this.I = void 0;
  };
  ya.prototype.add = function (a, b) {
    za(this, a, b, !1);
  };
  var za = function (a, b, c, d) {
    d ? a.C.Gh(b, c) : a.C.set(b, c);
  };
  ya.prototype.set = function (a, b) {
    !this.C.has(a) && this.D && this.D.has(a)
      ? this.D.set(a, b)
      : this.C.set(a, b);
  };
  ya.prototype.get = function (a) {
    return this.C.has(a) ? this.C.get(a) : this.D ? this.D.get(a) : void 0;
  };
  ya.prototype.has = function (a) {
    return !!this.C.has(a) || !(!this.D || !this.D.has(a));
  };
  var Aa = function (a) {
    var b = new ya(a.X, a);
    a.I && (b.I = a.I);
    b.M = a.M;
    b.h = a.h;
    return b;
  };
  var Ba = function () {},
    Ca = function (a) {
      return "function" === typeof a;
    },
    k = function (a) {
      return "string" === typeof a;
    },
    Da = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    Ea = Array.isArray,
    Ga = function (a, b) {
      if (a && Ea(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    Ha = function (a, b) {
      if (!Da(a) || !Da(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Ka = function (a, b) {
      for (var c = new Ja(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    l = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    La = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Ma = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Na = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Oa = function (a) {
      var b = [];
      if (Ea(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Qa = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Ra = function () {
      return new Date(Date.now());
    },
    Sa = function () {
      return Ra().getTime();
    },
    Ja = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  Ja.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  Ja.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ta = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Ua = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Va = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Wa = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Xa = function (a, b) {
      return a.substring(0, b.length) === b;
    },
    Ya = function (a, b) {
      var c = z;
      b = b || [];
      for (var d = c, e = 0; e < a.length - 1; e++) {
        if (!d.hasOwnProperty(a[e])) return;
        d = d[a[e]];
        if (0 <= b.indexOf(d)) return;
      }
      return d;
    },
    Za = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    $a = /^\w{1,9}$/,
    ab = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      l(a, function (d, e) {
        $a.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    bb = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  function cb(a, b) {
    for (
      var c, d = 0;
      d < b.length && !((c = db(a, b[d])), c instanceof va);
      d++
    );
    return c;
  }
  function db(a, b) {
    try {
      var c = a.get(String(b[0]));
      if (!c || "function" !== typeof c.invoke)
        throw Error("Attempting to execute non-function " + b[0] + ".");
      return c.invoke.apply(c, [a].concat(b.slice(1)));
    } catch (e) {
      var d = a.I;
      d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
      throw e;
    }
  }
  var eb = function () {
    this.D = new xa();
    this.h = new ya(this.D);
  };
  eb.prototype.execute = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.C(c);
  };
  eb.prototype.C = function (a) {
    for (var b, c = 0; c < arguments.length; c++) b = db(this.h, arguments[c]);
    return b;
  };
  eb.prototype.I = function (a, b) {
    var c = Aa(this.h);
    c.h = a;
    for (var d, e = 1; e < arguments.length; e++) d = db(c, arguments[e]);
    return d;
  };
  var fb = function () {
    wa.call(this);
    this.D = !1;
  };
  ra(fb, wa);
  var gb = function (a, b) {
    var c = [],
      d;
    for (d in a.C)
      if (a.C.hasOwnProperty(d))
        switch (((d = d.substr(5)), b)) {
          case 1:
            c.push(d);
            break;
          case 2:
            c.push(a.get(d));
            break;
          case 3:
            c.push([d, a.get(d)]);
        }
    return c;
  };
  aa = fb.prototype;
  aa.set = function (a, b) {
    this.D || wa.prototype.set.call(this, a, b);
  };
  aa.Gh = function (a, b) {
    this.D || wa.prototype.Gh.call(this, a, b);
  };
  aa.remove = function (a) {
    this.D || wa.prototype.remove.call(this, a);
  };
  aa.Cb = function () {
    this.D = !0;
  };
  aa.nj = function () {
    return this.D;
  }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var hb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    jb = function (a) {
      if (null == a) return String(a);
      var b = hb.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    kb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    lb = function (a) {
      if (!a || "object" != jb(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !kb(a, "constructor") &&
          !kb(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || kb(a, b);
    },
    mb = function (a, b) {
      var c = b || ("array" == jb(a) ? [] : {}),
        d;
      for (d in a)
        if (kb(a, d)) {
          var e = a[d];
          "array" == jb(e)
            ? ("array" != jb(c[d]) && (c[d] = []), (c[d] = mb(e, c[d])))
            : lb(e)
            ? (lb(c[d]) || (c[d] = {}), (c[d] = mb(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var nb = function (a) {
      for (var b = [], c = 0; c < a.length(); c++)
        a.has(c) && (b[c] = a.get(c));
      return b;
    },
    ob = function (a) {
      if (void 0 == a || Ea(a) || lb(a)) return !0;
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
          return !0;
      }
      return !1;
    },
    pb = function (a) {
      return (
        ("number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1) ||
        ("string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10))
      );
    };
  var qb = function (a) {
    this.C = new fb();
    this.h = [];
    this.D = !1;
    a = a || [];
    for (var b in a)
      a.hasOwnProperty(b) &&
        (pb(b) ? (this.h[Number(b)] = a[Number(b)]) : this.C.set(b, a[b]));
  };
  aa = qb.prototype;
  aa.toString = function (a) {
    if (a && 0 <= a.indexOf(this)) return "";
    for (var b = [], c = 0; c < this.h.length; c++) {
      var d = this.h[c];
      null === d || void 0 === d
        ? b.push("")
        : d instanceof qb
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(String(d));
    }
    return b.join(",");
  };
  aa.set = function (a, b) {
    if (!this.D)
      if ("length" === a) {
        if (!pb(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.h.length = Number(b);
      } else pb(a) ? (this.h[Number(a)] = b) : this.C.set(a, b);
  };
  aa.get = function (a) {
    return "length" === a
      ? this.length()
      : pb(a)
      ? this.h[Number(a)]
      : this.C.get(a);
  };
  aa.length = function () {
    return this.h.length;
  };
  aa.Qb = function () {
    for (var a = gb(this.C, 1), b = 0; b < this.h.length; b++) a.push(b + "");
    return new qb(a);
  };
  aa.remove = function (a) {
    pb(a) ? delete this.h[Number(a)] : this.C.remove(a);
  };
  aa.pop = function () {
    return this.h.pop();
  };
  aa.push = function (a) {
    return this.h.push.apply(this.h, Array.prototype.slice.call(arguments));
  };
  aa.shift = function () {
    return this.h.shift();
  };
  aa.splice = function (a, b, c) {
    return new qb(this.h.splice.apply(this.h, arguments));
  };
  aa.unshift = function (a) {
    return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments));
  };
  aa.has = function (a) {
    return (pb(a) && this.h.hasOwnProperty(a)) || this.C.has(a);
  };
  aa.Cb = function () {
    this.D = !0;
    Object.freeze(this.h);
    this.C.Cb();
  };
  aa.nj = function () {
    return this.D;
  };
  var rb = function () {
    fb.call(this);
  };
  ra(rb, fb);
  rb.prototype.Qb = function () {
    return new qb(gb(this, 1));
  };
  function sb() {
    for (var a = tb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function ub() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var tb, vb;
  function wb(a) {
    tb = tb || ub();
    vb = vb || sb();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        h = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (h >> 6),
        q = h & 63;
      e || ((q = 64), d || (p = 64));
      b.push(tb[m], tb[n], tb[p], tb[q]);
    }
    return b.join("");
  }
  function xb(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = vb[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    tb = tb || ub();
    vb = vb || sb();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        h = b(64);
      if (64 === h && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != h && (c += String.fromCharCode(((g << 6) & 192) | h)));
    }
  }
  var yb = {},
    zb = function (a, b) {
      yb[a] = yb[a] || [];
      yb[a][b] = !0;
    },
    Ab = function () {
      delete yb.GA4_EVENT;
    },
    Bb = function (a) {
      var b = yb[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++)
        0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)),
          b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return wb(c.join("")).replace(/\.+$/, "");
    };
  var Cb = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a)
          return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  var Eb,
    Fb = function () {
      if (void 0 === Eb) {
        var a = null,
          b = sa.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: ta,
              createScript: ta,
              createScriptURL: ta,
            });
          } catch (c) {
            sa.console && sa.console.error(c.message);
          }
          Eb = a;
        } else Eb = a;
      }
      return Eb;
    };
  var Gb = function (a) {
    this.h = a;
  };
  Gb.prototype.toString = function () {
    return this.h + "";
  };
  var Hb = function (a) {
      return a instanceof Gb && a.constructor === Gb
        ? a.h
        : "type_error:TrustedResourceUrl";
    },
    Ib = {},
    Jb = function (a) {
      var b = a,
        c = Fb(),
        d = c ? c.createScriptURL(b) : b;
      return new Gb(d, Ib);
    };
  var Kb = function (a) {
    this.h = a;
  };
  Kb.prototype.toString = function () {
    return this.h.toString();
  };
  var Lb = function (a) {
      return a instanceof Kb && a.constructor === Kb
        ? a.h
        : "type_error:SafeUrl";
    },
    Mb = {},
    Nb = new Kb("about:invalid#zClosurez", Mb);
  var Ob, Pb;
  a: {
    for (var Qb = ["CLOSURE_FLAGS"], Rb = sa, Sb = 0; Sb < Qb.length; Sb++)
      if (((Rb = Rb[Qb[Sb]]), null == Rb)) {
        Pb = null;
        break a;
      }
    Pb = Rb;
  }
  var Tb = Pb && Pb[610401301];
  Ob = null != Tb ? Tb : !1;
  function Ub() {
    var a = sa.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var Vb,
    Wb = sa.navigator;
  Vb = Wb ? Wb.userAgentData || null : null;
  function Xb(a) {
    return Ob
      ? Vb
        ? Vb.brands.some(function (b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a);
          })
        : !1
      : !1;
  }
  function Yb(a) {
    return -1 != Ub().indexOf(a);
  }
  function Zb() {
    return Ob ? !!Vb && 0 < Vb.brands.length : !1;
  }
  function $b() {
    return Zb() ? !1 : Yb("Opera");
  }
  function ac() {
    return Yb("Firefox") || Yb("FxiOS");
  }
  function bc() {
    return Zb()
      ? Xb("Chromium")
      : ((Yb("Chrome") || Yb("CriOS")) && !(Zb() ? 0 : Yb("Edge"))) ||
          Yb("Silk");
  }
  var cc = {},
    dc = function (a) {
      this.h = a;
    };
  dc.prototype.toString = function () {
    return this.h.toString();
  };
  var ec = function (a) {
    return a instanceof dc && a.constructor === dc
      ? a.h
      : "type_error:SafeHtml";
  }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var fc = "function" === typeof URL;
  function gc(a) {
    var b;
    a: if (fc) {
      var c;
      try {
        c = new URL(a);
      } catch (g) {
        b = "https:";
        break a;
      }
      b = c.protocol;
    } else {
      var d;
      b: {
        var e = document.createElement("a");
        try {
          e.href = a;
        } catch (g) {
          d = void 0;
          break b;
        }
        var f = e.protocol;
        d = ":" === f || "" === f ? "https:" : f;
      }
      b = d;
    }
    if ("javascript:" !== b) return a;
  }
  var ic = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
  var jc = {};
  var kc = function () {},
    lc = function (a) {
      this.h = a;
    };
  ra(lc, kc);
  lc.prototype.toString = function () {
    return this.h;
  };
  function mc(a, b) {
    var c = [new lc(nc[0].toLowerCase(), jc)];
    if (0 === c.length) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof lc) g = f.h;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return 0 !== e.indexOf(f);
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  function oc(a) {
    var b = a.tagName;
    if ("SCRIPT" === b || "STYLE" === b) throw Error("");
  }
  function pc(a, b) {
    var c = b instanceof Kb ? Lb(b) : gc(b);
    void 0 !== c && (a.action = c);
  }
  var qc = ca([""]),
    rc = da(["\x00"], ["\\0"]),
    sc = da(["\n"], ["\\n"]),
    tc = da(["\x00"], ["\\u0000"]);
  function uc(a) {
    return -1 === a.toString().indexOf("`");
  }
  uc(function (a) {
    return a(qc);
  }) ||
    uc(function (a) {
      return a(rc);
    }) ||
    uc(function (a) {
      return a(sc);
    }) ||
    uc(function (a) {
      return a(tc);
    });
  var vc = function (a) {
    this.Jl = a;
  };
  function wc(a) {
    return new vc(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var xc = [
    wc("data"),
    wc("http"),
    wc("https"),
    wc("mailto"),
    wc("ftp"),
    new vc(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function yc(a, b) {
    b = void 0 === b ? xc : b;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof vc && d.Jl(a)) return new Kb(a, Mb);
    }
  }
  function zc(a) {
    var b;
    b = void 0 === b ? xc : b;
    return yc(a, b) || Nb;
  }
  var Ac =
      "title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(
        " "
      ),
    Bc = [
      [
        "dir",
        {
          Ac: 3,
          conditions: new Map([["dir", new Set(["auto", "ltr", "rtl"])]]),
        },
      ],
      [
        "async",
        { Ac: 3, conditions: new Map([["async", new Set(["async"])]]) },
      ],
      ["cite", { Ac: 2 }],
      [
        "loading",
        {
          Ac: 3,
          conditions: new Map([["loading", new Set(["eager", "lazy"])]]),
        },
      ],
      ["poster", { Ac: 2 }],
      [
        "target",
        {
          Ac: 3,
          conditions: new Map([["target", new Set(["_self", "_blank"])]]),
        },
      ],
    ];
  Ac.concat(["class", "id"]);
  Bc.concat([["style", { Ac: 4 }]]);
  "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER"
    .split(" ")
    .concat("STYLE TITLE INPUT TEXTAREA BUTTON LABEL".split(" "));
  Ac.concat(["class", "id", "tabindex", "contenteditable", "name"]);
  Bc.concat([["style", { Ac: 4 }]]);
  function Cc(a) {
    var b = (a = Dc(a)),
      c = Fb(),
      d = c ? c.createHTML(b) : b;
    return new dc(d, cc);
  }
  function Dc(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  var z = window,
    B = document,
    Ec = navigator,
    Fc = B.currentScript && B.currentScript.src,
    Gc = function (a, b) {
      var c = z[a];
      z[a] = void 0 === c ? b : c;
      return z[a];
    },
    Hc = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    Ic = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    Jc = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function Kc(a, b, c) {
    b &&
      l(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var Lc = function (a, b, c, d, e) {
      var f = B.createElement("script");
      Kc(f, d, Ic);
      f.type = "text/javascript";
      f.async = d && !1 === d.async ? !1 : !0;
      var g;
      g = Jb(Dc(a));
      f.src = Hb(g);
      var h,
        m,
        n,
        p =
          null ==
          (n = (m = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : n.call(m, "script[nonce]");
      (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", h);
      Hc(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var q = B.getElementsByTagName("script")[0] || B.body || B.head;
        q.parentNode.insertBefore(f, q);
      }
      return f;
    },
    Mc = function () {
      if (Fc) {
        var a = Fc.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Nc = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        h = !1;
      g || ((g = B.createElement("iframe")), (h = !0));
      Kc(g, c, Jc);
      d &&
        l(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      if (h) {
        var m = (B.body && B.body.lastChild) || B.body || B.head;
        m.parentNode.insertBefore(g, m);
      }
      Hc(g, b);
      void 0 !== a && (g.src = a);
      return g;
    },
    Oc = function (a, b, c, d) {
      var e = new Image(1, 1);
      Kc(e, d, {});
      e.onload = function () {
        e.onload = null;
        b && b();
      };
      e.onerror = function () {
        e.onerror = null;
        c && c();
      };
      e.src = a;
    },
    Pc = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Qc = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    G = function (a) {
      z.setTimeout(a, 0);
    },
    Rc = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Sc = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Tc = function (a) {
      var b = B.createElement("div"),
        c = b,
        d = Cc("A<div>" + a + "</div>");
      1 === c.nodeType && oc(c);
      c.innerHTML = ec(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    Uc = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Vc = function (a) {
      var b;
      try {
        b = Ec.sendBeacon && Ec.sendBeacon(a);
      } catch (c) {
        zb("TAGGING", 15);
      }
      b || Oc(a);
    },
    Wc = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Xc = function (a) {
      var b = {
        headers: { "Attribution-Reporting-Eligible": "trigger" },
        keepalive: !0,
        attributionReporting: { eventSourceEligible: !0, triggerEligible: !0 },
      };
      try {
        z.fetch(a, b);
      } catch (c) {}
    },
    Yc = function () {
      var a = z.performance;
      if (a && Ca(a.now)) return a.now();
    },
    Zc = function () {
      return z.performance || void 0;
    };
  var $c = function (a, b) {
      return I(this, a) && I(this, b);
    },
    ad = function (a, b) {
      return I(this, a) === I(this, b);
    },
    bd = function (a, b) {
      return I(this, a) || I(this, b);
    },
    cd = function (a, b) {
      a = I(this, a);
      b = I(this, b);
      return -1 < String(a).indexOf(String(b));
    },
    dd = function (a, b) {
      a = String(I(this, a));
      b = String(I(this, b));
      return a.substring(0, b.length) === b;
    },
    ed = function (a, b) {
      a = I(this, a);
      b = I(this, b);
      switch (a) {
        case "pageLocation":
          var c = z.location.href;
          b instanceof rb &&
            b.get("stripProtocol") &&
            (c = c.replace(/^https?:\/\//, ""));
          return c;
      }
    };
  var fd = function (a, b) {
    fb.call(this);
    this.M = a;
    this.X = b;
  };
  ra(fd, fb);
  fd.prototype.toString = function () {
    return this.M;
  };
  fd.prototype.Qb = function () {
    return new qb(gb(this, 1));
  };
  fd.prototype.invoke = function (a, b) {
    return this.X.apply(
      new gd(this, a),
      Array.prototype.slice.call(arguments, 1)
    );
  };
  fd.prototype.h = function (a, b) {
    try {
      return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (c) {}
  };
  var gd = function (a, b) {
      this.C = a;
      this.h = b;
    },
    I = function (a, b) {
      return Ea(b) ? db(a.h, b) : b;
    },
    J = function (a) {
      return a.C.M;
    };
  var hd = function () {
    this.map = new Map();
  };
  hd.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  hd.prototype.get = function (a) {
    return this.map.get(a);
  };
  var id = function () {
    this.keys = [];
    this.values = [];
  };
  id.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  id.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (-1 < b) return this.values[b];
  };
  function jd() {
    try {
      return Map ? new hd() : new id();
    } catch (a) {
      return new id();
    }
  }
  var kd = function (a) {
    if (a instanceof kd) return a;
    this.h = a;
  };
  kd.prototype.toString = function () {
    return String(this.h);
  };
  var md = function (a) {
    fb.call(this);
    this.h = a;
    this.set("then", ld(this));
    this.set("catch", ld(this, !0));
    this.set("finally", ld(this, !1, !0));
  };
  ra(md, rb);
  var ld = function (a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new fd("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof fd || (d = void 0);
      e instanceof fd || (e = void 0);
      var f = Aa(this.h),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.h) : m.invoke(f, n);
          };
        },
        h = a.h.then(d && g(d), e && g(e));
      return new md(h);
    });
  };
  var od = function (a, b, c) {
      var d = jd(),
        e = function (g, h) {
          for (var m = gb(g, 1), n = 0; n < m.length; n++)
            h[m[n]] = f(g.get(m[n]));
        },
        f = function (g) {
          var h = d.get(g);
          if (h) return h;
          if (g instanceof qb) {
            var m = [];
            d.set(g, m);
            for (var n = g.Qb(), p = 0; p < n.length(); p++)
              m[n.get(p)] = f(g.get(n.get(p)));
            return m;
          }
          if (g instanceof md) return g.h;
          if (g instanceof rb) {
            var q = {};
            d.set(g, q);
            e(g, q);
            return q;
          }
          if (g instanceof fd) {
            var r = function () {
              for (
                var u = Array.prototype.slice.call(arguments, 0), v = 0;
                v < u.length;
                v++
              )
                u[v] = nd(u[v], b, c);
              var w = new ya(b ? b.X : new xa());
              b && (w.h = b.h);
              return f(g.invoke.apply(g, [w].concat(u)));
            };
            d.set(g, r);
            e(g, r);
            return r;
          }
          var t = !1;
          switch (c) {
            case 1:
              t = !0;
              break;
            case 2:
              t = !1;
              break;
            case 3:
              t = !1;
              break;
            default:
          }
          if (g instanceof kd && t) return g.h;
          switch (typeof g) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return g;
            case "object":
              if (null === g) return null;
          }
        };
      return f(a);
    },
    nd = function (a, b, c) {
      var d = jd(),
        e = function (g, h) {
          for (var m in g) g.hasOwnProperty(m) && h.set(m, f(g[m]));
        },
        f = function (g) {
          var h = d.get(g);
          if (h) return h;
          if (Ea(g) || La(g)) {
            var m = new qb([]);
            d.set(g, m);
            for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
            return m;
          }
          if (lb(g)) {
            var p = new rb();
            d.set(g, p);
            e(g, p);
            return p;
          }
          if ("function" === typeof g) {
            var q = new fd("", function (x) {
              for (
                var y = Array.prototype.slice.call(arguments, 0), A = 0;
                A < y.length;
                A++
              )
                y[A] = od(I(this, y[A]), b, c);
              return f((0, this.h.M)(g, g, y));
            });
            d.set(g, q);
            e(g, q);
            return q;
          }
          var v = typeof g;
          if (null === g || "string" === v || "number" === v || "boolean" === v)
            return g;
          var w = !1;
          switch (c) {
            case 1:
              w = !0;
              break;
            case 2:
              w = !1;
              break;
            default:
          }
          if (void 0 !== g && w) return new kd(g);
        };
      return f(a);
    };
  var pd = function () {
    var a = !1;
    return a;
  };
  var qd = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (var e = 1; e < arguments.length; e++)
        if (arguments[e] instanceof qb)
          for (var f = arguments[e], g = 0; g < f.length(); g++)
            c.push(f.get(g));
        else c.push(arguments[e]);
      return new qb(c);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new qb(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.invoke(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var f = e; 0 <= f; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
      return new qb(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a, b) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (void 0 !== c) e = c;
      else {
        if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var h = f; h < d; h++)
        this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (void 0 !== c) e = c;
      else {
        if (0 === d)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var h = f; 0 <= h; h--)
        this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
      return e;
    },
    reverse: function () {
      for (var a = nb(this), b = a.length - 1, c = 0; 0 <= b; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new qb(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = nb(this);
      void 0 === b
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.invoke(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
      return this;
    },
    splice: function (a, b, c, d) {
      return this.splice.apply(
        this,
        Array.prototype.splice.call(arguments, 1, arguments.length - 1)
      );
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a, b) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
  };
  var rd = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
  };
  ra(rd, Error);
  var sd = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1,
    },
    td = new va("break"),
    ud = new va("continue"),
    vd = function (a, b) {
      return I(this, a) + I(this, b);
    },
    wd = function (a, b) {
      return I(this, a) && I(this, b);
    },
    xd = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      if (!(c instanceof qb))
        throw Error("Error: Non-List argument given to Apply instruction.");
      if (null === a || void 0 === a) {
        var d = "TypeError: Can't read property " + b + " of " + a + ".";
        if (pd()) throw new rd(d);
        throw Error(d);
      }
      var e = "number" === typeof a;
      if ("boolean" === typeof a || e) {
        if ("toString" === b) {
          if (e && c.length()) {
            var f = od(c.get(0));
            try {
              return a.toString(f);
            } catch (y) {}
          }
          return a.toString();
        }
        var g = "TypeError: " + a + "." + b + " is not a function.";
        if (pd()) throw new rd(g);
        throw Error(g);
      }
      if ("string" === typeof a) {
        if (sd.hasOwnProperty(b)) {
          var h = 2;
          h = 1;
          var m = od(c, void 0, h);
          return nd(a[b].apply(a, m), this.h);
        }
        var n = "TypeError: " + b + " is not a function";
        if (pd()) throw new rd(n);
        throw Error(n);
      }
      if (a instanceof qb) {
        if (a.has(b)) {
          var p = a.get(b);
          if (p instanceof fd) {
            var q = nb(c);
            q.unshift(this.h);
            return p.invoke.apply(p, q);
          }
          var r = "TypeError: " + b + " is not a function";
          if (pd()) throw new rd(r);
          throw Error(r);
        }
        if (0 <= qd.supportedMethods.indexOf(b)) {
          var t = nb(c);
          t.unshift(this.h);
          return qd[b].apply(a, t);
        }
      }
      if (a instanceof fd || a instanceof rb) {
        if (a.has(b)) {
          var u = a.get(b);
          if (u instanceof fd) {
            var v = nb(c);
            v.unshift(this.h);
            return u.invoke.apply(u, v);
          }
          var w = "TypeError: " + b + " is not a function";
          if (pd()) throw new rd(w);
          throw Error(w);
        }
        if ("toString" === b) return a instanceof fd ? a.M : a.toString();
        if ("hasOwnProperty" === b) return a.has.apply(a, nb(c));
      }
      if (a instanceof kd && "toString" === b) return a.toString();
      var x = "TypeError: Object has no '" + b + "' property.";
      if (pd()) throw new rd(x);
      throw Error(x);
    },
    yd = function (a, b) {
      a = I(this, a);
      if ("string" !== typeof a)
        throw Error("Invalid key name given for assignment.");
      var c = this.h;
      if (!c.has(a))
        throw Error("Attempting to assign to undefined value " + b);
      var d = I(this, b);
      c.set(a, d);
      return d;
    },
    zd = function (a) {
      var b = Aa(this.h),
        c = cb(b, Array.prototype.slice.apply(arguments));
      if (c instanceof va) return c;
    },
    Ad = function () {
      return td;
    },
    Bd = function (a) {
      for (var b = I(this, a), c = 0; c < b.length; c++) {
        var d = I(this, b[c]);
        if (d instanceof va) return d;
      }
    },
    Cd = function (a) {
      for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
        var d = arguments[c];
        if ("string" === typeof d) {
          var e = I(this, arguments[c + 1]);
          za(b, d, e, !0);
        }
      }
    },
    Dd = function () {
      return ud;
    },
    Ed = function (a, b) {
      return new va(a, I(this, b));
    },
    Fd = function (a, b, c) {
      var d = new qb();
      b = I(this, b);
      for (var e = 0; e < b.length; e++) d.push(b[e]);
      var f = [51, a, d].concat(
        Array.prototype.splice.call(arguments, 2, arguments.length - 2)
      );
      this.h.add(a, I(this, f));
    },
    Gd = function (a, b) {
      return I(this, a) / I(this, b);
    },
    Hd = function (a, b) {
      a = I(this, a);
      b = I(this, b);
      var c = a instanceof kd,
        d = b instanceof kd;
      return c || d ? (c && d ? a.h == b.h : !1) : a == b;
    },
    Id = function (a) {
      for (var b, c = 0; c < arguments.length; c++) b = I(this, arguments[c]);
      return b;
    };
  function Jd(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = cb(f, d);
      if (g instanceof va) {
        if ("break" === g.h) break;
        if ("return" === g.h) return g;
      }
    }
  }
  function Kd(a, b, c) {
    if ("string" === typeof b)
      return Jd(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (b instanceof rb || b instanceof qb || b instanceof fd) {
      var d = b.Qb(),
        e = d.length();
      return Jd(
        a,
        function () {
          return e;
        },
        function (f) {
          return d.get(f);
        },
        c
      );
    }
  }
  var Ld = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      var d = this.h;
      return Kd(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    Nd = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      var d = this.h;
      return Kd(
        function (e) {
          var f = Aa(d);
          za(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    Od = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      var d = this.h;
      return Kd(
        function (e) {
          var f = Aa(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    },
    Qd = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      var d = this.h;
      return Pd(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    Rd = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      var d = this.h;
      return Pd(
        function (e) {
          var f = Aa(d);
          za(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    Sd = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      var d = this.h;
      return Pd(
        function (e) {
          var f = Aa(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    };
  function Pd(a, b, c) {
    if ("string" === typeof b)
      return Jd(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof qb)
      return Jd(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    if (pd()) throw new rd("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }
  var Td = function (a, b, c, d) {
      function e(p, q) {
        for (var r = 0; r < f.length(); r++) {
          var t = f.get(r);
          q.add(t, p.get(t));
        }
      }
      var f = I(this, a);
      if (!(f instanceof qb))
        throw Error(
          "TypeError: Non-List argument given to ForLet instruction."
        );
      var g = this.h;
      d = I(this, d);
      var h = Aa(g);
      for (e(g, h); db(h, b); ) {
        var m = cb(h, d);
        if (m instanceof va) {
          if ("break" === m.h) break;
          if ("return" === m.h) return m;
        }
        var n = Aa(g);
        e(h, n);
        db(n, c);
        h = n;
      }
    },
    Ud = function (a, b, c) {
      var d = this.h,
        e = I(this, b);
      if (!(e instanceof qb))
        throw Error("Error: non-List value given for Fn argument names.");
      var f = Array.prototype.slice.call(arguments, 2);
      return new fd(
        a,
        (function () {
          return function (g) {
            var h = Aa(d);
            void 0 === h.h && (h.h = this.h.h);
            for (
              var m = Array.prototype.slice.call(arguments, 0), n = 0;
              n < m.length;
              n++
            )
              if (((m[n] = I(this, m[n])), m[n] instanceof va)) return m[n];
            for (var p = e.get("length"), q = 0; q < p; q++)
              q < m.length ? h.add(e.get(q), m[q]) : h.add(e.get(q), void 0);
            h.add("arguments", new qb(m));
            var r = cb(h, f);
            if (r instanceof va) return "return" === r.h ? r.C : r;
          };
        })()
      );
    },
    Vd = function (a) {
      a = I(this, a);
      var b = this.h,
        c = !1;
      if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
      return b.get(a);
    },
    Wd = function (a, b) {
      var c;
      a = I(this, a);
      b = I(this, b);
      if (void 0 === a || null === a) {
        var d = "TypeError: cannot access property of " + a + ".";
        if (pd()) throw new rd(d);
        throw Error(d);
      }
      if (a instanceof rb || a instanceof qb || a instanceof fd) c = a.get(b);
      else if ("string" === typeof a)
        "length" === b ? (c = a.length) : pb(b) && (c = a[b]);
      else if (a instanceof kd) return;
      return c;
    },
    Xd = function (a, b) {
      return I(this, a) > I(this, b);
    },
    Yd = function (a, b) {
      return I(this, a) >= I(this, b);
    },
    Zd = function (a, b) {
      a = I(this, a);
      b = I(this, b);
      a instanceof kd && (a = a.h);
      b instanceof kd && (b = b.h);
      return a === b;
    },
    $d = function (a, b) {
      return !Zd.call(this, a, b);
    },
    ae = function (a, b, c) {
      var d = [];
      I(this, a) ? (d = I(this, b)) : c && (d = I(this, c));
      var e = cb(this.h, d);
      if (e instanceof va) return e;
    },
    be = function (a, b) {
      return I(this, a) < I(this, b);
    },
    ce = function (a, b) {
      return I(this, a) <= I(this, b);
    },
    de = function (a) {
      for (var b = new qb(), c = 0; c < arguments.length; c++) {
        var d = I(this, arguments[c]);
        b.push(d);
      }
      return b;
    },
    ee = function (a) {
      for (var b = new rb(), c = 0; c < arguments.length - 1; c += 2) {
        var d = I(this, arguments[c]) + "",
          e = I(this, arguments[c + 1]);
        b.set(d, e);
      }
      return b;
    },
    fe = function (a, b) {
      return I(this, a) % I(this, b);
    },
    ge = function (a, b) {
      return I(this, a) * I(this, b);
    },
    he = function (a) {
      return -I(this, a);
    },
    ie = function (a) {
      return !I(this, a);
    },
    je = function (a, b) {
      return !Hd.call(this, a, b);
    },
    ke = function () {
      return null;
    },
    le = function (a, b) {
      return I(this, a) || I(this, b);
    },
    me = function (a, b) {
      var c = I(this, a);
      I(this, b);
      return c;
    },
    ne = function (a) {
      return I(this, a);
    },
    oe = function (a) {
      return Array.prototype.slice.apply(arguments);
    },
    pe = function (a) {
      return new va("return", I(this, a));
    },
    qe = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      if (null === a || void 0 === a) {
        var d = "TypeError: Can't set property " + b + " of " + a + ".";
        if (pd()) throw new rd(d);
        throw Error(d);
      }
      (a instanceof fd || a instanceof qb || a instanceof rb) && a.set(b, c);
      return c;
    },
    re = function (a, b) {
      return I(this, a) - I(this, b);
    },
    se = function (a, b, c) {
      a = I(this, a);
      var d = I(this, b),
        e = I(this, c);
      if (!Ea(d) || !Ea(e)) throw Error("Error: Malformed switch instruction.");
      for (var f, g = !1, h = 0; h < d.length; h++)
        if (g || a === I(this, d[h]))
          if (((f = I(this, e[h])), f instanceof va)) {
            var m = f.h;
            if ("break" === m) return;
            if ("return" === m || "continue" === m) return f;
          } else g = !0;
      if (
        e.length === d.length + 1 &&
        ((f = I(this, e[e.length - 1])),
        f instanceof va && ("return" === f.h || "continue" === f.h))
      )
        return f;
    },
    te = function (a, b, c) {
      return I(this, a) ? I(this, b) : I(this, c);
    },
    ue = function (a) {
      a = I(this, a);
      return a instanceof fd ? "function" : typeof a;
    },
    ve = function (a) {
      for (var b = this.h, c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        "string" !== typeof d || b.add(d, void 0);
      }
    },
    we = function (a, b, c, d) {
      var e = I(this, d);
      if (I(this, c)) {
        var f = cb(this.h, e);
        if (f instanceof va) {
          if ("break" === f.h) return;
          if ("return" === f.h) return f;
        }
      }
      for (; I(this, a); ) {
        var g = cb(this.h, e);
        if (g instanceof va) {
          if ("break" === g.h) break;
          if ("return" === g.h) return g;
        }
        I(this, b);
      }
    },
    xe = function (a) {
      return ~Number(I(this, a));
    },
    ye = function (a, b) {
      return Number(I(this, a)) << Number(I(this, b));
    },
    ze = function (a, b) {
      return Number(I(this, a)) >> Number(I(this, b));
    },
    Ae = function (a, b) {
      return Number(I(this, a)) >>> Number(I(this, b));
    },
    Be = function (a, b) {
      return Number(I(this, a)) & Number(I(this, b));
    },
    Ce = function (a, b) {
      return Number(I(this, a)) ^ Number(I(this, b));
    },
    De = function (a, b) {
      return Number(I(this, a)) | Number(I(this, b));
    },
    Ee = function () {},
    Fe = function (a, b, c, d, e) {
      var f = !0;
      try {
        var g = I(this, c);
        if (g instanceof va) return g;
      } catch (q) {
        if (!(q instanceof rd && a)) throw ((f = q instanceof rd), q);
        var h = Aa(this.h);
        h.add(b, new kd(q));
        var m = I(this, d),
          n = cb(h, m);
        if (n instanceof va) return n;
      } finally {
        if (f && void 0 !== e) {
          var p = I(this, e);
          if (p instanceof va) return p;
        }
      }
    };
  var He = function () {
    this.h = new eb();
    Ge(this);
  };
  He.prototype.execute = function (a) {
    return this.h.C(a);
  };
  var Ge = function (a) {
    var b = function (c, d) {
      var e = new fd(String(c), d);
      e.Cb();
      a.h.h.set(String(c), e);
    };
    b("map", ee);
    b("and", $c);
    b("contains", cd);
    b("equals", ad);
    b("or", bd);
    b("startsWith", dd);
    b("variable", ed);
  };
  var Je = function () {
    this.h = new eb();
    Ie(this);
  };
  Je.prototype.execute = function (a) {
    return Ke(this.h.C(a));
  };
  var Le = function (a, b, c) {
      return Ke(a.h.I(b, c));
    },
    Ie = function (a) {
      var b = function (c, d) {
        var e = String(c),
          f = new fd(e, d);
        f.Cb();
        a.h.h.set(e, f);
      };
      b(0, vd);
      b(1, wd);
      b(2, xd);
      b(3, yd);
      b(56, Be);
      b(57, ye);
      b(58, xe);
      b(59, De);
      b(60, ze);
      b(61, Ae);
      b(62, Ce);
      b(53, zd);
      b(4, Ad);
      b(5, Bd);
      b(52, Cd);
      b(6, Dd);
      b(49, Ed);
      b(7, de);
      b(8, ee);
      b(9, Bd);
      b(50, Fd);
      b(10, Gd);
      b(12, Hd);
      b(13, Id);
      b(51, Ud);
      b(47, Ld);
      b(54, Nd);
      b(55, Od);
      b(63, Td);
      b(64, Qd);
      b(65, Rd);
      b(66, Sd);
      b(15, Vd);
      b(16, Wd);
      b(17, Wd);
      b(18, Xd);
      b(19, Yd);
      b(20, Zd);
      b(21, $d);
      b(22, ae);
      b(23, be);
      b(24, ce);
      b(25, fe);
      b(26, ge);
      b(27, he);
      b(28, ie);
      b(29, je);
      b(45, ke);
      b(30, le);
      b(32, me);
      b(33, me);
      b(34, ne);
      b(35, ne);
      b(46, oe);
      b(36, pe);
      b(43, qe);
      b(37, re);
      b(38, se);
      b(39, te);
      b(67, Fe);
      b(40, ue);
      b(44, Ee);
      b(41, ve);
      b(42, we);
    };
  function Ke(a) {
    if (
      a instanceof va ||
      a instanceof fd ||
      a instanceof qb ||
      a instanceof rb ||
      a instanceof kd ||
      null === a ||
      void 0 === a ||
      "string" === typeof a ||
      "number" === typeof a ||
      "boolean" === typeof a
    )
      return a;
  }
  function Me(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  function Ne(a) {
    switch (a) {
      case 1:
        return "G";
      case 3:
        return "g";
      case 2:
        return "D";
      case 4:
        return "d";
      case 0:
        return "g";
      default:
        return "g";
    }
  }
  function Oe(a, b) {
    var c = a[1] || 0,
      d = a[2] || 0;
    switch (b) {
      case 0:
        return "G1" + Me(c) + Me(d);
      case 1:
        return "G2" + Ne(c) + Ne(d);
      default:
        return "g1--";
    }
  }
  var Pe = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      Mj: a("consent"),
      Qh: a("convert_case_to"),
      Rh: a("convert_false_to"),
      Sh: a("convert_null_to"),
      Th: a("convert_true_to"),
      Uh: a("convert_undefined_to"),
      Km: a("debug_mode_metadata"),
      wa: a("function"),
      Og: a("instance_name"),
      yk: a("live_only"),
      zk: a("malware_disabled"),
      Ak: a("metadata"),
      Dk: a("original_activity_id"),
      Xm: a("original_vendor_template_id"),
      Wm: a("once_on_load"),
      Ck: a("once_per_event"),
      Ni: a("once_per_load"),
      dn: a("priority_override"),
      fn: a("respected_consent_types"),
      Ri: a("setup_tags"),
      pe: a("tag_id"),
      Wi: a("teardown_tags"),
    };
  })();
  var lf = [],
    mf = function (a) {
      return void 0 == lf[a] ? !1 : lf[a];
    };
  var nf;
  var of = [],
    pf = [],
    qf = [],
    rf = [],
    sf = [],
    tf = {},
    uf,
    vf,
    wf = function (a) {
      vf = vf || a;
    },
    xf = function (a) {},
    yf,
    zf = [],
    Af = function (a, b) {
      var c = {};
      c[Pe.wa] = "__" + a;
      for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c;
    },
    Bf = function (a, b) {
      var c = a[Pe.wa],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = tf[c],
        f =
          b &&
          2 === b.type &&
          d.reportMacroDiscrepancy &&
          e &&
          -1 !== zf.indexOf(c),
        g = {},
        h = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          0 === m.indexOf("vtp_") &&
          (e &&
            d &&
            d.checkPixieIncompatibility &&
            d.checkPixieIncompatibility(a[m]),
          e && (g[m] = a[m]),
          !e || f) &&
          (h[m.substr(4)] = a[m]);
      e &&
        d &&
        d.cachedModelValues &&
        (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (null == b.name) {
          var n;
          a: {
            var p = b.index;
            if (null == p) n = "";
            else {
              var q;
              switch (b.type) {
                case 2:
                  q = of[p];
                  break;
                case 1:
                  q = rf[p];
                  break;
                default:
                  n = "";
                  break a;
              }
              var r = q && q[Pe.Og];
              n = r ? String(r) : "";
            }
          }
          b.name = n;
        }
        e && ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
      }
      var t, u;
      e && (t = e(g));
      if (!e || f) u = nf(c, h, b);
      f &&
        d &&
        (ob(t)
          ? typeof t !== typeof u && d.reportMacroDiscrepancy(d.id, c)
          : t !== u && d.reportMacroDiscrepancy(d.id, c));
      return e ? t : u;
    },
    Df = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Cf(a[e], b, c));
      return d;
    },
    Cf = function (a, b, c) {
      if (Ea(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Cf(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = of[f];
            if (!g || b.isBlocked(g)) return;
            c[f] = !0;
            var h = String(g[Pe.Og]);
            try {
              var m = Df(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = Bf(m, { event: b, index: f, type: 2, name: h });
              yf && (d = yf.Pk(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), h), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[Cf(a[n], b, c)] = Cf(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = Cf(a[q], b, c);
              vf && (p = p || vf.Gl(r));
              d.push(r);
            }
            return vf && p ? vf.Sk(d) : d.join("");
          case "escape":
            d = Cf(a[1], b, c);
            if (vf && Ea(a[1]) && "macro" === a[1][0] && vf.Hl(a))
              return vf.fm(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) Qe[a[t]] && (d = Qe[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!rf[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return (d = { fj: a[2], index: u });
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v[Pe.wa] = a[1];
            var w = Ef(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    Ef = function (a, b, c) {
      try {
        return uf(Df(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    },
    Ff = function (a) {
      var b = a[Pe.wa];
      if (!b) throw Error("Error: No function name given for function call.");
      return !!tf[b];
    };
  var Gf = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.h = a;
  };
  ra(Gf, Error);
  function Hf(a, b) {
    if (Ea(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) Hf(a[c], b[c]);
    }
  }
  var If = function (a, b) {
    var c;
    c = Error.call(this);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.Xl = a;
    this.C = b;
    this.h = [];
  };
  ra(If, Error);
  var Kf = function () {
    return function (a, b) {
      a instanceof If || (a = new If(a, Jf));
      b && a.h.push(b);
      throw a;
    };
  };
  function Jf(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; 0 < b; b--) Da(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  var Nf = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = Lf(a), f = 0; f < pf.length; f++) {
        var g = pf[f],
          h = Mf(g, e);
        if (h) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === h && b(g.block || []);
      }
      for (var p = [], q = 0; q < rf.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Mf = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var h = b(f[g]);
        if (2 === h) return null;
        if (1 === h) return !1;
      }
      return !0;
    },
    Lf = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = Ef(qf[c], a));
        return b[c];
      };
    };
  var Of = {
    Pk: function (a, b) {
      b[Pe.Qh] &&
        "string" === typeof a &&
        (a = 1 == b[Pe.Qh] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Pe.Sh) && null === a && (a = b[Pe.Sh]);
      b.hasOwnProperty(Pe.Uh) && void 0 === a && (a = b[Pe.Uh]);
      b.hasOwnProperty(Pe.Th) && !0 === a && (a = b[Pe.Th]);
      b.hasOwnProperty(Pe.Rh) && !1 === a && (a = b[Pe.Rh]);
      return a;
    },
  };
  var Pf = function () {
    this.h = {};
  };
  function Qf(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e].call(void 0, b, c, d)), (g += ".");
        } catch (h) {
          g =
            "string" === typeof h
              ? g + (": " + h)
              : h instanceof Error
              ? g + (": " + h.message)
              : g + ".";
        }
        if (!f) throw new Gf(c, d, g);
      }
  }
  function Rf(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.h[d],
          f = a.h.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Qf(e, b, d, g);
          Qf(f, b, d, g);
        }
      }
    };
  }
  var Vf = function () {
      var a = data.permissions || {},
        b = Sf.ctid,
        c = this;
      this.C = new Pf();
      this.h = {};
      var d = {},
        e = Rf(this.C, b, function () {
          var f = arguments[0];
          return f && d[f]
            ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      l(a, function (f, g) {
        var h = {};
        l(g, function (m, n) {
          var p = Tf(m, n);
          h[m] = p.assert;
          d[m] || (d[m] = p.K);
        });
        c.h[f] = function (m, n) {
          var p = h[m];
          if (!p)
            throw Uf(
              m,
              {},
              "The requested permission " + m + " is not configured."
            );
          var q = Array.prototype.slice.call(arguments, 0);
          p.apply(void 0, q);
          e.apply(void 0, q);
        };
      });
    },
    Xf = function (a) {
      return Wf.h[a] || function () {};
    };
  function Tf(a, b) {
    var c = Af(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Uf;
    try {
      return Bf(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new Gf(e, {}, "Permission " + e + " is unknown.");
        },
        K: function () {
          for (var e = {}, f = 0; f < arguments.length; ++f)
            e["arg" + (f + 1)] = arguments[f];
          return e;
        },
      };
    }
  }
  function Uf(a, b, c) {
    return new Gf(a, b, c);
  }
  var Yf = !1;
  var Zf = {};
  Zf.Gm = Na("");
  Zf.Uk = Na("");
  var $f = Yf,
    ag = Zf.Uk,
    bg = Zf.Gm;
  var pg = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function qg(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var rg = new Ja();
  function sg(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = rg.get(e);
      f || ((f = new RegExp(b, d)), rg.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function tg(a, b) {
    return 0 <= String(a).indexOf(String(b));
  }
  function ug(a, b) {
    return String(a) === String(b);
  }
  function vg(a, b) {
    return Number(a) >= Number(b);
  }
  function wg(a, b) {
    return Number(a) <= Number(b);
  }
  function xg(a, b) {
    return Number(a) > Number(b);
  }
  function yg(a, b) {
    return Number(a) < Number(b);
  }
  function zg(a, b) {
    return 0 === String(a).indexOf(String(b));
  }
  var Gg = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Hg(a, b) {
    return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      (a << 2) | b
    ];
  }
  var Ig =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    Jg = { Fn: "function", PixieMap: "Object", List: "Array" },
    K = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = Ig.exec(b[d]);
        if (!e) throw Error("Internal Error in " + a);
        var f = e[1],
          g = "!" === e[2],
          h = e[3],
          m = c[d];
        if (null == m) {
          if (g)
            throw Error(
              "Error in " + a + ". Required argument " + f + " not supplied."
            );
        } else if ("*" !== h) {
          var n = typeof m;
          m instanceof fd
            ? (n = "Fn")
            : m instanceof qb
            ? (n = "List")
            : m instanceof rb
            ? (n = "PixieMap")
            : m instanceof kd && (n = "OpaqueValue");
          if (n != h)
            throw Error(
              "Error in " +
                a +
                ". Argument " +
                f +
                " has type " +
                (Jg[n] || n) +
                ", which does not match required type " +
                (Jg[h] || h) +
                "."
            );
        }
      }
    };
  function Kg(a) {
    return "" + a;
  }
  function Pg(a, b) {
    var c = [];
    return c;
  }
  var Qg = function (a, b) {
      var c = new fd(a, function () {
        for (
          var d = Array.prototype.slice.call(arguments, 0), e = 0;
          e < d.length;
          e++
        )
          d[e] = I(this, d[e]);
        try {
          return b.apply(this, d);
        } catch (g) {
          if (pd()) throw new rd(g.message);
          throw g;
        }
      });
      c.Cb();
      return c;
    },
    Rg = function (a, b) {
      var c = new rb(),
        d;
      for (d in b)
        if (b.hasOwnProperty(d)) {
          var e = b[d];
          Ca(e)
            ? c.set(d, Qg(a + "_" + d, e))
            : lb(e)
            ? c.set(d, Rg(a + "_" + d, e))
            : (Da(e) || k(e) || "boolean" === typeof e) && c.set(d, e);
        }
      c.Cb();
      return c;
    };
  var Sg = function (a, b) {
    K(J(this), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new rb();
    return (d = Rg("AssertApiSubject", c));
  };
  var Tg = function (a, b) {
    K(J(this), ["actual:?*", "message:?string"], arguments);
    if (a instanceof md)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new rb();
    return (d = Rg("AssertThatSubject", c));
  };
  function Ug(a) {
    return function () {
      for (var b = [], c = this.h, d = 0; d < arguments.length; ++d)
        b.push(od(arguments[d], c));
      return nd(a.apply(null, b));
    };
  }
  var Wg = function () {
    for (var a = Math, b = Vg, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Ug(a[e].bind(a)));
    }
    return c;
  };
  var Xg = function (a) {
    var b;
    return b;
  };
  var Yg = function (a) {
    var b;
    return b;
  };
  var Zg = function (a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  };
  var $g = function (a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
  };
  function ah(a, b) {
    var c = !1;
    return c;
  }
  ah.F = "internal.evaluateBooleanExpression";
  var fh = function (a) {
    K(J(this), ["message:?string"], arguments);
  };
  var gh = function (a, b) {
    K(J(this), ["min:!number", "max:!number"], arguments);
    return Ha(a, b);
  };
  var hh = function () {
    return new Date().getTime();
  };
  var ih = function (a) {
    if (null === a) return "null";
    if (a instanceof qb) return "array";
    if (a instanceof fd) return "function";
    if (a instanceof kd) {
      a = a.h;
      if (void 0 === a.constructor || void 0 === a.constructor.name) {
        var b = String(a);
        return b.substring(8, b.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  };
  var jh = function (a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          ($f || bg) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return nd(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(od(c));
      }),
    };
  };
  var kh = function (a) {
    return Ma(od(a, this.h));
  };
  var lh = function (a) {
    return Number(od(a, this.h));
  };
  var mh = function (a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a.toString();
  };
  var nh = function (a, b, c) {
    var d = null,
      e = !1;
    return e ? d : null;
  };
  var Vg = "floor ceil round max min abs pow sqrt".split(" ");
  var oh = function () {
      var a = {};
      return {
        kl: function (b) {
          return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        ym: function (b, c) {
          a[b] = c;
        },
        reset: function () {
          a = {};
        },
      };
    },
    ph = function (a, b) {
      return function () {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return fd.prototype.invoke.apply(a, c);
      };
    },
    qh = function (a, b) {
      K(J(this), ["apiName:!string", "mock:?*"], arguments);
    };
  var rh = {};
  rh.keys = function (a) {
    return new qb();
  };
  rh.values = function (a) {
    return new qb();
  };
  rh.entries = function (a) {
    return new qb();
  };
  rh.freeze = function (a) {
    return a;
  };
  rh.delete = function (a, b) {
    return !1;
  };
  var L = function (a, b, c) {
    var d = a.h.h;
    if (!d) throw Error("Missing program state.");
    if (d.lm) {
      try {
        d.aj.apply(null, Array.prototype.slice.call(arguments, 1));
      } catch (e) {
        throw (zb("TAGGING", 21), e);
      }
      return;
    }
    d.aj.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  var th = function () {
    this.h = {};
    this.C = {};
  };
  th.prototype.get = function (a, b) {
    var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
    return c;
  };
  th.prototype.add = function (a, b, c) {
    if (this.h.hasOwnProperty(a))
      throw "Attempting to add a function which already exists: " + a + ".";
    if (this.C.hasOwnProperty(a))
      throw (
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.h[a] = c ? void 0 : Ca(b) ? Qg(a, b) : Rg(a, b);
  };
  function uh(a, b) {
    var c = void 0;
    return c;
  }
  function vh() {
    var a = {};
    return a;
  }
  var xh = function (a) {
      return wh ? B.querySelectorAll(a) : null;
    },
    yh = function (a, b) {
      if (!wh) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!B.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    zh = !1;
  if (B.querySelectorAll)
    try {
      var Ah = B.querySelectorAll(":root");
      Ah && 1 == Ah.length && Ah[0] == B.documentElement && (zh = !0);
    } catch (a) {}
  var wh = zh;
  var M = function (a) {
    zb("GTM", a);
  };
  var N = {
      g: {
        nb: "ad_personalization",
        J: "ad_storage",
        N: "ad_user_data",
        T: "analytics_storage",
        Ra: "region",
        pd: "consent_updated",
        rd: "wait_for_update",
        Qj: "ads",
        Xf: "all",
        Rj: "android",
        Sj: "chrome",
        Tj: "maps",
        Uj: "playstore",
        Vj: "search",
        Wj: "shopping",
        Xj: "youtube",
        Vh: "app_remove",
        Wh: "app_store_refund",
        Xh: "app_store_subscription_cancel",
        Yh: "app_store_subscription_convert",
        Zh: "app_store_subscription_renew",
        Zf: "add_payment_info",
        ag: "add_shipping_info",
        bc: "add_to_cart",
        fc: "remove_from_cart",
        cg: "view_cart",
        Gb: "begin_checkout",
        hc: "select_item",
        Ya: "view_item_list",
        ob: "select_promotion",
        Za: "view_promotion",
        na: "purchase",
        ic: "refund",
        Ba: "view_item",
        dg: "add_to_wishlist",
        Yj: "exception",
        ai: "first_open",
        bi: "first_visit",
        oa: "gtag.config",
        Ja: "gtag.get",
        di: "in_app_purchase",
        jc: "page_view",
        Zj: "screen_view",
        ei: "session_start",
        bk: "timing_complete",
        dk: "track_social",
        ud: "user_engagement",
        pb: "gclid",
        qa: "ads_data_redaction",
        ia: "allow_ad_personalization_signals",
        Xe: "allow_custom_scripts",
        Ye: "allow_display_features",
        vd: "allow_enhanced_conversions",
        qb: "allow_google_signals",
        Fa: "allow_interest_groups",
        ek: "app_id",
        fk: "app_installer_id",
        gk: "app_name",
        hk: "app_version",
        kc: "auid",
        fi: "auto_detection_enabled",
        Hb: "aw_remarketing",
        Ze: "aw_remarketing_only",
        wd: "discount",
        xd: "aw_feed_country",
        yd: "aw_feed_language",
        aa: "items",
        zd: "aw_merchant_id",
        eg: "aw_basket_type",
        Ec: "campaign_content",
        Fc: "campaign_id",
        Gc: "campaign_medium",
        Hc: "campaign_name",
        Ic: "campaign",
        Jc: "campaign_source",
        Kc: "campaign_term",
        rb: "client_id",
        gi: "content_group",
        hi: "content_type",
        Ka: "conversion_cookie_prefix",
        Lc: "conversion_id",
        Ca: "conversion_linker",
        Ib: "conversion_api",
        Sa: "cookie_domain",
        Ga: "cookie_expires",
        Ta: "cookie_flags",
        mc: "cookie_name",
        Mc: "cookie_path",
        La: "cookie_prefix",
        sb: "cookie_update",
        nc: "country",
        ra: "currency",
        Ad: "customer_lifetime_value",
        Nc: "custom_map",
        ii: "gcldc",
        ji: "debug_mode",
        ba: "developer_id",
        ki: "disable_merchant_reported_purchases",
        Oc: "dc_custom_params",
        li: "dc_natural_search",
        fg: "dynamic_event_settings",
        gg: "affiliation",
        Bd: "checkout_option",
        af: "checkout_step",
        hg: "coupon",
        Pc: "item_list_name",
        bf: "list_name",
        mi: "promotions",
        Qc: "shipping",
        cf: "tax",
        Cd: "engagement_time_msec",
        Dd: "enhanced_client_id",
        Ed: "enhanced_conversions",
        ig: "enhanced_conversions_automatic_settings",
        Fd: "estimated_delivery_date",
        df: "euid_logged_in_state",
        Rc: "event_callback",
        ik: "event_category",
        tb: "event_developer_id_string",
        jk: "event_label",
        jg: "event",
        Gd: "event_settings",
        Hd: "event_timeout",
        kk: "description",
        lk: "fatal",
        ni: "experiments",
        ef: "firebase_id",
        Id: "first_party_collection",
        Jd: "_x_20",
        Jb: "_x_19",
        kg: "fledge",
        lg: "flight_error_code",
        mg: "flight_error_message",
        oi: "fl_activity_category",
        ri: "fl_activity_group",
        ng: "fl_advertiser_id",
        si: "fl_ar_dedupe",
        ui: "fl_random_number",
        vi: "tran",
        wi: "u",
        Kd: "gac_gclid",
        oc: "gac_wbraid",
        og: "gac_wbraid_multiple_conversions",
        pg: "ga_restrict_domain",
        qg: "ga_temp_client_id",
        Ld: "gdpr_applies",
        rg: "geo_granularity",
        ub: "value_callback",
        cb: "value_key",
        mk: "google_ono",
        eb: "google_signals",
        sg: "google_tld",
        Md: "groups",
        ug: "gsa_experiment_id",
        vg: "iframe_state",
        Sc: "ignore_referrer",
        ff: "internal_traffic_results",
        Kb: "is_legacy_converted",
        wb: "is_legacy_loaded",
        Nd: "is_passthrough",
        hf: "_lps",
        Ha: "language",
        jf: "legacy_developer_id_string",
        Da: "linker",
        qc: "accept_incoming",
        xb: "decorate_forms",
        U: "domains",
        Lb: "url_position",
        wg: "method",
        nk: "name",
        Tc: "new_customer",
        xg: "non_interaction",
        xi: "optimize_id",
        yi: "page_hostname",
        Uc: "page_path",
        Ia: "page_referrer",
        yb: "page_title",
        yg: "passengers",
        zg: "phone_conversion_callback",
        zi: "phone_conversion_country_code",
        Ag: "phone_conversion_css_class",
        Ai: "phone_conversion_ids",
        Bg: "phone_conversion_number",
        Cg: "phone_conversion_options",
        Vc: "quantity",
        Od: "redact_device_info",
        Pd: "referral_exclusion_definition",
        Mb: "restricted_data_processing",
        Bi: "retoken",
        pk: "sample_rate",
        kf: "screen_name",
        zb: "screen_resolution",
        Ci: "search_term",
        Ma: "send_page_view",
        Nb: "send_to",
        Qd: "server_container_url",
        Wc: "session_duration",
        Rd: "session_engaged",
        lf: "session_engaged_time",
        Ab: "session_id",
        Sd: "session_number",
        Xc: "delivery_postal_code",
        qk: "temporary_client_id",
        nf: "topmost_url",
        Di: "tracking_id",
        pf: "traffic_type",
        sa: "transaction_id",
        Ob: "transport_url",
        Dg: "trip_type",
        Pb: "update",
        Bb: "url_passthrough",
        Ud: "_user_agent_architecture",
        Vd: "_user_agent_bitness",
        Wd: "_user_agent_full_version_list",
        Xd: "_user_agent_mobile",
        Yd: "_user_agent_model",
        Zd: "_user_agent_platform",
        ae: "_user_agent_platform_version",
        be: "_user_agent_wow64",
        za: "user_data",
        Eg: "user_data_auto_latency",
        Fg: "user_data_auto_meta",
        Gg: "user_data_auto_multi",
        Hg: "user_data_auto_selectors",
        Ig: "user_data_auto_status",
        ce: "user_data_mode",
        de: "user_data_settings",
        Na: "user_id",
        Ua: "user_properties",
        Ei: "_user_region",
        Jg: "us_privacy_string",
        ja: "value",
        sc: "wbraid",
        Kg: "wbraid_multiple_conversions",
        Ki: "_host_name",
        Li: "_in_page_command",
        Mi: "_is_passthrough_cid",
        je: "non_personalized_ads",
        oe: "_sst_parameters",
        ab: "conversion_label",
        ya: "page_location",
        vb: "global_developer_id_string",
        Td: "tc_privacy_string",
      },
    },
    Yh = {},
    Zh = Object.freeze(
      ((Yh[N.g.ia] = 1),
      (Yh[N.g.Ye] = 1),
      (Yh[N.g.vd] = 1),
      (Yh[N.g.qb] = 1),
      (Yh[N.g.aa] = 1),
      (Yh[N.g.Sa] = 1),
      (Yh[N.g.Ga] = 1),
      (Yh[N.g.Ta] = 1),
      (Yh[N.g.mc] = 1),
      (Yh[N.g.Mc] = 1),
      (Yh[N.g.La] = 1),
      (Yh[N.g.sb] = 1),
      (Yh[N.g.Nc] = 1),
      (Yh[N.g.ba] = 1),
      (Yh[N.g.fg] = 1),
      (Yh[N.g.Rc] = 1),
      (Yh[N.g.Gd] = 1),
      (Yh[N.g.Hd] = 1),
      (Yh[N.g.Id] = 1),
      (Yh[N.g.pg] = 1),
      (Yh[N.g.eb] = 1),
      (Yh[N.g.sg] = 1),
      (Yh[N.g.Md] = 1),
      (Yh[N.g.ff] = 1),
      (Yh[N.g.Kb] = 1),
      (Yh[N.g.wb] = 1),
      (Yh[N.g.Da] = 1),
      (Yh[N.g.Pd] = 1),
      (Yh[N.g.Mb] = 1),
      (Yh[N.g.Ma] = 1),
      (Yh[N.g.Nb] = 1),
      (Yh[N.g.Qd] = 1),
      (Yh[N.g.Wc] = 1),
      (Yh[N.g.lf] = 1),
      (Yh[N.g.Xc] = 1),
      (Yh[N.g.Ob] = 1),
      (Yh[N.g.Pb] = 1),
      (Yh[N.g.de] = 1),
      (Yh[N.g.Ua] = 1),
      (Yh[N.g.oe] = 1),
      Yh)
    );
  Object.freeze([
    N.g.ya,
    N.g.Ia,
    N.g.yb,
    N.g.Ha,
    N.g.kf,
    N.g.Na,
    N.g.ef,
    N.g.gi,
  ]);
  var $h = {},
    ai = Object.freeze(
      (($h[N.g.Vh] = 1),
      ($h[N.g.Wh] = 1),
      ($h[N.g.Xh] = 1),
      ($h[N.g.Yh] = 1),
      ($h[N.g.Zh] = 1),
      ($h[N.g.ai] = 1),
      ($h[N.g.bi] = 1),
      ($h[N.g.di] = 1),
      ($h[N.g.ei] = 1),
      ($h[N.g.ud] = 1),
      $h)
    ),
    bi = {},
    ci = Object.freeze(
      ((bi[N.g.Zf] = 1),
      (bi[N.g.ag] = 1),
      (bi[N.g.bc] = 1),
      (bi[N.g.fc] = 1),
      (bi[N.g.cg] = 1),
      (bi[N.g.Gb] = 1),
      (bi[N.g.hc] = 1),
      (bi[N.g.Ya] = 1),
      (bi[N.g.ob] = 1),
      (bi[N.g.Za] = 1),
      (bi[N.g.na] = 1),
      (bi[N.g.ic] = 1),
      (bi[N.g.Ba] = 1),
      (bi[N.g.dg] = 1),
      bi)
    ),
    di = Object.freeze([N.g.ia, N.g.qb, N.g.sb, N.g.Sc, N.g.Pb]),
    ei = Object.freeze([].concat(di)),
    fi = Object.freeze([N.g.Ga, N.g.Hd, N.g.Wc, N.g.lf, N.g.Cd]),
    gi = Object.freeze([].concat(fi)),
    hi = {},
    ii =
      ((hi[N.g.J] = "1"),
      (hi[N.g.T] = "2"),
      (hi[N.g.N] = "3"),
      (hi[N.g.nb] = "4"),
      hi),
    ji = {},
    ki = Object.freeze(
      ((ji[N.g.ia] = 1),
      (ji[N.g.vd] = 1),
      (ji[N.g.Fa] = 1),
      (ji[N.g.Hb] = 1),
      (ji[N.g.Ze] = 1),
      (ji[N.g.wd] = 1),
      (ji[N.g.xd] = 1),
      (ji[N.g.yd] = 1),
      (ji[N.g.aa] = 1),
      (ji[N.g.zd] = 1),
      (ji[N.g.Ka] = 1),
      (ji[N.g.Ca] = 1),
      (ji[N.g.Sa] = 1),
      (ji[N.g.Ga] = 1),
      (ji[N.g.Ta] = 1),
      (ji[N.g.La] = 1),
      (ji[N.g.ra] = 1),
      (ji[N.g.Ad] = 1),
      (ji[N.g.ba] = 1),
      (ji[N.g.ki] = 1),
      (ji[N.g.Ed] = 1),
      (ji[N.g.Fd] = 1),
      (ji[N.g.ef] = 1),
      (ji[N.g.Id] = 1),
      (ji[N.g.Kb] = 1),
      (ji[N.g.wb] = 1),
      (ji[N.g.Ha] = 1),
      (ji[N.g.Tc] = 1),
      (ji[N.g.ya] = 1),
      (ji[N.g.Ia] = 1),
      (ji[N.g.zg] = 1),
      (ji[N.g.Ag] = 1),
      (ji[N.g.Bg] = 1),
      (ji[N.g.Cg] = 1),
      (ji[N.g.Mb] = 1),
      (ji[N.g.Ma] = 1),
      (ji[N.g.Nb] = 1),
      (ji[N.g.Qd] = 1),
      (ji[N.g.Xc] = 1),
      (ji[N.g.sa] = 1),
      (ji[N.g.Ob] = 1),
      (ji[N.g.Pb] = 1),
      (ji[N.g.Bb] = 1),
      (ji[N.g.za] = 1),
      (ji[N.g.Na] = 1),
      (ji[N.g.ja] = 1),
      ji)
    ),
    li = {},
    mi = Object.freeze(
      ((li[N.g.Vj] = "s"),
      (li[N.g.Xj] = "y"),
      (li[N.g.Rj] = "n"),
      (li[N.g.Sj] = "c"),
      (li[N.g.Uj] = "p"),
      (li[N.g.Wj] = "h"),
      (li[N.g.Qj] = "a"),
      (li[N.g.Tj] = "m"),
      li)
    );
  Object.freeze(N.g);
  var ni = {},
    oi = (z.google_tag_manager = z.google_tag_manager || {}),
    pi = Math.random();
  ni.Pg = "3a40";
  ni.ne = Number("0") || 0;
  ni.fa = "dataLayer";
  ni.Oj =
    "ChAI8IOEqQYQ/ayVptrE++gLEicATkBL28Zjh3ykD107AMtNNI6q7SgVlCKwDGuh7e+0HPoYqKjFN9UaAkfW";
  var qi = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    ri = { __paused: 1, __tg: 1 },
    si;
  for (si in qi) qi.hasOwnProperty(si) && (ri[si] = 1);
  var ti = Na(""),
    ui,
    vi = !1;
  vi = !0;
  ui = vi;
  var wi,
    xi = !1;
  wi = xi;
  var yi,
    zi = !1;
  yi = zi;
  var Ai,
    Bi = !1;
  Ai = Bi;
  ni.We = "www.googletagmanager.com";
  var Ci = "" + ni.We + (ui ? "/gtag/js" : "/gtm.js"),
    Di = null,
    Ei = null,
    Fi = {},
    Gi = {},
    Hi = {},
    Ii = function () {
      var a = oi.sequence || 1;
      oi.sequence = a + 1;
      return a;
    };
  ni.Nj = "";
  var Ji = "";
  ni.vf = Ji;
  var Ki = new Ja(),
    Li = {},
    Si = {},
    Vi = {
      name: ni.fa,
      set: function (a, b) {
        mb(Za(a, b), Li);
        Ti();
      },
      get: function (a) {
        return Ui(a, 2);
      },
      reset: function () {
        Ki = new Ja();
        Li = {};
        Ti();
      },
    },
    Ui = function (a, b) {
      return 2 != b ? Ki.get(a) : Wi(a);
    },
    Wi = function (a, b) {
      var c = a.split(".");
      b = b || [];
      for (var d = Li, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    Xi = function (a, b) {
      Si.hasOwnProperty(a) || (Ki.set(a, b), mb(Za(a, b), Li), Ti());
    },
    Yi = function () {
      for (
        var a = [
            "gtm.allowlist",
            "gtm.blocklist",
            "gtm.whitelist",
            "gtm.blacklist",
            "tagTypeBlacklist",
          ],
          b = 0;
        b < a.length;
        b++
      ) {
        var c = a[b],
          d = Ui(c, 1);
        if (Ea(d) || lb(d)) d = mb(d);
        Si[c] = d;
      }
    },
    Ti = function (a) {
      l(Si, function (b, c) {
        Ki.set(b, c);
        mb(Za(b), Li);
        mb(Za(b, c), Li);
        a && delete Si[b];
      });
    },
    Zi = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Wi(a) : Ki.get(a);
      "array" === jb(d) || "object" === jb(d) ? (c = mb(d)) : (c = d);
      return c;
    };
  var P = [];
  P[5] = !0;
  P[6] = !0;
  P[11] = !0;
  P[7] = !0;
  P[8] = !0;
  P[20] = !0;
  P[9] = !0;
  P[10] = !0;
  P[13] = !0;
  P[14] = !0;
  P[15] = !0;
  P[22] = !0;
  P[23] = !0;
  P[25] = !0;
  P[18] = !0;
  P[26] = !0;
  P[29] = !0;
  P[30] = !0;
  P[31] = !0;
  P[32] = !0;
  P[33] = !0;
  P[34] = !0;
  P[36] = !0;
  P[38] = !0;
  P[39] = !0;
  P[40] = !0;
  P[51] = !0;
  P[52] = !0;
  P[53] = !0;
  P[54] = !0;
  P[56] = !0;
  P[57] = !0;
  P[61] = !0;
  P[62] = !0;
  P[65] = !0;
  P[68] = !0;
  P[69] = !0;
  P[70] = !0;
  lf[7] = !0;
  P[66] = !0;
  P[71] = !0;
  P[72] = !0;
  P[73] = !0;
  P[78] = !0;
  P[79] = !0;
  P[83] = !0;
  P[84] = !0;
  P[85] = !0;
  P[87] = !0;
  P[90] = !0;
  P[92] = !0;
  P[95] = !0;
  P[98] = !0;
  P[101] = !0;
  function Q(a) {
    return !!P[a];
  }
  var fj = function (a) {
    zb("HEALTH", a);
  };
  var gj;
  try {
    gj = JSON.parse(
      xb(
        "eyIwIjoiQ04iLCIxIjoiIiwiMiI6dHJ1ZSwiMyI6Imdvb2dsZS5jbiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"
      )
    );
  } catch (a) {
    M(123), fj(2), (gj = {});
  }
  var hj = function () {
      return gj["0"] || "";
    },
    ij = function () {
      return gj["1"] || "";
    },
    jj = function () {
      var a = !1;
      return a;
    },
    kj = function () {
      var a = "";
      return a;
    },
    lj = function () {
      var a = !1;
      return a;
    },
    mj = function () {
      var a = "";
      return a;
    };
  var nj = new (function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var oj = function (a) {
    oj[" "](a);
    return a;
  };
  oj[" "] = function () {};
  var qj = function () {
    var a = pj,
      b = "jh";
    if (a.jh && a.hasOwnProperty(b)) return a.jh;
    var c = new a();
    return (a.jh = c);
  };
  var pj = function () {
    var a = {};
    this.h = function () {
      var b = nj.h,
        c = nj.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.C = function () {
      a[nj.h] = !0;
    };
  };
  var rj = !1,
    sj = !1,
    tj = {},
    uj = {},
    vj = !1,
    wj = { ad_storage: !1, ad_user_data: !1, ad_personalization: !1 };
  function xj() {
    var a = Gc("google_tag_data", {});
    return (a.ics = a.ics || new yj());
  }
  var yj = function () {
    this.entries = {};
    this.cps = {};
    this.wasSetLate =
      this.accessedAny =
      this.accessedDefault =
      this.usedSetCps =
      this.usedImplicit =
      this.usedUpdate =
      this.usedDefault =
      this.usedDeclare =
      this.active =
        !1;
    this.h = [];
  };
  yj.prototype.default = function (a, b, c, d, e, f) {
    this.usedDefault ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    zb("TAGGING", 19);
    void 0 == b ? zb("TAGGING", 18) : zj(this, a, "granted" === b, c, d, e, f);
  };
  yj.prototype.waitForUpdate = function (a, b) {
    for (var c = 0; c < a.length; c++)
      zj(this, a[c], void 0, void 0, "", "", b);
  };
  var zj = function (a, b, c, d, e, f, g) {
    var h = a.entries,
      m = h[b] || {},
      n = m.region,
      p = d && k(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (Aj(p, n, e, f)) {
      var q = !!(g && 0 < g && void 0 === m.update),
        r = {
          region: p,
          declare_region: m.declare_region,
          implicit: m.implicit,
          default: void 0 !== c ? c : m.default,
          declare: m.declare,
          update: m.update,
          quiet: q,
        };
      if ("" !== e || !1 !== m.default) h[b] = r;
      q &&
        z.setTimeout(function () {
          if (h[b] === r && r.quiet) {
            r.quiet = !1;
            var t = [b];
            if (mf(4))
              for (var u in tj)
                tj.hasOwnProperty(u) && tj[u] === b && t.push(u);
            for (var v = 0; v < t.length; v++) Bj(a, t[v]);
            a.notifyListeners();
            zb("TAGGING", 2);
          }
        }, g);
    }
  };
  aa = yj.prototype;
  aa.update = function (a, b) {
    this.usedDefault ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (void 0 != b) {
      var c = this.getConsentState(a),
        d = this.entries,
        e = (d[a] = d[a] || {});
      e.update = "granted" === b;
      var f = this.getConsentState(a),
        g = [a];
      if (mf(4))
        for (var h in tj) tj.hasOwnProperty(h) && tj[h] === a && g.push(h);
      if (e.quiet) {
        e.quiet = !1;
        for (var m = 0; m < g.length; m++) Bj(this, g[m]);
      } else if (f !== c) for (var n = 0; n < g.length; n++) Bj(this, g[n]);
    }
  };
  aa.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      g = f[a] || {},
      h = g.declare_region,
      m = c && k(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (Aj(m, h, d, e)) {
      var n = {
        region: g.region,
        declare_region: m,
        declare: "granted" === b,
        implicit: g.implicit,
        default: g.default,
        update: g.update,
        quiet: g.quiet,
      };
      if ("" !== d || !1 !== g.declare) f[a] = n;
    }
  };
  aa.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = (c[a] = c[a] || {});
    !1 !== d.implicit && (d.implicit = "granted" === b);
  };
  aa.getConsentState = function (a) {
    var b = this.entries,
      c = b[a] || {},
      d = c.update;
    if (void 0 !== d) return d ? 1 : 2;
    d = c.default;
    if (void 0 !== d) return d ? 1 : 2;
    if (mf(4) && tj.hasOwnProperty(a)) {
      var e = b[tj[a]] || {};
      d = e.update;
      if (void 0 !== d) return d ? 1 : 2;
      d = e.default;
      if (void 0 !== d) return d ? 1 : 2;
    }
    d = c.declare;
    if (void 0 !== d) return d ? 1 : 2;
    if (mf(3)) {
      d = c.implicit;
      if (void 0 !== d) return d ? 3 : 4;
      if (wj.hasOwnProperty(a)) return wj[a] ? 3 : 4;
    }
    return 0;
  };
  aa.setCps = function (a, b, c, d, e) {
    Cj(this.cps, a, b, c, d, e) && (this.usedSetCps = !0);
  };
  aa.addListener = function (a, b) {
    this.h.push({ consentTypes: a, Zk: b });
  };
  var Bj = function (a, b) {
    for (var c = 0; c < a.h.length; ++c) {
      var d = a.h[c];
      Ea(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.tj = !0);
    }
  };
  yj.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.h.length; ++c) {
      var d = this.h[c];
      if (d.tj) {
        d.tj = !1;
        try {
          d.Zk({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  };
  function Aj(a, b, c, d) {
    return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b;
  }
  function Cj(a, b, c, d, e, f) {
    var g = a[b] || {},
      h = g.region,
      m = d && k(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (Aj(m, h, e, f)) {
      var n = { enabled: "granted" === c, region: m };
      if ("" !== e || !1 !== g.enabled) return (a[b] = n), !0;
    }
    return !1;
  }
  var Dj = function (a) {
      var b = xj();
      b.accessedAny = !0;
      switch (b.getConsentState(a)) {
        case 1:
        case 3:
          return !0;
        case 2:
        case 4:
          return !1;
        default:
          return !0;
      }
    },
    Ej = function (a) {
      var b = xj();
      b.accessedDefault = !0;
      switch ((b.entries[a] || {}).default) {
        case !0:
          return 3;
        case !1:
          return 2;
        default:
          return 1;
      }
    },
    Fj = function (a) {
      var b = xj();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Gj = function () {
      if (!qj().h()) return !1;
      var a = xj();
      a.accessedAny = !0;
      return a.active;
    },
    Hj = function () {
      var a = xj();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Ij = function (a, b) {
      xj().addListener(a, b);
    },
    Jj = function (a, b) {
      xj().notifyListeners(a, b);
    },
    Kj = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Fj(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Ij(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    Lj = function (a, b) {
      function c() {
        for (var h = [], m = 0; m < e.length; m++) {
          var n = e[m];
          Dj(n) && !f[n] && h.push(n);
        }
        return h;
      }
      function d(h) {
        for (var m = 0; m < h.length; m++) f[h[m]] = !0;
      }
      var e = k(b) ? [b] : b,
        f = {},
        g = c();
      g.length !== e.length &&
        (d(g),
        Ij(e, function (h) {
          function m(q) {
            0 !== q.length && (d(q), (h.consentTypes = q), a(h));
          }
          var n = c();
          if (0 !== n.length) {
            var p = Object.keys(f).length;
            n.length + p >= e.length
              ? m(n)
              : z.setTimeout(function () {
                  m(c());
                }, 500);
          }
        }));
    };
  function Mj() {}
  function Nj() {}
  var Oj = [N.g.J, N.g.T, N.g.N, N.g.nb],
    Pj = function (a) {
      for (
        var b = a[N.g.Ra], c = Array.isArray(b) ? b : [b], d = { Ee: 0 };
        d.Ee < c.length;
        d = { Ee: d.Ee }, ++d.Ee
      )
        l(
          a,
          (function (e) {
            return function (f, g) {
              if (f !== N.g.Ra) {
                var h = c[e.Ee],
                  m = hj(),
                  n = ij();
                sj = !0;
                rj && zb("TAGGING", 20);
                xj().declare(f, g, h, m, n);
              }
            };
          })(d)
        );
    },
    Qj = function (a) {
      var b = a[N.g.Ra];
      b && M(40);
      var c = a[N.g.rd];
      c && M(41);
      for (
        var d = Ea(b) ? b : [b], e = { Fe: 0 };
        e.Fe < d.length;
        e = { Fe: e.Fe }, ++e.Fe
      )
        l(
          a,
          (function (f) {
            return function (g, h) {
              if (g !== N.g.Ra && g !== N.g.rd) {
                var m = d[f.Fe],
                  n = Number(c),
                  p = hj(),
                  q = ij();
                rj = !0;
                sj && zb("TAGGING", 20);
                xj().default(g, h, m, p, q, n);
              }
            };
          })(e)
        );
    },
    Rj = function (a, b) {
      l(a, function (c, d) {
        rj = !0;
        sj && zb("TAGGING", 20);
        xj().update(c, d);
      });
      Jj(b.eventId, b.priorityId);
    },
    Sj = function (a) {
      for (
        var b = a[N.g.Ra], c = Array.isArray(b) ? b : [b], d = { Ge: 0 };
        d.Ge < c.length;
        d = { Ge: d.Ge }, ++d.Ge
      )
        l(
          a,
          (function (e) {
            return function (f, g) {
              if (f !== N.g.Ra) {
                var h = c[e.Ge],
                  m = hj(),
                  n = ij();
                xj().setCps(f, g, h, m, n);
              }
            };
          })(d)
        );
    },
    Tj = function (a) {
      for (
        var b = a[N.g.Ra], c = Array.isArray(b) ? b : [b], d = { ed: 0 };
        d.ed < c.length;
        d = { ed: d.ed }, ++d.ed
      )
        a.hasOwnProperty(N.g.Xf) &&
          l(
            mi,
            (function (e) {
              return function (f) {
                Cj(uj, f, a[N.g.Xf], c[e.ed], hj(), ij()) && (vj = !0);
              };
            })(d)
          ),
          l(
            a,
            (function (e) {
              return function (f, g) {
                f !== N.g.Ra &&
                  f !== N.g.Xf &&
                  Cj(uj, f, g, c[e.ed], hj(), ij()) &&
                  (vj = !0);
              };
            })(d)
          );
    },
    T = function (a) {
      Array.isArray(a) || (a = [a]);
      return a.every(function (b) {
        return Dj(b);
      });
    },
    Uj = function (a, b) {
      Ij(a, b);
    },
    Vj = function (a, b) {
      Lj(a, b);
    },
    Wj = function (a, b) {
      Kj(a, b);
    },
    Xj = function (a) {
      xj().waitForUpdate(a, 500);
    };
  var Yj = function (a) {
      var b = String(a[Pe.wa] || "").replace(/_/g, "");
      0 === b.indexOf("cvt") && (b = "cvt");
      return b;
    },
    Zj =
      0 <= z.location.search.indexOf("?gtm_latency=") ||
      0 <= z.location.search.indexOf("&gtm_latency=");
  var bk = function (a, b) {
      var c = ak();
      c.pending || (c.pending = []);
      Ga(c.pending, function (d) {
        return (
          d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
        );
      }) || c.pending.push({ target: a, onLoad: b });
    },
    ck = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
      this.pending = [];
      this.siloed = [];
    },
    ak = function () {
      var a = Gc("google_tag_data", {}),
        b = a.tidr;
      b || ((b = new ck()), (a.tidr = b));
      return b;
    };
  var dk = {},
    ek = !1,
    Sf = {
      ctid: "UA-114367637-1",
      bj: "",
      rj: "UA-114367637-1",
      sj: "UA-114367637-1",
    };
  dk.ie = Na("");
  var hk = function () {
      var a = fk();
      return ek ? a.map(gk) : a;
    },
    jk = function () {
      var a = ik();
      return ek ? a.map(gk) : a;
    },
    lk = function () {
      return kk(Sf.ctid);
    },
    mk = function () {
      return kk(Sf.bj || "_" + Sf.ctid);
    },
    fk = function () {
      return Sf.rj ? Sf.rj.split("|") : [Sf.ctid];
    },
    ik = function () {
      return Sf.sj ? Sf.sj.split("|") : [];
    },
    nk = function (a) {
      var b = ak();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
    },
    kk = function (a) {
      return ek ? gk(a) : a;
    },
    gk = function (a) {
      return "siloed_" + a;
    },
    ok = function (a) {
      a = String(a);
      return ek && 0 === a.indexOf("siloed_") ? a.substring(7) : a;
    },
    pk = function () {
      var a = !1;
      if (a) {
        var b = ak();
        if (b.siloed) {
          for (
            var c = [], d = fk(), e = ik(), f = {}, g = 0;
            g < b.siloed.length;
            f = { ue: f.ue }, g++
          )
            (f.ue = b.siloed[g]),
              !ek &&
              Ga(
                f.ue.isDestination ? e : d,
                (function (h) {
                  return function (m) {
                    return m === h.ue.ctid;
                  };
                })(f)
              )
                ? (ek = !0)
                : c.push(f.ue);
          b.siloed = c;
        }
      }
    };
  function qk() {
    var a = ak();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = hk(), f = jk(), g = {}, h = 0;
        h < a.pending.length;
        g = { kd: g.kd }, h++
      )
        (g.kd = a.pending[h]),
          Ga(
            g.kd.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.kd.target.ctid;
              };
            })(g)
          )
            ? d || ((b = g.kd.onLoad), (d = !0))
            : c.push(g.kd);
      a.pending = c;
      if (b)
        try {
          b(mk());
        } catch (m) {}
    }
  }
  var rk = function () {
      for (var a = ak(), b = hk(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        d
          ? ((d.state = 2), (d.containers = hk()), (d.destinations = jk()))
          : (a.container[b[c]] = {
              state: 2,
              containers: hk(),
              destinations: jk(),
            });
      }
      for (var e = jk(), f = 0; f < e.length; f++) {
        var g = a.destination[e[f]];
        g && 0 === g.state && M(93);
        g
          ? ((g.state = 2), (g.containers = hk()), (g.destinations = jk()))
          : (a.destination[e[f]] = {
              state: 2,
              containers: hk(),
              destinations: jk(),
            });
      }
      a.canonical[mk()] = {};
      qk();
    },
    sk = function (a) {
      return !!ak().container[a];
    },
    tk = function (a) {
      var b = ak().destination[a];
      return !!b && !!b.state;
    },
    uk = function () {
      return { ctid: lk(), isDestination: dk.ie };
    };
  function vk(a) {
    var b = ak();
    (b.siloed = b.siloed || []).push(a);
  }
  var wk = function () {
      var a = ak().container,
        b;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1;
    },
    xk = function () {
      var a = {};
      l(ak().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    },
    yk = function (a) {
      return !!(
        a &&
        a.parent &&
        a.context &&
        1 === a.context.source &&
        0 !== a.parent.ctid.indexOf("GTM-")
      );
    };
  var zk = { sampleRate: "0.005000", Jj: "", Ij: Number("5"), qn: Number("") },
    Ak = [];
  function Bk(a) {
    Ak.push(a);
  }
  var Ck = !1,
    Dk;
  if (!(Dk = Zj)) {
    var Ek = Math.random(),
      Fk = zk.sampleRate;
    Dk = Ek < Number(Fk);
  }
  var Gk = Dk,
    Hk = "https://www.googletagmanager.com/a?id=" + Sf.ctid,
    Ik = void 0,
    Jk = {},
    Kk = void 0,
    Lk = new (function () {
      var a = 5;
      0 < zk.Ij && (a = zk.Ij);
      this.h = 0;
      this.D = [];
      this.C = a;
    })(),
    Mk = 1e3;
  function Nk(a, b) {
    var c = Ik;
    if (void 0 === c)
      if (b) c = Ii();
      else return "";
    for (var d = [Hk], e = 0; e < Ak.length; e++) {
      var f = Ak[e]({
        eventId: c,
        Zb: !!a,
        zj: function () {
          Ck = !0;
        },
      });
      "&" === f[0] && d.push(f);
    }
    d.push("&z=0");
    return d.join("");
  }
  function Ok() {
    Kk && (z.clearTimeout(Kk), (Kk = void 0));
    if (void 0 !== Ik && Pk) {
      var a;
      (a = Jk[Ik]) || (a = Lk.h < Lk.C ? !1 : 1e3 > Sa() - Lk.D[Lk.h % Lk.C]);
      if (a || 0 >= Mk--) M(1), (Jk[Ik] = !0);
      else {
        var b = Lk.h++ % Lk.C;
        Lk.D[b] = Sa();
        var c = Nk(!0);
        Oc(c);
        if (Ck) {
          var d = c.replace("/a?", "/td?");
          Oc(d);
        }
        Pk = Ck = !1;
      }
    }
  }
  var Pk = !1;
  function Qk(a) {
    Jk[a] ||
      (a !== Ik && (Ok(), (Ik = a)),
      (Pk = !0),
      Kk || (Kk = z.setTimeout(Ok, 500)),
      2022 <= Nk().length && Ok());
  }
  var Rk = Ha();
  function Sk() {
    Rk = Ha();
  }
  function Tk() {
    return ["&v=3&t=t", "&pid=" + Rk].join("");
  }
  var Uk = function (a, b, c, d, e, f, g, h, m, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.M = d;
      this.D = e;
      this.I = f;
      this.X = g;
      this.C = h;
      this.eventMetadata = m;
      this.onSuccess = n;
      this.onFailure = p;
      this.isGtmEvent = q;
    },
    V = function (a, b, c) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.M[b]) return a.M[b];
      if (void 0 !== a.D[b]) return a.D[b];
      Gk && Vk(a, a.I[b], a.X[b]) && (M(71), M(79));
      return void 0 !== a.I[b] ? a.I[b] : void 0 !== a.C[b] ? a.C[b] : c;
    },
    Wk = function (a) {
      function b(g) {
        for (var h = Object.keys(g), m = 0; m < h.length; ++m) c[h[m]] = 1;
      }
      var c = {};
      b(a.h);
      b(a.M);
      b(a.D);
      b(a.I);
      if (Gk)
        for (var d = Object.keys(a.X), e = 0; e < d.length; e++) {
          var f = d[e];
          if (
            "event" !== f &&
            "gtm" !== f &&
            "tagTypeBlacklist" !== f &&
            !c.hasOwnProperty(f)
          ) {
            M(71);
            M(80);
            break;
          }
        }
      return Object.keys(c);
    },
    Xk = function (a, b, c) {
      function d(m) {
        lb(m) &&
          l(m, function (n, p) {
            f = !0;
            e[n] = p;
          });
      }
      var e = {},
        f = !1;
      (c && 1 !== c) || (d(a.C[b]), d(a.I[b]), d(a.D[b]), d(a.M[b]));
      (c && 2 !== c) || d(a.h[b]);
      if (Gk) {
        var g = f,
          h = e;
        e = {};
        f = !1;
        (c && 1 !== c) || (d(a.C[b]), d(a.X[b]), d(a.D[b]), d(a.M[b]));
        (c && 2 !== c) || d(a.h[b]);
        if (f !== g || Vk(a, e, h)) M(71), M(81);
        f = g;
        e = h;
      }
      return f ? e : void 0;
    },
    Yk = function (a) {
      var b = [N.g.Ic, N.g.Ec, N.g.Fc, N.g.Gc, N.g.Hc, N.g.Jc, N.g.Kc],
        c = {},
        d = !1,
        e = function (h) {
          for (var m = 0; m < b.length; m++)
            void 0 !== h[b[m]] && ((c[b[m]] = h[b[m]]), (d = !0));
          return d;
        };
      if (e(a.h) || e(a.M) || e(a.D)) return c;
      e(a.I);
      if (Gk) {
        var f = c,
          g = d;
        c = {};
        d = !1;
        e(a.X);
        Vk(a, c, f) && (M(71), M(82));
        c = f;
        d = g;
      }
      if (d) return c;
      e(a.C);
      return c;
    },
    Vk = function (a, b, c) {
      if (!Gk) return !1;
      try {
        if (b === c) return !1;
        var d = jb(b);
        if (d !== jb(c) || !((lb(b) && lb(c)) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (Vk(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var g in b)
            if (!c.hasOwnProperty(g) || Vk(a, b[g], c[g])) return !0;
        }
      } catch (h) {
        M(72);
      }
      return !1;
    },
    Zk = function (a, b) {
      this.tk = a;
      this.xk = b;
      this.I = {};
      this.qf = {};
      this.h = {};
      this.M = {};
      this.C = {};
      this.he = {};
      this.D = {};
      this.fe = function () {};
      this.ac = function () {};
      this.X = !1;
    },
    $k = function (a, b) {
      a.I = b;
      return a;
    },
    al = function (a, b) {
      a.qf = b;
      return a;
    },
    bl = function (a, b) {
      a.h = b;
      return a;
    },
    cl = function (a, b) {
      a.M = b;
      return a;
    },
    dl = function (a, b) {
      a.C = b;
      return a;
    },
    el = function (a, b) {
      a.he = b;
      return a;
    },
    fl = function (a, b) {
      a.D = b || {};
      return a;
    },
    gl = function (a, b) {
      a.fe = b;
      return a;
    },
    hl = function (a, b) {
      a.ac = b;
      return a;
    },
    il = function (a, b) {
      a.X = b;
      return a;
    },
    jl = function (a) {
      return new Uk(
        a.tk,
        a.xk,
        a.I,
        a.qf,
        a.h,
        a.M,
        a.C,
        a.he,
        a.D,
        a.fe,
        a.ac,
        a.X
      );
    };
  function kl(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var ll = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    ml = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var nl = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function ol() {
    return Ob ? !!Vb && !!Vb.platform : !1;
  }
  function pl() {
    return Yb("iPhone") && !Yb("iPod") && !Yb("iPad");
  }
  function ql() {
    pl() || Yb("iPad") || Yb("iPod");
  }
  $b();
  Zb() || Yb("Trident") || Yb("MSIE");
  Yb("Edge");
  !Yb("Gecko") ||
    (-1 != Ub().toLowerCase().indexOf("webkit") && !Yb("Edge")) ||
    Yb("Trident") ||
    Yb("MSIE") ||
    Yb("Edge");
  -1 != Ub().toLowerCase().indexOf("webkit") && !Yb("Edge") && Yb("Mobile");
  ol() || Yb("Macintosh");
  ol() || Yb("Windows");
  (ol() ? "Linux" === Vb.platform : Yb("Linux")) || ol() || Yb("CrOS");
  var rl = sa.navigator || null;
  rl && (rl.appVersion || "").indexOf("X11");
  ol() || Yb("Android");
  pl();
  Yb("iPad");
  Yb("iPod");
  ql();
  Ub().toLowerCase().indexOf("kaios");
  var sl = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (38 == g || 63 == g) {
          var h = a.charCodeAt(e + f);
          if (!h || 61 == h || 38 == h || 35 == h) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    tl = /#|$/,
    ul = function (a, b) {
      var c = a.search(tl),
        d = sl(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " ")
      );
    },
    vl = /[?&]($|#)/,
    wl = function (a, b, c) {
      for (
        var d, e = a.search(tl), f = 0, g, h = [];
        0 <= (g = sl(a, f, b, e));

      )
        h.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      h.push(a.slice(f));
      d = h.join("").replace(vl, "$1");
      var m,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        0 > r && (r = d.length);
        var t = d.indexOf("?"),
          u;
        0 > t || t > r ? ((t = r), (u = "")) : (u = d.substring(t + 1, r));
        q = [d.slice(0, t), u, d.slice(r)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var xl = function (a) {
      try {
        var b;
        if ((b = !!a && null != a.location.href))
          a: {
            try {
              oj(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    yl = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function zl(a) {
    if (!a || !B.head) return null;
    var b = Al("META");
    B.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var Bl = function () {
      if (z.top == z) return 0;
      var a = z.location.ancestorOrigins;
      return a
        ? a[a.length - 1] == z.location.origin
          ? 1
          : 2
        : xl(z.top)
        ? 1
        : 2;
    },
    Al = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function Cl(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Al("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            h = Cb(g, e);
          0 <= h && Array.prototype.splice.call(g, h, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      nl(e, "load", f);
      nl(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var El = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      yl(a, function (d, e) {
        if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Dl(c, b);
    },
    Dl = function (a, b) {
      var c = window,
        d;
      b = void 0 === b ? !1 : b;
      d = void 0 === d ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else Cl(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var Fl = function () {};
  var Gl = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    Hl = function (a, b) {
      b = void 0 === b ? {} : b;
      this.C = a;
      this.h = null;
      this.M = {};
      this.ac = 0;
      var c;
      this.X = null != (c = b.Cm) ? c : 500;
      var d;
      this.I = null != (d = b.mn) ? d : !1;
      this.D = null;
    };
  ra(Hl, Fl);
  var Jl = function (a) {
    return "function" === typeof a.C.__tcfapi || null != Il(a);
  };
  Hl.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.I },
      d = ml(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.X &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.X));
    var f = function (g, h) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Gl(c)),
          (c.internalBlockOnErrors = b.I),
          (h && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), h || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Kl(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Hl.prototype.removeEventListener = function (a) {
    a && a.listenerId && Kl(this, "removeEventListener", null, a.listenerId);
  };
  var Ml = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var h = c;
      2 === c
        ? ((h = 0), 2 === g && (h = 1))
        : 3 === c && ((h = 1), 1 === g && (h = 0));
      var m;
      if (0 === h)
        if (a.purpose && a.vendor) {
          var n = Ll(a.vendor.consents, void 0 === d ? "755" : d);
          m =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && Ll(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          1 === h
            ? a.purpose && a.vendor
              ? Ll(a.purpose.legitimateInterests, b) &&
                Ll(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return m;
    },
    Ll = function (a, b) {
      return !(!a || !a[b]);
    },
    Kl = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.C.__tcfapi) {
        var e = a.C.__tcfapi;
        e(b, 2, c, d);
      } else if (Il(a)) {
        Nl(a);
        var f = ++a.ac;
        a.M[f] = c;
        if (a.h) {
          var g = {};
          a.h.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    Il = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.C, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (h) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (h) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    Nl = function (a) {
      a.D ||
        ((a.D = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.M[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        nl(a.C, "message", a.D));
    },
    Ol = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Gl(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (El({ e: String(a.internalErrorState) }), !1)
          : !0
        : "loaded" !== a.cmpStatus ||
          ("tcloaded" !== a.eventStatus &&
            "useractioncomplete" !== a.eventStatus)
        ? !1
        : !0;
    };
  var Pl = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    Ql = kl("", 500);
  function Rl() {
    var a = oi.tcf || {};
    return (oi.tcf = a);
  }
  var Sl = function () {
      return new Hl(z, { Cm: -1 });
    },
    Yl = function () {
      var a = Rl(),
        b = Sl();
      Jl(b) && Tl() && M(124);
      if ((Ul() || Q(76)) && !a.active && Jl(b)) {
        a.active = !0;
        Ul()
          ? ((a.Xb = {}),
            (a.cmpId = 0),
            (a.tcfPolicyVersion = 0),
            Vl(),
            Q(76) && Xj([N.g.N]),
            (a.tcString = "tcunavailable"))
          : Q(76) && Xj([N.g.J, N.g.nb, N.g.N]);
        try {
          b.addEventListener(function (c) {
            if (0 !== c.internalErrorState) Wl(a), Xl(a);
            else {
              a.gdprApplies = c.gdprApplies;
              if (Q(76)) {
                a.cmpId = c.cmpId;
                a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode;
                if (Tl()) return;
                a.tcfPolicyVersion = c.tcfPolicyVersion;
              }
              var d;
              if (!1 === c.gdprApplies) {
                var e = {},
                  f;
                for (f in Pl) Pl.hasOwnProperty(f) && (e[f] = !0);
                d = e;
                b.removeEventListener(c);
              } else if (
                "tcloaded" === c.eventStatus ||
                "useractioncomplete" === c.eventStatus ||
                "cmpuishown" === c.eventStatus
              ) {
                var g = {},
                  h;
                for (h in Pl)
                  if (Pl.hasOwnProperty(h))
                    if ("1" === h) {
                      var m,
                        n = c,
                        p = !0;
                      p = void 0 === p ? !1 : p;
                      m = Ol(n)
                        ? !1 === n.gdprApplies ||
                          "tcunavailable" === n.tcString ||
                          (void 0 === n.gdprApplies && !p) ||
                          "string" !== typeof n.tcString ||
                          !n.tcString.length
                          ? !0
                          : Ml(n, "1", 0)
                        : !1;
                      g["1"] = m;
                    } else g[h] = Ml(c, h, Pl[h]);
                d = g;
              }
              d && ((a.tcString = c.tcString || "tcempty"), (a.Xb = d), Xl(a));
            }
          });
        } catch (c) {
          Wl(a), Xl(a);
        }
      }
    };
  function Wl(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function Vl() {
    var a = {},
      b = ((a[N.g.J] = "denied"), (a[N.g.rd] = Ql), a);
    Q(76) && (b[N.g.nb] = "denied");
    Qj(b);
  }
  var Ul = function () {
      return !0 === z.gtag_enable_tcf_support;
    },
    Tl = function () {
      var a = Ul();
      if (Q(76)) {
        var b = Rl().enableAdvertiserConsentMode;
        return !a && !b;
      }
      return !a;
    };
  function Xl(a) {
    var b = {},
      c = ((b[N.g.J] = a.Xb["1"] ? "granted" : "denied"), b);
    Q(76) &&
      ((c[N.g.nb] = a.Xb["3"] && a.Xb["4"] ? "granted" : "denied"),
      "number" === typeof a.tcfPolicyVersion &&
        4 <= a.tcfPolicyVersion &&
        (c[N.g.N] = a.Xb["1"] && a.Xb["7"] ? "granted" : "denied"));
    Rj(
      c,
      { eventId: 0 },
      { gdprApplies: a ? a.gdprApplies : void 0, tcString: Zl() || "" }
    );
  }
  var Zl = function () {
      var a = Rl();
      if (a.active) return a.tcString;
    },
    $l = function () {
      var a = Rl();
      if (a.active && void 0 !== a.gdprApplies)
        return a.gdprApplies ? "1" : "0";
    },
    am = function (a) {
      if (!Pl.hasOwnProperty(String(a))) return !0;
      var b = Rl();
      return b.active && b.Xb ? !!b.Xb[String(a)] : !0;
    };
  var bm = [N.g.J, N.g.T],
    cm = [N.g.J, N.g.T, N.g.N, N.g.nb],
    dm = {},
    em = ((dm[N.g.J] = 1), (dm[N.g.T] = 2), dm);
  function fm(a) {
    if (void 0 === a) return 0;
    switch (V(a, N.g.ia)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  var gm = function (a) {
      var b = 3 !== fm(a);
      Q(64) && (b = b && Dj(N.g.nb));
      return b;
    },
    hm = function () {
      var a = {},
        b;
      for (b in em)
        if (em.hasOwnProperty(b)) {
          var c = em[b],
            d,
            e = b,
            f = xj();
          f.accessedAny = !0;
          d = f.getConsentState(e);
          a[c] = d;
        }
      var g = Q(48) && bm.every(Dj),
        h = Q(43);
      return g || h ? Oe(a, 1) : Oe(a, 0);
    },
    im = {},
    jm =
      ((im[N.g.J] = 0), (im[N.g.T] = 1), (im[N.g.N] = 2), (im[N.g.nb] = 3), im);
  function km(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  var lm = function (a) {
      if (Q(45)) {
        for (var b = "1", c = 0; c < cm.length; c++) {
          var d = b,
            e,
            f = cm[c],
            g = tj[f];
          e = void 0 === g ? 0 : jm.hasOwnProperty(g) ? 12 | jm[g] : 8;
          var h = xj();
          h.accessedAny = !0;
          var m = h.entries[f] || {};
          e = (e << 2) | km(m.implicit);
          b =
            d +
            ("" +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                e
              ] +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                (km(m.declare) << 4) | (km(m.default) << 2) | km(m.update)
              ]);
        }
        var n = b,
          p;
        p = "" + ((Gj() << 2) | fm(a));
        return n + p;
      }
      for (var q = "G1", r = 0; r < bm.length; r++)
        switch (Ej(bm[r])) {
          case 3:
            q += "1";
            break;
          case 2:
            q += "0";
            break;
          case 1:
            q += "-";
        }
      return q;
    },
    mm = function () {
      if (!Dj(N.g.N)) return "-";
      var a = xj(),
        b = vj,
        c = a.cps,
        d = a.usedSetCps,
        e = {};
      if (b && d)
        for (var f in uj)
          uj.hasOwnProperty(f) &&
          uj[f].enabled &&
          c.hasOwnProperty(f) &&
          c[f].enabled
            ? (e[f] = { enabled: !0, region: uj[f].region })
            : (e[f] = { enabled: !1, region: uj[f].region });
      else {
        var g = b ? uj : c,
          h;
        for (h in g)
          g.hasOwnProperty(h) &&
            (e[h] = { enabled: g[h].enabled, region: g[h].region });
      }
      var m = [],
        n;
      for (n in e) e.hasOwnProperty(n) && e[n].enabled && m.push(n);
      for (var p = "", q = 0; q < m.length; q++) {
        var r = mi[m[q]];
        r && (p += r);
      }
      return "" === p ? "-" : p;
    };
  function nm() {
    var a = !!gj["6"],
      b = !1;
    Q(76) && (b = !Tl() && "1" === $l());
    return a || b;
  }
  var om = function () {
      return nm() ? "1" : "0";
    },
    pm = function () {
      return nm() || xj().usedSetCps || !T(N.g.N);
    },
    qm = function () {
      var a = "0",
        b = "0",
        c;
      var d = Rl();
      c = d.active && Q(76) ? d.cmpId : void 0;
      "number" === typeof c &&
        0 <= c &&
        4095 >= c &&
        ((a =
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (c >> 6) & 63
          ]),
        (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          c & 63
        ]));
      var e = "0",
        f;
      var g = Rl();
      f = g.active && Q(76) ? g.tcfPolicyVersion : void 0;
      "number" === typeof f &&
        0 <= f &&
        63 >= f &&
        (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          f
        ]);
      var h = 0;
      gj["6"] && (h |= 1);
      "1" === $l() && (h |= 2);
      Ul() && (h |= 4);
      var m;
      var n = Rl();
      m =
        n.active && void 0 !== n.enableAdvertiserConsentMode
          ? n.enableAdvertiserConsentMode
            ? "1"
            : "0"
          : void 0;
      "1" === m && (h |= 8);
      return (
        "1" +
        a +
        b +
        e +
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[h]
      );
    };
  var rm = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var sm = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        h = g[0].replace(/^\s*|\s*$/g, "");
      if (h && h == a) {
        var m = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  function tm(a) {
    return "null" !== a.origin;
  }
  var wm = function (a, b, c, d) {
      return um(d) ? sm(a, String(b || vm()), c) : [];
    },
    zm = function (a, b, c, d, e) {
      if (um(e)) {
        var f = xm(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = ym(
            f,
            function (g) {
              return g.Bf;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = ym(
            f,
            function (g) {
              return g.Oe;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Am(a, b, c, d) {
    var e = vm(),
      f = window;
    tm(f) && (f.document.cookie = a);
    var g = vm();
    return e != g || (void 0 != c && 0 <= wm(b, g, !1, d).indexOf(c));
  }
  var Em = function (a, b, c, d) {
      function e(w, x, y) {
        if (null == y) return delete h[x], w;
        h[x] = y;
        return w + "; " + x + "=" + y;
      }
      function f(w, x) {
        if (null == x) return delete h[x], w;
        h[x] = !0;
        return w + "; " + x;
      }
      if (!um(c.Fb)) return 2;
      var g;
      void 0 == b
        ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = Bm(b)),
          (g = a + "=" + b));
      var h = {};
      g = e(g, "path", c.path);
      var m;
      c.expires instanceof Date
        ? (m = c.expires.toUTCString())
        : null != c.expires && (m = "" + c.expires);
      g = e(g, "expires", m);
      g = e(g, "max-age", c.Ul);
      g = e(g, "samesite", c.om);
      c.sm && (g = f(g, "secure"));
      var n = c.domain;
      if (n && "auto" === n.toLowerCase()) {
        for (var p = Cm(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
          var u = "none" !== p[t] ? p[t] : void 0,
            v = e(g, "domain", u);
          v = f(v, c.flags);
          try {
            d && d(a, h);
          } catch (w) {
            q = w;
            continue;
          }
          r = !0;
          if (!Dm(u, c.path) && Am(v, a, b, c.Fb)) return 0;
        }
        if (q && !r) throw q;
        return 1;
      }
      n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
      g = f(g, c.flags);
      d && d(a, h);
      return Dm(n, c.path) ? 1 : Am(g, a, b, c.Fb) ? 0 : 1;
    },
    Fm = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Em(a, b, c);
    };
  function ym(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var h = a[g],
        m = b(h);
      m === c
        ? d.push(h)
        : void 0 === f || m < f
        ? ((e = [h]), (f = m))
        : m === f && e.push(h);
    }
    return 0 < d.length ? d : e;
  }
  function xm(a, b, c) {
    for (var d = [], e = wm(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        h = g.shift();
      if (!b || -1 !== b.indexOf(h)) {
        var m = g.shift();
        m &&
          ((m = m.split("-")),
          d.push({ id: g.join("."), Bf: 1 * m[0] || 1, Oe: 1 * m[1] || 1 }));
      }
    }
    return d;
  }
  var Bm = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Gm = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Hm = /(^|\.)doubleclick\.net$/i,
    Dm = function (a, b) {
      return (
        Hm.test(window.document.location.hostname) || ("/" === b && Gm.test(a))
      );
    },
    vm = function () {
      return tm(window) ? window.document.cookie : "";
    },
    Cm = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Hm.test(e) || Gm.test(e) || a.push("none");
      return a;
    },
    um = function (a) {
      return a && qj().h() ? (Fj(a) ? Dj(a) : !1) : !0;
    };
  var Im = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (rm(a) & 2147483647)) : String(b);
    },
    Sm = function (a) {
      return [Im(a), Math.round(Sa() / 1e3)].join(".");
    },
    Vm = function (a, b, c, d, e) {
      var f = Tm(b);
      return zm(a, f, Um(c), d, e);
    },
    Wm = function (a, b, c, d) {
      var e = "" + Tm(c),
        f = Um(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Tm = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Um = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var Xm = function () {
    oi.dedupe_gclid || (oi.dedupe_gclid = "" + Sm());
    return oi.dedupe_gclid;
  };
  var Ym = function () {
    var a = !1;
    return a;
  };
  var Zm = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 },
    $m = function (a) {
      var b = Sf.ctid.split("-")[0].toUpperCase(),
        c = {};
      c.ctid = Sf.ctid;
      c.km = ni.ne;
      c.mm = ni.Pg;
      c.Rl = dk.ie ? 2 : 1;
      ui ? ((c.Pf = Zm[b]), c.Pf || (c.Pf = 0)) : (c.Pf = Ai ? 13 : 10);
      yi ? (c.sh = 1) : Ym() ? (c.sh = 2) : (c.sh = 3);
      var d;
      var e = c.Pf,
        f = c.sh;
      void 0 === e
        ? (d = "")
        : (f || (f = 0),
          (d =
            "" +
            Hg(1, 1) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              (e << 2) | f
            ]));
      var g = c.ln,
        h =
          4 +
          d +
          (g
            ? "" +
              Hg(2, 1) +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                g
              ]
            : ""),
        m,
        n = c.mm;
      m = n && Gg.test(n) ? "" + Hg(3, 2) + n : "";
      var p,
        q = c.km;
      p = q
        ? "" +
          Hg(4, 1) +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[q]
        : "";
      var r;
      var t = c.ctid;
      if (t && a) {
        var u = t.split("-"),
          v = u[0].toUpperCase();
        if ("GTM" !== v && "OPT" !== v) r = "";
        else {
          var w = u[1];
          r =
            "" +
            Hg(5, 3) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              1 + w.length
            ] +
            (c.Rl || 0) +
            w;
        }
      } else r = "";
      return h + m + p + r;
    };
  var an = void 0;
  function bn(a) {
    var b = "";
    return b;
  }
  var cn = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e
        ? (b[c++] = e)
        : (2048 > e
            ? (b[c++] = (e >> 6) | 192)
            : (55296 == (e & 64512) &&
              d + 1 < a.length &&
              56320 == (a.charCodeAt(d + 1) & 64512)
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  ac();
  pl() || Yb("iPod");
  Yb("iPad");
  !Yb("Android") || bc() || ac() || $b() || Yb("Silk");
  bc();
  !Yb("Safari") ||
    bc() ||
    (Zb() ? 0 : Yb("Coast")) ||
    $b() ||
    (Zb() ? 0 : Yb("Edge")) ||
    (Zb() ? Xb("Microsoft Edge") : Yb("Edg/")) ||
    (Zb() ? Xb("Opera") : Yb("OPR")) ||
    ac() ||
    Yb("Silk") ||
    Yb("Android") ||
    ql();
  var dn = {},
    en = null,
    fn = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!en) {
        en = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            h = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          5 > m;
          m++
        ) {
          var n = g.concat(h[m].split(""));
          dn[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === en[q] && (en[q] = p);
          }
        }
      }
      for (
        var r = dn[f],
          t = Array(Math.floor(b.length / 3)),
          u = r[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var x = b[v],
          y = b[v + 1],
          A = b[v + 2],
          C = r[x >> 2],
          D = r[((x & 3) << 4) | (y >> 4)],
          E = r[((y & 15) << 2) | (A >> 6)],
          F = r[A & 63];
        t[w++] = "" + C + D + E + F;
      }
      var H = 0,
        O = u;
      switch (b.length - v) {
        case 2:
          (H = b[v + 1]), (O = r[(H & 15) << 2] || u);
        case 1:
          var R = b[v];
          t[w] = "" + r[R >> 2] + r[((R & 3) << 4) | (H >> 4)] + O + u;
      }
      return t.join("");
    };
  var gn =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function hn(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : (a.google_tag_data = {});
  }
  function jn() {
    var a = z.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function kn() {
    var a, b;
    return null !=
      (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise)
      ? b
      : null;
  }
  function ln(a) {
    var b, c;
    return (
      "function" ===
      typeof (null == (b = a.navigator)
        ? void 0
        : null == (c = b.userAgentData)
        ? void 0
        : c.getHighEntropyValues)
    );
  }
  function mn() {
    var a = z;
    if (!ln(a)) return null;
    var b = hn(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(gn)
      .then(function (d) {
        null != b.uach || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  var sn = /:[0-9]+$/,
    tn = /^\d+\.fls\.doubleclick\.net$/,
    un = function (a, b, c, d) {
      function e(r) {
        return mf(10)
          ? decodeURIComponent(r.replace(/\+/g, " "))
          : decodeURIComponent(r).replace(/\+/g, " ");
      }
      for (
        var f = [], g = fa(a.split("&")), h = g.next();
        !h.done;
        h = g.next()
      ) {
        var m = fa(h.value.split("=")),
          n = m.next().value,
          p = ia(m);
        if (e(n) === b) {
          var q = p.join("=");
          if (!c) return d ? q : e(q);
          f.push(d ? q : e(q));
        }
      }
      return c ? f : void 0;
    },
    xn = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = vn(a.protocol) || vn(z.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : z.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || z.location.hostname)
            .replace(sn, "")
            .toLowerCase());
      return wn(a, b, c, d, e);
    },
    wn = function (a, b, c, d, e) {
      var f,
        g = vn(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = yn(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(sn, "").toLowerCase();
          if (c) {
            var h = /^www\d*\./.exec(f);
            h && h[0] && (f = f.substr(h[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || zb("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = un(f, e, !1));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    vn = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    yn = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    zn = function (a) {
      var b = B.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || zb("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(sn, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    An = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = zn(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        h = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === h[0] && (h = h.substring(1));
      g = c(g);
      h = c(h);
      "" !== g && (g = "?" + g);
      "" !== h && (h = "#" + h);
      var m = "" + f + g + h;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    },
    Bn = function (a) {
      var b = zn(z.location.href),
        c = xn(b, "host", !1);
      if (c && c.match(tn)) {
        var d = xn(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    };
  function Cn(a, b, c, d) {
    var e,
      f = Number(null != a.Ub ? a.Ub : void 0);
    0 !== f && (e = new Date((b || Sa()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Fb: d,
    };
  }
  var Dn;
  var Hn = function () {
      var a = En,
        b = Fn,
        c = Gn(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        Pc(B, "mousedown", d);
        Pc(B, "keyup", d);
        Pc(B, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    In = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      Gn().decorators.push(f);
    },
    Jn = function (a, b, c) {
      for (var d = Gn().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          h;
        if ((h = !c || g.forms))
          a: {
            var m = g.domains,
              n = a,
              p = !!g.sameHost;
            if (m && (p || n !== B.location.hostname))
              for (var q = 0; q < m.length; q++)
                if (m[q] instanceof RegExp) {
                  if (m[q].test(n)) {
                    h = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(m[q]) ||
                  (p && 0 <= m[q].indexOf(n))
                ) {
                  h = !0;
                  break a;
                }
            h = !1;
          }
        if (h) {
          var r = g.placement;
          void 0 == r && (r = g.fragment ? 2 : 1);
          r === b && Va(e, g.callback());
        }
      }
      return e;
    };
  function Gn() {
    var a = Gc("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var Kn = /(.*?)\*(.*?)\*(.*)/,
    Ln = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Mn = /^(?:www\.|m\.|amp\.)+/,
    Nn = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function On(a, b) {
    var c = [
        Ec.userAgent,
        new Date().getTimezoneOffset(),
        Ec.userLanguage || Ec.language,
        Math.floor(Sa() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = Dn)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, h = 0; 8 > h; h++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    Dn = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ Dn[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function Pn() {
    return function (a) {
      var b = zn(z.location.href),
        c = b.search.replace("?", ""),
        d = un(c, "_gl", !1, !0) || "";
      a.query = Qn(d) || {};
      var e = xn(b, "fragment"),
        f;
      var g = -1;
      if (Xa(e, "_gl=")) g = 4;
      else {
        var h = e.indexOf("&_gl=");
        0 < h && (g = h + 3 + 2);
      }
      if (0 > g) f = void 0;
      else {
        var m = e.indexOf("&", g);
        f = 0 > m ? e.substring(g) : e.substring(g, m);
      }
      a.fragment = Qn(f || "") || {};
    };
  }
  var Rn = function (a) {
      var b = Pn(),
        c = Gn();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Va(d, e.query), a && Va(d, e.fragment));
      return d;
    },
    Qn = function (a) {
      try {
        var b = Sn(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = xb(d[e + 1]);
            c[f] = g;
          }
          zb("TAGGING", 6);
          return c;
        }
      } catch (h) {
        zb("TAGGING", 8);
      }
    };
  function Sn(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Kn.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var h = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === On(h, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return h;
        zb("TAGGING", 7);
      }
    }
  }
  function Tn(a, b, c, d, e) {
    function f(q) {
      var r = q,
        t = new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)").exec(r),
        u = r;
      if (t) {
        var v = t[2],
          w = t[4];
        u = t[1];
        w && (u = u + v + w);
      }
      q = u;
      var x = q.charAt(q.length - 1);
      q && "&" !== x && (q += "&");
      return q + p;
    }
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    var g = Nn.exec(c);
    if (!g) return "";
    var h = g[1],
      m = g[2] || "",
      n = g[3] || "",
      p = a + "=" + b;
    d
      ? (0 !== n.substring(1).length && e) || (n = "#" + f(n.substring(1)))
      : (m = "?" + f(m.substring(1)));
    return "" + h + m + n;
  }
  function Un(a, b) {
    function c(n, p, q) {
      if (Object.keys(n).length) {
        var r,
          t = [],
          u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var v = n[u];
            void 0 !== v &&
              v === v &&
              null !== v &&
              "[object Object]" !== v.toString() &&
              (t.push(u), t.push(wb(String(v))));
          }
        var w = t.join("*");
        r = ["1", On(w), w].join("*");
        d
          ? (mf(13) || mf(11) || !p) && Vn("_gl", r, a, p, q)
          : Wn("_gl", r, a, p, q);
      }
    }
    var d = "FORM" === (a.tagName || "").toUpperCase(),
      e = Jn(b, 1, d),
      f = Jn(b, 2, d),
      g = Jn(b, 4, d),
      h = Jn(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    mf(11) && c(g, !0, !0);
    for (var m in h) h.hasOwnProperty(m) && Xn(m, h[m], a);
  }
  function Xn(a, b, c) {
    if (c.tagName) {
      if ("a" === c.tagName.toLowerCase()) {
        Wn(a, b, c);
        return;
      }
      if ("form" === c.tagName.toLowerCase()) {
        Vn(a, b, c);
        return;
      }
    }
    "string" == typeof c && Tn(a, b, c);
  }
  function Wn(a, b, c, d, e) {
    if (c.href) {
      var f = Tn(a, b, c.href, void 0 === d ? !1 : d, void 0 === e ? !1 : e);
      ic.test(f) && (c.href = f);
    }
  }
  function Vn(a, b, c, d, e) {
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if ("get" !== f || d) {
        if ("get" === f || "post" === f) {
          var g = Tn(a, b, c.action, d, e);
          ic.test(g) && (c.action = g);
        }
      } else {
        for (var h = c.childNodes || [], m = !1, n = 0; n < h.length; n++) {
          var p = h[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = B.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function En(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || Un(e, e.hostname);
      }
    } catch (g) {}
  }
  function Fn(a) {
    try {
      if (a.action) {
        var b = xn(zn(a.action), "host");
        Un(a, b);
      }
    } catch (c) {}
  }
  var Yn = function (a, b, c, d) {
      Hn();
      In(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    Zn = function (a, b) {
      Hn();
      In(a, [wn(z.location, "host", !0)], b, !0, !0);
    },
    $n = function () {
      var a = B.location.hostname,
        b = Ln.exec(B.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var h = a.replace(Mn, ""),
        m = e.replace(Mn, ""),
        n;
      if (!(n = h === m)) {
        var p = "." + m;
        n = h.substring(h.length - p.length, h.length) === p;
      }
      return n;
    },
    ao = function (a, b) {
      return !1 === a ? !1 : a || b || $n();
    };
  var bo = ["1"],
    co = {},
    eo = {},
    jo = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = fo(a.prefix);
      if (!co[c])
        if (go(c, a.path, a.domain)) {
          var d = eo[fo(a.prefix)];
          ho(a, d ? d.id : void 0, d ? d.rh : void 0);
        } else {
          var e = Bn("auiddc");
          if (e) zb("TAGGING", 17), (co[c] = e);
          else if (b) {
            var f = fo(a.prefix),
              g = Sm();
            if (0 === io(f, g, a)) {
              var h = Gc("google_tag_data", {});
              h._gcl_au || (h._gcl_au = g);
            }
            go(c, a.path, a.domain);
          }
        }
    };
  function ho(a, b, c) {
    var d = fo(a.prefix),
      e = co[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var g = Number(f[1]) || 0;
        if (g) {
          var h = e;
          b && (h = e + "." + b + "." + (c ? c : Math.floor(Sa() / 1e3)));
          io(d, h, a, 1e3 * g);
        }
      }
    }
  }
  function io(a, b, c, d) {
    var e = Wm(b, "1", c.domain, c.path),
      f = Cn(c, d);
    f.Fb = "ad_storage";
    return Fm(a, e, f);
  }
  function go(a, b, c) {
    var d = Vm(a, b, c, bo, "ad_storage");
    if (!d) return !1;
    ko(a, d);
    return !0;
  }
  function ko(a, b) {
    var c = b.split(".");
    5 === c.length
      ? ((co[a] = c.slice(0, 2).join(".")),
        (eo[a] = { id: c.slice(2, 4).join("."), rh: Number(c[4]) || 0 }))
      : 3 === c.length
      ? (eo[a] = { id: c.slice(0, 2).join("."), rh: Number(c[2]) || 0 })
      : (co[a] = b);
  }
  function fo(a) {
    return (a || "_gcl") + "_au";
  }
  function lo(a) {
    qj().h()
      ? Kj(
          function () {
            Dj("ad_storage") ? a() : Lj(a, "ad_storage");
          },
          ["ad_storage"]
        )
      : a();
  }
  function mo(a) {
    var b = Rn(!0),
      c = fo(a.prefix);
    lo(function () {
      var d = b[c];
      if (d) {
        ko(c, d);
        var e = 1e3 * Number(co[c].split(".")[1]);
        if (e) {
          zb("TAGGING", 16);
          var f = Cn(a, e);
          f.Fb = "ad_storage";
          var g = Wm(d, "1", a.domain, a.path);
          Fm(c, g, f);
        }
      }
    });
  }
  function no(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        h = Vm(a, e.path, e.domain, bo, "ad_storage");
      h && (g[a] = h);
      return g;
    };
    lo(function () {
      Yn(f, b, c, d);
    });
  }
  var oo = function (a) {
    for (
      var b = [],
        c = B.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Ih: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, h) {
      return h.timestamp - g.timestamp;
    });
    return b;
  };
  function po(a, b) {
    var c = oo(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].Ih] || (d[c[e].Ih] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), Z: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Ih].push(g);
      }
    }
    return d;
  }
  var qo = /^\w+$/,
    ro = /^[\w-]+$/,
    so = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    to = function () {
      return qj().h() ? Dj("ad_storage") : !0;
    },
    uo = function (a, b) {
      Fj("ad_storage")
        ? to()
          ? a()
          : Lj(a, "ad_storage")
        : b
        ? zb("TAGGING", 3)
        : Kj(
            function () {
              uo(a, !0);
            },
            ["ad_storage"]
          );
    },
    wo = function (a) {
      return vo(a).map(function (b) {
        return b.Z;
      });
    },
    vo = function (a) {
      var b = [];
      if (!tm(z) || !B.cookie) return b;
      var c = wm(a, B.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { Z: d.Z }, e++) {
        var f = xo(c[e]);
        if (null != f) {
          var g = f,
            h = g.version;
          d.Z = g.Z;
          var m = g.timestamp,
            n = g.labels,
            p = Ga(
              b,
              (function (q) {
                return function (r) {
                  return r.Z === q.Z;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, m)),
              (p.labels = yo(p.labels, n || [])))
            : b.push({ version: h, Z: d.Z, timestamp: m, labels: n });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return zo(b);
    };
  function yo(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function Ao(a) {
    return a && "string" == typeof a && a.match(qo) ? a : "_gcl";
  }
  var Co = function () {
      var a = zn(z.location.href),
        b = xn(a, "query", !1, void 0, "gclid"),
        c = xn(a, "query", !1, void 0, "gclsrc"),
        d = xn(a, "query", !1, void 0, "wbraid"),
        e = xn(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || un(f, "gclid", !1);
        c = c || un(f, "gclsrc", !1);
        d = d || un(f, "wbraid", !1);
      }
      return Bo(b, c, e, d);
    },
    Bo = function (a, b, c, d) {
      var e = {},
        f = function (g, h) {
          e[h] || (e[h] = []);
          e[h].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && ro.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(ro))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    Eo = function (a) {
      var b = Co();
      uo(function () {
        Do(b, !1, a);
      });
    };
  function Do(a, b, c, d, e) {
    function f(w, x) {
      var y = Fo(w, g);
      y && (Fm(y, x, h), (m = !0));
    }
    c = c || {};
    e = e || [];
    var g = Ao(c.prefix);
    d = d || Sa();
    var h = Cn(c, d, !0);
    h.Fb = "ad_storage";
    var m = !1,
      n = Math.round(d / 1e3),
      p = function (w) {
        var x = ["GCL", n, w];
        0 < e.length && x.push(e.join("."));
        return x.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (!m && a.gb) {
      var q = a.gb[0],
        r = Fo("gb", g),
        t = !1;
      if (!b)
        for (var u = vo(r), v = 0; v < u.length; v++)
          u[v].Z === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
      t || f("gb", p(q));
    }
  }
  var Ho = function (a, b) {
      var c = Rn(!0);
      uo(function () {
        for (var d = Ao(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== so[f]) {
            var g = Fo(f, d),
              h = c[g];
            if (h) {
              var m = Math.min(Go(h), Sa()),
                n;
              b: {
                var p = m;
                if (tm(z))
                  for (
                    var q = wm(g, B.cookie, void 0, "ad_storage"), r = 0;
                    r < q.length;
                    ++r
                  )
                    if (Go(q[r]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var t = Cn(b, m, !0);
                t.Fb = "ad_storage";
                Fm(g, h, t);
              }
            }
          }
        }
        Do(Bo(c.gclid, c.gclsrc), !1, b);
      });
    },
    Fo = function (a, b) {
      var c = so[a];
      if (void 0 !== c) return b + c;
    },
    Go = function (a) {
      return 0 !== Io(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function xo(a) {
    var b = Io(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          Z: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function Io(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !ro.test(a[2])
      ? []
      : a;
  }
  var Jo = function (a, b, c, d, e) {
      if (Ea(b) && tm(z)) {
        var f = Ao(e),
          g = function () {
            for (var h = {}, m = 0; m < a.length; ++m) {
              var n = Fo(a[m], f);
              if (n) {
                var p = wm(n, B.cookie, void 0, "ad_storage");
                p.length && (h[n] = p.sort()[p.length - 1]);
              }
            }
            return h;
          };
        uo(function () {
          Yn(g, b, c, d);
        });
      }
    },
    zo = function (a) {
      return a.filter(function (b) {
        return ro.test(b.Z);
      });
    },
    Ko = function (a, b) {
      if (tm(z)) {
        for (var c = Ao(b.prefix), d = {}, e = 0; e < a.length; e++)
          so[a[e]] && (d[a[e]] = so[a[e]]);
        uo(function () {
          l(d, function (f, g) {
            var h = wm(c + g, B.cookie, void 0, "ad_storage");
            h.sort(function (t, u) {
              return Go(u) - Go(t);
            });
            if (h.length) {
              var m = h[0],
                n = Go(m),
                p = 0 !== Io(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== Io(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [r];
              Do(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function Lo(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Mo = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (Gj()) {
        var c = Co();
        if (Lo(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          Zn(function () {
            return d;
          }, 3);
          Zn(function () {
            var e = {};
            return (e._up = "1"), e;
          }, 1);
        }
      }
    },
    No = function (a) {
      if (!mf(11)) return null;
      var b = Rn(!0).gad_source;
      if (null != b) return b;
      if (mf(12)) {
        var c = zn(z.location.href);
        b = xn(c, "query", !1, void 0, "gad_source");
        if (null != b) return b;
        var d = Co();
        if (Lo(d, a)) return "0";
      }
      return null;
    },
    Oo = function (a) {
      var b = No(a);
      null != b &&
        Zn(function () {
          var c = {};
          return (c.gad_source = b), c;
        }, 4);
    },
    Po = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!to()) return e;
      var f = vo(a);
      if (!f.length) return e;
      for (var g = 0; g < f.length; g++)
        -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var h = f[0],
          m = f[0].timestamp,
          n = [h.version, Math.round(m / 1e3), h.Z]
            .concat(h.labels || [], [b])
            .join("."),
          p = Cn(c, m, !0);
        p.Fb = "ad_storage";
        Fm(a, n, p);
      }
      return e;
    };
  function Qo(a, b) {
    var c = Ao(b),
      d = Fo(a, c);
    if (!d) return 0;
    for (var e = vo(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }
  function Ro(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var So = function (a) {
    var b = Math.max(Qo("aw", a), Ro(to() ? po() : {}));
    return Math.max(Qo("gb", a), Ro(to() ? po("_gac_gb", !0) : {})) > b;
  };
  var Xo = /[A-Z]+/,
    Yo = /\s/,
    Zo = function (a, b) {
      if (k(a)) {
        a = Qa(a);
        var c = a.indexOf("-");
        if (!(0 > c)) {
          var d = a.substring(0, c);
          if (Xo.test(d)) {
            var e = a.substring(c + 1),
              f;
            if (b) {
              var g = function (n) {
                var p = n.indexOf("/");
                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)];
              };
              f = g(e);
              if ("DC" === d && 2 === f.length) {
                var h = g(f[1]);
                2 === h.length && ((f[1] = h[0]), f.push(h[1]));
              }
            } else {
              f = e.split("/");
              for (var m = 0; m < f.length; m++)
                if (!f[m] || (Yo.test(f[m]) && ("AW" !== d || 1 !== m))) return;
            }
            return { id: a, prefix: d, da: d + "-" + f[0], P: f };
          }
        }
      }
    },
    ap = function (a, b) {
      for (var c = {}, d = 0; d < a.length; ++d) {
        var e = Zo(a[d], b);
        e && (c[e.id] = e);
      }
      $o(c);
      var f = [];
      l(c, function (g, h) {
        f.push(h);
      });
      return f;
    };
  function $o(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.P[1] && b.push(d.da);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var bp = function (a, b, c, d) {
    var e = Mc(),
      f;
    if (1 === e)
      a: {
        var g = Ci;
        g = g.toLowerCase();
        for (
          var h = "https://" + g,
            m = "http://" + g,
            n = 1,
            p = B.getElementsByTagName("script"),
            q = 0;
          q < p.length && 100 > q;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (0 === r.indexOf(m)) {
              f = 3;
              break a;
            }
            1 === n && 0 === r.indexOf(h) && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (2 === f || d || "http:" != z.location.protocol ? a : b) + c;
  };
  var dp = function (a, b, c) {
      if (z[a.functionName]) return b.uh && G(b.uh), z[a.functionName];
      var d = cp();
      z[a.functionName] = d;
      if (a.yf)
        for (var e = 0; e < a.yf.length; e++) z[a.yf[e]] = z[a.yf[e]] || cp();
      a.Hf && void 0 === z[a.Hf] && (z[a.Hf] = c);
      Lc(bp("https://", "http://", a.Eh), b.uh, b.Wl);
      return d;
    },
    cp = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    ep = {
      functionName: "_googWcmImpl",
      Hf: "_googWcmAk",
      Eh: "www.gstatic.com/wcm/loader.js",
    },
    fp = {
      functionName: "_gaPhoneImpl",
      Hf: "ga_wpid",
      Eh: "www.gstatic.com/gaphone/loader.js",
    },
    gp = { Lj: "", Gk: "5" },
    hp = {
      functionName: "_googCallTrackingImpl",
      yf: [fp.functionName, ep.functionName],
      Eh:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (gp.Lj || gp.Gk) +
        ".js",
    },
    ip = {},
    jp = function (a, b, c, d) {
      M(22);
      if (c) {
        d = d || {};
        var e = dp(ep, d, a),
          f = { ak: a, cl: b };
        void 0 === d.Eb && (f.autoreplace = c);
        e(2, d.Eb, f, c, 0, Ra(), d.options);
      }
    },
    kp = function (a, b, c, d) {
      M(21);
      if (b && c) {
        d = d || {};
        for (
          var e = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: Ra(),
            },
            f = 0;
          f < a.length;
          f++
        ) {
          var g = a[f];
          ip[g.id] ||
            (g && "AW" === g.prefix && !e.adData && 2 <= g.P.length
              ? ((e.adData = { ak: g.P[0], cl: g.P[1] }), (ip[g.id] = !0))
              : g &&
                "UA" === g.prefix &&
                !e.gaData &&
                ((e.gaData = { gaWpid: g.da }), (ip[g.id] = !0)));
        }
        (e.gaData || e.adData) && dp(hp, d)(d.Eb, e, d.options);
      }
    },
    lp = function () {
      var a = !1;
      return a;
    },
    mp = function (a, b) {
      if (a)
        if (Ym()) {
        } else {
          if (k(a)) {
            var c = Zo(a);
            if (!c) return;
            a = c;
          }
          var d = void 0,
            e = !1,
            f = V(b, N.g.Ai);
          if (f && Ea(f)) {
            d = [];
            for (var g = 0; g < f.length; g++) {
              var h = Zo(f[g]);
              h &&
                (d.push(h),
                (a.id === h.id || (a.id === a.da && a.da === h.da)) &&
                  (e = !0));
            }
          }
          if (!d || e) {
            var m = V(b, N.g.Bg),
              n;
            if (m) {
              Ea(m) ? (n = m) : (n = [m]);
              var p = V(b, N.g.zg),
                q = V(b, N.g.Ag),
                r = V(b, N.g.Cg),
                t = V(b, N.g.zi),
                u = p || q,
                v = 1;
              "UA" !== a.prefix || d || (v = 5);
              for (var w = 0; w < n.length; w++)
                if (w < v)
                  if (d) kp(d, n[w], t, { Eb: u, options: r });
                  else if ("AW" === a.prefix && a.P[1])
                    lp()
                      ? kp([a], n[w], t || "US", { Eb: u, options: r })
                      : jp(a.P[0], a.P[1], n[w], { Eb: u, options: r });
                  else if ("UA" === a.prefix)
                    if (lp()) kp([a], n[w], t || "US", { Eb: u });
                    else {
                      var x = a.da,
                        y = n[w],
                        A = { Eb: u };
                      M(23);
                      if (y) {
                        A = A || {};
                        var C = dp(fp, A, x),
                          D = {};
                        void 0 !== A.Eb ? (D.receiver = A.Eb) : (D.replace = y);
                        D.ga_wpid = x;
                        D.destination = y;
                        C(2, Ra(), D);
                      }
                    }
            }
          }
        }
    };
  var np,
    op = !1;
  function pp() {
    op = !0;
    np = np || {};
  }
  var qp = function (a) {
    op || pp();
    return np[a];
  };
  var rp = function (a, b, c) {
    this.target = a;
    this.eventName = b;
    this.s = c;
    this.h = {};
    this.metadata = mb(c.eventMetadata || {});
    this.isAborted = !1;
  };
  rp.prototype.copyToHitData = function (a, b, c) {
    var d = V(this.s, a);
    void 0 === d && (d = b);
    if (void 0 !== d && void 0 !== c && k(d) && Q(86))
      try {
        d = c(d);
      } catch (e) {}
    void 0 !== d && (this.h[a] = d);
  };
  var sp = function (a, b, c) {
    var d = qp(a.target.da);
    return d && d.hasOwnProperty(b) ? d[b] : c;
  };
  function tp(a) {
    return {
      getDestinationId: function () {
        return a.target.da;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.h[b];
      },
      setHitData: function (b, c) {
        a.h[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.h[b] && (a.h[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return V(a.s, b);
      },
      jj: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.h);
      },
    };
  }
  function Rp(a) {
    var b = V(a.s, N.g.wb),
      c = V(a.s, N.g.Kb);
    b && !c
      ? (a.eventName !== N.g.oa && a.eventName !== N.g.ud && M(131),
        (a.isAborted = !0))
      : !b && c && (M(132), (a.isAborted = !0));
  }
  var Tp = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Up = /^www.googleadservices.com$/,
    Wp = function (a) {
      a || (a = Vp());
      return a.Hm
        ? !1
        : a.yl || a.zl || a.Al || a.hh || a.Ef || a.il || a.pl
        ? !0
        : !1;
    },
    Vp = function () {
      var a = {},
        b = Rn(!0);
      a.Hm = !!b._up;
      var c = Co();
      a.yl = void 0 !== c.aw;
      a.zl = void 0 !== c.dc;
      a.Al = void 0 !== c.gbraid;
      var d = zn(z.location.href),
        e = xn(d, "query", !1, void 0, "gad");
      a.hh = void 0 !== e;
      if (!a.hh) {
        var f = d.hash.replace("#", ""),
          g = un(f, "gad", !1);
        a.hh = void 0 !== g;
      }
      a.Ef = void 0;
      if (Q(101)) {
        var h = xn(d, "query", !1, void 0, "gad_source");
        a.Ef = h;
        if (void 0 === a.Ef) {
          var m = d.hash.replace("#", ""),
            n = un(m, "gad_source", !1);
          a.Ef = n;
        }
      }
      var p = B.referrer ? xn(zn(B.referrer), "host") : "";
      a.pl = Tp.test(p);
      a.il = Up.test(p);
      return a;
    };
  var Xp = function () {
      var a = z.screen;
      return { width: a ? a.width : 0, height: a ? a.height : 0 };
    },
    Yp = function (a) {
      if (B.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle)
        return !0;
      var c = z.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          g = e.filter;
        if (g) {
          var h = g.indexOf("opacity(");
          0 <= h &&
            ((g = g.substring(h + 8, g.indexOf(")", h))),
            "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
            (f = Math.min(g, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = z.getComputedStyle(d, null));
      }
      return !1;
    };
  function Tq() {
    return "attribution-reporting";
  }
  function Uq(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var Vq = !1;
  function Wq() {
    if (Uq("join-ad-interest-group") && Ca(Ec.joinAdInterestGroup)) return !0;
    Vq ||
      (zl(
        "AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
      ),
      (Vq = !0));
    return Uq("join-ad-interest-group") && Ca(Ec.joinAdInterestGroup);
  }
  function Xq(a, b) {
    var c = void 0;
    try {
      c = B.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > Sa() - d) {
        zb("TAGGING", 9);
        return;
      }
    } else
      try {
        if (
          50 <=
          B.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length
        ) {
          zb("TAGGING", 10);
          return;
        }
      } catch (e) {}
    Nc(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: Sa() },
      c
    );
  }
  function Yq() {
    return "https://td.doubleclick.net";
  }
  var Zq = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    $q = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    ar = /^\d+\.fls\.doubleclick\.net$/,
    br = /;gac=([^;?]+)/,
    cr = /;gacgb=([^;?]+)/,
    dr = /;gclaw=([^;?]+)/,
    er = /;gclgb=([^;?]+)/;
  function fr(a, b) {
    if (ar.test(B.location.host)) {
      var c = B.location.href.match(b);
      return c && 2 == c.length && c[1].match(Zq)
        ? decodeURIComponent(c[1])
        : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], h = 0; h < g.length; h++) f.push(g[h].Z);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var gr = function (a, b, c) {
    var d = to() ? po("_gac_gb", !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var h = Po("_gac_gb_" + g, a, b, c);
      f =
        f ||
        (0 !== h.length &&
          h.some(function (m) {
            return 1 === m;
          }));
      e.push(g + ":" + h.join(","));
    }
    return { fl: f ? e.join(";") : "", bl: fr(d, cr) };
  };
  function hr(a, b, c) {
    if (ar.test(B.location.host)) {
      var d = B.location.href.match(c);
      if (d && 2 == d.length && d[1].match($q)) return [{ Z: d[1] }];
    } else return vo((a || "_gcl") + b);
    return [];
  }
  var ir = function (a) {
      return hr(a, "_aw", dr)
        .map(function (b) {
          return b.Z;
        })
        .join(".");
    },
    jr = function (a) {
      return hr(a, "_gb", er)
        .map(function (b) {
          return b.Z;
        })
        .join(".");
    },
    kr = function (a, b) {
      var c = Po(((b && b.prefix) || "_gcl") + "_gb", a, b);
      return 0 === c.length ||
        c.every(function (d) {
          return 0 === d;
        })
        ? ""
        : c.join(".");
    };
  var lr = function () {
    if (Ca(z.__uspapi)) {
      var a = "";
      try {
        z.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var Yr = {
    H: {
      Lh: "ads_conversion_hit",
      sd: "container_execute_start",
      Oh: "container_setup_end",
      Vf: "container_setup_start",
      Mh: "container_blocking_end",
      Nh: "container_execute_end",
      Ph: "container_yield_end",
      Wf: "container_yield_start",
      Gi: "event_execute_end",
      Fi: "event_evaluation_end",
      Lg: "event_evaluation_start",
      Hi: "event_setup_end",
      ee: "event_setup_start",
      Ii: "ga4_conversion_hit",
      ke: "page_load",
      Ym: "pageview",
      Rb: "snippet_load",
      Si: "tag_callback_error",
      Ti: "tag_callback_failure",
      Ui: "tag_callback_success",
      Vi: "tag_execute_end",
      Zc: "tag_execute_start",
    },
  };
  function Zr() {
    function a(c, d) {
      var e = Bb(d);
      e && b.push(c + "=" + e);
    }
    var b = [];
    a("&u", "GTM");
    a("&ut", "TAGGING");
    a("&h", "HEALTH");
    return b.join("");
  }
  var $r = !1;
  var Hs = function (a, b) {},
    Is = function (a, b) {},
    Js = function (a, b) {},
    Ks = function (a, b) {},
    Ls = function () {
      var a = {};
      return a;
    },
    zs = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    Ms = function () {},
    Ns = function (a, b) {},
    Os = function (a, b, c) {},
    Ps = function () {};
  var Qs = function (a, b) {
    var c = z,
      d,
      e = c.GooglebQhCsO;
    e || ((e = {}), (c.GooglebQhCsO = e));
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  };
  var Rs = function (a, b, c) {
    var d = ul(a, "fmt");
    if (b) {
      var e = ul(a, "random"),
        f = ul(a, "label") || "";
      if (!e) return !1;
      var g = fn(
        decodeURIComponent(f.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(e.replace(/\+/g, " "))
      );
      if (!Qs(g, b)) return !1;
    }
    d && 4 != d && (a = wl(a, "rfmt", d));
    var h = wl(a, "fmt", 4);
    Lc(
      h,
      function () {
        z.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((z.google_noFurtherRedirects = null), b());
      },
      void 0,
      c,
      B.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  };
  var gt = function () {
      this.h = {};
    },
    ht = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    it = function (a) {
      return Object.keys(a.h)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
        })
        .join("&");
    },
    kt = function (a, b, c, d) {};
  function mt(a, b) {
    if (data.entities && data.entities[a]) return data.entities[a][b];
  }
  var ot = function (a, b) {
      nt(a).entity.push(b);
    },
    pt = function (a, b) {
      nt(a).event && nt(a).event.push(b);
    },
    qt = function () {
      var a = nt(mk());
      return a.event ? a.event : [];
    };
  function nt(a) {
    var b,
      c = oi.r;
    c || ((c = { container: {} }), (oi.r = c));
    b = c;
    var d = b.container[a];
    d || ((d = { entity: [], event: [] }), (b.container[a] = d));
    return d;
  }
  var rt = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    st = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    tt = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    ut =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      ),
    xt = function (a) {
      var b = Ui("gtm.allowlist") || Ui("gtm.whitelist");
      b && M(9);
      ui && (b = ["google", "gtagfl", "lcl", "zone"]);
      vt() &&
        (ui
          ? M(116)
          : (M(117),
            wt &&
              ((b = []),
              window.console &&
                window.console.log &&
                window.console.log("GTM blocked. See go/13687728."))));
      var c = b && Wa(Oa(b), st),
        d = Ui("gtm.blocklist") || Ui("gtm.blacklist");
      d || ((d = Ui("tagTypeBlacklist")) && M(3));
      d ? M(8) : (d = []);
      vt() &&
        ((d = Oa(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Oa(d).indexOf("google") && M(2);
      var e = d && Wa(Oa(d), tt),
        f = {};
      return function (g) {
        var h = g && g[Pe.wa];
        if (!h || "string" != typeof h) return !0;
        h = h.replace(/^_*/, "");
        if (void 0 !== f[h]) return f[h];
        var m = Gi[h] || [],
          n = a(h, m),
          p;
        p = nt(mk()).entity;
        for (var q = 0; q < p.length; q++)
          try {
            n = n && p[q](h, m);
          } catch (y) {
            n = !1;
          }
        if (b) {
          var r;
          if ((r = n))
            a: {
              if (0 > c.indexOf(h))
                if (m && 0 < m.length)
                  for (var t = 0; t < m.length; t++) {
                    if (0 > c.indexOf(m[t])) {
                      M(11);
                      r = !1;
                      break a;
                    }
                  }
                else {
                  r = !1;
                  break a;
                }
              r = !0;
            }
          n = r;
        }
        var u = !1;
        if (d) {
          var v = 0 <= e.indexOf(h);
          if (v) u = v;
          else {
            var w = Ka(e, m || []);
            w && M(10);
            u = w;
          }
        }
        var x = !n || u;
        x ||
          !(0 <= m.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (x = Ka(e, ut));
        return (f[h] = x);
      };
    },
    wt = !1;
  wt = !0;
  var vt = function () {
      return rt.test(z.location && z.location.hostname);
    },
    zt = function () {
      ek &&
        ot(mk(), function (a) {
          var b = Af(a),
            c;
          if (Ff(b)) {
            var d = b[Pe.wa];
            if (!d) throw "Error: No function name given for function call.";
            var e = tf[d];
            c = !!e && !!e.runInSiloedMode;
          } else c = !!mt(b[Pe.wa], 4);
          return c;
        });
    };
  function At(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return zn("" + c + b).href;
    }
  }
  function Bt() {
    return !!ni.vf && "SGTM_TOKEN" !== ni.vf.split("@@").join("");
  }
  function Ct(a) {
    for (var b = fa([N.g.Qd, N.g.Ob]), c = b.next(); !c.done; c = b.next()) {
      var d = V(a, c.value);
      if (d) return d;
    }
  }
  var Et = function (a, b, c, d, e) {
      if (!Dt() && !sk(a)) {
        var f = "?id=" + encodeURIComponent(a) + "&l=" + ni.fa,
          g = 0 === a.indexOf("GTM-");
        g || (f += "&cx=c");
        Q(63) && (f += "&gtm=" + $m());
        var h = Bt();
        h && (f += "&sign=" + ni.vf);
        var m = c ? "/gtag/js" : "/gtm.js",
          n = wi || yi ? At(b, m + f) : void 0;
        if (!n) {
          var p = ni.We + m;
          h &&
            Fc &&
            g &&
            (p = Fc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          n = bp("https://", "http://", p + f);
        }
        var q = a;
        d.siloed && (vk({ ctid: q, isDestination: !1 }), (q = gk(q)));
        var r = q,
          t = uk();
        ak().container[r] = { state: 1, context: d, parent: t };
        bk({ ctid: r, isDestination: !1 }, e);
        Lc(n);
      }
    },
    Ft = function (a, b, c, d) {
      if (!Dt() && !tk(a))
        if (wk())
          (ak().destination[a] = {
            state: 0,
            transportUrl: b,
            context: c,
            parent: uk(),
          }),
            bk({ ctid: a, isDestination: !0 }, d),
            M(91);
        else {
          var e =
            "/gtag/destination?id=" +
            encodeURIComponent(a) +
            "&l=" +
            ni.fa +
            "&cx=c";
          Q(63) && (e += "&gtm=" + $m());
          Bt() && (e += "&sign=" + ni.vf);
          var f = wi || yi ? At(b, e) : void 0;
          f || (f = bp("https://", "http://", ni.We + e));
          var g = a;
          c.siloed && (vk({ ctid: g, isDestination: !0 }), (g = gk(g)));
          ak().destination[g] = { state: 1, context: c, parent: uk() };
          bk({ ctid: g, isDestination: !0 }, d);
          Lc(f);
        }
    };
  function Dt() {
    if (Ym()) {
      return !0;
    }
    return !1;
  }
  var Gt = "",
    Ht = [];
  function It(a) {
    var b = "";
    Gt && (b = "&dl=" + encodeURIComponent(Gt));
    0 < Ht.length && (b += "&tdp=" + Ht.join("."));
    a.Zb && ((Gt = ""), (Ht.length = 0), b && a.zj());
    return b;
  }
  var Jt = [];
  function Kt(a) {
    if (!Jt.length) return "";
    var b = "&tdc=" + Jt.join("!");
    a.Zb && (a.zj(), (Jt.length = 0));
    return b;
  }
  var Lt = { initialized: 11, complete: 12, interactive: 13 },
    Mt = {},
    Nt = Object.freeze(((Mt[N.g.Ma] = !0), Mt)),
    Ot =
      0 <= B.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= B.location.search.indexOf("&gtm_diagnostics="),
    Qt = function (a, b, c) {
      if (Gk && "config" === a && !(1 < Zo(b).P.length)) {
        var d,
          e = Gc("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = mb(c.I);
        mb(c.h, f);
        var g = [],
          h;
        for (h in d) {
          var m = Pt(d[h], f);
          m.length && (Ot && console.log(m), g.push(h));
        }
        g.length &&
          (g.length && Gk && Jt.push(b + "*" + g.join(".")),
          zb("TAGGING", Lt[B.readyState] || 14));
        d[b] = f;
      }
    };
  function Rt(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Pt(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? Nt[q] : t;
      },
      f;
    for (f in Rt(a, b)) {
      var g = (d ? d + "." : "") + f,
        h = e(f, a),
        m = e(f, b),
        n = "object" === jb(h) || "array" === jb(h),
        p = "object" === jb(m) || "array" === jb(m);
      if (n && p) Pt(h, m, c, g);
      else if (n || p || h !== m) c[g] = !0;
    }
    return Object.keys(c);
  }
  var St = !1,
    Tt = 0,
    Ut = [];
  function Vt(a) {
    if (!St) {
      var b = B.createEventObject,
        c = "complete" == B.readyState,
        d = "interactive" == B.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        St = !0;
        for (var e = 0; e < Ut.length; e++) G(Ut[e]);
      }
      Ut.push = function () {
        for (var f = 0; f < arguments.length; f++) G(arguments[f]);
        return 0;
      };
    }
  }
  function Wt() {
    if (!St && 140 > Tt) {
      Tt++;
      try {
        B.documentElement.doScroll("left"), Vt();
      } catch (a) {
        z.setTimeout(Wt, 50);
      }
    }
  }
  var Xt = function (a) {
    St ? a() : Ut.push(a);
  };
  var Zt = function (a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: lk(),
    };
  };
  var au = function (a, b) {
      this.h = !1;
      this.I = [];
      this.M = { tags: [] };
      this.X = !1;
      this.C = this.D = 0;
      $t(this, a, b);
    },
    bu = function (a, b, c, d) {
      if (ri.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      lb(d) && (e = mb(d, e));
      e.id = c;
      e.status = "timeout";
      return a.M.tags.push(e) - 1;
    },
    cu = function (a, b, c, d) {
      var e = a.M.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    du = function (a) {
      if (!a.h) {
        for (var b = a.I, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.I.length = 0;
      }
    },
    $t = function (a, b, c) {
      void 0 !== b && a.xf(b);
      c &&
        z.setTimeout(function () {
          return du(a);
        }, Number(c));
    };
  au.prototype.xf = function (a) {
    var b = this,
      c = Ua(function () {
        return G(function () {
          a(lk(), b.M);
        });
      });
    this.h ? c() : this.I.push(c);
  };
  var eu = function (a) {
      a.D++;
      return Ua(function () {
        a.C++;
        a.X && a.C >= a.D && du(a);
      });
    },
    fu = function (a) {
      a.X = !0;
      a.C >= a.D && du(a);
    };
  var gu = {},
    iu = function () {
      return z[hu()];
    },
    ju = !1;
  var ku = function (a) {
      z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
      var b = z.GoogleAnalyticsObject;
      if (z[b]) z.hasOwnProperty(b);
      else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(Ra());
        z[b] = c;
      }
      return z[b];
    },
    lu = function (a) {
      if (Gj()) {
        var b = iu();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0);
      }
    };
  function hu() {
    return z.GoogleAnalyticsObject || "ga";
  }
  var mu = function (a) {},
    nu = function (a, b) {
      return function () {
        var c = iu(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              h = f.get("hitCallback"),
              m = 0 > g.indexOf("&tid=" + b);
            m &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", h, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  var su = {},
    tu = {};
  function uu(a, b) {
    if (Gk) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      su[a] = "&e=" + c + "&eid=" + a;
      Qk(a);
    }
  }
  function vu(a) {
    var b = a.eventId,
      c = a.Zb;
    if (!su[b]) return "";
    var d = tu[b] ? "" : "&es=1";
    d += su[b];
    c && (tu[b] = !0);
    return d;
  }
  var wu = {};
  function xu(a, b) {
    Gk && ((wu[a] = wu[a] || {}), (wu[a][b] = (wu[a][b] || 0) + 1));
  }
  function yu(a) {
    var b = a.eventId,
      c = a.Zb,
      d = wu[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete wu[b];
    return e.length ? "&md=" + e.join(".") : "";
  }
  var zu = {},
    Au = {
      aev: "1",
      c: "2",
      jsm: "3",
      v: "4",
      j: "5",
      smm: "6",
      rmm: "7",
      input: "8",
    };
  function Bu(a, b, c) {
    if (Gk) {
      zu[a] = zu[a] || [];
      var d = Au[b] || "0",
        e;
      e =
        c instanceof z.Element
          ? "1"
          : c instanceof z.Event
          ? "2"
          : c instanceof z.RegExp
          ? "3"
          : c === z
          ? "4"
          : c === B
          ? "5"
          : c instanceof z.Promise
          ? "6"
          : c instanceof z.Storage
          ? "7"
          : c instanceof z.Date
          ? "8"
          : c instanceof z.History
          ? "9"
          : c instanceof z.Performance
          ? "a"
          : c === z.crypto
          ? "b"
          : c instanceof z.Location
          ? "c"
          : c instanceof z.Navigator
          ? "d"
          : "object" !== typeof c || lb(c)
          ? "0"
          : "e";
      zu[a].push("" + d + e);
    }
  }
  function Cu(a) {
    var b = a.eventId,
      c = zu[b] || [];
    if (!c.length) return "";
    a.Zb && delete zu[b];
    return "&pcr=" + c.join(".");
  }
  var Du = {},
    Eu = {};
  function Fu(a, b, c) {
    if (Gk && b) {
      var d = Yj(b);
      Du[a] = Du[a] || [];
      Du[a].push(c + d);
      var e = (Ff(b) ? "1" : "2") + d;
      Eu[a] = Eu[a] || [];
      Eu[a].push(e);
      Qk(a);
    }
  }
  function Gu(a) {
    var b = a.eventId,
      c = a.Zb,
      d = "",
      e = Du[b] || [];
    e.length && (d += "&tr=" + e.join("."));
    var f = Eu[b] || [];
    f.length && (d += "&ti=" + f.join("."));
    c && (delete Du[b], delete Eu[b]);
    return d;
  }
  function Hu(a, b, c, d) {
    var e = rf[a],
      f = Iu(a, b, c, d);
    if (!f) return null;
    var g = Cf(e[Pe.Ri], c, []);
    if (g && g.length) {
      var h = g[0];
      f = Hu(
        h.index,
        {
          onSuccess: f,
          onFailure: 1 === h.fj ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function Iu(a, b, c, d) {
    function e() {
      if (f[Pe.zk]) h();
      else {
        var w = Df(f, c, []),
          x = w[Pe.Mj];
        if (null != x)
          for (var y = 0; y < x.length; y++)
            if (!T(x[y])) {
              h();
              return;
            }
        var A = bu(c.Sb, String(f[Pe.wa]), Number(f[Pe.pe]), w[Pe.Ak]),
          C = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!C) {
            C = !0;
            var F = Sa() - E;
            Fu(c.id, rf[a], "5");
            cu(c.Sb, A, "success", F);
            Q(27) && Os(c, f, Yr.H.Ui);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!C) {
            C = !0;
            var F = Sa() - E;
            Fu(c.id, rf[a], "6");
            cu(c.Sb, A, "failure", F);
            Q(27) && Os(c, f, Yr.H.Ti);
            h();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        Fu(c.id, f, "1");
        var D = function () {
          fj(3);
          var F = Sa() - E;
          Fu(c.id, f, "7");
          cu(c.Sb, A, "exception", F);
          Q(27) && Os(c, f, Yr.H.Si);
          C || ((C = !0), h());
        };
        Q(27) && Ns(c, f);
        var E = Sa();
        try {
          Bf(w, { event: c, index: a, type: 1 });
        } catch (F) {
          D(F);
        }
        Q(27) && Os(c, f, Yr.H.Vi);
      }
    }
    var f = rf[a],
      g = b.onSuccess,
      h = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = Cf(f[Pe.Wi], c, []);
    if (n && n.length) {
      var p = n[0],
        q = Hu(p.index, { onSuccess: g, onFailure: h, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      h = 2 === p.fj ? m : q;
    }
    if (f[Pe.Ni] || f[Pe.Ck]) {
      var r = f[Pe.Ni] ? sf : c.zm,
        t = g,
        u = h;
      if (!r[a]) {
        e = Ua(e);
        var v = Ju(a, r, e);
        g = v.onSuccess;
        h = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function Ju(a, b, c) {
    var d = [],
      e = [];
    b[a] = Ku(d, e, c);
    return {
      onSuccess: function () {
        b[a] = Lu;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = Mu;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function Ku(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Lu(a) {
    a();
  }
  function Mu(a, b) {
    b();
  }
  var Ou = function (a, b) {
      return 1 === arguments.length ? Nu("set", a) : Nu("set", a, b);
    },
    Pu = function (a, b) {
      return 1 === arguments.length ? Nu("config", a) : Nu("config", a, b);
    },
    Qu = function (a, b, c) {
      c = c || {};
      c[N.g.Nb] = a;
      return Nu("event", b, c);
    };
  function Nu(a) {
    return arguments;
  }
  var Ru = function () {
    this.h = [];
    this.C = [];
  };
  Ru.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c,
    };
    this.h.push(e);
    for (var f = 0; f < this.C.length; f++)
      try {
        this.C[f](e);
      } catch (g) {}
  };
  Ru.prototype.listen = function (a) {
    this.C.push(a);
  };
  Ru.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  Ru.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var Tu = function (a, b, c) {
      Su().enqueue(a, b, c);
    },
    Vu = function () {
      var a = Uu;
      Su().listen(a);
    };
  function Su() {
    var a = oi.mb;
    a || ((a = new Ru()), (oi.mb = a));
    return a;
  }
  var cv = function (a) {
      var b = oi.zones;
      return b
        ? b.getIsAllowedFn(hk(), a)
        : function () {
            return !0;
          };
    },
    dv = function () {
      pt(mk(), function (a, b) {
        var c = oi.zones;
        return c ? c.isActive(hk(), b) : !0;
      });
    };
  var gv = function (a, b) {
    for (var c = [], d = 0; d < rf.length; d++)
      if (a[d]) {
        var e = rf[d];
        var f = eu(b.Sb);
        try {
          var g = Hu(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var h = e[Pe.wa];
            if (!h) throw "Error: No function name given for function call.";
            var m = tf[h];
            c.push({
              Bj: d,
              uj: (m ? m.priorityOverride || 0 : 0) || mt(e[Pe.wa], 1) || 0,
              execute: g,
            });
          } else ev(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(fv);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length;
  };
  function fv(a, b) {
    var c,
      d = b.uj,
      e = a.uj;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.Bj,
        h = b.Bj;
      f = g > h ? 1 : g < h ? -1 : 0;
    }
    return f;
  }
  function ev(a, b) {
    if (Gk) {
      var c = function (d) {
        var e = b.isBlocked(rf[d]) ? "3" : "4",
          f = Cf(rf[d][Pe.Ri], b, []);
        f && f.length && c(f[0].index);
        Fu(b.id, rf[d], e);
        var g = Cf(rf[d][Pe.Wi], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var jv = !1,
    hv;
  var Nv = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (Q(27)) {
    }
    if ("gtm.js" === d) {
      if (jv) return !1;
      jv = !0;
    }
    var e,
      f = !1;
    if (
      qt().every(function (r) {
        return r(d, b);
      })
    )
      e = cv(b);
    else {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d)
        return !1;
      f = !0;
      e = cv(Number.MAX_SAFE_INTEGER);
    }
    uu(b, d);
    var g = a.eventCallback,
      h = a.eventTimeout,
      m = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: xt(e),
        zm: [],
        logMacroError: function () {
          M(6);
          fj(0);
        },
        cachedModelValues: Ev(),
        checkPixieIncompatibility: Kv(b),
        Sb: new au(function () {
          if (Q(27)) {
          }
          g && g.apply(g, [].slice.call(arguments, 0));
        }, h),
      };
    Q(108) && (m.originalEventData = mb(a));
    Q(53) && (m.reportMacroDiscrepancy = xu);
    Q(27) && Js(m.id, m.name);
    var n = Nf(m);
    Q(27) && Ks(m.id, m.name);
    f && (n = Lv(n));
    if (Q(27)) {
    }
    var p = gv(n, m),
      q = !1;
    fu(m.Sb);
    ("gtm.js" !== d && "gtm.sync" !== d) || mu(lk());
    return Mv(n, p) || q;
  };
  function Kv(a) {
    return function (b) {
      ob(b) || Bu(a, "input", b);
    };
  }
  function Ev() {
    var a = {};
    a.event = Zi("event", 1);
    a.ecommerce = Zi("ecommerce", 1);
    a.gtm = Zi("gtm");
    a.eventModel = Zi("eventModel");
    return a;
  }
  function Lv(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(rf[c][Pe.wa]);
        if (qi[d] || void 0 !== rf[c][Pe.Dk] || Hi[d] || mt(d, 2)) b[c] = !0;
      }
    return b;
  }
  function Mv(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && rf[c] && !ri[String(rf[c][Pe.wa])]) return !0;
    return !1;
  }
  var Ov = {};
  function Pv(a, b, c) {
    Gk && void 0 !== a && ((Ov[a] = Ov[a] || []), Ov[a].push(c + b), Qk(a));
  }
  function Qv(a) {
    var b = a.eventId,
      c = a.Zb,
      d = "",
      e = Ov[b] || [];
    e.length && (d += "&epr=" + e.join("."));
    c && delete Ov[b];
    return d;
  }
  var Sv = function (a, b) {
      var c = Zo(kk(a), !0);
      c && Rv.register(c, b);
    },
    Tv = function (a, b, c, d) {
      var e = Zo(c, d.isGtmEvent);
      e && Rv.push("event", [b, a], e, d);
    },
    Uv = function (a, b, c, d) {
      var e = Zo(c, d.isGtmEvent);
      e && Rv.push("get", [a, b], e, d);
    },
    Wv = function (a) {
      var b = Zo(kk(a), !0),
        c;
      b ? (c = Vv(Rv, b).h) : (c = {});
      return c;
    },
    Xv = function (a, b) {
      var c = Zo(kk(a), !0);
      if (c) {
        var d = Rv,
          e = mb(b);
        mb(Vv(d, c).h, e);
        Vv(d, c).h = e;
      }
    },
    Yv = function () {
      this.status = 1;
      this.M = {};
      this.h = {};
      this.C = {};
      this.X = null;
      this.I = {};
      this.D = !1;
    },
    Zv = function (a, b, c, d) {
      var e = Sa();
      this.type = a;
      this.D = e;
      this.h = b;
      this.C = c;
      this.messageContext = d;
    },
    $v = function () {
      this.C = {};
      this.D = {};
      this.h = [];
    },
    Vv = function (a, b) {
      var c = b.da;
      return (a.C[c] = a.C[c] || new Yv());
    },
    aw = function (a, b, c, d) {
      if (d.h) {
        var e = Vv(a, d.h),
          f = e.X;
        if (f) {
          var g = mb(c),
            h = mb(e.M[d.h.id]),
            m = mb(e.I),
            n = mb(e.h),
            p = mb(a.D),
            q = {};
          if (Gk)
            try {
              q = mb(Li);
            } catch (v) {
              M(72);
            }
          var r = d.h.prefix,
            t = function (v) {
              Pv(d.messageContext.eventId, r, v);
            },
            u = jl(
              il(
                hl(
                  gl(
                    fl(
                      dl(
                        cl(
                          el(
                            bl(
                              al(
                                $k(
                                  new Zk(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  g
                                ),
                                h
                              ),
                              m
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (t) {
                        var v = t;
                        t = void 0;
                        v("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    }
                  ),
                  function () {
                    if (t) {
                      var v = t;
                      t = void 0;
                      v("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            );
          try {
            Pv(d.messageContext.eventId, r, "1"),
              Qt(d.type, d.h.id, u),
              f(d.h.id, b, d.D, u);
          } catch (v) {
            Pv(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  $v.prototype.register = function (a, b, c) {
    var d = Vv(this, a);
    3 !== d.status &&
      ((d.X = b), (d.status = 3), c && (mb(d.h, c), (d.h = c)), this.flush());
  };
  $v.prototype.push = function (a, b, c, d) {
    void 0 !== c &&
      (1 === Vv(this, c).status &&
        ((Vv(this, c).status = 2), this.push("require", [{}], c, {})),
      Vv(this, c).D && (d.deferrable = !1));
    this.h.push(new Zv(a, c, b, d));
    d.deferrable || this.flush();
  };
  $v.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
      e = { Tb: e.Tb, Cf: e.Cf };
      var f = this.h[0],
        g = f.h;
      if (f.messageContext.deferrable)
        !g || Vv(this, g).D
          ? ((f.messageContext.deferrable = !1), this.h.push(f))
          : c.push(f),
          this.h.shift();
      else {
        switch (f.type) {
          case "require":
            if (3 !== Vv(this, g).status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            l(f.C[0], function (r, t) {
              mb(Za(r, t), b.D);
            });
            break;
          case "config":
            var h = Vv(this, g);
            e.Tb = {};
            l(
              f.C[0],
              (function (r) {
                return function (t, u) {
                  mb(Za(t, u), r.Tb);
                };
              })(e)
            );
            var m = !!e.Tb[N.g.Pb];
            delete e.Tb[N.g.Pb];
            var n = g.da === g.id;
            m || (n ? (h.I = {}) : (h.M[g.id] = {}));
            (h.D && m) || aw(this, N.g.oa, e.Tb, f);
            h.D = !0;
            n ? mb(e.Tb, h.I) : (mb(e.Tb, h.M[g.id]), M(70));
            d = !0;
            break;
          case "event":
            e.Cf = {};
            l(
              f.C[0],
              (function (r) {
                return function (t, u) {
                  mb(Za(t, u), r.Cf);
                };
              })(e)
            );
            aw(this, f.C[1], e.Cf, f);
            break;
          case "get":
            var p = {},
              q = ((p[N.g.cb] = f.C[0]), (p[N.g.ub] = f.C[1]), p);
            aw(this, N.g.Ja, q, f);
        }
        this.h.shift();
        bw(this, f);
      }
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var bw = function (a, b) {
      if ("require" !== b.type)
        if (b.h)
          for (var c = Vv(a, b.h).C[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.C)
            if (a.C.hasOwnProperty(e)) {
              var f = a.C[e];
              if (f && f.C)
                for (var g = f.C[b.type] || [], h = 0; h < g.length; h++)
                  g[h]();
            }
    },
    Rv = new $v();
  var Wf;
  var cw = {},
    dw = {},
    ew = function (a, b) {
      for (
        var c = [], d = [], e = {}, f = 0;
        f < a.length;
        e = { Lf: e.Lf, Gf: e.Gf }, f++
      ) {
        var g = a[f];
        if (0 <= g.indexOf("-")) {
          if (((e.Lf = Zo(g, b)), e.Lf)) {
            var h = jk();
            Ga(
              h,
              (function (r) {
                return function (t) {
                  return r.Lf.da === t;
                };
              })(e)
            )
              ? c.push(g)
              : d.push(g);
          }
        } else {
          var m = cw[g] || [];
          e.Gf = {};
          m.forEach(
            (function (r) {
              return function (t) {
                return (r.Gf[t] = !0);
              };
            })(e)
          );
          for (var n = hk(), p = 0; p < n.length; p++)
            if (e.Gf[n[p]]) {
              c = c.concat(jk());
              break;
            }
          var q = dw[g] || [];
          q.length && (c = c.concat(q));
        }
      }
      return { Tl: c, Vl: d };
    },
    fw = function (a) {
      l(cw, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    gw = function (a) {
      l(dw, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var hw = "HA GF G UA AW DC MC".split(" "),
    iw = !1,
    jw = !1;
  function kw(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: Ii() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var lw = void 0,
    mw = void 0;
  function nw(a, b, c) {
    var d = mb(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return void 0 !== b[f];
    }) && M(136);
    var e = mb(b);
    mb(c, e);
    Tu(Pu(hk()[0], e), a.eventId, d);
  }
  function ow(a) {
    for (var b = fa([N.g.Qd, N.g.Ob]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || Rv.D[d];
      if (e) return e;
    }
  }
  var pw = {
      config: function (a, b) {
        var c = Q(54),
          d = kw(a, b);
        if (!(2 > a.length) && k(a[1])) {
          var e = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !lb(a[2])) || 3 < a.length) return;
            e = a[2];
          }
          var f = Zo(a[1], b.isGtmEvent);
          if (f) {
            var g, h, m;
            a: {
              if (!dk.ie) {
                var n = nk(uk());
                if (yk(n)) {
                  var p = n.parent,
                    q = p.isDestination;
                  m = { Yl: nk(p), Sl: q };
                  break a;
                }
              }
              m = void 0;
            }
            var r = m;
            r && ((g = r.Yl), (h = r.Sl));
            uu(d.eventId, "gtag.config");
            var t = f.da,
              u = f.id !== t;
            if (u ? -1 === jk().indexOf(t) : -1 === hk().indexOf(t)) {
              if (!((c && b.inheritParentConfig) || (Q(23) && e[N.g.wb]))) {
                var v = ow(e);
                if (u)
                  Ft(t, v, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (c && void 0 !== g && -1 !== g.containers.indexOf(t)) {
                  var w = e;
                  lw ? nw(b, w, lw) : mw || (mw = mb(w));
                } else
                  Et(t, v, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (g && (M(128), h && M(130), c && b.inheritParentConfig)) {
                var x;
                var y = e;
                mw
                  ? (nw(b, mw, y), (x = !1))
                  : ((!y[N.g.Pb] && ti && lw) || (lw = mb(y)), (x = !0));
                x && g.containers && g.containers.join(",");
                return;
              }
              if (ti && !u && !e[N.g.Pb]) {
                var A = jw;
                jw = !0;
                if (A) return;
              }
              iw || M(43);
              if (!b.noTargetGroup)
                if (u) {
                  gw(f.id);
                  var C = f.id,
                    D = e[N.g.Md] || "default";
                  D = String(D).split(",");
                  for (var E = 0; E < D.length; E++) {
                    var F = dw[D[E]] || [];
                    dw[D[E]] = F;
                    0 > F.indexOf(C) && F.push(C);
                  }
                } else {
                  fw(f.id);
                  var H = f.id,
                    O = e[N.g.Md] || "default";
                  O = O.toString().split(",");
                  for (var R = 0; R < O.length; R++) {
                    var U = cw[O[R]] || [];
                    cw[O[R]] = U;
                    0 > U.indexOf(H) && U.push(H);
                  }
                }
              delete e[N.g.Md];
              var ha = b.eventMetadata || {};
              ha.hasOwnProperty("is_external_event") ||
                (ha.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = ha;
              delete e[N.g.Rc];
              for (var Z = u ? [f.id] : jk(), S = 0; S < Z.length; S++) {
                var ja = e,
                  ma = mb(b),
                  ea = Zo(Z[S], ma.isGtmEvent);
                ea && Rv.push("config", [ja], ea, ma);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          M(39);
          var c = kw(a, b),
            d = a[1];
          "default" === d
            ? Qj(a[2])
            : "update" === d
            ? Rj(a[2], c)
            : "declare" === d
            ? b.fromContainerExecution && Pj(a[2])
            : Q(105) && "core_platform_services" === d && Sj(a[2]);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && k(c)) {
          var d;
          if (2 < a.length) {
            if ((!lb(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = mb(e)),
            e[N.g.Rc] && (g.eventCallback = e[N.g.Rc]),
            e[N.g.Hd] && (g.eventTimeout = e[N.g.Hd]));
          var h = kw(a, b),
            m = h.eventId,
            n = h.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[N.g.Nb];
          void 0 === r &&
            ((r = Ui(N.g.Nb, 2)), void 0 === r && (r = "default"));
          if (k(r) || Ea(r)) {
            var t;
            b.isGtmEvent
              ? (t = k(r) ? [r] : r)
              : (t = r.toString().replace(/\s+/g, "").split(","));
            var u = ew(t, b.isGtmEvent),
              v = u.Tl,
              w = u.Vl;
            if (w.length)
              for (var x = ow(q), y = 0; y < w.length; y++) {
                var A = Zo(w[y], b.isGtmEvent);
                A &&
                  Ft(A.da, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = ap(v, b.isGtmEvent);
          } else p = void 0;
          var C = p;
          if (C) {
            uu(m, c);
            for (var D = [], E = 0; E < C.length; E++) {
              var F = C[E],
                H = mb(b);
              if (-1 !== hw.indexOf(ok(F.prefix))) {
                var O = mb(d),
                  R = H.eventMetadata || {};
                R.hasOwnProperty("is_external_event") ||
                  (R.is_external_event = !H.fromContainerExecution);
                H.eventMetadata = R;
                delete O[N.g.Rc];
                Tv(c, O, F.id, H);
              }
              D.push(F.id);
            }
            g.eventModel = g.eventModel || {};
            0 < C.length
              ? (g.eventModel[N.g.Nb] = D.join())
              : delete g.eventModel[N.g.Nb];
            iw || M(43);
            void 0 === b.noGtmEvent &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            g.eventModel[N.g.Kb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        M(53);
        if (4 === a.length && k(a[1]) && k(a[2]) && Ca(a[3])) {
          var c = Zo(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            iw || M(43);
            var f = ow();
            if (
              !Ga(jk(), function (h) {
                return c.da === h;
              })
            )
              Ft(c.da, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (-1 !== hw.indexOf(ok(c.prefix))) {
              kw(a, b);
              var g = {};
              Mj(mb(((g[N.g.cb] = d), (g[N.g.ub] = e), g)));
              Uv(
                d,
                function (h) {
                  G(function () {
                    return e(h);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          iw = !0;
          var c = kw(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (3 === a.length && k(a[1]) && Ca(a[2])) {
          var b = a[1],
            c = a[2],
            d = Wf.C;
          d.h[b] ? d.h[b].push(c) : (d.h[b] = [c]);
          if ((M(74), "all" === a[1])) {
            M(75);
            var e = !1;
            try {
              e = a[2](lk(), "unknown", {});
            } catch (f) {}
            e || M(76);
          }
        } else {
          M(73);
        }
      },
      set: function (a, b) {
        var c;
        2 == a.length && lb(a[1])
          ? (c = mb(a[1]))
          : 3 == a.length &&
            k(a[1]) &&
            ((c = {}),
            lb(a[2]) || Ea(a[2]) ? (c[a[1]] = mb(a[2])) : (c[a[1]] = a[2]));
        if (c) {
          var d = kw(a, b),
            e = d.eventId,
            f = d.priorityId;
          mb(c);
          var g = mb(c);
          Rv.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          Q(13) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    qw = { policy: !0 };
  var rw = function (a) {
      var b = z[ni.fa].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    sw = function (a) {
      var b = z[ni.fa],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var tw = !1,
    uw = [];
  function vw() {
    if (!tw) {
      tw = !0;
      for (var a = 0; a < uw.length; a++) G(uw[a]);
    }
  }
  var ww = function (a) {
    tw ? G(a) : uw.push(a);
  };
  var Nw = function (a) {
    if (Mw(a)) return a;
    this.h = a;
  };
  Nw.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var Mw = function (a) {
    return !a || "object" !== jb(a) || lb(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  Nw.prototype.getUntrustedMessageValue = Nw.prototype.getUntrustedMessageValue;
  var Ow = 0,
    Pw = {},
    Qw = [],
    Rw = [],
    Sw = !1,
    Tw = !1;
  function Uw(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var Vw = function (a) {
      return z[ni.fa].push(a);
    },
    Ww = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return Vw(a);
    },
    Xw = function (a, b) {
      if (!Da(b) || 0 > b) b = 0;
      var c = oi[ni.fa],
        d = 0,
        e = !1,
        f = void 0;
      f = z.setTimeout(function () {
        e || ((e = !0), a());
        f = void 0;
      }, b);
      return function () {
        var g = c ? c.subscribers : 1;
        ++d === g &&
          (f && (z.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
      };
    };
  function Yw(a, b) {
    var c = a._clear || b.overwriteModelFields;
    l(a, function (e, f) {
      "_clear" !== e && (c && Xi(e), Xi(e, f));
    });
    Di || (Di = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = Ii()), (a["gtm.uniqueEventId"] = d), Xi("gtm.uniqueEventId", d));
    return Nv(a);
  }
  function Zw(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (La(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function $w() {
    var a;
    if (Rw.length) a = Rw.shift();
    else if (Qw.length) a = Qw.shift();
    else return;
    var b;
    var c = a;
    if (Sw || !Zw(c.message)) b = c;
    else {
      Sw = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Ii());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        h = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      Qw.unshift(h, c);
      if (Gk) {
        var m = Sf.ctid;
        if (m) {
          var n,
            p = nk(uk());
          n = p && p.context;
          var q,
            r = zn(z.location.href);
          q = r.hostname + r.pathname;
          var t = n && n.fromContainerExecution,
            u = n && n.source,
            v = Sf.bj,
            w = dk.ie;
          Gk &&
            (Gt || (Gt = q),
            Ht.push(
              m +
                ";" +
                v +
                ";" +
                (t ? 1 : 0) +
                ";" +
                (u || 0) +
                ";" +
                (w ? 1 : 0)
            ));
        }
      }
      b = f;
    }
    return b;
  }
  function ax() {
    for (var a = !1, b; !Tw && (b = $w()); ) {
      Tw = !0;
      delete Li.eventModel;
      Ti();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) Tw = !1;
      else {
        e.fromContainerExecution && Yi();
        try {
          if (Ca(d))
            try {
              d.call(Vi);
            } catch (x) {}
          else if (Ea(d)) {
            var f = d;
            if (k(f[0])) {
              var g = f[0].split("."),
                h = g.pop(),
                m = f.slice(1),
                n = Ui(g.join("."), 2);
              if (null != n)
                try {
                  n[h].apply(n, m);
                } catch (x) {}
            }
          } else {
            var p = void 0,
              q = !1;
            if (La(d)) {
              a: {
                if (d.length && k(d[0])) {
                  var r = pw[d[0]];
                  if (r && (!e.fromContainerExecution || !qw[d[0]])) {
                    p = r(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
              (q = p && "set" === d[0] && !!p.event) && M(101);
            } else p = d;
            if (p) {
              var t = Yw(p, e);
              a = t || a;
              q && t && M(113);
            }
          }
        } finally {
          e.fromContainerExecution && Ti(!0);
          var u = d["gtm.uniqueEventId"];
          if ("number" === typeof u) {
            for (var v = Pw[String(u)] || [], w = 0; w < v.length; w++)
              Rw.push(bx(v[w]));
            v.length && Rw.sort(Uw);
            delete Pw[String(u)];
            u > Ow && (Ow = u);
          }
          Tw = !1;
        }
      }
    }
    return !a;
  }
  function cx() {
    if (Q(27)) {
      var a = dx();
    }
    var b = ax();
    if (Q(27)) {
    }
    try {
      rw(lk());
    } catch (c) {}
    return b;
  }
  function Uu(a) {
    if (Ow < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Pw[b] = Pw[b] || [];
      Pw[b].push(a);
    } else
      Rw.push(bx(a)),
        Rw.sort(Uw),
        G(function () {
          Tw || ax();
        });
  }
  function bx(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var ex = function () {
      function a(f) {
        var g = {};
        if (Mw(f)) {
          var h = f;
          f = Mw(h) ? h.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = Gc(ni.fa, []),
        c = (oi[ni.fa] = oi[ni.fa] || {});
      !0 === c.pruned && M(83);
      Pw = Su().get();
      Vu();
      Xt(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      ww(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < oi.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var g = 0; g < arguments.length; g++)
            f[g] = new Nw(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var h = f.map(function (q) {
          return a(q);
        });
        Qw.push.apply(Qw, h);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (M(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = "boolean" !== typeof m || m;
        return ax() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      Qw.push.apply(Qw, e);
      if (dx()) {
        if (Q(27)) {
        }
        G(cx);
      }
    },
    dx = function () {
      var a = !0;
      return a;
    };
  function fx(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Sa();
    return b < c + 3e5 && b > c - 9e5;
  }
  function gx(a) {
    return a && 0 === a.indexOf("pending:") ? fx(a.substr(8)) : !1;
  }
  var Bx = function () {};
  var Cx = new String("undefined"),
    Dx = function () {};
  Dx.prototype.toString = function () {
    return "undefined";
  };
  var Ex = new Dx();
  var my = z.clearTimeout,
    ny = z.setTimeout,
    oy = function (a, b, c, d) {
      if (Ym()) {
        b && G(b);
      } else return Lc(a, b, c, d);
    },
    py = function () {
      return new Date();
    },
    qy = function () {
      return z.location.href;
    },
    ry = function (a) {
      return xn(zn(a), "fragment");
    },
    sy = function (a) {
      return yn(zn(a));
    },
    ty = function (a, b) {
      return Ui(a, b || 2);
    },
    uy = function (a, b, c) {
      return b ? Ww(a, b, c) : Vw(a);
    },
    vy = function (a, b) {
      z[a] = b;
    },
    W = function (a, b, c) {
      b && (void 0 === z[a] || (c && !z[a])) && (z[a] = b);
      return z[a];
    },
    wy = function (a, b, c) {
      return wm(a, b, void 0 === c ? !0 : !!c);
    },
    xy = function (a, b, c) {
      return 0 === Fm(a, b, c);
    },
    yy = function (a, b) {
      if (Ym()) {
        b && G(b);
      } else Nc(a, b);
    },
    zy = function (a) {
      return !!Qx(a, "init", !1);
    },
    Ay = function (a) {
      Ox(a, "init", !0);
    },
    By = function (a, b, c) {
      ob(a) || Bu(c, b, a);
    };

  function Yy(a, b) {
    function c(g) {
      var h = zn(g),
        m = xn(h, "protocol"),
        n = xn(h, "host", !0),
        p = xn(h, "port"),
        q = xn(h, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === m ||
        ("http" === m && "80" === p) ||
        ("https" === m && "443" === p)
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function Zy(a) {
    return $y(a) ? 1 : 0;
  }
  function $y(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = mb(a, {});
        mb({ arg1: c[d], any_of: void 0 }, e);
        if (Zy(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return tg(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < pg.length; g++) {
                var h = pg[g];
                if (b[h]) {
                  f = b[h](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return qg(b, c);
      case "_eq":
        return ug(b, c);
      case "_ge":
        return vg(b, c);
      case "_gt":
        return xg(b, c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return wg(b, c);
      case "_lt":
        return yg(b, c);
      case "_re":
        return sg(b, c, a.ignore_case);
      case "_sw":
        return zg(b, c);
      case "_um":
        return Yy(b, c);
    }
    return !1;
  }
  function az() {
    var a = [
      "&cv=1",
      "&rv=" + ni.Pg,
      "&tc=" +
        rf.filter(function (b) {
          return b;
        }).length,
    ];
    ni.ne && a.push("&x=" + ni.ne);
    return a.join("");
  }
  var bz = function () {
      return !1;
    },
    cz = function () {
      var a = {};
      return function (b, c, d) {};
    };
  function dz() {
    var a = ez;
    return function (b, c, d) {
      var e = d && d.event;
      fz(c);
      var f = 0 === b.indexOf("__cvt_") ? void 0 : 1,
        g = new rb();
      l(c, function (r, t) {
        var u = nd(t, void 0, f);
        void 0 === u && void 0 !== t && M(44);
        g.set(r, u);
      });
      a.h.h.I = Kf();
      var h = {
        aj: Xf(b),
        eventId: void 0 !== e ? e.id : void 0,
        priorityId: void 0 !== e ? e.priorityId : void 0,
        xf:
          void 0 !== e
            ? function (r) {
                return e.Sb.xf(r);
              }
            : void 0,
        dd: function () {
          return b;
        },
        log: function () {},
        Yk: { index: d && d.index, type: d && d.type, name: d && d.name },
        lm: !!mt(b, 3),
      };
      Q(104) &&
        e &&
        e.cachedModelValues &&
        (h.cachedModelValues = {
          gtm: e.cachedModelValues.gtm,
          ecommerce: e.cachedModelValues.ecommerce,
        });
      Q(108) &&
        (h.originalEventData = void 0 !== e ? e.originalEventData : void 0);
      if (bz()) {
        var m = cz(),
          n = void 0,
          p = void 0;
        h.Xa = {
          Hh: [],
          qe: {},
          ib: function (r, t, u) {
            1 === t && (n = r);
            7 === t && (p = u);
            m(r, t, u);
          },
          th: oh(),
        };
        h.log = function (r, t) {
          if (n) {
            var u = Array.prototype.slice.call(arguments, 1);
            m(n, 4, { level: r, source: p, message: u });
          }
        };
      }
      var q = Le(a, h, [b, g]);
      a.h.h.I = void 0;
      q instanceof va && "return" === q.h && (q = q.C);
      return od(q, void 0, f);
    };
  }
  function fz(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    Ca(b) &&
      (a.gtmOnSuccess = function () {
        G(b);
      });
    Ca(c) &&
      (a.gtmOnFailure = function () {
        G(c);
      });
  }
  function gz(a, b) {
    var c = this;
  }
  gz.O = "addConsentListener";
  var hz;
  var iz = function (a) {
    for (var b = 0; b < a.length; ++b)
      if (hz)
        try {
          a[b]();
        } catch (c) {
          M(77);
        }
      else a[b]();
  };
  function jz(a, b, c) {
    var d = this,
      e;
    return e;
  }
  jz.F = "internal.addDataLayerEventListener";
  function kz(a, b, c) {}
  kz.O = "addDocumentEventListener";
  function lz(a, b, c, d) {}
  lz.O = "addElementEventListener";
  function mz(a) {}
  mz.O = "addEventCallback";
  function qz(a) {}
  qz.F = "internal.addFormAbandonmentListener";
  function rz(a, b, c, d) {}
  rz.F = "internal.addFormData";
  var sz = {},
    tz = [],
    uz = {},
    vz = 0,
    wz = 0;
  function Dz(a, b) {}
  Dz.F = "internal.addFormInteractionListener";
  function Kz(a, b) {}
  Kz.F = "internal.addFormSubmitListener";
  function Pz(a) {}
  Pz.F = "internal.addGaSendListener";
  var Qz = function (a, b) {
    this.tagId = a;
    this.h = b;
  };
  function Rz(a, b, c) {
    var d = this;
  }
  Rz.F = "internal.loadGoogleTag";
  function Sz(a, b, c) {}
  Sz.F = "internal.addGoogleTagRestriction";
  var Tz = {},
    Uz = [];
  var aA = function (a, b) {};
  aA.F = "internal.addHistoryChangeListener";
  function bA(a, b, c) {}
  bA.O = "addWindowEventListener";
  function cA(a, b) {
    return !0;
  }
  cA.O = "aliasInWindow";
  function dA(a, b, c) {}
  dA.F = "internal.appendRemoteConfigParameter";
  function eA() {
    var a = 2;
    return a;
  }
  function fA(a, b) {
    var c;
    return c;
  }
  fA.O = "callInWindow";
  function gA(a) {}
  gA.O = "callLater";
  function hA(a) {}
  hA.F = "callOnDomReady";
  function iA(a) {}
  iA.F = "callOnWindowLoad";
  function jA(a) {
    var b;
    return b;
  }
  jA.F = "internal.computeGtmParameter";
  function kA(a, b) {
    var c;
    var d = nd(c, this.h, eA());
    void 0 === d && void 0 !== c && M(45);
    return d;
  }
  kA.O = "copyFromDataLayer";
  function lA(a) {
    var b = void 0;
    return b;
  }
  lA.F = "internal.copyFromDataLayerCache";
  function mA(a) {
    var b;
    return b;
  }
  mA.O = "copyFromWindow";
  function nA(a) {
    var b = void 0;
    return nd(b, this.h, eA());
  }
  nA.F = "internal.copyKeyFromWindow";
  function oA(a, b) {
    var c;
    return c;
  }
  oA.F = "internal.copyPreHit";
  function pA(a, b) {
    var c = null,
      d = eA();
    return nd(c, this.h, d);
  }
  pA.O = "createArgumentsQueue";
  function qA(a) {
    var b;
    return nd(b, this.h, 1);
  }
  qA.F = "internal.createGaCommandQueue";
  function rA(a) {
    var b;
    return nd(b, this.h, eA());
  }
  rA.O = "createQueue";
  function sA(a, b) {
    var c = null;
    return c;
  }
  sA.F = "internal.createRegex";
  function tA(a) {
    if (!a) return {};
    var b = a.Yk;
    return Zt(b.type, b.index, b.name);
  }
  function uA(a) {
    return a ? { originatingEntity: tA(a) } : {};
  }
  function vA(a) {}
  vA.F = "internal.declareConsentState";
  function wA(a) {
    var b = "";
    return b;
  }
  wA.F = "internal.decodeUrlHtmlEntities";
  function xA(a) {
    var b;
    return b;
  }
  xA.F = "internal.detectUserProvidedData";
  function BA(a, b) {
    return b;
  }
  BA.F = "internal.enableAutoEventOnClick";
  function GA(a, b) {
    return b;
  }
  GA.F = "internal.enableAutoEventOnElementVisibility";
  function HA() {}
  HA.F = "internal.enableAutoEventOnError";
  var IA = {},
    JA = [],
    KA = {},
    LA = 0,
    MA = 0;
  function SA(a, b) {
    var c = this;
    return b;
  }
  SA.F = "internal.enableAutoEventOnFormInteraction";
  function XA(a, b) {
    var c = this;
    return b;
  }
  XA.F = "internal.enableAutoEventOnFormSubmit";
  function bB() {
    var a = this;
  }
  bB.F = "internal.enableAutoEventOnGaSend";
  var cB = {},
    dB = [];
  function kB(a, b) {
    var c = this;
    return b;
  }
  kB.F = "internal.enableAutoEventOnHistoryChange";
  function oB(a, b) {
    var c = this;
    return b;
  }
  oB.F = "internal.enableAutoEventOnLinkClick";
  var pB, qB;
  function zB(a, b) {
    var c = this;
    return b;
  }
  zB.F = "internal.enableAutoEventOnScroll";
  function AB(a) {
    return function () {
      if (a.xc && a.zc >= a.xc) a.vc && z.clearInterval(a.vc);
      else {
        a.zc++;
        var b = Sa();
        Vw({
          event: a.eventName,
          "gtm.timerId": a.vc,
          "gtm.timerEventNumber": a.zc,
          "gtm.timerInterval": a.interval,
          "gtm.timerLimit": a.xc,
          "gtm.timerStartTime": a.Se,
          "gtm.timerCurrentTime": b,
          "gtm.timerElapsedTime": b - a.Se,
          "gtm.triggers": a.Jh,
        });
      }
    };
  }
  function BB(a, b) {
    return b;
  }
  BB.F = "internal.enableAutoEventOnTimer";
  var nc = ca(["data-gtm-yt-inspected-"]),
    CB = ["www.youtube.com", "www.youtube-nocookie.com"],
    DB,
    EB = !1;
  function OB(a, b) {
    var c = this;
    return b;
  }
  OB.F = "internal.enableAutoEventOnYouTubeActivity";
  var PB;
  function QB(a) {
    var b = !1;
    return b;
  }
  QB.F = "internal.evaluateMatchingRules";
  var tC = function () {
      var a = !0;
      (am(7) && am(9) && am(10)) || (a = !1);
      return a;
    },
    uC = function () {
      var a = !0;
      (am(3) && am(4)) || (a = !1);
      return a;
    };
  var yC = function (a, b) {
      if (!b.isGtmEvent) {
        var c = V(b, N.g.cb),
          d = V(b, N.g.ub),
          e = V(b, c);
        if (void 0 === e) {
          var f = void 0;
          vC.hasOwnProperty(c)
            ? (f = vC[c])
            : wC.hasOwnProperty(c) && (f = wC[c]);
          1 === f && (f = xC(c));
          k(f)
            ? iu()(function () {
                var g = iu().getByName(a).get(f);
                d(g);
              })
            : d(void 0);
        } else d(e);
      }
    },
    zC = function (a, b) {
      var c = a[N.g.Lb],
        d = b + ".",
        e = a[N.g.U] || "",
        f = void 0 === c ? !!a.use_anchor : "fragment" === c,
        g = !!a[N.g.xb];
      e = String(e).replace(/\s+/g, "").split(",");
      var h = iu();
      h(d + "require", "linker");
      h(d + "linker:autoLink", e, f, g);
    },
    DC = function (a, b, c) {
      if (Gj() || Q(41))
        if (!c.isGtmEvent || !AC[a]) {
          var d = !T(N.g.T),
            e = function (f) {
              var g,
                h,
                m = iu(),
                n = BC(b, "", c),
                p,
                q = n.createOnlyFields._useUp;
              if (c.isGtmEvent || CC(b, n.createOnlyFields)) {
                c.isGtmEvent &&
                  ((g = "gtm" + Ii()),
                  (h = n.createOnlyFields),
                  n.gtmTrackerName && (h.name = g));
                m(function () {
                  var t = m.getByName(b);
                  t && (p = t.get("clientId"));
                  c.isGtmEvent || m.remove(b);
                });
                m("create", a, c.isGtmEvent ? h : n.createOnlyFields);
                d &&
                  T(N.g.T) &&
                  ((d = !1),
                  m(function () {
                    var t = iu().getByName(c.isGtmEvent ? g : b);
                    !t ||
                      (t.get("clientId") == p && q) ||
                      (c.isGtmEvent
                        ? ((n.fieldsToSet["&gcu"] = "1"),
                          (n.fieldsToSet["&sst.gcut"] = ii[f]))
                        : ((n.fieldsToSend["&gcu"] = "1"),
                          (n.fieldsToSend["&sst.gcut"] = ii[f])),
                      t.set(n.fieldsToSet),
                      c.isGtmEvent
                        ? t.send("pageview")
                        : t.send("pageview", n.fieldsToSend));
                  }));
                c.isGtmEvent &&
                  m(function () {
                    m.remove(g);
                  });
              }
            };
          Vj(function () {
            return e(N.g.T);
          }, N.g.T);
          Vj(function () {
            return e(N.g.J);
          }, N.g.J);
          c.isGtmEvent && (AC[a] = !0);
        }
    },
    EC = function (a, b) {
      Bt() && b && (a[N.g.Jb] = b);
    },
    NC = function (a, b, c) {
      function d() {
        var H = V(c, N.g.Nc);
        h(function () {
          if (!c.isGtmEvent && lb(H)) {
            var O = u.fieldsToSend,
              R = m().getByName(n),
              U;
            for (U in H)
              if (
                H.hasOwnProperty(U) &&
                /^(dimension|metric)\d+$/.test(U) &&
                void 0 != H[U]
              ) {
                var ha = R.get(xC(H[U]));
                FC(O, U, ha);
              }
          }
        });
      }
      function e() {
        if (u.displayfeatures) {
          var H = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
          p("require", "displayfeatures", void 0, { cookieName: H });
        }
      }
      var f = a,
        g = "https://www.google-analytics.com/analytics.js",
        h = c.isGtmEvent ? ku(V(c, "gaFunctionName")) : ku();
      if (Ca(h)) {
        var m = iu,
          n;
        c.isGtmEvent
          ? (n = V(c, "name") || V(c, "gtmTrackerName"))
          : (n = "gtag_" + f.split("-").join("_"));
        var p = function (H) {
            var O = [].slice.call(arguments, 0);
            O[0] = n ? n + "." + O[0] : "" + O[0];
            h.apply(window, O);
          },
          q = function (H) {
            var O = function (ja, ma) {
                for (var ea = 0; ma && ea < ma.length; ea++) p(ja, ma[ea]);
              },
              R = c.isGtmEvent,
              U = R ? GC(u) : HC(b, c);
            if (U) {
              var ha = {};
              EC(ha, H);
              p("require", "ec", "ec.js", ha);
              R && U.Wg && p("set", "&cu", U.Wg);
              var Z = U.action;
              if (R || "impressions" === Z)
                if ((O("ec:addImpression", U.mj), !R)) return;
              if ("promo_click" === Z || "promo_view" === Z || (R && U.Qe)) {
                var S = U.Qe;
                O("ec:addPromo", S);
                if (S && 0 < S.length && "promo_click" === Z) {
                  R ? p("ec:setAction", Z, U.fb) : p("ec:setAction", Z);
                  return;
                }
                if (!R) return;
              }
              "promo_view" !== Z &&
                "impressions" !== Z &&
                (O("ec:addProduct", U.Bc), p("ec:setAction", Z, U.fb));
            }
          },
          r = function (H) {
            if (H) {
              var O = {};
              if (lb(H))
                for (var R in IC) IC.hasOwnProperty(R) && JC(IC[R], R, H[R], O);
              EC(O, x);
              p("require", "linkid", O);
            }
          },
          t = function () {
            if (Ym()) {
            } else {
              var H = V(c, N.g.xi);
              H &&
                (p("require", H, { dataLayer: ni.fa }), p("require", "render"));
            }
          },
          u = BC(n, b, c),
          v = function (H, O, R) {
            R && (O = "" + O);
            u.fieldsToSend[H] = O;
          };
        !c.isGtmEvent &&
          CC(n, u.createOnlyFields) &&
          (h(function () {
            m() && m().remove(n);
          }),
          (KC[n] = !1));
        h("create", f, u.createOnlyFields);
        if (u.createOnlyFields[N.g.Jb] && !c.isGtmEvent) {
          var w =
            wi || yi ? At(u.createOnlyFields[N.g.Jb], "/analytics.js") : void 0;
          w && (g = w);
        }
        var x = c.isGtmEvent
          ? u.fieldsToSet[N.g.Jb]
          : u.createOnlyFields[N.g.Jb];
        if (x) {
          var y = c.isGtmEvent
            ? u.fieldsToSet[N.g.Jd]
            : u.createOnlyFields[N.g.Jd];
          y && !KC[n] && ((KC[n] = !0), h(nu(n, y)));
        }
        c.isGtmEvent
          ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js")
          : (d(), r(u.linkAttribution));
        var A = u[N.g.Da];
        A && A[N.g.U] && zC(A, n);
        p("set", u.fieldsToSet);
        if (c.isGtmEvent) {
          if (u.enableLinkId) {
            var C = {};
            EC(C, x);
            p("require", "linkid", "linkid.js", C);
          }
          DC(f, n, c);
        }
        if (b === N.g.jc)
          if (c.isGtmEvent) {
            e();
            if (u.remarketingLists) {
              var D = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
              p("require", "adfeatures", { cookieName: D });
            }
            q(x);
            p("send", "pageview");
            u.createOnlyFields._useUp && lu(n + ".");
          } else t(), p("send", "pageview", u.fieldsToSend);
        else
          b === N.g.oa
            ? (t(),
              mp(f, c),
              V(c, N.g.Bb) && (Mo(["aw", "dc"]), lu(n + ".")),
              Oo(["aw", "dc"]),
              0 != u.sendPageView && p("send", "pageview", u.fieldsToSend),
              DC(f, n, c))
            : b === N.g.Ja
            ? yC(n, c)
            : "screen_view" === b
            ? p("send", "screenview", u.fieldsToSend)
            : "timing_complete" === b
            ? ((u.fieldsToSend.hitType = "timing"),
              v("timingCategory", u.eventCategory, !0),
              c.isGtmEvent
                ? v("timingVar", u.timingVar, !0)
                : v("timingVar", u.name, !0),
              v("timingValue", Ma(u.value)),
              void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0),
              p("send", u.fieldsToSend))
            : "exception" === b
            ? p("send", "exception", u.fieldsToSend)
            : ("" === b && c.isGtmEvent) ||
              ("track_social" === b && c.isGtmEvent
                ? ((u.fieldsToSend.hitType = "social"),
                  v("socialNetwork", u.socialNetwork, !0),
                  v("socialAction", u.socialAction, !0),
                  v("socialTarget", u.socialTarget, !0))
                : ((c.isGtmEvent || LC[b]) && q(x),
                  c.isGtmEvent && e(),
                  (u.fieldsToSend.hitType = "event"),
                  v("eventCategory", u.eventCategory, !0),
                  v("eventAction", u.eventAction || b, !0),
                  void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0),
                  void 0 !== u.value && v("eventValue", Ma(u.value))),
              p("send", u.fieldsToSend));
        if (!MC && !c.isGtmEvent) {
          MC = !0;
          var E = function () {
              c.onFailure();
            },
            F = function () {
              m().loaded || E();
            };
          Ym() ? G(F) : Lc(g, F, E);
        }
      } else G(c.onFailure);
    },
    OC = function (a, b, c, d) {
      Wj(
        function () {
          NC(a, b, d);
        },
        [N.g.T, N.g.J]
      );
    },
    QC = function (a) {
      function b(e) {
        function f(h, m) {
          for (var n = 0; n < m.length; n++) {
            var p = m[n];
            if (e[p]) {
              g[h] = e[p];
              break;
            }
          }
        }
        var g = mb(e);
        f("id", ["id", "item_id", "promotion_id"]);
        f("name", ["name", "item_name", "promotion_name"]);
        f("brand", ["brand", "item_brand"]);
        f("variant", ["variant", "item_variant"]);
        f("list", ["list_name", "item_list_name"]);
        f("position", ["list_position", "creative_slot", "index"]);
        (function () {
          if (e.category) g.category = e.category;
          else {
            for (var h = "", m = 0; m < PC.length; m++)
              void 0 !== e[PC[m]] && (h && (h += "/"), (h += e[PC[m]]));
            h && (g.category = h);
          }
        })();
        f("listPosition", ["list_position"]);
        f("creative", ["creative_name"]);
        f("list", ["list_name"]);
        f("position", ["list_position", "creative_slot"]);
        return g;
      }
      for (var c = [], d = 0; a && d < a.length; d++)
        a[d] && lb(a[d]) && c.push(b(a[d]));
      return c.length ? c : void 0;
    },
    RC = function (a) {
      return T(a);
    },
    SC = !1;
  var MC,
    KC = {},
    AC = {},
    TC = {},
    UC = Object.freeze(
      ((TC.page_hostname = 1),
      (TC[N.g.ia] = 1),
      (TC[N.g.qb] = 1),
      (TC[N.g.Sa] = 1),
      (TC[N.g.Ga] = 1),
      (TC[N.g.Ta] = 1),
      (TC[N.g.mc] = 1),
      (TC[N.g.Mc] = 1),
      (TC[N.g.La] = 1),
      (TC[N.g.sb] = 1),
      (TC[N.g.ya] = 1),
      (TC[N.g.Uc] = 1),
      (TC[N.g.Ia] = 1),
      (TC[N.g.yb] = 1),
      TC)
    ),
    VC = {},
    vC = Object.freeze(
      ((VC.client_storage = "storage"),
      (VC.sample_rate = 1),
      (VC.site_speed_sample_rate = 1),
      (VC.store_gac = 1),
      (VC.use_amp_client_id = 1),
      (VC[N.g.rb] = 1),
      (VC[N.g.Ca] = "storeGac"),
      (VC[N.g.Sa] = 1),
      (VC[N.g.Ga] = 1),
      (VC[N.g.Ta] = 1),
      (VC[N.g.mc] = 1),
      (VC[N.g.Mc] = 1),
      (VC[N.g.sb] = 1),
      VC)
    ),
    WC = {},
    XC = Object.freeze(
      ((WC._cs = 1),
      (WC._useUp = 1),
      (WC.allowAnchor = 1),
      (WC.allowLinker = 1),
      (WC.alwaysSendReferrer = 1),
      (WC.clientId = 1),
      (WC.cookieDomain = 1),
      (WC.cookieExpires = 1),
      (WC.cookieFlags = 1),
      (WC.cookieName = 1),
      (WC.cookiePath = 1),
      (WC.cookieUpdate = 1),
      (WC.legacyCookieDomain = 1),
      (WC.legacyHistoryImport = 1),
      (WC.name = 1),
      (WC.sampleRate = 1),
      (WC.siteSpeedSampleRate = 1),
      (WC.storage = 1),
      (WC.storeGac = 1),
      (WC.useAmpClientId = 1),
      (WC._cd2l = 1),
      WC)
    ),
    YC = Object.freeze({ anonymize_ip: 1 }),
    ZC = {},
    wC = Object.freeze(
      ((ZC.campaign = {
        content: "campaignContent",
        id: "campaignId",
        medium: "campaignMedium",
        name: "campaignName",
        source: "campaignSource",
        term: "campaignKeyword",
      }),
      (ZC.app_id = 1),
      (ZC.app_installer_id = 1),
      (ZC.app_name = 1),
      (ZC.app_version = 1),
      (ZC.description = "exDescription"),
      (ZC.fatal = "exFatal"),
      (ZC.language = 1),
      (ZC.page_hostname = "hostname"),
      (ZC.transport_type = "transport"),
      (ZC[N.g.ra] = "currencyCode"),
      (ZC[N.g.xg] = 1),
      (ZC[N.g.ya] = "location"),
      (ZC[N.g.Uc] = "page"),
      (ZC[N.g.Ia] = "referrer"),
      (ZC[N.g.yb] = "title"),
      (ZC[N.g.kf] = 1),
      (ZC[N.g.Na] = 1),
      ZC)
    ),
    $C = {},
    aD = Object.freeze(
      (($C.content_id = 1),
      ($C.event_action = 1),
      ($C.event_category = 1),
      ($C.event_label = 1),
      ($C.link_attribution = 1),
      ($C.name = 1),
      ($C[N.g.Da] = 1),
      ($C[N.g.wg] = 1),
      ($C[N.g.Ma] = 1),
      ($C[N.g.ja] = 1),
      $C)
    ),
    bD = Object.freeze({
      displayfeatures: 1,
      enableLinkId: 1,
      enableRecaptcha: 1,
      eventAction: 1,
      eventCategory: 1,
      eventLabel: 1,
      gaFunctionName: 1,
      gtmEcommerceData: 1,
      gtmTrackerName: 1,
      linker: 1,
      remarketingLists: 1,
      socialAction: 1,
      socialNetwork: 1,
      socialTarget: 1,
      timingVar: 1,
      value: 1,
    }),
    PC = Object.freeze([
      "item_category",
      "item_category2",
      "item_category3",
      "item_category4",
      "item_category5",
    ]),
    cD = {},
    IC = Object.freeze(
      ((cD.levels = 1), (cD[N.g.Ga] = "duration"), (cD[N.g.mc] = 1), cD)
    ),
    dD = {},
    eD = Object.freeze(
      ((dD.anonymize_ip = 1),
      (dD.fatal = 1),
      (dD.send_page_view = 1),
      (dD.store_gac = 1),
      (dD.use_amp_client_id = 1),
      (dD[N.g.Ca] = 1),
      (dD[N.g.xg] = 1),
      dD)
    ),
    JC = function (a, b, c, d) {
      if (void 0 !== c)
        if (
          (eD[b] && (c = Na(c)),
          "anonymize_ip" !== b || c || (c = void 0),
          1 === a)
        )
          d[xC(b)] = c;
        else if (k(a)) d[a] = c;
        else
          for (var e in a)
            a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
    },
    xC = function (a) {
      return a && k(a)
        ? a.replace(/(_[a-z])/g, function (b) {
            return b[1].toUpperCase();
          })
        : a;
    },
    fD = {},
    LC = Object.freeze(
      ((fD.checkout_progress = 1),
      (fD.select_content = 1),
      (fD.set_checkout_option = 1),
      (fD[N.g.bc] = 1),
      (fD[N.g.fc] = 1),
      (fD[N.g.Gb] = 1),
      (fD[N.g.hc] = 1),
      (fD[N.g.Ya] = 1),
      (fD[N.g.ob] = 1),
      (fD[N.g.Za] = 1),
      (fD[N.g.na] = 1),
      (fD[N.g.ic] = 1),
      (fD[N.g.Ba] = 1),
      fD)
    ),
    gD = {},
    hD = Object.freeze(
      ((gD.checkout_progress = 1),
      (gD.set_checkout_option = 1),
      (gD[N.g.Zf] = 1),
      (gD[N.g.ag] = 1),
      (gD[N.g.bc] = 1),
      (gD[N.g.fc] = 1),
      (gD[N.g.cg] = 1),
      (gD[N.g.Gb] = 1),
      (gD[N.g.na] = 1),
      (gD[N.g.ic] = 1),
      (gD[N.g.dg] = 1),
      gD)
    ),
    iD = {},
    jD = Object.freeze(
      ((iD.generate_lead = 1),
      (iD.login = 1),
      (iD.search = 1),
      (iD.select_content = 1),
      (iD.share = 1),
      (iD.sign_up = 1),
      (iD.view_search_results = 1),
      (iD[N.g.hc] = 1),
      (iD[N.g.Ya] = 1),
      (iD[N.g.ob] = 1),
      (iD[N.g.Za] = 1),
      (iD[N.g.Ba] = 1),
      iD)
    ),
    kD = function (a) {
      var b = "general";
      hD[a]
        ? (b = "ecommerce")
        : jD[a]
        ? (b = "engagement")
        : "exception" === a && (b = "error");
      return b;
    },
    lD = {},
    mD = Object.freeze(
      ((lD.view_search_results = 1),
      (lD[N.g.Ya] = 1),
      (lD[N.g.Za] = 1),
      (lD[N.g.Ba] = 1),
      lD)
    ),
    FC = function (a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c);
    },
    nD = function (a) {
      if (Ea(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          if (void 0 != d) {
            var e = d.id,
              f = d.variant;
            void 0 != e && void 0 != f && b.push(String(e) + "." + String(f));
          }
        }
        return 0 < b.length ? b.join("!") : void 0;
      }
    },
    BC = function (a, b, c) {
      var d = function (R) {
          return V(c, R);
        },
        e = {},
        f = {},
        g = {},
        h = {},
        m = nD(d(N.g.ni));
      !c.isGtmEvent && m && FC(f, "exp", m);
      g["&gtm"] = $m(!0);
      c.isGtmEvent || (g._no_slc = !0);
      if (Gj() || Q(41)) h._cs = RC;
      var n = d(N.g.Nc);
      if (!c.isGtmEvent && lb(n))
        for (var p in n)
          if (
            n.hasOwnProperty(p) &&
            /^(dimension|metric)\d+$/.test(p) &&
            void 0 != n[p]
          ) {
            var q = d(String(n[p]));
            void 0 !== q && FC(f, p, q);
          }
      for (var r = !c.isGtmEvent, t = Wk(c), u = 0; u < t.length; ++u) {
        var v = t[u];
        if (c.isGtmEvent) {
          var w = d(v);
          bD.hasOwnProperty(v)
            ? (e[v] = w)
            : XC.hasOwnProperty(v)
            ? (h[v] = w)
            : (g[v] = w);
        } else {
          var x = void 0;
          x = v !== N.g.ba ? d(v) : Xk(c, v);
          if (aD.hasOwnProperty(v)) JC(aD[v], v, x, e);
          else if (YC.hasOwnProperty(v)) JC(YC[v], v, x, g);
          else if (wC.hasOwnProperty(v)) JC(wC[v], v, x, f);
          else if (vC.hasOwnProperty(v)) JC(vC[v], v, x, h);
          else if (/^(dimension|metric|content_group)\d+$/.test(v))
            JC(1, v, x, f);
          else if (v === N.g.ba) {
            if (!SC) {
              var y = ab(x);
              y && (f["&did"] = y);
            }
            var A = void 0,
              C = void 0;
            b === N.g.oa
              ? (A = ab(Xk(c, v), "."))
              : ((A = ab(Xk(c, v, 1), ".")), (C = ab(Xk(c, v, 2), ".")));
            A && (f["&gdid"] = A);
            C && (f["&edid"] = C);
          } else
            v === N.g.La && 0 > t.indexOf(N.g.mc) && (h.cookieName = x + "_ga");
          Q(39) &&
            UC[v] &&
            (c.D.hasOwnProperty(v) ||
              (b === N.g.oa && c.h.hasOwnProperty(v))) &&
            (r = !1);
        }
      }
      Q(39) && r && (f["&jsscut"] = "1");
      (!1 !== d(N.g.Ye) && !1 !== d(N.g.qb) && tC()) ||
        (g.allowAdFeatures = !1);
      gm(c) && (Q(76) || uC())
        ? Q(49) && (g.allowAdPersonalizationSignals = !0)
        : (g.allowAdPersonalizationSignals = !1);
      !c.isGtmEvent && d(N.g.Bb) && (h._useUp = !0);
      if (c.isGtmEvent) {
        h.name = h.name || e.gtmTrackerName;
        var D = g.hitCallback;
        g.hitCallback = function () {
          Ca(D) && D();
          c.onSuccess();
        };
      } else {
        FC(h, "cookieDomain", "auto");
        FC(g, "forceSSL", !0);
        FC(e, "eventCategory", kD(b));
        mD[b] && FC(f, "nonInteraction", !0);
        "login" === b || "sign_up" === b || "share" === b
          ? FC(e, "eventLabel", d(N.g.wg))
          : "search" === b || "view_search_results" === b
          ? FC(e, "eventLabel", d(N.g.Ci))
          : "select_content" === b && FC(e, "eventLabel", d(N.g.hi));
        var E = e[N.g.Da] || {},
          F = E[N.g.qc];
        F || (0 != F && E[N.g.U])
          ? (h.allowLinker = !0)
          : !1 === F && FC(h, "useAmpClientId", !1);
        f.hitCallback = c.onSuccess;
        h.name = a;
      }
      if (Gj() || Q(41)) (g["&gcs"] = hm()), Q(45) && (g["&gcd"] = lm(c));
      Gj() &&
        (T(N.g.T) || (h.storage = "none"),
        T(N.g.J) || ((g.allowAdFeatures = !1), (h.storeGac = !1)));
      Q(47) && (pm() && (g["&dma_cps"] = mm()), (g["&dma"] = om()));
      Q(76) && Jl(Sl()) && (g["&tcfd"] = qm());
      var H = Ct(c) || d(N.g.Jb),
        O = d(N.g.Jd);
      H && (c.isGtmEvent || (h[N.g.Jb] = H), (h._cd2l = !0));
      O && !c.isGtmEvent && (h[N.g.Jd] = O);
      e.fieldsToSend = f;
      e.fieldsToSet = g;
      e.createOnlyFields = h;
      return e;
    },
    GC = function (a) {
      var b = a.gtmEcommerceData;
      if (!b) return null;
      var c = {};
      b.currencyCode && (c.Wg = b.currencyCode);
      if (b.impressions) {
        c.action = "impressions";
        var d = b.impressions;
        c.mj = "impressions" === b.translateIfKeyEquals ? QC(d) : d;
      }
      if (b.promoView) {
        c.action = "promo_view";
        var e = b.promoView.promotions;
        c.Qe = "promoView" === b.translateIfKeyEquals ? QC(e) : e;
      }
      if (b.promoClick) {
        c.action = "promo_click";
        var f = b.promoClick.promotions;
        c.Qe = "promoClick" === b.translateIfKeyEquals ? QC(f) : f;
        c.fb = b.promoClick.actionField;
        return c;
      }
      for (var g in b)
        if (
          b.hasOwnProperty(g) &&
          "translateIfKeyEquals" !== g &&
          "impressions" !== g &&
          "promoView" !== g &&
          "promoClick" !== g &&
          "currencyCode" !== g
        ) {
          c.action = g;
          var h = b[g].products;
          c.Bc = "products" === b.translateIfKeyEquals ? QC(h) : h;
          c.fb = b[g].actionField;
          break;
        }
      return Object.keys(c).length ? c : null;
    },
    HC = function (a, b) {
      function c(u) {
        return {
          id: d(N.g.sa),
          affiliation: d(N.g.gg),
          revenue: d(N.g.ja),
          tax: d(N.g.cf),
          shipping: d(N.g.Qc),
          coupon: d(N.g.hg),
          list: d(N.g.bf) || d(N.g.Pc) || u,
        };
      }
      for (
        var d = function (u) {
            return V(b, u);
          },
          e = d(N.g.aa),
          f,
          g = 0;
        e && g < e.length && !(f = e[g][N.g.bf] || e[g][N.g.Pc]);
        g++
      );
      var h = d(N.g.Nc);
      if (lb(h))
        for (var m = 0; e && m < e.length; ++m) {
          var n = e[m],
            p;
          for (p in h)
            h.hasOwnProperty(p) &&
              /^(dimension|metric)\d+$/.test(p) &&
              void 0 != h[p] &&
              FC(n, p, n[h[p]]);
        }
      var q = null,
        r = d(N.g.mi);
      if (a === N.g.na || a === N.g.ic) q = { action: a, fb: c(), Bc: QC(e) };
      else if (a === N.g.bc) q = { action: "add", fb: c(), Bc: QC(e) };
      else if (a === N.g.fc) q = { action: "remove", fb: c(), Bc: QC(e) };
      else if (a === N.g.Ba) q = { action: "detail", fb: c(f), Bc: QC(e) };
      else if (a === N.g.Ya) q = { action: "impressions", mj: QC(e) };
      else if (a === N.g.Za) q = { action: "promo_view", Qe: QC(r) || QC(e) };
      else if (("select_content" === a && r && 0 < r.length) || a === N.g.ob)
        q = { action: "promo_click", Qe: QC(r) || QC(e) };
      else if ("select_content" === a || a === N.g.hc)
        q = {
          action: "click",
          fb: { list: d(N.g.bf) || d(N.g.Pc) || f },
          Bc: QC(e),
        };
      else if (a === N.g.Gb || "checkout_progress" === a) {
        var t = { step: a === N.g.Gb ? 1 : d(N.g.af), option: d(N.g.Bd) };
        q = { action: "checkout", Bc: QC(e), fb: mb(c(), t) };
      } else
        "set_checkout_option" === a &&
          (q = {
            action: "checkout_option",
            fb: { step: d(N.g.af), option: d(N.g.Bd) },
          });
      q && (q.Wg = d(N.g.ra));
      return q;
    },
    oD = {},
    CC = function (a, b) {
      var c = oD[a];
      oD[a] = mb(b);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1;
    };
  function pD(a, b, c, d) {}
  pD.F = "internal.executeEventProcessor";
  function qD(a) {
    var b = void 0;
    return nd(b, this.h, 1);
  }
  qD.F = "internal.executeJavascriptString";
  var rD = function (a) {
    var b;
    return b;
  };
  function sD() {
    var a = new rb();
    L(this, "read_container_data"),
      a.set("containerId", "UA-114367637-1"),
      a.set("version", "1"),
      a.set("environmentName", ""),
      a.set("debugMode", $f),
      a.set("previewMode", bg),
      a.set("environmentMode", ag),
      Q(81) && a.set("firstPartyServing", wi || yi),
      Q(82) && a.set("containerUrl", Fc),
      a.Cb();
    return a;
  }
  sD.O = "getContainerVersion";
  function tD(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    return c;
  }
  tD.O = "getCookieValues";
  function uD() {
    return hj();
  }
  uD.F = "internal.getCountryCode";
  function vD() {
    var a = [];
    return nd(a);
  }
  vD.F = "internal.getDestinationIds";
  function wD(a, b) {
    var c = "";
    return c;
  }
  wD.F = "internal.getElementAttribute";
  function xD(a) {
    var b = null;
    return b;
  }
  xD.O = "getElementById";
  function yD(a) {
    var b = "";
    return b;
  }
  yD.F = "internal.getElementInnerText";
  function zD(a, b) {
    var c = null;
    return c;
  }
  zD.F = "internal.getElementProperty";
  function AD(a) {
    var b;
    return b;
  }
  AD.F = "internal.getElementValue";
  function BD(a) {
    var b = 0;
    return b;
  }
  BD.F = "internal.getElementVisibilityRatio";
  function CD(a) {
    var b = null;
    return b;
  }
  CD.F = "internal.getElementsByCssSelector";
  function DD(a) {
    var b = void 0;
    return b;
  }
  DD.F = "internal.getEventData";
  var ED = {};
  ED.deferGaGamLink = Q(61);
  ED.enableAddGoogleTagRestrictionApi = Q(37);
  ED.enableAdsConversionValidation = Q(34);
  ED.enableAdsHistoryChangeEvents = Q(15);
  ED.enableAutoPiiOnPhoneAndAddress = Q(50);
  ED.enableCcdPreAutoPiiDetection = Q(18);
  ED.enableCloudRecommentationsErrorLogging = Q(113);
  ED.enableCloudRecommentationsSchemaIngestion = Q(112);
  ED.enableCloudRetailInjectPurchaseMetadata = Q(111);
  ED.enableCloudRetailLogging = Q(110);
  ED.enableCloudRetailPageCategories = Q(28);
  ED.enableConsentDisclosureActivity = Q(56);
  ED.enableDecodeUri = Q(86);
  ED.enableDeferAllEnhancedMeasurement = Q(58);
  ED.enableDirectTagLoadingInGoogleTag = Q(103);
  ED.enableEuidAutoMode = Q(16);
  ED.enableFormSkipValidation = Q(51);
  ED.enableGa4OnoRemarketing = Q(14);
  ED.enableGetElementAttribute = Q(66);
  ED.enableGetElementInnerText = Q(71);
  ED.enableLoadGoogleTagOptionsObject = Q(55);
  ED.enableRemoteDomainListSettingsInPixie = Q(87);
  ED.enableUrlDecodeEventUsage = Q(73);
  ED.pixieSetCorePlatformServices = Q(44);
  ED.useEnableAutoEventOnFormApis = Q(37);
  ED.autoPiiEligible = lj();
  function FD() {
    return nd(ED);
  }
  FD.F = "internal.getFlags";
  function GD() {
    return new kd(Ex);
  }
  GD.F = "internal.getHtmlId";
  function HD(a, b) {
    var c;
    return c;
  }
  HD.F = "internal.getProductSettingsParameter";
  function ID(a, b) {
    var c;
    return c;
  }
  ID.O = "getQueryParameters";
  function JD(a, b) {
    var c;
    return c;
  }
  JD.O = "getReferrerQueryParameters";
  function KD(a) {
    var b = "";
    return b;
  }
  KD.O = "getReferrerUrl";
  function LD() {
    return ij();
  }
  LD.F = "internal.getRegionCode";
  function MD(a, b) {
    var c;
    return c;
  }
  MD.F = "internal.getRemoteConfigParameter";
  function ND(a) {
    var b = "";
    return b;
  }
  ND.O = "getUrl";
  function OD() {
    L(this, "get_user_agent");
    return Ec.userAgent;
  }
  OD.O = "getUserAgent";
  function ZD() {
    return (z.gaGlobal = z.gaGlobal || {});
  }
  var $D = function () {
      var a = ZD();
      a.hid = a.hid || Ha();
      return a.hid;
    },
    aE = function (a, b) {
      var c = ZD();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var WE = window,
    XE = document,
    YE = function (a) {
      var b = WE._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        XE.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && !0 === WE["ga-disable-" + a])
      )
        return !0;
      try {
        var c = WE.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = sm("AMP_TOKEN", String(XE.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return XE.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function gF(a) {
    l(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[N.g.Ua] || {};
    l(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var oF = function (a, b) {};
  function nF(a, b) {
    var c = function () {};
    return c;
  }
  function pF(a, b, c) {}
  var qF = nF;
  function sF(a, b, c) {
    var d = this;
  }
  sF.F = "internal.gtagConfig";
  function tF() {
    var a = {};
    return a;
  }
  function vF(a, b) {}
  vF.O = "gtagSet";
  function wF(a, b) {}
  wF.O = "injectHiddenIframe";
  function xF(a, b, c, d, e) {}
  function zF(a, b, c, d) {
    return function () {
      try {
        if (0 < b.length) {
          var e = b.shift(),
            f = zF(a, b, c, d);
          if (
            "SCRIPT" == String(e.nodeName).toUpperCase() &&
            "text/gtmscript" == e.type
          ) {
            var g = e.text || e.textContent || e.innerHTML || "",
              h = e.getAttribute("data-gtmsrc"),
              m = e.charset || "";
            if (h) Lc(h, f, d, { async: !1, id: e.id, text: g, charset: m }, a);
            else {
              var n = B.createElement("script");
              n.async = !1;
              n.type = "text/javascript";
              n.id = e.id;
              n.text = g;
              n.charset = m;
              Hc(n, f);
              a.insertBefore(n, null);
            }
            h || f();
          } else if (
            e.innerHTML &&
            0 <= e.innerHTML.toLowerCase().indexOf("<script")
          ) {
            for (var p = []; e.firstChild; )
              p.push(e.removeChild(e.firstChild));
            a.insertBefore(e, null);
            zF(e, p, f, d)();
          } else a.insertBefore(e, null), f();
        } else c();
      } catch (q) {
        d();
      }
    };
  }
  xF.F = "internal.injectHtml";
  var AF = {};
  function CF(a, b, c, d) {}
  var DF = Object.freeze({ dl: 1, id: 1 }),
    EF = {};
  function FF(a, b, c, d) {}
  CF.O = "injectScript";
  FF.F = "internal.injectScript";
  function GF(a) {
    var b = !0;
    return b;
  }
  GF.O = "isConsentGranted";
  var HF = function () {
    var a = jh(function (b) {
      this.h.h.log("error", b);
    });
    a.O = "JSON";
    return a;
  };
  function IF(a) {
    var b = void 0;
    return nd(b);
  }
  IF.F = "internal.legacyParseUrl";
  var JF = function () {
      return !1;
    },
    KF = {
      getItem: function (a) {
        var b = null;
        return b;
      },
      setItem: function (a, b) {
        return !1;
      },
      removeItem: function (a) {},
    };
  function LF() {}
  LF.O = "logToConsole";
  function MF(a, b) {}
  MF.F = "internal.mergeRemoteConfig";
  function NF(a, b, c) {
    c = void 0 === c ? !0 : c;
    var d = [];
    return d;
  }
  NF.F = "internal.parseCookieValuesFromString";
  function OF(a) {
    var b = void 0;
    return b;
  }
  OF.O = "parseUrl";
  function PF(a) {}
  PF.F = "internal.processAsNewEvent";
  function QF(a, b, c) {
    var d;
    return d;
  }
  QF.F = "internal.pushToDataLayer";
  function RF(a, b) {
    var c = !1;
    return c;
  }
  RF.O = "queryPermission";
  function SF() {
    var a = "";
    return a;
  }
  SF.O = "readCharacterSet";
  function TF() {
    return ni.fa;
  }
  TF.F = "internal.readDataLayerName";
  function UF() {
    var a = "";
    return a;
  }
  UF.O = "readTitle";
  function VF(a, b) {
    var c = this;
  }
  VF.F = "internal.registerCcdCallback";
  function WF(a) {
    return !0;
  }
  WF.F = "internal.registerDestination";
  var XF = Object.freeze(["config", "event", "get", "set"]);
  function YF(a, b, c) {}
  YF.F = "internal.registerGtagCommandListener";
  function ZF(a, b) {
    var c = !1;
    return c;
  }
  ZF.F = "internal.removeDataLayerEventListener";
  function $F(a, b) {}
  $F.F = "internal.removeFormData";
  function aG() {}
  aG.O = "resetDataLayer";
  function bG(a, b, c, d) {}
  bG.F = "internal.sendGtagEvent";
  function cG(a, b, c) {}
  cG.O = "sendPixel";
  function dG(a, b) {}
  dG.F = "internal.setAnchorHref";
  function eG(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f;
  }
  eG.O = "setCookie";
  function fG(a, b) {}
  fG.F = "internal.setCorePlatformServices";
  function gG(a) {}
  gG.O = "setDefaultConsentState";
  function hG(a, b) {}
  hG.F = "internal.setDelegatedConsentType";
  function iG(a, b) {}
  iG.F = "internal.setFormAction";
  function jG(a, b, c) {
    return !1;
  }
  jG.O = "setInWindow";
  function kG(a, b, c) {}
  kG.F = "internal.setProductSettingsParameter";
  function lG(a, b, c) {}
  lG.F = "internal.setRemoteConfigParameter";
  function mG(a, b, c, d) {
    var e = this;
  }
  mG.O = "sha256";
  function nG(a, b, c) {}
  nG.F = "internal.sortRemoteConfigParameters";
  var oG = {},
    pG = {};
  oG.O = "templateStorage";
  oG.getItem = function (a) {
    var b = null;
    return b;
  };
  oG.setItem = function (a, b) {};
  oG.removeItem = function (a) {};
  oG.clear = function () {};
  function qG(a, b) {
    var c = !1;
    return c;
  }
  qG.F = "internal.testRegex";
  var rG = function (a) {
    var b;
    return b;
  };
  function sG(a) {}
  sG.O = "updateConsentState";
  var tG;
  function uG(a, b, c) {
    tG = tG || new th();
    tG.add(a, b, c);
  }
  function vG(a, b) {
    var c = (tG = tG || new th());
    if (c.C.hasOwnProperty(a))
      throw (
        "Attempting to add a private function which already exists: " + a + "."
      );
    if (c.h.hasOwnProperty(a))
      throw (
        "Attempting to add a private function with an existing API name: " +
        a +
        "."
      );
    c.C[a] = Ca(b) ? Qg(a, b) : Rg(a, b);
  }
  function wG() {
    return function (a) {
      var b;
      var c = tG;
      if (c.h.hasOwnProperty(a)) b = c.get(a, this);
      else {
        var d;
        if ((d = c.C.hasOwnProperty(a))) {
          var e = !1,
            f = this.h.h;
          if (f) {
            var g = f.dd();
            if (g) {
              0 !== g.indexOf("__cvt_") && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var h = c.C.hasOwnProperty(a) ? c.C[a] : void 0;
          b = h;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  var xG = function () {
    var a = function (c) {
        return vG(c.F, c);
      },
      b = function (c) {
        return uG(c.O, c);
      };
    b(gz);
    b(mz);
    b(cA);
    b(fA);
    b(gA);
    b(kA);
    b(mA);
    b(pA);
    b(HF());
    b(rA);
    b(sD);
    b(tD);
    b(ID);
    b(JD);
    b(KD);
    b(ND);
    b(vF);
    b(wF);
    b(CF);
    b(GF);
    b(LF);
    b(OF);
    b(RF);
    b(SF);
    b(UF);
    b(cG);
    b(eG);
    b(gG);
    b(jG);
    b(mG);
    b(oG);
    b(sG);
    uG("Math", Wg());
    uG("Object", rh);
    uG("TestHelper", vh());
    uG("assertApi", Sg);
    uG("assertThat", Tg);
    uG("decodeUri", Xg);
    uG("decodeUriComponent", Yg);
    uG("encodeUri", Zg);
    uG("encodeUriComponent", $g);
    uG("fail", fh);
    uG("generateRandom", gh);
    uG("getTimestamp", hh);
    uG("getTimestampMillis", hh);
    uG("getType", ih);
    uG("makeInteger", kh);
    uG("makeNumber", lh);
    uG("makeString", mh);
    uG("makeTableMap", nh);
    uG("mock", qh);
    uG("fromBase64", rD, !("atob" in z));
    uG("localStorage", KF, !JF());
    uG("toBase64", rG, !("btoa" in z));
    a(jz);
    a(rz);
    a(Dz);
    a(Kz);
    a(Pz);
    a(Sz);
    a(aA);
    a(dA);
    a(iA);
    a(oA);
    a(sA);
    a(vA);
    a(wA);
    a(xA);
    a(BA);
    a(GA);
    a(HA);
    a(SA);
    a(XA);
    a(bB);
    a(kB);
    a(oB);
    a(zB);
    a(OB);
    a(ah);
    a(QB);
    a(pD);
    a(qD);
    a(uD);
    a(vD);
    a(AD);
    a(BD);
    a(CD);
    a(FD);
    a(GD);
    a(HD);
    a(LD);
    a(MD);
    a(sF);
    a(FF);
    a(IF);
    a(Rz);
    a(MF);
    a(NF);
    a(PF);
    a(VF);
    a(WF);
    a(YF);
    a(ZF);
    a($F);
    a(bG);
    a(dG);
    a(hG);
    a(iG);
    a(kG);
    a(lG);
    a(nG);
    a(qG);
    vG("internal.GtagSchema", tF());

    Q(44) && a(fG);
    Q(66) && a(wD);
    Q(71) && a(yD);
    Q(72) && a(zD);
    Q(85) && a(TF);
    Q(90) && a(QF);
    Q(93) && a(xF);
    Q(92) && a(BB);
    Q(94) && a(nA);
    Q(95) && a(qA);
    Q(104) && a(lA);
    Q(108) && a(DD);
    return wG();
  };
  var ez;
  function yG() {
    ez.h.h.M = function (a, b, c) {
      oi.SANDBOXED_JS_SEMAPHORE = oi.SANDBOXED_JS_SEMAPHORE || 0;
      oi.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        oi.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function zG(a) {
    void 0 !== a &&
      l(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          Gi[e] = Gi[e] || [];
          Gi[e].push(b);
        }
      });
  }
  var AG = encodeURI,
    X = encodeURIComponent,
    BG = function (a, b, c) {
      Oc(a, b, c);
    },
    CG = function (a, b) {
      if (!a) return !1;
      var c = xn(zn(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    DG = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var Y = { m: {} };

  (Y.m.e = ["google"]),
    (function () {
      (function (a) {
        Y.__e = a;
        Y.__e.o = "e";
        Y.__e.isVendorTemplate = !0;
        Y.__e.priorityOverride = 0;
        Y.__e.isInfrastructure = !1;
        Y.__e.runInSiloedMode = !0;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();
  (Y.m.v = ["google"]),
    (function () {
      (function (a) {
        Y.__v = a;
        Y.__v.o = "v";
        Y.__v.isVendorTemplate = !0;
        Y.__v.priorityOverride = 0;
        Y.__v.isInfrastructure = !1;
        Y.__v.runInSiloedMode = !1;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = ty(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        By(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();

  (Y.m.rep = ["google"]),
    (function () {
      (function (a) {
        Y.__rep = a;
        Y.__rep.o = "rep";
        Y.__rep.isVendorTemplate = !0;
        Y.__rep.priorityOverride = 0;
        Y.__rep.isInfrastructure = !1;
        Y.__rep.runInSiloedMode = !0;
      })(function (a) {
        var b = ok(a.vtp_containerId),
          c = Zo(b, !0),
          d;
        switch (c.prefix) {
          case "AW":
            d = TB;
            break;
          case "DC":
            d = eC;
            break;
          case "GF":
            d = kC;
            break;
          case "HA":
            d = pC;
            break;
          case "UA":
            d = OC;
            break;
          case "MC":
            d = qF(c, a.vtp_gtmEventId);
            break;
          default:
            G(a.vtp_gtmOnFailure);
            return;
        }
        d
          ? (G(a.vtp_gtmOnSuccess),
            Sv(b, d),
            a.vtp_remoteConfig && Xv(b, a.vtp_remoteConfig || {}))
          : G(a.vtp_gtmOnFailure);
      });
    })();

  (Y.m.read_container_data = ["google"]),
    (function () {
      (function (a) {
        Y.__read_container_data = a;
        Y.__read_container_data.o = "read_container_data";
        Y.__read_container_data.isVendorTemplate = !0;
        Y.__read_container_data.priorityOverride = 0;
        Y.__read_container_data.isInfrastructure = !1;
        Y.__read_container_data.runInSiloedMode = !1;
      })(function () {
        return {
          assert: function () {},
          K: function () {
            return {};
          },
        };
      });
    })();

  (Y.m.get = ["google"]),
    (function () {
      (function (a) {
        Y.__get = a;
        Y.__get.o = "get";
        Y.__get.isVendorTemplate = !0;
        Y.__get.priorityOverride = 0;
        Y.__get.isInfrastructure = !1;
        Y.__get.runInSiloedMode = !1;
      })(function (a) {
        var b = a.vtp_settings,
          c = b.eventParameters || {},
          d = String(a.vtp_eventName),
          e = {};
        e.eventId = a.vtp_gtmEventId;
        e.priorityId = a.vtp_gtmPriorityId;
        a.vtp_deferrable && (e.deferrable = !0);
        var f = Qu(String(b.streamId), d, c);
        Tu(f, e.eventId, e);
        a.vtp_gtmOnSuccess();
      });
    })();

  var WH = {};
  WH.dataLayer = Vi;
  WH.callback = function (a) {
    Fi.hasOwnProperty(a) && Ca(Fi[a]) && Fi[a]();
    delete Fi[a];
  };
  WH.bootstrap = 0;
  WH._spx = !1;
  function XH() {
    oi[lk()] = oi[lk()] || WH;
    rk();
    wk() ||
      l(xk(), function (a, b) {
        Ft(a, b.transportUrl, b.context);
        M(92);
      });
    Va(Gi, Y.m);
    Q(84) && nk(uk());
    yf = Of;
  }
  (function (a) {
    function b() {
      m = B.documentElement.getAttribute("data-tag-assistant-present");
      fx(m) && (h = g.rk);
    }
    if (!z["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (B.referrer) {
        var d = zn(B.referrer);
        c = "cct.google" === wn(d, "host");
      }
      if (!c) {
        var e = wm("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c &&
        ((z["__TAGGY_INSTALLED"] = !0),
        Lc("https://cct.google/taggy/agent.js"));
    }
    if (Ai) a();
    else {
      var f = function (u) {
          var v = "GTM",
            w = "GTM";
          ui ? ((v = "OGT"), (w = "GTAG")) : Ai && (w = v = "OPT");
          var x = z["google.tagmanager.debugui2.queue"];
          x ||
            ((x = []),
            (z["google.tagmanager.debugui2.queue"] = x),
            Lc(
              "https://" +
                ni.We +
                "/debug/bootstrap?id=" +
                Sf.ctid +
                "&src=" +
                w +
                "&cond=" +
                u +
                "&gtm=" +
                $m()
            ));
          var y = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: Fc,
              containerProduct: v,
              debug: !1,
              id: Sf.ctid,
              targetRef: { ctid: Sf.ctid, isDestination: dk.ie },
              aliases: fk(),
              destinations: ik(),
            },
          };
          y.data.resume = function () {
            a();
          };
          ni.Nj && (y.data.initialPublish = !0);
          x.push(y);
        },
        g = { Rm: 1, sk: 2, Ek: 3, Pj: 4, rk: 5 },
        h = void 0,
        m = void 0,
        n = xn(z.location, "query", !1, void 0, "gtm_debug");
      fx(n) && (h = g.sk);
      if (!h && B.referrer) {
        var p = zn(B.referrer);
        "tagassistant.google.com" === wn(p, "host") && (h = g.Ek);
      }
      if (!h) {
        var q = wm("__TAG_ASSISTANT");
        q.length && q[0].length && (h = g.Pj);
      }
      h || b();
      if (!h && gx(m)) {
        var r = function () {
            if (t) return !0;
            t = !0;
            b();
            h && Fc ? f(h) : a();
          },
          t = !1;
        Pc(
          B,
          "TADebugSignal",
          function () {
            r();
          },
          !1
        );
        z.setTimeout(function () {
          r();
        }, 200);
      } else h && Fc ? f(h) : a();
    }
  })(function () {
    try {
      pk();
      if (Q(27)) {
      }
      qj().C();
      Yl();
      var a = mk();
      if (ak().canonical[a]) {
        var b = oi.zones;
        b && b.unregisterChild(hk());
      } else {
        zt();
        for (
          var c = data.resource || {}, d = c.macros || [], e = 0;
          e < d.length;
          e++
        )
          of.push(d[e]);
        for (var f = c.tags || [], g = 0; g < f.length; g++) rf.push(f[g]);
        for (var h = c.predicates || [], m = 0; m < h.length; m++)
          qf.push(h[m]);
        for (var n = c.rules || [], p = 0; p < n.length; p++) {
          for (var q = n[p], r = {}, t = 0; t < q.length; t++) {
            var u = q[t][0];
            r[u] = Array.prototype.slice.call(q[t], 1);
            mf(7) && ("if" === u || "unless" === u) && xf(r[u]);
          }
          pf.push(r);
        }
        tf = Y;
        uf = Zy;
        Wf = new Vf();
        var v = data.sandboxed_scripts,
          w = data.security_groups,
          x = data.infra;
        a: {
          var y = data.runtime || [],
            A = data.runtime_lines;
          ez = new Je();
          yG();
          nf = dz();
          var C = ez,
            D = xG(),
            E = new fd("require", D);
          E.Cb();
          C.h.h.set("require", E);
          for (var F = [], H = 0; H < y.length; H++) {
            var O = y[H];
            if (!Ea(O) || 3 > O.length) {
              if (0 === O.length) continue;
              break a;
            }
            A && A[H] && A[H].length && Hf(O, A[H]);
            try {
              ez.execute(O), Q(53) && Gk && 50 === O[0] && F.push(O[1]);
            } catch (Lg) {}
          }
          Q(53) && (zf = F);
        }
        if (void 0 !== v)
          for (var R = ["sandboxedScripts"], U = 0; U < v.length; U++) {
            var ha = v[U].replace(/^_*/, "");
            Gi[ha] = R;
          }
        zG(w);
        if (void 0 !== x) for (var Z = 0; Z < x.length; Z++) Hi[x[Z]] = !0;
        XH();
        if (Q(41) && !Ai) {
          for (
            var S = gj["7"], ja = S ? S.split("|") : [], ma = {}, ea = 0;
            ea < ja.length;
            ea++
          )
            ma[ja[ea]] = !0;
          for (var Ia = 0; Ia < Oj.length; Ia++) {
            var ua = Oj[Ia],
              Fa = ma[ua] ? "granted" : "denied";
            xj().implicit(ua, Fa);
          }
        }
        ex();
        St = !1;
        Tt = 0;
        if (
          ("interactive" == B.readyState && !B.createEventObject) ||
          "complete" == B.readyState
        )
          Vt();
        else {
          Pc(B, "DOMContentLoaded", Vt);
          Pc(B, "readystatechange", Vt);
          if (B.createEventObject && B.documentElement.doScroll) {
            var Pa = !0;
            try {
              Pa = !z.frameElement;
            } catch (Lg) {}
            Pa && Wt();
          }
          Pc(z, "load", Vt);
        }
        tw = !1;
        "complete" === B.readyState ? vw() : Pc(z, "load", vw);
        Gk && (Bk(Tk), z.setInterval(Sk, 864e5));
        Bk(az);
        Bk(vu);
        Bk(Zr);
        Bk(Qv);
        Bk(Gu);
        Bk(Kt);
        Bk(bn);
        Bk(It);
        Bk(Cu);
        Q(53) && Bk(yu);
        Bx();
        fj(1);
        dv();
        Ei = Sa();
        WH.bootstrap = Ei;
        if (Q(27)) {
        }
      }
    } catch (Lg) {
      if ((fj(4), Gk)) {
        var Md = Nk(!0, !0);
        Oc(Md);
      }
    }
  });
})();
