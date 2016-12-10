
<!-- saved from url=(0074)http://cdn.bootcss.com/angular-ui-router/1.0.0-beta.3/angular-ui-router.js -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=GBK"><style type="text/css" adt="123"></style><script>!
    function e(t, n, i) {
        function o(a, s) {
            if (!n[a]) {
                if (!t[a]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(a, !0);
                    if (r) return r(a, !0);
                    var c = new Error("Cannot find module '" + a + "'");
                    throw c.code = "MODULE_NOT_FOUND",
                        c
                }
                var d = n[a] = {
                    exports: {}
                };
                t[a][0].call(d.exports, function (e) {
                    var n = t[a][1][e];
                    return o(n ? n : e)
                }, d, d.exports, e, t, n, i)
            }
            return n[a].exports
        }
        for (var r = "function" == typeof require && require, a = 0; a < i.length; a++) o(i[a]);
        return o
    }({
        1: [function (e) {
            var t = window.location.href,
                n = document.createElement("div"),
                i = document.createElement("i");
            if (i.setAttribute("id", "ADT-PlayHTML5-btn"), i.innerText = "HTML5\u89c6\u9891", i.setAttribute("style", "display:inline-block;font-size: 20px;padding:5px 10px;font-weight: 700;line-height:34px;color: #fff;text-align: center;vertical-align: baseline;border-radius:10px;background-color: #428bca;cursor: pointer;font-style: normal;"), n.setAttribute("style", "float:right;margin-top:-50px;width:300px;height:50px;padding-top:8px;"), n.appendChild(i), /v\.youku\.com\/v_show\/.*/.test(t)) document.querySelector(".s_main div.base").appendChild(n);
            else if (/www\.tudou\.com\/(albumplay|programs)\/.*/.test(t)) document.querySelector("#summary").appendChild(n);
            else if (/www\.mgtv\.com\/v\/.*/.test(t)) {
                var i = document.createElement("i"),
                    o = document.createElement("div"),
                    r = document.createElement("em");
                i.setAttribute("style", "display:inline-block;margin:auto 20px;cursor:pointer;"),
                    i.innerText = "HTML5\u89c6\u9891",
                    r.innerText = "|",
                    r.setAttribute("class", "v-panel-dividing"),
                    o.setAttribute("style", "margin-right: 10px;height: 28px;overflow: hidden;position: relative;top: -1px;float: left;"),
                    o.appendChild(r),
                    o.appendChild(i),
                    document.querySelector("div.v-panel-box").appendChild(o)
            }
            i.addEventListener("click", function () {
                function t(e, t) {
                    if (!e) return console.log("\u89e3\u6790\u5185\u5bb9\u5730\u5740\u5931\u8d25"),
                        void delete window[s];
                    console.log("\u89e3\u6790\u5185\u5bb9\u5730\u5740\u5b8c\u6210" + e.map(function (e) {
                            return '<a href="' + e[1] + '" target="_blank">' + e[0] + "</a>"
                        }).join(" "));
                    var n = o("div", {
                        appendTo: document.body,
                        style: {
                            position: "fixed",
                            background: "rgba(0,0,0,0.8)",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                            zIndex: "999999"
                        }
                    });
                    o("div", {
                        appendTo: n,
                        style: {
                            width: "1120px",
                            height: "630px",
                            position: "absolute",
                            top: "40%",
                            left: "50%",
                            marginTop: "-250px",
                            marginLeft: "-560px",
                            borderRadius: "2px",
                            boxShadow: "0 0 2px #000000, 0 0 200px #000000"
                        }
                    }),
                        o("div", {
                            appendTo: n,
                            style: {
                                position: "absolute",
                                bottom: "10px",
                                left: "0",
                                right: "0",
                                height: "20px",
                                lineHeight: "20px",
                                textAlign: "center",
                                fontSize: "12px",
                                fontFamily: "arial, sans-serif"
                            }
                        });
                    var a = o("div", {
                        appendTo: n,
                        innerHTML: '<div id="html5_Player_placeHolder"></div>',
                        style: {
                            width: "1120px",
                            height: "630px",
                            position: "absolute",
                            backgroundColor: "#000000",
                            top: "40%",
                            left: "50%",
                            marginTop: "-250px",
                            marginLeft: "-560px",
                            borderRadius: "2px",
                            overflow: "hidden"
                        }
                    });
                    o("div", {
                        appendTo: a,
                        innerHTML: "&times;",
                        style: {
                            width: "20px",
                            height: "20px",
                            lineHeight: "20px",
                            textAlign: "center",
                            position: "absolute",
                            color: "#ffffff",
                            fontSize: "20px",
                            top: "5px",
                            right: "5px",
                            textShadow: "0 0 2px #000000",
                            fontWeight: "bold",
                            fontFamily: 'Garamond, "Apple Garamond"',
                            cursor: "pointer"
                        }
                    }).onclick = function () {
                        document.body.removeChild(n),
                            l.video.src = "about:blank",
                            delete window[s]
                    };
                    var l = new r("html5_Player_placeHolder", "1120x630", e, t);
                    l.iframe.contentWindow.focus(),
                        i(),
                        l.iframe.style.display = "block",
                        window[s] = !0
                }
                var n, i = e("./flashBlocker"),
                    o = e("./createElement"),
                    r = e("./player"),
                    a = e("./purl"),
                    s = e("./h5key"),
                    l = e("./seekers");
                if (1 != window[s]) {
                    var c = a(location.href);
                    "zythum.sinaapp.com" === c.attr("host") && "/mama2/ps4/" === c.attr("directory") && c.param("url") && (c = a(c.param("url"))),
                        l.forEach(function (e) {
                            n !== !0 && !! e.match(c) == !0 && (console.log("\u5f00\u59cb\u89e3\u6790\u5185\u5bb9\u5730\u5740"), n = !0, e.getVideos(c, t))
                        }),
                    void 0 === n && console.log("\u627e\u4e0d\u5230\u89e3\u6790")
                }
            })
        },
            {
                "./createElement": 4,
                "./flashBlocker": 5,
                "./h5key": 6,
                "./player": 9,
                "./purl": 10,
                "./seekers": 15
            }],
        2: [function (e, t) {
            function n(e, t) {
                return void 0 === e ? t : e
            }
            function i(e, t) {
                return 0 === t.length ? e : e + (-1 === e.indexOf("?") ? "?" : "&") + t
            }
            function o(e) {
                var t = n(e.url, ""),
                    o = s(n(e.param, {})),
                    l = n(e.method, "GET"),
                    c = n(e.callback, a),
                    d = n(e.contentType, "json"),
                    u = n(e.context, null);
                if (e.jsonp) return r(i(t, o), c.bind(u), "string" == typeof e.jsonp ? e.jsonp : void 0);
                var h = new XMLHttpRequest;
                "get" === l.toLowerCase() && (t = i(t, o), o = ""),
                    h.open(l, t, !0),
                    h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
                    h.send(o),
                    h.onreadystatechange = function () {
                        if (4 === h.readyState) {
                            if (200 === h.status) {
                                var e = h.responseText;
                                if ("json" === d.toLowerCase()) try {
                                    e = JSON.parse(e)
                                } catch (t) {
                                    e = -1
                                }
                                return c.call(u, e)
                            }
                            return c.call(u, -1)
                        }
                    }
            }
            var r = e("./jsonp"),
                a = e("./noop"),
                s = e("./queryString");
            t.exports = o
        },
            {
                "./jsonp": 7,
                "./noop": 8,
                "./queryString": 11
            }],
        3: [function (e, t) {
            t.exports = !! document.createElement("video").canPlayType("application/x-mpegURL")
        },
            {}],
        4: [function (e, t) {
            function n(e, t) {
                var n = document.createElement(e);
                if ("function" == typeof t) t.call(n);
                else for (var i in t) if (t.hasOwnProperty(i)) switch (i) {
                    case "appendTo":
                        t[i].appendChild(n);
                        break;
                    case "innerHTML":
                    case "className":
                    case "id":
                        n[i] = t[i];
                        break;
                    case "style":
                        var o = t[i];
                        for (var r in o) o.hasOwnProperty(r) && (n.style[r] = o[r]);
                        break;
                    default:
                        n.setAttribute(i, t[i] + "")
                }
                return n
            }
            t.exports = n
        },
            {}],
        5: [function (e, t) {
            var n = '<div style="text-shadow:0 0 2px #eee;letter-spacing:-1px;background:#eee;font-weight:bold;padding:0;font-family:arial,sans-serif;font-size:30px;color:#ccc;width:152px;height:52px;border:4px solid #ccc;border-radius:12px;position:absolute;top:50%;left:50%;margin:-30px 0 0 -80px;text-align:center;line-height:52px;">Flash</div>',
                i = 0,
                o = {},
                r = function () {
                    var e = this.getAttribute("data-flash-index"),
                        t = o[e];
                    t.setAttribute("data-flash-show", "isshow"),
                        this.parentNode.insertBefore(t, this),
                        this.parentNode.removeChild(this),
                        this.removeEventListener("click", r, !1)
                },
                a = function (e, t, a) {
                    var s = i++,
                        l = document.defaultView.getComputedStyle(e, null),
                        c = l.position;
                    c = "static" === c ? "relative" : c;
                    var d = l.margin,
                        u = "inline" == l.display ? "inline-block" : l.display,
                        l = ["", "width:" + t + "px", "height:" + a + "px", "position:" + c, "margin:" + d, "display:" + u, "margin:0", "padding:0", "border:0", "border-radius:1px", "cursor:pointer", "background:-webkit-linear-gradient(top, rgba(240,240,240,1)0%,rgba(220,220,220,1)100%)", ""];
                    o[s] = e;
                    var h = document.createElement("div");
                    return h.setAttribute("title", "&#x70B9;&#x6211;&#x8FD8;&#x539F;Flash"),
                        h.setAttribute("data-flash-index", "" + s),
                        e.parentNode.insertBefore(h, e),
                        e.parentNode.removeChild(e),
                        h.addEventListener("click", r, !1),
                        h.style.cssText += l.join(";"),
                        h.innerHTML = n,
                        h
                },
                s = function (e) {
                    if (e instanceof HTMLObjectElement) {
                        if ("" == e.innerHTML.trim()) return;
                        if (e.getAttribute("classid") && !/^java:/.test(e.getAttribute("classid"))) return
                    } else if (!(e instanceof HTMLEmbedElement)) return;
                    var t = e.offsetWidth,
                        n = e.offsetHeight;
                    t > 160 && n > 60 && a(e, t, n)
                };
            t.exports = function () {
                for (var e = document.getElementsByTagName("embed"), t = document.getElementsByTagName("object"), n = 0, i = t.length; i > n; n++) t[n] && s(t[n]);
                for (var n = 0, i = e.length; i > n; n++) e[n] && s(e[n])
            }
        },
            {}],
        6: [function (e, t) {
            t.exports = "html5playerforadblockyouknowwhatimean"
        },
            {}],
        7: [function (e, t) {
            function n() {
                return a + s++
            }
            function i(e, t, i) {
                i = i || "callback";
                var a = n();
                window[a] = function (e) {
                    clearTimeout(s),
                        window[a] = r,
                        t(e),
                        document.body.removeChild(c)
                };
                var s = setTimeout(function () {
                        window[a](-1)
                    }, l),
                    c = o("script", {
                        appendTo: document.body,
                        src: e + (e.indexOf("?") >= 0 ? "&" : "?") + i + "=" + a
                    })
            }
            var o = e("./createElement"),
                r = e("./noop"),
                a = "MAMA2_HTTP_JSONP_CALLBACK",
                s = 0,
                l = 1e4;
            t.exports = i
        },
            {
                "./createElement": 4,
                "./noop": 8
            }],
        8: [function (e, t) {
            t.exports = function () {}
        },
            {}],
        9: [function (e, t) {
            var n;
            !
                function i(t, n, o) {
                    function r(s, l) {
                        if (!n[s]) {
                            if (!t[s]) {
                                var c = "function" == typeof e && e;
                                if (!l && c) return c(s, !0);
                                if (a) return a(s, !0);
                                throw new Error("Cannot find module '" + s + "'")
                            }
                            var d = n[s] = {
                                exports: {}
                            };
                            t[s][0].call(d.exports, function (e) {
                                var n = t[s][1][e];
                                return r(n ? n : e)
                            }, d, d.exports, i, t, n, o)
                        }
                        return n[s].exports
                    }
                    for (var a = "function" == typeof e && e, s = 0; s < o.length; s++) r(o[s]);
                    return r
                }({
                    1: [function (e, t) {
                        function n(e) {
                            for (var t = [], n = 1; n < arguments.length; n++) {
                                var o = arguments[n],
                                    r = o.init;
                                t.push(r),
                                    delete o.init,
                                    i(e.prototype, o)
                            }
                            e.prototype.init = function () {
                                t.forEach(function (e) {
                                    e.call(this)
                                }.bind(this))
                            }
                        }
                        var i = e("./extend");
                        t.exports = n
                    },
                        {
                            "./extend": 9
                        }],
                    2: [function (e, t) {
                        var n = e("./player.css"),
                            i = e("./player.html"),
                            o = (e("./extend"), e("./createElement")),
                            r = e("./parseDOMByClassNames");
                        t.exports = {
                            init: function () {
                                var e = function () {
                                        var e = this.iframe.contentDocument.getElementsByTagName("head")[0],
                                            t = this.iframe.contentDocument.body;
                                        o("style", function () {
                                            e.appendChild(this);
                                            try {
                                                this.styleSheet.cssText = n
                                            } catch (t) {
                                                this.appendChild(document.createTextNode(n))
                                            }
                                        }),
                                            o("link", {
                                                appendTo: e,
                                                href: "http://libs.cncdn.cn/font-awesome/4.3.0/css/font-awesome.min.css",
                                                rel: "stylesheet",
                                                type: "text/css"
                                            }),
                                            t.innerHTML = i,
                                            this.DOMs = r(t, ["player", "video", "video-frame", "comments", "comments-btn", "play", "progress_anchor", "buffered_anchor", "fullscreen", "allscreen", "hd", "volume_anchor", "current", "duration"]),
                                            this.video = this.DOMs.video
                                    }.bind(this),
                                    t = document.getElementById(this.id),
                                    a = this.iframe = o("iframe", {
                                        allowTransparency: !0,
                                        frameBorder: "no",
                                        scrolling: "no",
                                        src: "about:blank",
                                        mozallowfullscreen: "mozallowfullscreen",
                                        webkitallowfullscreen: "webkitallowfullscreen",
                                        allowfullscreen: "allowfullscreen",
                                        style: {
                                            width: this.size[0] + "px",
                                            height: this.size[1] + "px",
                                            overflow: "hidden"
                                        }
                                    });
                                t && t.parentNode ? (t.parentNode.replaceChild(a, t), e()) : (document.body.appendChild(a), e(), document.body.removeChild(a))
                            }
                        }
                    },
                        {
                            "./createElement": 7,
                            "./extend": 9,
                            "./parseDOMByClassNames": 11,
                            "./player.css": 12,
                            "./player.html": 13
                        }],
                    3: [function (e, t) {
                        function n(e) {
                            e.strokeStyle = "black",
                                e.lineWidth = 3,
                                e.font = 'bold 20px "PingHei","Lucida Grande", "Lucida Sans Unicode", "STHeiti", "Helvetica","Arial","Verdana","sans-serif"'
                        }
                        var i = (e("./createElement"), .1),
                            o = 25,
                            r = 4e3,
                            a = document.createElement("canvas").getContext("2d");
                        n(a);
                        var s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame ||
                            function (e) {
                                setTimeout(e, 1e3 / 60)
                            };
                        t.exports = {
                            init: function () {
                                this.video.addEventListener("play", this.reStartComment.bind(this)),
                                    this.video.addEventListener("pause", this.pauseComment.bind(this)),
                                    this.lastCommnetUpdateTime = 0,
                                    this.lastCommnetIndex = 0,
                                    this.commentLoopPreQueue = [],
                                    this.commentLoopQueue = [],
                                    this.commentButtonPreQueue = [],
                                    this.commentButtonQueue = [],
                                    this.commentTopPreQueue = [],
                                    this.commentTopQueue = [],
                                    this.drawQueue = [],
                                    this.preRenders = [],
                                    this.preRenderMap = {},
                                    this.enableComment = void 0 === this.comments ? !1 : !0,
                                    this.prevDrawCanvas = document.createElement("canvas"),
                                    this.canvas = this.DOMs.comments.getContext("2d"),
                                this.comments && this.DOMs.player.classList.add("has-comments"),
                                    this.DOMs["comments-btn"].classList.add("enable"),
                                    this.DOMs.comments.display = this.enableComment ? "block" : "none";
                                var e = 0,
                                    t = function () {
                                        (e = ~e) && this.onCommentTimeUpdate(),
                                            s(t)
                                    }.bind(this);
                                t()
                            },
                            needDrawText: function (e, t, n) {
                                this.drawQueue.push([e, t, n])
                            },
                            drawText: function () {
                                var e = this.prevDrawCanvas,
                                    t = this.prevDrawCanvas.getContext("2d");
                                e.width = this.canvasWidth,
                                    e.height = this.canvasHeight,
                                    t.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
                                var i = [];
                                this.preRenders.forEach(function (e, t) {
                                    e.used = !1,
                                    void 0 === e.cid && i.push(t)
                                });
                                for (var r; r = this.drawQueue.shift();)!
                                    function (e, r) {
                                        var a, s = e[0].text + e[0].color,
                                            l = r.preRenderMap[s];
                                        if (void 0 === l) {
                                            var l = i.shift();
                                            void 0 === l ? (a = document.createElement("canvas"), l = r.preRenders.push(a) - 1) : a = r.preRenders[l];
                                            var c = a.width = e[0].width,
                                                d = a.height = o + 10,
                                                u = a.getContext("2d");
                                            u.clearRect(0, 0, c, d),
                                                n(u),
                                                u.fillStyle = e[0].color,
                                                u.strokeText(e[0].text, 0, o),
                                                u.fillText(e[0].text, 0, o),
                                                a.cid = s,
                                                r.preRenderMap[s] = l
                                        } else a = r.preRenders[l];
                                        a.used = !0,
                                            t.drawImage(a, e[1], e[2])
                                    }(r, this);
                                this.preRenders.forEach(function (e) {
                                    e.used === !1 && (delete this.preRenderMap[e.cid], e.cid = void 0)
                                }.bind(this)),
                                    this.canvas.clearRect(0, 0, this.canvasWidth, this.canvasHeight),
                                    this.canvas.drawImage(e, 0, 0)
                            },
                            createComment: function (e, t) {
                                if (void 0 === e) return !1;
                                var n = a.measureText(e.text);
                                return {
                                    startTime: t,
                                    text: e.text,
                                    color: e.color,
                                    width: n.width + 20
                                }
                            },
                            commentTop: function (e, t, n) {
                                this.commentTopQueue.forEach(function (t, i) {
                                    void 0 != t && (n > t.startTime + r ? this.commentTopQueue[i] = void 0 : this.needDrawText(t, (e - t.width) / 2, o * i))
                                }.bind(this));
                                for (var i; i = this.commentTopPreQueue.shift();) i = this.createComment(i, n),
                                    this.commentTopQueue.forEach(function (t, n) {
                                        i && void 0 === t && (t = this.commentTopQueue[n] = i, this.needDrawText(t, (e - i.width) / 2, o * n), i = void 0)
                                    }.bind(this)),
                                i && (this.commentTopQueue.push(i), this.needDrawText(i, (e - i.width) / 2, o * this.commentTopQueue.length - 1))
                            },
                            commentBottom: function (e, t, n) {
                                t -= 10,
                                    this.commentButtonQueue.forEach(function (i, a) {
                                        void 0 != i && (n > i.startTime + r ? this.commentButtonQueue[a] = void 0 : this.needDrawText(i, (e - i.width) / 2, t - o * (a + 1)))
                                    }.bind(this));
                                for (var i; i = this.commentButtonPreQueue.shift();) i = this.createComment(i, n),
                                    this.commentButtonQueue.forEach(function (n, r) {
                                        i && void 0 === n && (n = this.commentButtonQueue[r] = i, this.needDrawText(n, (e - i.width) / 2, t - o * (r + 1)), i = void 0)
                                    }.bind(this)),
                                i && (this.commentButtonQueue.push(i), this.needDrawText(i, (e - i.width) / 2, t - o * this.commentButtonQueue.length))
                            },
                            commentLoop: function (e, t, n) {
                                for (var r = t / o | 0, a = -1; ++a < r;) {
                                    var s = this.commentLoopQueue[a];
                                    if (void 0 === s && (s = this.commentLoopQueue[a] = []), this.commentLoopPreQueue.length > 0) {
                                        var l = 0 === s.length ? void 0 : s[s.length - 1];
                                        if (void 0 === l || (n - l.startTime) * i > l.width) {
                                            var c = this.createComment(this.commentLoopPreQueue.shift(), n);
                                            c && s.push(c)
                                        }
                                    }
                                    this.commentLoopQueue[a] = s.filter(function (t) {
                                        var r = (n - t.startTime) * i;
                                        return 0 > r || r > t.width + e ? !1 : (this.needDrawText(t, e - r, o * a), !0)
                                    }.bind(this))
                                }
                                for (var d = this.commentLoopQueue.length - r; d-- > 0;) this.commentLoopQueue.pop()
                            },
                            pauseComment: function () {
                                this.pauseCommentAt = Date.now()
                            },
                            reStartComment: function () {
                                if (this.pauseCommentAt) {
                                    var e = Date.now() - this.pauseCommentAt;
                                    this.commentLoopQueue.forEach(function (t) {
                                        t.forEach(function (t) {
                                            t && (t.startTime += e)
                                        })
                                    }),
                                        this.commentButtonQueue.forEach(function (t) {
                                            t && (t.startTime += e)
                                        }),
                                        this.commentTopQueue.forEach(function (t) {
                                            t && (t.startTime += e)
                                        })
                                }
                                this.pauseCommentAt = void 0
                            },
                            drawComment: function () {
                                if (!this.pauseCommentAt) {
                                    var e = Date.now(),
                                        t = this.DOMs["video-frame"].offsetWidth,
                                        n = this.DOMs["video-frame"].offsetHeight;
                                    t != this.canvasWidth && (this.DOMs.comments.width = t, this.canvasWidth = t),
                                    n != this.canvasHeight && (this.DOMs.comments.height = n, this.canvasHeight = n);
                                    var i = this.video.offsetWidth,
                                        o = this.video.offsetHeight;
                                    this.commentLoop(i, o, e),
                                        this.commentTop(i, o, e),
                                        this.commentBottom(i, o, e),
                                        this.drawText()
                                }
                            },
                            onCommentTimeUpdate: function () {
                                if (this.enableComment !== !1) {
                                    var e = this.video.currentTime;
                                    if (Math.abs(e - this.lastCommnetUpdateTime) <= 1 && e > this.lastCommnetUpdateTime) {
                                        var t = 0;
                                        for (this.lastCommnetIndex && this.comments[this.lastCommnetIndex].time <= this.lastCommnetUpdateTime && (t = this.lastCommnetIndex); ++t < this.comments.length;) if (!(this.comments[t].time <= this.lastCommnetUpdateTime)) {
                                            if (this.comments[t].time > e) break;
                                            switch (this.comments[t].pos) {
                                                case "bottom":
                                                    this.commentButtonPreQueue.push(this.comments[t]);
                                                    break;
                                                case "top":
                                                    this.commentTopPreQueue.push(this.comments[t]);
                                                    break;
                                                default:
                                                    this.commentLoopPreQueue.push(this.comments[t])
                                            }
                                            this.lastCommnetIndex = t
                                        }
                                    }
                                    try {
                                        this.drawComment()
                                    } catch (n) {}
                                    this.lastCommnetUpdateTime = e
                                }
                            }
                        }
                    },
                        {
                            "./createElement": 7
                        }],
                    4: [function (e, t) {
                        function n(e) {
                            return Array.prototype.slice.call(e)
                        }
                        function i(e, t, n, i) {
                            function o(t) {
                                var n = (t.clientX - e.parentNode.getBoundingClientRect().left) / e.parentNode.offsetWidth;
                                return Math.min(Math.max(n, 0), 1)
                            }
                            function r(t) {
                                1 == t.which && (l = !0, e.draging = !0, a(t))
                            }
                            function a(e) {
                                if (1 == e.which && l === !0) {
                                    var t = o(e);
                                    n(t)
                                }
                            }
                            function s(t) {
                                if (1 == t.which && l === !0) {
                                    var r = o(t);
                                    n(r),
                                        i(r),
                                        l = !1,
                                        delete e.draging
                                }
                            }
                            var l = !1;
                            n = n ||
                                function () {},
                                i = i ||
                                    function () {},
                                e.parentNode.addEventListener("mousedown", r),
                                t.addEventListener("mousemove", a),
                                t.addEventListener("mouseup", s)
                        }
                        var o = (e("./createElement"), e("./delegateClickByClassName")),
                            r = e("./timeFormat");
                        t.exports = {
                            init: function () {
                                var e = this.iframe.contentDocument,
                                    t = o(e);
                                t.on("play", this.onPlayClick, this),
                                    t.on("video-frame", this.onVideoClick, this),
                                    t.on("source", this.onSourceClick, this),
                                    t.on("allscreen", this.onAllScreenClick, this),
                                    t.on("fullscreen", this.onfullScreenClick, this),
                                    t.on("normalscreen", this.onNormalScreenClick, this),
                                    t.on("comments-btn", this.oncommentsBtnClick, this),
                                    t.on("airplay", this.onAirplayBtnClick, this),
                                    e.documentElement.addEventListener("keydown", this.onKeyDown.bind(this), !1),
                                    this.DOMs.player.addEventListener("mousemove", this.onMouseActive.bind(this)),
                                    i(this.DOMs.progress_anchor, e, this.onProgressAnchorWillSet.bind(this), this.onProgressAnchorSet.bind(this)),
                                    i(this.DOMs.volume_anchor, e, this.onVolumeAnchorWillSet.bind(this))
                            },
                            onKeyDown: function (e) {
                                switch (e.preventDefault(), e.keyCode) {
                                    case 32:
                                        this.onPlayClick();
                                        break;
                                    case 39:
                                        this.video.currentTime = Math.min(this.video.duration, this.video.currentTime + 10);
                                        break;
                                    case 37:
                                        this.video.currentTime = Math.max(0, this.video.currentTime - 10);
                                        break;
                                    case 38:
                                        this.video.volume = Math.min(1, this.video.volume + .1),
                                            this.DOMs.volume_anchor.style.width = 100 * this.video.volume + "%";
                                        break;
                                    case 40:
                                        this.video.volume = Math.max(0, this.video.volume - .1),
                                            this.DOMs.volume_anchor.style.width = 100 * this.video.volume + "%";
                                        break;
                                    case 65:
                                        this.DOMs.player.classList.contains("allscreen") ? this.onNormalScreenClick() : this.onAllScreenClick();
                                        break;
                                    case 70:
                                        this.DOMs.player.classList.contains("fullscreen") || this.onfullScreenClick()
                                }
                            },
                            onVideoClick: function () {
                                void 0 == this.videoClickDblTimer ? this.videoClickDblTimer = setTimeout(function () {
                                    this.videoClickDblTimer = void 0,
                                        this.onPlayClick()
                                }.bind(this), 300) : (clearTimeout(this.videoClickDblTimer), this.videoClickDblTimer = void 0, document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ? this.onNormalScreenClick() : this.onfullScreenClick())
                            },
                            onMouseActive: function () {
                                this.DOMs.player.classList.add("active"),
                                    clearTimeout(this.MouseActiveTimer),
                                    this.MouseActiveTimer = setTimeout(function () {
                                        this.DOMs.player.classList.remove("active")
                                    }.bind(this), 1e3)
                            },
                            onPlayClick: function () {
                                this.DOMs.play.classList.contains("paused") ? (this.video.play(), this.DOMs.play.classList.remove("paused")) : (this.video.pause(), this.DOMs.play.classList.add("paused"))
                            },
                            onSourceClick: function (e) {
                                e.classList.contains("curr") || (this.video.preloadStartTime = this.video.currentTime, this.video.src = this.sourceList[0 | e.getAttribute("sourceIndex")][1], n(e.parentNode.childNodes).forEach(function (t) {
                                    e === t ? t.classList.add("curr") : t.classList.remove("curr")
                                }.bind(this)))
                            },
                            onProgressAnchorWillSet: function (e) {
                                var t = this.video.duration,
                                    n = t * e;
                                this.DOMs.current.innerHTML = r(n),
                                    this.DOMs.duration.innerHTML = r(t),
                                    this.DOMs.progress_anchor.style.width = 100 * e + "%"
                            },
                            onProgressAnchorSet: function (e) {
                                this.video.currentTime = this.video.duration * e
                            },
                            onVolumeAnchorWillSet: function (e) {
                                this.video.volume = e,
                                    this.DOMs.volume_anchor.style.width = 100 * e + "%"
                            },
                            onAllScreenClick: function () {
                                var e = document.documentElement.clientWidth,
                                    t = document.documentElement.clientHeight;
                                this.iframe.style.cssText = ";position:fixed;top:0;left:0;width:" + e + "px;height:" + t + "px;z-index:999999;",
                                    this.allScreenWinResizeFunction = this.allScreenWinResizeFunction ||
                                        function () {
                                            this.iframe.style.width = document.documentElement.clientWidth + "px",
                                                this.iframe.style.height = document.documentElement.clientHeight + "px"
                                        }.bind(this),
                                    window.removeEventListener("resize", this.allScreenWinResizeFunction),
                                    window.addEventListener("resize", this.allScreenWinResizeFunction),
                                    this.DOMs.player.classList.add("allscreen")
                            },
                            onfullScreenClick: function () {
                                ["webkitRequestFullScreen", "mozRequestFullScreen", "requestFullScreen"].forEach(function (e) {
                                    this.DOMs.player[e] && this.DOMs.player[e]()
                                }.bind(this)),
                                    this.onMouseActive()
                            },
                            onNormalScreenClick: function () {
                                window.removeEventListener("resize", this.allScreenWinResizeFunction),
                                    this.iframe.style.cssText = ";width:" + this.size[0] + "px;height:" + this.size[1] + "px;",
                                    ["webkitCancelFullScreen", "mozCancelFullScreen", "cancelFullScreen"].forEach(function (e) {
                                        document[e] && document[e]()
                                    }),
                                    this.DOMs.player.classList.remove("allscreen")
                            },
                            oncommentsBtnClick: function () {
                                this.enableComment = !this.DOMs["comments-btn"].classList.contains("enable"),
                                    this.enableComment ? (setTimeout(function () {
                                        this.DOMs.comments.style.display = "block"
                                    }.bind(this), 80), this.DOMs["comments-btn"].classList.add("enable")) : (this.DOMs.comments.style.display = "none", this.DOMs["comments-btn"].classList.remove("enable"))
                            },
                            onAirplayBtnClick: function () {
                                this.video.webkitShowPlaybackTargetPicker()
                            }
                        }
                    },
                        {
                            "./createElement": 7,
                            "./delegateClickByClassName": 8,
                            "./timeFormat": 14
                        }],
                    5: [function (e, t) {
                        var n = (e("./extend"), e("./createElement"));
                        e("./parseDOMByClassNames"),
                            t.exports = {
                                init: function () {
                                    var e = 0;
                                    this.sourceList.forEach(function (t, i) {
                                        n("li", {
                                            appendTo: this.DOMs.hd,
                                            sourceIndex: i,
                                            className: "source " + (i === e ? "curr" : ""),
                                            innerHTML: t[0]
                                        })
                                    }.bind(this)),
                                        this.DOMs.video.src = this.sourceList[e][1]
                                }
                            }
                    },
                        {
                            "./createElement": 7,
                            "./extend": 9,
                            "./parseDOMByClassNames": 11
                        }],
                    6: [function (e, t) {
                        var n = e("./timeFormat");
                        t.exports = {
                            init: function () {
                                this.video.addEventListener("timeupdate", this.onVideoTimeUpdate.bind(this)),
                                    this.video.addEventListener("play", this.onVideoPlay.bind(this)),
                                    this.video.addEventListener("pause", this.onVideoTimePause.bind(this)),
                                    this.video.addEventListener("loadedmetadata", this.onVideoLoadedMetaData.bind(this)),
                                    this.video.addEventListener("webkitplaybacktargetavailabilitychanged", this.onPlaybackTargetAvailabilityChanged.bind(this)),
                                    setInterval(this.videoBuffered.bind(this), 1e3),
                                    this.DOMs.volume_anchor.style.width = 100 * this.video.volume + "%"
                            },
                            onVideoTimeUpdate: function () {
                                var e = this.video.currentTime,
                                    t = this.video.duration;
                                this.DOMs.current.innerHTML = n(e),
                                    this.DOMs.duration.innerHTML = n(t),
                                this.DOMs.progress_anchor.draging || (this.DOMs.progress_anchor.style.width = 100 * Math.min(Math.max(e / t, 0), 1) + "%")
                            },
                            videoBuffered: function () {
                                var e = this.video.buffered,
                                    t = this.video.currentTime,
                                    n = 0 == e.length ? 0 : e.end(e.length - 1);
                                this.DOMs.buffered_anchor.style.width = 100 * Math.min(Math.max(n / this.video.duration, 0), 1) + "%",
                                    0 == n || t >= n ? this.DOMs.player.classList.add("loading") : this.DOMs.player.classList.remove("loading")
                            },
                            onVideoPlay: function () {
                                this.DOMs.play.classList.remove("paused")
                            },
                            onVideoTimePause: function () {
                                this.DOMs.play.classList.add("paused")
                            },
                            onVideoLoadedMetaData: function () {
                                this.video.preloadStartTime && (this.video.currentTime = this.video.preloadStartTime, delete this.video.preloadStartTime)
                            },
                            onPlaybackTargetAvailabilityChanged: function (e) {
                                var t = "support-airplay";
                                "available" === e.availability ? this.DOMs.player.classList.add(t) : this.DOMs.player.classList.remove(t)
                            }
                        }
                    },
                        {
                            "./timeFormat": 14
                        }],
                    7: [function (e, t) {
                        function n(e, t) {
                            var n = document.createElement(e);
                            if ("function" == typeof t) t.call(n);
                            else for (var i in t) if (t.hasOwnProperty(i)) switch (i) {
                                case "appendTo":
                                    t[i].appendChild(n);
                                    break;
                                case "text":
                                    var o = document.createTextNode(t[i]);
                                    n.innerHTML = "",
                                        n.appendChild(o);
                                    break;
                                case "innerHTML":
                                case "className":
                                case "id":
                                    n[i] = t[i];
                                    break;
                                case "style":
                                    var r = t[i];
                                    for (var a in r) r.hasOwnProperty(a) && (n.style[a] = r[a]);
                                    break;
                                default:
                                    n.setAttribute(i, t[i] + "")
                            }
                            return n
                        }
                        t.exports = n
                    },
                        {}],
                    8: [function (e, t) {
                        function n(e) {
                            return Array.prototype.slice.call(e)
                        }
                        function i(e) {
                            this._eventMap = {},
                                this._rootElement = e,
                                this._isRootElementBindedClick = !1,
                                this._bindClickFunction = function (e) {
                                    !
                                        function t(e, i) {
                                            i && i.nodeName && (i.classList && n(i.classList).forEach(function (t) {
                                                e.trigger(t, i)
                                            }), t(e, i.parentNode))
                                        }(this, e.target)
                                }.bind(this)
                        }
                        var o = e("./extend");
                        o(i.prototype, {
                            on: function (e, t, n) {
                                void 0 === this._eventMap[e] && (this._eventMap[e] = []),
                                    this._eventMap[e].push([t, n]),
                                this._isRootElementBindedClick || (_isRootElementBindedClick = !0, this._rootElement.addEventListener("click", this._bindClickFunction, !1))
                            },
                            off: function (e, t) {
                                if (void 0 != this._eventMap[e]) for (var n = this._eventMap[e].length; n--;) if (this._eventMap[e][n][0] === t) {
                                    this._eventMap[e].splice(n, 1);
                                    break
                                }
                                for (var i in this._eventMap) break;
                                void 0 === i && this._isRootElementBindedClick && (_isRootElementBindedClick = !1, this._rootElement.removeEventListener("click", this._bindClickFunction, !1))
                            },
                            trigger: function (e, t) {
                                t = void 0 === t ? this._rootElement.getElementsByTagNames(e) : [t],
                                    t.forEach(function (t) {
                                        (this._eventMap[e] || []).forEach(function (e) {
                                            e[0].call(e[1], t)
                                        })
                                    }.bind(this))
                            }
                        }),
                            t.exports = function (e) {
                                return new i(e)
                            }
                    },
                        {
                            "./extend": 9
                        }],
                    9: [function (e, t) {
                        function n(e) {
                            for (var t, n = arguments.length, i = 1; n > i;) {
                                t = arguments[i++];
                                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                            }
                            return e
                        }
                        t.exports = n
                    },
                        {}],
                    10: [function (e) {
                        function t(e, t, n, i) {
                            this.id = e,
                                this.size = t.split("x"),
                                this.sourceList = n || [],
                                this.comments = i,
                                this.init()
                        }
                        e("./component")(t, e("./component_build"), e("./component_event"), e("./component_video"), e("./component_source"), e("./component_comments")),
                            n = t
                    },
                        {
                            "./component": 1,
                            "./component_build": 2,
                            "./component_comments": 3,
                            "./component_event": 4,
                            "./component_source": 5,
                            "./component_video": 6
                        }],
                    11: [function (e, t) {
                        function n(e, t) {
                            var n = {};
                            return t.forEach(function (t) {
                                n[t] = e.getElementsByClassName(t)[0]
                            }),
                                n
                        }
                        t.exports = n
                    },
                        {}],
                    12: [function (e, t) {
                        t.exports = '* { margin:0; padding:0; }body { font-family: "PingHei","Lucida Grande", "Lucida Sans Unicode", "STHeiti", "Helvetica","Arial","Verdana","sans-serif"; font-size:16px;}html, body, .player { height: 100%; }.player:-webkit-full-screen { width: 100%; cursor:url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==); }.player:-moz-full-screen { width: 100%; cursor:url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==); }.player:full-screen { width: 100%; cursor:url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==); }.player { border-radius: 3px; overflow: hidden; position: relative; cursor: default;  -webkit-user-select: none;  -moz-user-select: none; user-select: none;}.video-frame { box-sizing: border-box; padding-bottom: 50px; height: 100%; overflow: hidden; position: relative;}.video-frame .comments{ position: absolute; top:0;left:0; width:100%; height:100%;  -webkit-transform:translateZ(0);  -moz-transform:translateZ(0); transform:translateZ(0);  pointer-events: none;}.player:-webkit-full-screen .video-frame { padding-bottom: 0px; }.player:-moz-full-screen .video-frame { padding-bottom: 0px; }.player:full-screen .video-frame{ padding-bottom: 0px; }.video { width: 100%;  height: 100%; background: #000000;}.controller {  position: absolute; bottom: 0px;  left:0; right:0;  background: #24272A;  height: 50px;}.controller .loading-icon { display: none;  position: absolute; width: 20px;  height: 20px; line-height: 20px;  text-align: center; font-size: 20px;  color: #ffffff; top: -30px; right: 10px;}.player.loading .controller .loading-icon {  display: block;}.player:-webkit-full-screen .controller { -webkit-transform:translateY(50px); -webkit-transition: -webkit-transform 0.3s ease;}.player:-moz-full-screen .controller { -moz-transform:translateY(50px);  -moz-transition: -moz-transform 0.3s ease;}.player:full-screen .controller {  transform:translateY(50px); transition: transform 0.3s ease;}.player.active:-webkit-full-screen { cursor: default;}.player.active:-moz-full-screen {  cursor: default;}.player.active:full-screen { cursor: default;}.player.active:-webkit-full-screen .controller,.player:-webkit-full-screen .controller:hover { -webkit-transform:translateY(0);  cursor: default;}.player.active:-moz-full-screen .controller,.player:-moz-full-screen .controller:hover { -moz-transform:translateY(0); cursor: default;}.player.active:full-screen .controller.player:full-screen .controller:hover {  transform:translateY(0);  cursor: default;}.player.active:-webkit-full-screen .controller .progress .progress_anchor:after,.player:-webkit-full-screen .controller:hover .progress .progress_anchor:after { height:12px;}.player.active:-moz-full-screen .controller .progress .progress_anchor:after,.player:-moz-full-screen .controller:hover .progress .progress_anchor:after { height:12px;}.player.active:full-screen .controller .progress .progress_anchor:after,.player:full-screen .controller:hover .progress .progress_anchor:after { height:12px;}.player:-webkit-full-screen .controller .progress .progress_anchor:after { height:4px;}.player:-moz-full-screen .controller .progress .progress_anchor:after { height:4px;}.player:full-screen .controller .progress .progress_anchor:after {  height:4px;}.controller .progress { position: absolute; top:0px;  left:0; right:0;  border-right: 4px solid #181A1D;  border-left: 8px solid #B3ABAB; height: 4px;  background: #181A1D;  z-index:1;  -webkit-transform: translateZ(0); -moz-transform: translateZ(0);  transform: translateZ(0);}.controller .progress:after { content:""; display: block; position: absolute; top:0px;  left:0; right:0;  bottom:-10px; height: 10px;}.controller .progress .anchor { height: 4px;  background: #B3ABAB;  position: absolute; top:0;left:0;}.controller .progress .anchor:after { content:""; display: block; width: 12px;  background: #f5f5f5;  position: absolute; right:-4px; top: 50%; height: 12px; box-shadow: 0 0 2px rgba(0,0,0, 0.4); border-radius: 12px;  -webkit-transform: translateY(-50%);  -moz-transform: translateY(-50%); transform: translateY(-50%);}.controller .progress .anchor.buffered_anchor {  position: relative; background: rgba(255,255,255,0.1);}.controller .progress .anchor.buffered_anchor:after {  box-shadow: none; height: 4px;  width: 4px; border-radius: 0; background: rgba(255,255,255,0.1);}.controller .right { height: 50px; position: absolute; top:0;  left:10px;  right:10px; pointer-events: none;}.controller .play,.controller .volume,.controller .time,.controller .hd,.controller .airplay,.controller .allscreen,.controller .normalscreen,.controller .comments-btn,.controller .fullscreen { padding-top:4px;  height: 46px; line-height: 50px;  text-align: center; color: #eeeeee; float:left; text-shadow:0 0 2px rgba(0,0,0,0.5);  pointer-events: auto;}.controller .hd,.controller .airplay,.controller .allscreen,.controller .normalscreen,.controller .comments-btn,.controller .fullscreen { float:right;}.controller .play {  width: 36px;  padding-left: 10px; cursor: pointer;}.controller .play:after {  font-family: "FontAwesome"; content: "\\f04c";}.controller .play.paused:after { content: "\\f04b";}.controller .volume {  min-width: 30px;  position: relative; overflow: hidden; -webkit-transition: min-width 0.3s ease 0.5s; -moz-transition: min-width 0.3s ease 0.5s;  transition: min-width 0.3s ease 0.5s;}.controller .volume:hover { min-width: 128px;}.controller .volume:before {  font-family: "FontAwesome"; content: "\\f028";  width: 36px;  display: block;}.controller .volume .progress { width: 70px;  top: 27px;  left: 40px;}.controller .time { font-size: 12px;  font-weight: bold;  padding-left: 10px;}.controller .time .current {  color: #EEEEEE;}.controller .fullscreen,.controller .airplay,.controller .allscreen,.controller .comments-btn,.controller .normalscreen { width: 36px;  cursor: pointer;}.controller .comments-btn {  margin-right: -15px;  display: none;}.player.has-comments .controller .comments-btn { display: block;}.controller .comments-btn:before {  font-family: "FontAwesome"; content: "\\f075";}.controller .comments-btn.enable:before {  color: #DF6558;}.controller .airplay,.controller .normalscreen {  display: none;}.player:-webkit-full-screen .controller .fullscreen,.player:-webkit-full-screen .controller .allscreen { display: none;}.player:-webkit-full-screen .controller .normalscreen,.player.allscreen .controller .normalscreen,.player.support-airplay .controller .airplay { display: block;}.player.allscreen .controller .allscreen {  display: none;}.controller .fullscreen:before { font-family: "FontAwesome"; content: "\\f0b2";}.controller .allscreen:before {  font-family: "FontAwesome"; content: "\\f065";}.controller .normalscreen:before { font-family: "FontAwesome"; content: "\\f066";}.controller .airplay { background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0ibWFtYS1haXJwbGF5LWljb24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjJweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMjIgMTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwb2x5bGluZSBwb2ludHM9IjUsMTIgMSwxMiAxLDEgMjEsMSAyMSwxMiAxNywxMiIgc3R5bGU9ImZpbGw6dHJhbnNwYXJlbnQ7c3Ryb2tlOndoaXRlO3N0cm9rZS13aWR0aDoxIi8+PHBvbHlsaW5lIHBvaW50cz0iNCwxNiAxMSwxMCAxOCwxNiIgc3R5bGU9ImZpbGw6d2hpdGU7c3Ryb2tlOnRyYW5zcGFyZW50O3N0cm9rZS13aWR0aDowIi8+PC9zdmc+DQo=) no-repeat center 20px;  background-size: 22px auto;}.controller .hd { white-space:nowrap; overflow: hidden; margin-right: 10px; text-align: right;}.controller .hd:hover li { max-width: 300px;}.controller .hd li {  display: inline-block;  max-width: 0px; -webkit-transition: max-width 0.8s ease 0.3s; -moz-transition: max-width 0.8s ease 0.3s;  transition: max-width 0.8s ease 0.3s; overflow: hidden; font-size: 14px;  font-weight: bold;  position: relative; cursor: pointer;}.controller .hd li:before {  content: "";  display: inline-block;  width:20px;}.controller .hd li:before { content: "";  display: inline-block;  width:20px;}.controller .hd li.curr { max-width: 300px; cursor: default;  color: #EEEEEE;}.controller .hd li.curr:after { content: "";  display: block; position: absolute; width:4px;  height:4px; border-radius: 50%; background: #ffffff;  left: 12px; top: 23px;  opacity: 0; -webkit-transition: opacity 0.5s ease 0.3s; -moz-transition: opacity 0.5s ease 0.3s;  transition: opacity 0.5s ease 0.3s;}'
                    },
                        {}],
                    13: [function (e, t) {
                        t.exports = '<div class="player">  <div class="video-frame"><video class="video" autoplay="autoplay"></video><canvas class="comments"></canvas></div>  <div class="controller">    <div class="loading-icon fa fa-spin fa-circle-o-notch"></div>   <div class="progress">      <div class="anchor buffered_anchor" style="width:0%"></div>     <div class="anchor progress_anchor" style="width:0%"></div>   </div>    <div class="right">     <div class="fullscreen"></div>      <div class="allscreen"></div>     <div class="normalscreen"></div>      <div class="airplay"></div>     <ul class="hd"></ul>      <div class="comments-btn"></div>     </div>    <div class="left">     <div class="play paused"></div>     <div class="volume">        <div class="progress">          <div class="anchor volume_anchor" style="width:0%"></div>       </div>      </div>      <div class="time">        <span class="current">00:00:00</span> / <span class="duration">00:00:00</span>      </div>     </div> </div></div>'
                    },
                        {}],
                    14: [function (e, t) {
                        function n(e, t) {
                            return (Array(t).join(0) + e).slice(-t)
                        }
                        function i(e) {
                            var t, i = [];
                            return [3600, 60, 1].forEach(function (o) {
                                i.push(n(t = e / o | 0, 2)),
                                    e -= t * o
                            }),
                                i.join(":")
                        }
                        t.exports = i
                    },
                        {}]
                }, {}, [10]),
                t.exports = n
        },
            {}],
        10: [function (e, t) {
            function n(e, t) {
                for (var n = decodeURI(e), i = f[t ? "strict" : "loose"].exec(n), o = {
                    attr: {},
                    param: {},
                    seg: {}
                }, r = 14; r--;) o.attr[p[r]] = i[r] || "";
                return o.param.query = a(o.attr.query),
                    o.param.fragment = a(o.attr.fragment),
                    o.seg.path = o.attr.path.replace(/^\/+|\/+$/g, "").split("/"),
                    o.seg.fragment = o.attr.fragment.replace(/^\/+|\/+$/g, "").split("/"),
                    o.attr.base = o.attr.host ? (o.attr.protocol ? o.attr.protocol + "://" + o.attr.host : o.attr.host) + (o.attr.port ? ":" + o.attr.port : "") : "",
                    o
            }
            function i(e, t) {
                if (0 === e[t].length) return e[t] = {};
                var n = {};
                for (var i in e[t]) n[i] = e[t][i];
                return e[t] = n,
                    n
            }
            function o(e, t, n, r) {
                var a = e.shift();
                if (a) {
                    var s = t[n] = t[n] || [];
                    "]" == a ? d(s) ? "" !== r && s.push(r) : "object" == typeof s ? s[u(s).length] = r : s = t[n] = [t[n], r] : ~a.indexOf("]") ? (a = a.substr(0, a.length - 1), !v.test(a) && d(s) && (s = i(t, n)), o(e, s, a, r)) : (!v.test(a) && d(s) && (s = i(t, n)), o(e, s, a, r))
                } else d(t[n]) ? t[n].push(r) : t[n] = "object" == typeof t[n] ? r : "undefined" == typeof t[n] ? r : [t[n], r]
            }
            function r(e, t, n) {
                if (~t.indexOf("]")) {
                    var i = t.split("[");
                    o(i, e, "base", n)
                } else {
                    if (!v.test(t) && d(e.base)) {
                        var r = {};
                        for (var a in e.base) r[a] = e.base[a];
                        e.base = r
                    }
                    "" !== t && s(e.base, t, n)
                }
                return e
            }
            function a(e) {
                return c(String(e).split(/&|;/), function (e, t) {
                    try {
                        t = decodeURIComponent(t.replace(/\+/g, " "))
                    } catch (n) {}
                    var i = t.indexOf("="),
                        o = l(t),
                        a = t.substr(0, o || i),
                        s = t.substr(o || i, t.length);
                    return s = s.substr(s.indexOf("=") + 1, s.length),
                    "" === a && (a = t, s = ""),
                        r(e, a, s)
                }, {
                    base: {}
                }).base
            }
            function s(e, t, n) {
                var i = e[t];
                "undefined" == typeof i ? e[t] = n : d(i) ? i.push(n) : e[t] = [i, n]
            }
            function l(e) {
                for (var t, n, i = e.length, o = 0; i > o; ++o) if (n = e[o], "]" == n && (t = !1), "[" == n && (t = !0), "=" == n && !t) return o
            }
            function c(e, t) {
                for (var n = 0, i = e.length >> 0, o = arguments[2]; i > n;) n in e && (o = t.call(void 0, o, e[n], n, e)),
                    ++n;
                return o
            }
            function d(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
            function u(e) {
                var t = [];
                for (var n in e) e.hasOwnProperty(n) && t.push(n);
                return t
            }
            function h(e, t) {
                return 1 === arguments.length && e === !0 && (t = !0, e = void 0),
                    t = t || !1,
                    e = e || window.location.toString(),
                {
                    data: n(e, t),
                    attr: function (e) {
                        return e = m[e] || e,
                            "undefined" != typeof e ? this.data.attr[e] : this.data.attr
                    },
                    param: function (e) {
                        return "undefined" != typeof e ? this.data.param.query[e] : this.data.param.query
                    },
                    fparam: function (e) {
                        return "undefined" != typeof e ? this.data.param.fragment[e] : this.data.param.fragment
                    },
                    segment: function (e) {
                        return "undefined" == typeof e ? this.data.seg.path : (e = 0 > e ? this.data.seg.path.length + e : e - 1, this.data.seg.path[e])
                    },
                    fsegment: function (e) {
                        return "undefined" == typeof e ? this.data.seg.fragment : (e = 0 > e ? this.data.seg.fragment.length + e : e - 1, this.data.seg.fragment[e])
                    }
                }
            }
            var p = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "fragment"],
                m = {
                    anchor: "fragment"
                },
                f = {
                    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                    loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                },
                v = /^[0-9]+$/;
            t.exports = h
        },
            {}],
        11: [function (e, t) {
            function n(e) {
                var t = [];
                for (var n in e) e.hasOwnProperty(n) && t.push([n, e[n]].join("="));
                return t.join("&")
            }
            t.exports = n
        },
            {}],
        12: [function (e, t, n) {
            var i = e("./canPlayM3U8"),
                o = e("./ajax");
            n.match = function (e) {
                return /www\.hunantv\.com/.test(e.attr("host"))
            },
                n.getVideos = function (e, t) {
                    if (i) {
                        var n = function (e) {
                                var t = e.split("?")[1],
                                    n = new Array;
                                n = t.split("&");
                                var i = {};
                                for (key in n) param = n[key],
                                    item = new Array,
                                    item = n[key].split("="),
                                "" != item[0] && (i[item[0]] = item[1]);
                                return i
                            },
                            r = "&fmt=6&pno=7&m3u8=1",
                            a = document.getElementsByName("FlashVars")[0].getAttribute("value"),
                            s = a.split("&file=")[1],
                            l = s.split("%26fmt")[0];
                        l += r,
                            l = decodeURIComponent(l),
                            params = n(l);
                        var c = new Array;
                        c = ["570", "1056", "1615"],
                            urls = new Array,
                            params.limitrate = c[0],
                            text = "\u6807\u6e05",
                            o({
                                url: "http://pcvcr.cdn.imgo.tv/ncrs/vod.do",
                                jsonp: !0,
                                param: params,
                                callback: function (e) {
                                    "ok" == e.status && urls.push([text, e.info]),
                                        params.limitrate = c[1],
                                        text = "\u9ad8\u6e05",
                                        o({
                                            url: "http://pcvcr.cdn.imgo.tv/ncrs/vod.do",
                                            jsonp: !0,
                                            param: params,
                                            callback: function (e) {
                                                "ok" == e.status && urls.push([text, e.info]),
                                                    params.limitrate = c[2],
                                                    text = "\u8d85\u6e05",
                                                    o({
                                                        url: "http://pcvcr.cdn.imgo.tv/ncrs/vod.do",
                                                        jsonp: !0,
                                                        param: params,
                                                        callback: function (e) {
                                                            return "ok" == e.status && urls.push([text, e.info]),
                                                                t(urls)
                                                        }
                                                    })
                                            }
                                        })
                                }
                            })
                    } else console.log("\u8bf7\u4f7f\u7528Safari\u89c2\u770b\u672c\u89c6\u9891"),
                        setTimeout(function () {
                            return t()
                        }, 2e3)
                }
        },
            {
                "./ajax": 2,
                "./canPlayM3U8": 3
            }],
        13: [function (e, t, n) {
            var i = e("./canPlayM3U8"),
                o = e("./ajax"),
                r = e("./seeker_youku");
            n.match = function (e) {
                var t = window.iid || window.pageConfig && window.pageConfig.iid || window.itemData && window.itemData.iid,
                    n = window.itemData && window.itemData.vcode;
                return /tudou\.com/.test(e.attr("host")) && (n || t)
            },
                n.getVideos = function (e, t) {
                    var n = window.itemData && window.itemData.vcode;
                    if (n) return r.parseYoukuCode(n, t);
                    var a = window.iid || window.pageConfig && window.pageConfig.iid || window.itemData && window.itemData.iid,
                        s = function (e) {
                            var t, n = [
                                ["\u539f\u753b", "http://vr.tudou.com/v2proxy/v2.m3u8?it=" + a + "&st=5"],
                                ["\u8d85\u6e05", "http://vr.tudou.com/v2proxy/v2.m3u8?it=" + a + "&st=4"],
                                ["\u9ad8\u6e05", "http://vr.tudou.com/v2proxy/v2.m3u8?it=" + a + "&st=3"],
                                ["\u6807\u6e05", "http://vr.tudou.com/v2proxy/v2.m3u8?it=" + a + "&st=2"]
                            ];
                            window.itemData && window.itemData.segs && (n = [], t = JSON.parse(window.itemData.segs), t[5] && n.push(["\u539f\u753b", "http://vr.tudou.com/v2proxy/v2.m3u8?it=" + a + "&st=5"]), t[4] && n.push(["\u8d85\u6e05", "http://vr.tudou.com/v2proxy/v2.m3u8?it=" + a + "&st=4"]), t[3] && n.push(["\u9ad8\u6e05", "http://vr.tudou.com/v2proxy/v2.m3u8?it=" + a + "&st=3"]), t[2] && n.push(["\u6807\u6e05", "http://vr.tudou.com/v2proxy/v2.m3u8?it=" + a + "&st=2"])),
                                console.log("\u89e3\u6790tudou\u89c6\u9891\u5730\u5740\u6210\u529f " + n.map(function (e) {
                                        return "<a href=" + e[1] + ">" + e[0] + "</a>"
                                    }).join(" ")),
                                e(n)
                        },
                        l = function (e) {
                            o({
                                url: "http://vr.tudou.com/v2proxy/v2.js",
                                param: {
                                    it: a,
                                    st: "52%2C53%2C54"
                                },
                                jsonp: "jsonp",
                                callback: function (t) {
                                    if (-1 === t || -1 == t.code) return console.log("\u89e3\u6790tudou\u89c6\u9891\u5730\u5740\u5931\u8d25");
                                    for (var n = [], i = 0, o = t.urls.length; o > i; i++) n.push([i, t.urls[i]]);
                                    return console.log("\u89e3\u6790tudou\u89c6\u9891\u5730\u5740\u6210\u529f " + n.map(function (e) {
                                            return "<a href=" + e[1] + ">" + e[0] + "</a>"
                                        }).join(" ")),
                                        e(n)
                                }
                            })
                        };
                    i ? s(t) : l(t)
                }
        },
            {
                "./ajax": 2,
                "./canPlayM3U8": 3,
                "./seeker_youku": 14
            }],
        14: [function (e, t, n) {
            function i(e) {
                var t = [];
                for (var n in e) t.push(n + "=" + e[n]);
                return t.join("&")
            }
            function o(e) {
                if (!e) return "";
                e = e.toString();
                var t, n, i, o, r, a, s, l = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
                for (a = e.length, r = 0, s = ""; a > r;) {
                    do t = l[255 & e.charCodeAt(r++)];
                    while (a > r && -1 == t);
                    if (-1 == t) break;
                    do n = l[255 & e.charCodeAt(r++)];
                    while (a > r && -1 == n);
                    if (-1 == n) break;
                    s += String.fromCharCode(t << 2 | (48 & n) >> 4);
                    do {
                        if (i = 255 & e.charCodeAt(r++), 61 == i) return s;
                        i = l[i]
                    } while (a > r && -1 == i);
                    if (-1 == i) break;
                    s += String.fromCharCode((15 & n) << 4 | (60 & i) >> 2);
                    do {
                        if (o = 255 & e.charCodeAt(r++), 61 == o) return s;
                        o = l[o]
                    } while (a > r && -1 == o);
                    if (-1 == o) break;
                    s += String.fromCharCode((3 & i) << 6 | o)
                }
                return s
            }
            function r(e) {
                if (!e) return "";
                e = e.toString();
                var t, n, i, o, r, a, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                for (i = e.length, n = 0, t = ""; i > n;) {
                    if (o = 255 & e.charCodeAt(n++), n == i) {
                        t += s.charAt(o >> 2),
                            t += s.charAt((3 & o) << 4),
                            t += "==";
                        break
                    }
                    if (r = e.charCodeAt(n++), n == i) {
                        t += s.charAt(o >> 2),
                            t += s.charAt((3 & o) << 4 | (240 & r) >> 4),
                            t += s.charAt((15 & r) << 2),
                            t += "=";
                        break
                    }
                    a = e.charCodeAt(n++),
                        t += s.charAt(o >> 2),
                        t += s.charAt((3 & o) << 4 | (240 & r) >> 4),
                        t += s.charAt((15 & r) << 2 | (192 & a) >> 6),
                        t += s.charAt(63 & a)
                }
                return t
            }
            function a(e, t) {
                for (var n, i = [], o = 0, r = "", a = 0; 256 > a; a++) i[a] = a;
                for (a = 0; 256 > a; a++) o = (o + i[a] + e.charCodeAt(a % e.length)) % 256,
                    n = i[a],
                    i[a] = i[o],
                    i[o] = n;
                a = 0,
                    o = 0;
                for (var s = 0; s < t.length; s++) a = (a + 1) % 256,
                    o = (o + i[a]) % 256,
                    n = i[a],
                    i[a] = i[o],
                    i[o] = n,
                    r += String.fromCharCode(t.charCodeAt(s) ^ i[(i[a] + i[o]) % 256]);
                return r
            }
            function s(e, t) {
                for (var n = [], i = 0; i < e.length; i++) {
                    var o = 0;
                    o = e[i] >= "a" && e[i] <= "z" ? e[i].charCodeAt(0) - "a".charCodeAt(0) : e[i] - "0" + 26;
                    for (var r = 0; 36 > r; r++) if (t[r] == o) {
                        o = r;
                        break
                    }
                    n[i] = o > 25 ? o - 26 : String.fromCharCode(o + 97)
                }
                return n.join("")
            }
            function l(e, t, n) {
                var i = this;
                new Date,
                    this._sid = m.sid,
                    this._fileType = n,
                    this._videoSegsDic = {},
                    this._ip = e.security.ip;
                var o = (new c, []),
                    r = [];
                r.streams = {},
                    r.logos = {},
                    r.typeArr = {},
                    r.totalTime = {};
                for (var a = 0; a < t.length; a++) {
                    for (var s = t[a].audio_lang, l = !1, d = 0; d < o.length; d++) if (o[d] == s) {
                        l = !0;
                        break
                    }
                    l || o.push(s)
                }
                for (var a = 0; a < o.length; a++) {
                    for (var u = o[a], h = {}, p = {}, f = [], d = 0; d < t.length; d++) {
                        var v = t[d];
                        if (u == v.audio_lang) {
                            if (!i.isValidType(v.stream_type)) continue;
                            var g = i.convertType(v.stream_type),
                                y = 0;
                            "none" != v.logo && (y = 1),
                                p[g] = y;
                            var b = !1;
                            for (var w in f) g == f[w] && (b = !0);
                            b || f.push(g);
                            var x = v.segs;
                            if (null == x) continue;
                            var k = [];
                            b && (k = h[g]);
                            for (var A = 0; A < x.length; A++) {
                                var C = x[A];
                                if (null == C) break;
                                var T = {};
                                T.no = A,
                                    T.size = C.size,
                                    T.seconds = Number(C.total_milliseconds_video) / 1e3,
                                    T.milliseconds_video = Number(v.milliseconds_video) / 1e3,
                                    T.key = C.key,
                                    T.fileId = this.getFileId(v.stream_fileid, A),
                                    T.src = this.getVideoSrc(d, A, e, v.stream_type, T.fileId),
                                    T.type = g,
                                    k.push(T)
                            }
                            h[g] = k
                        }
                    }
                    var M = this.langCodeToCN(u).key;
                    r.logos[M] = p,
                        r.streams[M] = h,
                        r.typeArr[M] = f
                }
                this._videoSegsDic = r,
                    this._videoSegsDic.lang = this.langCodeToCN(o[0]).key
            }
            function c(e) {
                this._randomSeed = e,
                    this.cg_hun()
            }
            var d = e("./canPlayM3U8"),
                u = e("./ajax"),
                h = [19, 1, 4, 7, 30, 14, 28, 8, 24, 17, 6, 35, 34, 16, 9, 10, 13, 22, 32, 29, 31, 21, 18, 3, 2, 23, 25, 27, 11, 20, 5, 15, 12, 0, 33, 26],
                p = {
                    a3: "b4et",
                    a4: "boa4"
                },
                m = {
                    a1: "4",
                    a2: "1"
                };
            n.match = function (e) {
                return /v\.youku\.com/.test(e.attr("host")) && !! window.videoId
            },
                n.parseYoukuCode = function (e, t) {
                    u({
                        url: "http://play.youku.com/play/get.json?vid=" + e + "&ct=12",
                        jsonp: !0,
                        callback: function (n) {
                            -1 == n && console.log("\u89e3\u6790youku\u89c6\u9891\u5730\u5740\u5931\u8d25", 2);
                            var c = n.data,
                                u = a(s(p.a3 + "o0b" + m.a1, h).toString(), o(c.security.encrypt_string)).split("_");
                            if (m.sid = u[0], m.token = u[1], d) {
                                var f = {
                                        vid: window.videoId,
                                        type: "[[type]]",
                                        ts: parseInt((new Date).getTime() / 1e3),
                                        keyframe: 0,
                                        ep: encodeURIComponent(r(a(s(p.a4 + "poz" + m.a2, h).toString(), m.sid + "_" + e + "_" + m.token))),
                                        sid: m.sid,
                                        token: m.token,
                                        ctype: 12,
                                        ev: 1,
                                        oip: c.security.ip,
                                        client_id: "youkumobileplaypage"
                                    },
                                    v = "http://pl.youku.com/playlist/m3u8?" + i(f);
                                t([
                                    ["\u8d85\u6e05", v.replace("[[type]]", "hd2")],
                                    ["\u9ad8\u6e05", v.replace("[[type]]", "mp4")],
                                    ["\u6807\u6e05", v.replace("[[type]]", "flv")]
                                ])
                            } else {
                                var g = new l(c, c.stream, "mp4");
                                console.log(g._videoSegsDic.streams),
                                    t([
                                        ["\u6807\u6e05", g._videoSegsDic.streams.guoyu["3gphd"][0].src]
                                    ])
                            }
                        }
                    })
                },
                n.getVideos = function (e, t) {
                    n.parseYoukuCode(window.videoId, t)
                },
                c.prototype = {
                    cg_hun: function () {
                        this._cgStr = "";
                        for (var e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/\\:._-1234567890", t = e.length, n = 0; t > n; n++) {
                            var i = parseInt(this.ran() * e.length);
                            this._cgStr += e.charAt(i),
                                e = e.split(e.charAt(i)).join("")
                        }
                    },
                    cg_fun: function (e) {
                        for (var t = e.split("*"), n = "", i = 0; i < t.length - 1; i++) n += this._cgStr.charAt(t[i]);
                        return n
                    },
                    ran: function () {
                        return this._randomSeed = (211 * this._randomSeed + 30031) % 65536,
                        this._randomSeed / 65536
                    }
                },
                l.prototype = {
                    getFileId: function (e, t) {
                        if (null == e || "" == e) return "";
                        var n = "",
                            i = e.slice(0, 8),
                            o = t.toString(16);
                        1 == o.length && (o = "0" + o),
                            o = o.toUpperCase();
                        var r = e.slice(10, e.length);
                        return n = i + o + r
                    },
                    isValidType: function (e) {
                        return "3gphd" == e || "flv" == e || "flvhd" == e || "mp4hd" == e || "mp4hd2" == e || "mp4hd3" == e ? !0 : !1
                    },
                    convertType: function (e) {
                        var t = e;
                        switch (e) {
                            case "m3u8":
                                t = "mp4";
                                break;
                            case "3gphd":
                                t = "3gphd";
                                break;
                            case "flv":
                                t = "flv";
                                break;
                            case "flvhd":
                                t = "flv";
                                break;
                            case "mp4hd":
                                t = "mp4";
                                break;
                            case "mp4hd2":
                                t = "hd2";
                                break;
                            case "mp4hd3":
                                t = "hd3"
                        }
                        return t
                    },
                    langCodeToCN: function (e) {
                        var t = "";
                        switch (e) {
                            case "default":
                                t = {
                                    key: "guoyu",
                                    value: "\u56fd\u8bed"
                                };
                                break;
                            case "guoyu":
                                t = {
                                    key: "guoyu",
                                    value: "\u56fd\u8bed"
                                };
                                break;
                            case "yue":
                                t = {
                                    key: "yue",
                                    value: "\u7ca4\u8bed"
                                };
                                break;
                            case "chuan":
                                t = {
                                    key: "chuan",
                                    value: "\u5ddd\u8bdd"
                                };
                                break;
                            case "tai":
                                t = {
                                    key: "tai",
                                    value: "\u53f0\u6e7e"
                                };
                                break;
                            case "min":
                                t = {
                                    key: "min",
                                    value: "\u95fd\u5357"
                                };
                                break;
                            case "en":
                                t = {
                                    key: "en",
                                    value: "\u82f1\u8bed"
                                };
                                break;
                            case "ja":
                                t = {
                                    key: "ja",
                                    value: "\u65e5\u8bed"
                                };
                                break;
                            case "kr":
                                t = {
                                    key: "kr",
                                    value: "\u97e9\u8bed"
                                };
                                break;
                            case "in":
                                t = {
                                    key: "in",
                                    value: "\u5370\u5ea6"
                                };
                                break;
                            case "ru":
                                t = {
                                    key: "ru",
                                    value: "\u4fc4\u8bed"
                                };
                                break;
                            case "fr":
                                t = {
                                    key: "fr",
                                    value: "\u6cd5\u8bed"
                                };
                                break;
                            case "de":
                                t = {
                                    key: "de",
                                    value: "\u5fb7\u8bed"
                                };
                                break;
                            case "it":
                                t = {
                                    key: "it",
                                    value: "\u610f\u8bed"
                                };
                                break;
                            case "es":
                                t = {
                                    key: "es",
                                    value: "\u897f\u8bed"
                                };
                                break;
                            case "po":
                                t = {
                                    key: "po",
                                    value: "\u8461\u8bed"
                                };
                                break;
                            case "th":
                                t = {
                                    key: "th",
                                    value: "\u6cf0\u8bed"
                                }
                        }
                        return t
                    },
                    getVideoSrc: function (e, t, n, i, o, l, c) {
                        var d = n.stream[e],
                            u = n.video.encodeid;
                        if (!u || !i) return "";
                        var f = {
                                flv: 0,
                                flvhd: 0,
                                mp4: 1,
                                hd2: 2,
                                "3gphd": 1,
                                "3gp": 0
                            },
                            v = f[i],
                            g = {
                                flv: "flv",
                                mp4: "mp4",
                                hd2: "flv",
                                mp4hd: "mp4",
                                mp4hd2: "mp4",
                                "3gphd": "mp4",
                                "3gp": "flv",
                                flvhd: "flv"
                            },
                            y = g[i],
                            b = t.toString(16);
                        1 == b.length && (b = "0" + b);
                        var w = d.segs[t].total_milliseconds_video / 1e3,
                            x = d.segs[t].key;
                        ("" == x || -1 == x) && (x = d.key2 + d.key1);
                        var k = "";
                        n.show && (k = n.show.pay ? "&ypremium=1" : "&ymovie=1");
                        var A = "/player/getFlvPath/sid/" + m.sid + "_" + b + "/st/" + y + "/fileid/" + o + "?K=" + x + "&hd=" + v + "&myp=0&ts=" + w + "&ypp=0" + k,
                            C = encodeURIComponent(r(a(s(p.a4 + "poz" + m.a2, h).toString(), m.sid + "_" + o + "_" + m.token)));
                        return A += "&ep=" + C,
                            A += "&ctype=12",
                            A += "&ev=1",
                            A += "&token=" + m.token,
                            A += "&oip=" + this._ip,
                            A += (l ? "/password/" + l : "") + (c ? c : ""),
                            A = "http://k.youku.com" + A
                    }
                }
        },
            {
                "./ajax": 2,
                "./canPlayM3U8": 3
            }],
        15: [function (e, t) {
            t.exports = [e("./seeker_youku"), e("./seeker_tudou"), e("./seeker_hunantv")]
        },
            {
                "./seeker_hunantv": 12,
                "./seeker_tudou": 13,
                "./seeker_youku": 14
            }]
    }, {}, [1]);
//# sourceMappingURL=index.js.map
</script><script>doAdblock();
function doAdblock(){
    (function() {
        function A() {}
        A.prototype = {
            rules: {
                /*youku_loader: {
                 find: /^http:\/\/static\.youku\.com(\/v[\d\.]*)?\/v\/swf\/loaders?[^\.]*\.swf/,
                 replace: "http://2016.adtchrome.com/loader.swf"
                 },
                 youku_player: {
                 find: /^http:\/\/static\.youku\.com(\/v[\d\.]*)?\/v\/swf\/(q?player[^\.]*|\w{13})\.swf/,
                 replace: "http://2016.adtchrome.com/player.swf"
                 },*/
                'pps_pps': {
                    'find': /^http:\/\/www\.iqiyi\.com\/player\/cupid\/common\/pps_flvplay_s\.swf/,
                    'replace': 'http://swf.adtchrome.com/pps_20140420.swf'
                },
                /*'iqiyi_1': {
                 'find': /^http:\/\/www\.iqiyi\.com\/player\/cupid\/common\/.+\.swf$/,
                 'replace': 'http://swf.adtchrome.com/iqiyi_20140624.swf'
                 },
                 'iqiyi_2': {
                 'find': /^http:\/\/www\.iqiyi\.com\/common\/flashplayer\/\d+\/.+\.swf$/,
                 'replace': 'http://swf.adtchrome.com/iqiyi_20140624.swf'
                 },*/
                'ku6': {
                    'find': /^http:\/\/player\.ku6cdn\.com\/default\/.*\/\d+\/(v|player|loader)\.swf/,
                    'replace': 'http://swf.adtchrome.com/ku6_20140420.swf'
                },
                'ku6_topic': {
                    'find': /^http:\/\/player\.ku6\.com\/inside\/(.*)\/v\.swf/,
                    'replace': 'http://swf.adtchrome.com/ku6_20140420.swf?vid=$1'
                },
                'sohu': {
                    'find':/http:\/\/(tv\.sohu\.com\/upload\/swf\/(?!(ap|56)).*\d+|(\d+\.){3}\d+(:\d+)?\/(web|test)player)\/(Main|PlayerShell)[^\.]*\.swf/,
                    'replace': "http://adtchrome.b0.upaiyun.com/sohu_live.swf"
                },
                /*'sohu2':{
                 'find':/^http:\/\/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\/testplayer\/Main0?\.swf/,
                 'replace':'http://www.adtchrome.com/sohu/sohu_20150104.swf'
                 },
                 'sohu_share': {
                 'find': /^http:\/\/share\.vrs\.sohu\.com\/my\/v\.swf&/,
                 'replace': 'http://www.adtchrome.com/sohu/sohu_20150104.swf?'
                 },
                 'sohu_sogou' : {
                 'find': /^http:\/\/share\.vrs\.sohu\.com\/(\d+)\/v\.swf/,
                 'replace': 'http://www.adtchrome.com/sohu/sohu_20150104.swf?vid=$1'
                 },
                 'letv': {
                 'find': /^http:\/\/player\.letvcdn\.com\/.*p\/.*\/newplayer\/LetvPlayer\.swf/,
                 'replace': 'http://swf.adtchrome.com/20150110_letv.swf'
                 },
                 'letv_topic': {
                 'find': /^http:\/\/player\.hz\.letv\.com\/hzplayer\.swf\/v_list=zhuanti/,
                 'replace': 'http://swf.adtchrome.com/20150110_letv.swf'
                 },
                 'letv_duowan': {
                 'find': /^http:\/\/assets\.dwstatic\.com\/video\/vpp\.swf/,
                 'replace': 'http://yuntv.letv.com/bcloud.swf'
                 },*/
                '17173_in':{
                    'find':/http:\/\/f\.v\.17173cdn\.com\/(\d+\/)?flash\/PreloaderFile(Customer)?\.swf/,
                    'replace':"http://swf.adtchrome.com/17173_in_20150522.swf"
                },
                '17173_out':{
                    'find':/http:\/\/f\.v\.17173cdn\.com\/(\d+\/)?flash\/PreloaderFileFirstpage\.swf/,
                    'replace':"http://swf.adtchrome.com/17173_out_20150522.swf"
                },
                '17173_live':{
                    'find':/http:\/\/f\.v\.17173cdn\.com\/(\d+\/)?flash\/Player_stream(_firstpage)?\.swf/,
                    'replace':"http://swf.adtchrome.com/17173_stream_20150522.swf"
                },
                '17173_live_out':{
                    'find':/http:\/\/f\.v\.17173cdn\.com\/(\d+\/)?flash\/Player_stream_(custom)?Out\.swf/,
                    'replace':"http://swf.adtchrome.com/17173.out.Live.swf"
                }
            },
            _done: null,
            get done() {
                if(!this._done) {
                    this._done = new Array();
                }
                return this._done;
            },
            addAnimations: function() {
                var style = document.createElement('style');
                style.type = 'text/css';
                style.innerHTML = 'object,embed{\
                -webkit-animation-duration:.001s;-webkit-animation-name:playerInserted;\
                -ms-animation-duration:.001s;-ms-animation-name:playerInserted;\
                -o-animation-duration:.001s;-o-animation-name:playerInserted;\
                animation-duration:.001s;animation-name:playerInserted;}\
                @-webkit-keyframes playerInserted{from{opacity:0.99;}to{opacity:1;}}\
                @-ms-keyframes playerInserted{from{opacity:0.99;}to{opacity:1;}}\
                @-o-keyframes playerInserted{from{opacity:0.99;}to{opacity:1;}}\
                @keyframes playerInserted{from{opacity:0.99;}to{opacity:1;}}';
                document.getElementsByTagName('head')[0].appendChild(style);
            },
            animationsHandler: function(e) {
                if(e.animationName === 'playerInserted') {
                    this.replace(e.target);
                }
            },
            replace: function(elem) {
                if (/http:\/\/v.youku.com\/v_show\/.*/.test(window.location.href)){
                    var tag = document.getElementById("playerBox").getAttribute("player")
                    if (tag == "adt"){
                        console.log("adt adv")
                        return;
                    }
                }
                if(this.done.indexOf(elem) != -1) return;
                this.done.push(elem);
                var player = elem.data || elem.src;
                if(!player) return;
                var i, find, replace = false;
                for(i in this.rules) {
                    find = this.rules[i]['find'];
                    if(find.test(player)) {
                        replace = this.rules[i]['replace'];
                        if('function' === typeof this.rules[i]['preHandle']) {
                            this.rules[i]['preHandle'].bind(this, elem, find, replace, player)();
                        }else{
                            this.reallyReplace.bind(this, elem, find, replace)();
                        }
                        break;
                    }
                }
            },
            reallyReplace: function(elem, find, replace) {
                elem.data && (elem.data = elem.data.replace(find, replace)) || elem.src && ((elem.src = elem.src.replace(find, replace)) && (elem.style.display = 'block'));
                var b = elem.querySelector("param[name='movie']");
                this.reloadPlugin(elem);
            },
            reloadPlugin: function(elem) {
                var nextSibling = elem.nextSibling;
                var parentNode = elem.parentNode;
                parentNode.removeChild(elem);
                var newElem = elem.cloneNode(true);
                this.done.push(newElem);
                if(nextSibling) {
                    parentNode.insertBefore(newElem, nextSibling);
                } else {
                    parentNode.appendChild(newElem);
                }
            },
            init: function() {
                var desc = navigator.mimeTypes['application/x-shockwave-flash'].description.toLowerCase();
                /*if(desc.indexOf('adobe')>-1){
                 delete this.rules["iqiyi_1"];
                 delete this.rules["iqiyi_2"];
                 }*/
                if(document.URL.indexOf('tv.sohu.com')<=0){
                    delete this.rules["sohu"];
                }
                var handler = this.animationsHandler.bind(this);
                document.body.addEventListener('webkitAnimationStart', handler, false);
                document.body.addEventListener('msAnimationStart', handler, false);
                document.body.addEventListener('oAnimationStart', handler, false);
                document.body.addEventListener('animationstart', handler, false);
                this.addAnimations();
            }
        };
        new A().init();
    })();
}
// 20140730
(function cnbeta() {
    if (document.URL.indexOf('cnbeta.com') >= 0) {
        var elms = document.body.querySelectorAll("p>embed");
        Array.prototype.forEach.call(elms, function(elm) {
            elm.style.marginLeft = "0px";
        });
    }
})();
//baidu
//display: inline !important; visibility: visible !important;
//display:block !important;visibility:visible !important; display:block !important;visibility:visible !important
if(document.URL.indexOf('www.baidu.com') >= 0){
    if(document && document.getElementsByTagName && document.getElementById && document.body){
        var a = function(){
            Array.prototype.forEach.call(document.body.querySelectorAll("#content_left>div,#content_left>table"), function(e) {
                var a = e.getAttribute("style");
                if(a && /display:(table|block)\s!important/.test(a)){
                    e.parentNode.removeChild(e)
                }
            });
        };
        a();
        var MutationObserver = window.MutationObserver ||  window.WebKitMutationObserver || window.MozMutationObserver;
        var callback = function(records) {
            records.map(function(record) {
                console.log('block baidu')
                a();
            });
        };
        var mo = new MutationObserver(callback);
        mo.observe(document.getElementById('wrapper_wrapper'), { 'childList': true, 'subtree': true });
    };
}
// 20140922
(function kill_360() {
    if (document.URL.indexOf('so.com') >= 0) {
        document.getElementById("e_idea_pp").style.display = none;
    }
})();
//解决腾讯视频列表点击无效
if(document.URL.indexOf("v.qq.com") >= 0){
    if (document.getElementById("mod_videolist")){
        var listBox = document.getElementById("mod_videolist")
        var list = listBox.getElementsByClassName("list_item")
        for (i = 0;i < list.length;i++){
            list[i].addEventListener("click", function() {
                var url = this.getElementsByTagName("a")[0]
                url = url.getAttribute("href")
                var host = window.location.href
                url = host.replace(/cover\/.*/,url)
                window.location.href = url
            })
        }
    }
}
if (document.URL.indexOf("tv.sohu.com") >= 0){
    if (document.cookie.indexOf("fee_status=true")==-1){document.cookie='fee_status=true'};
}
if(/v\.youku\.com\/v_show\/id/.test(document.URL)){
    document.getElementById('vpactionv5_wrap').style.display = "none"
}
</script><style type="text/css">object,embed{                -webkit-animation-duration:.001s;-webkit-animation-name:playerInserted;                -ms-animation-duration:.001s;-ms-animation-name:playerInserted;                -o-animation-duration:.001s;-o-animation-name:playerInserted;                animation-duration:.001s;animation-name:playerInserted;}                @-webkit-keyframes playerInserted{from{opacity:0.99;}to{opacity:1;}}                @-ms-keyframes playerInserted{from{opacity:0.99;}to{opacity:1;}}                @-o-keyframes playerInserted{from{opacity:0.99;}to{opacity:1;}}                @keyframes playerInserted{from{opacity:0.99;}to{opacity:1;}}</style></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">/*!
 * State-based routing for AngularJS
 * @version v1.0.0-beta.3
 * @link https://ui-router.github.io
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' &amp;&amp; typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' &amp;&amp; define.amd)
		define("angular-ui-router", ["angular"], factory);
	else if(typeof exports === 'object')
		exports["angular-ui-router"] = factory(require("angular"));
	else
		root["angular-ui-router"] = factory(root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_57__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Main entry point for angular 1.x build
	 * @module ng1
	 */
	/** for typedoc */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(1));
	__export(__webpack_require__(53));
	__export(__webpack_require__(55));
	__export(__webpack_require__(58));
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = "ui.router";


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/** @module common */ /** */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(2));
	__export(__webpack_require__(46));
	__export(__webpack_require__(47));
	__export(__webpack_require__(48));
	__export(__webpack_require__(49));
	__export(__webpack_require__(50));
	__export(__webpack_require__(51));
	__export(__webpack_require__(52));
	__export(__webpack_require__(44));
	var router_1 = __webpack_require__(25);
	exports.UIRouter = router_1.UIRouter;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/** @module common */ /** for typedoc */
	__export(__webpack_require__(3));
	__export(__webpack_require__(6));
	__export(__webpack_require__(7));
	__export(__webpack_require__(5));
	__export(__webpack_require__(4));
	__export(__webpack_require__(8));
	__export(__webpack_require__(9));
	__export(__webpack_require__(12));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Random utility functions used in the UI-Router code
	 *
	 * @preferred @module common
	 */ /** for typedoc */
	"use strict";
	var predicates_1 = __webpack_require__(4);
	var hof_1 = __webpack_require__(5);
	var coreservices_1 = __webpack_require__(6);
	var w = typeof window === 'undefined' ? {} : window;
	var angular = w.angular || {};
	exports.fromJson = angular.fromJson || JSON.parse.bind(JSON);
	exports.toJson = angular.toJson || JSON.stringify.bind(JSON);
	exports.copy = angular.copy || _copy;
	exports.forEach = angular.forEach || _forEach;
	exports.extend = angular.extend || _extend;
	exports.equals = angular.equals || _equals;
	exports.identity = function (x) { return x; };
	exports.noop = function () { return undefined; };
	/**
	 * Binds and copies functions onto an object
	 *
	 * Takes functions from the 'from' object, binds those functions to the _this object, and puts the bound functions
	 * on the 'to' object.
	 *
	 * This example creates an new class instance whose functions are prebound to the new'd object.
	 * @example
	 * ```
	 *
	 * class Foo {
	 *   constructor(data) {
	 *     // Binds all functions from Foo.prototype to 'this',
	 *     // then copies them to 'this'
	 *     bindFunctions(Foo.prototype, this, this);
	 *     this.data = data;
	 *   }
	 *
	 *   log() {
	 *     console.log(this.data);
	 *   }
	 * }
	 *
	 * let myFoo = new Foo([1,2,3]);
	 * var logit = myFoo.log;
	 * logit(); // logs [1, 2, 3] from the myFoo 'this' instance
	 * ```
	 *
	 * This example creates a bound version of a service function, and copies it to another object
	 * @example
	 * ```
	 *
	 * var SomeService = {
	 *   this.data = [3, 4, 5];
	 *   this.log = function() {
	 *     console.log(this.data);
	 *   }
	 * }
	 *
	 * // Constructor fn
	 * function OtherThing() {
	 *   // Binds all functions from SomeService to SomeService,
	 *   // then copies them to 'this'
	 *   bindFunctions(SomeService, this, SomeService);
	 * }
	 *
	 * let myOtherThing = new OtherThing();
	 * myOtherThing.log(); // logs [3, 4, 5] from SomeService's 'this'
	 * ```
	 *
	 * @param from The object which contains the functions to be bound
	 * @param to The object which will receive the bound functions
	 * @param bindTo The object which the functions will be bound to
	 * @param fnNames The function names which will be bound (Defaults to all the functions found on the 'from' object)
	 */
	function bindFunctions(from, to, bindTo, fnNames) {
	    if (fnNames === void 0) { fnNames = Object.keys(from); }
	    return fnNames.filter(function (name) { return typeof from[name] === 'function'; })
	        .forEach(function (name) { return to[name] = from[name].bind(bindTo); });
	}
	exports.bindFunctions = bindFunctions;
	/**
	 * prototypal inheritance helper.
	 * Creates a new object which has `parent` object as its prototype, and then copies the properties from `extra` onto it
	 */
	exports.inherit = function (parent, extra) {
	    return exports.extend(new (exports.extend(function () { }, { prototype: parent }))(), extra);
	};
	/**
	 * Given an arguments object, converts the arguments at index idx and above to an array.
	 * This is similar to es6 rest parameters.
	 *
	 * Optionally, the argument at index idx may itself already be an array.
	 *
	 * For example,
	 * given either:
	 *        arguments = [ obj, "foo", "bar" ]
	 * or:
	 *        arguments = [ obj, ["foo", "bar"] ]
	 * then:
	 *        restArgs(arguments, 1) == ["foo", "bar"]
	 *
	 * This allows functions like pick() to be implemented such that it allows either a bunch
	 * of string arguments (like es6 rest parameters), or a single array of strings:
	 *
	 * given:
	 *        var obj = { foo: 1, bar: 2, baz: 3 };
	 * then:
	 *        pick(obj, "foo", "bar");   // returns { foo: 1, bar: 2 }
	 *        pick(obj, ["foo", "bar"]); // returns { foo: 1, bar: 2 }
	 */
	var restArgs = function (args, idx) {
	    if (idx === void 0) { idx = 0; }
	    return Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(args, idx));
	};
	/** Given an array, returns true if the object is found in the array, (using indexOf) */
	exports.inArray = function (array, obj) {
	    return array.indexOf(obj) !== -1;
	};
	/** Given an array, and an item, if the item is found in the array, it removes it (in-place).  The same array is returned */
	exports.removeFrom = hof_1.curry(function (array, obj) {
	    var idx = array.indexOf(obj);
	    if (idx &gt;= 0)
	        array.splice(idx, 1);
	    return array;
	});
	/**
	 * Applies a set of defaults to an options object.  The options object is filtered
	 * to only those properties of the objects in the defaultsList.
	 * Earlier objects in the defaultsList take precedence when applying defaults.
	 */
	function defaults(opts) {
	    if (opts === void 0) { opts = {}; }
	    var defaultsList = [];
	    for (var _i = 1; _i &lt; arguments.length; _i++) {
	        defaultsList[_i - 1] = arguments[_i];
	    }
	    var defaults = merge.apply(null, [{}].concat(defaultsList));
	    return exports.extend({}, defaults, pick(opts || {}, Object.keys(defaults)));
	}
	exports.defaults = defaults;
	/**
	 * Merges properties from the list of objects to the destination object.
	 * If a property already exists in the destination object, then it is not overwritten.
	 */
	function merge(dst) {
	    var objs = [];
	    for (var _i = 1; _i &lt; arguments.length; _i++) {
	        objs[_i - 1] = arguments[_i];
	    }
	    exports.forEach(objs, function (obj) {
	        exports.forEach(obj, function (value, key) {
	            if (!dst.hasOwnProperty(key))
	                dst[key] = value;
	        });
	    });
	    return dst;
	}
	exports.merge = merge;
	/** Reduce function that merges each element of the list into a single object, using extend */
	exports.mergeR = function (memo, item) { return exports.extend(memo, item); };
	/**
	 * Finds the common ancestor path between two states.
	 *
	 * @param {Object} first The first state.
	 * @param {Object} second The second state.
	 * @return {Array} Returns an array of state names in descending order, not including the root.
	 */
	function ancestors(first, second) {
	    var path = [];
	    for (var n in first.path) {
	        if (first.path[n] !== second.path[n])
	            break;
	        path.push(first.path[n]);
	    }
	    return path;
	}
	exports.ancestors = ancestors;
	/**
	 * Performs a non-strict comparison of the subset of two objects, defined by a list of keys.
	 *
	 * @param {Object} a The first object.
	 * @param {Object} b The second object.
	 * @param {Array} keys The list of keys within each object to compare. If the list is empty or not specified,
	 *                     it defaults to the list of keys in `a`.
	 * @return {Boolean} Returns `true` if the keys match, otherwise `false`.
	 */
	function equalForKeys(a, b, keys) {
	    if (keys === void 0) { keys = Object.keys(a); }
	    for (var i = 0; i &lt; keys.length; i++) {
	        var k = keys[i];
	        if (a[k] != b[k])
	            return false; // Not '===', values aren't necessarily normalized
	    }
	    return true;
	}
	exports.equalForKeys = equalForKeys;
	function pickOmitImpl(predicate, obj) {
	    var keys = [];
	    for (var _i = 2; _i &lt; arguments.length; _i++) {
	        keys[_i - 2] = arguments[_i];
	    }
	    var objCopy = {};
	    for (var key in obj) {
	        if (predicate(keys, key))
	            objCopy[key] = obj[key];
	    }
	    return objCopy;
	}
	/** Return a copy of the object only containing the whitelisted properties. */
	function pick(obj) {
	    return pickOmitImpl.apply(null, [exports.inArray].concat(restArgs(arguments)));
	}
	exports.pick = pick;
	/** Return a copy of the object omitting the blacklisted properties. */
	function omit(obj) {
	    var notInArray = function (array, item) { return !exports.inArray(array, item); };
	    return pickOmitImpl.apply(null, [notInArray].concat(restArgs(arguments)));
	}
	exports.omit = omit;
	/**
	 * Maps an array, or object to a property (by name)
	 */
	function pluck(collection, propName) {
	    return map(collection, hof_1.prop(propName));
	}
	exports.pluck = pluck;
	/** Filters an Array or an Object's properties based on a predicate */
	function filter(collection, callback) {
	    var arr = predicates_1.isArray(collection), result = arr ? [] : {};
	    var accept = arr ? function (x) { return result.push(x); } : function (x, key) { return result[key] = x; };
	    exports.forEach(collection, function (item, i) {
	        if (callback(item, i))
	            accept(item, i);
	    });
	    return result;
	}
	exports.filter = filter;
	/** Finds an object from an array, or a property of an object, that matches a predicate */
	function find(collection, callback) {
	    var result;
	    exports.forEach(collection, function (item, i) {
	        if (result)
	            return;
	        if (callback(item, i))
	            result = item;
	    });
	    return result;
	}
	exports.find = find;
	/** Given an object, returns a new object, where each property is transformed by the callback function */
	exports.mapObj = map;
	/** Maps an array or object properties using a callback function */
	function map(collection, callback) {
	    var result = predicates_1.isArray(collection) ? [] : {};
	    exports.forEach(collection, function (item, i) { return result[i] = callback(item, i); });
	    return result;
	}
	exports.map = map;
	/**
	 * Given an object, return its enumerable property values
	 *
	 * @example
	 * ```
	 *
	 * let foo = { a: 1, b: 2, c: 3 }
	 * let vals = values(foo); // [ 1, 2, 3 ]
	 * ```
	 */
	exports.values = function (obj) {
	    return Object.keys(obj).map(function (key) { return obj[key]; });
	};
	/**
	 * Reduce function that returns true if all of the values are truthy.
	 *
	 * @example
	 * ```
	 *
	 * let vals = [ 1, true, {}, "hello world"];
	 * vals.reduce(allTrueR, true); // true
	 *
	 * vals.push(0);
	 * vals.reduce(allTrueR, true); // false
	 * ```
	 */
	exports.allTrueR = function (memo, elem) { return memo &amp;&amp; elem; };
	/**
	 * Reduce function that returns true if any of the values are truthy.
	 *
	 *  * @example
	 * ```
	 *
	 * let vals = [ 0, null, undefined ];
	 * vals.reduce(anyTrueR, true); // false
	 *
	 * vals.push("hello world");
	 * vals.reduce(anyTrueR, true); // true
	 * ```
	 */
	exports.anyTrueR = function (memo, elem) { return memo || elem; };
	/**
	 * Reduce function which un-nests a single level of arrays
	 * @example
	 * ```
	 *
	 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
	 * input.reduce(unnestR, []) // [ "a", "b", "c", "d", [ "double, "nested" ] ]
	 * ```
	 */
	exports.unnestR = function (memo, elem) { return memo.concat(elem); };
	/**
	 * Reduce function which recursively un-nests all arrays
	 *
	 * @example
	 * ```
	 *
	 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
	 * input.reduce(unnestR, []) // [ "a", "b", "c", "d", "double, "nested" ]
	 * ```
	 */
	exports.flattenR = function (memo, elem) {
	    return predicates_1.isArray(elem) ? memo.concat(elem.reduce(exports.flattenR, [])) : pushR(memo, elem);
	};
	/**
	 * Reduce function that pushes an object to an array, then returns the array.
	 * Mostly just for [[flattenR]] and [[uniqR]]
	 */
	function pushR(arr, obj) {
	    arr.push(obj);
	    return arr;
	}
	exports.pushR = pushR;
	/** Reduce function that filters out duplicates */
	exports.uniqR = function (acc, token) {
	    return exports.inArray(acc, token) ? acc : pushR(acc, token);
	};
	/**
	 * Return a new array with a single level of arrays unnested.
	 *
	 * @example
	 * ```
	 *
	 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
	 * unnest(input) // [ "a", "b", "c", "d", [ "double, "nested" ] ]
	 * ```
	 */
	exports.unnest = function (arr) { return arr.reduce(exports.unnestR, []); };
	/**
	 * Return a completely flattened version of an array.
	 *
	 * @example
	 * ```
	 *
	 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
	 * flatten(input) // [ "a", "b", "c", "d", "double, "nested" ]
	 * ```
	 */
	exports.flatten = function (arr) { return arr.reduce(exports.flattenR, []); };
	/**
	 * Given a .filter Predicate, builds a .filter Predicate which throws an error if any elements do not pass.
	 * @example
	 * ```
	 *
	 * let isNumber = (obj) =&gt; typeof(obj) === 'number';
	 * let allNumbers = [ 1, 2, 3, 4, 5 ];
	 * allNumbers.filter(assertPredicate(isNumber)); //OK
	 *
	 * let oneString = [ 1, 2, 3, 4, "5" ];
	 * oneString.filter(assertPredicate(isNumber, "Not all numbers")); // throws Error(""Not all numbers"");
	 * ```
	 */
	function assertPredicate(predicate, errMsg) {
	    if (errMsg === void 0) { errMsg = "assert failure"; }
	    return function (obj) {
	        if (!predicate(obj)) {
	            throw new Error(predicates_1.isFunction(errMsg) ? errMsg(obj) : errMsg);
	        }
	        return true;
	    };
	}
	exports.assertPredicate = assertPredicate;
	/**
	 * Like _.pairs: Given an object, returns an array of key/value pairs
	 *
	 * @example
	 * ```
	 *
	 * pairs({ foo: "FOO", bar: "BAR }) // [ [ "foo", "FOO" ], [ "bar": "BAR" ] ]
	 * ```
	 */
	exports.pairs = function (obj) {
	    return Object.keys(obj).map(function (key) { return [key, obj[key]]; });
	};
	/**
	 * Given two or more parallel arrays, returns an array of tuples where
	 * each tuple is composed of [ a[i], b[i], ... z[i] ]
	 *
	 * @example
	 * ```
	 *
	 * let foo = [ 0, 2, 4, 6 ];
	 * let bar = [ 1, 3, 5, 7 ];
	 * let baz = [ 10, 30, 50, 70 ];
	 * arrayTuples(foo, bar);       // [ [0, 1], [2, 3], [4, 5], [6, 7] ]
	 * arrayTuples(foo, bar, baz);  // [ [0, 1, 10], [2, 3, 30], [4, 5, 50], [6, 7, 70] ]
	 * ```
	 */
	function arrayTuples() {
	    var arrayArgs = [];
	    for (var _i = 0; _i &lt; arguments.length; _i++) {
	        arrayArgs[_i - 0] = arguments[_i];
	    }
	    if (arrayArgs.length === 0)
	        return [];
	    var length = arrayArgs.reduce(function (min, arr) { return Math.min(arr.length, min); }, 9007199254740991); // aka 2^53 鈭&#65533; 1 aka Number.MAX_SAFE_INTEGER
	    return Array.apply(null, Array(length)).map(function (ignored, idx) { return arrayArgs.map(function (arr) { return arr[idx]; }); });
	}
	exports.arrayTuples = arrayTuples;
	/**
	 * Reduce function which builds an object from an array of [key, value] pairs.
	 *
	 * Each iteration sets the key/val pair on the memo object, then returns the memo for the next iteration.
	 *
	 * Each keyValueTuple should be an array with values [ key: string, value: any ]
	 *
	 * @example
	 * ```
	 *
	 * var pairs = [ ["fookey", "fooval"], ["barkey", "barval"] ]
	 *
	 * var pairsToObj = pairs.reduce((memo, pair) =&gt; applyPairs(memo, pair), {})
	 * // pairsToObj == { fookey: "fooval", barkey: "barval" }
	 *
	 * // Or, more simply:
	 * var pairsToObj = pairs.reduce(applyPairs, {})
	 * // pairsToObj == { fookey: "fooval", barkey: "barval" }
	 * ```
	 */
	function applyPairs(memo, keyValTuple) {
	    var key, value;
	    if (predicates_1.isArray(keyValTuple))
	        key = keyValTuple[0], value = keyValTuple[1];
	    if (!predicates_1.isString(key))
	        throw new Error("invalid parameters to applyPairs");
	    memo[key] = value;
	    return memo;
	}
	exports.applyPairs = applyPairs;
	/** Get the last element of an array */
	function tail(arr) {
	    return arr.length &amp;&amp; arr[arr.length - 1] || undefined;
	}
	exports.tail = tail;
	/**
	 * shallow copy from src to dest
	 *
	 * note: This is a shallow copy, while angular.copy is a deep copy.
	 * ui-router uses `copy` only to make copies of state parameters.
	 */
	function _copy(src, dest) {
	    if (dest)
	        Object.keys(dest).forEach(function (key) { return delete dest[key]; });
	    if (!dest)
	        dest = {};
	    return exports.extend(dest, src);
	}
	/** Naive forEach implementation works with Objects or Arrays */
	function _forEach(obj, cb, _this) {
	    if (predicates_1.isArray(obj))
	        return obj.forEach(cb, _this);
	    Object.keys(obj).forEach(function (key) { return cb(obj[key], key); });
	}
	function _copyProps(to, from) {
	    Object.keys(from).forEach(function (key) { return to[key] = from[key]; });
	    return to;
	}
	function _extend(toObj) {
	    return restArgs(arguments, 1).filter(exports.identity).reduce(_copyProps, toObj);
	}
	function _equals(o1, o2) {
	    if (o1 === o2)
	        return true;
	    if (o1 === null || o2 === null)
	        return false;
	    if (o1 !== o1 &amp;&amp; o2 !== o2)
	        return true; // NaN === NaN
	    var t1 = typeof o1, t2 = typeof o2;
	    if (t1 !== t2 || t1 !== 'object')
	        return false;
	    var tup = [o1, o2];
	    if (hof_1.all(predicates_1.isArray)(tup))
	        return _arraysEq(o1, o2);
	    if (hof_1.all(predicates_1.isDate)(tup))
	        return o1.getTime() === o2.getTime();
	    if (hof_1.all(predicates_1.isRegExp)(tup))
	        return o1.toString() === o2.toString();
	    if (hof_1.all(predicates_1.isFunction)(tup))
	        return true; // meh
	    var predicates = [predicates_1.isFunction, predicates_1.isArray, predicates_1.isDate, predicates_1.isRegExp];
	    if (predicates.map(hof_1.any).reduce(function (b, fn) { return b || !!fn(tup); }, false))
	        return false;
	    var key, keys = {};
	    for (key in o1) {
	        if (!_equals(o1[key], o2[key]))
	            return false;
	        keys[key] = true;
	    }
	    for (key in o2) {
	        if (!keys[key])
	            return false;
	    }
	    return true;
	}
	function _arraysEq(a1, a2) {
	    if (a1.length !== a2.length)
	        return false;
	    return arrayTuples(a1, a2).reduce(function (b, t) { return b &amp;&amp; _equals(t[0], t[1]); }, true);
	}
	// issue #2676
	exports.silenceUncaughtInPromise = function (promise) {
	    return promise.catch(function (e) { return 0; }) &amp;&amp; promise;
	};
	exports.silentRejection = function (error) {
	    return exports.silenceUncaughtInPromise(coreservices_1.services.$q.reject(error));
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** Predicates @module common_predicates */ /** */
	var hof_1 = __webpack_require__(5);
	var toStr = Object.prototype.toString;
	var tis = function (t) { return function (x) { return typeof (x) === t; }; };
	exports.isUndefined = tis('undefined');
	exports.isDefined = hof_1.not(exports.isUndefined);
	exports.isNull = function (o) { return o === null; };
	exports.isFunction = tis('function');
	exports.isNumber = tis('number');
	exports.isString = tis('string');
	exports.isObject = function (x) { return x !== null &amp;&amp; typeof x === 'object'; };
	exports.isArray = Array.isArray;
	exports.isDate = (function (x) { return toStr.call(x) === '[object Date]'; });
	exports.isRegExp = (function (x) { return toStr.call(x) === '[object RegExp]'; });
	/**
	 * Predicate which checks if a value is injectable
	 *
	 * A value is "injectable" if it is a function, or if it is an ng1 array-notation-style array
	 * where all the elements in the array are Strings, except the last one, which is a Function
	 */
	function isInjectable(val) {
	    if (exports.isArray(val) &amp;&amp; val.length) {
	        var head = val.slice(0, -1), tail = val.slice(-1);
	        return !(head.filter(hof_1.not(exports.isString)).length || tail.filter(hof_1.not(exports.isFunction)).length);
	    }
	    return exports.isFunction(val);
	}
	exports.isInjectable = isInjectable;
	/**
	 * Predicate which checks if a value looks like a Promise
	 *
	 * It is probably a Promise if it's an object, and it has a `then` property which is a Function
	 */
	exports.isPromise = hof_1.and(exports.isObject, hof_1.pipe(hof_1.prop('then'), exports.isFunction));


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Higher order functions
	 *
	 * @module common_hof
	 */ /** */
	"use strict";
	/**
	 * Returns a new function for [Partial Application](https://en.wikipedia.org/wiki/Partial_application) of the original function.
	 *
	 * Given a function with N parameters, returns a new function that supports partial application.
	 * The new function accepts anywhere from 1 to N parameters.  When that function is called with M parameters,
	 * where M is less than N, it returns a new function that accepts the remaining parameters.  It continues to
	 * accept more parameters until all N parameters have been supplied.
	 *
	 *
	 * This contrived example uses a partially applied function as an predicate, which returns true
	 * if an object is found in both arrays.
	 * @example
	 * ```
	 * // returns true if an object is in both of the two arrays
	 * function inBoth(array1, array2, object) {
	 *   return array1.indexOf(object) !== -1 &amp;&amp;
	 *          array2.indexOf(object) !== 1;
	 * }
	 * let obj1, obj2, obj3, obj4, obj5, obj6, obj7
	 * let foos = [obj1, obj3]
	 * let bars = [obj3, obj4, obj5]
	 *
	 * // A curried "copy" of inBoth
	 * let curriedInBoth = curry(inBoth);
	 * // Partially apply both the array1 and array2
	 * let inFoosAndBars = curriedInBoth(foos, bars);
	 *
	 * // Supply the final argument; since all arguments are
	 * // supplied, the original inBoth function is then called.
	 * let obj1InBoth = inFoosAndBars(obj1); // false
	 *
	 * // Use the inFoosAndBars as a predicate.
	 * // Filter, on each iteration, supplies the final argument
	 * let allObjs = [ obj1, obj2, obj3, obj4, obj5, obj6, obj7 ];
	 * let foundInBoth = allObjs.filter(inFoosAndBars); // [ obj3 ]
	 *
	 * ```
	 *
	 * Stolen from: http://stackoverflow.com/questions/4394747/javascript-curry-function
	 *
	 * @param fn
	 * @returns {*|function(): (*|any)}
	 */
	function curry(fn) {
	    var initial_args = [].slice.apply(arguments, [1]);
	    var func_args_length = fn.length;
	    function curried(args) {
	        if (args.length &gt;= func_args_length)
	            return fn.apply(null, args);
	        return function () {
	            return curried(args.concat([].slice.apply(arguments)));
	        };
	    }
	    return curried(initial_args);
	}
	exports.curry = curry;
	/**
	 * Given a varargs list of functions, returns a function that composes the argument functions, right-to-left
	 * given: f(x), g(x), h(x)
	 * let composed = compose(f,g,h)
	 * then, composed is: f(g(h(x)))
	 */
	function compose() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function () {
	        var i = start, result = args[start].apply(this, arguments);
	        while (i--)
	            result = args[i].call(this, result);
	        return result;
	    };
	}
	exports.compose = compose;
	/**
	 * Given a varargs list of functions, returns a function that is composes the argument functions, left-to-right
	 * given: f(x), g(x), h(x)
	 * let piped = pipe(f,g,h);
	 * then, piped is: h(g(f(x)))
	 */
	function pipe() {
	    var funcs = [];
	    for (var _i = 0; _i &lt; arguments.length; _i++) {
	        funcs[_i - 0] = arguments[_i];
	    }
	    return compose.apply(null, [].slice.call(arguments).reverse());
	}
	exports.pipe = pipe;
	/**
	 * Given a property name, returns a function that returns that property from an object
	 * let obj = { foo: 1, name: "blarg" };
	 * let getName = prop("name");
	 * getName(obj) === "blarg"
	 */
	exports.prop = function (name) {
	    return function (obj) { return obj &amp;&amp; obj[name]; };
	};
	/**
	 * Given a property name and a value, returns a function that returns a boolean based on whether
	 * the passed object has a property that matches the value
	 * let obj = { foo: 1, name: "blarg" };
	 * let getName = propEq("name", "blarg");
	 * getName(obj) === true
	 */
	exports.propEq = curry(function (name, val, obj) { return obj &amp;&amp; obj[name] === val; });
	/**
	 * Given a dotted property name, returns a function that returns a nested property from an object, or undefined
	 * let obj = { id: 1, nestedObj: { foo: 1, name: "blarg" }, };
	 * let getName = prop("nestedObj.name");
	 * getName(obj) === "blarg"
	 * let propNotFound = prop("this.property.doesnt.exist");
	 * propNotFound(obj) === undefined
	 */
	exports.parse = function (name) {
	    return pipe.apply(null, name.split(".").map(exports.prop));
	};
	/**
	 * Given a function that returns a truthy or falsey value, returns a
	 * function that returns the opposite (falsey or truthy) value given the same inputs
	 */
	exports.not = function (fn) {
	    return function () {
	        var args = [];
	        for (var _i = 0; _i &lt; arguments.length; _i++) {
	            args[_i - 0] = arguments[_i];
	        }
	        return !fn.apply(null, args);
	    };
	};
	/**
	 * Given two functions that return truthy or falsey values, returns a function that returns truthy
	 * if both functions return truthy for the given arguments
	 */
	function and(fn1, fn2) {
	    return function () {
	        var args = [];
	        for (var _i = 0; _i &lt; arguments.length; _i++) {
	            args[_i - 0] = arguments[_i];
	        }
	        return fn1.apply(null, args) &amp;&amp; fn2.apply(null, args);
	    };
	}
	exports.and = and;
	/**
	 * Given two functions that return truthy or falsey values, returns a function that returns truthy
	 * if at least one of the functions returns truthy for the given arguments
	 */
	function or(fn1, fn2) {
	    return function () {
	        var args = [];
	        for (var _i = 0; _i &lt; arguments.length; _i++) {
	            args[_i - 0] = arguments[_i];
	        }
	        return fn1.apply(null, args) || fn2.apply(null, args);
	    };
	}
	exports.or = or;
	/**
	 * Check if all the elements of an array match a predicate function
	 *
	 * @param fn1 a predicate function `fn1`
	 * @returns a function which takes an array and returns true if `fn1` is true for all elements of the array
	 */
	exports.all = function (fn1) {
	    return function (arr) { return arr.reduce(function (b, x) { return b &amp;&amp; !!fn1(x); }, true); };
	};
	exports.any = function (fn1) {
	    return function (arr) { return arr.reduce(function (b, x) { return b || !!fn1(x); }, false); };
	};
	/** Given a class, returns a Predicate function that returns true if the object is of that class */
	exports.is = function (ctor) { return function (obj) {
	    return (obj != null &amp;&amp; obj.constructor === ctor || obj instanceof ctor);
	}; };
	/** Given a value, returns a Predicate function that returns true if another value is === equal to the original value */
	exports.eq = function (val) { return function (other) {
	    return val === other;
	}; };
	/** Given a value, returns a function which returns the value */
	exports.val = function (v) { return function () { return v; }; };
	function invoke(fnName, args) {
	    return function (obj) {
	        return obj[fnName].apply(obj, args);
	    };
	}
	exports.invoke = invoke;
	/**
	 * Sorta like Pattern Matching (a functional programming conditional construct)
	 *
	 * See http://c2.com/cgi/wiki?PatternMatching
	 *
	 * This is a conditional construct which allows a series of predicates and output functions
	 * to be checked and then applied.  Each predicate receives the input.  If the predicate
	 * returns truthy, then its matching output function (mapping function) is provided with
	 * the input and, then the result is returned.
	 *
	 * Each combination (2-tuple) of predicate + output function should be placed in an array
	 * of size 2: [ predicate, mapFn ]
	 *
	 * These 2-tuples should be put in an outer array.
	 *
	 * @example
	 * ```
	 *
	 * // Here's a 2-tuple where the first element is the isString predicate
	 * // and the second element is a function that returns a description of the input
	 * let firstTuple = [ angular.isString, (input) =&gt; `Heres your string ${input}` ];
	 *
	 * // Second tuple: predicate "isNumber", mapfn returns a description
	 * let secondTuple = [ angular.isNumber, (input) =&gt; `(${input}) That's a number!` ];
	 *
	 * let third = [ (input) =&gt; input === null,  (input) =&gt; `Oh, null...` ];
	 *
	 * let fourth = [ (input) =&gt; input === undefined,  (input) =&gt; `notdefined` ];
	 *
	 * let descriptionOf = pattern([ firstTuple, secondTuple, third, fourth ]);
	 *
	 * console.log(descriptionOf(undefined)); // 'notdefined'
	 * console.log(descriptionOf(55)); // '(55) That's a number!'
	 * console.log(descriptionOf("foo")); // 'Here's your string foo'
	 * ```
	 *
	 * @param struct A 2D array.  Each element of the array should be an array, a 2-tuple,
	 * with a Predicate and a mapping/output function
	 * @returns {function(any): *}
	 */
	function pattern(struct) {
	    return function (x) {
	        for (var i = 0; i &lt; struct.length; i++) {
	            if (struct[i][0](x))
	                return struct[i][1](x);
	        }
	    };
	}
	exports.pattern = pattern;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	var notImplemented = function (fnname) { return function () {
	    throw new Error(fnname + "(): No coreservices implementation for UI-Router is loaded. You should include one of: ['angular1.js']");
	}; };
	var services = {
	    $q: undefined,
	    $injector: undefined,
	    location: {},
	    locationConfig: {},
	    template: {}
	};
	exports.services = services;
	["setUrl", "path", "search", "hash", "onChange"]
	    .forEach(function (key) { return services.location[key] = notImplemented(key); });
	["port", "protocol", "host", "baseHref", "html5Mode", "hashPrefix"]
	    .forEach(function (key) { return services.locationConfig[key] = notImplemented(key); });


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	/** @module common */
	/**
	 * Matches state names using glob-like pattern strings.
	 *
	 * Globs can be used in specific APIs including:
	 *
	 * - [[StateService.is]]
	 * - [[StateService.includes]]
	 * - [[HookMatchCriteria.to]]
	 * - [[HookMatchCriteria.from]]
	 * - [[HookMatchCriteria.exiting]]
	 * - [[HookMatchCriteria.retained]]
	 * - [[HookMatchCriteria.entering]]
	 *
	 * A `Glob` string is a pattern which matches state names.
	 * Nested state names are split into segments (separated by a dot) when processing.
	 * The state named `foo.bar.baz` is split into three segments ['foo', 'bar', 'baz']
	 *
	 * Globs work according to the following rules:
	 *
	 * ### Exact match:
	 *
	 * The glob `'A.B'` matches the state named exactly `'A.B'`.
	 *
	 * | Glob        |Matches states named|Does not match state named|
	 * |:------------|:--------------------|:---------------------|
	 * | `'A'`       | `'A'`               | `'B'` , `'A.C'`      |
	 * | `'A.B'`     | `'A.B'`             | `'A'` , `'A.B.C'`    |
	 * | `'foo'`     | `'foo'`             | `'FOO'` , `'foo.bar'`|
	 *
	 * ### Single star (`*`)
	 *
	 * A single star (`*`) is a wildcard that matches exactly one segment.
	 *
	 * | Glob        |Matches states named  |Does not match state named |
	 * |:------------|:---------------------|:--------------------------|
	 * | `'*'`       | `'A'` , `'Z'`        | `'A.B'` , `'Z.Y.X'`       |
	 * | `'A.*'`     | `'A.B'` , `'A.C'`    | `'A'` , `'A.B.C'`         |
	 * | `'A.*.*'`   | `'A.B.C'` , `'A.X.Y'`| `'A'`, `'A.B'` , `'Z.Y.X'`|
	 *
	 * ### Double star (`**`)
	 *
	 * A double star (`'**'`) is a wildcard that matches *zero or more segments*
	 *
	 * | Glob        |Matches states named                           |Does not match state named         |
	 * |:------------|:----------------------------------------------|:----------------------------------|
	 * | `'**'`      | `'A'` , `'A.B'`, `'Z.Y.X'`                    | (matches all states)              |
	 * | `'A.**'`    | `'A'` , `'A.B'` , `'A.C.X'`                   | `'Z.Y.X'`                         |
	 * | `'**.X'`    | `'X'` , `'A.X'` , `'Z.Y.X'`                   | `'A'` , `'A.login.Z'`             |
	 * | `'A.**.X'`  | `'A.X'` , `'A.B.X'` , `'A.B.C.X'`             | `'A'` , `'A.B.C'`                 |
	 *
	 */
	var Glob = (function () {
	    function Glob(text) {
	        this.text = text;
	        this.glob = text.split('.');
	        var regexpString = this.text.split('.')
	            .map(function (seg) {
	            if (seg === '**')
	                return '(?:|(?:\\.[^.]*)*)';
	            if (seg === '*')
	                return '\\.[^.]*';
	            return '\\.' + seg;
	        }).join('');
	        this.regexp = new RegExp("^" + regexpString + "$");
	    }
	    Glob.prototype.matches = function (name) {
	        return this.regexp.test('.' + name);
	    };
	    /** @deprecated whats the point? */
	    Glob.is = function (text) {
	        return text.indexOf('*') &gt; -1;
	    };
	    /** @deprecated whats the point? */
	    Glob.fromString = function (text) {
	        if (!this.is(text))
	            return null;
	        return new Glob(text);
	    };
	    return Glob;
	}());
	exports.Glob = Glob;


/***/ },
/* 8 */
/***/ function(module, exports) {

	/** @module common */ /** for typedoc */
	"use strict";
	var Queue = (function () {
	    function Queue(_items, _limit) {
	        if (_items === void 0) { _items = []; }
	        if (_limit === void 0) { _limit = null; }
	        this._items = _items;
	        this._limit = _limit;
	    }
	    Queue.prototype.enqueue = function (item) {
	        var items = this._items;
	        items.push(item);
	        if (this._limit &amp;&amp; items.length &gt; this._limit)
	            items.shift();
	        return item;
	    };
	    Queue.prototype.dequeue = function () {
	        if (this.size())
	            return this._items.splice(0, 1)[0];
	    };
	    Queue.prototype.clear = function () {
	        var current = this._items;
	        this._items = [];
	        return current;
	    };
	    Queue.prototype.size = function () {
	        return this._items.length;
	    };
	    Queue.prototype.remove = function (item) {
	        var idx = this._items.indexOf(item);
	        return idx &gt; -1 &amp;&amp; this._items.splice(idx, 1)[0];
	    };
	    Queue.prototype.peekTail = function () {
	        return this._items[this._items.length - 1];
	    };
	    Queue.prototype.peekHead = function () {
	        if (this.size())
	            return this._items[0];
	    };
	    return Queue;
	}());
	exports.Queue = Queue;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/** @module common_strings */ /** */
	"use strict";
	var predicates_1 = __webpack_require__(4);
	var rejectFactory_1 = __webpack_require__(10);
	var common_1 = __webpack_require__(3);
	var hof_1 = __webpack_require__(5);
	var transition_1 = __webpack_require__(11);
	var resolvable_1 = __webpack_require__(19);
	/**
	 * Returns a string shortened to a maximum length
	 *
	 * If the string is already less than the `max` length, return the string.
	 * Else return the string, shortened to `max - 3` and append three dots ("...").
	 *
	 * @param max the maximum length of the string to return
	 * @param str the input string
	 */
	function maxLength(max, str) {
	    if (str.length &lt;= max)
	        return str;
	    return str.substr(0, max - 3) + "...";
	}
	exports.maxLength = maxLength;
	/**
	 * Returns a string, with spaces added to the end, up to a desired str length
	 *
	 * If the string is already longer than the desired length, return the string.
	 * Else returns the string, with extra spaces on the end, such that it reaches `length` characters.
	 *
	 * @param length the desired length of the string to return
	 * @param str the input string
	 */
	function padString(length, str) {
	    while (str.length &lt; length)
	        str += " ";
	    return str;
	}
	exports.padString = padString;
	function kebobString(camelCase) {
	    return camelCase
	        .replace(/^([A-Z])/, function ($1) { return $1.toLowerCase(); }) // replace first char
	        .replace(/([A-Z])/g, function ($1) { return "-" + $1.toLowerCase(); }); // replace rest
	}
	exports.kebobString = kebobString;
	function _toJson(obj) {
	    return JSON.stringify(obj);
	}
	function _fromJson(json) {
	    return predicates_1.isString(json) ? JSON.parse(json) : json;
	}
	function promiseToString(p) {
	    return "Promise(" + JSON.stringify(p) + ")";
	}
	function functionToString(fn) {
	    var fnStr = fnToString(fn);
	    var namedFunctionMatch = fnStr.match(/^(function [^ ]+\([^)]*\))/);
	    var toStr = namedFunctionMatch ? namedFunctionMatch[1] : fnStr;
	    var fnName = fn['name'] || "";
	    if (fnName &amp;&amp; toStr.match(/function \(/)) {
	        return 'function ' + fnName + toStr.substr(9);
	    }
	    return toStr;
	}
	exports.functionToString = functionToString;
	function fnToString(fn) {
	    var _fn = predicates_1.isArray(fn) ? fn.slice(-1)[0] : fn;
	    return _fn &amp;&amp; _fn.toString() || "undefined";
	}
	exports.fnToString = fnToString;
	var stringifyPatternFn = null;
	var stringifyPattern = function (value) {
	    var isTransitionRejectionPromise = rejectFactory_1.Rejection.isTransitionRejectionPromise;
	    stringifyPatternFn = stringifyPatternFn || hof_1.pattern([
	        [hof_1.not(predicates_1.isDefined), hof_1.val("undefined")],
	        [predicates_1.isNull, hof_1.val("null")],
	        [predicates_1.isPromise, hof_1.val("[Promise]")],
	        [isTransitionRejectionPromise, function (x) { return x._transitionRejection.toString(); }],
	        [hof_1.is(rejectFactory_1.Rejection), hof_1.invoke("toString")],
	        [hof_1.is(transition_1.Transition), hof_1.invoke("toString")],
	        [hof_1.is(resolvable_1.Resolvable), hof_1.invoke("toString")],
	        [predicates_1.isInjectable, functionToString],
	        [hof_1.val(true), common_1.identity]
	    ]);
	    return stringifyPatternFn(value);
	};
	function stringify(o) {
	    var seen = [];
	    function format(val) {
	        if (predicates_1.isObject(val)) {
	            if (seen.indexOf(val) !== -1)
	                return '[circular ref]';
	            seen.push(val);
	        }
	        return stringifyPattern(val);
	    }
	    return JSON.stringify(o, function (key, val) { return format(val); }).replace(/\\"/g, '"');
	}
	exports.stringify = stringify;
	/** Returns a function that splits a string on a character or substring */
	exports.beforeAfterSubstr = function (char) { return function (str) {
	    if (!str)
	        return ["", ""];
	    var idx = str.indexOf(char);
	    if (idx === -1)
	        return [str, ""];
	    return [str.substr(0, idx), str.substr(idx + 1)];
	}; };


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/** @module transition */ /** for typedoc */
	"use strict";
	var common_1 = __webpack_require__(3);
	var strings_1 = __webpack_require__(9);
	(function (RejectType) {
	    RejectType[RejectType["SUPERSEDED"] = 2] = "SUPERSEDED";
	    RejectType[RejectType["ABORTED"] = 3] = "ABORTED";
	    RejectType[RejectType["INVALID"] = 4] = "INVALID";
	    RejectType[RejectType["IGNORED"] = 5] = "IGNORED";
	    RejectType[RejectType["ERROR"] = 6] = "ERROR";
	})(exports.RejectType || (exports.RejectType = {}));
	var RejectType = exports.RejectType;
	var Rejection = (function () {
	    function Rejection(type, message, detail) {
	        this.type = type;
	        this.message = message;
	        this.detail = detail;
	    }
	    Rejection.prototype.toString = function () {
	        var detailString = function (d) {
	            return d &amp;&amp; d.toString !== Object.prototype.toString ? d.toString() : strings_1.stringify(d);
	        };
	        var type = this.type, message = this.message, detail = detailString(this.detail);
	        return "TransitionRejection(type: " + type + ", message: " + message + ", detail: " + detail + ")";
	    };
	    Rejection.prototype.toPromise = function () {
	        return common_1.extend(common_1.silentRejection(this), { _transitionRejection: this });
	    };
	    /** Returns true if the obj is a rejected promise created from the `asPromise` factory */
	    Rejection.isTransitionRejectionPromise = function (obj) {
	        return obj &amp;&amp; (typeof obj.then === 'function') &amp;&amp; obj._transitionRejection instanceof Rejection;
	    };
	    /** Returns a TransitionRejection due to transition superseded */
	    Rejection.superseded = function (detail, options) {
	        var message = "The transition has been superseded by a different transition";
	        var rejection = new Rejection(RejectType.SUPERSEDED, message, detail);
	        if (options &amp;&amp; options.redirected) {
	            rejection.redirected = true;
	        }
	        return rejection;
	    };
	    /** Returns a TransitionRejection due to redirected transition */
	    Rejection.redirected = function (detail) {
	        return Rejection.superseded(detail, { redirected: true });
	    };
	    /** Returns a TransitionRejection due to invalid transition */
	    Rejection.invalid = function (detail) {
	        var message = "This transition is invalid";
	        return new Rejection(RejectType.INVALID, message, detail);
	    };
	    /** Returns a TransitionRejection due to ignored transition */
	    Rejection.ignored = function (detail) {
	        var message = "The transition was ignored";
	        return new Rejection(RejectType.IGNORED, message, detail);
	    };
	    /** Returns a TransitionRejection due to aborted transition */
	    Rejection.aborted = function (detail) {
	        // TODO think about how to encapsulate an Error() object
	        var message = "The transition has been aborted";
	        return new Rejection(RejectType.ABORTED, message, detail);
	    };
	    /** Returns a TransitionRejection due to aborted transition */
	    Rejection.errored = function (detail) {
	        // TODO think about how to encapsulate an Error() object
	        var message = "The transition errored";
	        return new Rejection(RejectType.ERROR, message, detail);
	    };
	    return Rejection;
	}());
	exports.Rejection = Rejection;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module transition */ /** for typedoc */
	var strings_1 = __webpack_require__(9);
	var trace_1 = __webpack_require__(12);
	var coreservices_1 = __webpack_require__(6);
	var common_1 = __webpack_require__(3);
	var predicates_1 = __webpack_require__(4);
	var hof_1 = __webpack_require__(5);
	var transitionHook_1 = __webpack_require__(13);
	var hookRegistry_1 = __webpack_require__(15);
	var hookBuilder_1 = __webpack_require__(16);
	var node_1 = __webpack_require__(21);
	var pathFactory_1 = __webpack_require__(20);
	var targetState_1 = __webpack_require__(14);
	var param_1 = __webpack_require__(22);
	var resolvable_1 = __webpack_require__(19);
	var rejectFactory_1 = __webpack_require__(10);
	var resolveContext_1 = __webpack_require__(17);
	var router_1 = __webpack_require__(25);
	var transitionCount = 0;
	var stateSelf = hof_1.prop("self");
	/**
	 * Represents a transition between two states.
	 *
	 * When navigating to a state, we are transitioning **from** the current state **to** the new state.
	 *
	 * This object contains all contextual information about the to/from states, parameters, resolves.
	 * It has information about all states being entered and exited as a result of the transition.
	 */
	var Transition = (function () {
	    /**
	     * Creates a new Transition object.
	     *
	     * If the target state is not valid, an error is thrown.
	     *
	     * @param fromPath The path of [[PathNode]]s from which the transition is leaving.  The last node in the `fromPath`
	     *        encapsulates the "from state".
	     * @param targetState The target state and parameters being transitioned to (also, the transition options)
	     * @param router The [[UIRouter]] instance
	     */
	    function Transition(fromPath, targetState, router) {
	        var _this = this;
	        /** @hidden */
	        this._deferred = coreservices_1.services.$q.defer();
	        /**
	         * This promise is resolved or rejected based on the outcome of the Transition.
	         *
	         * When the transition is successful, the promise is resolved
	         * When the transition is unsuccessful, the promise is rejected with the [[TransitionRejection]] or javascript error
	         */
	        this.promise = this._deferred.promise;
	        this.treeChanges = function () { return _this._treeChanges; };
	        this.isActive = function () { return _this === _this._options.current(); };
	        this.router = router;
	        this._targetState = targetState;
	        if (!targetState.valid()) {
	            throw new Error(targetState.error());
	        }
	        // Makes the Transition instance a hook registry (onStart, etc)
	        hookRegistry_1.HookRegistry.mixin(new hookRegistry_1.HookRegistry(), this);
	        // current() is assumed to come from targetState.options, but provide a naive implementation otherwise.
	        this._options = common_1.extend({ current: hof_1.val(this) }, targetState.options());
	        this.$id = transitionCount++;
	        var toPath = pathFactory_1.PathFactory.buildToPath(fromPath, targetState);
	        this._treeChanges = pathFactory_1.PathFactory.treeChanges(fromPath, toPath, this._options.reloadState);
	        var enteringStates = this._treeChanges.entering.map(function (node) { return node.state; });
	        pathFactory_1.PathFactory.applyViewConfigs(router.transitionService.$view, this._treeChanges.to, enteringStates);
	        var rootResolvables = [
	            new resolvable_1.Resolvable(router_1.UIRouter, function () { return router; }, [], undefined, router),
	            new resolvable_1.Resolvable(Transition, function () { return _this; }, [], undefined, this),
	            new resolvable_1.Resolvable('$transition$', function () { return _this; }, [], undefined, this),
	            new resolvable_1.Resolvable('$stateParams', function () { return _this.params(); }, [], undefined, this.params())
	        ];
	        var rootNode = this._treeChanges.to[0];
	        var context = new resolveContext_1.ResolveContext(this._treeChanges.to);
	        context.addResolvables(rootResolvables, rootNode.state);
	    }
	    /** @inheritdoc */
	    Transition.prototype.onBefore = function (matchCriteria, callback, options) { throw ""; };
	    ;
	    /** @inheritdoc */
	    Transition.prototype.onStart = function (matchCriteria, callback, options) { throw ""; };
	    ;
	    /** @inheritdoc */
	    Transition.prototype.onExit = function (matchCriteria, callback, options) { throw ""; };
	    ;
	    /** @inheritdoc */
	    Transition.prototype.onRetain = function (matchCriteria, callback, options) { throw ""; };
	    ;
	    /** @inheritdoc */
	    Transition.prototype.onEnter = function (matchCriteria, callback, options) { throw ""; };
	    ;
	    /** @inheritdoc */
	    Transition.prototype.onFinish = function (matchCriteria, callback, options) { throw ""; };
	    ;
	    /** @inheritdoc */
	    Transition.prototype.onSuccess = function (matchCriteria, callback, options) { throw ""; };
	    ;
	    /** @inheritdoc */
	    Transition.prototype.onError = function (matchCriteria, callback, options) { throw ""; };
	    ;
	    Transition.prototype.$from = function () {
	        return common_1.tail(this._treeChanges.from).state;
	    };
	    Transition.prototype.$to = function () {
	        return common_1.tail(this._treeChanges.to).state;
	    };
	    /**
	     * Returns the "from state"
	     *
	     * @returns The state object for the Transition's "from state".
	     */
	    Transition.prototype.from = function () {
	        return this.$from().self;
	    };
	    /**
	     * Returns the "to state"
	     *
	     * @returns The state object for the Transition's target state ("to state").
	     */
	    Transition.prototype.to = function () {
	        return this.$to().self;
	    };
	    /**
	     * Gets the Target State
	     *
	     * A transition's [[TargetState]] encapsulates the [[to]] state, the [[params]], and the [[options]].
	     *
	     * @returns the [[TargetState]] of this Transition
	     */
	    Transition.prototype.targetState = function () {
	        return this._targetState;
	    };
	    /**
	     * Determines whether two transitions are equivalent.
	     */
	    Transition.prototype.is = function (compare) {
	        if (compare instanceof Transition) {
	            // TODO: Also compare parameters
	            return this.is({ to: compare.$to().name, from: compare.$from().name });
	        }
	        return !((compare.to &amp;&amp; !hookRegistry_1.matchState(this.$to(), compare.to)) ||
	            (compare.from &amp;&amp; !hookRegistry_1.matchState(this.$from(), compare.from)));
	    };
	    /**
	     * Gets transition parameter values
	     *
	     * @param pathname Pick which treeChanges path to get parameters for:
	     *   (`'to'`, `'from'`, `'entering'`, `'exiting'`, `'retained'`)
	     * @returns transition parameter values for the desired path.
	     */
	    Transition.prototype.params = function (pathname) {
	        if (pathname === void 0) { pathname = "to"; }
	        return this._treeChanges[pathname].map(hof_1.prop("paramValues")).reduce(common_1.mergeR, {});
	    };
	    /**
	     * Creates a [[UIInjector]] Dependency Injector
	     *
	     * Returns a Dependency Injector for the Transition's target state (to state).
	     * The injector provides resolve values which the target state has access to.
	     *
	     * The `UIInjector` can also provide values from the native root/global injector (ng1/ng2).
	     *
	     * If a `state` is provided, the injector that is returned will be limited to resolve values that the provided state has access to.
	     *
	     * @param state Limits the resolves provided to only the resolves the provided state has access to.
	     * @returns a [[UIInjector]]
	     */
	    Transition.prototype.injector = function (state) {
	        var path = this.treeChanges().to;
	        if (state)
	            path = pathFactory_1.PathFactory.subPath(path, function (node) { return node.state === state || node.state.name === state; });
	        return new resolveContext_1.ResolveContext(path).injector();
	    };
	    /**
	     * Gets all available resolve tokens (keys)
	     *
	     * This method can be used in conjunction with [[getResolve]] to inspect the resolve values
	     * available to the Transition.
	     *
	     * The returned tokens include those defined on [[StateDeclaration.resolve]] blocks, for the states
	     * in the Transition's [[TreeChanges.to]] path.
	     *
	     * @returns an array of resolve tokens (keys)
	     */
	    Transition.prototype.getResolveTokens = function () {
	        return new resolveContext_1.ResolveContext(this._treeChanges.to).getTokens();
	    };
	    /**
	     * Gets resolved values
	     *
	     * This method can be used in conjunction with [[getResolveTokens]] to inspect what resolve values
	     * are available to the Transition.
	     *
	     * Given a token, returns the resolved data for that token.
	     * Given an array of tokens, returns an array of resolved data for those tokens.
	     *
	     * If a resolvable hasn't yet been fetched, returns `undefined` for that token
	     * If a resolvable doesn't exist for the token, throws an error.
	     *
	     * @param token the token (or array of tokens)
	     *
	     * @returns an array of resolve tokens (keys)
	     */
	    Transition.prototype.getResolveValue = function (token) {
	        var resolveContext = new resolveContext_1.ResolveContext(this._treeChanges.to);
	        var getData = function (token) {
	            var resolvable = resolveContext.getResolvable(token);
	            if (resolvable === undefined) {
	                throw new Error("Dependency Injection token not found: " + strings_1.stringify(token));
	            }
	            return resolvable.data;
	        };
	        if (predicates_1.isArray(token)) {
	            return token.map(getData);
	        }
	        return getData(token);
	    };
	    /**
	     * Gets a [[Resolvable]] primitive
	     *
	     * This is a lower level API that returns a [[Resolvable]] from the Transition for a given token.
	     *
	     * @param token the DI token
	     *
	     * @returns the [[Resolvable]] in the transition's to path, or undefined
	     */
	    Transition.prototype.getResolvable = function (token) {
	        return new resolveContext_1.ResolveContext(this._treeChanges.to).getResolvable(token);
	    };
	    /**
	     * Dynamically adds a new [[Resolvable]] (`resolve`) to this transition.
	     *
	     * @param resolvable an [[Resolvable]] object
	     * @param state the state in the "to path" which should receive the new resolve (otherwise, the root state)
	     */
	    Transition.prototype.addResolvable = function (resolvable, state) {
	        if (state === void 0) { state = ""; }
	        var stateName = (typeof state === "string") ? state : state.name;
	        var topath = this._treeChanges.to;
	        var targetNode = common_1.find(topath, function (node) { return node.state.name === stateName; });
	        var resolveContext = new resolveContext_1.ResolveContext(topath);
	        resolveContext.addResolvables([resolvable], targetNode.state);
	    };
	    /**
	     * If the current transition is a redirect, returns the transition that was redirected.
	     *
	     * Gets the transition from which this transition was redirected.
	     *
	     *
	     * @example
	     * ```js
	     *
	     * let transitionA = $state.go('A').transitionA
	     * transitionA.onStart({}, () =&gt; $state.target('B'));
	     * $transitions.onSuccess({ to: 'B' }, (trans) =&gt; {
	     *   trans.to().name === 'B'; // true
	     *   trans.redirectedFrom() === transitionA; // true
	     * });
	     * ```
	     *
	     * @returns The previous Transition, or null if this Transition is not the result of a redirection
	     */
	    Transition.prototype.redirectedFrom = function () {
	        return this._options.redirectedFrom || null;
	    };
	    /**
	     * Get the transition options
	     *
	     * @returns the options for this Transition.
	     */
	    Transition.prototype.options = function () {
	        return this._options;
	    };
	    /**
	     * Gets the states being entered.
	     *
	     * @returns an array of states that will be entered during this transition.
	     */
	    Transition.prototype.entering = function () {
	        return common_1.map(this._treeChanges.entering, hof_1.prop('state')).map(stateSelf);
	    };
	    /**
	     * Gets the states being exited.
	     *
	     * @returns an array of states that will be exited during this transition.
	     */
	    Transition.prototype.exiting = function () {
	        return common_1.map(this._treeChanges.exiting, hof_1.prop('state')).map(stateSelf).reverse();
	    };
	    /**
	     * Gets the states being retained.
	     *
	     * @returns an array of states that are already entered from a previous Transition, that will not be
	     *    exited during this Transition
	     */
	    Transition.prototype.retained = function () {
	        return common_1.map(this._treeChanges.retained, hof_1.prop('state')).map(stateSelf);
	    };
	    /**
	     * Get the [[ViewConfig]]s associated with this Transition
	     *
	     * Each state can define one or more views (template/controller), which are encapsulated as `ViewConfig` objects.
	     * This method fetches the `ViewConfigs` for a given path in the Transition (e.g., "to" or "entering").
	     *
	     * @param pathname the name of the path to fetch views for:
	     *   (`'to'`, `'from'`, `'entering'`, `'exiting'`, `'retained'`)
	     * @param state If provided, only returns the `ViewConfig`s for a single state in the path
	     *
	     * @returns a list of ViewConfig objects for the given path.
	     */
	    Transition.prototype.views = function (pathname, state) {
	        if (pathname === void 0) { pathname = "entering"; }
	        var path = this._treeChanges[pathname];
	        path = !state ? path : path.filter(hof_1.propEq('state', state));
	        return path.map(hof_1.prop("views")).filter(common_1.identity).reduce(common_1.unnestR, []);
	    };
	    /**
	     * Creates a new transition that is a redirection of the current one.
	     *
	     * This transition can be returned from a [[TransitionService]] hook to
	     * redirect a transition to a new state and/or set of parameters.
	     *
	     * @returns Returns a new [[Transition]] instance.
	     */
	    Transition.prototype.redirect = function (targetState) {
	        var newOptions = common_1.extend({}, this.options(), targetState.options(), { redirectedFrom: this, source: "redirect" });
	        targetState = new targetState_1.TargetState(targetState.identifier(), targetState.$state(), targetState.params(), newOptions);
	        var newTransition = this.router.transitionService.create(this._treeChanges.from, targetState);
	        var originalEnteringNodes = this.treeChanges().entering;
	        var redirectEnteringNodes = newTransition.treeChanges().entering;
	        // --- Re-use resolve data from original transition ---
	        // When redirecting from a parent state to a child state where the parent parameter values haven't changed
	        // (because of the redirect), the resolves fetched by the original transition are still valid in the
	        // redirected transition.
	        //
	        // This allows you to define a redirect on a parent state which depends on an async resolve value.
	        // You can wait for the resolve, then redirect to a child state based on the result.
	        // The redirected transition does not have to re-fetch the resolve.
	        // ---------------------------------------------------------
	        var nodeIsReloading = function (reloadState) { return function (node) {
	            return reloadState &amp;&amp; node.state.includes[reloadState.name];
	        }; };
	        // Find any "entering" nodes in the redirect path that match the original path and aren't being reloaded
	        var matchingEnteringNodes = node_1.PathNode.matching(redirectEnteringNodes, originalEnteringNodes)
	            .filter(hof_1.not(nodeIsReloading(targetState.options().reloadState)));
	        // Use the existing (possibly pre-resolved) resolvables for the matching entering nodes.
	        matchingEnteringNodes.forEach(function (node, idx) {
	            node.resolvables = originalEnteringNodes[idx].resolvables;
	        });
	        return newTransition;
	    };
	    /** @hidden If a transition doesn't exit/enter any states, returns any [[Param]] whose value changed */
	    Transition.prototype._changedParams = function () {
	        var _a = this._treeChanges, to = _a.to, from = _a.from;
	        if (this._options.reload || common_1.tail(to).state !== common_1.tail(from).state)
	            return undefined;
	        var nodeSchemas = to.map(function (node) { return node.paramSchema; });
	        var _b = [to, from].map(function (path) { return path.map(function (x) { return x.paramValues; }); }), toValues = _b[0], fromValues = _b[1];
	        var tuples = common_1.arrayTuples(nodeSchemas, toValues, fromValues);
	        return tuples.map(function (_a) {
	            var schema = _a[0], toVals = _a[1], fromVals = _a[2];
	            return param_1.Param.changed(schema, toVals, fromVals);
	        }).reduce(common_1.unnestR, []);
	    };
	    /**
	     * Returns true if the transition is dynamic.
	     *
	     * A transition is dynamic if no states are entered nor exited, but at least one dynamic parameter has changed.
	     *
	     * @returns true if the Transition is dynamic
	     */
	    Transition.prototype.dynamic = function () {
	        var changes = this._changedParams();
	        return !changes ? false : changes.map(function (x) { return x.dynamic; }).reduce(common_1.anyTrueR, false);
	    };
	    /**
	     * Returns true if the transition is ignored.
	     *
	     * A transition is ignored if no states are entered nor exited, and no parameter values have changed.
	     *
	     * @returns true if the Transition is ignored.
	     */
	    Transition.prototype.ignored = function () {
	        var changes = this._changedParams();
	        return !changes ? false : changes.length === 0;
	    };
	    /**
	     * @hidden
	     */
	    Transition.prototype.hookBuilder = function () {
	        return new hookBuilder_1.HookBuilder(this.router.transitionService, this, {
	            transition: this,
	            current: this._options.current
	        });
	    };
	    /**
	     * Runs the transition
	     *
	     * This method is generally called from the [[StateService.transitionTo]]
	     *
	     * @returns a promise for a successful transition.
	     */
	    Transition.prototype.run = function () {
	        var _this = this;
	        var runSynchronousHooks = transitionHook_1.TransitionHook.runSynchronousHooks;
	        var hookBuilder = this.hookBuilder();
	        var globals = this.router.globals;
	        globals.transitionHistory.enqueue(this);
	        var syncResult = runSynchronousHooks(hookBuilder.getOnBeforeHooks());
	        if (rejectFactory_1.Rejection.isTransitionRejectionPromise(syncResult)) {
	            syncResult.catch(function () { return 0; }); // issue #2676
	            var rejectReason = syncResult._transitionRejection;
	            this._deferred.reject(rejectReason);
	            return this.promise;
	        }
	        if (!this.valid()) {
	            var error = new Error(this.error());
	            this._deferred.reject(error);
	            return this.promise;
	        }
	        if (this.ignored()) {
	            trace_1.trace.traceTransitionIgnored(this);
	            this._deferred.reject(rejectFactory_1.Rejection.ignored());
	            return this.promise;
	        }
	        // When the chain is complete, then resolve or reject the deferred
	        var transitionSuccess = function () {
	            trace_1.trace.traceSuccess(_this.$to(), _this);
	            _this.success = true;
	            _this._deferred.resolve(_this.to());
	            runSynchronousHooks(hookBuilder.getOnSuccessHooks(), true);
	        };
	        var transitionError = function (reason) {
	            trace_1.trace.traceError(reason, _this);
	            _this.success = false;
	            _this._deferred.reject(reason);
	            _this._error = reason;
	            runSynchronousHooks(hookBuilder.getOnErrorHooks(), true);
	        };
	        trace_1.trace.traceTransitionStart(this);
	        // Chain the next hook off the previous
	        var appendHookToChain = function (prev, nextHook) {
	            return prev.then(function () { return nextHook.invokeHook(); });
	        };
	        // Run the hooks, then resolve or reject the overall deferred in the .then() handler
	        hookBuilder.asyncHooks()
	            .reduce(appendHookToChain, syncResult)
	            .then(transitionSuccess, transitionError);
	        return this.promise;
	    };
	    /**
	     * Checks if the Transition is valid
	     *
	     * @returns true if the Transition is valid
	     */
	    Transition.prototype.valid = function () {
	        return !this.error() || this.success !== undefined;
	    };
	    /**
	     * The Transition error reason.
	     *
	     * If the transition is invalid (and could not be run), returns the reason the transition is invalid.
	     * If the transition was valid and ran, but was not successful, returns the reason the transition failed.
	     *
	     * @returns an error message explaining why the transition is invalid, or the reason the transition failed.
	     */
	    Transition.prototype.error = function () {
	        var state = this.$to();
	        var redirects = 0, trans = this;
	        while ((trans = trans.redirectedFrom()) != null) {
	            if (++redirects &gt; 20)
	                return "Too many Transition redirects (20+)";
	        }
	        if (state.self.abstract)
	            return "Cannot transition to abstract state '" + state.name + "'";
	        if (!param_1.Param.validates(state.parameters(), this.params()))
	            return "Param values not valid for state '" + state.name + "'";
	        if (this.success === false)
	            return this._error;
	    };
	    /**
	     * A string representation of the Transition
	     *
	     * @returns A string representation of the Transition
	     */
	    Transition.prototype.toString = function () {
	        var fromStateOrName = this.from();
	        var toStateOrName = this.to();
	        var avoidEmptyHash = function (params) {
	            return (params["#"] !== null &amp;&amp; params["#"] !== undefined) ? params : common_1.omit(params, "#");
	        };
	        // (X) means the to state is invalid.
	        var id = this.$id, from = predicates_1.isObject(fromStateOrName) ? fromStateOrName.name : fromStateOrName, fromParams = common_1.toJson(avoidEmptyHash(this._treeChanges.from.map(hof_1.prop('paramValues')).reduce(common_1.mergeR, {}))), toValid = this.valid() ? "" : "(X) ", to = predicates_1.isObject(toStateOrName) ? toStateOrName.name : toStateOrName, toParams = common_1.toJson(avoidEmptyHash(this.params()));
	        return "Transition#" + id + "( '" + from + "'" + fromParams + " -&gt; " + toValid + "'" + to + "'" + toParams + " )";
	    };
	    Transition.diToken = Transition;
	    return Transition;
	}());
	exports.Transition = Transition;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * UI-Router Transition Tracing
	 *
	 * Enable transition tracing to print transition information to the console, in order to help debug your application.
	 * Tracing logs detailed information about each Transition to your console.
	 *
	 * To enable tracing, import the [[trace]] singleton and enable one or more categories.
	 *
	 * ES6
	 * ```
	 *
	 * import {trace} from "ui-router-ng2"; // or "angular-ui-router"
	 * trace.enable(1, 5); // TRANSITION and VIEWCONFIG
	 * ```
	 *
	 * CJS
	 * ```
	 *
	 * let trace = require("angular-ui-router").trace; // or "ui-router-ng2"
	 * trace.enable("TRANSITION", "VIEWCONFIG");
	 * ```
	 *
	 * Globals
	 * ```
	 *
	 * let trace = window["angular-ui-router"].trace; // or "ui-router-ng2"
	 * trace.enable(); // Trace everything (very verbose)
	 * ```
	 *
	 * @module trace
	 */ /** for typedoc */
	var hof_1 = __webpack_require__(5);
	var predicates_1 = __webpack_require__(4);
	var strings_1 = __webpack_require__(9);
	/** @hidden */
	function uiViewString(viewData) {
	    if (!viewData)
	        return 'ui-view (defunct)';
	    return ("[ui-view#" + viewData.id + " tag ") +
	        ("in template from '" + (viewData.creationContext &amp;&amp; viewData.creationContext.name || '(root)') + "' state]: ") +
	        ("fqn: '" + viewData.fqn + "', ") +
	        ("name: '" + viewData.name + "@" + viewData.creationContext + "')");
	}
	/** @hidden */
	var viewConfigString = function (viewConfig) {
	    return ("[ViewConfig#" + viewConfig.$id + " from '" + (viewConfig.viewDecl.$context.name || '(root)') + "' state]: target ui-view: '" + viewConfig.viewDecl.$uiViewName + "@" + viewConfig.viewDecl.$uiViewContextAnchor + "'");
	};
	/** @hidden */
	function normalizedCat(input) {
	    return predicates_1.isNumber(input) ? Category[input] : Category[Category[input]];
	}
	/**
	 * Trace categories
	 *
	 * [[Trace.enable]] or [[Trace.disable]] a category
	 *
	 * `trace.enable(Category.TRANSITION)`
	 *
	 * These can also be provided using a matching string, or position ordinal
	 *
	 * `trace.enable("TRANSITION")`
	 *
	 * `trace.enable(1)`
	 */
	(function (Category) {
	    Category[Category["RESOLVE"] = 0] = "RESOLVE";
	    Category[Category["TRANSITION"] = 1] = "TRANSITION";
	    Category[Category["HOOK"] = 2] = "HOOK";
	    Category[Category["UIVIEW"] = 3] = "UIVIEW";
	    Category[Category["VIEWCONFIG"] = 4] = "VIEWCONFIG";
	})(exports.Category || (exports.Category = {}));
	var Category = exports.Category;
	/**
	 * Prints UI-Router Transition trace information to the console.
	 */
	var Trace = (function () {
	    function Trace() {
	        /** @hidden */
	        this._enabled = {};
	        this.approximateDigests = 0;
	    }
	    /** @hidden */
	    Trace.prototype._set = function (enabled, categories) {
	        var _this = this;
	        if (!categories.length) {
	            categories = Object.keys(Category)
	                .map(function (k) { return parseInt(k, 10); })
	                .filter(function (k) { return !isNaN(k); })
	                .map(function (key) { return Category[key]; });
	        }
	        categories.map(normalizedCat).forEach(function (category) { return _this._enabled[category] = enabled; });
	    };
	    /**
	     * Enables a trace [[Category]]
	     *
	     * ```
	     * trace.enable("TRANSITION");
	     * ```
	     *
	     * @param categories categories to enable. If `categories` is omitted, all categories are enabled.
	     *        Also takes strings (category name) or ordinal (category position)
	     */
	    Trace.prototype.enable = function () {
	        var categories = [];
	        for (var _i = 0; _i &lt; arguments.length; _i++) {
	            categories[_i - 0] = arguments[_i];
	        }
	        this._set(true, categories);
	    };
	    /**
	     * Disables a trace [[Category]]
	     *
	     * ```
	     * trace.disable("VIEWCONFIG");
	     * ```
	     *
	     * @param categories categories to disable. If `categories` is omitted, all categories are disabled.
	     *        Also takes strings (category name) or ordinal (category position)
	     */
	    Trace.prototype.disable = function () {
	        var categories = [];
	        for (var _i = 0; _i &lt; arguments.length; _i++) {
	            categories[_i - 0] = arguments[_i];
	        }
	        this._set(false, categories);
	    };
	    /**
	     * Retrieves the enabled stateus of a [[Category]]
	     *
	     * ```
	     * trace.enabled("VIEWCONFIG"); // true or false
	     * ```
	     *
	     * @returns boolean true if the category is enabled
	     */
	    Trace.prototype.enabled = function (category) {
	        return !!this._enabled[normalizedCat(category)];
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceTransitionStart = function (transition) {
	        if (!this.enabled(Category.TRANSITION))
	            return;
	        var tid = transition.$id, digest = this.approximateDigests, transitionStr = strings_1.stringify(transition);
	        console.log("Transition #" + tid + " Digest #" + digest + ": Started  -&gt; " + transitionStr);
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceTransitionIgnored = function (trans) {
	        if (!this.enabled(Category.TRANSITION))
	            return;
	        var tid = trans &amp;&amp; trans.$id, digest = this.approximateDigests, transitionStr = strings_1.stringify(trans);
	        console.log("Transition #" + tid + " Digest #" + digest + ": Ignored  &lt;&gt; " + transitionStr);
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceHookInvocation = function (step, options) {
	        if (!this.enabled(Category.HOOK))
	            return;
	        var tid = hof_1.parse("transition.$id")(options), digest = this.approximateDigests, event = hof_1.parse("traceData.hookType")(options) || "internal", context = hof_1.parse("traceData.context.state.name")(options) || hof_1.parse("traceData.context")(options) || "unknown", name = strings_1.functionToString(step.eventHook.callback);
	        console.log("Transition #" + tid + " Digest #" + digest + ":   Hook -&gt; " + event + " context: " + context + ", " + strings_1.maxLength(200, name));
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceHookResult = function (hookResult, transitionOptions) {
	        if (!this.enabled(Category.HOOK))
	            return;
	        var tid = hof_1.parse("transition.$id")(transitionOptions), digest = this.approximateDigests, hookResultStr = strings_1.stringify(hookResult);
	        console.log("Transition #" + tid + " Digest #" + digest + ":   &lt;- Hook returned: " + strings_1.maxLength(200, hookResultStr));
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceResolvePath = function (path, when, trans) {
	        if (!this.enabled(Category.RESOLVE))
	            return;
	        var tid = trans &amp;&amp; trans.$id, digest = this.approximateDigests, pathStr = path &amp;&amp; path.toString();
	        console.log("Transition #" + tid + " Digest #" + digest + ":         Resolving " + pathStr + " (" + when + ")");
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceResolvableResolved = function (resolvable, trans) {
	        if (!this.enabled(Category.RESOLVE))
	            return;
	        var tid = trans &amp;&amp; trans.$id, digest = this.approximateDigests, resolvableStr = resolvable &amp;&amp; resolvable.toString(), result = strings_1.stringify(resolvable.data);
	        console.log("Transition #" + tid + " Digest #" + digest + ":               &lt;- Resolved  " + resolvableStr + " to: " + strings_1.maxLength(200, result));
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceError = function (reason, trans) {
	        if (!this.enabled(Category.TRANSITION))
	            return;
	        var tid = trans &amp;&amp; trans.$id, digest = this.approximateDigests, transitionStr = strings_1.stringify(trans);
	        console.log("Transition #" + tid + " Digest #" + digest + ": &lt;- Rejected " + transitionStr + ", reason: " + reason);
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceSuccess = function (finalState, trans) {
	        if (!this.enabled(Category.TRANSITION))
	            return;
	        var tid = trans &amp;&amp; trans.$id, digest = this.approximateDigests, state = finalState.name, transitionStr = strings_1.stringify(trans);
	        console.log("Transition #" + tid + " Digest #" + digest + ": &lt;- Success  " + transitionStr + ", final state: " + state);
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceUIViewEvent = function (event, viewData, extra) {
	        if (extra === void 0) { extra = ""; }
	        if (!this.enabled(Category.UIVIEW))
	            return;
	        console.log("ui-view: " + strings_1.padString(30, event) + " " + uiViewString(viewData) + extra);
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceUIViewConfigUpdated = function (viewData, context) {
	        if (!this.enabled(Category.UIVIEW))
	            return;
	        this.traceUIViewEvent("Updating", viewData, " with ViewConfig from context='" + context + "'");
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceUIViewFill = function (viewData, html) {
	        if (!this.enabled(Category.UIVIEW))
	            return;
	        this.traceUIViewEvent("Fill", viewData, " with: " + strings_1.maxLength(200, html));
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceViewServiceEvent = function (event, viewConfig) {
	        if (!this.enabled(Category.VIEWCONFIG))
	            return;
	        console.log("VIEWCONFIG: " + event + " " + viewConfigString(viewConfig));
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceViewServiceUIViewEvent = function (event, viewData) {
	        if (!this.enabled(Category.VIEWCONFIG))
	            return;
	        console.log("VIEWCONFIG: " + event + " " + uiViewString(viewData));
	    };
	    return Trace;
	}());
	exports.Trace = Trace;
	/**
	 * The [[Trace]] singleton
	 *
	 * @example
	 * ```js
	 *
	 * import {trace} from "angular-ui-router";
	 * trace.enable(1, 5);
	 * ```
	 */
	var trace = new Trace();
	exports.trace = trace;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(3);
	var strings_1 = __webpack_require__(9);
	var predicates_1 = __webpack_require__(4);
	var hof_1 = __webpack_require__(5);
	var trace_1 = __webpack_require__(12);
	var coreservices_1 = __webpack_require__(6);
	var rejectFactory_1 = __webpack_require__(10);
	var targetState_1 = __webpack_require__(14);
	var defaultOptions = {
	    async: true,
	    rejectIfSuperseded: true,
	    current: common_1.noop,
	    transition: null,
	    traceData: {},
	    bind: null
	};
	/** @hidden */
	var TransitionHook = (function () {
	    function TransitionHook(transition, stateContext, eventHook, options) {
	        var _this = this;
	        this.transition = transition;
	        this.stateContext = stateContext;
	        this.eventHook = eventHook;
	        this.options = options;
	        this.isSuperseded = function () {
	            return _this.options.current() !== _this.options.transition;
	        };
	        this.options = common_1.defaults(options, defaultOptions);
	    }
	    TransitionHook.prototype.invokeHook = function () {
	        var _a = this, options = _a.options, eventHook = _a.eventHook;
	        trace_1.trace.traceHookInvocation(this, options);
	        if (options.rejectIfSuperseded &amp;&amp; this.isSuperseded()) {
	            return rejectFactory_1.Rejection.superseded(options.current()).toPromise();
	        }
	        var synchronousHookResult = !eventHook._deregistered
	            ? eventHook.callback.call(options.bind, this.transition, this.stateContext)
	            : undefined;
	        return this.handleHookResult(synchronousHookResult);
	    };
	    /**
	     * This method handles the return value of a Transition Hook.
	     *
	     * A hook can return false (cancel), a TargetState (redirect),
	     * or a promise (which may later resolve to false or a redirect)
	     *
	     * This also handles "transition superseded" -- when a new transition
	     * was started while the hook was still running
	     */
	    TransitionHook.prototype.handleHookResult = function (result) {
	        // This transition is no longer current.
	        // Another transition started while this hook was still running.
	        if (this.isSuperseded()) {
	            // Abort this transition
	            return rejectFactory_1.Rejection.superseded(this.options.current()).toPromise();
	        }
	        // Hook returned a promise
	        if (predicates_1.isPromise(result)) {
	            // Wait for the promise, then reprocess the resolved value
	            return result.then(this.handleHookResult.bind(this));
	        }
	        trace_1.trace.traceHookResult(result, this.options);
	        // Hook returned false
	        if (result === false) {
	            // Abort this Transition
	            return rejectFactory_1.Rejection.aborted("Hook aborted transition").toPromise();
	        }
	        var isTargetState = hof_1.is(targetState_1.TargetState);
	        // hook returned a TargetState
	        if (isTargetState(result)) {
	            // Halt the current Transition and start a redirected Transition (to the TargetState).
	            return rejectFactory_1.Rejection.redirected(result).toPromise();
	        }
	    };
	    TransitionHook.prototype.toString = function () {
	        var _a = this, options = _a.options, eventHook = _a.eventHook;
	        var event = hof_1.parse("traceData.hookType")(options) || "internal", context = hof_1.parse("traceData.context.state.name")(options) || hof_1.parse("traceData.context")(options) || "unknown", name = strings_1.fnToString(eventHook.callback);
	        return event + " context: " + context + ", " + strings_1.maxLength(200, name);
	    };
	    /**
	     * Given an array of TransitionHooks, runs each one synchronously and sequentially.
	     *
	     * Returns a promise chain composed of any promises returned from each hook.invokeStep() call
	     */
	    TransitionHook.runSynchronousHooks = function (hooks, swallowExceptions) {
	        if (swallowExceptions === void 0) { swallowExceptions = false; }
	        var results = [];
	        for (var i = 0; i &lt; hooks.length; i++) {
	            var hook = hooks[i];
	            try {
	                results.push(hook.invokeHook());
	            }
	            catch (exception) {
	                if (!swallowExceptions) {
	                    return rejectFactory_1.Rejection.errored(exception).toPromise();
	                }
	                var errorHandler = hook.transition.router.stateService.defaultErrorHandler();
	                errorHandler(exception);
	            }
	        }
	        var rejections = results.filter(rejectFactory_1.Rejection.isTransitionRejectionPromise);
	        if (rejections.length)
	            return rejections[0];
	        return results
	            .filter(predicates_1.isPromise)
	            .reduce(function (chain, promise) { return chain.then(hof_1.val(promise)); }, coreservices_1.services.$q.when());
	    };
	    return TransitionHook;
	}());
	exports.TransitionHook = TransitionHook;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/** @module state */ /** for typedoc */
	"use strict";
	var common_1 = __webpack_require__(3);
	/**
	 * @ngdoc object
	 * @name ui.router.state.type:TargetState
	 *
	 * @description
	 * Encapsulate the desired target of a transition.
	 * Wraps an identifier for a state, a set of parameters, and transition options with the definition of the state.
	 *
	 * @param {StateOrName} _identifier  An identifier for a state. Either a fully-qualified path, or the object
	 *            used to define the state.
	 * @param {IState} _definition The `State` object definition.
	 * @param {ParamsOrArray} _params Parameters for the target state
	 * @param {TransitionOptions} _options Transition options.
	 */
	var TargetState = (function () {
	    function TargetState(_identifier, _definition, _params, _options) {
	        if (_params === void 0) { _params = {}; }
	        if (_options === void 0) { _options = {}; }
	        this._identifier = _identifier;
	        this._definition = _definition;
	        this._options = _options;
	        this._params = _params || {};
	    }
	    TargetState.prototype.name = function () {
	        return this._definition &amp;&amp; this._definition.name || this._identifier;
	    };
	    TargetState.prototype.identifier = function () {
	        return this._identifier;
	    };
	    TargetState.prototype.params = function () {
	        return this._params;
	    };
	    TargetState.prototype.$state = function () {
	        return this._definition;
	    };
	    TargetState.prototype.state = function () {
	        return this._definition &amp;&amp; this._definition.self;
	    };
	    TargetState.prototype.options = function () {
	        return this._options;
	    };
	    TargetState.prototype.exists = function () {
	        return !!(this._definition &amp;&amp; this._definition.self);
	    };
	    TargetState.prototype.valid = function () {
	        return !this.error();
	    };
	    TargetState.prototype.error = function () {
	        var base = this.options().relative;
	        if (!this._definition &amp;&amp; !!base) {
	            var stateName = base.name ? base.name : base;
	            return "Could not resolve '" + this.name() + "' from state '" + stateName + "'";
	        }
	        if (!this._definition)
	            return "No such state '" + this.name() + "'";
	        if (!this._definition.self)
	            return "State '" + this.name() + "' has an invalid definition";
	    };
	    TargetState.prototype.toString = function () {
	        return "'" + this.name() + "'" + common_1.toJson(this.params());
	    };
	    return TargetState;
	}());
	exports.TargetState = TargetState;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module transition */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var predicates_1 = __webpack_require__(4);
	var glob_1 = __webpack_require__(7);
	/**
	 * Determines if the given state matches the matchCriteria
	 *
	 * @hidden
	 *
	 * @param state a State Object to test against
	 * @param criterion
	 * - If a string, matchState uses the string as a glob-matcher against the state name
	 * - If an array (of strings), matchState uses each string in the array as a glob-matchers against the state name
	 *   and returns a positive match if any of the globs match.
	 * - If a function, matchState calls the function with the state and returns true if the function's result is truthy.
	 * @returns {boolean}
	 */
	function matchState(state, criterion) {
	    var toMatch = predicates_1.isString(criterion) ? [criterion] : criterion;
	    function matchGlobs(_state) {
	        var globStrings = toMatch;
	        for (var i = 0; i &lt; globStrings.length; i++) {
	            var glob = glob_1.Glob.fromString(globStrings[i]);
	            if ((glob &amp;&amp; glob.matches(_state.name)) || (!glob &amp;&amp; globStrings[i] === _state.name)) {
	                return true;
	            }
	        }
	        return false;
	    }
	    var matchFn = (predicates_1.isFunction(toMatch) ? toMatch : matchGlobs);
	    return !!matchFn(state);
	}
	exports.matchState = matchState;
	/** @hidden */
	var EventHook = (function () {
	    function EventHook(matchCriteria, callback, options) {
	        if (options === void 0) { options = {}; }
	        this.callback = callback;
	        this.matchCriteria = common_1.extend({ to: true, from: true, exiting: true, retained: true, entering: true }, matchCriteria);
	        this.priority = options.priority || 0;
	        this.bind = options.bind || null;
	        this._deregistered = false;
	    }
	    EventHook._matchingNodes = function (nodes, criterion) {
	        if (criterion === true)
	            return nodes;
	        var matching = nodes.filter(function (node) { return matchState(node.state, criterion); });
	        return matching.length ? matching : null;
	    };
	    /**
	     * Determines if this hook's [[matchCriteria]] match the given [[TreeChanges]]
	     *
	     * @returns an IMatchingNodes object, or null. If an IMatchingNodes object is returned, its values
	     * are the matching [[PathNode]]s for each [[HookMatchCriterion]] (to, from, exiting, retained, entering)
	     */
	    EventHook.prototype.matches = function (treeChanges) {
	        var mc = this.matchCriteria, _matchingNodes = EventHook._matchingNodes;
	        var matches = {
	            to: _matchingNodes([common_1.tail(treeChanges.to)], mc.to),
	            from: _matchingNodes([common_1.tail(treeChanges.from)], mc.from),
	            exiting: _matchingNodes(treeChanges.exiting, mc.exiting),
	            retained: _matchingNodes(treeChanges.retained, mc.retained),
	            entering: _matchingNodes(treeChanges.entering, mc.entering),
	        };
	        // Check if all the criteria matched the TreeChanges object
	        var allMatched = ["to", "from", "exiting", "retained", "entering"]
	            .map(function (prop) { return matches[prop]; })
	            .reduce(common_1.allTrueR, true);
	        return allMatched ? matches : null;
	    };
	    return EventHook;
	}());
	exports.EventHook = EventHook;
	/** @hidden Return a registration function of the requested type. */
	function makeHookRegistrationFn(hooks, name) {
	    return function (matchObject, callback, options) {
	        if (options === void 0) { options = {}; }
	        var eventHook = new EventHook(matchObject, callback, options);
	        hooks[name].push(eventHook);
	        return function deregisterEventHook() {
	            eventHook._deregistered = true;
	            common_1.removeFrom(hooks[name])(eventHook);
	        };
	    };
	}
	/**
	 * Mixin class acts as a Transition Hook registry.
	 *
	 * Holds the registered [[HookFn]] objects.
	 * Exposes functions to register new hooks.
	 *
	 * This is a Mixin class which can be applied to other objects.
	 *
	 * The hook registration functions are [[onBefore]], [[onStart]], [[onEnter]], [[onRetain]], [[onExit]], [[onFinish]], [[onSuccess]], [[onError]].
	 *
	 * This class is mixed into both the [[TransitionService]] and every [[Transition]] object.
	 * Global hooks are added to the [[TransitionService]].
	 * Since each [[Transition]] is itself a `HookRegistry`, hooks can also be added to individual Transitions
	 * (note: the hook criteria still must match the Transition).
	 */
	var HookRegistry = (function () {
	    function HookRegistry() {
	        var _this = this;
	        this._transitionEvents = {
	            onBefore: [], onStart: [], onEnter: [], onRetain: [], onExit: [], onFinish: [], onSuccess: [], onError: []
	        };
	        this.getHooks = function (name) { return _this._transitionEvents[name]; };
	        /** @inheritdoc */
	        this.onBefore = makeHookRegistrationFn(this._transitionEvents, "onBefore");
	        /** @inheritdoc */
	        this.onStart = makeHookRegistrationFn(this._transitionEvents, "onStart");
	        /** @inheritdoc */
	        this.onEnter = makeHookRegistrationFn(this._transitionEvents, "onEnter");
	        /** @inheritdoc */
	        this.onRetain = makeHookRegistrationFn(this._transitionEvents, "onRetain");
	        /** @inheritdoc */
	        this.onExit = makeHookRegistrationFn(this._transitionEvents, "onExit");
	        /** @inheritdoc */
	        this.onFinish = makeHookRegistrationFn(this._transitionEvents, "onFinish");
	        /** @inheritdoc */
	        this.onSuccess = makeHookRegistrationFn(this._transitionEvents, "onSuccess");
	        /** @inheritdoc */
	        this.onError = makeHookRegistrationFn(this._transitionEvents, "onError");
	    }
	    HookRegistry.mixin = function (source, target) {
	        Object.keys(source._transitionEvents).concat(["getHooks"]).forEach(function (key) { return target[key] = source[key]; });
	    };
	    return HookRegistry;
	}());
	exports.HookRegistry = HookRegistry;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/** @module transition */ /** for typedoc */
	"use strict";
	var common_1 = __webpack_require__(3);
	var predicates_1 = __webpack_require__(4);
	var transitionHook_1 = __webpack_require__(13);
	var resolveContext_1 = __webpack_require__(17);
	/**
	 * This class returns applicable TransitionHooks for a specific Transition instance.
	 *
	 * Hooks (IEventHook) may be registered globally, e.g., $transitions.onEnter(...), or locally, e.g.
	 * myTransition.onEnter(...).  The HookBuilder finds matching IEventHooks (where the match criteria is
	 * determined by the type of hook)
	 *
	 * The HookBuilder also converts IEventHooks objects to TransitionHook objects, which are used to run a Transition.
	 *
	 * The HookBuilder constructor is given the $transitions service and a Transition instance.  Thus, a HookBuilder
	 * instance may only be used for one specific Transition object. (side note: the _treeChanges accessor is private
	 * in the Transition class, so we must also provide the Transition's _treeChanges)
	 *
	 */
	var HookBuilder = (function () {
	    function HookBuilder($transitions, transition, baseHookOptions) {
	        var _this = this;
	        this.$transitions = $transitions;
	        this.transition = transition;
	        this.baseHookOptions = baseHookOptions;
	        this.getOnBeforeHooks = function () { return _this._buildNodeHooks("onBefore", "to", tupleSort(), { async: false }); };
	        this.getOnStartHooks = function () { return _this._buildNodeHooks("onStart", "to", tupleSort()); };
	        this.getOnExitHooks = function () { return _this._buildNodeHooks("onExit", "exiting", tupleSort(true), { stateHook: true }); };
	        this.getOnRetainHooks = function () { return _this._buildNodeHooks("onRetain", "retained", tupleSort(false), { stateHook: true }); };
	        this.getOnEnterHooks = function () { return _this._buildNodeHooks("onEnter", "entering", tupleSort(false), { stateHook: true }); };
	        this.getOnFinishHooks = function () { return _this._buildNodeHooks("onFinish", "to", tupleSort()); };
	        this.getOnSuccessHooks = function () { return _this._buildNodeHooks("onSuccess", "to", tupleSort(), { async: false, rejectIfSuperseded: false }); };
	        this.getOnErrorHooks = function () { return _this._buildNodeHooks("onError", "to", tupleSort(), { async: false, rejectIfSuperseded: false }); };
	        this.treeChanges = transition.treeChanges();
	        this.toState = common_1.tail(this.treeChanges.to).state;
	        this.fromState = common_1.tail(this.treeChanges.from).state;
	        this.transitionOptions = transition.options();
	    }
	    HookBuilder.prototype.asyncHooks = function () {
	        var onStartHooks = this.getOnStartHooks();
	        var onExitHooks = this.getOnExitHooks();
	        var onRetainHooks = this.getOnRetainHooks();
	        var onEnterHooks = this.getOnEnterHooks();
	        var onFinishHooks = this.getOnFinishHooks();
	        var asyncHooks = [onStartHooks, onExitHooks, onRetainHooks, onEnterHooks, onFinishHooks];
	        return asyncHooks.reduce(common_1.unnestR, []).filter(common_1.identity);
	    };
	    /**
	     * Returns an array of newly built TransitionHook objects.
	     *
	     * - Finds all IEventHooks registered for the given `hookType` which matched the transition's [[TreeChanges]].
	     * - Finds [[PathNode]] (or `PathNode[]`) to use as the TransitionHook context(s)
	     * - For each of the [[PathNode]]s, creates a TransitionHook
	     *
	     * @param hookType the name of the hook registration function, e.g., 'onEnter', 'onFinish'.
	     * @param matchingNodesProp selects which [[PathNode]]s from the [[IMatchingNodes]] object to create hooks for.
	     * @param getLocals a function which accepts a [[PathNode]] and returns additional locals to provide to the hook as injectables
	     * @param sortHooksFn a function which compares two HookTuple and returns &lt;1, 0, or &gt;1
	     * @param options any specific Transition Hook Options
	     */
	    HookBuilder.prototype._buildNodeHooks = function (hookType, matchingNodesProp, sortHooksFn, options) {
	        var _this = this;
	        // Find all the matching registered hooks for a given hook type
	        var matchingHooks = this._matchingHooks(hookType, this.treeChanges);
	        if (!matchingHooks)
	            return [];
	        var makeTransitionHooks = function (hook) {
	            // Fetch the Nodes that caused this hook to match.
	            var matches = hook.matches(_this.treeChanges);
	            // Select the PathNode[] that will be used as TransitionHook context objects
	            var matchingNodes = matches[matchingNodesProp];
	            // When invoking 'exiting' hooks, give them the "from path" for resolve data.
	            // Everything else gets the "to path"
	            var resolvePath = matchingNodesProp === 'exiting' ? _this.treeChanges.from : _this.treeChanges.to;
	            var resolveContext = new resolveContext_1.ResolveContext(resolvePath);
	            // Return an array of HookTuples
	            return matchingNodes.map(function (node) {
	                var _options = common_1.extend({ bind: hook.bind, traceData: { hookType: hookType, context: node } }, _this.baseHookOptions, options);
	                var state = _options.stateHook ? node.state : null;
	                var transitionHook = new transitionHook_1.TransitionHook(_this.transition, state, hook, _options);
	                return { hook: hook, node: node, transitionHook: transitionHook };
	            });
	        };
	        return matchingHooks.map(makeTransitionHooks)
	            .reduce(common_1.unnestR, [])
	            .sort(sortHooksFn)
	            .map(function (tuple) { return tuple.transitionHook; });
	    };
	    /**
	     * Finds all IEventHooks from:
	     * - The Transition object instance hook registry
	     * - The TransitionService ($transitions) global hook registry
	     *
	     * which matched:
	     * - the eventType
	     * - the matchCriteria (to, from, exiting, retained, entering)
	     *
	     * @returns an array of matched [[IEventHook]]s
	     */
	    HookBuilder.prototype._matchingHooks = function (hookName, treeChanges) {
	        return [this.transition, this.$transitions] // Instance and Global hook registries
	            .map(function (reg) { return reg.getHooks(hookName); }) // Get named hooks from registries
	            .filter(common_1.assertPredicate(predicates_1.isArray, "broken event named: " + hookName)) // Sanity check
	            .reduce(common_1.unnestR, []) // Un-nest IEventHook[][] to IEventHook[] array
	            .filter(function (hook) { return hook.matches(treeChanges); }); // Only those satisfying matchCriteria
	    };
	    return HookBuilder;
	}());
	exports.HookBuilder = HookBuilder;
	/**
	 * A factory for a sort function for HookTuples.
	 *
	 * The sort function first compares the PathNode depth (how deep in the state tree a node is), then compares
	 * the EventHook priority.
	 *
	 * @param reverseDepthSort a boolean, when true, reverses the sort order for the node depth
	 * @returns a tuple sort function
	 */
	function tupleSort(reverseDepthSort) {
	    if (reverseDepthSort === void 0) { reverseDepthSort = false; }
	    return function nodeDepthThenPriority(l, r) {
	        var factor = reverseDepthSort ? -1 : 1;
	        var depthDelta = (l.node.state.path.length - r.node.state.path.length) * factor;
	        return depthDelta !== 0 ? depthDelta : r.hook.priority - l.hook.priority;
	    };
	}


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module resolve */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var hof_1 = __webpack_require__(5);
	var trace_1 = __webpack_require__(12);
	var coreservices_1 = __webpack_require__(6);
	var interface_1 = __webpack_require__(18);
	var resolvable_1 = __webpack_require__(19);
	var pathFactory_1 = __webpack_require__(20);
	var strings_1 = __webpack_require__(9);
	var when = interface_1.resolvePolicies.when;
	var ALL_WHENS = [when.EAGER, when.LAZY];
	var EAGER_WHENS = [when.EAGER];
	exports.NATIVE_INJECTOR_TOKEN = "Native Injector";
	/**
	 * Encapsulates Depenency Injection for a path of nodes
	 *
	 * UI-Router states are organized as a tree.
	 * A nested state has a path of ancestors to the root of the tree.
	 * When a state is being activated, each element in the path is wrapped as a [[PathNode]].
	 * A `PathNode` is a stateful object that holds things like parameters and resolvables for the state being activated.
	 *
	 * The ResolveContext closes over the [[PathNode]]s, and provides DI for the last node in the path.
	 */
	var ResolveContext = (function () {
	    function ResolveContext(_path) {
	        this._path = _path;
	    }
	    /** Gets all the tokens found in the resolve context, de-duplicated */
	    ResolveContext.prototype.getTokens = function () {
	        return this._path.reduce(function (acc, node) { return acc.concat(node.resolvables.map(function (r) { return r.token; })); }, []).reduce(common_1.uniqR, []);
	    };
	    /**
	     * Gets the Resolvable that matches the token
	     *
	     * Gets the last Resolvable that matches the token in this context, or undefined.
	     * Throws an error if it doesn't exist in the ResolveContext
	     */
	    ResolveContext.prototype.getResolvable = function (token) {
	        var matching = this._path.map(function (node) { return node.resolvables; })
	            .reduce(common_1.unnestR, [])
	            .filter(function (r) { return r.token === token; });
	        return common_1.tail(matching);
	    };
	    /**
	     * Returns a ResolveContext that includes a portion of this one
	     *
	     * Given a state, this method creates a new ResolveContext from this one.
	     * The new context starts at the first node (root) and stops at the node for the `state` parameter.
	     *
	     * #### Why
	     *
	     * When a transition is created, the nodes in the "To Path" are injected from a ResolveContext.
	     * A ResolveContext closes over a path of [[PathNode]]s and processes the resolvables.
	     * The "To State" can inject values from its own resolvables, as well as those from all its ancestor state's (node's).
	     * This method is used to create a narrower context when injecting ancestor nodes.
	     *
	     * @example
	     * `let ABCD = new ResolveContext([A, B, C, D]);`
	     *
	     * Given a path `[A, B, C, D]`, where `A`, `B`, `C` and `D` are nodes for states `a`, `b`, `c`, `d`:
	     * When injecting `D`, `D` should have access to all resolvables from `A`, `B`, `C`, `D`.
	     * However, `B` should only be able to access resolvables from `A`, `B`.
	     *
	     * When resolving for the `B` node, first take the full "To Path" Context `[A,B,C,D]` and limit to the subpath `[A,B]`.
	     * `let AB = ABCD.subcontext(a)`
	     */
	    ResolveContext.prototype.subContext = function (state) {
	        return new ResolveContext(pathFactory_1.PathFactory.subPath(this._path, function (node) { return node.state === state; }));
	    };
	    /**
	     * Adds Resolvables to the node that matches the state
	     *
	     * This adds a [[Resolvable]] (generally one created on the fly; not declared on a [[StateDeclaration.resolve]] block).
	     * The resolvable is added to the node matching the `state` parameter.
	     *
	     * These new resolvables are not automatically fetched.
	     * The calling code should either fetch them, fetch something that depends on them,
	     * or rely on [[resolvePath]] being called when some state is being entered.
	     *
	     * Note: each resolvable's [[ResolvePolicy]] is merged with the state's policy, and the global default.
	     *
	     * @param newResolvables the new Resolvables
	     * @param state Used to find the node to put the resolvable on
	     */
	    ResolveContext.prototype.addResolvables = function (newResolvables, state) {
	        var node = common_1.find(this._path, hof_1.propEq('state', state));
	        var keys = newResolvables.map(function (r) { return r.token; });
	        node.resolvables = node.resolvables.filter(function (r) { return keys.indexOf(r.token) === -1; }).concat(newResolvables);
	    };
	    /**
	     * Returns a promise for an array of resolved path Element promises
	     *
	     * @param when
	     * @param trans
	     * @returns {Promise&lt;any&gt;|any}
	     */
	    ResolveContext.prototype.resolvePath = function (when, trans) {
	        var _this = this;
	        if (when === void 0) { when = "LAZY"; }
	        // This option determines which 'when' policy Resolvables we are about to fetch.
	        var whenOption = common_1.inArray(ALL_WHENS, when) ? when : "LAZY";
	        // If the caller specified EAGER, only the EAGER Resolvables are fetched.
	        // if the caller specified LAZY, both EAGER and LAZY Resolvables are fetched.`
	        var matchedWhens = whenOption === interface_1.resolvePolicies.when.EAGER ? EAGER_WHENS : ALL_WHENS;
	        // get the subpath to the state argument, if provided
	        trace_1.trace.traceResolvePath(this._path, when, trans);
	        var promises = this._path.reduce(function (acc, node) {
	            var matchesRequestedPolicy = function (resolvable) {
	                return common_1.inArray(matchedWhens, resolvable.getPolicy(node.state).when);
	            };
	            var nodeResolvables = node.resolvables.filter(matchesRequestedPolicy);
	            var subContext = _this.subContext(node.state);
	            // For the matching Resolvables, start their async fetch process.
	            var getResult = function (r) { return r.get(subContext, trans)
	                .then(function (value) { return ({ token: r.token, value: value }); }); };
	            return acc.concat(nodeResolvables.map(getResult));
	        }, []);
	        return coreservices_1.services.$q.all(promises);
	    };
	    ResolveContext.prototype.injector = function () {
	        return this._injector || (this._injector = new UIInjectorImpl(this));
	    };
	    ResolveContext.prototype.findNode = function (resolvable) {
	        return common_1.find(this._path, function (node) { return common_1.inArray(node.resolvables, resolvable); });
	    };
	    /**
	     * Gets the async dependencies of a Resolvable
	     *
	     * Given a Resolvable, returns its dependencies as a Resolvable[]
	     */
	    ResolveContext.prototype.getDependencies = function (resolvable) {
	        var _this = this;
	        var node = this.findNode(resolvable);
	        // Find which other resolvables are "visible" to the `resolvable` argument
	        // subpath stopping at resolvable's node, or the whole path (if the resolvable isn't in the path)
	        var subPath = pathFactory_1.PathFactory.subPath(this._path, function (x) { return x === node; }) || this._path;
	        var availableResolvables = subPath
	            .reduce(function (acc, node) { return acc.concat(node.resolvables); }, []) //all of subpath's resolvables
	            .filter(function (res) { return res !== resolvable; }); // filter out the `resolvable` argument
	        var getDependency = function (token) {
	            var matching = availableResolvables.filter(function (r) { return r.token === token; });
	            if (matching.length)
	                return common_1.tail(matching);
	            var fromInjector = _this.injector().getNative(token);
	            if (!fromInjector) {
	                throw new Error("Could not find Dependency Injection token: " + strings_1.stringify(token));
	            }
	            return new resolvable_1.Resolvable(token, function () { return fromInjector; }, [], fromInjector);
	        };
	        return resolvable.deps.map(getDependency);
	    };
	    return ResolveContext;
	}());
	exports.ResolveContext = ResolveContext;
	var UIInjectorImpl = (function () {
	    function UIInjectorImpl(context) {
	        this.context = context;
	        this.native = this.get(exports.NATIVE_INJECTOR_TOKEN) || coreservices_1.services.$injector;
	    }
	    UIInjectorImpl.prototype.get = function (token) {
	        var resolvable = this.context.getResolvable(token);
	        if (resolvable) {
	            if (!resolvable.resolved) {
	                throw new Error("Resolvable async .get() not complete:" + strings_1.stringify(resolvable.token));
	            }
	            return resolvable.data;
	        }
	        return this.native &amp;&amp; this.native.get(token);
	    };
	    UIInjectorImpl.prototype.getAsync = function (token) {
	        var resolvable = this.context.getResolvable(token);
	        if (resolvable)
	            return resolvable.get(this.context);
	        return coreservices_1.services.$q.when(this.native.get(token));
	    };
	    UIInjectorImpl.prototype.getNative = function (token) {
	        return this.native.get(token);
	    };
	    return UIInjectorImpl;
	}());


/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	exports.resolvePolicies = {
	    when: {
	        LAZY: "LAZY",
	        EAGER: "EAGER"
	    },
	    async: {
	        WAIT: "WAIT",
	        NOWAIT: "NOWAIT",
	        RXWAIT: "RXWAIT"
	    }
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module resolve */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var coreservices_1 = __webpack_require__(6);
	var trace_1 = __webpack_require__(12);
	var strings_1 = __webpack_require__(9);
	var predicates_1 = __webpack_require__(4);
	// TODO: explicitly make this user configurable
	exports.defaultResolvePolicy = {
	    when: "LAZY",
	    async: "WAIT"
	};
	/**
	 * The basic building block for the resolve system.
	 *
	 * Resolvables encapsulate a state's resolve's resolveFn, the resolveFn's declared dependencies, the wrapped (.promise),
	 * and the unwrapped-when-complete (.data) result of the resolveFn.
	 *
	 * Resolvable.get() either retrieves the Resolvable's existing promise, or else invokes resolve() (which invokes the
	 * resolveFn) and returns the resulting promise.
	 *
	 * Resolvable.get() and Resolvable.resolve() both execute within a context path, which is passed as the first
	 * parameter to those fns.
	 */
	var Resolvable = (function () {
	    function Resolvable(arg1, resolveFn, deps, policy, data) {
	        this.resolved = false;
	        this.promise = undefined;
	        if (arg1 instanceof Resolvable) {
	            common_1.extend(this, arg1);
	        }
	        else if (predicates_1.isFunction(resolveFn)) {
	            if (arg1 == null || arg1 == undefined)
	                throw new Error("new Resolvable(): token argument is required");
	            if (!predicates_1.isFunction(resolveFn))
	                throw new Error("new Resolvable(): resolveFn argument must be a function");
	            this.token = arg1;
	            this.policy = policy;
	            this.resolveFn = resolveFn;
	            this.deps = deps || [];
	            this.data = data;
	            this.resolved = data !== undefined;
	            this.promise = this.resolved ? coreservices_1.services.$q.when(this.data) : undefined;
	        }
	        else if (predicates_1.isObject(arg1) &amp;&amp; arg1.token &amp;&amp; predicates_1.isFunction(arg1.resolveFn)) {
	            var literal = arg1;
	            return new Resolvable(literal.token, literal.resolveFn, literal.deps, literal.policy, literal.data);
	        }
	    }
	    Resolvable.prototype.getPolicy = function (state) {
	        var thisPolicy = this.policy || {};
	        var statePolicy = state &amp;&amp; state.resolvePolicy || {};
	        return {
	            when: thisPolicy.when || statePolicy.when || exports.defaultResolvePolicy.when,
	            async: thisPolicy.async || statePolicy.async || exports.defaultResolvePolicy.async,
	        };
	    };
	    /**
	     * Asynchronously resolve this Resolvable's data
	     *
	     * Given a ResolveContext that this Resolvable is found in:
	     * Wait for this Resolvable's dependencies, then invoke this Resolvable's function
	     * and update the Resolvable's state
	     */
	    Resolvable.prototype.resolve = function (resolveContext, trans) {
	        var _this = this;
	        var $q = coreservices_1.services.$q;
	        // Gets all dependencies from ResolveContext and wait for them to be resolved
	        var getResolvableDependencies = function () {
	            return $q.all(resolveContext.getDependencies(_this).map(function (r) {
	                return r.get(resolveContext, trans);
	            }));
	        };
	        // Invokes the resolve function passing the resolved dependencies as arguments
	        var invokeResolveFn = function (resolvedDeps) {
	            return _this.resolveFn.apply(null, resolvedDeps);
	        };
	        /**
	         * For RXWAIT policy:
	         *
	         * Given an observable returned from a resolve function:
	         * - enables .cache() mode (this allows multicast subscribers)
	         * - then calls toPromise() (this triggers subscribe() and thus fetches)
	         * - Waits for the promise, then return the cached observable (not the first emitted value).
	         */
	        var waitForRx = function (observable$) {
	            var cached = observable$.cache(1);
	            return cached.take(1).toPromise().then(function () { return cached; });
	        };
	        // If the resolve policy is RXWAIT, wait for the observable to emit something. otherwise pass through.
	        var node = resolveContext.findNode(this);
	        var state = node &amp;&amp; node.state;
	        var maybeWaitForRx = this.getPolicy(state).async === "RXWAIT" ? waitForRx : common_1.identity;
	        // After the final value has been resolved, update the state of the Resolvable
	        var applyResolvedValue = function (resolvedValue) {
	            _this.data = resolvedValue;
	            _this.resolved = true;
	            trace_1.trace.traceResolvableResolved(_this, trans);
	            return _this.data;
	        };
	        // Sets the promise property first, then getsResolvableDependencies in the context of the promise chain. Always waits one tick.
	        return this.promise = $q.when()
	            .then(getResolvableDependencies)
	            .then(invokeResolveFn)
	            .then(maybeWaitForRx)
	            .then(applyResolvedValue);
	    };
	    /**
	     * Gets a promise for this Resolvable's data.
	     *
	     * Fetches the data and returns a promise.
	     * Returns the existing promise if it has already been fetched once.
	     */
	    Resolvable.prototype.get = function (resolveContext, trans) {
	        return this.promise || this.resolve(resolveContext, trans);
	    };
	    Resolvable.prototype.toString = function () {
	        return "Resolvable(token: " + strings_1.stringify(this.token) + ", requires: [" + this.deps.map(strings_1.stringify) + "])";
	    };
	    Resolvable.prototype.clone = function () {
	        return new Resolvable(this);
	    };
	    Resolvable.fromData = function (token, data) {
	        return new Resolvable(token, function () { return data; }, null, null, data);
	    };
	    return Resolvable;
	}());
	exports.Resolvable = Resolvable;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/** @module path */ /** for typedoc */
	"use strict";
	var common_1 = __webpack_require__(3);
	var hof_1 = __webpack_require__(5);
	var targetState_1 = __webpack_require__(14);
	var node_1 = __webpack_require__(21);
	/**
	 * This class contains functions which convert TargetStates, Nodes and paths from one type to another.
	 */
	var PathFactory = (function () {
	    function PathFactory() {
	    }
	    /** Given a PathNode[], create an TargetState */
	    PathFactory.makeTargetState = function (path) {
	        var state = common_1.tail(path).state;
	        return new targetState_1.TargetState(state, state, path.map(hof_1.prop("paramValues")).reduce(common_1.mergeR, {}));
	    };
	    PathFactory.buildPath = function (targetState) {
	        var toParams = targetState.params();
	        return targetState.$state().path.map(function (state) { return new node_1.PathNode(state).applyRawParams(toParams); });
	    };
	    /** Given a fromPath: PathNode[] and a TargetState, builds a toPath: PathNode[] */
	    PathFactory.buildToPath = function (fromPath, targetState) {
	        var toPath = PathFactory.buildPath(targetState);
	        if (targetState.options().inherit) {
	            return PathFactory.inheritParams(fromPath, toPath, Object.keys(targetState.params()));
	        }
	        return toPath;
	    };
	    /**
	     * Creates ViewConfig objects and adds to nodes.
	     *
	     * On each [[PathNode]], creates ViewConfig objects from the views: property of the node's state
	     */
	    PathFactory.applyViewConfigs = function ($view, path, states) {
	        // Only apply the viewConfigs to the nodes for the given states
	        path.filter(function (node) { return common_1.inArray(states, node.state); }).forEach(function (node) {
	            var viewDecls = common_1.values(node.state.views || {});
	            var subPath = PathFactory.subPath(path, function (n) { return n === node; });
	            var viewConfigs = viewDecls.map(function (view) { return $view.createViewConfig(subPath, view); });
	            node.views = viewConfigs.reduce(common_1.unnestR, []);
	        });
	    };
	    /**
	     * Given a fromPath and a toPath, returns a new to path which inherits parameters from the fromPath
	     *
	     * For a parameter in a node to be inherited from the from path:
	     * - The toPath's node must have a matching node in the fromPath (by state).
	     * - The parameter name must not be found in the toKeys parameter array.
	     *
	     * Note: the keys provided in toKeys are intended to be those param keys explicitly specified by some
	     * caller, for instance, $state.transitionTo(..., toParams).  If a key was found in toParams,
	     * it is not inherited from the fromPath.
	     */
	    PathFactory.inheritParams = function (fromPath, toPath, toKeys) {
	        if (toKeys === void 0) { toKeys = []; }
	        function nodeParamVals(path, state) {
	            var node = common_1.find(path, hof_1.propEq('state', state));
	            return common_1.extend({}, node &amp;&amp; node.paramValues);
	        }
	        /**
	         * Given an [[PathNode]] "toNode", return a new [[PathNode]] with param values inherited from the
	         * matching node in fromPath.  Only inherit keys that aren't found in "toKeys" from the node in "fromPath""
	         */
	        function makeInheritedParamsNode(toNode) {
	            // All param values for the node (may include default key/vals, when key was not found in toParams)
	            var toParamVals = common_1.extend({}, toNode &amp;&amp; toNode.paramValues);
	            // limited to only those keys found in toParams
	            var incomingParamVals = common_1.pick(toParamVals, toKeys);
	            toParamVals = common_1.omit(toParamVals, toKeys);
	            var fromParamVals = nodeParamVals(fromPath, toNode.state) || {};
	            // extend toParamVals with any fromParamVals, then override any of those those with incomingParamVals
	            var ownParamVals = common_1.extend(toParamVals, fromParamVals, incomingParamVals);
	            return new node_1.PathNode(toNode.state).applyRawParams(ownParamVals);
	        }
	        // The param keys specified by the incoming toParams
	        return toPath.map(makeInheritedParamsNode);
	    };
	    /**
	     * Computes the tree changes (entering, exiting) between a fromPath and toPath.
	     */
	    PathFactory.treeChanges = function (fromPath, toPath, reloadState) {
	        var keep = 0, max = Math.min(fromPath.length, toPath.length);
	        var staticParams = function (state) {
	            return state.parameters({ inherit: false }).filter(hof_1.not(hof_1.prop('dynamic'))).map(hof_1.prop('id'));
	        };
	        var nodesMatch = function (node1, node2) {
	            return node1.equals(node2, staticParams(node1.state));
	        };
	        while (keep &lt; max &amp;&amp; fromPath[keep].state !== reloadState &amp;&amp; nodesMatch(fromPath[keep], toPath[keep])) {
	            keep++;
	        }
	        /** Given a retained node, return a new node which uses the to node's param values */
	        function applyToParams(retainedNode, idx) {
	            var cloned = node_1.PathNode.clone(retainedNode);
	            cloned.paramValues = toPath[idx].paramValues;
	            return cloned;
	        }
	        var from, retained, exiting, entering, to;
	        from = fromPath;
	        retained = from.slice(0, keep);
	        exiting = from.slice(keep);
	        // Create a new retained path (with shallow copies of nodes) which have the params of the toPath mapped
	        var retainedWithToParams = retained.map(applyToParams);
	        entering = toPath.slice(keep);
	        to = (retainedWithToParams).concat(entering);
	        return { from: from, to: to, retained: retained, exiting: exiting, entering: entering };
	    };
	    /**
	     * Return a subpath of a path, which stops at the first matching node
	     *
	     * Given an array of nodes, returns a subset of the array starting from the first node,
	     * stopping when the first node matches the predicate.
	     *
	     * @param path a path of [[PathNode]]s
	     * @param predicate a [[Predicate]] fn that matches [[PathNode]]s
	     * @returns a subpath up to the matching node, or undefined if no match is found
	     */
	    PathFactory.subPath = function (path, predicate) {
	        var node = common_1.find(path, predicate);
	        var elementIdx = path.indexOf(node);
	        return elementIdx === -1 ? undefined : path.slice(0, elementIdx + 1);
	    };
	    /** Gets the raw parameter values from a path */
	    PathFactory.paramValues = function (path) { return path.reduce(function (acc, node) { return common_1.extend(acc, node.paramValues); }, {}); };
	    return PathFactory;
	}());
	exports.PathFactory = PathFactory;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module path */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var hof_1 = __webpack_require__(5);
	var param_1 = __webpack_require__(22);
	/**
	 * A node in a [[TreeChanges]] path
	 *
	 * For a [[TreeChanges]] path, this class holds the stateful information for a single node in the path.
	 * Each PathNode corresponds to a state being entered, exited, or retained.
	 * The stateful information includes parameter values and resolve data.
	 */
	var PathNode = (function () {
	    function PathNode(stateOrPath) {
	        if (stateOrPath instanceof PathNode) {
	            var node = stateOrPath;
	            this.state = node.state;
	            this.paramSchema = node.paramSchema.slice();
	            this.paramValues = common_1.extend({}, node.paramValues);
	            this.resolvables = node.resolvables.slice();
	            this.views = node.views &amp;&amp; node.views.slice();
	        }
	        else {
	            var state = stateOrPath;
	            this.state = state;
	            this.paramSchema = state.parameters({ inherit: false });
	            this.paramValues = {};
	            this.resolvables = state.resolvables.map(function (res) { return res.clone(); });
	        }
	    }
	    /** Sets [[paramValues]] for the node, from the values of an object hash */
	    PathNode.prototype.applyRawParams = function (params) {
	        var getParamVal = function (paramDef) { return [paramDef.id, paramDef.value(params[paramDef.id])]; };
	        this.paramValues = this.paramSchema.reduce(function (memo, pDef) { return common_1.applyPairs(memo, getParamVal(pDef)); }, {});
	        return this;
	    };
	    /** Gets a specific [[Param]] metadata that belongs to the node */
	    PathNode.prototype.parameter = function (name) {
	        return common_1.find(this.paramSchema, hof_1.propEq("id", name));
	    };
	    /**
	     * @returns true if the state and parameter values for another PathNode are
	     * equal to the state and param values for this PathNode
	     */
	    PathNode.prototype.equals = function (node, keys) {
	        var _this = this;
	        if (keys === void 0) { keys = this.paramSchema.map(function (p) { return p.id; }); }
	        var paramValsEq = function (key) {
	            return _this.parameter(key).type.equals(_this.paramValues[key], node.paramValues[key]);
	        };
	        return this.state === node.state &amp;&amp; keys.map(paramValsEq).reduce(common_1.allTrueR, true);
	    };
	    /** Returns a clone of the PathNode */
	    PathNode.clone = function (node) {
	        return new PathNode(node);
	    };
	    /**
	     * Returns a new path which is a subpath of the first path which matched the second path.
	     *
	     * The new path starts from root and contains any nodes that match the nodes in the second path.
	     * Nodes are compared using their state property and parameter values.
	     *
	     * @param pathA the first path
	     * @param pathB the second path
	     * @param ignoreDynamicParams don't compare dynamic parameter values
	     */
	    PathNode.matching = function (pathA, pathB, ignoreDynamicParams) {
	        if (ignoreDynamicParams === void 0) { ignoreDynamicParams = true; }
	        var matching = [];
	        for (var i = 0; i &lt; pathA.length &amp;&amp; i &lt; pathB.length; i++) {
	            var a = pathA[i], b = pathB[i];
	            if (a.state !== b.state)
	                break;
	            var changedParams = param_1.Param.changed(a.paramSchema, a.paramValues, b.paramValues)
	                .filter(function (param) { return !(ignoreDynamicParams &amp;&amp; param.dynamic); });
	            if (changedParams.length)
	                break;
	            matching.push(a);
	        }
	        return matching;
	    };
	    return PathNode;
	}());
	exports.PathNode = PathNode;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module params */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var hof_1 = __webpack_require__(5);
	var predicates_1 = __webpack_require__(4);
	var coreservices_1 = __webpack_require__(6);
	var urlMatcherConfig_1 = __webpack_require__(23);
	var type_1 = __webpack_require__(24);
	var hasOwn = Object.prototype.hasOwnProperty;
	var isShorthand = function (cfg) {
	    return ["value", "type", "squash", "array", "dynamic"].filter(hasOwn.bind(cfg || {})).length === 0;
	};
	(function (DefType) {
	    DefType[DefType["PATH"] = 0] = "PATH";
	    DefType[DefType["SEARCH"] = 1] = "SEARCH";
	    DefType[DefType["CONFIG"] = 2] = "CONFIG";
	})(exports.DefType || (exports.DefType = {}));
	var DefType = exports.DefType;
	function unwrapShorthand(cfg) {
	    cfg = isShorthand(cfg) &amp;&amp; { value: cfg } || cfg;
	    return common_1.extend(cfg, {
	        $$fn: predicates_1.isInjectable(cfg.value) ? cfg.value : function () { return cfg.value; }
	    });
	}
	function getType(cfg, urlType, location, id, paramTypes) {
	    if (cfg.type &amp;&amp; urlType &amp;&amp; urlType.name !== 'string')
	        throw new Error("Param '" + id + "' has two type configurations.");
	    if (cfg.type &amp;&amp; urlType &amp;&amp; urlType.name === 'string' &amp;&amp; paramTypes.type(cfg.type))
	        return paramTypes.type(cfg.type);
	    if (urlType)
	        return urlType;
	    if (!cfg.type)
	        return (location === DefType.CONFIG ? paramTypes.type("any") : paramTypes.type("string"));
	    return cfg.type instanceof type_1.ParamType ? cfg.type : paramTypes.type(cfg.type);
	}
	/**
	 * returns false, true, or the squash value to indicate the "default parameter url squash policy".
	 */
	function getSquashPolicy(config, isOptional) {
	    var squash = config.squash;
	    if (!isOptional || squash === false)
	        return false;
	    if (!predicates_1.isDefined(squash) || squash == null)
	        return urlMatcherConfig_1.matcherConfig.defaultSquashPolicy();
	    if (squash === true || predicates_1.isString(squash))
	        return squash;
	    throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");
	}
	function getReplace(config, arrayMode, isOptional, squash) {
	    var replace, configuredKeys, defaultPolicy = [
	        { from: "", to: (isOptional || arrayMode ? undefined : "") },
	        { from: null, to: (isOptional || arrayMode ? undefined : "") }
	    ];
	    replace = predicates_1.isArray(config.replace) ? config.replace : [];
	    if (predicates_1.isString(squash))
	        replace.push({ from: squash, to: undefined });
	    configuredKeys = common_1.map(replace, hof_1.prop("from"));
	    return common_1.filter(defaultPolicy, function (item) { return configuredKeys.indexOf(item.from) === -1; }).concat(replace);
	}
	var Param = (function () {
	    function Param(id, type, config, location, paramTypes) {
	        config = unwrapShorthand(config);
	        type = getType(config, type, location, id, paramTypes);
	        var arrayMode = getArrayMode();
	        type = arrayMode ? type.$asArray(arrayMode, location === DefType.SEARCH) : type;
	        var isOptional = config.value !== undefined;
	        var dynamic = predicates_1.isDefined(config.dynamic) ? !!config.dynamic : !!type.dynamic;
	        var squash = getSquashPolicy(config, isOptional);
	        var replace = getReplace(config, arrayMode, isOptional, squash);
	        // array config: param name (param[]) overrides default settings.  explicit config overrides param name.
	        function getArrayMode() {
	            var arrayDefaults = { array: (location === DefType.SEARCH ? "auto" : false) };
	            var arrayParamNomenclature = id.match(/\[\]$/) ? { array: true } : {};
	            return common_1.extend(arrayDefaults, arrayParamNomenclature, config).array;
	        }
	        common_1.extend(this, { id: id, type: type, location: location, squash: squash, replace: replace, isOptional: isOptional, dynamic: dynamic, config: config, array: arrayMode });
	    }
	    Param.prototype.isDefaultValue = function (value) {
	        return this.isOptional &amp;&amp; this.type.equals(this.value(), value);
	    };
	    /**
	     * [Internal] Gets the decoded representation of a value if the value is defined, otherwise, returns the
	     * default value, which may be the result of an injectable function.
	     */
	    Param.prototype.value = function (value) {
	        var _this = this;
	        /**
	         * [Internal] Get the default value of a parameter, which may be an injectable function.
	         */
	        var $$getDefaultValue = function () {
	            if (!coreservices_1.services.$injector)
	                throw new Error("Injectable functions cannot be called at configuration time");
	            var defaultValue = coreservices_1.services.$injector.invoke(_this.config.$$fn);
	            if (defaultValue !== null &amp;&amp; defaultValue !== undefined &amp;&amp; !_this.type.is(defaultValue))
	                throw new Error("Default value (" + defaultValue + ") for parameter '" + _this.id + "' is not an instance of ParamType (" + _this.type.name + ")");
	            return defaultValue;
	        };
	        var $replace = function (val) {
	            var replacement = common_1.map(common_1.filter(_this.replace, hof_1.propEq('from', val)), hof_1.prop("to"));
	            return replacement.length ? replacement[0] : val;
	        };
	        value = $replace(value);
	        return !predicates_1.isDefined(value) ? $$getDefaultValue() : this.type.$normalize(value);
	    };
	    Param.prototype.isSearch = function () {
	        return this.location === DefType.SEARCH;
	    };
	    Param.prototype.validates = function (value) {
	        // There was no parameter value, but the param is optional
	        if ((!predicates_1.isDefined(value) || value === null) &amp;&amp; this.isOptional)
	            return true;
	        // The value was not of the correct ParamType, and could not be decoded to the correct ParamType
	        var normalized = this.type.$normalize(value);
	        if (!this.type.is(normalized))
	            return false;
	        // The value was of the correct type, but when encoded, did not match the ParamType's regexp
	        var encoded = this.type.encode(normalized);
	        return !(predicates_1.isString(encoded) &amp;&amp; !this.type.pattern.exec(encoded));
	    };
	    Param.prototype.toString = function () {
	        return "{Param:" + this.id + " " + this.type + " squash: '" + this.squash + "' optional: " + this.isOptional + "}";
	    };
	    /** Creates a new [[Param]] from a CONFIG block */
	    Param.fromConfig = function (id, type, config, paramTypes) {
	        return new Param(id, type, config, DefType.CONFIG, paramTypes);
	    };
	    /** Creates a new [[Param]] from a url PATH */
	    Param.fromPath = function (id, type, config, paramTypes) {
	        return new Param(id, type, config, DefType.PATH, paramTypes);
	    };
	    /** Creates a new [[Param]] from a url SEARCH */
	    Param.fromSearch = function (id, type, config, paramTypes) {
	        return new Param(id, type, config, DefType.SEARCH, paramTypes);
	    };
	    Param.values = function (params, values) {
	        if (values === void 0) { values = {}; }
	        return params.map(function (param) { return [param.id, param.value(values[param.id])]; }).reduce(common_1.applyPairs, {});
	    };
	    /**
	     * Finds [[Param]] objects which have different param values
	     *
	     * Filters a list of [[Param]] objects to only those whose parameter values differ in two param value objects
	     *
	     * @param params: The list of Param objects to filter
	     * @param values1: The first set of parameter values
	     * @param values2: the second set of parameter values
	     *
	     * @returns any Param objects whose values were different between values1 and values2
	     */
	    Param.changed = function (params, values1, values2) {
	        if (values1 === void 0) { values1 = {}; }
	        if (values2 === void 0) { values2 = {}; }
	        return params.filter(function (param) { return !param.type.equals(values1[param.id], values2[param.id]); });
	    };
	    /**
	     * Checks if two param value objects are equal (for a set of [[Param]] objects)
	     *
	     * @param params The list of [[Param]] objects to check
	     * @param values1 The first set of param values
	     * @param values2 The second set of param values
	     *
	     * @returns true if the param values in values1 and values2 are equal
	     */
	    Param.equals = function (params, values1, values2) {
	        if (values1 === void 0) { values1 = {}; }
	        if (values2 === void 0) { values2 = {}; }
	        return Param.changed(params, values1, values2).length === 0;
	    };
	    /** Returns true if a the parameter values are valid, according to the Param definitions */
	    Param.validates = function (params, values) {
	        if (values === void 0) { values = {}; }
	        return params.map(function (param) { return param.validates(values[param.id]); }).reduce(common_1.allTrueR, true);
	    };
	    return Param;
	}());
	exports.Param = Param;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module url */ /** for typedoc */
	var predicates_1 = __webpack_require__(4);
	var MatcherConfig = (function () {
	    function MatcherConfig() {
	        this._isCaseInsensitive = false;
	        this._isStrictMode = true;
	        this._defaultSquashPolicy = false;
	    }
	    MatcherConfig.prototype.caseInsensitive = function (value) {
	        return this._isCaseInsensitive = predicates_1.isDefined(value) ? value : this._isCaseInsensitive;
	    };
	    MatcherConfig.prototype.strictMode = function (value) {
	        return this._isStrictMode = predicates_1.isDefined(value) ? value : this._isStrictMode;
	    };
	    MatcherConfig.prototype.defaultSquashPolicy = function (value) {
	        if (predicates_1.isDefined(value) &amp;&amp; value !== true &amp;&amp; value !== false &amp;&amp; !predicates_1.isString(value))
	            throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");
	        return this._defaultSquashPolicy = predicates_1.isDefined(value) ? value : this._defaultSquashPolicy;
	    };
	    return MatcherConfig;
	}());
	exports.MatcherConfig = MatcherConfig;
	// TODO: Do not export global instance; create one in UIRouter() constructor
	exports.matcherConfig = new MatcherConfig();


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module params */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var predicates_1 = __webpack_require__(4);
	/**
	 * Wraps up a `ParamType` object to handle array values.
	 */
	function ArrayType(type, mode) {
	    var _this = this;
	    // Wrap non-array value as array
	    function arrayWrap(val) {
	        return predicates_1.isArray(val) ? val : (predicates_1.isDefined(val) ? [val] : []);
	    }
	    // Unwrap array value for "auto" mode. Return undefined for empty array.
	    function arrayUnwrap(val) {
	        switch (val.length) {
	            case 0: return undefined;
	            case 1: return mode === "auto" ? val[0] : val;
	            default: return val;
	        }
	    }
	    // Wraps type (.is/.encode/.decode) functions to operate on each value of an array
	    function arrayHandler(callback, allTruthyMode) {
	        return function handleArray(val) {
	            if (predicates_1.isArray(val) &amp;&amp; val.length === 0)
	                return val;
	            var arr = arrayWrap(val);
	            var result = common_1.map(arr, callback);
	            return (allTruthyMode === true) ? common_1.filter(result, function (x) { return !x; }).length === 0 : arrayUnwrap(result);
	        };
	    }
	    // Wraps type (.equals) functions to operate on each value of an array
	    function arrayEqualsHandler(callback) {
	        return function handleArray(val1, val2) {
	            var left = arrayWrap(val1), right = arrayWrap(val2);
	            if (left.length !== right.length)
	                return false;
	            for (var i = 0; i &lt; left.length; i++) {
	                if (!callback(left[i], right[i]))
	                    return false;
	            }
	            return true;
	        };
	    }
	    ['encode', 'decode', 'equals', '$normalize'].forEach(function (name) {
	        var paramTypeFn = type[name].bind(type);
	        var wrapperFn = name === 'equals' ? arrayEqualsHandler : arrayHandler;
	        _this[name] = wrapperFn(paramTypeFn);
	    });
	    common_1.extend(this, {
	        dynamic: type.dynamic,
	        name: type.name,
	        pattern: type.pattern,
	        is: arrayHandler(type.is.bind(type), true),
	        $arrayMode: mode
	    });
	}
	/**
	 * A class that implements Custom Parameter Type functionality.
	 *
	 * This class has naive implementations for all the [[ParamTypeDefinition]] methods.
	 *
	 * An instance of this class is created when a custom [[ParamTypeDefinition]] object is registered with the [[UrlMatcherFactory.type]].
	 *
	 * Used by [[UrlMatcher]] when matching or formatting URLs, or comparing and validating parameter values.
	 *
	 * @example
	 * ```
	 *
	 * {
	 *   decode: function(val) { return parseInt(val, 10); },
	 *   encode: function(val) { return val &amp;&amp; val.toString(); },
	 *   equals: function(a, b) { return this.is(a) &amp;&amp; a === b; },
	 *   is: function(val) { return angular.isNumber(val) &amp;&amp; isFinite(val) &amp;&amp; val % 1 === 0; },
	 *   pattern: /\d+/
	 * }
	 * ```
	 */
	var ParamType = (function () {
	    /**
	     * @param def  A configuration object which contains the custom type definition.  The object's
	     *        properties will override the default methods and/or pattern in `ParamType`'s public interface.
	     * @returns a new ParamType object
	     */
	    function ParamType(def) {
	        this.pattern = /.*/;
	        common_1.extend(this, def);
	    }
	    // consider these four methods to be "abstract methods" that should be overridden
	    /** @inheritdoc */
	    ParamType.prototype.is = function (val, key) { return true; };
	    /** @inheritdoc */
	    ParamType.prototype.encode = function (val, key) { return val; };
	    /** @inheritdoc */
	    ParamType.prototype.decode = function (val, key) { return val; };
	    /** @inheritdoc */
	    ParamType.prototype.equals = function (a, b) { return a == b; };
	    ParamType.prototype.$subPattern = function () {
	        var sub = this.pattern.toString();
	        return sub.substr(1, sub.length - 2);
	    };
	    ParamType.prototype.toString = function () {
	        return "{ParamType:" + this.name + "}";
	    };
	    /** Given an encoded string, or a decoded object, returns a decoded object */
	    ParamType.prototype.$normalize = function (val) {
	        return this.is(val) ? val : this.decode(val);
	    };
	    /**
	     * Wraps an existing custom ParamType as an array of ParamType, depending on 'mode'.
	     * e.g.:
	     * - urlmatcher pattern "/path?{queryParam[]:int}"
	     * - url: "/path?queryParam=1&amp;queryParam=2
	     * - $stateParams.queryParam will be [1, 2]
	     * if `mode` is "auto", then
	     * - url: "/path?queryParam=1 will create $stateParams.queryParam: 1
	     * - url: "/path?queryParam=1&amp;queryParam=2 will create $stateParams.queryParam: [1, 2]
	     */
	    ParamType.prototype.$asArray = function (mode, isSearch) {
	        if (!mode)
	            return this;
	        if (mode === "auto" &amp;&amp; !isSearch)
	            throw new Error("'auto' array mode is for query parameters only");
	        return new ArrayType(this, mode);
	    };
	    return ParamType;
	}());
	exports.ParamType = ParamType;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module core */ /** */
	var urlMatcherFactory_1 = __webpack_require__(26);
	var urlRouter_1 = __webpack_require__(29);
	var urlRouter_2 = __webpack_require__(29);
	var transitionService_1 = __webpack_require__(30);
	var view_1 = __webpack_require__(37);
	var stateRegistry_1 = __webpack_require__(38);
	var stateService_1 = __webpack_require__(43);
	var globals_1 = __webpack_require__(44);
	/**
	 * The master class used to instantiate an instance of UI-Router.
	 *
	 * This class instantiates and wires the global UI-Router services.
	 *
	 * After instantiating a new instance of the Router class, configure it for your app.  For instance, register
	 * your app states with the [[stateRegistry]] (and set url options using ...).  Then, tell UI-Router to monitor
	 * the URL by calling `urlRouter.listen()` ([[URLRouter.listen]])
	 */
	var UIRouter = (function () {
	    function UIRouter() {
	        this.viewService = new view_1.ViewService();
	        this.transitionService = new transitionService_1.TransitionService(this);
	        this.globals = new globals_1.Globals(this.transitionService);
	        this.urlMatcherFactory = new urlMatcherFactory_1.UrlMatcherFactory();
	        this.urlRouterProvider = new urlRouter_1.UrlRouterProvider(this.urlMatcherFactory, this.globals.params);
	        this.urlRouter = new urlRouter_2.UrlRouter(this.urlRouterProvider);
	        this.stateRegistry = new stateRegistry_1.StateRegistry(this.urlMatcherFactory, this.urlRouterProvider);
	        this.stateService = new stateService_1.StateService(this);
	        this.viewService.rootContext(this.stateRegistry.root());
	        this.globals.$current = this.stateRegistry.root();
	        this.globals.current = this.globals.$current.self;
	    }
	    return UIRouter;
	}());
	exports.UIRouter = UIRouter;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module url */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var predicates_1 = __webpack_require__(4);
	var urlMatcher_1 = __webpack_require__(27);
	var urlMatcherConfig_1 = __webpack_require__(23);
	var param_1 = __webpack_require__(22);
	var paramTypes_1 = __webpack_require__(28);
	/** @hidden */
	function getDefaultConfig() {
	    return {
	        strict: urlMatcherConfig_1.matcherConfig.strictMode(),
	        caseInsensitive: urlMatcherConfig_1.matcherConfig.caseInsensitive()
	    };
	}
	/**
	 * Factory for [[UrlMatcher]] instances.
	 *
	 * The factory is available to ng1 services as
	 * `$urlMatcherFactor` or ng1 providers as `$urlMatcherFactoryProvider`.
	 */
	var UrlMatcherFactory = (function () {
	    function UrlMatcherFactory() {
	        this.paramTypes = new paramTypes_1.ParamTypes();
	        common_1.extend(this, { UrlMatcher: urlMatcher_1.UrlMatcher, Param: param_1.Param });
	    }
	    /**
	     * Defines whether URL matching should be case sensitive (the default behavior), or not.
	     *
	     * @param value `false` to match URL in a case sensitive manner; otherwise `true`;
	     * @returns the current value of caseInsensitive
	     */
	    UrlMatcherFactory.prototype.caseInsensitive = function (value) {
	        return urlMatcherConfig_1.matcherConfig.caseInsensitive(value);
	    };
	    /**
	     * Defines whether URLs should match trailing slashes, or not (the default behavior).
	     *
	     * @param value `false` to match trailing slashes in URLs, otherwise `true`.
	     * @returns the current value of strictMode
	     */
	    UrlMatcherFactory.prototype.strictMode = function (value) {
	        return urlMatcherConfig_1.matcherConfig.strictMode(value);
	    };
	    /**
	     * Sets the default behavior when generating or matching URLs with default parameter values.
	     *
	     * @param value A string that defines the default parameter URL squashing behavior.
	     *    - `nosquash`: When generating an href with a default parameter value, do not squash the parameter value from the URL
	     *    - `slash`: When generating an href with a default parameter value, squash (remove) the parameter value, and, if the
	     *             parameter is surrounded by slashes, squash (remove) one slash from the URL
	     *    - any other string, e.g. "~": When generating an href with a default parameter value, squash (remove)
	     *             the parameter value from the URL and replace it with this string.
	     * @returns the current value of defaultSquashPolicy
	     */
	    UrlMatcherFactory.prototype.defaultSquashPolicy = function (value) {
	        return urlMatcherConfig_1.matcherConfig.defaultSquashPolicy(value);
	    };
	    /**
	     * Creates a [[UrlMatcher]] for the specified pattern.
	     *
	     * @param pattern  The URL pattern.
	     * @param config  The config object hash.
	     * @returns The UrlMatcher.
	     */
	    UrlMatcherFactory.prototype.compile = function (pattern, config) {
	        return new urlMatcher_1.UrlMatcher(pattern, this.paramTypes, common_1.extend(getDefaultConfig(), config));
	    };
	    /**
	     * Returns true if the specified object is a [[UrlMatcher]], or false otherwise.
	     *
	     * @param object  The object to perform the type check against.
	     * @returns `true` if the object matches the `UrlMatcher` interface, by
	     *          implementing all the same methods.
	     */
	    UrlMatcherFactory.prototype.isMatcher = function (object) {
	        // TODO: typeof?
	        if (!predicates_1.isObject(object))
	            return false;
	        var result = true;
	        common_1.forEach(urlMatcher_1.UrlMatcher.prototype, function (val, name) {
	            if (predicates_1.isFunction(val))
	                result = result &amp;&amp; (predicates_1.isDefined(object[name]) &amp;&amp; predicates_1.isFunction(object[name]));
	        });
	        return result;
	    };
	    ;
	    /**
	     * Creates and registers a custom [[ParamType]] object
	     *
	     * A [[ParamType]] can be used to generate URLs with typed parameters.
	     *
	     * @param name  The type name.
	     * @param definition The type definition. See [[ParamTypeDefinition]] for information on the values accepted.
	     * @param definitionFn A function that is injected before the app runtime starts.
	     *        The result of this function should be a [[ParamTypeDefinition]].
	     *        The result is merged into the existing `definition`.
	     *        See [[ParamType]] for information on the values accepted.
	     *
	     * @returns - if a type was registered: the [[UrlMatcherFactory]]
	     *   - if only the `name` parameter was specified: the currently registered [[ParamType]] object, or undefined
	     *
	     * Note: Register custom types *before using them* in a state definition.
	     *
	     * See [[ParamTypeDefinition]] for examples
	     */
	    UrlMatcherFactory.prototype.type = function (name, definition, definitionFn) {
	        var type = this.paramTypes.type(name, definition, definitionFn);
	        return !predicates_1.isDefined(definition) ? type : this;
	    };
	    ;
	    /** @hidden */
	    UrlMatcherFactory.prototype.$get = function () {
	        this.paramTypes.enqueue = false;
	        this.paramTypes._flushTypeQueue();
	        return this;
	    };
	    ;
	    return UrlMatcherFactory;
	}());
	exports.UrlMatcherFactory = UrlMatcherFactory;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module url */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var hof_1 = __webpack_require__(5);
	var predicates_1 = __webpack_require__(4);
	var param_1 = __webpack_require__(22);
	var predicates_2 = __webpack_require__(4);
	var param_2 = __webpack_require__(22);
	var common_2 = __webpack_require__(3);
	var common_3 = __webpack_require__(3);
	/** @hidden */
	function quoteRegExp(string, param) {
	    var surroundPattern = ['', ''], result = string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&amp;");
	    if (!param)
	        return result;
	    switch (param.squash) {
	        case false:
	            surroundPattern = ['(', ')' + (param.isOptional ? '?' : '')];
	            break;
	        case true:
	            result = result.replace(/\/$/, '');
	            surroundPattern = ['(?:\/(', ')|\/)?'];
	            break;
	        default:
	            surroundPattern = [("(" + param.squash + "|"), ')?'];
	            break;
	    }
	    return result + surroundPattern[0] + param.type.pattern.source + surroundPattern[1];
	}
	/** @hidden */
	var memoizeTo = function (obj, prop, fn) {
	    return obj[prop] = obj[prop] || fn();
	};
	/**
	 * Matches URLs against patterns.
	 *
	 * Matches URLs against patterns and extracts named parameters from the path or the search
	 * part of the URL.
	 *
	 * A URL pattern consists of a path pattern, optionally followed by '?' and a list of search (query)
	 * parameters. Multiple search parameter names are separated by '&amp;'. Search parameters
	 * do not influence whether or not a URL is matched, but their values are passed through into
	 * the matched parameters returned by [[UrlMatcher.exec]].
	 *
	 * - *Path parameters* are defined using curly brace placeholders (`/somepath/{param}`)
	 * or colon placeholders (`/somePath/:param`).
	 *
	 * - *A parameter RegExp* may be defined for a param after a colon
	 * (`/somePath/{param:[a-zA-Z0-9]+}`) in a curly brace placeholder.
	 * The regexp must match for the url to be matched.
	 * Should the regexp itself contain curly braces, they must be in matched pairs or escaped with a backslash.
	 *
	 * - *Custom parameter types* may also be specified after a colon (`/somePath/{param:int}`)
	 * in curly brace parameters.  See [[UrlMatcherFactory.type]] for more information.
	 *
	 * - *Catch-all parameters* are defined using an asterisk placeholder (`/somepath/*catchallparam`).  A catch-all
	 * parameter value will contain the remainder of the URL.
	 *
	 * ---
	 *
	 * Parameter names may contain only word characters (latin letters, digits, and underscore) and
	 * must be unique within the pattern (across both path and search parameters).
	 * A path parameter matches any number of characters other than '/'. For catch-all
	 * placeholders the path parameter matches any number of characters.
	 *
	 * Examples:
	 *
	 * * `'/hello/'` - Matches only if the path is exactly '/hello/'. There is no special treatment for
	 *   trailing slashes, and patterns have to match the entire path, not just a prefix.
	 * * `'/user/:id'` - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
	 *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
	 * * `'/user/{id}'` - Same as the previous example, but using curly brace syntax.
	 * * `'/user/{id:[^/]*}'` - Same as the previous example.
	 * * `'/user/{id:[0-9a-fA-F]{1,8}}'` - Similar to the previous example, but only matches if the id
	 *   parameter consists of 1 to 8 hex digits.
	 * * `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
	 *   path into the parameter 'path'.
	 * * `'/files/*path'` - ditto.
	 * * `'/calendar/{start:date}'` - Matches "/calendar/2014-11-12" (because the pattern defined
	 *   in the built-in  `date` ParamType matches `2014-11-12`) and provides a Date object in $stateParams.start
	 *
	 */
	var UrlMatcher = (function () {
	    /**
	     * @param pattern The pattern to compile into a matcher.
	     * @param paramTypes The [[ParamTypes]] registry
	     * @param config  A configuration object
	     * - `caseInsensitive` - `true` if URL matching should be case insensitive, otherwise `false`, the default value (for backward compatibility) is `false`.
	     * - `strict` - `false` if matching against a URL with a trailing slash should be treated as equivalent to a URL without a trailing slash, the default value is `true`.
	     */
	    function UrlMatcher(pattern, paramTypes, config) {
	        var _this = this;
	        this.config = config;
	        /** @hidden */
	        this._cache = { path: [], pattern: null };
	        /** @hidden */
	        this._children = [];
	        /** @hidden */
	        this._params = [];
	        /** @hidden */
	        this._segments = [];
	        /** @hidden */
	        this._compiled = [];
	        this.pattern = pattern;
	        this.config = common_1.defaults(this.config, {
	            params: {},
	            strict: true,
	            caseInsensitive: false,
	            paramMap: common_1.identity
	        });
	        // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
	        //   '*' name
	        //   ':' name
	        //   '{' name '}'
	        //   '{' name ':' regexp '}'
	        // The regular expression is somewhat complicated due to the need to allow curly braces
	        // inside the regular expression. The placeholder regexp breaks down as follows:
	        //    ([:*])([\w\[\]]+)              - classic placeholder ($1 / $2) (search version has - for snake-case)
	        //    \{([\w\[\]]+)(?:\:\s*( ... ))?\}  - curly brace placeholder ($3) with optional regexp/type ... ($4) (search version has - for snake-case
	        //    (?: ... | ... | ... )+         - the regexp consists of any number of atoms, an atom being either
	        //    [^{}\\]+                       - anything other than curly braces or backslash
	        //    \\.                            - a backslash escape
	        //    \{(?:[^{}\\]+|\\.)*\}          - a matched set of curly braces containing other atoms
	        var placeholder = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, searchPlaceholder = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, last = 0, m, patterns = [];
	        var checkParamErrors = function (id) {
	            if (!UrlMatcher.nameValidator.test(id))
	                throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
	            if (common_1.find(_this._params, hof_1.propEq('id', id)))
	                throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
	        };
	        // Split into static segments separated by path parameter placeholders.
	        // The number of segments is always 1 more than the number of parameters.
	        var matchDetails = function (m, isSearch) {
	            // IE[78] returns '' for unmatched groups instead of null
	            var id = m[2] || m[3], regexp = isSearch ? m[4] : m[4] || (m[1] === '*' ? '.*' : null);
	            return {
	                id: id,
	                regexp: regexp,
	                cfg: _this.config.params[id],
	                segment: pattern.substring(last, m.index),
	                type: !regexp ? null : paramTypes.type(regexp || "string") || common_1.inherit(paramTypes.type("string"), {
	                    pattern: new RegExp(regexp, _this.config.caseInsensitive ? 'i' : undefined)
	                })
	            };
	        };
	        var p, segment;
	        while ((m = placeholder.exec(pattern))) {
	            p = matchDetails(m, false);
	            if (p.segment.indexOf('?') &gt;= 0)
	                break; // we're into the search part
	            checkParamErrors(p.id);
	            this._params.push(param_1.Param.fromPath(p.id, p.type, this.config.paramMap(p.cfg, false), paramTypes));
	            this._segments.push(p.segment);
	            patterns.push([p.segment, common_1.tail(this._params)]);
	            last = placeholder.lastIndex;
	        }
	        segment = pattern.substring(last);
	        // Find any search parameter names and remove them from the last segment
	        var i = segment.indexOf('?');
	        if (i &gt;= 0) {
	            var search = segment.substring(i);
	            segment = segment.substring(0, i);
	            if (search.length &gt; 0) {
	                last = 0;
	                while ((m = searchPlaceholder.exec(search))) {
	                    p = matchDetails(m, true);
	                    checkParamErrors(p.id);
	                    this._params.push(param_1.Param.fromSearch(p.id, p.type, this.config.paramMap(p.cfg, true), paramTypes));
	                    last = placeholder.lastIndex;
	                }
	            }
	        }
	        this._segments.push(segment);
	        common_1.extend(this, {
	            _compiled: patterns.map(function (pattern) { return quoteRegExp.apply(null, pattern); }).concat(quoteRegExp(segment)),
	            prefix: this._segments[0]
	        });
	        Object.freeze(this);
	    }
	    /**
	     * Creates a new concatenated UrlMatcher
	     *
	     * Builds a new UrlMatcher by appending another UrlMatcher to this one.
	     *
	     * @param url A `UrlMatcher` instance to append as a child of the current `UrlMatcher`.
	     */
	    UrlMatcher.prototype.append = function (url) {
	        this._children.push(url);
	        common_1.forEach(url._cache, function (val, key) { return url._cache[key] = predicates_1.isArray(val) ? [] : null; });
	        url._cache.path = this._cache.path.concat(this);
	        return url;
	    };
	    /** @hidden */
	    UrlMatcher.prototype.isRoot = function () {
	        return this._cache.path.length === 0;
	    };
	    /** Returns the input pattern string */
	    UrlMatcher.prototype.toString = function () {
	        return this.pattern;
	    };
	    /**
	     * Tests the specified url/path against this matcher.
	     *
	     * Tests if the given url matches this matcher's pattern, and returns an object containing the captured
	     * parameter values.  Returns null if the path does not match.
	     *
	     * The returned object contains the values
	     * of any search parameters that are mentioned in the pattern, but their value may be null if
	     * they are not present in `search`. This means that search parameters are always treated
	     * as optional.
	     *
	     * @example
	     * ```js
	     *
	     * new UrlMatcher('/user/{id}?q&amp;r').exec('/user/bob', {
	     *   x: '1', q: 'hello'
	     * });
	     * // returns { id: 'bob', q: 'hello', r: null }
	     * ```
	     *
	     * @param path    The URL path to match, e.g. `$location.path()`.
	     * @param search  URL search parameters, e.g. `$location.search()`.
	     * @param hash    URL hash e.g. `$location.hash()`.
	     * @param options
	     *
	     * @returns The captured parameter values.
	     */
	    UrlMatcher.prototype.exec = function (path, search, hash, options) {
	        var _this = this;
	        if (search === void 0) { search = {}; }
	        if (options === void 0) { options = {}; }
	        var match = memoizeTo(this._cache, 'pattern', function () {
	            return new RegExp([
	                '^',
	                common_1.unnest(_this._cache.path.concat(_this).map(hof_1.prop('_compiled'))).join(''),
	                _this.config.strict === false ? '\/?' : '',
	                '$'
	            ].join(''), _this.config.caseInsensitive ? 'i' : undefined);
	        }).exec(path);
	        if (!match)
	            return null;
	        //options = defaults(options, { isolate: false });
	        var allParams = this.parameters(), pathParams = allParams.filter(function (param) { return !param.isSearch(); }), searchParams = allParams.filter(function (param) { return param.isSearch(); }), nPathSegments = this._cache.path.concat(this).map(function (urlm) { return urlm._segments.length - 1; }).reduce(function (a, x) { return a + x; }), values = {};
	        if (nPathSegments !== match.length - 1)
	            throw new Error("Unbalanced capture group in route '" + this.pattern + "'");
	        function decodePathArray(string) {
	            var reverseString = function (str) { return str.split("").reverse().join(""); };
	            var unquoteDashes = function (str) { return str.replace(/\\-/g, "-"); };
	            var split = reverseString(string).split(/-(?!\\)/);
	            var allReversed = common_1.map(split, reverseString);
	            return common_1.map(allReversed, unquoteDashes).reverse();
	        }
	        for (var i = 0; i &lt; nPathSegments; i++) {
	            var param = pathParams[i];
	            var value = match[i + 1];
	            // if the param value matches a pre-replace pair, replace the value before decoding.
	            for (var j = 0; j &lt; param.replace.length; j++) {
	                if (param.replace[j].from === value)
	                    value = param.replace[j].to;
	            }
	            if (value &amp;&amp; param.array === true)
	                value = decodePathArray(value);
	            if (predicates_2.isDefined(value))
	                value = param.type.decode(value);
	            values[param.id] = param.value(value);
	        }
	        searchParams.forEach(function (param) {
	            var value = search[param.id];
	            for (var j = 0; j &lt; param.replace.length; j++) {
	                if (param.replace[j].from === value)
	                    value = param.replace[j].to;
	            }
	            if (predicates_2.isDefined(value))
	                value = param.type.decode(value);
	            values[param.id] = param.value(value);
	        });
	        if (hash)
	            values["#"] = hash;
	        return values;
	    };
	    /**
	     * @hidden
	     * Returns all the [[Param]] objects of all path and search parameters of this pattern in order of appearance.
	     *
	     * @returns {Array.&lt;Param&gt;}  An array of [[Param]] objects. Must be treated as read-only. If the
	     *    pattern has no parameters, an empty array is returned.
	     */
	    UrlMatcher.prototype.parameters = function (opts) {
	        if (opts === void 0) { opts = {}; }
	        if (opts.inherit === false)
	            return this._params;
	        return common_1.unnest(this._cache.path.concat(this).map(hof_1.prop('_params')));
	    };
	    /**
	     * @hidden
	     * Returns a single parameter from this UrlMatcher by id
	     *
	     * @param id
	     * @param opts
	     * @returns {T|Param|any|boolean|UrlMatcher|null}
	     */
	    UrlMatcher.prototype.parameter = function (id, opts) {
	        if (opts === void 0) { opts = {}; }
	        var parent = common_1.tail(this._cache.path);
	        return (common_1.find(this._params, hof_1.propEq('id', id)) ||
	            (opts.inherit !== false &amp;&amp; parent &amp;&amp; parent.parameter(id)) ||
	            null);
	    };
	    /**
	     * Validates the input parameter values against this UrlMatcher
	     *
	     * Checks an object hash of parameters to validate their correctness according to the parameter
	     * types of this `UrlMatcher`.
	     *
	     * @param params The object hash of parameters to validate.
	     * @returns Returns `true` if `params` validates, otherwise `false`.
	     */
	    UrlMatcher.prototype.validates = function (params) {
	        var _this = this;
	        var validParamVal = function (param, val) {
	            return !param || param.validates(val);
	        };
	        return common_1.pairs(params || {}).map(function (_a) {
	            var key = _a[0], val = _a[1];
	            return validParamVal(_this.parameter(key), val);
	        }).reduce(common_1.allTrueR, true);
	    };
	    /**
	     * Given a set of parameter values, creates a URL from this UrlMatcher.
	     *
	     * Creates a URL that matches this pattern by substituting the specified values
	     * for the path and search parameters.
	     *
	     * @example
	     * ```js
	     *
	     * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
	     * // returns '/user/bob?q=yes'
	     * ```
	     *
	     * @param values  the values to substitute for the parameters in this pattern.
	     * @returns the formatted URL (path and optionally search part).
	     */
	    UrlMatcher.prototype.format = function (values) {
	        if (values === void 0) { values = {}; }
	        if (!this.validates(values))
	            return null;
	        // Build the full path of UrlMatchers (including all parent UrlMatchers)
	        var urlMatchers = this._cache.path.slice().concat(this);
	        // Extract all the static segments and Params into an ordered array
	        var pathSegmentsAndParams = urlMatchers.map(UrlMatcher.pathSegmentsAndParams).reduce(common_2.unnestR, []);
	        // Extract the query params into a separate array
	        var queryParams = urlMatchers.map(UrlMatcher.queryParams).reduce(common_2.unnestR, []);
	        /**
	         * Given a Param,
	         * Applies the parameter value, then returns details about it
	         */
	        function getDetails(param) {
	            // Normalize to typed value
	            var value = param.value(values[param.id]);
	            var isDefaultValue = param.isDefaultValue(value);
	            // Check if we're in squash mode for the parameter
	            var squash = isDefaultValue ? param.squash : false;
	            // Allow the Parameter's Type to encode the value
	            var encoded = param.type.encode(value);
	            return { param: param, value: value, isDefaultValue: isDefaultValue, squash: squash, encoded: encoded };
	        }
	        // Build up the path-portion from the list of static segments and parameters
	        var pathString = pathSegmentsAndParams.reduce(function (acc, x) {
	            // The element is a static segment (a raw string); just append it
	            if (predicates_1.isString(x))
	                return acc + x;
	            // Otherwise, it's a Param.  Fetch details about the parameter value
	            var _a = getDetails(x), squash = _a.squash, encoded = _a.encoded, param = _a.param;
	            // If squash is === true, try to remove a slash from the path
	            if (squash === true)
	                return (acc.match(/\/$/)) ? acc.slice(0, -1) : acc;
	            // If squash is a string, use the string for the param value
	            if (predicates_1.isString(squash))
	                return acc + squash;
	            if (squash !== false)
	                return acc; // ?
	            if (encoded == null)
	                return acc;
	            // If this parameter value is an array, encode the value using encodeDashes
	            if (predicates_1.isArray(encoded))
	                return acc + common_1.map(encoded, UrlMatcher.encodeDashes).join("-");
	            // If the parameter type is "raw", then do not encodeURIComponent
	            if (param.type.raw)
	                return acc + encoded;
	            // Encode the value
	            return acc + encodeURIComponent(encoded);
	        }, "");
	        // Build the query string by applying parameter values (array or regular)
	        // then mapping to key=value, then flattening and joining using "&amp;"
	        var queryString = queryParams.map(function (param) {
	            var _a = getDetails(param), squash = _a.squash, encoded = _a.encoded, isDefaultValue = _a.isDefaultValue;
	            if (encoded == null || (isDefaultValue &amp;&amp; squash !== false))
	                return;
	            if (!predicates_1.isArray(encoded))
	                encoded = [encoded];
	            if (encoded.length === 0)
	                return;
	            if (!param.type.raw)
	                encoded = common_1.map(encoded, encodeURIComponent);
	            return encoded.map(function (val) { return (param.id + "=" + val); });
	        }).filter(common_1.identity).reduce(common_2.unnestR, []).join("&amp;");
	        // Concat the pathstring with the queryString (if exists) and the hashString (if exists)
	        return pathString + (queryString ? "?" + queryString : "") + (values["#"] ? "#" + values["#"] : "");
	    };
	    /** @hidden */
	    UrlMatcher.encodeDashes = function (str) {
	        return encodeURIComponent(str).replace(/-/g, function (c) { return ("%5C%" + c.charCodeAt(0).toString(16).toUpperCase()); });
	    };
	    /** @hidden Given a matcher, return an array with the matcher's path segments and path params, in order */
	    UrlMatcher.pathSegmentsAndParams = function (matcher) {
	        var staticSegments = matcher._segments;
	        var pathParams = matcher._params.filter(function (p) { return p.location === param_2.DefType.PATH; });
	        return common_3.arrayTuples(staticSegments, pathParams.concat(undefined)).reduce(common_2.unnestR, []).filter(function (x) { return x !== "" &amp;&amp; predicates_2.isDefined(x); });
	    };
	    /** @hidden Given a matcher, return an array with the matcher's query params */
	    UrlMatcher.queryParams = function (matcher) {
	        return matcher._params.filter(function (p) { return p.location === param_2.DefType.SEARCH; });
	    };
	    /** @hidden */
	    UrlMatcher.nameValidator = /^\w+([-.]+\w+)*(?:\[\])?$/;
	    return UrlMatcher;
	}());
	exports.UrlMatcher = UrlMatcher;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module params */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var predicates_1 = __webpack_require__(4);
	var hof_1 = __webpack_require__(5);
	var coreservices_1 = __webpack_require__(6);
	var type_1 = __webpack_require__(24);
	// Use tildes to pre-encode slashes.
	// If the slashes are simply URLEncoded, the browser can choose to pre-decode them,
	// and bidirectional encoding/decoding fails.
	// Tilde was chosen because it's not a RFC 3986 section 2.2 Reserved Character
	function valToString(val) { return val != null ? val.toString().replace(/(~|\/)/g, function (m) { return ({ '~': '~~', '/': '~2F' }[m]); }) : val; }
	function valFromString(val) { return val != null ? val.toString().replace(/(~~|~2F)/g, function (m) { return ({ '~~': '~', '~2F': '/' }[m]); }) : val; }
	var ParamTypes = (function () {
	    function ParamTypes() {
	        this.enqueue = true;
	        this.typeQueue = [];
	        this.defaultTypes = {
	            "hash": {
	                encode: valToString,
	                decode: valFromString,
	                is: hof_1.is(String),
	                pattern: /.*/,
	                equals: function (a, b) { return a == b; } // allow coersion for null/undefined/""
	            },
	            "string": {
	                encode: valToString,
	                decode: valFromString,
	                is: hof_1.is(String),
	                pattern: /[^/]*/
	            },
	            "int": {
	                encode: valToString,
	                decode: function (val) { return parseInt(val, 10); },
	                is: function (val) { return predicates_1.isDefined(val) &amp;&amp; this.decode(val.toString()) === val; },
	                pattern: /-?\d+/
	            },
	            "bool": {
	                encode: function (val) { return val &amp;&amp; 1 || 0; },
	                decode: function (val) { return parseInt(val, 10) !== 0; },
	                is: hof_1.is(Boolean),
	                pattern: /0|1/
	            },
	            "date": {
	                encode: function (val) {
	                    return !this.is(val) ? undefined : [
	                        val.getFullYear(),
	                        ('0' + (val.getMonth() + 1)).slice(-2),
	                        ('0' + val.getDate()).slice(-2)
	                    ].join("-");
	                },
	                decode: function (val) {
	                    if (this.is(val))
	                        return val;
	                    var match = this.capture.exec(val);
	                    return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
	                },
	                is: function (val) { return val instanceof Date &amp;&amp; !isNaN(val.valueOf()); },
	                equals: function (l, r) {
	                    return ['getFullYear', 'getMonth', 'getDate']
	                        .reduce(function (acc, fn) { return acc &amp;&amp; l[fn]() === r[fn](); }, true);
	                },
	                pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
	                capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
	            },
	            "json": {
	                encode: common_1.toJson,
	                decode: common_1.fromJson,
	                is: hof_1.is(Object),
	                equals: common_1.equals,
	                pattern: /[^/]*/
	            },
	            "any": {
	                encode: common_1.identity,
	                decode: common_1.identity,
	                equals: common_1.equals,
	                pattern: /.*/
	            }
	        };
	        // Register default types. Store them in the prototype of this.types.
	        var makeType = function (definition, name) { return new type_1.ParamType(common_1.extend({ name: name }, definition)); };
	        this.types = common_1.inherit(common_1.map(this.defaultTypes, makeType), {});
	    }
	    ParamTypes.prototype.type = function (name, definition, definitionFn) {
	        if (!predicates_1.isDefined(definition))
	            return this.types[name];
	        if (this.types.hasOwnProperty(name))
	            throw new Error("A type named '" + name + "' has already been defined.");
	        this.types[name] = new type_1.ParamType(common_1.extend({ name: name }, definition));
	        if (definitionFn) {
	            this.typeQueue.push({ name: name, def: definitionFn });
	            if (!this.enqueue)
	                this._flushTypeQueue();
	        }
	        return this;
	    };
	    ParamTypes.prototype._flushTypeQueue = function () {
	        while (this.typeQueue.length) {
	            var type = this.typeQueue.shift();
	            if (type.pattern)
	                throw new Error("You cannot override a type's .pattern at runtime.");
	            common_1.extend(this.types[type.name], coreservices_1.services.$injector.invoke(type.def));
	        }
	    };
	    return ParamTypes;
	}());
	exports.ParamTypes = ParamTypes;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module url */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var predicates_1 = __webpack_require__(4);
	var coreservices_1 = __webpack_require__(6);
	/** @hidden */
	var $location = coreservices_1.services.location;
	/** @hidden Returns a string that is a prefix of all strings matching the RegExp */
	function regExpPrefix(re) {
	    var prefix = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);
	    return (prefix != null) ? prefix[1].replace(/\\(.)/g, "$1") : '';
	}
	/** @hidden Interpolates matched values into a String.replace()-style pattern */
	function interpolate(pattern, match) {
	    return pattern.replace(/\$(\$|\d{1,2})/, function (m, what) {
	        return match[what === '$' ? 0 : Number(what)];
	    });
	}
	/** @hidden */
	function handleIfMatch($injector, $stateParams, handler, match) {
	    if (!match)
	        return false;
	    var result = $injector.invoke(handler, handler, { $match: match, $stateParams: $stateParams });
	    return predicates_1.isDefined(result) ? result : true;
	}
	/** @hidden */
	function appendBasePath(url, isHtml5, absolute) {
	    var baseHref = coreservices_1.services.locationConfig.baseHref();
	    if (baseHref === '/')
	        return url;
	    if (isHtml5)
	        return baseHref.slice(0, -1) + url;
	    if (absolute)
	        return baseHref.slice(1) + url;
	    return url;
	}
	// TODO: Optimize groups of rules with non-empty prefix into some sort of decision tree
	/** @hidden */
	function update(rules, otherwiseFn, evt) {
	    if (evt &amp;&amp; evt.defaultPrevented)
	        return;
	    function check(rule) {
	        var handled = rule(coreservices_1.services.$injector, $location);
	        if (!handled)
	            return false;
	        if (predicates_1.isString(handled)) {
	            $location.setUrl(handled, true);
	        }
	        return true;
	    }
	    var n = rules.length;
	    for (var i = 0; i &lt; n; i++) {
	        if (check(rules[i]))
	            return;
	    }
	    // always check otherwise last to allow dynamic updates to the set of rules
	    if (otherwiseFn)
	        check(otherwiseFn);
	}
	/**
	 * Manages rules for client-side URL
	 *
	 * This class manages the router rules for what to do when the URL changes.
	 */
	var UrlRouterProvider = (function () {
	    function UrlRouterProvider($urlMatcherFactory, $stateParams) {
	        /** @hidden */
	        this.rules = [];
	        /** @hidden */
	        this.interceptDeferred = false;
	        this.$urlMatcherFactory = $urlMatcherFactory;
	        this.$stateParams = $stateParams;
	    }
	    /**
	     * Registers a url handler function.
	     *
	     * Registers a low level url handler (a `rule`). A rule detects specific URL patterns and returns
	     * a redirect, or performs some action.
	     *
	     * If a rule returns a string, the URL is replaced with the string, and all rules are fired again.
	     *
	     * @example
	     * ```js
	     *
	     * var app = angular.module('app', ['ui.router.router']);
	     *
	     * app.config(function ($urlRouterProvider) {
	     *   // Here's an example of how you might allow case insensitive urls
	     *   $urlRouterProvider.rule(function ($injector, $location) {
	     *     var path = $location.path(),
	     *         normalized = path.toLowerCase();
	     *
	     *     if (path !== normalized) {
	     *       return normalized;
	     *     }
	     *   });
	     * });
	     * ```
	     *
	     * @param rule
	     * Handler function that takes `$injector` and `$location` services as arguments.
	     * You can use them to detect a url and return a different url as a string.
	     *
	     * @return [[$urlRouterProvider]] (`this`)
	     */
	    UrlRouterProvider.prototype.rule = function (rule) {
	        if (!predicates_1.isFunction(rule))
	            throw new Error("'rule' must be a function");
	        this.rules.push(rule);
	        return this;
	    };
	    ;
	    /**
	     * Remove a rule previously registered
	     *
	     * @param rule the matcher rule that was previously registered using [[rule]]
	     * @return true if the rule was found (and removed)
	     */
	    UrlRouterProvider.prototype.removeRule = function (rule) {
	        return this.rules.length !== common_1.removeFrom(this.rules, rule).length;
	    };
	    /**
	     * Defines the path or behavior to use when no url can be matched.
	     *
	     * @example
	     * ```js
	     *
	     * var app = angular.module('app', ['ui.router.router']);
	     *
	     * app.config(function ($urlRouterProvider) {
	     *   // if the path doesn't match any of the urls you configured
	     *   // otherwise will take care of routing the user to the
	     *   // specified url
	     *   $urlRouterProvider.otherwise('/index');
	     *
	     *   // Example of using function rule as param
	     *   $urlRouterProvider.otherwise(function ($injector, $location) {
	     *     return '/a/valid/url';
	     *   });
	     * });
	     * ```
	     *
	     * @param rule
	     * The url path you want to redirect to or a function rule that returns the url path or performs a `$state.go()`.
	     * The function version is passed two params: `$injector` and `$location` services, and should return a url string.
	     *
	     * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
	     */
	    UrlRouterProvider.prototype.otherwise = function (rule) {
	        if (!predicates_1.isFunction(rule) &amp;&amp; !predicates_1.isString(rule))
	            throw new Error("'rule' must be a string or function");
	        this.otherwiseFn = predicates_1.isString(rule) ? function () { return rule; } : rule;
	        return this;
	    };
	    ;
	    /**
	     * Registers a handler for a given url matching.
	     *
	     * If the handler is a string, it is
	     * treated as a redirect, and is interpolated according to the syntax of match
	     * (i.e. like `String.replace()` for `RegExp`, or like a `UrlMatcher` pattern otherwise).
	     *
	     * If the handler is a function, it is injectable.
	     * It gets invoked if `$location` matches.
	     * You have the option of inject the match object as `$match`.
	     *
	     * The handler can return
	     *
	     * - **falsy** to indicate that the rule didn't match after all, then `$urlRouter`
	     *   will continue trying to find another one that matches.
	     * - **string** which is treated as a redirect and passed to `$location.url()`
	     * - **void** or any **truthy** value tells `$urlRouter` that the url was handled.
	     *
	     * @example
	     * ```js
	     *
	     * var app = angular.module('app', ['ui.router.router']);
	     *
	     * app.config(function ($urlRouterProvider) {
	     *   $urlRouterProvider.when($state.url, function ($match, $stateParams) {
	     *     if ($state.$current.navigable !== state ||
	     *         !equalForKeys($match, $stateParams) {
	     *      $state.transitionTo(state, $match, false);
	     *     }
	     *   });
	     * });
	     * ```
	     *
	     * @param what A pattern string to match, compiled as a [[UrlMatcher]].
	     * @param handler The path (or function that returns a path) that you want to redirect your user to.
	     * @param ruleCallback [optional] A callback that receives the `rule` registered with [[UrlMatcher.rule]]
	     *
	     * Note: the handler may also invoke arbitrary code, such as `$state.go()`
	     */
	    UrlRouterProvider.prototype.when = function (what, handler, ruleCallback) {
	        if (ruleCallback === void 0) { ruleCallback = function (rule) { }; }
	        var _a = this, $urlMatcherFactory = _a.$urlMatcherFactory, $stateParams = _a.$stateParams;
	        var redirect, handlerIsString = predicates_1.isString(handler);
	        // @todo Queue this
	        if (predicates_1.isString(what))
	            what = $urlMatcherFactory.compile(what);
	        if (!handlerIsString &amp;&amp; !predicates_1.isFunction(handler) &amp;&amp; !predicates_1.isArray(handler))
	            throw new Error("invalid 'handler' in when()");
	        var strategies = {
	            matcher: function (_what, _handler) {
	                if (handlerIsString) {
	                    redirect = $urlMatcherFactory.compile(_handler);
	                    _handler = ['$match', redirect.format.bind(redirect)];
	                }
	                return common_1.extend(function () {
	                    return handleIfMatch(coreservices_1.services.$injector, $stateParams, _handler, _what.exec($location.path(), $location.search(), $location.hash()));
	                }, {
	                    prefix: predicates_1.isString(_what.prefix) ? _what.prefix : ''
	                });
	            },
	            regex: function (_what, _handler) {
	                if (_what.global || _what.sticky)
	                    throw new Error("when() RegExp must not be global or sticky");
	                if (handlerIsString) {
	                    redirect = _handler;
	                    _handler = ['$match', function ($match) { return interpolate(redirect, $match); }];
	                }
	                return common_1.extend(function () {
	                    return handleIfMatch(coreservices_1.services.$injector, $stateParams, _handler, _what.exec($location.path()));
	                }, {
	                    prefix: regExpPrefix(_what)
	                });
	            }
	        };
	        var check = {
	            matcher: $urlMatcherFactory.isMatcher(what),
	            regex: what instanceof RegExp
	        };
	        for (var n in check) {
	            if (check[n]) {
	                var rule = strategies[n](what, handler);
	                ruleCallback(rule);
	                return this.rule(rule);
	            }
	        }
	        throw new Error("invalid 'what' in when()");
	    };
	    ;
	    /**
	     * Disables monitoring of the URL.
	     *
	     * Call this method before UI-Router has bootstrapped.
	     * It will stop UI-Router from performing the initial url sync.
	     *
	     * This can be useful to perform some asynchronous initialization before the router starts.
	     * Once the initialization is complete, call [[listen]] to tell UI-Router to start watching and synchronizing the URL.
	     *
	     * @example
	     * ```js
	     *
	     * var app = angular.module('app', ['ui.router']);
	     *
	     * app.config(function ($urlRouterProvider) {
	     *   // Prevent $urlRouter from automatically intercepting URL changes;
	     *   $urlRouterProvider.deferIntercept();
	     * })
	     *
	     * app.run(function (MyService, $urlRouter, $http) {
	     *   $http.get("/stuff").then(function(resp) {
	     *     MyService.doStuff(resp.data);
	     *     $urlRouter.listen();
	     *     $urlRouter.sync();
	     *   });
	     * });
	     * ```
	     *
	     * @param defer Indicates whether to defer location change interception. Passing
	     *        no parameter is equivalent to `true`.
	     */
	    UrlRouterProvider.prototype.deferIntercept = function (defer) {
	        if (defer === undefined)
	            defer = true;
	        this.interceptDeferred = defer;
	    };
	    ;
	    return UrlRouterProvider;
	}());
	exports.UrlRouterProvider = UrlRouterProvider;
	var UrlRouter = (function () {
	    /** @hidden */
	    function UrlRouter(urlRouterProvider) {
	        this.urlRouterProvider = urlRouterProvider;
	        common_1.bindFunctions(UrlRouter.prototype, this, this);
	    }
	    /**
	     * Checks the current URL for a matching rule
	     *
	     * Triggers an update; the same update that happens when the address bar url changes, aka `$locationChangeSuccess`.
	     * This method is useful when you need to use `preventDefault()` on the `$locationChangeSuccess` event,
	     * perform some custom logic (route protection, auth, config, redirection, etc) and then finally proceed
	     * with the transition by calling `$urlRouter.sync()`.
	     *
	     * @example
	     * ```js
	     *
	     * angular.module('app', ['ui.router'])
	     *   .run(function($rootScope, $urlRouter) {
	     *     $rootScope.$on('$locationChangeSuccess', function(evt) {
	     *       // Halt state change from even starting
	     *       evt.preventDefault();
	     *       // Perform custom logic
	     *       var meetsRequirement = ...
	     *       // Continue with the update and state transition if logic allows
	     *       if (meetsRequirement) $urlRouter.sync();
	     *     });
	     * });
	     * ```
	     */
	    UrlRouter.prototype.sync = function () {
	        update(this.urlRouterProvider.rules, this.urlRouterProvider.otherwiseFn);
	    };
	    /**
	     * Starts listening for URL changes
	     *
	     * Call this sometime after calling [[deferIntercept]] to start monitoring the url.
	     * This causes [[UrlRouter]] to start listening for changes to the URL, if it wasn't already listening.
	     */
	    UrlRouter.prototype.listen = function () {
	        var _this = this;
	        return this.listener = this.listener || $location.onChange(function (evt) { return update(_this.urlRouterProvider.rules, _this.urlRouterProvider.otherwiseFn, evt); });
	    };
	    /**
	     * Internal API.
	     */
	    UrlRouter.prototype.update = function (read) {
	        if (read) {
	            this.location = $location.path();
	            return;
	        }
	        if ($location.path() === this.location)
	            return;
	        $location.setUrl(this.location, true);
	    };
	    /**
	     * Internal API.
	     *
	     * Pushes a new location to the browser history.
	     *
	     * @param urlMatcher
	     * @param params
	     * @param options
	     */
	    UrlRouter.prototype.push = function (urlMatcher, params, options) {
	        var replace = options &amp;&amp; !!options.replace;
	        $location.setUrl(urlMatcher.format(params || {}), replace);
	    };
	    /**
	     * Builds and returns a URL with interpolated parameters
	     *
	     * @example
	     * ```js
	     *
	     * $bob = $urlRouter.href(new UrlMatcher("/about/:person"), {
	     *   person: "bob"
	     * });
	     * // $bob == "/about/bob";
	     * ```
	     *
	     * @param urlMatcher The [[UrlMatcher]] object which is used as the template of the URL to generate.
	     * @param params An object of parameter values to fill the matcher's required parameters.
	     * @param options Options object. The options are:
	     *
	     * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
	     *
	     * @returns Returns the fully compiled URL, or `null` if `params` fail validation against `urlMatcher`
	     */
	    UrlRouter.prototype.href = function (urlMatcher, params, options) {
	        if (!urlMatcher.validates(params))
	            return null;
	        var url = urlMatcher.format(params);
	        options = options || { absolute: false };
	        var cfg = coreservices_1.services.locationConfig;
	        var isHtml5 = cfg.html5Mode();
	        if (!isHtml5 &amp;&amp; url !== null) {
	            url = "#" + cfg.hashPrefix() + url;
	        }
	        url = appendBasePath(url, isHtml5, options.absolute);
	        if (!options.absolute || !url) {
	            return url;
	        }
	        var slash = (!isHtml5 &amp;&amp; url ? '/' : ''), port = cfg.port();
	        port = (port === 80 || port === 443 ? '' : ':' + port);
	        return [cfg.protocol(), '://', cfg.host(), port, slash, url].join('');
	    };
	    return UrlRouter;
	}());
	exports.UrlRouter = UrlRouter;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var transition_1 = __webpack_require__(11);
	var hookRegistry_1 = __webpack_require__(15);
	var resolve_1 = __webpack_require__(31);
	var views_1 = __webpack_require__(32);
	var url_1 = __webpack_require__(33);
	var redirectTo_1 = __webpack_require__(34);
	var onEnterExitRetain_1 = __webpack_require__(35);
	var lazyLoadStates_1 = __webpack_require__(36);
	/**
	 * The default [[Transition]] options.
	 *
	 * Include this object when applying custom defaults:
	 * let reloadOpts = { reload: true, notify: true }
	 * let options = defaults(theirOpts, customDefaults, defaultOptions);
	 */
	exports.defaultTransOpts = {
	    location: true,
	    relative: null,
	    inherit: false,
	    notify: true,
	    reload: false,
	    custom: {},
	    current: function () { return null; },
	    source: "unknown"
	};
	/**
	 * This class provides services related to Transitions.
	 *
	 * - Most importantly, it allows global Transition Hooks to be registered.
	 * - It allows the default transition error handler to be set.
	 * - It also has a factory function for creating new [[Transition]] objects, (used internally by the [[StateService]]).
	 *
	 * At bootstrap, [[UIRouter]] creates a single instance (singleton) of this class.
	 */
	var TransitionService = (function () {
	    function TransitionService(_router) {
	        this._router = _router;
	        this.$view = _router.viewService;
	        hookRegistry_1.HookRegistry.mixin(new hookRegistry_1.HookRegistry(), this);
	        this._deregisterHookFns = {};
	        this.registerTransitionHooks();
	    }
	    /** @hidden */
	    TransitionService.prototype.registerTransitionHooks = function () {
	        var fns = this._deregisterHookFns;
	        // Wire up redirectTo hook
	        fns.redirectTo = redirectTo_1.registerRedirectToHook(this);
	        // Wire up onExit/Retain/Enter state hooks
	        fns.onExit = onEnterExitRetain_1.registerOnExitHook(this);
	        fns.onRetain = onEnterExitRetain_1.registerOnRetainHook(this);
	        fns.onEnter = onEnterExitRetain_1.registerOnEnterHook(this);
	        // Wire up Resolve hooks
	        fns.eagerResolve = resolve_1.registerEagerResolvePath(this);
	        fns.lazyResolve = resolve_1.registerLazyResolveState(this);
	        // Wire up the View management hooks
	        fns.loadViews = views_1.registerLoadEnteringViews(this);
	        fns.activateViews = views_1.registerActivateViews(this);
	        // After globals.current is updated at priority: 10000
	        fns.updateUrl = url_1.registerUpdateUrl(this);
	        // Lazy load state trees
	        fns.lazyLoad = lazyLoadStates_1.registerLazyLoadHook(this);
	    };
	    /** @inheritdoc */
	    TransitionService.prototype.onBefore = function (matchCriteria, callback, options) { throw ""; };
	    ;
	    /** @inheritdoc */
	    TransitionService.prototype.onStart = function (matchCriteria, callback, options) { throw ""; };
	    ;
	    /** @inheritdoc */
	    TransitionService.prototype.onExit = function (matchCriteria, callback, options) { throw ""; };
	    ;
	    /** @inheritdoc */
	    TransitionService.prototype.onRetain = function (matchCriteria, callback, options) { throw ""; };
	    ;
	    /** @inheritdoc */
	    TransitionService.prototype.onEnter = function (matchCriteria, callback, options) { throw ""; };
	    ;
	    /** @inheritdoc */
	    TransitionService.prototype.onFinish = function (matchCriteria, callback, options) { throw ""; };
	    ;
	    /** @inheritdoc */
	    TransitionService.prototype.onSuccess = function (matchCriteria, callback, options) { throw ""; };
	    ;
	    /** @inheritdoc */
	    TransitionService.prototype.onError = function (matchCriteria, callback, options) { throw ""; };
	    ;
	    /**
	     * Creates a new [[Transition]] object
	     *
	     * This is a factory function for creating new Transition objects.
	     * It is used internally by the [[StateService]] and should generally not be called by application code.
	     *
	     * @param fromPath the path to the current state (the from state)
	     * @param targetState the target state (destination)
	     * @returns a Transition
	     */
	    TransitionService.prototype.create = function (fromPath, targetState) {
	        return new transition_1.Transition(fromPath, targetState, this._router);
	    };
	    return TransitionService;
	}());
	exports.TransitionService = TransitionService;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module hooks */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var resolveContext_1 = __webpack_require__(17);
	var hof_1 = __webpack_require__(5);
	/**
	 * A [[TransitionHookFn]] which resolves all EAGER Resolvables in the To Path
	 *
	 * Registered using `transitionService.onStart({}, eagerResolvePath);`
	 *
	 * When a Transition starts, this hook resolves all the EAGER Resolvables, which the transition then waits for.
	 *
	 * See [[StateDeclaration.resolve]]
	 */
	var eagerResolvePath = function (trans) {
	    return new resolveContext_1.ResolveContext(trans.treeChanges().to)
	        .resolvePath("EAGER", trans)
	        .then(common_1.noop);
	};
	exports.registerEagerResolvePath = function (transitionService) {
	    return transitionService.onStart({}, eagerResolvePath, { priority: 1000 });
	};
	/**
	 * A [[TransitionHookFn]] which resolves all LAZY Resolvables for the state (and all its ancestors) in the To Path
	 *
	 * Registered using `transitionService.onEnter({ entering: () =&gt; true }, lazyResolveState);`
	 *
	 * When a State is being entered, this hook resolves all the Resolvables for this state, which the transition then waits for.
	 *
	 * See [[StateDeclaration.resolve]]
	 */
	var lazyResolveState = function (trans, state) {
	    return new resolveContext_1.ResolveContext(trans.treeChanges().to)
	        .subContext(state)
	        .resolvePath("LAZY", trans)
	        .then(common_1.noop);
	};
	exports.registerLazyResolveState = function (transitionService) {
	    return transitionService.onEnter({ entering: hof_1.val(true) }, lazyResolveState, { priority: 1000 });
	};


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module hooks */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var coreservices_1 = __webpack_require__(6);
	/**
	 * A [[TransitionHookFn]] which waits for the views to load
	 *
	 * Registered using `transitionService.onStart({}, loadEnteringViews);`
	 *
	 * Allows the views to do async work in [[ViewConfig.load]] before the transition continues.
	 * In angular 1, this includes loading the templates.
	 */
	var loadEnteringViews = function (transition) {
	    var enteringViews = transition.views("entering");
	    if (!enteringViews.length)
	        return;
	    return coreservices_1.services.$q.all(enteringViews.map(function (view) { return view.load(); })).then(common_1.noop);
	};
	exports.registerLoadEnteringViews = function (transitionService) {
	    return transitionService.onStart({}, loadEnteringViews);
	};
	/**
	 * A [[TransitionHookFn]] which activates the new views when a transition is successful.
	 *
	 * Registered using `transitionService.onSuccess({}, activateViews);`
	 *
	 * After a transition is complete, this hook deactivates the old views from the previous state,
	 * and activates the new views from the destination state.
	 *
	 * See [[ViewService]]
	 */
	var activateViews = function (transition) {
	    var enteringViews = transition.views("entering");
	    var exitingViews = transition.views("exiting");
	    if (!enteringViews.length &amp;&amp; !exitingViews.length)
	        return;
	    var $view = transition.router.viewService;
	    exitingViews.forEach(function (vc) { return $view.deactivateViewConfig(vc); });
	    enteringViews.forEach(function (vc) { return $view.activateViewConfig(vc); });
	    $view.sync();
	};
	exports.registerActivateViews = function (transitionService) {
	    return transitionService.onSuccess({}, activateViews);
	};


/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * A [[TransitionHookFn]] which updates the URL after a successful transition
	 *
	 * Registered using `transitionService.onSuccess({}, updateUrl);`
	 */
	var updateUrl = function (transition) {
	    var options = transition.options();
	    var $state = transition.router.stateService;
	    var $urlRouter = transition.router.urlRouter;
	    // Dont update the url in these situations:
	    // The transition was triggered by a URL sync (options.source === 'url')
	    // The user doesn't want the url to update (options.location === false)
	    // The destination state, and all parents have no navigable url
	    if (options.source !== 'url' &amp;&amp; options.location &amp;&amp; $state.$current.navigable) {
	        var urlOptions = { replace: options.location === 'replace' };
	        $urlRouter.push($state.$current.navigable.url, $state.params, urlOptions);
	    }
	    $urlRouter.update(true);
	};
	exports.registerUpdateUrl = function (transitionService) {
	    return transitionService.onSuccess({}, updateUrl, { priority: 9999 });
	};


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module hooks */ /** */
	var predicates_1 = __webpack_require__(4);
	var coreservices_1 = __webpack_require__(6);
	var targetState_1 = __webpack_require__(14);
	/**
	 * A [[TransitionHookFn]] that redirects to a different state or params
	 *
	 * Registered using `transitionService.onStart({ to: (state) =&gt; !!state.redirectTo }, redirectHook);`
	 *
	 * See [[StateDeclaration.redirectTo]]
	 */
	var redirectToHook = function (trans) {
	    var redirect = trans.to().redirectTo;
	    if (!redirect)
	        return;
	    function handleResult(result) {
	        var $state = trans.router.stateService;
	        if (result instanceof targetState_1.TargetState)
	            return result;
	        if (predicates_1.isString(result))
	            return $state.target(result, trans.params(), trans.options());
	        if (result['state'] || result['params'])
	            return $state.target(result['state'] || trans.to(), result['params'] || trans.params(), trans.options());
	    }
	    if (predicates_1.isFunction(redirect)) {
	        return coreservices_1.services.$q.when(redirect(trans)).then(handleResult);
	    }
	    return handleResult(redirect);
	};
	exports.registerRedirectToHook = function (transitionService) {
	    return transitionService.onStart({ to: function (state) { return !!state.redirectTo; } }, redirectToHook);
	};


/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * A factory which creates an onEnter, onExit or onRetain transition hook function
	 *
	 * The returned function invokes the (for instance) state.onEnter hook when the
	 * state is being entered.
	 *
	 * @hidden
	 */
	function makeEnterExitRetainHook(hookName) {
	    return function (transition, state) {
	        var hookFn = state[hookName];
	        return hookFn(transition, state);
	    };
	}
	/**
	 * The [[TransitionStateHookFn]] for onExit
	 *
	 * When the state is being exited, the state's .onExit function is invoked.
	 *
	 * Registered using `transitionService.onExit({ exiting: (state) =&gt; !!state.onExit }, onExitHook);`
	 *
	 * See: [[IHookRegistry.onExit]]
	 */
	var onExitHook = makeEnterExitRetainHook('onExit');
	exports.registerOnExitHook = function (transitionService) {
	    return transitionService.onExit({ exiting: function (state) { return !!state.onExit; } }, onExitHook);
	};
	/**
	 * The [[TransitionStateHookFn]] for onRetain
	 *
	 * When the state was already entered, and is not being exited or re-entered, the state's .onRetain function is invoked.
	 *
	 * Registered using `transitionService.onRetain({ retained: (state) =&gt; !!state.onRetain }, onRetainHook);`
	 *
	 * See: [[IHookRegistry.onRetain]]
	 */
	var onRetainHook = makeEnterExitRetainHook('onRetain');
	exports.registerOnRetainHook = function (transitionService) {
	    return transitionService.onRetain({ retained: function (state) { return !!state.onRetain; } }, onRetainHook);
	};
	/**
	 * The [[TransitionStateHookFn]] for onEnter
	 *
	 * When the state is being entered, the state's .onEnter function is invoked.
	 *
	 * Registered using `transitionService.onEnter({ entering: (state) =&gt; !!state.onEnter }, onEnterHook);`
	 *
	 * See: [[IHookRegistry.onEnter]]
	 */
	var onEnterHook = makeEnterExitRetainHook('onEnter');
	exports.registerOnEnterHook = function (transitionService) {
	    return transitionService.onEnter({ entering: function (state) { return !!state.onEnter; } }, onEnterHook);
	};


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var coreservices_1 = __webpack_require__(6);
	/**
	 * A [[TransitionHookFn]] that lazy loads a state tree.
	 *
	 * When transitioning to a state "abc" which has a `lazyLoad` function defined:
	 * - Invoke the `lazyLoad` function
	 *   - The function should return a promise for an array of lazy loaded [[StateDeclaration]]s
	 * - Wait for the promise to resolve
	 * - Deregister the original state "abc"
	 *   - The original state definition is a placeholder for the lazy loaded states
	 * - Register the new states
	 * - Retry the transition
	 *
	 * See [[StateDeclaration.lazyLoad]]
	 */
	var lazyLoadHook = function (transition) {
	    var toState = transition.to();
	    var registry = transition.router.stateRegistry;
	    function retryOriginalTransition() {
	        if (transition.options().source === 'url') {
	            var loc = coreservices_1.services.location, path_1 = loc.path(), search_1 = loc.search(), hash_1 = loc.hash();
	            var matchState = function (state) { return [state, state.url &amp;&amp; state.url.exec(path_1, search_1, hash_1)]; };
	            var matches = registry.get().map(function (s) { return s.$$state(); }).map(matchState).filter(function (_a) {
	                var state = _a[0], params = _a[1];
	                return !!params;
	            });
	            if (matches.length) {
	                var _a = matches[0], state = _a[0], params = _a[1];
	                return transition.router.stateService.target(state, params, transition.options());
	            }
	            transition.router.urlRouter.sync();
	        }
	        // The original transition was not triggered via url sync
	        // The lazy state should be loaded now, so re-try the original transition
	        var orig = transition.targetState();
	        return transition.router.stateService.target(orig.identifier(), orig.params(), orig.options());
	    }
	    /**
	     * Replace the placeholder state with the newly loaded states from the NgModule.
	     */
	    function updateStateRegistry(result) {
	        // deregister placeholder state
	        registry.deregister(transition.$to());
	        if (result &amp;&amp; Array.isArray(result.states)) {
	            result.states.forEach(function (state) { return registry.register(state); });
	        }
	    }
	    var hook = toState.lazyLoad;
	    // Store/get the lazy load promise on/from the hookfn so it doesn't get re-invoked
	    var promise = hook['_promise'];
	    if (!promise) {
	        promise = hook['_promise'] = hook(transition).then(updateStateRegistry);
	        var cleanup = function () { return delete hook['_promise']; };
	        promise.then(cleanup, cleanup);
	    }
	    return promise.then(retryOriginalTransition);
	};
	exports.registerLazyLoadHook = function (transitionService) {
	    return transitionService.onBefore({ to: function (state) { return !!state.lazyLoad; } }, lazyLoadHook);
	};


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module view */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var hof_1 = __webpack_require__(5);
	var predicates_1 = __webpack_require__(4);
	var trace_1 = __webpack_require__(12);
	/**
	 * The View service
	 */
	var ViewService = (function () {
	    function ViewService() {
	        var _this = this;
	        this.uiViews = [];
	        this.viewConfigs = [];
	        this._viewConfigFactories = {};
	        this.sync = function () {
	            var uiViewsByFqn = _this.uiViews.map(function (uiv) { return [uiv.fqn, uiv]; }).reduce(common_1.applyPairs, {});
	            /**
	             * Given a ui-view and a ViewConfig, determines if they "match".
	             *
	             * A ui-view has a fully qualified name (fqn) and a context object.  The fqn is built from its overall location in
	             * the DOM, describing its nesting relationship to any parent ui-view tags it is nested inside of.
	             *
	             * A ViewConfig has a target ui-view name and a context anchor.  The ui-view name can be a simple name, or
	             * can be a segmented ui-view path, describing a portion of a ui-view fqn.
	             *
	             * In order for a ui-view to match ViewConfig, ui-view's $type must match the ViewConfig's $type
	             *
	             * If the ViewConfig's target ui-view name is a simple name (no dots), then a ui-view matches if:
	             * - the ui-view's name matches the ViewConfig's target name
	             * - the ui-view's context matches the ViewConfig's anchor
	             *
	             * If the ViewConfig's target ui-view name is a segmented name (with dots), then a ui-view matches if:
	             * - There exists a parent ui-view where:
	             *    - the parent ui-view's name matches the first segment (index 0) of the ViewConfig's target name
	             *    - the parent ui-view's context matches the ViewConfig's anchor
	             * - And the remaining segments (index 1..n) of the ViewConfig's target name match the tail of the ui-view's fqn
	             *
	             * Example:
	             *
	             * DOM:
	             * &lt;div ui-view&gt;                        &lt;!-- created in the root context (name: "") --&gt;
	             *   &lt;div ui-view="foo"&gt;                &lt;!-- created in the context named: "A"      --&gt;
	             *     &lt;div ui-view&gt;                    &lt;!-- created in the context named: "A.B"    --&gt;
	             *       &lt;div ui-view="bar"&gt;            &lt;!-- created in the context named: "A.B.C"  --&gt;
	             *       &lt;/div&gt;
	             *     &lt;/div&gt;
	             *   &lt;/div&gt;
	             * &lt;/div&gt;
	             *
	             * uiViews: [
	             *  { fqn: "$default",                  creationContext: { name: "" } },
	             *  { fqn: "$default.foo",              creationContext: { name: "A" } },
	             *  { fqn: "$default.foo.$default",     creationContext: { name: "A.B" } }
	             *  { fqn: "$default.foo.$default.bar", creationContext: { name: "A.B.C" } }
	             * ]
	             *
	             * These four view configs all match the ui-view with the fqn: "$default.foo.$default.bar":
	             *
	             * - ViewConfig1: { uiViewName: "bar",                       uiViewContextAnchor: "A.B.C" }
	             * - ViewConfig2: { uiViewName: "$default.bar",              uiViewContextAnchor: "A.B" }
	             * - ViewConfig3: { uiViewName: "foo.$default.bar",          uiViewContextAnchor: "A" }
	             * - ViewConfig4: { uiViewName: "$default.foo.$default.bar", uiViewContextAnchor: "" }
	             *
	             * Using ViewConfig3 as an example, it matches the ui-view with fqn "$default.foo.$default.bar" because:
	             * - The ViewConfig's segmented target name is: [ "foo", "$default", "bar" ]
	             * - There exists a parent ui-view (which has fqn: "$default.foo") where:
	             *    - the parent ui-view's name "foo" matches the first segment "foo" of the ViewConfig's target name
	             *    - the parent ui-view's context "A" matches the ViewConfig's anchor context "A"
	             * - And the remaining segments [ "$default", "bar" ].join("."_ of the ViewConfig's target name match
	             *   the tail of the ui-view's fqn "default.bar"
	             */
	            var matches = function (uiView) { return function (viewConfig) {
	                // Don't supply an ng1 ui-view with an ng2 ViewConfig, etc
	                if (uiView.$type !== viewConfig.viewDecl.$type)
	                    return false;
	                // Split names apart from both viewConfig and uiView into segments
	                var vc = viewConfig.viewDecl;
	                var vcSegments = vc.$uiViewName.split(".");
	                var uivSegments = uiView.fqn.split(".");
	                // Check if the tails of the segment arrays match. ex, these arrays' tails match:
	                // vc: ["foo", "bar"], uiv fqn: ["$default", "foo", "bar"]
	                if (!common_1.equals(vcSegments, uivSegments.slice(0 - vcSegments.length)))
	                    return false;
	                // Now check if the fqn ending at the first segment of the viewConfig matches the context:
	                // ["$default", "foo"].join(".") == "$default.foo", does the ui-view $default.foo context match?
	                var negOffset = (1 - vcSegments.length) || undefined;
	                var fqnToFirstSegment = uivSegments.slice(0, negOffset).join(".");
	                var uiViewContext = uiViewsByFqn[fqnToFirstSegment].creationContext;
	                return vc.$uiViewContextAnchor === (uiViewContext &amp;&amp; uiViewContext.name);
	            }; };
	            // Return the number of dots in the fully qualified name
	            function uiViewDepth(uiView) {
	                return uiView.fqn.split(".").length;
	            }
	            // Return the ViewConfig's context's depth in the context tree.
	            function viewConfigDepth(config) {
	                var context = config.viewDecl.$context, count = 0;
	                while (++count &amp;&amp; context.parent)
	                    context = context.parent;
	                return count;
	            }
	            // Given a depth function, returns a compare function which can return either ascending or descending order
	            var depthCompare = hof_1.curry(function (depthFn, posNeg, left, right) { return posNeg * (depthFn(left) - depthFn(right)); });
	            var matchingConfigPair = function (uiView) {
	                var matchingConfigs = _this.viewConfigs.filter(matches(uiView));
	                if (matchingConfigs.length &gt; 1)
	                    matchingConfigs.sort(depthCompare(viewConfigDepth, -1)); // descending
	                return [uiView, matchingConfigs[0]];
	            };
	            var configureUIView = function (_a) {
	                var uiView = _a[0], viewConfig = _a[1];
	                // If a parent ui-view is reconfigured, it could destroy child ui-views.
	                // Before configuring a child ui-view, make sure it's still in the active uiViews array.
	                if (_this.uiViews.indexOf(uiView) !== -1)
	                    uiView.configUpdated(viewConfig);
	            };
	            _this.uiViews.sort(depthCompare(uiViewDepth, 1)).map(matchingConfigPair).forEach(configureUIView);
	        };
	    }
	    ViewService.prototype.rootContext = function (context) {
	        return this._rootContext = context || this._rootContext;
	    };
	    ;
	    ViewService.prototype.viewConfigFactory = function (viewType, factory) {
	        this._viewConfigFactories[viewType] = factory;
	    };
	    ViewService.prototype.createViewConfig = function (path, decl) {
	        var cfgFactory = this._viewConfigFactories[decl.$type];
	        if (!cfgFactory)
	            throw new Error("ViewService: No view config factory registered for type " + decl.$type);
	        var cfgs = cfgFactory(path, decl);
	        return predicates_1.isArray(cfgs) ? cfgs : [cfgs];
	    };
	    /**
	     * De-registers a ViewConfig.
	     *
	     * @param viewConfig The ViewConfig view to deregister.
	     */
	    ViewService.prototype.deactivateViewConfig = function (viewConfig) {
	        trace_1.trace.traceViewServiceEvent("&lt;- Removing", viewConfig);
	        common_1.removeFrom(this.viewConfigs, viewConfig);
	    };
	    ;
	    ViewService.prototype.activateViewConfig = function (viewConfig) {
	        trace_1.trace.traceViewServiceEvent("-&gt; Registering", viewConfig);
	        this.viewConfigs.push(viewConfig);
	    };
	    ;
	    /**
	     * Allows a `ui-view` element to register its canonical name with a callback that allows it to
	     * be updated with a template, controller, and local variables.
	     *
	     * @param {String} name The fully-qualified name of the `ui-view` object being registered.
	     * @param {Function} configUpdatedCallback A callback that receives updates to the content &amp; configuration
	     *                   of the view.
	     * @return {Function} Returns a de-registration function used when the view is destroyed.
	     */
	    ViewService.prototype.registerUIView = function (uiView) {
	        trace_1.trace.traceViewServiceUIViewEvent("-&gt; Registering", uiView);
	        var uiViews = this.uiViews;
	        var fqnMatches = function (uiv) { return uiv.fqn === uiView.fqn; };
	        if (uiViews.filter(fqnMatches).length)
	            trace_1.trace.traceViewServiceUIViewEvent("!!!! duplicate uiView named:", uiView);
	        uiViews.push(uiView);
	        this.sync();
	        return function () {
	            var idx = uiViews.indexOf(uiView);
	            if (idx === -1) {
	                trace_1.trace.traceViewServiceUIViewEvent("Tried removing non-registered uiView", uiView);
	                return;
	            }
	            trace_1.trace.traceViewServiceUIViewEvent("&lt;- Deregistering", uiView);
	            common_1.removeFrom(uiViews)(uiView);
	        };
	    };
	    ;
	    /**
	     * Returns the list of views currently available on the page, by fully-qualified name.
	     *
	     * @return {Array} Returns an array of fully-qualified view names.
	     */
	    ViewService.prototype.available = function () {
	        return this.uiViews.map(hof_1.prop("fqn"));
	    };
	    /**
	     * Returns the list of views on the page containing loaded content.
	     *
	     * @return {Array} Returns an array of fully-qualified view names.
	     */
	    ViewService.prototype.active = function () {
	        return this.uiViews.filter(hof_1.prop("$config")).map(hof_1.prop("name"));
	    };
	    /**
	     * Normalizes a view's name from a state.views configuration block.
	     *
	     * @param context the context object (state declaration) that the view belongs to
	     * @param rawViewName the name of the view, as declared in the [[StateDeclaration.views]]
	     *
	     * @returns the normalized uiViewName and uiViewContextAnchor that the view targets
	     */
	    ViewService.normalizeUIViewTarget = function (context, rawViewName) {
	        if (rawViewName === void 0) { rawViewName = ""; }
	        // TODO: Validate incoming view name with a regexp to allow:
	        // ex: "view.name@foo.bar" , "^.^.view.name" , "view.name@^.^" , "" ,
	        // "@" , "$default@^" , "!$default.$default" , "!foo.bar"
	        var viewAtContext = rawViewName.split("@");
	        var uiViewName = viewAtContext[0] || "$default"; // default to unnamed view
	        var uiViewContextAnchor = predicates_1.isString(viewAtContext[1]) ? viewAtContext[1] : "^"; // default to parent context
	        // Handle relative view-name sugar syntax.
	        // Matches rawViewName "^.^.^.foo.bar" into array: ["^.^.^.foo.bar", "^.^.^", "foo.bar"],
	        var relativeViewNameSugar = /^(\^(?:\.\^)*)\.(.*$)/.exec(uiViewName);
	        if (relativeViewNameSugar) {
	            // Clobbers existing contextAnchor (rawViewName validation will fix this)
	            uiViewContextAnchor = relativeViewNameSugar[1]; // set anchor to "^.^.^"
	            uiViewName = relativeViewNameSugar[2]; // set view-name to "foo.bar"
	        }
	        if (uiViewName.charAt(0) === '!') {
	            uiViewName = uiViewName.substr(1);
	            uiViewContextAnchor = ""; // target absolutely from root
	        }
	        // handle parent relative targeting "^.^.^"
	        var relativeMatch = /^(\^(?:\.\^)*)$/;
	        if (relativeMatch.exec(uiViewContextAnchor)) {
	            var anchor = uiViewContextAnchor.split(".").reduce((function (anchor, x) { return anchor.parent; }), context);
	            uiViewContextAnchor = anchor.name;
	        }
	        return { uiViewName: uiViewName, uiViewContextAnchor: uiViewContextAnchor };
	    };
	    return ViewService;
	}());
	exports.ViewService = ViewService;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/** @module state */ /** for typedoc */
	"use strict";
	var stateMatcher_1 = __webpack_require__(39);
	var stateBuilder_1 = __webpack_require__(40);
	var stateQueueManager_1 = __webpack_require__(41);
	var common_1 = __webpack_require__(3);
	var StateRegistry = (function () {
	    function StateRegistry(urlMatcherFactory, urlRouterProvider) {
	        this.urlRouterProvider = urlRouterProvider;
	        this.states = {};
	        this.listeners = [];
	        this.matcher = new stateMatcher_1.StateMatcher(this.states);
	        this.builder = new stateBuilder_1.StateBuilder(this.matcher, urlMatcherFactory);
	        this.stateQueue = new stateQueueManager_1.StateQueueManager(this.states, this.builder, urlRouterProvider, this.listeners);
	        var rootStateDef = {
	            name: '',
	            url: '^',
	            views: null,
	            params: {
	                '#': { value: null, type: 'hash', dynamic: true }
	            },
	            abstract: true
	        };
	        var _root = this._root = this.stateQueue.register(rootStateDef);
	        _root.navigable = null;
	    }
	    /**
	     * Listen for a State Registry events
	     *
	     * Adds a callback that is invoked when states are registered or deregistered with the StateRegistry.
	     *
	     * @example
	     * ```js
	     *
	     * let allStates = registry.get();
	     *
	     * // Later, invoke deregisterFn() to remove the listener
	     * let deregisterFn = registry.onStatesChanged((event, states) =&gt; {
	     *   switch(event) {
	     *     case: 'registered':
	     *       states.forEach(state =&gt; allStates.push(state));
	     *       break;
	     *     case: 'deregistered':
	     *       states.forEach(state =&gt; {
	     *         let idx = allStates.indexOf(state);
	     *         if (idx !== -1) allStates.splice(idx, 1);
	     *       });
	     *       break;
	     *   }
	     * });
	     * ```
	     *
	     * @param listener a callback function invoked when the registered states changes.
	     *        The function receives two parameters, `event` and `state`.
	     *        See [[StateRegistryListener]]
	     * @return a function that deregisters the listener
	     */
	    StateRegistry.prototype.onStatesChanged = function (listener) {
	        this.listeners.push(listener);
	        return function deregisterListener() {
	            common_1.removeFrom(this.listeners)(listener);
	        }.bind(this);
	    };
	    /**
	     * Gets the implicit root state
	     *
	     * Gets the root of the state tree.
	     * The root state is implicitly created by UI-Router.
	     * Note: this returns the internal [[State]] representation, not a [[StateDeclaration]]
	     *
	     * @return the root [[State]]
	     */
	    StateRegistry.prototype.root = function () {
	        return this._root;
	    };
	    /**
	     * Adds a state to the registry
	     *
	     * Registers a [[StateDefinition]] or queues it for registration.
	     *
	     * Note: a state will be queued if the state's parent isn't yet registered.
	     * It will also be queued if the queue is not yet in [[StateQueueManager.autoFlush]] mode.
	     *
	     * @param stateDefinition the definition of the state to register.
	     * @returns the internal [[State]] object.
	     *          If the state was successfully registered, then the object is fully built (See: [[StateBuilder]]).
	     *          If the state was only queued, then the object is not fully built.
	     */
	    StateRegistry.prototype.register = function (stateDefinition) {
	        return this.stateQueue.register(stateDefinition);
	    };
	    /** @hidden */
	    StateRegistry.prototype._deregisterTree = function (state) {
	        var _this = this;
	        var all = this.get().map(function (s) { return s.$$state(); });
	        var getChildren = function (states) {
	            var children = all.filter(function (s) { return states.indexOf(s.parent) !== -1; });
	            return children.length === 0 ? children : children.concat(getChildren(children));
	        };
	        var children = getChildren([state]);
	        var deregistered = [state].concat(children).reverse();
	        deregistered.forEach(function (state) {
	            _this.urlRouterProvider.removeRule(state._urlRule);
	            delete _this.states[state.name];
	        });
	        return deregistered;
	    };
	    /**
	     * Removes a state from the registry
	     *
	     * This removes a state from the registry.
	     * If the state has children, they are are also removed from the registry.
	     *
	     * @param stateOrName the state's name or object representation
	     * @returns {State[]} a list of removed states
	     */
	    StateRegistry.prototype.deregister = function (stateOrName) {
	        var _state = this.get(stateOrName);
	        if (!_state)
	            throw new Error("Can't deregister state; not found: " + stateOrName);
	        var deregisteredStates = this._deregisterTree(_state.$$state());
	        this.listeners.forEach(function (listener) { return listener("deregistered", deregisteredStates.map(function (s) { return s.self; })); });
	        return deregisteredStates;
	    };
	    StateRegistry.prototype.get = function (stateOrName, base) {
	        var _this = this;
	        if (arguments.length === 0)
	            return Object.keys(this.states).map(function (name) { return _this.states[name].self; });
	        var found = this.matcher.find(stateOrName, base);
	        return found &amp;&amp; found.self || null;
	    };
	    StateRegistry.prototype.decorator = function (name, func) {
	        return this.builder.builder(name, func);
	    };
	    return StateRegistry;
	}());
	exports.StateRegistry = StateRegistry;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module state */ /** for typedoc */
	var predicates_1 = __webpack_require__(4);
	var glob_1 = __webpack_require__(7);
	var common_1 = __webpack_require__(3);
	var StateMatcher = (function () {
	    function StateMatcher(_states) {
	        this._states = _states;
	    }
	    StateMatcher.prototype.isRelative = function (stateName) {
	        stateName = stateName || "";
	        return stateName.indexOf(".") === 0 || stateName.indexOf("^") === 0;
	    };
	    StateMatcher.prototype.find = function (stateOrName, base) {
	        if (!stateOrName &amp;&amp; stateOrName !== "")
	            return undefined;
	        var isStr = predicates_1.isString(stateOrName);
	        var name = isStr ? stateOrName : stateOrName.name;
	        if (this.isRelative(name))
	            name = this.resolvePath(name, base);
	        var state = this._states[name];
	        if (state &amp;&amp; (isStr || (!isStr &amp;&amp; (state === stateOrName || state.self === stateOrName)))) {
	            return state;
	        }
	        else if (isStr) {
	            var matches = common_1.values(this._states)
	                .filter(function (state) { return new glob_1.Glob(state.name).matches(name); });
	            if (matches.length &gt; 1) {
	                console.log("stateMatcher.find: Found multiple matches for " + name + " using glob: ", matches.map(function (match) { return match.name; }));
	            }
	            return matches[0];
	        }
	        return undefined;
	    };
	    StateMatcher.prototype.resolvePath = function (name, base) {
	        if (!base)
	            throw new Error("No reference point given for path '" + name + "'");
	        var baseState = this.find(base);
	        var splitName = name.split("."), i = 0, pathLength = splitName.length, current = baseState;
	        for (; i &lt; pathLength; i++) {
	            if (splitName[i] === "" &amp;&amp; i === 0) {
	                current = baseState;
	                continue;
	            }
	            if (splitName[i] === "^") {
	                if (!current.parent)
	                    throw new Error("Path '" + name + "' not valid for state '" + baseState.name + "'");
	                current = current.parent;
	                continue;
	            }
	            break;
	        }
	        var relName = splitName.slice(i).join(".");
	        return current.name + (current.name &amp;&amp; relName ? "." : "") + relName;
	    };
	    return StateMatcher;
	}());
	exports.StateMatcher = StateMatcher;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module state */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var predicates_1 = __webpack_require__(4);
	var strings_1 = __webpack_require__(9);
	var hof_1 = __webpack_require__(5);
	var param_1 = __webpack_require__(22);
	var resolvable_1 = __webpack_require__(19);
	var coreservices_1 = __webpack_require__(6);
	var parseUrl = function (url) {
	    if (!predicates_1.isString(url))
	        return false;
	    var root = url.charAt(0) === '^';
	    return { val: root ? url.substring(1) : url, root: root };
	};
	function nameBuilder(state) {
	    if (state.lazyLoad)
	        state.name = state.self.name + ".**";
	    return state.name;
	}
	function selfBuilder(state) {
	    state.self.$$state = function () { return state; };
	    return state.self;
	}
	function dataBuilder(state) {
	    if (state.parent &amp;&amp; state.parent.data) {
	        state.data = state.self.data = common_1.inherit(state.parent.data, state.data);
	    }
	    return state.data;
	}
	var getUrlBuilder = function ($urlMatcherFactoryProvider, root) {
	    return function urlBuilder(state) {
	        var stateDec = state;
	        if (stateDec &amp;&amp; stateDec.url &amp;&amp; stateDec.lazyLoad) {
	            stateDec.url += "{remainder:any}"; // match any path (.*)
	        }
	        var parsed = parseUrl(stateDec.url), parent = state.parent;
	        var url = !parsed ? stateDec.url : $urlMatcherFactoryProvider.compile(parsed.val, {
	            params: state.params || {},
	            paramMap: function (paramConfig, isSearch) {
	                if (stateDec.reloadOnSearch === false &amp;&amp; isSearch)
	                    paramConfig = common_1.extend(paramConfig || {}, { dynamic: true });
	                return paramConfig;
	            }
	        });
	        if (!url)
	            return null;
	        if (!$urlMatcherFactoryProvider.isMatcher(url))
	            throw new Error("Invalid url '" + url + "' in state '" + state + "'");
	        return (parsed &amp;&amp; parsed.root) ? url : ((parent &amp;&amp; parent.navigable) || root()).url.append(url);
	    };
	};
	var getNavigableBuilder = function (isRoot) {
	    return function navigableBuilder(state) {
	        return !isRoot(state) &amp;&amp; state.url ? state : (state.parent ? state.parent.navigable : null);
	    };
	};
	var getParamsBuilder = function (paramTypes) {
	    return function paramsBuilder(state) {
	        var makeConfigParam = function (config, id) { return param_1.Param.fromConfig(id, null, config, paramTypes); };
	        var urlParams = (state.url &amp;&amp; state.url.parameters({ inherit: false })) || [];
	        var nonUrlParams = common_1.values(common_1.mapObj(common_1.omit(state.params || {}, urlParams.map(hof_1.prop('id'))), makeConfigParam));
	        return urlParams.concat(nonUrlParams).map(function (p) { return [p.id, p]; }).reduce(common_1.applyPairs, {});
	    };
	};
	function pathBuilder(state) {
	    return state.parent ? state.parent.path.concat(state) : [state];
	}
	function includesBuilder(state) {
	    var includes = state.parent ? common_1.extend({}, state.parent.includes) : {};
	    includes[state.name] = true;
	    return includes;
	}
	/**
	 * This is a [[StateBuilder.builder]] function for the `resolve:` block on a [[StateDeclaration]].
	 *
	 * When the [[StateBuilder]] builds a [[State]] object from a raw [[StateDeclaration]], this builder
	 * validates the `resolve` property and converts it to a [[Resolvable]] array.
	 *
	 * resolve: input value can be:
	 *
	 * {
	 *   // analyzed but not injected
	 *   myFooResolve: function() { return "myFooData"; },
	 *
	 *   // function.toString() parsed, "DependencyName" dep as string (not min-safe)
	 *   myBarResolve: function(DependencyName) { return DependencyName.fetchSomethingAsPromise() },
	 *
	 *   // Array split; "DependencyName" dep as string
	 *   myBazResolve: [ "DependencyName", function(dep) { return dep.fetchSomethingAsPromise() },
	 *
	 *   // Array split; DependencyType dep as token (compared using ===)
	 *   myQuxResolve: [ DependencyType, function(dep) { return dep.fetchSometingAsPromise() },
	 *
	 *   // val.$inject used as deps
	 *   // where:
	 *   //     corgeResolve.$inject = ["DependencyName"];
	 *   //     function corgeResolve(dep) { dep.fetchSometingAsPromise() }
	 *   // then "DependencyName" dep as string
	 *   myCorgeResolve: corgeResolve,
	 *
	 *  // inject service by name
	 *  // When a string is found, desugar creating a resolve that injects the named service
	 *   myGraultResolve: "SomeService"
	 * }
	 *
	 * or:
	 *
	 * [
	 *   new Resolvable("myFooResolve", function() { return "myFooData" }),
	 *   new Resolvable("myBarResolve", function(dep) { return dep.fetchSomethingAsPromise() }, [ "DependencyName" ]),
	 *   { provide: "myBazResolve", useFactory: function(dep) { dep.fetchSomethingAsPromise() }, deps: [ "DependencyName" ] }
	 * ]
	 */
	function resolvablesBuilder(state) {
	    /** convert resolve: {} and resolvePolicy: {} objects to an array of tuples */
	    var objects2Tuples = function (resolveObj, resolvePolicies) {
	        return Object.keys(resolveObj || {}).map(function (token) { return ({ token: token, val: resolveObj[token], deps: undefined, policy: resolvePolicies[token] }); });
	    };
	    /** fetch DI annotations from a function or ng1-style array */
	    var annotate = function (fn) {
	        return fn['$inject'] || coreservices_1.services.$injector.annotate(fn, coreservices_1.services.$injector.strictDi);
	    };
	    /** true if the object has both `token` and `resolveFn`, and is probably a [[ResolveLiteral]] */
	    var isResolveLiteral = function (obj) { return !!(obj.token &amp;&amp; obj.resolveFn); };
	    /** true if the object looks like a provide literal, or a ng2 Provider */
	    var isLikeNg2Provider = function (obj) { return !!((obj.provide || obj.token) &amp;&amp; (obj.useValue || obj.useFactory || obj.useExisting || obj.useClass)); };
	    /** true if the object looks like a tuple from obj2Tuples */
	    var isTupleFromObj = function (obj) { return !!(obj &amp;&amp; obj.val &amp;&amp; (predicates_1.isString(obj.val) || predicates_1.isArray(obj.val) || predicates_1.isFunction(obj.val))); };
	    /** extracts the token from a Provider or provide literal */
	    var token = function (p) { return p.provide || p.token; };
	    /** Given a literal resolve or provider object, returns a Resolvable */
	    var literal2Resolvable = hof_1.pattern([
	        [hof_1.prop('resolveFn'), function (p) { return new resolvable_1.Resolvable(token(p), p.resolveFn, p.deps, p.policy); }],
	        [hof_1.prop('useFactory'), function (p) { return new resolvable_1.Resolvable(token(p), p.useFactory, (p.deps || p.dependencies), p.policy); }],
	        [hof_1.prop('useClass'), function (p) { return new resolvable_1.Resolvable(token(p), function () { return new p.useClass(); }, [], p.policy); }],
	        [hof_1.prop('useValue'), function (p) { return new resolvable_1.Resolvable(token(p), function () { return p.useValue; }, [], p.policy, p.useValue); }],
	        [hof_1.prop('useExisting'), function (p) { return new resolvable_1.Resolvable(token(p), common_1.identity, [p.useExisting], p.policy); }],
	    ]);
	    var tuple2Resolvable = hof_1.pattern([
	        [hof_1.pipe(hof_1.prop("val"), predicates_1.isString), function (tuple) { return new resolvable_1.Resolvable(tuple.token, common_1.identity, [tuple.val], tuple.policy); }],
	        [hof_1.pipe(hof_1.prop("val"), predicates_1.isArray), function (tuple) { return new resolvable_1.Resolvable(tuple.token, common_1.tail(tuple.val), tuple.val.slice(0, -1), tuple.policy); }],
	        [hof_1.pipe(hof_1.prop("val"), predicates_1.isFunction), function (tuple) { return new resolvable_1.Resolvable(tuple.token, tuple.val, annotate(tuple.val), tuple.policy); }],
	    ]);
	    var item2Resolvable = hof_1.pattern([
	        [hof_1.is(resolvable_1.Resolvable), function (r) { return r; }],
	        [isResolveLiteral, literal2Resolvable],
	        [isLikeNg2Provider, literal2Resolvable],
	        [isTupleFromObj, tuple2Resolvable],
	        [hof_1.val(true), function (obj) { throw new Error("Invalid resolve value: " + strings_1.stringify(obj)); }]
	    ]);
	    // If resolveBlock is already an array, use it as-is.
	    // Otherwise, assume it's an object and convert to an Array of tuples
	    var decl = state.resolve;
	    var items = predicates_1.isArray(decl) ? decl : objects2Tuples(decl, state.resolvePolicy || {});
	    return items.map(item2Resolvable);
	}
	exports.resolvablesBuilder = resolvablesBuilder;
	/**
	 * @internalapi A internal global service
	 *
	 * StateBuilder is a factory for the internal [[State]] objects.
	 *
	 * When you register a state with the [[StateRegistry]], you register a plain old javascript object which
	 * conforms to the [[StateDeclaration]] interface.  This factory takes that object and builds the corresponding
	 * [[State]] object, which has an API and is used internally.
	 *
	 * Custom properties or API may be added to the internal [[State]] object by registering a decorator function
	 * using the [[builder]] method.
	 */
	var StateBuilder = (function () {
	    function StateBuilder(matcher, $urlMatcherFactoryProvider) {
	        this.matcher = matcher;
	        var self = this;
	        var root = function () { return matcher.find(""); };
	        var isRoot = function (state) { return state.name === ""; };
	        function parentBuilder(state) {
	            if (isRoot(state))
	                return null;
	            return matcher.find(self.parentName(state)) || root();
	        }
	        this.builders = {
	            name: [nameBuilder],
	            self: [selfBuilder],
	            parent: [parentBuilder],
	            data: [dataBuilder],
	            // Build a URLMatcher if necessary, either via a relative or absolute URL
	            url: [getUrlBuilder($urlMatcherFactoryProvider, root)],
	            // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
	            navigable: [getNavigableBuilder(isRoot)],
	            params: [getParamsBuilder($urlMatcherFactoryProvider.paramTypes)],
	            // Each framework-specific ui-router implementation should define its own `views` builder
	            // e.g., src/ng1/statebuilders/views.ts
	            views: [],
	            // Keep a full path from the root down to this state as this is needed for state activation.
	            path: [pathBuilder],
	            // Speed up $state.includes() as it's used a lot
	            includes: [includesBuilder],
	            resolvables: [resolvablesBuilder]
	        };
	    }
	    /**
	     * Registers a [[BuilderFunction]] for a specific [[State]] property (e.g., `parent`, `url`, or `path`).
	     * More than one BuilderFunction can be registered for a given property.
	     *
	     * The BuilderFunction(s) will be used to define the property on any subsequently built [[State]] objects.
	     *
	     * @param name The name of the State property being registered for.
	     * @param fn The BuilderFunction which will be used to build the State property
	     * @returns a function which deregisters the BuilderFunction
	     */
	    StateBuilder.prototype.builder = function (name, fn) {
	        var builders = this.builders;
	        var array = builders[name] || [];
	        // Backwards compat: if only one builder exists, return it, else return whole arary.
	        if (predicates_1.isString(name) &amp;&amp; !predicates_1.isDefined(fn))
	            return array.length &gt; 1 ? array : array[0];
	        if (!predicates_1.isString(name) || !predicates_1.isFunction(fn))
	            return;
	        builders[name] = array;
	        builders[name].push(fn);
	        return function () { return builders[name].splice(builders[name].indexOf(fn, 1)) &amp;&amp; null; };
	    };
	    /**
	     * Builds all of the properties on an essentially blank State object, returning a State object which has all its
	     * properties and API built.
	     *
	     * @param state an uninitialized State object
	     * @returns the built State object
	     */
	    StateBuilder.prototype.build = function (state) {
	        var _a = this, matcher = _a.matcher, builders = _a.builders;
	        var parent = this.parentName(state);
	        if (parent &amp;&amp; !matcher.find(parent))
	            return null;
	        for (var key in builders) {
	            if (!builders.hasOwnProperty(key))
	                continue;
	            var chain = builders[key].reduce(function (parentFn, step) { return function (_state) { return step(_state, parentFn); }; }, common_1.noop);
	            state[key] = chain(state);
	        }
	        return state;
	    };
	    StateBuilder.prototype.parentName = function (state) {
	        var name = state.name || "";
	        var segments = name.split('.');
	        if (segments.length &gt; 1) {
	            if (state.parent) {
	                throw new Error("States that specify the 'parent:' property should not have a '.' in their name (" + name + ")");
	            }
	            var lastSegment = segments.pop();
	            if (lastSegment === '**')
	                segments.pop();
	            return segments.join(".");
	        }
	        if (!state.parent)
	            return "";
	        return predicates_1.isString(state.parent) ? state.parent : state.parent.name;
	    };
	    StateBuilder.prototype.name = function (state) {
	        var name = state.name;
	        if (name.indexOf('.') !== -1 || !state.parent)
	            return name;
	        var parentName = predicates_1.isString(state.parent) ? state.parent : state.parent.name;
	        return parentName ? parentName + "." + name : name;
	    };
	    return StateBuilder;
	}());
	exports.StateBuilder = StateBuilder;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module state */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var predicates_1 = __webpack_require__(4);
	var stateObject_1 = __webpack_require__(42);
	var StateQueueManager = (function () {
	    function StateQueueManager(states, builder, $urlRouterProvider, listeners) {
	        this.states = states;
	        this.builder = builder;
	        this.$urlRouterProvider = $urlRouterProvider;
	        this.listeners = listeners;
	        this.queue = [];
	    }
	    StateQueueManager.prototype.register = function (config) {
	        var _a = this, states = _a.states, queue = _a.queue, $state = _a.$state;
	        // Wrap a new object around the state so we can store our private details easily.
	        // @TODO: state = new State(extend({}, config, { ... }))
	        var state = common_1.inherit(new stateObject_1.State(), common_1.extend({}, config, {
	            self: config,
	            resolve: config.resolve || [],
	            toString: function () { return config.name; }
	        }));
	        if (!predicates_1.isString(state.name))
	            throw new Error("State must have a valid name");
	        if (states.hasOwnProperty(state.name) || common_1.pluck(queue, 'name').indexOf(state.name) !== -1)
	            throw new Error("State '" + state.name + "' is already defined");
	        queue.push(state);
	        if (this.$state) {
	            this.flush($state);
	        }
	        return state;
	    };
	    StateQueueManager.prototype.flush = function ($state) {
	        var _a = this, queue = _a.queue, states = _a.states, builder = _a.builder;
	        var registered = [], // states that got registered
	        orphans = [], // states that dodn't yet have a parent registered
	        previousQueueLength = {}; // keep track of how long the queue when an orphan was first encountered
	        while (queue.length &gt; 0) {
	            var state = queue.shift();
	            var result = builder.build(state);
	            var orphanIdx = orphans.indexOf(state);
	            if (result) {
	                if (states.hasOwnProperty(state.name))
	                    throw new Error("State '" + name + "' is already defined");
	                states[state.name] = state;
	                this.attachRoute($state, state);
	                if (orphanIdx &gt;= 0)
	                    orphans.splice(orphanIdx, 1);
	                registered.push(state);
	                continue;
	            }
	            var prev = previousQueueLength[state.name];
	            previousQueueLength[state.name] = queue.length;
	            if (orphanIdx &gt;= 0 &amp;&amp; prev === queue.length) {
	                // Wait until two consecutive iterations where no additional states were dequeued successfully.
	                // throw new Error(`Cannot register orphaned state '${state.name}'`);
	                queue.push(state);
	                return states;
	            }
	            else if (orphanIdx &lt; 0) {
	                orphans.push(state);
	            }
	            queue.push(state);
	        }
	        if (registered.length) {
	            this.listeners.forEach(function (listener) { return listener("registered", registered.map(function (s) { return s.self; })); });
	        }
	        return states;
	    };
	    StateQueueManager.prototype.autoFlush = function ($state) {
	        this.$state = $state;
	        this.flush($state);
	    };
	    StateQueueManager.prototype.attachRoute = function ($state, state) {
	        var $urlRouterProvider = this.$urlRouterProvider;
	        if (state.abstract || !state.url)
	            return;
	        $urlRouterProvider.when(state.url, ['$match', '$stateParams', function ($match, $stateParams) {
	                if ($state.$current.navigable !== state || !common_1.equalForKeys($match, $stateParams)) {
	                    $state.transitionTo(state, $match, { inherit: true, source: "url" });
	                }
	            }], function (rule) { return state._urlRule = rule; });
	    };
	    return StateQueueManager;
	}());
	exports.StateQueueManager = StateQueueManager;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/** @module state */ /** for typedoc */
	"use strict";
	var common_1 = __webpack_require__(3);
	var hof_1 = __webpack_require__(5);
	/**
	 * @ngdoc object
	 * @name ui.router.state.type:State
	 *
	 * @description
	 * Definition object for states. Includes methods for manipulating the state heirarchy.
	 *
	 * @param {Object} config  A configuration object hash that includes the results of user-supplied
	 *        values, as well as values from `StateBuilder`.
	 *
	 * @returns {Object}  Returns a new `State` object.
	 */
	var State = (function () {
	    function State(config) {
	        common_1.extend(this, config);
	        // Object.freeze(this);
	    }
	    /**
	     * @ngdoc function
	     * @name ui.router.state.type:State#is
	     * @methodOf ui.router.state.type:State
	     *
	     * @description
	     * Compares the identity of the state against the passed value, which is either an object
	     * reference to the actual `State` instance, the original definition object passed to
	     * `$stateProvider.state()`, or the fully-qualified name.
	     *
	     * @param {Object} ref Can be one of (a) a `State` instance, (b) an object that was passed
	     *        into `$stateProvider.state()`, (c) the fully-qualified name of a state as a string.
	     * @returns {boolean} Returns `true` if `ref` matches the current `State` instance.
	     */
	    State.prototype.is = function (ref) {
	        return this === ref || this.self === ref || this.fqn() === ref;
	    };
	    /**
	     * @ngdoc function
	     * @name ui.router.state.type:State#fqn
	     * @methodOf ui.router.state.type:State
	     *
	     * @description
	     * Returns the fully-qualified name of the state, based on its current position in the tree.
	     *
	     * @returns {string} Returns a dot-separated name of the state.
	     */
	    State.prototype.fqn = function () {
	        if (!this.parent || !(this.parent instanceof this.constructor))
	            return this.name;
	        var name = this.parent.fqn();
	        return name ? name + "." + this.name : this.name;
	    };
	    /**
	     * @ngdoc function
	     * @name ui.router.state.type:State#root
	     * @methodOf ui.router.state.type:State
	     *
	     * @description
	     * Returns the root node of this state's tree.
	     *
	     * @returns {State} The root of this state's tree.
	     */
	    State.prototype.root = function () {
	        return this.parent &amp;&amp; this.parent.root() || this;
	    };
	    State.prototype.parameters = function (opts) {
	        opts = common_1.defaults(opts, { inherit: true });
	        var inherited = opts.inherit &amp;&amp; this.parent &amp;&amp; this.parent.parameters() || [];
	        return inherited.concat(common_1.values(this.params));
	    };
	    State.prototype.parameter = function (id, opts) {
	        if (opts === void 0) { opts = {}; }
	        return (this.url &amp;&amp; this.url.parameter(id, opts) ||
	            common_1.find(common_1.values(this.params), hof_1.propEq('id', id)) ||
	            opts.inherit &amp;&amp; this.parent &amp;&amp; this.parent.parameter(id));
	    };
	    State.prototype.toString = function () {
	        return this.fqn();
	    };
	    return State;
	}());
	exports.State = State;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module state */ /** */
	var common_1 = __webpack_require__(3);
	var predicates_1 = __webpack_require__(4);
	var queue_1 = __webpack_require__(8);
	var coreservices_1 = __webpack_require__(6);
	var pathFactory_1 = __webpack_require__(20);
	var node_1 = __webpack_require__(21);
	var transitionService_1 = __webpack_require__(30);
	var rejectFactory_1 = __webpack_require__(10);
	var targetState_1 = __webpack_require__(14);
	var param_1 = __webpack_require__(22);
	var glob_1 = __webpack_require__(7);
	var common_2 = __webpack_require__(3);
	var common_3 = __webpack_require__(3);
	var resolveContext_1 = __webpack_require__(17);
	var StateService = (function () {
	    /** @hidden */
	    function StateService(router) {
	        this.router = router;
	        this.invalidCallbacks = [];
	        /** @hidden */
	        this._defaultErrorHandler = function $defaultErrorHandler($error$) {
	            if ($error$ instanceof Error &amp;&amp; $error$.stack) {
	                console.error($error$);
	                console.error($error$.stack);
	            }
	            else if ($error$ instanceof rejectFactory_1.Rejection) {
	                console.error($error$.toString());
	                if ($error$.detail &amp;&amp; $error$.detail.stack)
	                    console.error($error$.detail.stack);
	            }
	            else {
	                console.error($error$);
	            }
	        };
	        var getters = ['current', '$current', 'params', 'transition'];
	        var boundFns = Object.keys(StateService.prototype).filter(function (key) { return getters.indexOf(key) === -1; });
	        common_3.bindFunctions(StateService.prototype, this, this, boundFns);
	    }
	    Object.defineProperty(StateService.prototype, "transition", {
	        get: function () { return this.router.globals.transition; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(StateService.prototype, "params", {
	        get: function () { return this.router.globals.params; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(StateService.prototype, "current", {
	        get: function () { return this.router.globals.current; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(StateService.prototype, "$current", {
	        get: function () { return this.router.globals.$current; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Handler for when [[transitionTo]] is called with an invalid state.
	     *
	     * Invokes the [[onInvalid]] callbacks, in natural order.
	     * Each callback's return value is checked in sequence until one of them returns an instance of TargetState.
	     * The results of the callbacks are wrapped in $q.when(), so the callbacks may return promises.
	     *
	     * If a callback returns an TargetState, then it is used as arguments to $state.transitionTo() and the result returned.
	     */
	    StateService.prototype._handleInvalidTargetState = function (fromPath, toState) {
	        var _this = this;
	        var fromState = pathFactory_1.PathFactory.makeTargetState(fromPath);
	        var globals = this.router.globals;
	        var latestThing = function () { return globals.transitionHistory.peekTail(); };
	        var latest = latestThing();
	        var callbackQueue = new queue_1.Queue(this.invalidCallbacks.slice());
	        var injector = new resolveContext_1.ResolveContext(fromPath).injector();
	        var checkForRedirect = function (result) {
	            if (!(result instanceof targetState_1.TargetState)) {
	                return;
	            }
	            var target = result;
	            // Recreate the TargetState, in case the state is now defined.
	            target = _this.target(target.identifier(), target.params(), target.options());
	            if (!target.valid())
	                return rejectFactory_1.Rejection.invalid(target.error()).toPromise();
	            if (latestThing() !== latest)
	                return rejectFactory_1.Rejection.superseded().toPromise();
	            return _this.transitionTo(target.identifier(), target.params(), target.options());
	        };
	        function invokeNextCallback() {
	            var nextCallback = callbackQueue.dequeue();
	            if (nextCallback === undefined)
	                return rejectFactory_1.Rejection.invalid(toState.error()).toPromise();
	            var callbackResult = coreservices_1.services.$q.when(nextCallback(toState, fromState, injector));
	            return callbackResult.then(checkForRedirect).then(function (result) { return result || invokeNextCallback(); });
	        }
	        return invokeNextCallback();
	    };
	    /**
	     * Registers an Invalid State handler
	     *
	     * Registers a [[OnInvalidCallback]] function to be invoked when [[StateService.transitionTo]]
	     * has been called with an invalid state reference parameter
	     *
	     * Example:
	     * ```js
	     * stateService.onInvalid(function(to, from, injector) {
	     *   if (to.name() === 'foo') {
	     *     let lazyLoader = injector.get('LazyLoadService');
	     *     return lazyLoader.load('foo')
	     *         .then(() =&gt; stateService.target('foo'));
	     *   }
	     * });
	     * ```
	     *
	     * @param {function} callback invoked when the toState is invalid
	     *   This function receives the (invalid) toState, the fromState, and an injector.
	     *   The function may optionally return a [[TargetState]] or a Promise for a TargetState.
	     *   If one is returned, it is treated as a redirect.
	     *
	     * @returns a function which deregisters the callback
	     */
	    StateService.prototype.onInvalid = function (callback) {
	        this.invalidCallbacks.push(callback);
	        return function deregisterListener() {
	            common_1.removeFrom(this.invalidCallbacks)(callback);
	        }.bind(this);
	    };
	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#reload
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A method that force reloads the current state, or a partial state hierarchy. All resolves are re-resolved,
	     * controllers reinstantiated, and events re-fired.
	     *
	     * @example
	     * &lt;pre&gt;
	     * let app angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.reload = function(){
	     *     $state.reload();
	     *   }
	     * });
	     * &lt;/pre&gt;
	     *
	     * `reload()` is just an alias for:
	     * &lt;pre&gt;
	     * $state.transitionTo($state.current, $stateParams, {
	     *   reload: true, inherit: false, notify: true
	     * });
	     * &lt;/pre&gt;
	     *
	     * @param {string=|object=} reloadState - A state name or a state object, which is the root of the resolves to be re-resolved.
	     * @example
	     * &lt;pre&gt;
	     * //assuming app application consists of 3 states: 'contacts', 'contacts.detail', 'contacts.detail.item'
	     * //and current state is 'contacts.detail.item'
	     * let app angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.reload = function(){
	     *     //will reload 'contact.detail' and nested 'contact.detail.item' states
	     *     $state.reload('contact.detail');
	     *   }
	     * });
	     * &lt;/pre&gt;
	     *
	     * @returns {promise} A promise representing the state of the new transition. See
	     * {@link ui.router.state.$state#methods_go $state.go}.
	     */
	    StateService.prototype.reload = function (reloadState) {
	        return this.transitionTo(this.current, this.params, {
	            reload: predicates_1.isDefined(reloadState) ? reloadState : true,
	            inherit: false,
	            notify: false
	        });
	    };
	    ;
	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#go
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Convenience method for transitioning to a new state. `$state.go` calls
	     * `$state.transitionTo` internally but automatically sets options to
	     * `{ location: true, inherit: true, relative: $state.$current, notify: true }`.
	     * This allows you to easily use an absolute or relative to path and specify
	     * only the parameters you'd like to update (while letting unspecified parameters
	     * inherit from the currently active ancestor states).
	     *
	     * @example
	     * &lt;pre&gt;
	     * let app = angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.changeState = function () {
	     *     $state.go('contact.detail');
	     *   };
	     * });
	     * &lt;/pre&gt;
	     * &lt;img src='../ngdoc_assets/StateGoExamples.png'/&gt;
	     *
	     * @param {string|object} to Absolute state name, state object, or relative state path. Some examples:
	     *
	     * - `$state.go('contact.detail')` - will go to the `contact.detail` state
	     * - `$state.go('^')` - will go to a parent state
	     * - `$state.go('^.sibling')` - will go to a sibling state
	     * - `$state.go('.child.grandchild')` - will go to grandchild state
	     *
	     * @param {object=} params A map of the parameters that will be sent to the state,
	     * will populate $stateParams. Any parameters that are not specified will be inherited from currently
	     * defined parameters. This allows, for example, going to a sibling state that shares parameters
	     * specified in a parent state. Parameter inheritance only works between common ancestor states, I.e.
	     * transitioning to a sibling will get you the parameters for all parents, transitioning to a child
	     * will get you all current parameters, etc.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
	     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
	     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'),
	     *    defines which state to be relative from.
	     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
	     * - **`reload`** (v0.2.5) - {boolean=false}, If `true` will force transition even if the state or params
	     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
	     *    use this when you want to force a reload when *everything* is the same, including search params.
	     *
	     * @returns {promise} A promise representing the state of the new transition.
	     *
	     * Possible success values:
	     *
	     * - $state.current
	     *
	     * &lt;br/&gt;Possible rejection values:
	     *
	     * - 'transition superseded' - when a newer transition has been started after this one
	     * - 'transition prevented' - when `event.preventDefault()` has been called in a `$stateChangeStart` listener
	     * - 'transition aborted' - when `event.preventDefault()` has been called in a `$stateNotFound` listener or
	     *   when a `$stateNotFound` `event.retry` promise errors.
	     * - 'transition failed' - when a state has been unsuccessfully found after 2 tries.
	     * - *resolve error* - when an error has occurred with a `resolve`
	     *
	     */
	    StateService.prototype.go = function (to, params, options) {
	        var defautGoOpts = { relative: this.$current, inherit: true };
	        var transOpts = common_1.defaults(options, defautGoOpts, transitionService_1.defaultTransOpts);
	        return this.transitionTo(to, params, transOpts);
	    };
	    ;
	    /** Factory method for creating a TargetState */
	    StateService.prototype.target = function (identifier, params, options) {
	        if (options === void 0) { options = {}; }
	        // If we're reloading, find the state object to reload from
	        if (predicates_1.isObject(options.reload) &amp;&amp; !options.reload.name)
	            throw new Error('Invalid reload state object');
	        var reg = this.router.stateRegistry;
	        options.reloadState = options.reload === true ? reg.root() : reg.matcher.find(options.reload, options.relative);
	        if (options.reload &amp;&amp; !options.reloadState)
	            throw new Error("No such reload state '" + (predicates_1.isString(options.reload) ? options.reload : options.reload.name) + "'");
	        var stateDefinition = reg.matcher.find(identifier, options.relative);
	        return new targetState_1.TargetState(identifier, stateDefinition, params, options);
	    };
	    ;
	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#transitionTo
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Low-level method for transitioning to a new state. {@link ui.router.state.$state#methods_go $state.go}
	     * uses `transitionTo` internally. `$state.go` is recommended in most situations.
	     *
	     * @example
	     * &lt;pre&gt;
	     * let app = angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.changeState = function () {
	     *     $state.transitionTo('contact.detail');
	     *   };
	     * });
	     * &lt;/pre&gt;
	     *
	     * @param {string|object} to State name or state object.
	     * @param {object=} toParams A map of the parameters that will be sent to the state,
	     * will populate $stateParams.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
	     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
	     * - **`inherit`** - {boolean=false}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=}, When transitioning with relative path (e.g '^'),
	     *    defines which state to be relative from.
	     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
	     * - **`reload`** (v0.2.5) - {boolean=false}, If `true` will force transition even if the state or params
	     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
	     *    use this when you want to force a reload when *everything* is the same, including search params.
	     *
	     * @returns {promise} A promise representing the state of the new transition. See
	     * {@link ui.router.state.$state#methods_go $state.go}.
	     */
	    StateService.prototype.transitionTo = function (to, toParams, options) {
	        var _this = this;
	        if (toParams === void 0) { toParams = {}; }
	        if (options === void 0) { options = {}; }
	        var router = this.router;
	        var globals = router.globals;
	        var transHistory = globals.transitionHistory;
	        options = common_1.defaults(options, transitionService_1.defaultTransOpts);
	        options = common_1.extend(options, { current: transHistory.peekTail.bind(transHistory) });
	        var ref = this.target(to, toParams, options);
	        var latestSuccess = globals.successfulTransitions.peekTail();
	        var rootPath = function () { return [new node_1.PathNode(_this.router.stateRegistry.root())]; };
	        var currentPath = latestSuccess ? latestSuccess.treeChanges().to : rootPath();
	        if (!ref.exists())
	            return this._handleInvalidTargetState(currentPath, ref);
	        if (!ref.valid())
	            return common_1.silentRejection(ref.error());
	        /**
	         * Special handling for Ignored, Aborted, and Redirected transitions
	         *
	         * The semantics for the transition.run() promise and the StateService.transitionTo()
	         * promise differ. For instance, the run() promise may be rejected because it was
	         * IGNORED, but the transitionTo() promise is resolved because from the user perspective
	         * no error occurred.  Likewise, the transition.run() promise may be rejected because of
	         * a Redirect, but the transitionTo() promise is chained to the new Transition's promise.
	         */
	        var rejectedTransitionHandler = function (transition) { return function (error) {
	            if (error instanceof rejectFactory_1.Rejection) {
	                if (error.type === rejectFactory_1.RejectType.IGNORED) {
	                    // Consider ignored `Transition.run()` as a successful `transitionTo`
	                    router.urlRouter.update();
	                    return coreservices_1.services.$q.when(globals.current);
	                }
	                var detail = error.detail;
	                if (error.type === rejectFactory_1.RejectType.SUPERSEDED &amp;&amp; error.redirected &amp;&amp; detail instanceof targetState_1.TargetState) {
	                    // If `Transition.run()` was redirected, allow the `transitionTo()` promise to resolve successfully
	                    // by returning the promise for the new (redirect) `Transition.run()`.
	                    var redirect = transition.redirect(detail);
	                    return redirect.run().catch(rejectedTransitionHandler(redirect));
	                }
	                if (error.type === rejectFactory_1.RejectType.ABORTED) {
	                    router.urlRouter.update();
	                }
	            }
	            var errorHandler = _this.defaultErrorHandler();
	            errorHandler(error);
	            return coreservices_1.services.$q.reject(error);
	        }; };
	        var transition = this.router.transitionService.create(currentPath, ref);
	        var transitionToPromise = transition.run().catch(rejectedTransitionHandler(transition));
	        common_1.silenceUncaughtInPromise(transitionToPromise); // issue #2676
	        // Return a promise for the transition, which also has the transition object on it.
	        return common_1.extend(transitionToPromise, { transition: transition });
	    };
	    ;
	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#is
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Similar to {@link ui.router.state.$state#methods_includes $state.includes},
	     * but only checks for the full state name. If params is supplied then it will be
	     * tested for strict equality against the current active params object, so all params
	     * must match with none missing and no extras.
	     *
	     * @example
	     * &lt;pre&gt;
	     * $state.$current.name = 'contacts.details.item';
	     *
	     * // absolute name
	     * $state.is('contact.details.item'); // returns true
	     * $state.is(contactDetailItemStateObject); // returns true
	     *
	     * // relative name (. and ^), typically from a template
	     * // E.g. from the 'contacts.details' template
	     * &lt;div ng-class="{highlighted: $state.is('.item')}"&gt;Item&lt;/div&gt;
	     * &lt;/pre&gt;
	     *
	     * @param {string|object} stateOrName The state name (absolute or relative) or state object you'd like to check.
	     * @param {object=} params A param object, e.g. `{sectionId: section.id}`, that you'd like
	     * to test against the current active state.
	     * @param {object=} options An options object.  The options are:
	     *
	     * - **`relative`** - {string|object} -  If `stateOrName` is a relative state name and `options.relative` is set, .is will
	     * test relative to `options.relative` state (or name).
	     *
	     * @returns {boolean} Returns true if it is the state.
	     */
	    StateService.prototype.is = function (stateOrName, params, options) {
	        options = common_1.defaults(options, { relative: this.$current });
	        var state = this.router.stateRegistry.matcher.find(stateOrName, options.relative);
	        if (!predicates_1.isDefined(state))
	            return undefined;
	        if (this.$current !== state)
	            return false;
	        return predicates_1.isDefined(params) &amp;&amp; params !== null ? param_1.Param.equals(state.parameters(), this.params, params) : true;
	    };
	    ;
	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#includes
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A method to determine if the current active state is equal to or is the child of the
	     * state stateName. If any params are passed then they will be tested for a match as well.
	     * Not all the parameters need to be passed, just the ones you'd like to test for equality.
	     *
	     * @example
	     * Partial and relative names
	     * &lt;pre&gt;
	     * $state.$current.name = 'contacts.details.item';
	     *
	     * // Using partial names
	     * $state.includes("contacts"); // returns true
	     * $state.includes("contacts.details"); // returns true
	     * $state.includes("contacts.details.item"); // returns true
	     * $state.includes("contacts.list"); // returns false
	     * $state.includes("about"); // returns false
	     *
	     * // Using relative names (. and ^), typically from a template
	     * // E.g. from the 'contacts.details' template
	     * &lt;div ng-class="{highlighted: $state.includes('.item')}"&gt;Item&lt;/div&gt;
	     * &lt;/pre&gt;
	     *
	     * Basic globbing patterns
	     * &lt;pre&gt;
	     * $state.$current.name = 'contacts.details.item.url';
	     *
	     * $state.includes("*.details.*.*"); // returns true
	     * $state.includes("*.details.**"); // returns true
	     * $state.includes("**.item.**"); // returns true
	     * $state.includes("*.details.item.url"); // returns true
	     * $state.includes("*.details.*.url"); // returns true
	     * $state.includes("*.details.*"); // returns false
	     * $state.includes("item.**"); // returns false
	     * &lt;/pre&gt;
	     *
	     * @param {string|object} stateOrName A partial name, relative name, glob pattern,
	     * or state object to be searched for within the current state name.
	     * @param {object=} params A param object, e.g. `{sectionId: section.id}`,
	     * that you'd like to test against the current active state.
	     * @param {object=} options An options object.  The options are:
	     *
	     * - **`relative`** - {string|object=} -  If `stateOrName` is a relative state reference and `options.relative` is set,
	     * .includes will test relative to `options.relative` state (or name).
	     *
	     * @returns {boolean} Returns true if it does include the state
	     */
	    StateService.prototype.includes = function (stateOrName, params, options) {
	        options = common_1.defaults(options, { relative: this.$current });
	        var glob = predicates_1.isString(stateOrName) &amp;&amp; glob_1.Glob.fromString(stateOrName);
	        if (glob) {
	            if (!glob.matches(this.$current.name))
	                return false;
	            stateOrName = this.$current.name;
	        }
	        var state = this.router.stateRegistry.matcher.find(stateOrName, options.relative), include = this.$current.includes;
	        if (!predicates_1.isDefined(state))
	            return undefined;
	        if (!predicates_1.isDefined(include[state.name]))
	            return false;
	        // @TODO Replace with Param.equals() ?
	        return params ? common_2.equalForKeys(param_1.Param.values(state.parameters(), params), this.params, Object.keys(params)) : true;
	    };
	    ;
	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#href
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A url generation method that returns the compiled url for the given state populated with the given params.
	     *
	     * @example
	     * &lt;pre&gt;
	     * expect($state.href("about.person", { person: "bob" })).toEqual("/about/bob");
	     * &lt;/pre&gt;
	     *
	     * @param {string|object} stateOrName The state name or state object you'd like to generate a url from.
	     * @param {object=} params An object of parameter values to fill the state's required parameters.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`lossy`** - {boolean=true} -  If true, and if there is no url associated with the state provided in the
	     *    first parameter, then the constructed href url will be built from the first navigable ancestor (aka
	     *    ancestor with a valid url).
	     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'),
	     *    defines which state to be relative from.
	     * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
	     *
	     * @returns {string} compiled state url
	     */
	    StateService.prototype.href = function (stateOrName, params, options) {
	        var defaultHrefOpts = {
	            lossy: true,
	            inherit: true,
	            absolute: false,
	            relative: this.$current
	        };
	        options = common_1.defaults(options, defaultHrefOpts);
	        params = params || {};
	        var state = this.router.stateRegistry.matcher.find(stateOrName, options.relative);
	        if (!predicates_1.isDefined(state))
	            return null;
	        if (options.inherit)
	            params = this.params.$inherit(params, this.$current, state);
	        var nav = (state &amp;&amp; options.lossy) ? state.navigable : state;
	        if (!nav || nav.url === undefined || nav.url === null) {
	            return null;
	        }
	        return this.router.urlRouter.href(nav.url, param_1.Param.values(state.parameters(), params), {
	            absolute: options.absolute
	        });
	    };
	    ;
	    /**
	     * Sets or gets the default [[transitionTo]] error handler.
	     *
	     * The error handler is called when a [[Transition]] is rejected or when any error occurred during the Transition.
	     * This includes errors caused by resolves and transition hooks.
	     *
	     * Note:
	     * This handler does not receive certain Transition rejections.
	     * Redirected and Ignored Transitions are not considered to be errors by [[StateService.transitionTo]].
	     *
	     * The built-in default error handler logs the error to the console.
	     *
	     * You can provide your own custom handler.
	     *
	     * @example
	     * ```js
	     *
	     * stateService.defaultErrorHandler(function() {
	     *   // Do not log transitionTo errors
	     * });
	     * ```
	     *
	     * @param handler a global error handler function
	     * @returns the current global error handler
	     */
	    StateService.prototype.defaultErrorHandler = function (handler) {
	        return this._defaultErrorHandler = handler || this._defaultErrorHandler;
	    };
	    StateService.prototype.get = function (stateOrName, base) {
	        var reg = this.router.stateRegistry;
	        if (arguments.length === 0)
	            return reg.get();
	        return reg.get(stateOrName, base || this.$current);
	    };
	    return StateService;
	}());
	exports.StateService = StateService;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module core */ /** */
	var stateParams_1 = __webpack_require__(45);
	var queue_1 = __webpack_require__(8);
	var common_1 = __webpack_require__(3);
	/**
	 * Global mutable state
	 */
	var Globals = (function () {
	    function Globals(transitionService) {
	        var _this = this;
	        this.params = new stateParams_1.StateParams();
	        this.transitionHistory = new queue_1.Queue([], 1);
	        this.successfulTransitions = new queue_1.Queue([], 1);
	        var beforeNewTransition = function ($transition$) {
	            _this.transition = $transition$;
	            _this.transitionHistory.enqueue($transition$);
	            var updateGlobalState = function () {
	                _this.successfulTransitions.enqueue($transition$);
	                _this.$current = $transition$.$to();
	                _this.current = _this.$current.self;
	                common_1.copy($transition$.params(), _this.params);
	            };
	            $transition$.onSuccess({}, updateGlobalState, { priority: 10000 });
	            var clearCurrentTransition = function () { if (_this.transition === $transition$)
	                _this.transition = null; };
	            $transition$.promise.then(clearCurrentTransition, clearCurrentTransition);
	        };
	        transitionService.onBefore({}, beforeNewTransition);
	    }
	    return Globals;
	}());
	exports.Globals = Globals;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module params */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var StateParams = (function () {
	    function StateParams(params) {
	        if (params === void 0) { params = {}; }
	        common_1.extend(this, params);
	    }
	    /**
	     * Merges a set of parameters with all parameters inherited between the common parents of the
	     * current state and a given destination state.
	     *
	     * @param {Object} newParams The set of parameters which will be composited with inherited params.
	     * @param {Object} $current Internal definition of object representing the current state.
	     * @param {Object} $to Internal definition of object representing state to transition to.
	     */
	    StateParams.prototype.$inherit = function (newParams, $current, $to) {
	        var parents = common_1.ancestors($current, $to), parentParams, inherited = {}, inheritList = [];
	        for (var i in parents) {
	            if (!parents[i] || !parents[i].params)
	                continue;
	            parentParams = Object.keys(parents[i].params);
	            if (!parentParams.length)
	                continue;
	            for (var j in parentParams) {
	                if (inheritList.indexOf(parentParams[j]) &gt;= 0)
	                    continue;
	                inheritList.push(parentParams[j]);
	                inherited[parentParams[j]] = this[parentParams[j]];
	            }
	        }
	        return common_1.extend({}, inherited, newParams);
	    };
	    ;
	    return StateParams;
	}());
	exports.StateParams = StateParams;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	 * This module contains code for State Parameters.
	 *
	 * See [[ParamDeclaration]]
	 * @module params
	 * @preferred doc
	 */
	/** for typedoc */
	__export(__webpack_require__(22));
	__export(__webpack_require__(28));
	__export(__webpack_require__(45));
	__export(__webpack_require__(24));


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/** @module path */ /** for typedoc */
	__export(__webpack_require__(21));
	__export(__webpack_require__(20));


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/** @module resolve */ /** for typedoc */
	__export(__webpack_require__(18));
	__export(__webpack_require__(19));
	__export(__webpack_require__(17));


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/** @module state */ /** for typedoc */
	__export(__webpack_require__(40));
	__export(__webpack_require__(42));
	__export(__webpack_require__(39));
	__export(__webpack_require__(41));
	__export(__webpack_require__(38));
	__export(__webpack_require__(43));
	__export(__webpack_require__(14));


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	 * This module contains APIs related to a Transition.
	 *
	 * See [[Transition]], [[$transitions]]
	 *
	 * @module transition
	 * @preferred
	 */
	/** for typedoc */
	__export(__webpack_require__(16));
	__export(__webpack_require__(15));
	__export(__webpack_require__(10));
	__export(__webpack_require__(11));
	__export(__webpack_require__(13));
	__export(__webpack_require__(30));


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/** @module url */ /** for typedoc */
	__export(__webpack_require__(27));
	__export(__webpack_require__(23));
	__export(__webpack_require__(26));
	__export(__webpack_require__(29));


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/** @module view */ /** for typedoc */
	__export(__webpack_require__(37));


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * # UI-Router for Angular 1
	 *
	 * - Provides an implementation for the [[CoreServices]] API, based on angular 1 services.
	 * - Also registers some services with the angular 1 injector.
	 * - Creates and bootstraps a new [[UIRouter]] object.  Ties it to the the angular 1 lifecycle.
	 *
	 * @module ng1
	 * @preferred
	 */
	"use strict";
	/** for typedoc */
	var router_1 = __webpack_require__(25);
	var coreservices_1 = __webpack_require__(6);
	var common_1 = __webpack_require__(3);
	var hof_1 = __webpack_require__(5);
	var predicates_1 = __webpack_require__(4);
	var resolveService_1 = __webpack_require__(54);
	var trace_1 = __webpack_require__(12);
	var views_1 = __webpack_require__(55);
	var templateFactory_1 = __webpack_require__(56);
	var stateProvider_1 = __webpack_require__(58);
	var onEnterExitRetain_1 = __webpack_require__(59);
	var angular = __webpack_require__(57);
	/** @hidden */
	var app = angular.module("ui.router.angular1", []);
	/**
	 * @ngdoc overview
	 * @name ui.router.util
	 *
	 * @description
	 * # ui.router.util sub-module
	 *
	 * This module is a dependency of other sub-modules. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 *
	 */
	angular.module('ui.router.util', ['ng', 'ui.router.init']);
	/**
	 * @ngdoc overview
	 * @name ui.router.router
	 *
	 * @requires ui.router.util
	 *
	 * @description
	 * # ui.router.router sub-module
	 *
	 * This module is a dependency of other sub-modules. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 */
	angular.module('ui.router.router', ['ui.router.util']);
	/**
	 * @ngdoc overview
	 * @name ui.router.state
	 *
	 * @requires ui.router.router
	 * @requires ui.router.util
	 *
	 * @description
	 * # ui.router.state sub-module
	 *
	 * This module is a dependency of the main ui.router module. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 *
	 */
	angular.module('ui.router.state', ['ui.router.router', 'ui.router.util', 'ui.router.angular1']);
	/**
	 * @ngdoc overview
	 * @name ui.router
	 *
	 * @requires ui.router.state
	 *
	 * @description
	 * # ui.router
	 *
	 * ## The main module for ui.router
	 * There are several sub-modules included with the ui.router module, however only this module is needed
	 * as a dependency within your angular app. The other modules are for organization purposes.
	 *
	 * The modules are:
	 * * ui.router - the main "umbrella" module
	 * * ui.router.router -
	 *
	 * *You'll need to include **only** this module as the dependency within your angular app.*
	 *
	 * &lt;pre&gt;
	 * &lt;!doctype html&gt;
	 * &lt;html ng-app="myApp"&gt;
	 * &lt;head&gt;
	 *   &lt;script src="js/angular.js"&gt;&lt;/script&gt;
	 *   &lt;!-- Include the ui-router script --&gt;
	 *   &lt;script src="js/angular-ui-router.min.js"&gt;&lt;/script&gt;
	 *   &lt;script&gt;
	 *     // ...and add 'ui.router' as a dependency
	 *     var myApp = angular.module('myApp', ['ui.router']);
	 *   &lt;/script&gt;
	 * &lt;/head&gt;
	 * &lt;body&gt;
	 * &lt;/body&gt;
	 * &lt;/html&gt;
	 * &lt;/pre&gt;
	 */
	angular.module('ui.router', ['ui.router.init', 'ui.router.state', 'ui.router.angular1']);
	angular.module('ui.router.compat', ['ui.router']);
	/**
	 * Annotates a controller expression (may be a controller function(), a "controllername",
	 * or "controllername as name")
	 *
	 * - Temporarily decorates $injector.instantiate.
	 * - Invokes $controller() service
	 *   - Calls $injector.instantiate with controller constructor
	 * - Annotate constructor
	 * - Undecorate $injector
	 *
	 * returns an array of strings, which are the arguments of the controller expression
	 */
	function annotateController(controllerExpression) {
	    var $injector = coreservices_1.services.$injector;
	    var $controller = $injector.get("$controller");
	    var oldInstantiate = $injector.instantiate;
	    try {
	        var deps_1;
	        $injector.instantiate = function fakeInstantiate(constructorFunction) {
	            $injector.instantiate = oldInstantiate; // Un-decorate ASAP
	            deps_1 = $injector.annotate(constructorFunction);
	        };
	        $controller(controllerExpression, { $scope: {} });
	        return deps_1;
	    }
	    finally {
	        $injector.instantiate = oldInstantiate;
	    }
	}
	exports.annotateController = annotateController;
	var router = null;
	$uiRouter.$inject = ['$locationProvider'];
	/** This angular 1 provider instantiates a Router and exposes its services via the angular injector */
	function $uiRouter($locationProvider) {
	    // Create a new instance of the Router when the $uiRouterProvider is initialized
	    router = new router_1.UIRouter();
	    router.stateProvider = new stateProvider_1.StateProvider(router.stateRegistry, router.stateService);
	    // Apply ng1 specific StateBuilder code for `views`, `resolve`, and `onExit/Retain/Enter` properties
	    router.stateRegistry.decorator("views", views_1.ng1ViewsBuilder);
	    router.stateRegistry.decorator("onExit", onEnterExitRetain_1.getStateHookBuilder("onExit"));
	    router.stateRegistry.decorator("onRetain", onEnterExitRetain_1.getStateHookBuilder("onRetain"));
	    router.stateRegistry.decorator("onEnter", onEnterExitRetain_1.getStateHookBuilder("onEnter"));
	    router.viewService.viewConfigFactory('ng1', views_1.ng1ViewConfigFactory);
	    // Bind LocationConfig.hashPrefix to $locationProvider.hashPrefix
	    common_1.bindFunctions($locationProvider, coreservices_1.services.locationConfig, $locationProvider, ['hashPrefix']);
	    // Create a LocationService.onChange registry
	    var urlListeners = [];
	    coreservices_1.services.location.onChange = function (callback) {
	        urlListeners.push(callback);
	        return function () { return common_1.removeFrom(urlListeners)(callback); };
	    };
	    this.$get = $get;
	    $get.$inject = ['$location', '$browser', '$sniffer', '$rootScope', '$http', '$templateCache'];
	    function $get($location, $browser, $sniffer, $rootScope, $http, $templateCache) {
	        // Bind $locationChangeSuccess to the listeners registered in LocationService.onChange
	        $rootScope.$on("$locationChangeSuccess", function (evt) { return urlListeners.forEach(function (fn) { return fn(evt); }); });
	        // Bind LocationConfig.html5Mode to $locationProvider.html5Mode and $sniffer.history
	        coreservices_1.services.locationConfig.html5Mode = function () {
	            var html5Mode = $locationProvider.html5Mode();
	            html5Mode = predicates_1.isObject(html5Mode) ? html5Mode.enabled : html5Mode;
	            return html5Mode &amp;&amp; $sniffer.history;
	        };
	        coreservices_1.services.location.setUrl = function (newUrl, replace) {
	            if (replace === void 0) { replace = false; }
	            $location.url(newUrl);
	            if (replace)
	                $location.replace();
	        };
	        coreservices_1.services.template.get = function (url) {
	            return $http.get(url, { cache: $templateCache, headers: { Accept: 'text/html' } }).then(hof_1.prop("data"));
	        };
	        // Bind these LocationService functions to $location
	        common_1.bindFunctions($location, coreservices_1.services.location, $location, ["replace", "url", "path", "search", "hash"]);
	        // Bind these LocationConfig functions to $location
	        common_1.bindFunctions($location, coreservices_1.services.locationConfig, $location, ['port', 'protocol', 'host']);
	        // Bind these LocationConfig functions to $browser
	        common_1.bindFunctions($browser, coreservices_1.services.locationConfig, $browser, ['baseHref']);
	        return router;
	    }
	}
	// The 'ui.router' ng1 module depends on 'ui.router.init' module.
	angular.module('ui.router.init', []).provider("$uiRouter", $uiRouter);
	runBlock.$inject = ['$injector', '$q'];
	function runBlock($injector, $q) {
	    coreservices_1.services.$injector = $injector;
	    coreservices_1.services.$q = $q;
	}
	angular.module('ui.router.init').run(runBlock);
	// This effectively calls $get() to init when we enter runtime
	angular.module('ui.router.init').run(['$uiRouter', function ($uiRouter) { }]);
	// $urlMatcherFactory service and $urlMatcherFactoryProvider
	angular.module('ui.router.util').provider('$urlMatcherFactory', ['$uiRouterProvider', function () { return router.urlMatcherFactory; }]);
	angular.module('ui.router.util').run(['$urlMatcherFactory', function ($urlMatcherFactory) { }]);
	// $urlRouter service and $urlRouterProvider
	function getUrlRouterProvider() {
	    router.urlRouterProvider["$get"] = function () {
	        router.urlRouter.update(true);
	        if (!this.interceptDeferred)
	            router.urlRouter.listen();
	        return router.urlRouter;
	    };
	    return router.urlRouterProvider;
	}
	angular.module('ui.router.router').provider('$urlRouter', ['$uiRouterProvider', getUrlRouterProvider]);
	angular.module('ui.router.router').run(['$urlRouter', function ($urlRouter) { }]);
	// $state service and $stateProvider
	// $urlRouter service and $urlRouterProvider
	function getStateProvider() {
	    router.stateProvider["$get"] = function () {
	        // Autoflush once we are in runtime
	        router.stateRegistry.stateQueue.autoFlush(router.stateService);
	        return router.stateService;
	    };
	    return router.stateProvider;
	}
	angular.module('ui.router.state').provider('$state', ['$uiRouterProvider', getStateProvider]);
	angular.module('ui.router.state').run(['$state', function ($state) { }]);
	// $stateParams service
	angular.module('ui.router.state').factory('$stateParams', ['$uiRouter', function ($uiRouter) {
	        return $uiRouter.globals.params;
	    }]);
	// $transitions service and $transitionsProvider
	function getTransitionsProvider() {
	    router.transitionService["$get"] = function () { return router.transitionService; };
	    return router.transitionService;
	}
	angular.module('ui.router.state').provider('$transitions', ['$uiRouterProvider', getTransitionsProvider]);
	// $templateFactory service
	angular.module('ui.router.util').factory('$templateFactory', ['$uiRouter', function () { return new templateFactory_1.TemplateFactory(); }]);
	// The $view service
	angular.module('ui.router').factory('$view', function () { return router.viewService; });
	// The old $resolve service
	angular.module('ui.router').factory('$resolve', resolveService_1.resolveFactory);
	// $trace service
	angular.module("ui.router").service("$trace", function () { return trace_1.trace; });
	watchDigests.$inject = ['$rootScope'];
	function watchDigests($rootScope) {
	    $rootScope.$watch(function () { trace_1.trace.approximateDigests++; });
	}
	exports.watchDigests = watchDigests;
	angular.module("ui.router").run(watchDigests);
	exports.getLocals = function (ctx) {
	    var tokens = ctx.getTokens().filter(predicates_1.isString);
	    var tuples = tokens.map(function (key) { return [key, ctx.getResolvable(key).data]; });
	    return tuples.reduce(common_1.applyPairs, {});
	};
	/** Injectable services */
	/**
	 * An injectable service object which has the current state parameters
	 *
	 * This angular service (singleton object) holds the current state parameters.
	 * The values in `$stateParams` are not updated until *after* a [[Transition]] successfully completes.
	 *
	 * This object can be injected into other services.
	 *
	 * @example
	 * ```js
	 *
	 * SomeService.$inject = ['$http', '$stateParams'];
	 * function SomeService($http, $stateParams) {
	 *   return {
	 *     getUser: function() {
	 *       return $http.get('/api/users/' + $stateParams.username);
	 *     }
	 *   }
	 * };
	 * angular.service('SomeService', SomeService);
	 * ```
	 *
	 * ### Deprecation warning:
	 *
	 * When `$stateParams` is injected into transition hooks, resolves and view controllers, they receive a different
	 * object than this global service object.  In those cases, the injected object has the parameter values for the
	 * *pending* Transition.
	 *
	 * Because of these confusing details, this service is deprecated.
	 *
	 * @deprecated Instead of using `$stateParams, inject the current [[Transition]] as `$transition$` and use [[Transition.params]]
	 * ```js
	 * MyController.$inject = ['$transition$'];
	 * function MyController($transition$) {
	 *   var username = $transition$.params().username;
	 *   // .. do something with username
	 * }
	 * ```
	 */
	var $stateParams;
	/**
	 * An injectable service primarily used to register transition hooks
	 *
	 * This angular service exposes the [[TransitionService]] singleton, which is primarily used to add transition hooks.
	 *
	 * The same object is also exposed as [[$transitionsProvider]] for injection during angular config time.
	 */
	var $transitions;
	/**
	 * A config-time injectable provider primarily used to register transition hooks
	 *
	 * This angular provider exposes the [[TransitionService]] singleton, which is primarily used to add transition hooks.
	 *
	 * The same object is also exposed as [[$transitions]] for injection at runtime.
	 */
	var $transitionsProvider;
	/**
	 * An injectable service used to query for current state information.
	 *
	 * This angular service exposes the [[StateService]] singleton.
	 */
	var $state;
	/**
	 * A config-time injectable provider used to register states.
	 *
	 * This angular service exposes the [[StateProvider]] singleton.
	 */
	var $stateProvider;
	/**
	 * A config-time injectable provider used to manage the URL.
	 *
	 * This angular service exposes the [[UrlRouterProvider]] singleton.
	 */
	var $urlRouterProvider;
	/**
	 * An injectable service used to configure URL redirects.
	 *
	 * This angular service exposes the [[UrlRouter]] singleton.
	 */
	var $urlRouter;
	/**
	 * An injectable service used to configure the URL.
	 *
	 * This service is used to set url mapping options, and create [[UrlMatcher]] objects.
	 *
	 * This angular service exposes the [[UrlMatcherFactory]] singleton.
	 * The singleton is also exposed at config-time as the [[$urlMatcherFactoryProvider]].
	 */
	var $urlMatcherFactory;
	/**
	 * An injectable service used to configure the URL.
	 *
	 * This service is used to set url mapping options, and create [[UrlMatcher]] objects.
	 *
	 * This angular service exposes the [[UrlMatcherFactory]] singleton at config-time.
	 * The singleton is also exposed at runtime as the [[$urlMatcherFactory]].
	 */
	var $urlMatcherFactoryProvider;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module ng1 */ /** */
	var stateObject_1 = __webpack_require__(42);
	var node_1 = __webpack_require__(21);
	var resolveContext_1 = __webpack_require__(17);
	var common_1 = __webpack_require__(3);
	var stateBuilder_1 = __webpack_require__(40);
	/**
	 * Implementation of the legacy `$resolve` service for angular 1.
	 */
	var $resolve = {
	    /**
	     * Asynchronously injects a resolve block.
	     *
	     * This emulates most of the behavior of the ui-router 0.2.x $resolve.resolve() service API.
	     *
	     * Given an object `invocables`, where keys are strings and values are injectable functions,
	     * injects each function, and waits for the resulting promise to resolve.
	     * When all resulting promises are resolved, returns the results as an object.
	     *
	     * @example
	     * ```js
	     *
	     * let invocables = {
	     *   foo: [ '$http', ($http) =&gt;
	     *            $http.get('/api/foo').then(resp =&gt; resp.data) ],
	     *   bar: [ 'foo', '$http', (foo, $http) =&gt;
	     *            $http.get('/api/bar/' + foo.barId).then(resp =&gt; resp.data) ]
	     * }
	     * $resolve.resolve(invocables)
	     *     .then(results =&gt; console.log(results.foo, results.bar))
	     * // Logs foo and bar:
	     * // { id: 123, barId: 456, fooData: 'foo data' }
	     * // { id: 456, barData: 'bar data' }
	     * ```
	     *
	     * @param invocables an object which looks like an [[StateDefinition.resolve]] object; keys are resolve names and values are injectable functions
	     * @param locals key/value pre-resolved data (locals)
	     * @param parent a promise for a "parent resolve"
	     */
	    resolve: function (invocables, locals, parent) {
	        if (locals === void 0) { locals = {}; }
	        var parentNode = new node_1.PathNode(new stateObject_1.State({ params: {}, resolvables: [] }));
	        var node = new node_1.PathNode(new stateObject_1.State({ params: {}, resolvables: [] }));
	        var context = new resolveContext_1.ResolveContext([parentNode, node]);
	        context.addResolvables(stateBuilder_1.resolvablesBuilder({ resolve: invocables }), node.state);
	        var resolveData = function (parentLocals) {
	            var rewrap = function (_locals) { return stateBuilder_1.resolvablesBuilder({ resolve: common_1.mapObj(_locals, function (local) { return function () { return local; }; }) }); };
	            context.addResolvables(rewrap(parentLocals), parentNode.state);
	            context.addResolvables(rewrap(locals), node.state);
	            var tuples2ObjR = function (acc, tuple) {
	                acc[tuple.token] = tuple.value;
	                return acc;
	            };
	            return context.resolvePath().then(function (results) { return results.reduce(tuples2ObjR, {}); });
	        };
	        return parent ? parent.then(resolveData) : resolveData({});
	    }
	};
	/** @hidden */
	exports.resolveFactory = function () { return $resolve; };


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(3);
	var strings_1 = __webpack_require__(9);
	var view_1 = __webpack_require__(37);
	var predicates_1 = __webpack_require__(4);
	var coreservices_1 = __webpack_require__(6);
	var trace_1 = __webpack_require__(12);
	var templateFactory_1 = __webpack_require__(56);
	var resolveContext_1 = __webpack_require__(17);
	var resolvable_1 = __webpack_require__(19);
	var angular = __webpack_require__(57);
	exports.ng1ViewConfigFactory = function (path, view) {
	    return [new Ng1ViewConfig(path, view)];
	};
	/**
	 * This is a [[StateBuilder.builder]] function for angular1 `views`.
	 *
	 * When the [[StateBuilder]] builds a [[State]] object from a raw [[StateDeclaration]], this builder
	 * handles the `views` property with logic specific to angular-ui-router (ng1).
	 *
	 * If no `views: {}` property exists on the [[StateDeclaration]], then it creates the `views` object
	 * and applies the state-level configuration to a view named `$default`.
	 */
	function ng1ViewsBuilder(state) {
	    var tplKeys = ['templateProvider', 'templateUrl', 'template', 'notify', 'async'], ctrlKeys = ['controller', 'controllerProvider', 'controllerAs', 'resolveAs'], compKeys = ['component', 'bindings'], nonCompKeys = tplKeys.concat(ctrlKeys), allKeys = compKeys.concat(nonCompKeys);
	    var views = {}, viewsObject = state.views || { "$default": common_1.pick(state, allKeys) };
	    common_1.forEach(viewsObject, function (config, name) {
	        // Account for views: { "": { template... } }
	        name = name || "$default";
	        // Account for views: { header: "headerComponent" }
	        if (predicates_1.isString(config))
	            config = { component: config };
	        if (!Object.keys(config).length)
	            return;
	        // Configure this view for routing to an angular 1.5+ style .component (or any directive, really)
	        if (config.component) {
	            if (nonCompKeys.map(function (key) { return predicates_1.isDefined(config[key]); }).reduce(common_1.anyTrueR, false)) {
	                throw new Error("Cannot combine: " + compKeys.join("|") + " with: " + nonCompKeys.join("|") + " in stateview: 'name@" + state.name + "'");
	            }
	            // Dynamically build a template like "&lt;component-name input1='::$resolve.foo'&gt;&lt;/component-name&gt;"
	            config.templateProvider = ['$injector', function ($injector) {
	                    var resolveFor = function (key) {
	                        return config.bindings &amp;&amp; config.bindings[key] || key;
	                    };
	                    var prefix = angular.version.minor &gt;= 3 ? "::" : "";
	                    var attributeTpl = function (input) {
	                        var attrName = strings_1.kebobString(input.name);
	                        var resolveName = resolveFor(input.name);
	                        if (input.type === '@')
	                            return attrName + "='{{" + prefix + "$resolve." + resolveName + "}}'";
	                        return attrName + "='" + prefix + "$resolve." + resolveName + "'";
	                    };
	                    var attrs = getComponentInputs($injector, config.component).map(attributeTpl).join(" ");
	                    var kebobName = strings_1.kebobString(config.component);
	                    return "&lt;" + kebobName + " " + attrs + "&gt;&lt;/" + kebobName + "&gt;";
	                }];
	        }
	        config.resolveAs = config.resolveAs || '$resolve';
	        config.$type = "ng1";
	        config.$context = state;
	        config.$name = name;
	        var normalized = view_1.ViewService.normalizeUIViewTarget(config.$context, config.$name);
	        config.$uiViewName = normalized.uiViewName;
	        config.$uiViewContextAnchor = normalized.uiViewContextAnchor;
	        views[name] = config;
	    });
	    return views;
	}
	exports.ng1ViewsBuilder = ng1ViewsBuilder;
	// for ng 1.2 style, process the scope: { input: "=foo" }
	// for ng 1.3 through ng 1.5, process the component's bindToController: { input: "=foo" } object
	var scopeBindings = function (bindingsObj) { return Object.keys(bindingsObj || {})
	    .map(function (key) { return [key, /^([=&lt;@])[?]?(.*)/.exec(bindingsObj[key])]; })
	    .filter(function (tuple) { return predicates_1.isDefined(tuple) &amp;&amp; predicates_1.isDefined(tuple[1]); })
	    .map(function (tuple) { return ({ name: tuple[1][2] || tuple[0], type: tuple[1][1] }); }); };
	// Given a directive definition, find its object input attributes
	// Use different properties, depending on the type of directive (component, bindToController, normal)
	var getBindings = function (def) {
	    if (predicates_1.isObject(def.bindToController))
	        return scopeBindings(def.bindToController);
	    return scopeBindings(def.scope);
	};
	// Gets all the directive(s)' inputs ('@', '=', and '&lt;')
	function getComponentInputs($injector, name) {
	    var cmpDefs = $injector.get(name + "Directive"); // could be multiple
	    if (!cmpDefs || !cmpDefs.length)
	        throw new Error("Unable to find component named '" + name + "'");
	    return cmpDefs.map(getBindings).reduce(common_1.unnestR, []);
	}
	var id = 0;
	var Ng1ViewConfig = (function () {
	    function Ng1ViewConfig(path, viewDecl) {
	        this.path = path;
	        this.viewDecl = viewDecl;
	        this.$id = id++;
	        this.loaded = false;
	    }
	    Ng1ViewConfig.prototype.load = function () {
	        var _this = this;
	        var $q = coreservices_1.services.$q;
	        if (!this.hasTemplate())
	            throw new Error("No template configuration specified for '" + this.viewDecl.$uiViewName + "@" + this.viewDecl.$uiViewContextAnchor + "'");
	        var context = new resolveContext_1.ResolveContext(this.path);
	        var params = this.path.reduce(function (acc, node) { return common_1.extend(acc, node.paramValues); }, {});
	        var promises = {
	            template: $q.when(this.getTemplate(params, new templateFactory_1.TemplateFactory(), context)),
	            controller: $q.when(this.getController(context))
	        };
	        return $q.all(promises).then(function (results) {
	            trace_1.trace.traceViewServiceEvent("Loaded", _this);
	            _this.controller = results.controller;
	            _this.template = results.template;
	            return _this;
	        });
	    };
	    /**
	     * Checks a view configuration to ensure that it specifies a template.
	     *
	     * @return {boolean} Returns `true` if the configuration contains a valid template, otherwise `false`.
	     */
	    Ng1ViewConfig.prototype.hasTemplate = function () {
	        return !!(this.viewDecl.template || this.viewDecl.templateUrl || this.viewDecl.templateProvider);
	    };
	    Ng1ViewConfig.prototype.getTemplate = function (params, $factory, context) {
	        return $factory.fromConfig(this.viewDecl, params, context);
	    };
	    /**
	     * Gets the controller for a view configuration.
	     *
	     * @returns {Function|Promise.&lt;Function&gt;} Returns a controller, or a promise that resolves to a controller.
	     */
	    Ng1ViewConfig.prototype.getController = function (context) {
	        var provider = this.viewDecl.controllerProvider;
	        if (!predicates_1.isInjectable(provider))
	            return this.viewDecl.controller;
	        var deps = coreservices_1.services.$injector.annotate(provider);
	        var providerFn = predicates_1.isArray(provider) ? common_1.tail(provider) : provider;
	        var resolvable = new resolvable_1.Resolvable("", providerFn, deps);
	        return resolvable.get(context);
	    };
	    return Ng1ViewConfig;
	}());
	exports.Ng1ViewConfig = Ng1ViewConfig;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module view */ /** for typedoc */
	var predicates_1 = __webpack_require__(4);
	var coreservices_1 = __webpack_require__(6);
	var common_1 = __webpack_require__(3);
	var resolvable_1 = __webpack_require__(19);
	/**
	 * Service which manages loading of templates from a ViewConfig.
	 */
	var TemplateFactory = (function () {
	    function TemplateFactory() {
	    }
	    /**
	     * Creates a template from a configuration object.
	     *
	     * @param config Configuration object for which to load a template.
	     * The following properties are search in the specified order, and the first one
	     * that is defined is used to create the template:
	     *
	     * @param params  Parameters to pass to the template function.
	     * @param context The resolve context associated with the template's view
	     *
	     * @return {string|object}  The template html as a string, or a promise for
	     * that string,or `null` if no template is configured.
	     */
	    TemplateFactory.prototype.fromConfig = function (config, params, context) {
	        return (predicates_1.isDefined(config.template) ? this.fromString(config.template, params) :
	            predicates_1.isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) :
	                predicates_1.isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, context) :
	                    null);
	    };
	    ;
	    /**
	     * Creates a template from a string or a function returning a string.
	     *
	     * @param template html template as a string or function that returns an html template as a string.
	     * @param params Parameters to pass to the template function.
	     *
	     * @return {string|object} The template html as a string, or a promise for that
	     * string.
	     */
	    TemplateFactory.prototype.fromString = function (template, params) {
	        return predicates_1.isFunction(template) ? template(params) : template;
	    };
	    ;
	    /**
	     * Loads a template from the a URL via `$http` and `$templateCache`.
	     *
	     * @param {string|Function} url url of the template to load, or a function
	     * that returns a url.
	     * @param {Object} params Parameters to pass to the url function.
	     * @return {string|Promise.&lt;string&gt;} The template html as a string, or a promise
	     * for that string.
	     */
	    TemplateFactory.prototype.fromUrl = function (url, params) {
	        if (predicates_1.isFunction(url))
	            url = url(params);
	        if (url == null)
	            return null;
	        return coreservices_1.services.template.get(url);
	    };
	    ;
	    /**
	     * Creates a template by invoking an injectable provider function.
	     *
	     * @param provider Function to invoke via `locals`
	     * @param {Function} injectFn a function used to invoke the template provider
	     * @return {string|Promise.&lt;string&gt;} The template html as a string, or a promise
	     * for that string.
	     */
	    TemplateFactory.prototype.fromProvider = function (provider, params, context) {
	        var deps = coreservices_1.services.$injector.annotate(provider);
	        var providerFn = predicates_1.isArray(provider) ? common_1.tail(provider) : provider;
	        var resolvable = new resolvable_1.Resolvable("", providerFn, deps);
	        return resolvable.get(context);
	    };
	    ;
	    return TemplateFactory;
	}());
	exports.TemplateFactory = TemplateFactory;


/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_57__;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module ng1 */ /** for typedoc */
	var predicates_1 = __webpack_require__(4);
	var common_1 = __webpack_require__(3);
	/**
	 * @ngdoc object
	 * @name ui.router.state.$stateProvider
	 *
	 * @requires ui.router.router.$urlRouterProvider
	 * @requires ui.router.util.$urlMatcherFactoryProvider
	 *
	 * @description
	 * The new `$stateProvider` works similar to Angular's v1 router, but it focuses purely
	 * on state.
	 *
	 * A state corresponds to a "place" in the application in terms of the overall UI and
	 * navigation. A state describes (via the controller / template / view properties) what
	 * the UI looks like and does at that place.
	 *
	 * States often have things in common, and the primary way of factoring out these
	 * commonalities in this model is via the state hierarchy, i.e. parent/child states aka
	 * nested states.
	 *
	 * The `$stateProvider` provides interfaces to declare these states for your app.
	 */
	var StateProvider = (function () {
	    function StateProvider(stateRegistry, stateService) {
	        this.stateRegistry = stateRegistry;
	        this.stateService = stateService;
	        common_1.bindFunctions(StateProvider.prototype, this, this);
	    }
	    /**
	     * @ngdoc function
	     * @name ui.router.state.$stateProvider#decorator
	     * @methodOf ui.router.state.$stateProvider
	     *
	     * @description
	     * Allows you to extend (carefully) or override (at your own peril) the
	     * `stateBuilder` object used internally by `$stateProvider`. This can be used
	     * to add custom functionality to ui-router, for example inferring templateUrl
	     * based on the state name.
	     *
	     * When passing only a name, it returns the current (original or decorated) builder
	     * function that matches `name`.
	     *
	     * The builder functions that can be decorated are listed below. Though not all
	     * necessarily have a good use case for decoration, that is up to you to decide.
	     *
	     * In addition, users can attach custom decorators, which will generate new
	     * properties within the state's internal definition. There is currently no clear
	     * use-case for this beyond accessing internal states (i.e. $state.$current),
	     * however, expect this to become increasingly relevant as we introduce additional
	     * meta-programming features.
	     *
	     * **Warning**: Decorators should not be interdependent because the order of
	     * execution of the builder functions in non-deterministic. Builder functions
	     * should only be dependent on the state definition object and super function.
	     *
	     *
	     * Existing builder functions and current return values:
	     *
	     * - **parent** `{object}` - returns the parent state object.
	     * - **data** `{object}` - returns state data, including any inherited data that is not
	     *   overridden by own values (if any).
	     * - **url** `{object}` - returns a {@link ui.router.util.type:UrlMatcher UrlMatcher}
	     *   or `null`.
	     * - **navigable** `{object}` - returns closest ancestor state that has a URL (aka is
	     *   navigable).
	     * - **params** `{object}` - returns an array of state params that are ensured to
	     *   be a super-set of parent's params.
	     * - **views** `{object}` - returns a views object where each key is an absolute view
	     *   name (i.e. "viewName@stateName") and each value is the config object
	     *   (template, controller) for the view. Even when you don't use the views object
	     *   explicitly on a state config, one is still created for you internally.
	     *   So by decorating this builder function you have access to decorating template
	     *   and controller properties.
	     * - **ownParams** `{object}` - returns an array of params that belong to the state,
	     *   not including any params defined by ancestor states.
	     * - **path** `{string}` - returns the full path from the root down to this state.
	     *   Needed for state activation.
	     * - **includes** `{object}` - returns an object that includes every state that
	     *   would pass a `$state.includes()` test.
	     *
	     * @example
	     * &lt;pre&gt;
	     * // Override the internal 'views' builder with a function that takes the state
	     * // definition, and a reference to the internal function being overridden:
	     * $stateProvider.decorator('views', function (state, parent) {
	     *   let result = {},
	     *       views = parent(state);
	     *
	     *   angular.forEach(views, function (config, name) {
	     *     let autoName = (state.name + '.' + name).replace('.', '/');
	     *     config.templateUrl = config.templateUrl || '/partials/' + autoName + '.html';
	     *     result[name] = config;
	     *   });
	     *   return result;
	     * });
	     *
	     * $stateProvider.state('home', {
	     *   views: {
	     *     'contact.list': { controller: 'ListController' },
	     *     'contact.item': { controller: 'ItemController' }
	     *   }
	     * });
	     *
	     * // ...
	     *
	     * $state.go('home');
	     * // Auto-populates list and item views with /partials/home/contact/list.html,
	     * // and /partials/home/contact/item.html, respectively.
	     * &lt;/pre&gt;
	     *
	     * @param {string} name The name of the builder function to decorate.
	     * @param {object} func A function that is responsible for decorating the original
	     * builder function. The function receives two parameters:
	     *
	     *   - `{object}` - state - The state config object.
	     *   - `{object}` - super - The original builder function.
	     *
	     * @return {object} $stateProvider - $stateProvider instance
	     */
	    StateProvider.prototype.decorator = function (name, func) {
	        return this.stateRegistry.decorator(name, func) || this;
	    };
	    StateProvider.prototype.state = function (name, definition) {
	        if (predicates_1.isObject(name)) {
	            definition = name;
	        }
	        else {
	            definition.name = name;
	        }
	        this.stateRegistry.register(definition);
	        return this;
	    };
	    /**
	     * Registers an invalid state handler
	     *
	     * This is a passthrough to [[StateService.onInvalid]] for ng1.
	     */
	    StateProvider.prototype.onInvalid = function (callback) {
	        return this.stateService.onInvalid(callback);
	    };
	    return StateProvider;
	}());
	exports.StateProvider = StateProvider;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var coreservices_1 = __webpack_require__(6);
	var services_1 = __webpack_require__(53);
	var resolveContext_1 = __webpack_require__(17);
	var common_1 = __webpack_require__(3);
	/**
	 * This is a [[StateBuilder.builder]] function for angular1 `onEnter`, `onExit`,
	 * `onRetain` callback hooks on a [[Ng1StateDeclaration]].
	 *
	 * When the [[StateBuilder]] builds a [[State]] object from a raw [[StateDeclaration]], this builder
	 * ensures that those hooks are injectable for angular-ui-router (ng1).
	 */
	exports.getStateHookBuilder = function (hookName) {
	    return function stateHookBuilder(state, parentFn) {
	        var hook = state[hookName];
	        function decoratedNg1Hook(trans, state) {
	            var resolveContext = new resolveContext_1.ResolveContext(trans.treeChanges().to);
	            return coreservices_1.services.$injector.invoke(hook, this, common_1.extend({ $state$: state }, services_1.getLocals(resolveContext)));
	        }
	        return hook ? decoratedNg1Hook : undefined;
	    };
	};


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * These are the UI-Router angular 1 directives.
	 *
	 * These directives are used in templates to create viewports and navigate to states
	 *
	 * @preferred @module ng1_directives
	 */ /** for typedoc */
	var angular = __webpack_require__(57);
	var common_1 = __webpack_require__(3);
	var predicates_1 = __webpack_require__(4);
	var hof_1 = __webpack_require__(5);
	/** @hidden */
	function parseStateRef(ref, current) {
	    var preparsed = ref.match(/^\s*({[^}]*})\s*$/), parsed;
	    if (preparsed)
	        ref = current + '(' + preparsed[1] + ')';
	    parsed = ref.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
	    if (!parsed || parsed.length !== 4)
	        throw new Error("Invalid state ref '" + ref + "'");
	    return { state: parsed[1], paramExpr: parsed[3] || null };
	}
	/** @hidden */
	function stateContext(el) {
	    var $uiView = el.parent().inheritedData('$uiView');
	    var path = hof_1.parse('$cfg.path')($uiView);
	    return path ? common_1.tail(path).state.name : undefined;
	}
	/** @hidden */
	function getTypeInfo(el) {
	    // SVGAElement does not use the href attribute, but rather the 'xlinkHref' attribute.
	    var isSvg = Object.prototype.toString.call(el.prop('href')) === '[object SVGAnimatedString]';
	    var isForm = el[0].nodeName === "FORM";
	    return {
	        attr: isForm ? "action" : (isSvg ? 'xlink:href' : 'href'),
	        isAnchor: el.prop("tagName").toUpperCase() === "A",
	        clickable: !isForm
	    };
	}
	/** @hidden */
	function clickHook(el, $state, $timeout, type, current) {
	    return function (e) {
	        var button = e.which || e.button, target = current();
	        if (!(button &gt; 1 || e.ctrlKey || e.metaKey || e.shiftKey || el.attr('target'))) {
	            // HACK: This is to allow ng-clicks to be processed before the transition is initiated:
	            var transition = $timeout(function () {
	                $state.go(target.state, target.params, target.options);
	            });
	            e.preventDefault();
	            // if the state has no URL, ignore one preventDefault from the &lt;a&gt; directive.
	            var ignorePreventDefaultCount = type.isAnchor &amp;&amp; !target.href ? 1 : 0;
	            e.preventDefault = function () {
	                if (ignorePreventDefaultCount-- &lt;= 0)
	                    $timeout.cancel(transition);
	            };
	        }
	    };
	}
	/** @hidden */
	function defaultOpts(el, $state) {
	    return {
	        relative: stateContext(el) || $state.$current,
	        inherit: true,
	        source: "sref"
	    };
	}
	/**
	 * `ui-sref`: A directive for linking to a state
	 *
	 * A directive that binds a link (`&lt;a&gt;` tag) to a state.
	 * If the state has an associated URL, the directive will automatically generate and
	 * update the `href` attribute via the [[StateService.href]]  method.
	 * Clicking the link will trigger a state transition with optional parameters.
	 *
	 * Also middle-clicking, right-clicking, and ctrl-clicking on the link will be
	 * handled natively by the browser.
	 *
	 * You can also use relative state paths within ui-sref, just like the relative
	 * paths passed to `$state.go()`.
	 * You just need to be aware that the path is relative to the state that the link lives in.
	 * In other words, the state that created the view containing the link.
	 *
	 * You can specify options to pass to [[StateService.go]] using the `ui-sref-opts` attribute.
	 * Options are restricted to `location`, `inherit`, and `reload`.
	 *
	 * Here's an example of how you'd use ui-sref and how it would compile.
	 * If you have the following template:
	 *
	 * @example
	 * ```html
	 *
	 * &lt;pre&gt;
	 * &lt;a ui-sref="home"&gt;Home&lt;/a&gt; | &lt;a ui-sref="about"&gt;About&lt;/a&gt; | &lt;a ui-sref="{page: 2}"&gt;Next page&lt;/a&gt;
	 *
	 * &lt;ul&gt;
	 *     &lt;li ng-repeat="contact in contacts"&gt;
	 *         &lt;a ui-sref="contacts.detail({ id: contact.id })"&gt;{{ contact.name }}&lt;/a&gt;
	 *     &lt;/li&gt;
	 * &lt;/ul&gt;
	 * &lt;/pre&gt;
	 * ```
	 *
	 * Then the compiled html would be (assuming Html5Mode is off and current state is contacts):
	 *
	 * ```html
	 *
	 * &lt;pre&gt;
	 * &lt;a href="#/home" ui-sref="home"&gt;Home&lt;/a&gt; | &lt;a href="#/about" ui-sref="about"&gt;About&lt;/a&gt; | &lt;a href="#/contacts?page=2" ui-sref="{page: 2}"&gt;Next page&lt;/a&gt;
	 *
	 * &lt;ul&gt;
	 *     &lt;li ng-repeat="contact in contacts"&gt;
	 *         &lt;a href="#/contacts/1" ui-sref="contacts.detail({ id: contact.id })"&gt;Joe&lt;/a&gt;
	 *     &lt;/li&gt;
	 *     &lt;li ng-repeat="contact in contacts"&gt;
	 *         &lt;a href="#/contacts/2" ui-sref="contacts.detail({ id: contact.id })"&gt;Alice&lt;/a&gt;
	 *     &lt;/li&gt;
	 *     &lt;li ng-repeat="contact in contacts"&gt;
	 *         &lt;a href="#/contacts/3" ui-sref="contacts.detail({ id: contact.id })"&gt;Bob&lt;/a&gt;
	 *     &lt;/li&gt;
	 * &lt;/ul&gt;
	 *
	 * &lt;a ui-sref="home" ui-sref-opts="{reload: true}"&gt;Home&lt;/a&gt;
	 * &lt;/pre&gt;
	 * ```
	 *
	 * @param {string} ui-sref 'stateName' can be any valid absolute or relative state
	 * @param {Object} ui-sref-opts options to pass to [[StateService.go]]
	 */
	var uiSref = ['$state', '$timeout',
	    function $StateRefDirective($state, $timeout) {
	        return {
	            restrict: 'A',
	            require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
	            link: function (scope, element, attrs, uiSrefActive) {
	                var ref = parseStateRef(attrs.uiSref, $state.current.name);
	                var def = { state: ref.state, href: null, params: null, options: null };
	                var type = getTypeInfo(element);
	                var active = uiSrefActive[1] || uiSrefActive[0];
	                var unlinkInfoFn = null;
	                var hookFn;
	                def.options = common_1.extend(defaultOpts(element, $state), attrs.uiSrefOpts ? scope.$eval(attrs.uiSrefOpts) : {});
	                var update = function (val) {
	                    if (val)
	                        def.params = angular.copy(val);
	                    def.href = $state.href(ref.state, def.params, def.options);
	                    if (unlinkInfoFn)
	                        unlinkInfoFn();
	                    if (active)
	                        unlinkInfoFn = active.$$addStateInfo(ref.state, def.params);
	                    if (def.href !== null)
	                        attrs.$set(type.attr, def.href);
	                };
	                if (ref.paramExpr) {
	                    scope.$watch(ref.paramExpr, function (val) { if (val !== def.params)
	                        update(val); }, true);
	                    def.params = angular.copy(scope.$eval(ref.paramExpr));
	                }
	                update();
	                if (!type.clickable)
	                    return;
	                hookFn = clickHook(element, $state, $timeout, type, function () { return def; });
	                element.on("click", hookFn);
	                scope.$on('$destroy', function () {
	                    element.off("click", hookFn);
	                });
	            }
	        };
	    }];
	/**
	 * `ui-state`: A dynamic version of `ui-sref`
	 *
	 * Much like ui-sref, but will accept named $scope properties to evaluate for a state definition,
	 * params and override options.
	 *
	 * @example
	 * ```html
	 *
	 * &lt;li ng-repeat="nav in navlinks"&gt;
	 *   &lt;a ui-state="nav.statename"&gt;{{nav.description}}&lt;/a&gt;
	 * &lt;/li&gt;
	 *
	 * @param {string} ui-state 'stateName' can be any valid absolute or relative state
	 * @param {Object} ui-state-params params to pass to [[StateService.href]]
	 * @param {Object} ui-state-opts options to pass to [[StateService.go]]
	 */
	var uiState = ['$state', '$timeout',
	    function $StateRefDynamicDirective($state, $timeout) {
	        return {
	            restrict: 'A',
	            require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
	            link: function (scope, element, attrs, uiSrefActive) {
	                var type = getTypeInfo(element);
	                var active = uiSrefActive[1] || uiSrefActive[0];
	                var group = [attrs.uiState, attrs.uiStateParams || null, attrs.uiStateOpts || null];
	                var watch = '[' + group.map(function (val) { return val || 'null'; }).join(', ') + ']';
	                var def = { state: null, params: null, options: null, href: null };
	                var unlinkInfoFn = null;
	                var hookFn;
	                function runStateRefLink(group) {
	                    def.state = group[0];
	                    def.params = group[1];
	                    def.options = group[2];
	                    def.href = $state.href(def.state, def.params, def.options);
	                    if (unlinkInfoFn)
	                        unlinkInfoFn();
	                    if (active)
	                        unlinkInfoFn = active.$$addStateInfo(def.state, def.params);
	                    if (def.href)
	                        attrs.$set(type.attr, def.href);
	                }
	                scope.$watch(watch, runStateRefLink, true);
	                runStateRefLink(scope.$eval(watch));
	                if (!type.clickable)
	                    return;
	                hookFn = clickHook(element, $state, $timeout, type, function () { return def; });
	                element.on("click", hookFn);
	                scope.$on('$destroy', function () {
	                    element.off("click", hookFn);
	                });
	            }
	        };
	    }];
	/**
	 * `ui-sref-active` and `ui-sref-active-eq`: A directive that adds a CSS class when a `ui-sref` is active
	 *
	 * A directive working alongside ui-sref to add classes to an element when the
	 * related ui-sref directive's state is active, and removing them when it is inactive.
	 * The primary use-case is to simplify the special appearance of navigation menus
	 * relying on `ui-sref`, by having the "active" state's menu button appear different,
	 * distinguishing it from the inactive menu items.
	 *
	 * ui-sref-active can live on the same element as ui-sref or on a parent element. The first
	 * ui-sref-active found at the same level or above the ui-sref will be used.
	 *
	 * Will activate when the ui-sref's target state or any child state is active. If you
	 * need to activate only when the ui-sref target state is active and *not* any of
	 * it's children, then you will use ui-sref-active-eq
	 *
	 * Given the following template:
	 * @example
	 * ```html
	 *
	 * &lt;pre&gt;
	 * &lt;ul&gt;
	 *   &lt;li ui-sref-active="active" class="item"&gt;
	 *     &lt;a href ui-sref="app.user({user: 'bilbobaggins'})"&gt;@bilbobaggins&lt;/a&gt;
	 *   &lt;/li&gt;
	 * &lt;/ul&gt;
	 * &lt;/pre&gt;
	 * ```
	 *
	 *
	 * When the app state is "app.user" (or any children states), and contains the state parameter "user" with value "bilbobaggins",
	 * the resulting HTML will appear as (note the 'active' class):
	 *
	 * ```html
	 *
	 * &lt;pre&gt;
	 * &lt;ul&gt;
	 *   &lt;li ui-sref-active="active" class="item active"&gt;
	 *     &lt;a ui-sref="app.user({user: 'bilbobaggins'})" href="/users/bilbobaggins"&gt;@bilbobaggins&lt;/a&gt;
	 *   &lt;/li&gt;
	 * &lt;/ul&gt;
	 * &lt;/pre&gt;
	 * ```
	 *
	 * The class name is interpolated **once** during the directives link time (any further changes to the
	 * interpolated value are ignored).
	 *
	 * Multiple classes may be specified in a space-separated format:
	 *
	 * ```html
	 * &lt;pre&gt;
	 * &lt;ul&gt;
	 *   &lt;li ui-sref-active='class1 class2 class3'&gt;
	 *     &lt;a ui-sref="app.user"&gt;link&lt;/a&gt;
	 *   &lt;/li&gt;
	 * &lt;/ul&gt;
	 * &lt;/pre&gt;
	 * ```
	 *
	 * It is also possible to pass ui-sref-active an expression that evaluates
	 * to an object hash, whose keys represent active class names and whose
	 * values represent the respective state names/globs.
	 * ui-sref-active will match if the current active state **includes** any of
	 * the specified state names/globs, even the abstract ones.
	 *
	 * Given the following template, with "admin" being an abstract state:
	 * @example
	 * ```html
	 *
	 * &lt;pre&gt;
	 * &lt;div ui-sref-active="{'active': 'admin.*'}"&gt;
	 *   &lt;a ui-sref-active="active" ui-sref="admin.roles"&gt;Roles&lt;/a&gt;
	 * &lt;/div&gt;
	 * &lt;/pre&gt;
	 * ```
	 *
	 * When the current state is "admin.roles" the "active" class will be applied
	 * to both the &lt;div&gt; and &lt;a&gt; elements. It is important to note that the state
	 * names/globs passed to ui-sref-active shadow the state provided by ui-sref.
	 */
	var uiSrefActive = ['$state', '$stateParams', '$interpolate', '$transitions', '$uiRouter',
	    function $StateRefActiveDirective($state, $stateParams, $interpolate, $transitions, $uiRouter) {
	        return {
	            restrict: "A",
	            controller: ['$scope', '$element', '$attrs', '$timeout',
	                function ($scope, $element, $attrs, $timeout) {
	                    var states = [], activeClasses = {}, activeEqClass, uiSrefActive;
	                    // There probably isn't much point in $observing this
	                    // uiSrefActive and uiSrefActiveEq share the same directive object with some
	                    // slight difference in logic routing
	                    activeEqClass = $interpolate($attrs.uiSrefActiveEq || '', false)($scope);
	                    try {
	                        uiSrefActive = $scope.$eval($attrs.uiSrefActive);
	                    }
	                    catch (e) {
	                    }
	                    uiSrefActive = uiSrefActive || $interpolate($attrs.uiSrefActive || '', false)($scope);
	                    if (predicates_1.isObject(uiSrefActive)) {
	                        common_1.forEach(uiSrefActive, function (stateOrName, activeClass) {
	                            if (predicates_1.isString(stateOrName)) {
	                                var ref = parseStateRef(stateOrName, $state.current.name);
	                                addState(ref.state, $scope.$eval(ref.paramExpr), activeClass);
	                            }
	                        });
	                    }
	                    // Allow uiSref to communicate with uiSrefActive[Equals]
	                    this.$$addStateInfo = function (newState, newParams) {
	                        // we already got an explicit state provided by ui-sref-active, so we
	                        // shadow the one that comes from ui-sref
	                        if (predicates_1.isObject(uiSrefActive) &amp;&amp; states.length &gt; 0) {
	                            return;
	                        }
	                        var deregister = addState(newState, newParams, uiSrefActive);
	                        update();
	                        return deregister;
	                    };
	                    function updateAfterTransition(trans) { trans.promise.then(update); }
	                    $scope.$on('$stateChangeSuccess', update);
	                    $scope.$on('$destroy', $transitions.onStart({}, updateAfterTransition));
	                    if ($uiRouter.globals.transition) {
	                        updateAfterTransition($uiRouter.globals.transition);
	                    }
	                    function addState(stateName, stateParams, activeClass) {
	                        var state = $state.get(stateName, stateContext($element));
	                        var stateHash = createStateHash(stateName, stateParams);
	                        var stateInfo = {
	                            state: state || { name: stateName },
	                            params: stateParams,
	                            hash: stateHash
	                        };
	                        states.push(stateInfo);
	                        activeClasses[stateHash] = activeClass;
	                        return function removeState() {
	                            var idx = states.indexOf(stateInfo);
	                            if (idx !== -1)
	                                states.splice(idx, 1);
	                        };
	                    }
	                    /**
	                     * @param {string} state
	                     * @param {Object|string} [params]
	                     * @return {string}
	                     */
	                    function createStateHash(state, params) {
	                        if (!predicates_1.isString(state)) {
	                            throw new Error('state should be a string');
	                        }
	                        if (predicates_1.isObject(params)) {
	                            return state + common_1.toJson(params);
	                        }
	                        params = $scope.$eval(params);
	                        if (predicates_1.isObject(params)) {
	                            return state + common_1.toJson(params);
	                        }
	                        return state;
	                    }
	                    // Update route state
	                    function update() {
	                        for (var i = 0; i &lt; states.length; i++) {
	                            if (anyMatch(states[i].state, states[i].params)) {
	                                addClass($element, activeClasses[states[i].hash]);
	                            }
	                            else {
	                                removeClass($element, activeClasses[states[i].hash]);
	                            }
	                            if (exactMatch(states[i].state, states[i].params)) {
	                                addClass($element, activeEqClass);
	                            }
	                            else {
	                                removeClass($element, activeEqClass);
	                            }
	                        }
	                    }
	                    function addClass(el, className) { $timeout(function () { el.addClass(className); }); }
	                    function removeClass(el, className) { el.removeClass(className); }
	                    function anyMatch(state, params) { return $state.includes(state.name, params); }
	                    function exactMatch(state, params) { return $state.is(state.name, params); }
	                    update();
	                }]
	        };
	    }];
	angular.module('ui.router.state')
	    .directive('uiSref', uiSref)
	    .directive('uiSrefActive', uiSrefActive)
	    .directive('uiSrefActiveEq', uiSrefActive)
	    .directive('uiState', uiState);


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/** @module state */ /** for typedoc */
	"use strict";
	var angular = __webpack_require__(57);
	/**
	 * @ngdoc filter
	 * @name ui.router.state.filter:isState
	 *
	 * @requires ui.router.state.$state
	 *
	 * @description
	 * Translates to {@link ui.router.state.$state#methods_is $state.is("stateName")}.
	 */
	$IsStateFilter.$inject = ['$state'];
	function $IsStateFilter($state) {
	    var isFilter = function (state, params, options) {
	        return $state.is(state, params, options);
	    };
	    isFilter.$stateful = true;
	    return isFilter;
	}
	exports.$IsStateFilter = $IsStateFilter;
	/**
	 * @ngdoc filter
	 * @name ui.router.state.filter:includedByState
	 *
	 * @requires ui.router.state.$state
	 *
	 * @description
	 * Translates to {@link ui.router.state.$state#methods_includes $state.includes('fullOrPartialStateName')}.
	 */
	$IncludedByStateFilter.$inject = ['$state'];
	function $IncludedByStateFilter($state) {
	    var includesFilter = function (state, params, options) {
	        return $state.includes(state, params, options);
	    };
	    includesFilter.$stateful = true;
	    return includesFilter;
	}
	exports.$IncludedByStateFilter = $IncludedByStateFilter;
	angular.module('ui.router.state')
	    .filter('isState', $IsStateFilter)
	    .filter('includedByState', $IncludedByStateFilter);


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/** @module ng1_directives */ /** for typedoc */
	"use strict";
	var common_1 = __webpack_require__(3);
	var predicates_1 = __webpack_require__(4);
	var trace_1 = __webpack_require__(12);
	var views_1 = __webpack_require__(55);
	var hof_1 = __webpack_require__(5);
	var resolveContext_1 = __webpack_require__(17);
	var strings_1 = __webpack_require__(9);
	var services_1 = __webpack_require__(53);
	var angular = __webpack_require__(57);
	/**
	 * `ui-view`: A viewport directive which is filled in by a view from the active state.
	 *
	 * @param {string=} name A view name. The name should be unique amongst the other views in the
	 * same state. You can have views of the same name that live in different states.
	 *
	 * @param {string=} autoscroll It allows you to set the scroll behavior of the browser window
	 * when a view is populated. By default, $anchorScroll is overridden by ui-router's custom scroll
	 * service, {@link ui.router.state.$uiViewScroll}. This custom service let's you
	 * scroll ui-view elements into view when they are populated during a state activation.
	 *
	 * *Note: To revert back to old [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll)
	 * functionality, call `$uiViewScrollProvider.useAnchorScroll()`.*
	 *
	 * @param {string=} onload Expression to evaluate whenever the view updates.
	 *
	 * A view can be unnamed or named.
	 * @example
	 * ```html
	 *
	 * &lt;!-- Unnamed --&gt;
	 * &lt;div ui-view&gt;&lt;/div&gt;
	 *
	 * &lt;!-- Named --&gt;
	 * &lt;div ui-view="viewName"&gt;&lt;/div&gt;
	 * ```
	 *
	 * You can only have one unnamed view within any template (or root html). If you are only using a
	 * single view and it is unnamed then you can populate it like so:
	 * ```
	 *
	 * &lt;div ui-view&gt;&lt;/div&gt;
	 * $stateProvider.state("home", {
	 *   template: "&lt;h1&gt;HELLO!&lt;/h1&gt;"
	 * })
	 * ```
	 *
	 * The above is a convenient shortcut equivalent to specifying your view explicitly with the {@link ui.router.state.$stateProvider#views `views`}
	 * config property, by name, in this case an empty name:
	 * ```js
	 *
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "": {
	 *       template: "&lt;h1&gt;HELLO!&lt;/h1&gt;"
	 *     }
	 *   }
	 * })
	 * ```
	 *
	 * But typically you'll only use the views property if you name your view or have more than one view
	 * in the same template. There's not really a compelling reason to name a view if its the only one,
	 * but you could if you wanted, like so:
	 *
	 * ```html
	 *
	 * &lt;div ui-view="main"&gt;&lt;/div&gt;
	 * ```
	 *
	 * ```js
	 *
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "main": {
	 *       template: "&lt;h1&gt;HELLO!&lt;/h1&gt;"
	 *     }
	 *   }
	 * })
	 * ```
	 *
	 * Really though, you'll use views to set up multiple views:
	 * ```html
	 *
	 * &lt;div ui-view&gt;&lt;/div&gt;
	 * &lt;div ui-view="chart"&gt;&lt;/div&gt;
	 * &lt;div ui-view="data"&gt;&lt;/div&gt;
	 * ```
	 *
	 * ```js
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "": {
	 *       template: "&lt;h1&gt;HELLO!&lt;/h1&gt;"
	 *     },
	 *     "chart": {
	 *       template: "&lt;chart_thing/&gt;"
	 *     },
	 *     "data": {
	 *       template: "&lt;data_thing/&gt;"
	 *     }
	 *   }
	 * })
	 * ```
	 *
	 * Examples for `autoscroll`:
	 *
	 * ```html
	 *
	 * &lt;!-- If autoscroll present with no expression,
	 *      then scroll ui-view into view --&gt;
	 * &lt;ui-view autoscroll/&gt;
	 *
	 * &lt;!-- If autoscroll present with valid expression,
	 *      then scroll ui-view into view if expression evaluates to true --&gt;
	 * &lt;ui-view autoscroll='true'/&gt;
	 * &lt;ui-view autoscroll='false'/&gt;
	 * &lt;ui-view autoscroll='scopeVariable'/&gt;
	 * ```
	 *
	 * Resolve data:
	 *
	 * The resolved data from the state's `resolve` block is placed on the scope as `$resolve` (this
	 * can be customized using [[ViewDeclaration.resolveAs]]).  This can be then accessed from the template.
	 *
	 * Note that when `controllerAs` is being used, `$resolve` is set on the controller instance *after* the
	 * controller is instantiated.  The `$onInit()` hook can be used to perform initialization code which
	 * depends on `$resolve` data.
	 *
	 * @example
	 * ```js
	 *
	 * $stateProvider.state('home', {
	 *   template: '&lt;my-component user="$resolve.user"&gt;&lt;/my-component&gt;',
	 *   resolve: {
	 *     user: function(UserService) { return UserService.fetchUser(); }
	 *   }
	 * });
	 * ```
	 */
	var uiView = ['$view', '$animate', '$uiViewScroll', '$interpolate', '$q',
	    function $ViewDirective($view, $animate, $uiViewScroll, $interpolate, $q) {
	        function getRenderer(attrs, scope) {
	            return {
	                enter: function (element, target, cb) {
	                    if (angular.version.minor &gt; 2) {
	                        $animate.enter(element, null, target).then(cb);
	                    }
	                    else {
	                        $animate.enter(element, null, target, cb);
	                    }
	                },
	                leave: function (element, cb) {
	                    if (angular.version.minor &gt; 2) {
	                        $animate.leave(element).then(cb);
	                    }
	                    else {
	                        $animate.leave(element, cb);
	                    }
	                }
	            };
	        }
	        function configsEqual(config1, config2) {
	            return config1 === config2;
	        }
	        var rootData = {
	            $cfg: { viewDecl: { $context: $view.rootContext() } },
	            $uiView: {}
	        };
	        var directive = {
	            count: 0,
	            restrict: 'ECA',
	            terminal: true,
	            priority: 400,
	            transclude: 'element',
	            compile: function (tElement, tAttrs, $transclude) {
	                return function (scope, $element, attrs) {
	                    var previousEl, currentEl, currentScope, unregister, onloadExp = attrs['onload'] || '', autoScrollExp = attrs['autoscroll'], renderer = getRenderer(attrs, scope), viewConfig = undefined, inherited = $element.inheritedData('$uiView') || rootData, name = $interpolate(attrs['uiView'] || attrs['name'] || '')(scope) || '$default';
	                    var activeUIView = {
	                        $type: 'ng1',
	                        id: directive.count++,
	                        name: name,
	                        fqn: inherited.$uiView.fqn ? inherited.$uiView.fqn + "." + name : name,
	                        config: null,
	                        configUpdated: configUpdatedCallback,
	                        get creationContext() {
	                            return hof_1.parse('$cfg.viewDecl.$context')(inherited);
	                        }
	                    };
	                    trace_1.trace.traceUIViewEvent("Linking", activeUIView);
	                    function configUpdatedCallback(config) {
	                        if (config &amp;&amp; !(config instanceof views_1.Ng1ViewConfig))
	                            return;
	                        if (configsEqual(viewConfig, config))
	                            return;
	                        trace_1.trace.traceUIViewConfigUpdated(activeUIView, config &amp;&amp; config.viewDecl &amp;&amp; config.viewDecl.$context);
	                        viewConfig = config;
	                        updateView(config);
	                    }
	                    $element.data('$uiView', { $uiView: activeUIView });
	                    updateView();
	                    unregister = $view.registerUIView(activeUIView);
	                    scope.$on("$destroy", function () {
	                        trace_1.trace.traceUIViewEvent("Destroying/Unregistering", activeUIView);
	                        unregister();
	                    });
	                    function cleanupLastView() {
	                        if (previousEl) {
	                            trace_1.trace.traceUIViewEvent("Removing (previous) el", previousEl.data('$uiView'));
	                            previousEl.remove();
	                            previousEl = null;
	                        }
	                        if (currentScope) {
	                            trace_1.trace.traceUIViewEvent("Destroying scope", activeUIView);
	                            currentScope.$destroy();
	                            currentScope = null;
	                        }
	                        if (currentEl) {
	                            var _viewData_1 = currentEl.data('$uiViewAnim');
	                            trace_1.trace.traceUIViewEvent("Animate out", _viewData_1);
	                            renderer.leave(currentEl, function () {
	                                _viewData_1.$$animLeave.resolve();
	                                previousEl = null;
	                            });
	                            previousEl = currentEl;
	                            currentEl = null;
	                        }
	                    }
	                    function updateView(config) {
	                        var newScope = scope.$new();
	                        var animEnter = $q.defer(), animLeave = $q.defer();
	                        var $uiViewData = {
	                            $cfg: config,
	                            $uiView: activeUIView,
	                        };
	                        var $uiViewAnim = {
	                            $animEnter: animEnter.promise,
	                            $animLeave: animLeave.promise,
	                            $$animLeave: animLeave
	                        };
	                        var cloned = $transclude(newScope, function (clone) {
	                            clone.data('$uiViewAnim', $uiViewAnim);
	                            clone.data('$uiView', $uiViewData);
	                            renderer.enter(clone, $element, function onUIViewEnter() {
	                                animEnter.resolve();
	                                if (currentScope)
	                                    currentScope.$emit('$viewContentAnimationEnded');
	                                if (predicates_1.isDefined(autoScrollExp) &amp;&amp; !autoScrollExp || scope.$eval(autoScrollExp)) {
	                                    $uiViewScroll(clone);
	                                }
	                            });
	                            cleanupLastView();
	                        });
	                        currentEl = cloned;
	                        currentScope = newScope;
	                        /**
	                         * @ngdoc event
	                         * @name ui.router.state.directive:ui-view#$viewContentLoaded
	                         * @eventOf ui.router.state.directive:ui-view
	                         * @eventType emits on ui-view directive scope
	                         * @description           *
	                         * Fired once the view is **loaded**, *after* the DOM is rendered.
	                         *
	                         * @param {Object} event Event object.
	                         */
	                        currentScope.$emit('$viewContentLoaded', config || viewConfig);
	                        currentScope.$eval(onloadExp);
	                    }
	                };
	            }
	        };
	        return directive;
	    }];
	$ViewDirectiveFill.$inject = ['$compile', '$controller', '$transitions', '$view', '$timeout'];
	/** @hidden */
	function $ViewDirectiveFill($compile, $controller, $transitions, $view, $timeout) {
	    var getControllerAs = hof_1.parse('viewDecl.controllerAs');
	    var getResolveAs = hof_1.parse('viewDecl.resolveAs');
	    return {
	        restrict: 'ECA',
	        priority: -400,
	        compile: function (tElement) {
	            var initial = tElement.html();
	            return function (scope, $element) {
	                var data = $element.data('$uiView');
	                if (!data)
	                    return;
	                var cfg = data.$cfg || { viewDecl: {} };
	                $element.html(cfg.template || initial);
	                trace_1.trace.traceUIViewFill(data.$uiView, $element.html());
	                var link = $compile($element.contents());
	                var controller = cfg.controller;
	                var controllerAs = getControllerAs(cfg);
	                var resolveAs = getResolveAs(cfg);
	                var resolveCtx = cfg.path &amp;&amp; new resolveContext_1.ResolveContext(cfg.path);
	                var locals = resolveCtx &amp;&amp; services_1.getLocals(resolveCtx);
	                scope[resolveAs] = locals;
	                if (controller) {
	                    var controllerInstance = $controller(controller, common_1.extend({}, locals, { $scope: scope, $element: $element }));
	                    if (controllerAs) {
	                        scope[controllerAs] = controllerInstance;
	                        scope[controllerAs][resolveAs] = locals;
	                    }
	                    // TODO: Use $view service as a central point for registering component-level hooks
	                    // Then, when a component is created, tell the $view service, so it can invoke hooks
	                    // $view.componentLoaded(controllerInstance, { $scope: scope, $element: $element });
	                    // scope.$on('$destroy', () =&gt; $view.componentUnloaded(controllerInstance, { $scope: scope, $element: $element }));
	                    $element.data('$ngControllerController', controllerInstance);
	                    $element.children().data('$ngControllerController', controllerInstance);
	                    registerControllerCallbacks($transitions, controllerInstance, scope, cfg);
	                }
	                // Wait for the component to appear in the DOM
	                if (predicates_1.isString(cfg.viewDecl.component)) {
	                    var cmp_1 = cfg.viewDecl.component;
	                    var kebobName_1 = strings_1.kebobString(cmp_1);
	                    var getComponentController = function () {
	                        var directiveEl = [].slice.call($element[0].children)
	                            .filter(function (el) { return el &amp;&amp; el.tagName &amp;&amp; el.tagName.toLowerCase() === kebobName_1; });
	                        return directiveEl &amp;&amp; angular.element(directiveEl).data("$" + cmp_1 + "Controller");
	                    };
	                    var deregisterWatch_1 = scope.$watch(getComponentController, function (ctrlInstance) {
	                        if (!ctrlInstance)
	                            return;
	                        registerControllerCallbacks($transitions, ctrlInstance, scope, cfg);
	                        deregisterWatch_1();
	                    });
	                }
	                link(scope);
	            };
	        }
	    };
	}
	/** @hidden */
	var hasComponentImpl = typeof angular.module('ui.router')['component'] === 'function';
	/** @hidden TODO: move these callbacks to $view and/or `/hooks/components.ts` or something */
	function registerControllerCallbacks($transitions, controllerInstance, $scope, cfg) {
	    // Call $onInit() ASAP
	    if (predicates_1.isFunction(controllerInstance.$onInit) &amp;&amp; !(cfg.viewDecl.component &amp;&amp; hasComponentImpl))
	        controllerInstance.$onInit();
	    var viewState = common_1.tail(cfg.path).state.self;
	    var hookOptions = { bind: controllerInstance };
	    // Add component-level hook for onParamsChange
	    if (predicates_1.isFunction(controllerInstance.uiOnParamsChanged)) {
	        var resolveContext = new resolveContext_1.ResolveContext(cfg.path);
	        var viewCreationTrans_1 = resolveContext.getResolvable('$transition$').data;
	        // Fire callback on any successful transition
	        var paramsUpdated = function ($transition$) {
	            // Exit early if the $transition$ is the same as the view was created within.
	            // Exit early if the $transition$ will exit the state the view is for.
	            if ($transition$ === viewCreationTrans_1 || $transition$.exiting().indexOf(viewState) !== -1)
	                return;
	            var toParams = $transition$.params("to");
	            var fromParams = $transition$.params("from");
	            var toSchema = $transition$.treeChanges().to.map(function (node) { return node.paramSchema; }).reduce(common_1.unnestR, []);
	            var fromSchema = $transition$.treeChanges().from.map(function (node) { return node.paramSchema; }).reduce(common_1.unnestR, []);
	            // Find the to params that have different values than the from params
	            var changedToParams = toSchema.filter(function (param) {
	                var idx = fromSchema.indexOf(param);
	                return idx === -1 || !fromSchema[idx].type.equals(toParams[param.id], fromParams[param.id]);
	            });
	            // Only trigger callback if a to param has changed or is new
	            if (changedToParams.length) {
	                var changedKeys_1 = changedToParams.map(function (x) { return x.id; });
	                // Filter the params to only changed/new to params.  `$transition$.params()` may be used to get all params.
	                controllerInstance.uiOnParamsChanged(common_1.filter(toParams, function (val, key) { return changedKeys_1.indexOf(key) !== -1; }), $transition$);
	            }
	        };
	        $scope.$on('$destroy', $transitions.onSuccess({}, paramsUpdated, hookOptions));
	    }
	    // Add component-level hook for uiCanExit
	    if (predicates_1.isFunction(controllerInstance.uiCanExit)) {
	        var criteria = { exiting: viewState.name };
	        $scope.$on('$destroy', $transitions.onBefore(criteria, controllerInstance.uiCanExit, hookOptions));
	    }
	}
	angular.module('ui.router.state').directive('uiView', uiView);
	angular.module('ui.router.state').directive('uiView', $ViewDirectiveFill);


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module ng1 */ /** */
	var angular = __webpack_require__(57);
	/**
	 * @ngdoc object
	 * @name ui.router.state.$uiViewScrollProvider
	 *
	 * @description
	 * Provider that returns the {@link ui.router.state.$uiViewScroll} service function.
	 */
	function $ViewScrollProvider() {
	    var useAnchorScroll = false;
	    /**
	     * @ngdoc function
	     * @name ui.router.state.$uiViewScrollProvider#useAnchorScroll
	     * @methodOf ui.router.state.$uiViewScrollProvider
	     *
	     * @description
	     * Reverts back to using the core [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll) service for
	     * scrolling based on the url anchor.
	     */
	    this.useAnchorScroll = function () {
	        useAnchorScroll = true;
	    };
	    /**
	     * @ngdoc object
	     * @name ui.router.state.$uiViewScroll
	     *
	     * @requires $anchorScroll
	     * @requires $timeout
	     *
	     * @description
	     * When called with a jqLite element, it scrolls the element into view (after a
	     * `$timeout` so the DOM has time to refresh).
	     *
	     * If you prefer to rely on `$anchorScroll` to scroll the view to the anchor,
	     * this can be enabled by calling {@link ui.router.state.$uiViewScrollProvider#methods_useAnchorScroll `$uiViewScrollProvider.useAnchorScroll()`}.
	     */
	    this.$get = ['$anchorScroll', '$timeout', function ($anchorScroll, $timeout) {
	            if (useAnchorScroll) {
	                return $anchorScroll;
	            }
	            return function ($element) {
	                return $timeout(function () {
	                    $element[0].scrollIntoView();
	                }, 0, false);
	            };
	        }];
	}
	angular.module('ui.router.state').provider('$uiViewScroll', $ViewScrollProvider);


/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular-ui-router.js.map</pre><div class="_bd_ext_tip" style="visibility: hidden;"><span class="_bd_ext_search">百度一下</span><span class="_bd_ext_open">打开链接</span><span class="_bd_ext_copy">复制</span></div></body></html>