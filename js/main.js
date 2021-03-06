/*
 **
 ** CarWash Scripts
 **
 */

!(function () {
  "use strict";
  !(function n(e, o, i) {
    function r(a, s) {
      if (!o[a]) {
        if (!e[a]) {
          var u = "function" == typeof require && require;
          if (!s && u) return u(a, !0);
          if (t) return t(a, !0);
          var l = new Error("Cannot find module '" + a + "'");
          throw ((l.code = "MODULE_NOT_FOUND"), l);
        }
        var c = (o[a] = { exports: {} });
        e[a][0].call(
          c.exports,
          function (n) {
            var o = e[a][1][n];
            return r(o ? o : n);
          },
          c,
          c.exports,
          n,
          e,
          o,
          i
        );
      }
      return o[a].exports;
    }
    for (
      var t = "function" == typeof require && require, a = 0;
      a < i.length;
      a++
    )
      r(i[a]);
    return r;
  })(
    {
      1: [
        function (n, e, o) {
          e.exports = (function (n) {
            n(".scroll-pane").jScrollPane(),
              n(window).resize(function () {
                n(".scroll-pane").jScrollPane();
              });
          })(jQuery);
        },
        {},
      ],
      2: [
        function (n, e, o) {
          jQuery(document).ready(function (e) {
            n("./nav-menu.js"),
              n("./sticky-nav.js"),
              n("./one-page-nav.js"),
              n("./site-loader.js"),
              n("./jscrollpane.js");
            new WOW({ mobile: !1 }).init();
          });
        },
        {
          "./jscrollpane.js": 1,
          "./nav-menu.js": 3,
          "./one-page-nav.js": 4,
          "./site-loader.js": 5,
          "./sticky-nav.js": 6,
        },
      ],
      3: [
        function (n, e, o) {
          e.exports = (function (n) {
            n("#nav-menu-open").click(function (e) {
              e.preventDefault(),
                n(".body-inner").hasClass("nav-menu-opened")
                  ? n(".body-inner").removeClass("nav-menu-opened")
                  : n(".body-inner").addClass("nav-menu-opened");
            }),
              n("#nav-menu-close").click(function (e) {
                e.preventDefault(),
                  n(".body-inner").removeClass("nav-menu-opened");
              });
          })(jQuery);
        },
        {},
      ],
      4: [
        function (n, e, o) {
          e.exports = (function (n) {
            n(".main-menu a").click(function (e) {
              var o = n(this).attr("href");
              if (-1 != o.indexOf("#"))
                if (n(o).length)
                  e.preventDefault(),
                    n(".body-inner").removeClass("nav-menu-opened"),
                    n(".body-inner").one(
                      "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
                      function () {
                        n("html, body").animate(
                          { scrollTop: n(o).offset().top },
                          2e3,
                          function () {
                            window.location.hash = o;
                          }
                        );
                      }
                    );
                else {
                  var i =
                    window.location.protocol +
                    "//" +
                    window.location.host +
                    window.location.pathname +
                    "index.html";
                  if ("/" != i[i.length]) {
                    for (
                      var r = i.split("/"), t = "", a = 0;
                      a < r.length - 1;
                      a++
                    )
                      t += r[a] + "/";
                    i = t + o;
                  }
                  window.location = i;
                }
            });
          })(jQuery);
        },
        {},
      ],
      5: [
        function (n, e, o) {
          e.exports = (function (n) {
            n("body")
              .imagesLoaded()
              .done(function (e) {
                n(".site-loader").addClass("loader-hidden");
              });
          })(jQuery);
        },
        {},
      ],
      6: [
        function (n, e, o) {
          e.exports = (function (n) {
            function e() {
              n(window).scrollTop() >= 380 && !n(".nav-menu").hasClass("opened")
                ? n(".header-wrapper").addClass("fixed")
                : n(".header-wrapper").removeClass("fixed");
            }
            n(window).scroll(function () {
              e();
            }),
              e();
          })(jQuery);
        },
        {},
      ],
    },
    {},
    [2]
  );
})();
