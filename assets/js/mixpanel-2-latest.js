(function () {
  var l = void 0,
    m = !0,
    r = null,
    D = !1;
  (function () {
    function Ba() {
      function a() {
        if (!a.Gc)
          (la = a.Gc = m),
            (ma = D),
            c.a(F, function (a) {
              a.tc();
            });
      }
      function b() {
        try {
          v.documentElement.doScroll("left");
        } catch (d) {
          setTimeout(b, 1);
          return;
        }
        a();
      }
      if (v.addEventListener)
        "complete" === v.readyState
          ? a()
          : v.addEventListener("DOMContentLoaded", a, D);
      else if (v.attachEvent) {
        v.attachEvent("onreadystatechange", a);
        var d = D;
        try {
          d = o.frameElement === r;
        } catch (f) {}
        v.documentElement.doScroll && d && b();
      }
      c.Vb(o, "load", a, m);
    }
    function Ca() {
      x.init = function (a, b, d) {
        if (d) return x[d] || ((x[d] = F[d] = S(a, b, d)), x[d].ka()), x[d];
        d = x;
        if (F.mixpanel) d = F.mixpanel;
        else if (a) (d = S(a, b, "mixpanel")), d.ka(), (F.mixpanel = d);
        x = d;
        1 === ca && (o.mixpanel = x);
        Da();
      };
    }
    function Da() {
      c.a(F, function (a, b) {
        "mixpanel" !== b && (x[b] = a);
      });
      x._ = c;
    }
    function da(a) {
      a = c.e(a) ? a : c.g(a) ? {} : { days: a };
      return c.extend({}, Ea, a);
    }
    function S(a, b, d) {
      var f,
        h = "mixpanel" === d ? x : x[d];
      if (h && 0 === ca) f = h;
      else {
        if (h && !c.isArray(h)) {
          n.error("You have already initialized " + d);
          return;
        }
        f = new e();
      }
      f.lb = {};
      f.Y(a, b, d);
      f.people = new j();
      f.people.Y(f);
      if (!f.c("skip_first_touch_marketing")) {
        var a = c.info.Z(r),
          g = {},
          t = D;
        c.a(a, function (a, b) {
          (g["initial_" + b] = a) && (t = m);
        });
        t && f.people.O(g);
      }
      J = J || f.c("debug");
      !c.g(h) && c.isArray(h) && (f.Aa.call(f.people, h.people), f.Aa(h));
      return f;
    }
    function e() {}
    function P() {}
    function Fa(a) {
      return a;
    }
    function na(a) {
      throw Error(a + " not available in this build.");
    }
    function q(a) {
      this.props = {};
      this.Dd = D;
      this.name = a.persistence_name
        ? "mp_" + a.persistence_name
        : "mp_" + a.token + "_mixpanel";
      var b = a.persistence;
      if ("cookie" !== b && "localStorage" !== b)
        n.B("Unknown persistence type " + b + "; falling back to cookie"),
          (b = a.persistence = "cookie");
      this.j =
        "localStorage" === b && c.localStorage.sa() ? c.localStorage : c.cookie;
      this.load();
      this.nc(a);
      this.zd();
      this.save();
    }
    function j() {}
    function u() {}
    function C(a, b) {
      this.K = b.K;
      this.ca = new G(a, { K: c.bind(this.h, this), j: b.j, z: b.z });
      this.C = b.C;
      this.bd = b.cd;
      this.la = b.la;
      this.md = b.nd;
      this.G = this.C.batch_size;
      this.pa = this.C.batch_flush_interval_ms;
      this.va = !this.C.batch_autostart;
      this.Ja = 0;
      this.I = {};
      this.Db = b.Db || D;
    }
    function oa(a, b) {
      var d = [];
      c.a(a, function (a) {
        var c = a.id;
        if (c in b) {
          if (((c = b[c]), c !== r)) (a.payload = c), d.push(a);
        } else d.push(a);
      });
      return d;
    }
    function pa(a, b) {
      var d = [];
      c.a(a, function (a) {
        a.id && !b[a.id] && d.push(a);
      });
      return d;
    }
    function G(a, b) {
      b = b || {};
      this.P = a;
      this.j = b.j || window.localStorage;
      this.h = b.K || c.bind(qa.error, qa);
      this.Ya = new ra(a, { j: this.j });
      this.z = b.z;
      this.ua = b.ua || r;
      this.D = [];
    }
    function ra(a, b) {
      b = b || {};
      this.P = a;
      this.j = b.j || window.localStorage;
      this.Tb = b.Tb || 100;
      this.hc = b.hc || 2e3;
    }
    function T() {
      this.Qb = "submit";
    }
    function M() {
      this.Qb = "click";
    }
    function E() {}
    function sa(a) {
      var b = Ga,
        d = a.split("."),
        d = d[d.length - 1];
      if (4 < d.length || "com" === d || "org" === d) b = Ha;
      return (a = a.match(b)) ? a[0] : "";
    }
    function ea(a) {
      var b =
        Math.random().toString(36).substring(2, 10) +
        Math.random().toString(36).substring(2, 10);
      return a ? b.substring(0, a) : b;
    }
    function U(a, b) {
      if (fa !== r && !b) return fa;
      var d = m;
      try {
        var a = a || window.localStorage,
          c = "__mplss_" + ea(8);
        a.setItem(c, "xyz");
        "xyz" !== a.getItem(c) && (d = D);
        a.removeItem(c);
      } catch (h) {
        d = D;
      }
      return (fa = d);
    }
    function ga(a) {
      return { log: ha(n.log, a), error: ha(n.error, a), B: ha(n.B, a) };
    }
    function ha(a, b) {
      return function () {
        arguments[0] = "[" + b + "] " + arguments[0];
        return a.apply(n, arguments);
      };
    }
    function Ia(a, b) {
      ta(m, a, b);
    }
    function Ja(a, b) {
      ta(D, a, b);
    }
    function Ka(a, b) {
      return "1" === V(b).get(W(a, b));
    }
    function ua(a, b) {
      if (La(b))
        return (
          n.warn(
            'This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'
          ),
          m
        );
      var d = "0" === V(b).get(W(a, b));
      d &&
        n.warn(
          "You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data."
        );
      return d;
    }
    function K(a) {
      return ia(a, function (a) {
        return this.c(a);
      });
    }
    function H(a) {
      return ia(a, function (a) {
        return this.p(a);
      });
    }
    function N(a) {
      return ia(a, function (a) {
        return this.p(a);
      });
    }
    function Ma(a, b) {
      b = b || {};
      V(b).remove(W(a, b), !!b.yb, b.wb);
    }
    function V(a) {
      a = a || {};
      return "localStorage" === a.Sb ? c.localStorage : c.cookie;
    }
    function W(a, b) {
      b = b || {};
      return (b.Rb || Na) + a;
    }
    function La(a) {
      if (a && a.Hb) return D;
      var a = (a && a.window) || o,
        b = a.navigator || {},
        d = D;
      c.a([b.doNotTrack, b.msDoNotTrack, a.doNotTrack], function (a) {
        c.i([m, 1, "1", "yes"], a) && (d = m);
      });
      return d;
    }
    function ta(a, b, d) {
      !c.Xa(b) || !b.length
        ? n.error(
            "gdpr." + (a ? "optIn" : "optOut") + " called with an invalid token"
          )
        : ((d = d || {}),
          V(d).set(
            W(b, d),
            a ? 1 : 0,
            c.Lb(d.xb) ? d.xb : r,
            !!d.yb,
            !!d.ad,
            !!d.Dc,
            d.wb
          ),
          d.o && a && d.o(d.sd || "$opt_in", d.td, { send_immediately: m }));
    }
    function ia(a, b) {
      return function () {
        var d = D;
        try {
          var c = b.call(this, "token"),
            h = b.call(this, "ignore_dnt"),
            g = b.call(this, "opt_out_tracking_persistence_type"),
            t = b.call(this, "opt_out_tracking_cookie_prefix"),
            i = b.call(this, "window");
          c && (d = ua(c, { Hb: h, Sb: g, Rb: t, window: i }));
        } catch (e) {
          n.error(
            "Unexpected error when checking tracking opt-out status: " + e
          );
        }
        if (!d) return a.apply(this, arguments);
        d = arguments[arguments.length - 1];
        "function" === typeof d && d(0);
      };
    }
    var J = D,
      o;
    if ("undefined" === typeof window) {
      var A = { hostname: "" };
      o = {
        navigator: { userAgent: "" },
        document: { location: A, referrer: "" },
        screen: { width: 0, height: 0 },
        location: A,
      };
    } else o = window;
    var A = Array.prototype,
      va = Object.prototype,
      L = A.slice,
      Q = va.toString,
      X = va.hasOwnProperty,
      y = o.console,
      I = o.navigator,
      v = o.document,
      Y = o.opera,
      Z = o.screen,
      z = I.userAgent,
      ja = Function.prototype.bind,
      wa = A.forEach,
      xa = A.indexOf,
      ya = A.map,
      A = Array.isArray,
      ka = {},
      c = {
        trim: function (a) {
          return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        },
      },
      n = {
        log: function () {
          if (J && !c.g(y) && y)
            try {
              y.log.apply(y, arguments);
            } catch (a) {
              c.a(arguments, function (a) {
                y.log(a);
              });
            }
        },
        warn: function () {
          if (J && !c.g(y) && y) {
            var a = ["Mixpanel warning:"].concat(c.Q(arguments));
            try {
              y.warn.apply(y, a);
            } catch (b) {
              c.a(a, function (a) {
                y.warn(a);
              });
            }
          }
        },
        error: function () {
          if (J && !c.g(y) && y) {
            var a = ["Mixpanel error:"].concat(c.Q(arguments));
            try {
              y.error.apply(y, a);
            } catch (b) {
              c.a(a, function (a) {
                y.error(a);
              });
            }
          }
        },
        B: function () {
          if (!c.g(y) && y) {
            var a = ["Mixpanel error:"].concat(c.Q(arguments));
            try {
              y.error.apply(y, a);
            } catch (b) {
              c.a(a, function (a) {
                y.error(a);
              });
            }
          }
        },
      };
    c.bind = function (a, b) {
      var d, f;
      if (ja && a.bind === ja) return ja.apply(a, L.call(arguments, 1));
      if (!c.Wa(a)) throw new TypeError();
      d = L.call(arguments, 2);
      return (f = function () {
        if (!(this instanceof f))
          return a.apply(b, d.concat(L.call(arguments)));
        var c = {};
        c.prototype = a.prototype;
        var g = new c();
        c.prototype = r;
        c = a.apply(g, d.concat(L.call(arguments)));
        return Object(c) === c ? c : g;
      });
    };
    c.a = function (a, b, d) {
      if (!(a === r || a === l))
        if (wa && a.forEach === wa) a.forEach(b, d);
        else if (a.length === +a.length)
          for (
            var c = 0, h = a.length;
            c < h && !(c in a && b.call(d, a[c], c, a) === ka);
            c++
          );
        else
          for (c in a) if (X.call(a, c) && b.call(d, a[c], c, a) === ka) break;
    };
    c.extend = function (a) {
      c.a(L.call(arguments, 1), function (b) {
        for (var d in b) b[d] !== l && (a[d] = b[d]);
      });
      return a;
    };
    c.isArray =
      A ||
      function (a) {
        return "[object Array]" === Q.call(a);
      };
    c.Wa = function (a) {
      try {
        return /^\s*\bfunction\b/.test(a);
      } catch (b) {
        return D;
      }
    };
    c.Oc = function (a) {
      return !(!a || !X.call(a, "callee"));
    };
    c.Q = function (a) {
      return !a
        ? []
        : a.Q
        ? a.Q()
        : c.isArray(a) || c.Oc(a)
        ? L.call(a)
        : c.Bd(a);
    };
    c.map = function (a, b, d) {
      if (ya && a.map === ya) return a.map(b, d);
      var f = [];
      c.a(a, function (a) {
        f.push(b.call(d, a));
      });
      return f;
    };
    c.keys = function (a) {
      var b = [];
      if (a === r) return b;
      c.a(a, function (a, c) {
        b[b.length] = c;
      });
      return b;
    };
    c.Bd = function (a) {
      var b = [];
      if (a === r) return b;
      c.a(a, function (a) {
        b[b.length] = a;
      });
      return b;
    };
    c.Ua = function (a, b) {
      var d = D;
      if (a === r) return d;
      if (xa && a.indexOf === xa) return -1 != a.indexOf(b);
      c.a(a, function (a) {
        if (d || (d = a === b)) return ka;
      });
      return d;
    };
    c.i = function (a, b) {
      return -1 !== a.indexOf(b);
    };
    c.Jb = function (a, b) {
      a.prototype = new b();
      a.pd = b.prototype;
    };
    c.e = function (a) {
      return a === Object(a) && !c.isArray(a);
    };
    c.ra = function (a) {
      if (c.e(a)) {
        for (var b in a) if (X.call(a, b)) return D;
        return m;
      }
      return D;
    };
    c.g = function (a) {
      return a === l;
    };
    c.Xa = function (a) {
      return "[object String]" == Q.call(a);
    };
    c.Pc = function (a) {
      return "[object Date]" == Q.call(a);
    };
    c.Lb = function (a) {
      return "[object Number]" == Q.call(a);
    };
    c.Qc = function (a) {
      return !!(a && 1 === a.nodeType);
    };
    c.Ma = function (a) {
      c.a(a, function (b, d) {
        c.Pc(b) ? (a[d] = c.Ic(b)) : c.e(b) && (a[d] = c.Ma(b));
      });
      return a;
    };
    c.timestamp = function () {
      Date.now =
        Date.now ||
        function () {
          return +new Date();
        };
      return Date.now();
    };
    c.Ic = function (a) {
      function b(a) {
        return 10 > a ? "0" + a : a;
      }
      return (
        a.getUTCFullYear() +
        "-" +
        b(a.getUTCMonth() + 1) +
        "-" +
        b(a.getUTCDate()) +
        "T" +
        b(a.getUTCHours()) +
        ":" +
        b(a.getUTCMinutes()) +
        ":" +
        b(a.getUTCSeconds())
      );
    };
    c.fa = function (a) {
      var b = {};
      c.a(a, function (a, f) {
        c.Xa(a) && 0 < a.length && (b[f] = a);
      });
      return b;
    };
    c.truncate = function (a, b) {
      var d;
      "string" === typeof a
        ? (d = a.slice(0, b))
        : c.isArray(a)
        ? ((d = []),
          c.a(a, function (a) {
            d.push(c.truncate(a, b));
          }))
        : c.e(a)
        ? ((d = {}),
          c.a(a, function (a, h) {
            d[h] = c.truncate(a, b);
          }))
        : (d = a);
      return d;
    };
    c.ha = (function () {
      return function (a) {
        function b(a, c) {
          var g = "",
            t = 0,
            i = (t = ""),
            i = 0,
            e = g,
            p = [],
            s = c[a];
          s &&
            "object" === typeof s &&
            "function" === typeof s.toJSON &&
            (s = s.toJSON(a));
          switch (typeof s) {
            case "string":
              return d(s);
            case "number":
              return isFinite(s) ? "" + s : "null";
            case "boolean":
            case "null":
              return "" + s;
            case "object":
              if (!s) return "null";
              g += "    ";
              p = [];
              if ("[object Array]" === Q.apply(s)) {
                i = s.length;
                for (t = 0; t < i; t += 1) p[t] = b(t, s) || "null";
                return (i =
                  0 === p.length
                    ? "[]"
                    : g
                    ? "[\n" + g + p.join(",\n" + g) + "\n" + e + "]"
                    : "[" + p.join(",") + "]");
              }
              for (t in s)
                X.call(s, t) &&
                  (i = b(t, s)) &&
                  p.push(d(t) + (g ? ": " : ":") + i);
              return (i =
                0 === p.length
                  ? "{}"
                  : g
                  ? "{" + p.join(",") + "" + e + "}"
                  : "{" + p.join(",") + "}");
          }
        }
        function d(a) {
          var b =
              /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            d = {
              "\u0008": "\\b",
              "\t": "\\t",
              "\n": "\\n",
              "\u000c": "\\f",
              "\r": "\\r",
              '"': '\\"',
              "\\": "\\\\",
            };
          b.lastIndex = 0;
          return b.test(a)
            ? '"' +
                a.replace(b, function (a) {
                  var b = d[a];
                  return "string" === typeof b
                    ? b
                    : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
                }) +
                '"'
            : '"' + a + '"';
        }
        return b("", { "": a });
      };
    })();
    c.T = (function () {
      function a() {
        switch (i) {
          case "t":
            return h("t"), h("r"), h("u"), h("e"), m;
          case "f":
            return h("f"), h("a"), h("l"), h("s"), h("e"), D;
          case "n":
            return h("n"), h("u"), h("l"), h("l"), r;
        }
        g('Unexpected "' + i + '"');
      }
      function b() {
        for (; i && " " >= i; ) h();
      }
      function d() {
        var a,
          b,
          d = "",
          c;
        if ('"' === i)
          for (; h(); ) {
            if ('"' === i) return h(), d;
            if ("\\" === i)
              if ((h(), "u" === i)) {
                for (b = c = 0; 4 > b; b += 1) {
                  a = parseInt(h(), 16);
                  if (!isFinite(a)) break;
                  c = 16 * c + a;
                }
                d += String.fromCharCode(c);
              } else if ("string" === typeof k[i]) d += k[i];
              else break;
            else d += i;
          }
        g("Bad string");
      }
      function c() {
        var a;
        a = "";
        "-" === i && ((a = "-"), h("-"));
        for (; "0" <= i && "9" >= i; ) (a += i), h();
        if ("." === i) for (a += "."; h() && "0" <= i && "9" >= i; ) a += i;
        if ("e" === i || "E" === i) {
          a += i;
          h();
          if ("-" === i || "+" === i) (a += i), h();
          for (; "0" <= i && "9" >= i; ) (a += i), h();
        }
        a = +a;
        if (isFinite(a)) return a;
        g("Bad number");
      }
      function h(a) {
        a && a !== i && g("Expected '" + a + "' instead of '" + i + "'");
        i = p.charAt(e);
        e += 1;
        return i;
      }
      function g(a) {
        a = new SyntaxError(a);
        a.Cd = e;
        a.text = p;
        throw a;
      }
      var e,
        i,
        k = {
          '"': '"',
          "\\": "\\",
          "/": "/",
          b: "\u0008",
          f: "\u000c",
          n: "\n",
          r: "\r",
          t: "\t",
        },
        p,
        s;
      s = function () {
        b();
        switch (i) {
          case "{":
            var e;
            a: {
              var t,
                k = {};
              if ("{" === i) {
                h("{");
                b();
                if ("}" === i) {
                  h("}");
                  e = k;
                  break a;
                }
                for (; i; ) {
                  t = d();
                  b();
                  h(":");
                  Object.hasOwnProperty.call(k, t) &&
                    g('Duplicate key "' + t + '"');
                  k[t] = s();
                  b();
                  if ("}" === i) {
                    h("}");
                    e = k;
                    break a;
                  }
                  h(",");
                  b();
                }
              }
              g("Bad object");
            }
            return e;
          case "[":
            a: {
              e = [];
              if ("[" === i) {
                h("[");
                b();
                if ("]" === i) {
                  h("]");
                  t = e;
                  break a;
                }
                for (; i; ) {
                  e.push(s());
                  b();
                  if ("]" === i) {
                    h("]");
                    t = e;
                    break a;
                  }
                  h(",");
                  b();
                }
              }
              g("Bad array");
            }
            return t;
          case '"':
            return d();
          case "-":
            return c();
          default:
            return "0" <= i && "9" >= i ? c() : a();
        }
      };
      return function (a) {
        p = a;
        e = 0;
        i = " ";
        a = s();
        b();
        i && g("Syntax error");
        return a;
      };
    })();
    c.Bc = function (a) {
      var b,
        d,
        f,
        h,
        g = 0,
        e = 0,
        i = "",
        i = [];
      if (!a) return a;
      a = c.Ad(a);
      do
        (b = a.charCodeAt(g++)),
          (d = a.charCodeAt(g++)),
          (f = a.charCodeAt(g++)),
          (h = (b << 16) | (d << 8) | f),
          (b = (h >> 18) & 63),
          (d = (h >> 12) & 63),
          (f = (h >> 6) & 63),
          (h &= 63),
          (i[e++] =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
              b
            ) +
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
              d
            ) +
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
              f
            ) +
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
              h
            ));
      while (g < a.length);
      i = i.join("");
      switch (a.length % 3) {
        case 1:
          i = i.slice(0, -2) + "==";
          break;
        case 2:
          i = i.slice(0, -1) + "=";
      }
      return i;
    };
    c.Ad = function (a) {
      var a = (a + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n"),
        b = "",
        d,
        c,
        h = 0,
        g;
      d = c = 0;
      h = a.length;
      for (g = 0; g < h; g++) {
        var e = a.charCodeAt(g),
          i = r;
        128 > e
          ? c++
          : (i =
              127 < e && 2048 > e
                ? String.fromCharCode((e >> 6) | 192, (e & 63) | 128)
                : String.fromCharCode(
                    (e >> 12) | 224,
                    ((e >> 6) & 63) | 128,
                    (e & 63) | 128
                  ));
        i !== r &&
          (c > d && (b += a.substring(d, c)), (b += i), (d = c = g + 1));
      }
      c > d && (b += a.substring(d, a.length));
      return b;
    };
    c.jb = (function () {
      function a() {
        function a(b, c) {
          var d,
            f = 0;
          for (d = 0; d < c.length; d++) f |= g[d] << (8 * d);
          return b ^ f;
        }
        var b,
          c,
          g = [],
          e = 0;
        for (b = 0; b < z.length; b++)
          (c = z.charCodeAt(b)),
            g.unshift(c & 255),
            4 <= g.length && ((e = a(e, g)), (g = []));
        0 < g.length && (e = a(e, g));
        return e.toString(16);
      }
      function b() {
        var a = 1 * new Date(),
          b;
        if (o.performance && o.performance.now) b = o.performance.now();
        else for (b = 0; a == 1 * new Date(); ) b++;
        return a.toString(16) + Math.floor(b).toString(16);
      }
      return function () {
        var c = (Z.height * Z.width).toString(16);
        return (
          b() +
          "-" +
          Math.random().toString(16).replace(".", "") +
          "-" +
          a() +
          "-" +
          c +
          "-" +
          b()
        );
      };
    })();
    var za =
      "ahrefsbot,ahrefssiteaudit,baiduspider,bingbot,bingpreview,chrome-lighthouse,facebookexternal,petalbot,pinterest,screaming frog,yahoo! slurp,yandexbot,adsbot-google,apis-google,duplexweb-google,feedfetcher-google,google favicon,google web preview,google-read-aloud,googlebot,googleweblight,mediapartners-google,storebot-google".split(
        ","
      );
    c.Kb = function (a) {
      var b,
        a = a.toLowerCase();
      for (b = 0; b < za.length; b++) if (-1 !== a.indexOf(za[b])) return m;
      return D;
    };
    c.qc = function (a) {
      var b,
        d,
        f,
        h = [];
      c.g(b) && (b = "&");
      c.a(a, function (a, b) {
        d = encodeURIComponent(a.toString());
        f = encodeURIComponent(b);
        h[h.length] = f + "=" + d;
      });
      return h.join(b);
    };
    c.Qa = function (a, b) {
      var b = b.replace(/[[]/, "\\[").replace(/[\]]/, "\\]"),
        c = RegExp("[\\?&]" + b + "=([^&#]*)").exec(a);
      if (c === r || (c && "string" !== typeof c[1] && c[1].length)) return "";
      c = c[1];
      try {
        c = decodeURIComponent(c);
      } catch (f) {
        n.error("Skipping decoding for malformed query param: " + c);
      }
      return c.replace(/\+/g, " ");
    };
    c.cookie = {
      get: function (a) {
        for (
          var a = a + "=", b = v.cookie.split(";"), c = 0;
          c < b.length;
          c++
        ) {
          for (var f = b[c]; " " == f.charAt(0); ) f = f.substring(1, f.length);
          if (0 === f.indexOf(a))
            return decodeURIComponent(f.substring(a.length, f.length));
        }
        return r;
      },
      parse: function (a) {
        var b;
        try {
          b = c.T(c.cookie.get(a)) || {};
        } catch (d) {}
        return b;
      },
      Gd: function (a, b, c, f, h, g, e) {
        var i = "",
          k = "",
          p = "";
        e
          ? (i = "; domain=" + e)
          : f && (i = (i = sa(v.location.hostname)) ? "; domain=." + i : "");
        c &&
          ((k = new Date()),
          k.setTime(k.getTime() + 1e3 * c),
          (k = "; expires=" + k.toGMTString()));
        g && ((h = m), (p = "; SameSite=None"));
        h && (p += "; secure");
        v.cookie = a + "=" + encodeURIComponent(b) + k + "; path=/" + i + p;
      },
      set: function (a, b, c, f, h, g, e) {
        var i = "",
          k = "",
          p = "";
        e
          ? (i = "; domain=" + e)
          : f && (i = (i = sa(v.location.hostname)) ? "; domain=." + i : "");
        c &&
          ((k = new Date()),
          k.setTime(k.getTime() + 864e5 * c),
          (k = "; expires=" + k.toGMTString()));
        g && ((h = m), (p = "; SameSite=None"));
        h && (p += "; secure");
        a = a + "=" + encodeURIComponent(b) + k + "; path=/" + i + p;
        return (v.cookie = a);
      },
      remove: function (a, b, d) {
        c.cookie.set(a, "", -1, b, D, D, d);
      },
    };
    var fa = r;
    c.localStorage = {
      sa: function (a) {
        (a = U(r, a)) ||
          n.error("localStorage unsupported; falling back to cookie store");
        return a;
      },
      error: function (a) {
        n.error("localStorage error: " + a);
      },
      get: function (a) {
        try {
          return window.localStorage.getItem(a);
        } catch (b) {
          c.localStorage.error(b);
        }
        return r;
      },
      parse: function (a) {
        try {
          return c.T(c.localStorage.get(a)) || {};
        } catch (b) {}
        return r;
      },
      set: function (a, b) {
        try {
          window.localStorage.setItem(a, b);
        } catch (d) {
          c.localStorage.error(d);
        }
      },
      remove: function (a) {
        try {
          window.localStorage.removeItem(a);
        } catch (b) {
          c.localStorage.error(b);
        }
      },
    };
    c.Vb = (function () {
      function a(a, f, h) {
        return function (g) {
          if ((g = g || b(window.event))) {
            var e = m,
              i;
            c.Wa(h) && (i = h(g));
            g = f.call(a, g);
            if (D === i || D === g) e = D;
            return e;
          }
        };
      }
      function b(a) {
        if (a)
          (a.preventDefault = b.preventDefault),
            (a.stopPropagation = b.stopPropagation);
        return a;
      }
      b.preventDefault = function () {
        this.returnValue = D;
      };
      b.stopPropagation = function () {
        this.cancelBubble = m;
      };
      return function (b, c, h, g, e) {
        b
          ? b.addEventListener && !g
            ? b.addEventListener(c, h, !!e)
            : ((c = "on" + c), (b[c] = a(b, h, b[c])))
          : n.error("No valid element provided to register_event");
      };
    })();
    var Oa = /^(\w*)\[(\w+)([=~\|\^\$\*]?)=?"?([^\]"]*)"?\]$/;
    c.Fc = (function () {
      function a(a, b) {
        return (
          0 <= (" " + a.className + " ").replace(d, " ").indexOf(" " + b + " ")
        );
      }
      function b(b) {
        if (!v.getElementsByTagName) return [];
        var b = b.split(" "),
          d,
          g,
          e,
          i,
          k,
          p,
          s,
          w = [v];
        for (i = 0; i < b.length; i++)
          if (
            ((d = b[i].replace(/^\s+/, "").replace(/\s+$/, "")),
            -1 < d.indexOf("#"))
          ) {
            g = d.split("#");
            d = g[0];
            w = v.getElementById(g[1]);
            if (!w || (d && w.nodeName.toLowerCase() != d)) return [];
            w = [w];
          } else if (-1 < d.indexOf(".")) {
            g = d.split(".");
            d = g[0];
            var B = g[1];
            d || (d = "*");
            g = [];
            for (k = e = 0; k < w.length; k++) {
              s =
                "*" == d
                  ? w[k].all
                    ? w[k].all
                    : w[k].getElementsByTagName("*")
                  : w[k].getElementsByTagName(d);
              for (p = 0; p < s.length; p++) g[e++] = s[p];
            }
            w = [];
            for (k = d = 0; k < g.length; k++)
              g[k].className &&
                c.Xa(g[k].className) &&
                a(g[k], B) &&
                (w[d++] = g[k]);
          } else if ((g = d.match(Oa))) {
            d = g[1];
            var j = g[2],
              B = g[3],
              o = g[4];
            d || (d = "*");
            g = [];
            for (k = e = 0; k < w.length; k++) {
              s =
                "*" == d
                  ? w[k].all
                    ? w[k].all
                    : w[k].getElementsByTagName("*")
                  : w[k].getElementsByTagName(d);
              for (p = 0; p < s.length; p++) g[e++] = s[p];
            }
            w = [];
            d = 0;
            switch (B) {
              case "=":
                B = function (a) {
                  return a.getAttribute(j) == o;
                };
                break;
              case "~":
                B = function (a) {
                  return a.getAttribute(j).match(RegExp("\\b" + o + "\\b"));
                };
                break;
              case "|":
                B = function (a) {
                  return a.getAttribute(j).match(RegExp("^" + o + "-?"));
                };
                break;
              case "^":
                B = function (a) {
                  return 0 === a.getAttribute(j).indexOf(o);
                };
                break;
              case "$":
                B = function (a) {
                  return (
                    a.getAttribute(j).lastIndexOf(o) ==
                    a.getAttribute(j).length - o.length
                  );
                };
                break;
              case "*":
                B = function (a) {
                  return -1 < a.getAttribute(j).indexOf(o);
                };
                break;
              default:
                B = function (a) {
                  return a.getAttribute(j);
                };
            }
            w = [];
            for (k = d = 0; k < g.length; k++) B(g[k]) && (w[d++] = g[k]);
          } else {
            g = [];
            for (k = e = 0; k < w.length; k++) {
              s = w[k].getElementsByTagName(d);
              for (p = 0; p < s.length; p++) g[e++] = s[p];
            }
            w = g;
          }
        return w;
      }
      var d = /[\t\r\n]/g;
      return function (a) {
        return c.Qc(a) ? [a] : c.e(a) && !c.g(a.length) ? a : b.call(this, a);
      };
    })();
    var Pa = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_content",
        "utm_term",
      ],
      Qa =
        "dclid,fbclid,gclid,ko_click_id,li_fat_id,msclkid,ttclid,twclid,wbraid".split(
          ","
        );
    c.info = {
      Z: function (a) {
        var b = "",
          d = {};
        c.a(Pa, function (f) {
          b = c.Qa(v.URL, f);
          b.length ? (d[f] = b) : a !== l && (d[f] = a);
        });
        return d;
      },
      vb: function () {
        var a = "",
          b = {};
        c.a(Qa, function (d) {
          a = c.Qa(v.URL, d);
          a.length && (b[d] = a);
        });
        return b;
      },
      Rc: function () {
        return c.extend(c.info.Z(), c.info.vb());
      },
      Zc: function (a) {
        return 0 === a.search("https?://(.*)google.([^/?]*)")
          ? "google"
          : 0 === a.search("https?://(.*)bing.com")
          ? "bing"
          : 0 === a.search("https?://(.*)yahoo.com")
          ? "yahoo"
          : 0 === a.search("https?://(.*)duckduckgo.com")
          ? "duckduckgo"
          : r;
      },
      $c: function (a) {
        var b = c.info.Zc(a),
          d = {};
        if (b !== r)
          (d.$search_engine = b),
            (a = c.Qa(a, "yahoo" != b ? "q" : "p")),
            a.length && (d.mp_keyword = a);
        return d;
      },
      ma: function (a, b, d) {
        return d || c.i(a, " OPR/")
          ? c.i(a, "Mini")
            ? "Opera Mini"
            : "Opera"
          : /(BlackBerry|PlayBook|BB10)/i.test(a)
          ? "BlackBerry"
          : c.i(a, "IEMobile") || c.i(a, "WPDesktop")
          ? "Internet Explorer Mobile"
          : c.i(a, "SamsungBrowser/")
          ? "Samsung Internet"
          : c.i(a, "Edge") || c.i(a, "Edg/")
          ? "Microsoft Edge"
          : c.i(a, "FBIOS")
          ? "Facebook Mobile"
          : c.i(a, "Chrome")
          ? "Chrome"
          : c.i(a, "CriOS")
          ? "Chrome iOS"
          : c.i(a, "UCWEB") || c.i(a, "UCBrowser")
          ? "UC Browser"
          : c.i(a, "FxiOS")
          ? "Firefox iOS"
          : c.i(b || "", "Apple")
          ? c.i(a, "Mobile")
            ? "Mobile Safari"
            : "Safari"
          : c.i(a, "Android")
          ? "Android Mobile"
          : c.i(a, "Konqueror")
          ? "Konqueror"
          : c.i(a, "Firefox")
          ? "Firefox"
          : c.i(a, "MSIE") || c.i(a, "Trident/")
          ? "Internet Explorer"
          : c.i(a, "Gecko")
          ? "Mozilla"
          : "";
      },
      Ia: function (a, b, d) {
        b = {
          "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
          "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
          Chrome: /Chrome\/(\d+(\.\d+)?)/,
          "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
          "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
          Safari: /Version\/(\d+(\.\d+)?)/,
          "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
          Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
          Firefox: /Firefox\/(\d+(\.\d+)?)/,
          "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
          Konqueror: /Konqueror:(\d+(\.\d+)?)/,
          BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
          "Android Mobile": /android\s(\d+(\.\d+)?)/,
          "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
          "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
          Mozilla: /rv:(\d+(\.\d+)?)/,
        }[c.info.ma(a, b, d)];
        if (b === l) return r;
        a = a.match(b);
        return !a ? r : parseFloat(a[a.length - 2]);
      },
      Pb: function () {
        return /Windows/i.test(z)
          ? /Phone/.test(z) || /WPDesktop/.test(z)
            ? "Windows Phone"
            : "Windows"
          : /(iPhone|iPad|iPod)/.test(z)
          ? "iOS"
          : /Android/.test(z)
          ? "Android"
          : /(BlackBerry|PlayBook|BB10)/i.test(z)
          ? "BlackBerry"
          : /Mac/i.test(z)
          ? "Mac OS X"
          : /Linux/.test(z)
          ? "Linux"
          : /CrOS/.test(z)
          ? "Chrome OS"
          : "";
      },
      Cb: function (a) {
        return /Windows Phone/i.test(a) || /WPDesktop/.test(a)
          ? "Windows Phone"
          : /iPad/.test(a)
          ? "iPad"
          : /iPod/.test(a)
          ? "iPod Touch"
          : /iPhone/.test(a)
          ? "iPhone"
          : /(BlackBerry|PlayBook|BB10)/i.test(a)
          ? "BlackBerry"
          : /Android/.test(a)
          ? "Android"
          : "";
      },
      Ub: function (a) {
        a = a.split("/");
        return 3 <= a.length ? a[2] : "";
      },
      La: function () {
        return o.location.href;
      },
      ba: function (a) {
        "object" !== typeof a && (a = {});
        return c.extend(
          c.fa({
            $os: c.info.Pb(),
            $browser: c.info.ma(z, I.vendor, Y),
            $referrer: v.referrer,
            $referring_domain: c.info.Ub(v.referrer),
            $device: c.info.Cb(z),
          }),
          {
            $current_url: c.info.La(),
            $browser_version: c.info.Ia(z, I.vendor, Y),
            $screen_height: Z.height,
            $screen_width: Z.width,
            mp_lib: "web",
            $lib_version: "2.54.0",
            $insert_id: ea(),
            time: c.timestamp() / 1e3,
          },
          c.fa(a)
        );
      },
      Vc: function () {
        return c.extend(
          c.fa({ $os: c.info.Pb(), $browser: c.info.ma(z, I.vendor, Y) }),
          { $browser_version: c.info.Ia(z, I.vendor, Y) }
        );
      },
      Sc: function () {
        return c.fa({
          current_page_title: v.title,
          current_domain: o.location.hostname,
          current_url_path: o.location.pathname,
          current_url_protocol: o.location.protocol,
          current_url_search: o.location.search,
        });
      },
    };
    var Ha = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i,
      Ga = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
      $ = r,
      aa = r;
    if ("undefined" !== typeof JSON) ($ = JSON.stringify), (aa = JSON.parse);
    $ = $ || c.ha;
    aa = aa || c.T;
    c.toArray = c.Q;
    c.isObject = c.e;
    c.JSONEncode = c.ha;
    c.JSONDecode = c.T;
    c.isBlockedUA = c.Kb;
    c.isEmptyObject = c.ra;
    c.info = c.info;
    c.info.device = c.info.Cb;
    c.info.browser = c.info.ma;
    c.info.browserVersion = c.info.Ia;
    c.info.properties = c.info.ba;
    E.prototype.oa = function () {};
    E.prototype.Oa = function () {};
    E.prototype.Ga = function () {};
    E.prototype.Va = function (a) {
      this.Mb = a;
      return this;
    };
    E.prototype.o = function (a, b, d, f) {
      var h = this,
        g = c.Fc(a);
      if (0 === g.length)
        n.error("The DOM query (" + a + ") returned 0 elements");
      else
        return (
          c.a(
            g,
            function (a) {
              c.Vb(a, this.Qb, function (a) {
                var c = {},
                  g = h.oa(d, this),
                  e = h.Mb.c("track_links_timeout");
                h.Oa(a, this, c);
                window.setTimeout(h.jc(f, g, c, m), e);
                h.Mb.o(b, g, h.jc(f, g, c));
              });
            },
            this
          ),
          m
        );
    };
    E.prototype.jc = function (a, b, c, f) {
      var f = f || D,
        h = this;
      return function () {
        if (!c.Cc) (c.Cc = m), (a && a(f, b) === D) || h.Ga(b, c, f);
      };
    };
    E.prototype.oa = function (a, b) {
      return "function" === typeof a ? a(b) : c.extend({}, a);
    };
    c.Jb(M, E);
    M.prototype.oa = function (a, b) {
      var c = M.pd.oa.apply(this, arguments);
      if (b.href) c.url = b.href;
      return c;
    };
    M.prototype.Oa = function (a, b, c) {
      c.Nb = 2 === a.which || a.metaKey || a.ctrlKey || "_blank" === b.target;
      c.href = b.href;
      c.Nb || a.preventDefault();
    };
    M.prototype.Ga = function (a, b) {
      b.Nb ||
        setTimeout(function () {
          window.location = b.href;
        }, 0);
    };
    c.Jb(T, E);
    T.prototype.Oa = function (a, b, c) {
      c.element = b;
      a.preventDefault();
    };
    T.prototype.Ga = function (a, b) {
      setTimeout(function () {
        b.element.submit();
      }, 0);
    };
    var Ra = ga("lock");
    ra.prototype.ib = function (a, b, c) {
      function f() {
        j.setItem(n, "1");
        try {
          a();
        } finally {
          j.removeItem(n),
            j.getItem(q) === k && j.removeItem(q),
            j.getItem(o) === k && j.removeItem(o);
        }
      }
      function h() {
        j.setItem(o, k);
        e(g, function () {
          j.getItem(o) === k
            ? f()
            : i(function () {
                j.getItem(q) !== k
                  ? h()
                  : e(function () {
                      return !j.getItem(n);
                    }, f);
              });
        });
      }
      function g() {
        var a = j.getItem(q);
        if (a && a !== k) return D;
        j.setItem(q, k);
        if (j.getItem(q) === k) return m;
        if (!U(j, m))
          throw Error("localStorage support dropped while acquiring lock");
        return D;
      }
      function e(a, b) {
        a()
          ? b()
          : i(function () {
              e(a, b);
            });
      }
      function i(a) {
        new Date().getTime() - p > B
          ? (Ra.error(
              "Timeout waiting for mutex on " +
                s +
                "; clearing lock. [" +
                k +
                "]"
            ),
            j.removeItem(n),
            j.removeItem(q),
            h())
          : setTimeout(function () {
              try {
                a();
              } catch (c) {
                b && b(c);
              }
            }, w * (Math.random() + 0.1));
      }
      !c && "function" !== typeof b && ((c = b), (b = r));
      var k = c || new Date().getTime() + "|" + Math.random(),
        p = new Date().getTime(),
        s = this.P,
        w = this.Tb,
        B = this.hc,
        j = this.j,
        o = s + ":X",
        q = s + ":Y",
        n = s + ":Z";
      try {
        if (U(j, m)) h();
        else throw Error("localStorage support check failed");
      } catch (v) {
        b && b(v);
      }
    };
    var qa = ga("batch");
    G.prototype.Na = function (a, b, d) {
      var f = {
        id: ea(),
        flushAfter: new Date().getTime() + 2 * b,
        payload: a,
      };
      this.z
        ? this.Ya.ib(
            c.bind(function () {
              var b;
              try {
                var c = this.ea();
                c.push(f);
                (b = this.ab(c)) && this.D.push(f);
              } catch (e) {
                this.h("Error enqueueing item", a), (b = D);
              }
              d && d(b);
            }, this),
            c.bind(function (a) {
              this.h("Error acquiring storage lock", a);
              d && d(D);
            }, this),
            this.ua
          )
        : (this.D.push(f), d && d(m));
    };
    G.prototype.Hc = function (a) {
      var b = this.D.slice(0, a);
      if (this.z && b.length < a) {
        var d = this.ea();
        if (d.length) {
          var f = {};
          c.a(b, function (a) {
            f[a.id] = m;
          });
          for (var h = 0; h < d.length; h++) {
            var g = d[h];
            if (
              new Date().getTime() > g.flushAfter &&
              !f[g.id] &&
              ((g.Uc = m), b.push(g), b.length >= a)
            )
              break;
          }
        }
      }
      return b;
    };
    G.prototype.Wc = function (a, b) {
      var d = {};
      c.a(a, function (a) {
        d[a] = m;
      });
      this.D = pa(this.D, d);
      if (this.z) {
        var f = c.bind(function () {
          var b;
          try {
            var c = this.ea(),
              c = pa(c, d);
            if ((b = this.ab(c)))
              for (var c = this.ea(), f = 0; f < c.length; f++) {
                var e = c[f];
                if (e.id && d[e.id])
                  return this.h("Item not removed from storage"), D;
              }
          } catch (k) {
            this.h("Error removing items", a), (b = D);
          }
          return b;
        }, this);
        this.Ya.ib(
          function () {
            var a = f();
            b && b(a);
          },
          c.bind(function (a) {
            var c = D;
            this.h("Error acquiring storage lock", a);
            if (!U(this.j, m) && ((c = f()), !c))
              try {
                this.j.removeItem(this.P);
              } catch (d) {
                this.h("Error clearing queue", d);
              }
            b && b(c);
          }, this),
          this.ua
        );
      } else b && b(m);
    };
    G.prototype.yd = function (a) {
      this.D = oa(this.D, a);
      this.z &&
        this.Ya.ib(
          c.bind(function () {
            try {
              var b = this.ea(),
                b = oa(b, a);
              this.ab(b);
            } catch (c) {
              this.h("Error updating items", a);
            }
          }, this),
          c.bind(function (a) {
            this.h("Error acquiring storage lock", a);
          }, this),
          this.ua
        );
    };
    G.prototype.ea = function () {
      var a;
      try {
        if ((a = this.j.getItem(this.P)))
          (a = aa(a)),
            c.isArray(a) || (this.h("Invalid storage entry:", a), (a = r));
      } catch (b) {
        this.h("Error retrieving queue", b), (a = r);
      }
      return a || [];
    };
    G.prototype.ab = function (a) {
      try {
        return this.j.setItem(this.P, $(a)), m;
      } catch (b) {
        return this.h("Error saving queue", b), D;
      }
    };
    G.prototype.clear = function () {
      this.D = [];
      this.z && this.j.removeItem(this.P);
    };
    var R = ga("batch");
    C.prototype.Na = function (a, b) {
      this.ca.Na(a, this.pa, b);
    };
    C.prototype.start = function () {
      this.va = D;
      this.Ja = 0;
      this.flush();
    };
    C.prototype.stop = function () {
      this.va = m;
      if (this.eb) clearTimeout(this.eb), (this.eb = r);
    };
    C.prototype.clear = function () {
      this.ca.clear();
    };
    C.prototype.Yb = function () {
      this.G = this.C.batch_size;
    };
    C.prototype.N = function () {
      this.$b(this.C.batch_flush_interval_ms);
    };
    C.prototype.$b = function (a) {
      this.pa = a;
      if (!this.va) this.eb = setTimeout(c.bind(this.flush, this), this.pa);
    };
    C.prototype.flush = function (a) {
      try {
        if (this.Xb) R.log("Flush: Request already in progress");
        else {
          var a = a || {},
            b = this.C.batch_request_timeout_ms,
            d = new Date().getTime(),
            f = this.G,
            h = this.ca.Hc(f),
            e = h.length === f,
            t = [],
            i = {};
          c.a(
            h,
            function (a) {
              var b = a.payload;
              this.la && !a.Uc && (b = this.la(b));
              if (b) {
                b.event &&
                  b.properties &&
                  (b.properties = c.extend({}, b.properties, {
                    mp_sent_by_lib_version: "2.54.0",
                  }));
                var d = m,
                  f = a.id;
                if (f) {
                  if (5 < (this.I[f] || 0))
                    this.h("[dupe] item ID sent too many times, not sending", {
                      item: a,
                      G: h.length,
                      rd: this.I[f],
                    }),
                      (d = D);
                } else this.h("[dupe] found item with no ID", { item: a });
                d && t.push(b);
              }
              i[a.id] = b;
            },
            this
          );
          if (1 > t.length) this.N();
          else {
            this.Xb = m;
            var k = c.bind(function (k) {
                this.Xb = D;
                try {
                  var t = D;
                  if (a.lc) this.ca.yd(i);
                  else if (
                    c.e(k) &&
                    "timeout" === k.error &&
                    new Date().getTime() - d >= b
                  )
                    this.h("Network timeout; retrying"), this.flush();
                  else if (
                    c.e(k) &&
                    (500 <= k.Sa || 429 === k.Sa || "timeout" === k.error)
                  ) {
                    var j = 2 * this.pa;
                    k.Zb && (j = 1e3 * parseInt(k.Zb, 10) || j);
                    j = Math.min(6e5, j);
                    this.h("Error; retry in " + j + " ms");
                    this.$b(j);
                  } else if (c.e(k) && 413 === k.Sa)
                    if (1 < h.length) {
                      var p = Math.max(1, Math.floor(f / 2));
                      this.G = Math.min(this.G, p, h.length - 1);
                      this.h("413 response; reducing batch size to " + this.G);
                      this.N();
                    } else
                      this.h("Single-event request too large; dropping", h),
                        this.Yb(),
                        (t = m);
                  else t = m;
                  t &&
                    (this.ca.Wc(
                      c.map(h, function (a) {
                        return a.id;
                      }),
                      c.bind(function (a) {
                        a
                          ? ((this.Ja = 0),
                            this.Db && !e ? this.N() : this.flush())
                          : (this.h("Failed to remove items from queue"),
                            5 < ++this.Ja
                              ? (this.h(
                                  "Too many queue failures; disabling batching system."
                                ),
                                this.md())
                              : this.N());
                      }, this)
                    ),
                    c.a(
                      h,
                      c.bind(function (a) {
                        var b = a.id;
                        b
                          ? ((this.I[b] = this.I[b] || 0),
                            this.I[b]++,
                            5 < this.I[b] &&
                              this.h("[dupe] item ID sent too many times", {
                                item: a,
                                G: h.length,
                                rd: this.I[b],
                              }))
                          : this.h(
                              "[dupe] found item with no ID while removing",
                              { item: a }
                            );
                      }, this)
                    ));
                } catch (s) {
                  this.h("Error handling API response", s), this.N();
                }
              }, this),
              j = { method: "POST", pc: m, Mc: m, ic: b };
            if (a.lc) j.gb = "sendBeacon";
            R.log("MIXPANEL REQUEST:", t);
            this.bd(t, j, k);
          }
        }
      } catch (s) {
        this.h("Error flushing request queue", s), this.N();
      }
    };
    C.prototype.h = function (a, b) {
      R.error.apply(R.error, arguments);
      if (this.K)
        try {
          b instanceof Error || (b = Error(a)), this.K(a, b);
        } catch (c) {
          R.error(c);
        }
    };
    var Na = "__mp_opt_in_out_",
      A = {
        bc: function (a, b) {
          var d = {},
            f = {};
          c.e(a)
            ? c.a(
                a,
                function (a, b) {
                  this.A(b) || (f[b] = a);
                },
                this
              )
            : (f[a] = b);
          d.$set = f;
          return d;
        },
        mc: function (a) {
          var b = {},
            d = [];
          c.isArray(a) || (a = [a]);
          c.a(
            a,
            function (a) {
              this.A(a) || d.push(a);
            },
            this
          );
          b.$unset = d;
          return b;
        },
        ec: function (a, b) {
          var d = {},
            f = {};
          c.e(a)
            ? c.a(
                a,
                function (a, b) {
                  this.A(b) || (f[b] = a);
                },
                this
              )
            : (f[a] = b);
          d.$set_once = f;
          return d;
        },
        kc: function (a, b) {
          var d = {},
            f = {};
          c.e(a)
            ? c.a(
                a,
                function (a, b) {
                  this.A(b) || (f[b] = c.isArray(a) ? a : [a]);
                },
                this
              )
            : (f[a] = c.isArray(b) ? b : [b]);
          d.$union = f;
          return d;
        },
        Ac: function (a, b) {
          var d = {},
            f = {};
          c.e(a)
            ? c.a(
                a,
                function (a, b) {
                  this.A(b) || (f[b] = a);
                },
                this
              )
            : (f[a] = b);
          d.$append = f;
          return d;
        },
        Wb: function (a, b) {
          var d = {},
            f = {};
          c.e(a)
            ? c.a(
                a,
                function (a, b) {
                  this.A(b) || (f[b] = a);
                },
                this
              )
            : (f[a] = b);
          d.$remove = f;
          return d;
        },
        Ed: function () {
          return { $delete: "" };
        },
      };
    c.extend(u.prototype, A);
    u.prototype.Y = function (a, b, c) {
      this.d = a;
      this.Ca = b;
      this.Ba = c;
    };
    u.prototype.set = N(function (a, b, d) {
      var f = this.bc(a, b);
      c.e(a) && (d = b);
      return this.k(f, d);
    });
    u.prototype.O = N(function (a, b, d) {
      var f = this.ec(a, b);
      c.e(a) && (d = b);
      return this.k(f, d);
    });
    u.prototype.wa = N(function (a, b) {
      return this.k(this.mc(a), b);
    });
    u.prototype.ga = N(function (a, b, d) {
      c.e(a) && (d = b);
      return this.k(this.kc(a, b), d);
    });
    u.prototype["delete"] = N(function (a) {
      return this.k({ $delete: "" }, a);
    });
    u.prototype.remove = N(function (a, b, c) {
      return this.k(this.Wb(a, b), c);
    });
    u.prototype.k = function (a, b) {
      a.$group_key = this.Ca;
      a.$group_id = this.Ba;
      a.$token = this.p("token");
      return this.d.Fa(
        {
          type: "groups",
          data: c.Ma(a),
          H: this.p("api_host") + "/" + this.p("api_routes").groups,
          Ha: this.d.u.Ra,
        },
        b
      );
    };
    u.prototype.A = function (a) {
      return "$group_key" === a || "$group_id" === a;
    };
    u.prototype.p = function (a) {
      return this.d.c(a);
    };
    u.prototype.toString = function () {
      return this.d.toString() + ".group." + this.Ca + "." + this.Ba;
    };
    u.prototype.remove = u.prototype.remove;
    u.prototype.set = u.prototype.set;
    u.prototype.set_once = u.prototype.O;
    u.prototype.union = u.prototype.ga;
    u.prototype.unset = u.prototype.wa;
    u.prototype.toString = u.prototype.toString;
    c.extend(j.prototype, A);
    j.prototype.Y = function (a) {
      this.d = a;
    };
    j.prototype.set = H(function (a, b, d) {
      var f = this.bc(a, b);
      c.e(a) && (d = b);
      this.p("save_referrer") && this.d.persistence.hb(document.referrer);
      f.$set = c.extend({}, c.info.Vc(), f.$set);
      return this.k(f, d);
    });
    j.prototype.O = H(function (a, b, d) {
      var f = this.ec(a, b);
      c.e(a) && (d = b);
      return this.k(f, d);
    });
    j.prototype.wa = H(function (a, b) {
      return this.k(this.mc(a), b);
    });
    j.prototype.Ib = H(function (a, b, d) {
      var f = {},
        e = {};
      c.e(a)
        ? (c.a(
            a,
            function (a, b) {
              this.A(b) ||
                (isNaN(parseFloat(a))
                  ? n.error(
                      "Invalid increment value passed to mixpanel.people.increment - must be a number"
                    )
                  : (e[b] = a));
            },
            this
          ),
          (d = b))
        : (c.g(b) && (b = 1), (e[a] = b));
      f.$add = e;
      return this.k(f, d);
    });
    j.prototype.append = H(function (a, b, d) {
      c.e(a) && (d = b);
      return this.k(this.Ac(a, b), d);
    });
    j.prototype.remove = H(function (a, b, d) {
      c.e(a) && (d = b);
      return this.k(this.Wb(a, b), d);
    });
    j.prototype.ga = H(function (a, b, d) {
      c.e(a) && (d = b);
      return this.k(this.kc(a, b), d);
    });
    j.prototype.ud = H(function (a, b, d) {
      if (!c.Lb(a) && ((a = parseFloat(a)), isNaN(a))) {
        n.error(
          "Invalid value passed to mixpanel.people.track_charge - must be a number"
        );
        return;
      }
      return this.append("$transactions", c.extend({ $amount: a }, b), d);
    });
    j.prototype.tb = function (a) {
      return this.set("$transactions", [], a);
    };
    j.prototype.Bb = function () {
      if (this.Da()) return this.k({ $delete: this.d.M() });
      n.error(
        "mixpanel.people.delete_user() requires you to call identify() first"
      );
    };
    j.prototype.toString = function () {
      return this.d.toString() + ".people";
    };
    j.prototype.k = function (a, b) {
      a.$token = this.p("token");
      a.$distinct_id = this.d.M();
      var d = this.d.s("$device_id"),
        f = this.d.s("$user_id"),
        e = this.d.s("$had_persisted_distinct_id");
      d && (a.$device_id = d);
      f && (a.$user_id = f);
      e && (a.$had_persisted_distinct_id = e);
      d = c.Ma(a);
      return !this.Da()
        ? (this.uc(a),
          c.g(b) || (this.p("verbose") ? b({ status: -1, error: r }) : b(-1)),
          c.truncate(d, 255))
        : this.d.Fa(
            {
              type: "people",
              data: d,
              H: this.p("api_host") + "/" + this.p("api_routes").engage,
              Ha: this.d.u.$a,
            },
            b
          );
    };
    j.prototype.p = function (a) {
      return this.d.c(a);
    };
    j.prototype.Da = function () {
      return this.d.V.Gb === m;
    };
    j.prototype.uc = function (a) {
      "$set" in a
        ? this.d.persistence.q("$set", a)
        : "$set_once" in a
        ? this.d.persistence.q("$set_once", a)
        : "$unset" in a
        ? this.d.persistence.q("$unset", a)
        : "$add" in a
        ? this.d.persistence.q("$add", a)
        : "$append" in a
        ? this.d.persistence.q("$append", a)
        : "$remove" in a
        ? this.d.persistence.q("$remove", a)
        : "$union" in a
        ? this.d.persistence.q("$union", a)
        : n.error("Invalid call to _enqueue():", a);
    };
    j.prototype.W = function (a, b, d, f) {
      var e = this,
        g = c.extend({}, this.d.persistence.aa(a)),
        j = g;
      !c.g(g) &&
        c.e(g) &&
        !c.ra(g) &&
        (e.d.persistence.v(a, g),
        e.d.persistence.save(),
        f && (j = f(g)),
        b.call(e, j, function (b, f) {
          0 === b && e.d.persistence.q(a, g);
          c.g(d) || d(b, f);
        }));
    };
    j.prototype.vc = function (a, b, d, f, e, g, j) {
      var i = this;
      this.W("$set", this.set, a);
      this.W("$set_once", this.O, f);
      this.W("$unset", this.wa, g, function (a) {
        return c.keys(a);
      });
      this.W("$add", this.Ib, b);
      this.W("$union", this.ga, e);
      a = this.d.persistence.aa("$append");
      if (!c.g(a) && c.isArray(a) && a.length)
        for (
          var k,
            b = function (a, b) {
              0 === a && i.d.persistence.q("$append", k);
              c.g(d) || d(a, b);
            },
            f = a.length - 1;
          0 <= f;
          f--
        )
          (a = this.d.persistence.aa("$append")),
            (k = a.pop()),
            i.d.persistence.save(),
            c.ra(k) || i.append(k, b);
      a = this.d.persistence.aa("$remove");
      if (!c.g(a) && c.isArray(a) && a.length)
        for (
          var p,
            b = function (a, b) {
              0 === a && i.d.persistence.q("$remove", p);
              c.g(j) || j(a, b);
            },
            f = a.length - 1;
          0 <= f;
          f--
        )
          (a = this.d.persistence.aa("$remove")),
            (p = a.pop()),
            i.d.persistence.save(),
            c.ra(p) || i.remove(p, b);
    };
    j.prototype.A = function (a) {
      return (
        "$distinct_id" === a ||
        "$token" === a ||
        "$device_id" === a ||
        "$user_id" === a ||
        "$had_persisted_distinct_id" === a
      );
    };
    j.prototype.set = j.prototype.set;
    j.prototype.set_once = j.prototype.O;
    j.prototype.unset = j.prototype.wa;
    j.prototype.increment = j.prototype.Ib;
    j.prototype.append = j.prototype.append;
    j.prototype.remove = j.prototype.remove;
    j.prototype.union = j.prototype.ga;
    j.prototype.track_charge = j.prototype.ud;
    j.prototype.clear_charges = j.prototype.tb;
    j.prototype.delete_user = j.prototype.Bb;
    j.prototype.toString = j.prototype.toString;
    var Sa =
      "__mps,__mpso,__mpus,__mpa,__mpap,__mpr,__mpu,$people_distinct_id,__alias,__timers".split(
        ","
      );
    q.prototype.ba = function () {
      var a = {};
      this.load();
      c.a(this.props, function (b, d) {
        c.Ua(Sa, d) || (a[d] = b);
      });
      return a;
    };
    q.prototype.load = function () {
      if (!this.disabled) {
        var a = this.j.parse(this.name);
        a && (this.props = c.extend({}, a));
      }
    };
    q.prototype.zd = function () {
      var a;
      this.j === c.localStorage
        ? ((a = c.cookie.parse(this.name)),
          c.cookie.remove(this.name),
          c.cookie.remove(this.name, m),
          a && this.w(a))
        : this.j === c.cookie &&
          ((a = c.localStorage.parse(this.name)),
          c.localStorage.remove(this.name),
          a && this.w(a));
    };
    q.prototype.save = function () {
      this.disabled ||
        this.j.set(
          this.name,
          c.ha(this.props),
          this.Pa,
          this.Ka,
          this.ac,
          this.zb,
          this.na
        );
    };
    q.prototype.ta = function (a) {
      this.load();
      return this.props[a];
    };
    q.prototype.remove = function () {
      this.j.remove(this.name, D, this.na);
      this.j.remove(this.name, m, this.na);
    };
    q.prototype.clear = function () {
      this.remove();
      this.props = {};
    };
    q.prototype.w = function (a, b, d) {
      return c.e(a)
        ? ("undefined" === typeof b && (b = "None"),
          (this.Pa = "undefined" === typeof d ? this.Ab : d),
          this.load(),
          c.a(
            a,
            function (a, c) {
              if (!this.props.hasOwnProperty(c) || this.props[c] === b)
                this.props[c] = a;
            },
            this
          ),
          this.save(),
          m)
        : D;
    };
    q.prototype.m = function (a, b) {
      return c.e(a)
        ? ((this.Pa = "undefined" === typeof b ? this.Ab : b),
          this.load(),
          c.extend(this.props, a),
          this.save(),
          m)
        : D;
    };
    q.prototype.S = function (a) {
      this.load();
      a in this.props && (delete this.props[a], this.save());
    };
    q.prototype.oc = function (a) {
      this.m(c.info.$c(a));
    };
    q.prototype.hb = function (a) {
      this.w(
        {
          $initial_referrer: a || "$direct",
          $initial_referring_domain: c.info.Ub(a) || "$direct",
        },
        ""
      );
    };
    q.prototype.Lc = function () {
      return c.fa({
        $initial_referrer: this.props.$initial_referrer,
        $initial_referring_domain: this.props.$initial_referring_domain,
      });
    };
    q.prototype.nc = function (a) {
      this.Ab = this.Pa = a.cookie_expiration;
      this.dc(a.disable_persistence);
      this.ed(a.cookie_domain);
      this.fd(a.cross_site_cookie);
      this.gd(a.cross_subdomain_cookie);
      this.kd(a.secure_cookie);
    };
    q.prototype.dc = function (a) {
      (this.disabled = a) ? this.remove() : this.save();
    };
    q.prototype.ed = function (a) {
      if (a !== this.na) this.remove(), (this.na = a), this.save();
    };
    q.prototype.fd = function (a) {
      if (a !== this.zb) (this.zb = a), this.remove(), this.save();
    };
    q.prototype.gd = function (a) {
      if (a !== this.Ka) (this.Ka = a), this.remove(), this.save();
    };
    q.prototype.Jc = function () {
      return this.Ka;
    };
    q.prototype.kd = function (a) {
      if (a !== this.ac) (this.ac = a ? m : D), this.remove(), this.save();
    };
    q.prototype.q = function (a, b) {
      var d = this.ja(a),
        f = b[a],
        e = this.F("$set"),
        g = this.F("$set_once"),
        j = this.F("$unset"),
        i = this.F("$add"),
        k = this.F("$union"),
        p = this.F("$remove", []),
        o = this.F("$append", []);
      "__mps" === d
        ? (c.extend(e, f),
          this.v("$add", f),
          this.v("$union", f),
          this.v("$unset", f))
        : "__mpso" === d
        ? (c.a(f, function (a, b) {
            b in g || (g[b] = a);
          }),
          this.v("$unset", f))
        : "__mpus" === d
        ? c.a(f, function (a) {
            c.a([e, g, i, k], function (b) {
              a in b && delete b[a];
            });
            c.a(o, function (b) {
              a in b && delete b[a];
            });
            j[a] = m;
          })
        : "__mpa" === d
        ? (c.a(
            f,
            function (a, b) {
              b in e ? (e[b] += a) : (b in i || (i[b] = 0), (i[b] += a));
            },
            this
          ),
          this.v("$unset", f))
        : "__mpu" === d
        ? (c.a(f, function (a, b) {
            c.isArray(a) && (b in k || (k[b] = []), (k[b] = k[b].concat(a)));
          }),
          this.v("$unset", f))
        : "__mpr" === d
        ? (p.push(f), this.v("$append", f))
        : "__mpap" === d && (o.push(f), this.v("$unset", f));
      n.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):");
      n.log(b);
      this.save();
    };
    q.prototype.v = function (a, b) {
      var d = this.props[this.ja(a)];
      c.g(d) ||
        c.a(
          b,
          function (b, e) {
            "$append" === a || "$remove" === a
              ? c.a(d, function (a) {
                  a[e] === b && delete a[e];
                })
              : delete d[e];
          },
          this
        );
    };
    q.prototype.aa = function (a) {
      return this.ta(this.ja(a));
    };
    q.prototype.ja = function (a) {
      if ("$set" === a) return "__mps";
      if ("$set_once" === a) return "__mpso";
      if ("$unset" === a) return "__mpus";
      if ("$add" === a) return "__mpa";
      if ("$append" === a) return "__mpap";
      if ("$remove" === a) return "__mpr";
      if ("$union" === a) return "__mpu";
      n.error("Invalid queue:", a);
    };
    q.prototype.F = function (a, b) {
      var d = this.ja(a),
        b = c.g(b) ? {} : b;
      return this.props[d] || (this.props[d] = b);
    };
    q.prototype.hd = function (a) {
      var b = new Date().getTime(),
        c = this.ta("__timers") || {};
      c[a] = b;
      this.props.__timers = c;
      this.save();
    };
    q.prototype.Xc = function (a) {
      var b = (this.ta("__timers") || {})[a];
      c.g(b) || (delete this.props.__timers[a], this.save());
      return b;
    };
    var ca,
      x,
      O = o.XMLHttpRequest && "withCredentials" in new XMLHttpRequest(),
      ma = !O && -1 === z.indexOf("MSIE") && -1 === z.indexOf("Mozilla"),
      ba = r;
    I.sendBeacon &&
      (ba = function () {
        return I.sendBeacon.apply(I, arguments);
      });
    var A = {
        track: "track/",
        engage: "engage/",
        groups: "groups/",
        record: "record/",
      },
      Aa = {
        api_host: "https://api-js.mixpanel.com",
        api_routes: A,
        api_method: "POST",
        api_transport: "XHR",
        api_payload_format: "base64",
        app_host: "https://mixpanel.com",
        cdn: "https://cdn.mxpnl.com",
        cross_site_cookie: D,
        cross_subdomain_cookie: m,
        error_reporter: P,
        persistence: "cookie",
        persistence_name: "",
        cookie_domain: "",
        cookie_name: "",
        loaded: P,
        mp_loader: r,
        track_marketing: m,
        track_pageview: D,
        skip_first_touch_marketing: D,
        store_google: m,
        stop_utm_persistence: D,
        save_referrer: m,
        test: D,
        verbose: D,
        img: D,
        debug: D,
        track_links_timeout: 300,
        cookie_expiration: 365,
        upgrade: D,
        disable_persistence: D,
        disable_cookie: D,
        secure_cookie: D,
        ip: m,
        opt_out_tracking_by_default: D,
        opt_out_persistence_by_default: D,
        opt_out_tracking_persistence_type: "localStorage",
        opt_out_tracking_cookie_prefix: r,
        property_blacklist: [],
        xhr_headers: {},
        ignore_dnt: D,
        batch_requests: m,
        batch_size: 50,
        batch_flush_interval_ms: 5e3,
        batch_request_timeout_ms: 9e4,
        batch_autostart: m,
        hooks: {},
        record_block_class:
          /^(mp-block|fs-exclude|amp-block|rr-block|ph-no-capture)$/,
        record_block_selector: "img, video",
        record_collect_fonts: D,
        record_idle_timeout_ms: 18e5,
        record_inline_images: D,
        record_mask_text_class: /^(mp-mask|fs-mask|amp-mask|rr-mask|ph-mask)$/,
        record_mask_text_selector: "*",
        record_max_ms: 864e5,
        record_sessions_percent: 0,
        recorder_src: "https://cdn.mxpnl.com/libs/mixpanel-recorder.min.js",
      },
      la = D;
    e.prototype.Va = function (a, b, d) {
      if (c.g(d))
        this.l("You must name your new library: init(token, config, name)");
      else if ("mixpanel" === d)
        this.l(
          "You must initialize the main mixpanel object right after you include the Mixpanel js snippet"
        );
      else return (a = S(a, b, d)), (x[d] = a), a.ka(), a;
    };
    e.prototype.Y = function (a, b, d) {
      b = b || {};
      this.__loaded = m;
      this.config = {};
      var f = {};
      "api_payload_format" in b ||
        ((b.api_host || Aa.api_host).match(/\.mixpanel\.com/) &&
          (f.api_payload_format = "json"));
      this.cc(
        c.extend({}, Aa, f, b, {
          name: d,
          token: a,
          callback_fn: ("mixpanel" === d ? d : "mixpanel." + d) + "._jsc",
        })
      );
      this._jsc = P;
      this.ya = [];
      this.za = [];
      this.xa = [];
      this.V = { disable_all_events: D, identify_called: D };
      this.u = {};
      if ((this.U = this.c("batch_requests")))
        if (!c.localStorage.sa(m) || !O)
          (this.U = D),
            n.log(
              "Turning off Mixpanel request-queueing; needs XHR and localStorage support"
            ),
            c.a(this.Eb(), function (a) {
              n.log("Clearing batch queue " + a.da);
              c.localStorage.remove(a.da);
            });
        else if ((this.Nc(), ba && o.addEventListener)) {
          var e = c.bind(function () {
            this.u.L.va || this.u.L.flush({ lc: m });
          }, this);
          o.addEventListener("pagehide", function (a) {
            a.persisted && e();
          });
          o.addEventListener("visibilitychange", function () {
            "hidden" === v.visibilityState && e();
          });
        }
      this.persistence = this.cookie = new q(this.config);
      this.R = {};
      this.wc();
      a = c.jb();
      this.M() || this.w({ distinct_id: "$device:" + a, $device_id: a }, "");
      (a = this.c("track_pageview")) && this.xc(a);
      0 < this.c("record_sessions_percent") &&
        100 * Math.random() <= this.c("record_sessions_percent") &&
        this.gc();
    };
    e.prototype.gc = K(function () {
      if (o.MutationObserver) {
        var a = c.bind(function () {
          this.J = this.J || new o.__mp_recorder(this);
          this.J.startRecording();
        }, this);
        c.g(o.__mp_recorder) ? na(this.c("recorder_src"), a) : a();
      } else n.B("Browser does not support MutationObserver; skipping session recording");
    });
    e.prototype.od = function () {
      this.J
        ? this.J.stopRecording()
        : n.B("Session recorder module not loaded");
    };
    e.prototype.Fb = function () {
      var a = {};
      if (this.J) {
        var b = this.J.replayId;
        b && (a.$mp_replay_id = b);
      }
      return a;
    };
    e.prototype.ka = function () {
      this.c("loaded")(this);
      this.rb();
      this.people.O(this.persistence.Lc());
      if (this.c("store_google") && this.c("stop_utm_persistence")) {
        var a = c.info.Z(r);
        c.a(
          a,
          function (a, c) {
            this.S(c);
          }.bind(this)
        );
      }
    };
    e.prototype.rb = function () {
      this.persistence.oc(v.referrer);
      this.c("store_google") &&
        !this.c("stop_utm_persistence") &&
        this.m(c.info.Z());
      this.c("save_referrer") && this.persistence.hb(v.referrer);
    };
    e.prototype.tc = function () {
      c.a(
        this.ya,
        function (a) {
          this.Ea.apply(this, a);
        },
        this
      );
      this.$() ||
        c.a(
          this.za,
          function (a) {
            this.k.apply(this, a);
          },
          this
        );
      delete this.ya;
      delete this.za;
    };
    e.prototype.Ea = function (a, b) {
      if (this.c("img"))
        return (
          this.l("You can't use DOM tracking functions with img = true."), D
        );
      if (!la) return this.ya.push([a, b]), D;
      var c = new a().Va(this);
      return c.o.apply(c, b);
    };
    e.prototype.xc = function (a) {
      var b = "";
      this.fb() && (b = c.info.La());
      if (
        c.Ua(["full-url", "url-with-path-and-query-string", "url-with-path"], a)
      ) {
        o.addEventListener("popstate", function () {
          o.dispatchEvent(new Event("mp_locationchange"));
        });
        o.addEventListener("hashchange", function () {
          o.dispatchEvent(new Event("mp_locationchange"));
        });
        var d = o.history.pushState;
        if ("function" === typeof d)
          o.history.pushState = function (a, b, c) {
            d.call(o.history, a, b, c);
            o.dispatchEvent(new Event("mp_locationchange"));
          };
        var f = o.history.replaceState;
        if ("function" === typeof f)
          o.history.replaceState = function (a, b, c) {
            f.call(o.history, a, b, c);
            o.dispatchEvent(new Event("mp_locationchange"));
          };
        o.addEventListener(
          "mp_locationchange",
          function () {
            var d = c.info.La(),
              f = D;
            "full-url" === a
              ? (f = d !== b)
              : "url-with-path-and-query-string" === a
              ? (f = d.split("#")[0] !== b.split("#")[0])
              : "url-with-path" === a &&
                (f =
                  d.split("#")[0].split("?")[0] !==
                  b.split("#")[0].split("?")[0]);
            f && this.fb() && (b = d);
          }.bind(this)
        );
      }
    };
    e.prototype.ob = function (a, b) {
      if (c.g(a)) return r;
      if (O)
        return function (c) {
          a(c, b);
        };
      var d = this._jsc,
        f = "" + Math.floor(1e8 * Math.random()),
        e = this.c("callback_fn") + "[" + f + "]";
      d[f] = function (c) {
        delete d[f];
        a(c, b);
      };
      return e;
    };
    e.prototype.k = function (a, b, d, f) {
      var e = m;
      if (ma) return this.za.push(arguments), e;
      var g = {
          method: this.c("api_method"),
          gb: this.c("api_transport"),
          pc: this.c("verbose"),
        },
        j = r;
      if (!f && (c.Wa(d) || "string" === typeof d)) (f = d), (d = r);
      d = c.extend(g, d || {});
      if (!O) d.method = "GET";
      var g = "POST" === d.method,
        i = ba && g && "sendbeacon" === d.gb.toLowerCase(),
        k = d.pc;
      b.verbose && (k = m);
      this.c("test") && (b.test = 1);
      k && (b.verbose = 1);
      this.c("img") && (b.img = 1);
      if (!O)
        if (f) b.callback = f;
        else if (k || this.c("test")) b.callback = "(function(){})";
      b.ip = this.c("ip") ? 1 : 0;
      b._ = new Date().getTime().toString();
      g && ((j = "data=" + encodeURIComponent(b.data)), delete b.data);
      var a = a + ("?" + c.qc(b)),
        p = this;
      if ("img" in b)
        (j = v.createElement("img")), (j.src = a), v.body.appendChild(j);
      else if (i) {
        try {
          e = ba(a, j);
        } catch (o) {
          p.l(o), (e = D);
        }
        try {
          f && f(e ? 1 : 0);
        } catch (q) {
          p.l(q);
        }
      } else if (O)
        try {
          var n = new XMLHttpRequest();
          n.open(d.method, a, m);
          var u = this.c("xhr_headers");
          g && (u["Content-Type"] = "application/x-www-form-urlencoded");
          c.a(u, function (a, b) {
            n.setRequestHeader(b, a);
          });
          if (d.ic && "undefined" !== typeof n.timeout) {
            n.timeout = d.ic;
            var x = new Date().getTime();
          }
          n.withCredentials = m;
          n.onreadystatechange = function () {
            if (4 === n.readyState)
              if (200 === n.status) {
                if (f)
                  if (k) {
                    var a;
                    try {
                      a = c.T(n.responseText);
                    } catch (b) {
                      if ((p.l(b), d.Mc)) a = n.responseText;
                      else return;
                    }
                    f(a);
                  } else f(Number(n.responseText));
              } else
                (a =
                  n.timeout &&
                  !n.status &&
                  new Date().getTime() - x >= n.timeout
                    ? "timeout"
                    : "Bad HTTP status: " + n.status + " " + n.statusText),
                  p.l(a),
                  f &&
                    (k
                      ? f({
                          status: 0,
                          Sa: n.status,
                          error: a,
                          Zb: (n.responseHeaders || {})["Retry-After"],
                        })
                      : f(0));
          };
          n.send(j);
        } catch (y) {
          p.l(y), (e = D);
        }
      else
        (j = v.createElement("script")),
          (j.type = "text/javascript"),
          (j.async = m),
          (j.defer = m),
          (j.src = a),
          (u = v.getElementsByTagName("script")[0]),
          u.parentNode.insertBefore(j, u);
      return e;
    };
    e.prototype.Aa = function (a) {
      function b(a, b) {
        c.a(
          a,
          function (a) {
            if (c.isArray(a[0])) {
              var d = b;
              c.a(a, function (a) {
                d = d[a[0]].apply(d, a.slice(1));
              });
            } else this[a[0]].apply(this, a.slice(1));
          },
          b
        );
      }
      var d,
        e = [],
        h = [],
        g = [];
      c.a(
        a,
        function (a) {
          a &&
            ((d = a[0]),
            c.isArray(d)
              ? g.push(a)
              : "function" === typeof a
              ? a.call(this)
              : c.isArray(a) && "alias" === d
              ? e.push(a)
              : c.isArray(a) &&
                -1 !== d.indexOf("track") &&
                "function" === typeof this[d]
              ? g.push(a)
              : h.push(a));
        },
        this
      );
      b(e, this);
      b(h, this);
      b(g, this);
    };
    e.prototype.sb = function () {
      return !!this.u.L;
    };
    e.prototype.Eb = function () {
      var a = "__mpq_" + this.c("token"),
        b = this.c("api_routes");
      return (this.kb = this.kb || {
        L: { type: "events", H: "/" + b.track, da: a + "_ev" },
        $a: { type: "people", H: "/" + b.engage, da: a + "_pp" },
        Ra: { type: "groups", H: "/" + b.groups, da: a + "_gr" },
      });
    };
    e.prototype.Nc = function () {
      if (!this.sb()) {
        var a = c.bind(function (a) {
            return new C(a.da, {
              C: this.config,
              K: this.c("error_reporter"),
              cd: c.bind(function (b, c, e) {
                this.k(this.c("api_host") + a.H, this.mb(b), c, this.ob(e, b));
              }, this),
              la: c.bind(function (b) {
                return this.qb("before_send_" + a.type, b);
              }, this),
              nd: c.bind(this.cb, this),
              z: m,
            });
          }, this),
          b = this.Eb();
        this.u = { L: a(b.L), $a: a(b.$a), Ra: a(b.Ra) };
      }
      this.c("batch_autostart") && this.bb();
    };
    e.prototype.bb = function () {
      this.rc = m;
      if (this.sb())
        (this.U = m),
          c.a(this.u, function (a) {
            a.start();
          });
    };
    e.prototype.cb = function () {
      this.U = D;
      c.a(this.u, function (a) {
        a.stop();
        a.clear();
      });
    };
    e.prototype.push = function (a) {
      this.Aa([a]);
    };
    e.prototype.disable = function (a) {
      "undefined" === typeof a
        ? (this.V.Ec = m)
        : (this.xa = this.xa.concat(a));
    };
    e.prototype.mb = function (a) {
      a = c.ha(a);
      "base64" === this.c("api_payload_format") && (a = c.Bc(a));
      return { data: a };
    };
    e.prototype.Fa = function (a, b) {
      var d = c.truncate(a.data, 255),
        e = a.H,
        h = a.Ha,
        g = a.ld,
        j = a.dd || {},
        b = b || P,
        i = m,
        k = c.bind(function () {
          j.fc || (d = this.qb("before_send_" + a.type, d));
          return d
            ? (n.log("MIXPANEL REQUEST:"),
              n.log(d),
              this.k(e, this.mb(d), j, this.ob(b, d)))
            : r;
        }, this);
      this.U && !g
        ? h.Na(d, function (a) {
            a ? b(1, d) : k();
          })
        : (i = k());
      return i && d;
    };
    e.prototype.o = K(function (a, b, d, e) {
      !e && "function" === typeof d && ((e = d), (d = r));
      var d = d || {},
        h = d.transport;
      if (h) d.gb = h;
      h = d.send_immediately;
      "function" !== typeof e && (e = P);
      if (c.g(a)) this.l("No event name provided to mixpanel.track");
      else if (this.nb(a)) e(0);
      else {
        b = c.extend({}, b);
        b.token = this.c("token");
        var g = this.persistence.Xc(a);
        c.g(g) ||
          (b.$duration = parseFloat(
            ((new Date().getTime() - g) / 1e3).toFixed(3)
          ));
        this.rb();
        g = this.c("track_marketing") ? c.info.Rc() : {};
        b = c.extend(
          {},
          c.info.ba({ mp_loader: this.c("mp_loader") }),
          g,
          this.persistence.ba(),
          this.R,
          this.Fb(),
          b
        );
        g = this.c("property_blacklist");
        c.isArray(g)
          ? c.a(g, function (a) {
              delete b[a];
            })
          : this.l("Invalid value for property_blacklist config: " + g);
        return this.Fa(
          {
            type: "events",
            data: { event: a, properties: b },
            H: this.c("api_host") + "/" + this.c("api_routes").track,
            Ha: this.u.L,
            ld: h,
            dd: d,
          },
          e
        );
      }
    });
    e.prototype.jd = K(function (a, b, d) {
      c.isArray(b) || (b = [b]);
      var e = {};
      e[a] = b;
      this.m(e);
      return this.people.set(a, b, d);
    });
    e.prototype.yc = K(function (a, b, c) {
      var e = this.s(a),
        h = {};
      e === l
        ? ((h[a] = [b]), this.m(h))
        : -1 === e.indexOf(b) && (e.push(b), (h[a] = e), this.m(h));
      return this.people.ga(a, b, c);
    });
    e.prototype.Yc = K(function (a, b, c) {
      var e = this.s(a);
      if (e !== l) {
        var h = e.indexOf(b);
        -1 < h && (e.splice(h, 1), this.m({ Fd: e }));
        0 === e.length && this.S(a);
      }
      return this.people.remove(a, b, c);
    });
    e.prototype.xd = K(function (a, b, d, e) {
      var h = c.extend({}, b || {});
      c.a(d, function (a, b) {
        a !== r && a !== l && (h[b] = a);
      });
      return this.o(a, h, e);
    });
    e.prototype.sc = function (a, b) {
      return a + "_" + JSON.stringify(b);
    };
    e.prototype.Kc = function (a, b) {
      var c = this.sc(a, b),
        e = this.lb[c];
      if (e === l || e.Ca !== a || e.Ba !== b)
        (e = new u()), e.Y(this, a, b), (this.lb[c] = e);
      return e;
    };
    e.prototype.fb = K(function (a, b) {
      "object" !== typeof a && (a = {});
      var b = b || {},
        d = b.event_name || "$mp_web_page_view",
        e = c.extend(c.info.Sc(), c.info.Z(), c.info.vb()),
        e = c.extend({}, e, a);
      return this.o(d, e);
    });
    e.prototype.wd = function () {
      return this.Ea.call(this, M, arguments);
    };
    e.prototype.vd = function () {
      return this.Ea.call(this, T, arguments);
    };
    e.prototype.qd = function (a) {
      c.g(a)
        ? this.l("No event name provided to mixpanel.time_event")
        : this.nb(a) || this.persistence.hd(a);
    };
    var Ea = { persistent: m };
    e.prototype.m = function (a, b) {
      var d = da(b);
      d.persistent ? this.persistence.m(a, d.days) : c.extend(this.R, a);
    };
    e.prototype.w = function (a, b, d) {
      d = da(d);
      d.persistent
        ? this.persistence.w(a, b, d.days)
        : ("undefined" === typeof b && (b = "None"),
          c.a(
            a,
            function (a, c) {
              if (!this.R.hasOwnProperty(c) || this.R[c] === b) this.R[c] = a;
            },
            this
          ));
    };
    e.prototype.S = function (a, b) {
      b = da(b);
      b.persistent ? this.persistence.S(a) : delete this.R[a];
    };
    e.prototype.pb = function (a, b) {
      var c = {};
      c[a] = b;
      this.m(c);
    };
    e.prototype.Ta = function (a, b, c, e, h, g, j, i) {
      var k = this.M();
      if (a && k !== a) {
        if ("string" === typeof a && 0 === a.indexOf("$device:"))
          return this.l("distinct_id cannot have $device: prefix"), -1;
        this.m({ $user_id: a });
      }
      this.s("$device_id") ||
        this.w({ $had_persisted_distinct_id: m, $device_id: k }, "");
      a !== k &&
        a !== this.s("__alias") &&
        (this.S("__alias"), this.m({ distinct_id: a }));
      this.V.Gb = m;
      this.people.vc(b, c, e, h, g, j, i);
      a !== k &&
        this.o(
          "$identify",
          { distinct_id: a, $anon_distinct_id: k },
          { fc: m }
        );
    };
    e.prototype.reset = function () {
      this.persistence.clear();
      this.V.Gb = D;
      var a = c.jb();
      this.w({ distinct_id: "$device:" + a, $device_id: a }, "");
    };
    e.prototype.M = function () {
      return this.s("distinct_id");
    };
    e.prototype.zc = function (a, b) {
      if (a === this.s("$people_distinct_id"))
        return (
          this.l(
            "Attempting to create alias for existing People user - aborting."
          ),
          -2
        );
      var d = this;
      c.g(b) && (b = this.M());
      if (a !== b)
        return (
          this.pb("__alias", a),
          this.o(
            "$create_alias",
            { alias: a, distinct_id: b },
            { fc: m },
            function () {
              d.Ta(a);
            }
          )
        );
      this.l("alias matches current distinct_id - skipping api call.");
      this.Ta(a);
      return -1;
    };
    e.prototype.Tc = function (a) {
      this.pb("mp_name_tag", a);
    };
    e.prototype.cc = function (a) {
      if (c.e(a))
        c.extend(this.config, a),
          a.batch_size &&
            c.a(this.u, function (a) {
              a.Yb();
            }),
          this.c("persistence_name") ||
            (this.config.persistence_name = this.config.cookie_name),
          this.c("disable_persistence") ||
            (this.config.disable_persistence = this.config.disable_cookie),
          this.persistence && this.persistence.nc(this.config),
          (J = J || this.c("debug"));
    };
    e.prototype.c = function (a) {
      return this.config[a];
    };
    e.prototype.qb = function (a) {
      var b = (this.config.hooks[a] || Fa).apply(this, L.call(arguments, 1));
      "undefined" === typeof b &&
        (this.l(a + " hook did not return a value"), (b = r));
      return b;
    };
    e.prototype.s = function (a) {
      return this.persistence.ta([a]);
    };
    e.prototype.toString = function () {
      var a = this.c("name");
      "mixpanel" !== a && (a = "mixpanel." + a);
      return a;
    };
    e.prototype.nb = function (a) {
      return c.Kb(z) || this.V.Ec || c.Ua(this.xa, a);
    };
    e.prototype.wc = function () {
      "localStorage" === this.c("opt_out_tracking_persistence_type") &&
        c.localStorage.sa() &&
        (!this.qa() &&
          this.qa({ persistence_type: "cookie" }) &&
          this.Ob({ enable_persistence: D }),
        !this.$() &&
          this.$({ persistence_type: "cookie" }) &&
          this.Za({ clear_persistence: D }),
        this.ub({ persistence_type: "cookie", enable_persistence: D }));
      if (this.$()) this.ia({ clear_persistence: m });
      else if (
        !this.qa() &&
        (this.c("opt_out_tracking_by_default") || c.cookie.get("mp_optout"))
      )
        c.cookie.remove("mp_optout"),
          this.Za({
            clear_persistence: this.c("opt_out_persistence_by_default"),
          });
    };
    e.prototype.ia = function (a) {
      if (a && a.clear_persistence) a = m;
      else if (a && a.enable_persistence) a = D;
      else return;
      !this.c("disable_persistence") &&
        this.persistence.disabled !== a &&
        this.persistence.dc(a);
      a ? this.cb() : this.rc && this.bb();
    };
    e.prototype.X = function (a, b) {
      b = c.extend(
        {
          track: c.bind(this.o, this),
          persistence_type: this.c("opt_out_tracking_persistence_type"),
          cookie_prefix: this.c("opt_out_tracking_cookie_prefix"),
          cookie_expiration: this.c("cookie_expiration"),
          cross_site_cookie: this.c("cross_site_cookie"),
          cross_subdomain_cookie: this.c("cross_subdomain_cookie"),
          cookie_domain: this.c("cookie_domain"),
          secure_cookie: this.c("secure_cookie"),
          ignore_dnt: this.c("ignore_dnt"),
        },
        b
      );
      c.localStorage.sa() || (b.persistence_type = "cookie");
      return a(this.c("token"), {
        o: b.track,
        sd: b.track_event_name,
        td: b.track_properties,
        Sb: b.persistence_type,
        Rb: b.cookie_prefix,
        wb: b.cookie_domain,
        xb: b.cookie_expiration,
        Dc: b.cross_site_cookie,
        yb: b.cross_subdomain_cookie,
        ad: b.secure_cookie,
        Hb: b.ignore_dnt,
      });
    };
    e.prototype.Ob = function (a) {
      a = c.extend({ enable_persistence: m }, a);
      this.X(Ia, a);
      this.ia(a);
    };
    e.prototype.Za = function (a) {
      a = c.extend({ clear_persistence: m, delete_user: m }, a);
      a.delete_user &&
        this.people &&
        this.people.Da() &&
        (this.people.Bb(), this.people.tb());
      this.X(Ja, a);
      this.ia(a);
    };
    e.prototype.qa = function (a) {
      return this.X(Ka, a);
    };
    e.prototype.$ = function (a) {
      return this.X(ua, a);
    };
    e.prototype.ub = function (a) {
      a = c.extend({ enable_persistence: m }, a);
      this.X(Ma, a);
      this.ia(a);
    };
    e.prototype.l = function (a, b) {
      n.error.apply(n.error, arguments);
      try {
        !b && !(a instanceof Error) && (a = Error(a)),
          this.c("error_reporter")(a, b);
      } catch (c) {
        n.error(c);
      }
    };
    e.prototype.init = e.prototype.Va;
    e.prototype.reset = e.prototype.reset;
    e.prototype.disable = e.prototype.disable;
    e.prototype.time_event = e.prototype.qd;
    e.prototype.track = e.prototype.o;
    e.prototype.track_links = e.prototype.wd;
    e.prototype.track_forms = e.prototype.vd;
    e.prototype.track_pageview = e.prototype.fb;
    e.prototype.register = e.prototype.m;
    e.prototype.register_once = e.prototype.w;
    e.prototype.unregister = e.prototype.S;
    e.prototype.identify = e.prototype.Ta;
    e.prototype.alias = e.prototype.zc;
    e.prototype.name_tag = e.prototype.Tc;
    e.prototype.set_config = e.prototype.cc;
    e.prototype.get_config = e.prototype.c;
    e.prototype.get_property = e.prototype.s;
    e.prototype.get_distinct_id = e.prototype.M;
    e.prototype.toString = e.prototype.toString;
    e.prototype.opt_out_tracking = e.prototype.Za;
    e.prototype.opt_in_tracking = e.prototype.Ob;
    e.prototype.has_opted_out_tracking = e.prototype.$;
    e.prototype.has_opted_in_tracking = e.prototype.qa;
    e.prototype.clear_opt_in_out_tracking = e.prototype.ub;
    e.prototype.get_group = e.prototype.Kc;
    e.prototype.set_group = e.prototype.jd;
    e.prototype.add_group = e.prototype.yc;
    e.prototype.remove_group = e.prototype.Yc;
    e.prototype.track_with_groups = e.prototype.xd;
    e.prototype.start_batch_senders = e.prototype.bb;
    e.prototype.stop_batch_senders = e.prototype.cb;
    e.prototype.start_session_recording = e.prototype.gc;
    e.prototype.stop_session_recording = e.prototype.od;
    e.prototype.get_session_recording_properties = e.prototype.Fb;
    e.prototype.DEFAULT_API_ROUTES = A;
    q.prototype.properties = q.prototype.ba;
    q.prototype.update_search_keyword = q.prototype.oc;
    q.prototype.update_referrer_info = q.prototype.hb;
    q.prototype.get_cross_subdomain = q.prototype.Jc;
    q.prototype.clear = q.prototype.clear;
    var F = {};
    (function (a) {
      na = a;
      ca = 1;
      x = o.mixpanel;
      c.g(x)
        ? n.B(
            '"mixpanel" object not initialized. Ensure you are using the latest version of the Mixpanel JS Library along with the snippet we provide.'
          )
        : x.__loaded || (x.config && x.persistence)
        ? n.B(
            "The Mixpanel library has already been downloaded at least once. Ensure that the Mixpanel code snippet only appears once on the page (and is not double-loaded by a tag manager) in order to avoid errors."
          )
        : 1.1 > (x.__SV || 0)
        ? n.B(
            "Version mismatch; please ensure you're using the latest version of the Mixpanel code snippet."
          )
        : (c.a(x._i, function (a) {
            a && c.isArray(a) && (F[a[a.length - 1]] = S.apply(this, a));
          }),
          Ca(),
          x.init(),
          c.a(F, function (a) {
            a.ka();
          }),
          Ba());
    })(function (a, b) {
      var c = document.createElement("script");
      c.type = "text/javascript";
      c.async = m;
      c.onload = b;
      c.src = a;
      document.head.appendChild(c);
    });
  })();
})();
