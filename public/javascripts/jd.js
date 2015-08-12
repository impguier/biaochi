!
    function(a, b) {
        function c(a) {
            var b = s.getStore("gearList");
            s.setStore("buyMesg", b[a])
        }
        function d(a) {
            var b = s.getStore("buyMesg").productList;
            s.setStore("buyData", b[a])
        }
        function e(b) {
            b = Number(b);
            var c = s.getStore("buyMesg"),
                e = (c.length, c.productList[0]),
                f = c.productList[1],
                g = c.gradeLowestAnnualYieldRate,
                h = null,
                i = null,
                j = null,
                k = null,
                l = f ? c.productList[1].lowestInvestAmount : 199e3,
                m = {
                    part1: .35,
                    part2: 1.6,
                    part3: 1.8,
                    part4: 2,
                    part5: 2.6,
                    part6: 3.25
                };
            e && 2 == e.productStatus && 4 != e.productStatus && b > c.productList[0].lowestInvestAmount && l > b ? (g = c.productList[0].annualYieldRate / 100, h = 0 == c.productList[0].gradeTerm ? 1 : c.productList[0].gradeTerm, i = c.productList[0].productName, j = c.productList[0].gradeName, k = c.productList[0].lowestInvestAmount, d(0)) : f && 2 == f.productStatus && 4 != f.productStatus && b > c.productList[1].lowestInvestAmount ? (g = c.productList[1].annualYieldRate / 100, h = 0 == c.productList[1].gradeTerm ? 1 : c.productList[1].gradeTerm, i = c.productList[1].productName, j = c.productList[1].gradeName, k = c.productList[1].lowestInvestAmount, d(1)) : (g = c.productList[0].annualYieldRate / 100, h = 0 == c.productList[0].gradeTerm ? 1 : c.productList[0].gradeTerm, i = c.productList[0].productName, j = c.productList[0].gradeName, d(0));
            var n = s.getStore("buyData").productStatus,
                o = "已抢光";
            2 == n ? 0 == s.getStore("buyData").canBuyAmout ? (a(".productDetail").show(), "101511" == s.getStore("buyData").releventId && (o = "已抢光,预计8月15日10点开售"), A.removeClass("bg-col-00d397").addClass("bg-col-ccc").html(o)) : (a(".productDetail").show(), A.removeClass("bg-col-ccc").addClass("bg-col-00d397").html("转入")) : 4 == n ? (a(".productDetail").show(), "101511" == s.getStore("buyData").releventId && (o = "已抢光,预计8月15日10点开售"), A.removeClass("bg-col-00d397").addClass("bg-col-ccc").html(o)) : 5 == n && (a(".productDetail").hide(), A.removeClass("bg-col-00d397").addClass("bg-col-ccc").html("敬请期待"));
            var p = s.getStore("buyData").gradeTerm;
            if (0 == p) {
                var q = s.getStore("hqInfo") || "";
                q && "false" == q.isCanPay && "true" == q.isHaveHq && A.removeClass("bg-col-00d397").addClass("bg-col-ccc").html("首次购买次日可续存")
            }
            var r = (b * (Math.pow(1 + g, h / 365) - 1)).toFixed(2).toString(),
                t = r.split(".")[0] + "." + r.split(".")[1].substring(0, 2),
                u = null;
            u = 89 > h ? m.part1 : h >= 89 && 180 > h ? m.part2 : h >= 180 && 365 > h ? m.part3 : h >= 365 && 730 > h ? m.part4 : h >= 730 && 1095 > h ? m.part5 : m.part6;
            var v = (u / 100 * h * b / 365).toFixed(2).toString(),
                w = v.split(".")[0] + "." + v.split(".")[1].substring(0, 2);
            y.html(t), z.html(w), B.html(i), E.html("活期" == j ? "每天" : j)
        }
        function f(a, b, d) {
            c(H - 1), X.option.stopDraw = !1, s.getStore("buyMesg").gradeLowestInvestAmount > X.option.totalMoney ? X.init(s.getStore("buyMesg")) : e(X.option.totalMoney), x.find("ul").find("span").removeClass("ho-h-on"), x.find("ul").find("li").eq(H).find("span").addClass("ho-h-on"), x.find("ul").animate({
                "margin-left": -(H - 1) * (u / 4)
            }, 300), a && b && d ? (x.find("li").eq(a).animate({
                width: u / 4 + "px"
            }, 300).find(".ho-h-tt").animate({
                "font-size": "1rem"
            }, 300), x.find("li").eq(a).animate({
                width: u / 4 + "px"
            }, 300).find(".ho-h-to").animate({
                "font-size": "0.75rem"
            }, 300), x.find("li").eq(b).animate({
                width: 2 * u / 4 + "px"
            }, 300).find(".ho-h-tt").animate({
                "font-size": "1.875rem"
            }, 300), x.find("li").eq(b).animate({
                width: 2 * u / 4 + "px"
            }, 300).find(".ho-h-to").animate({
                "font-size": "0.9375rem"
            }, 300), x.find("ul").find("li").eq(a).find(".rateLow").hide(), x.find("ul").find("li").eq(b).find(".rateLow").show()) : (x.find("li").eq(b).animate({
                width: u / 4 + "px"
            }, 300).find(".ho-h-tt").animate({
                "font-size": "1rem"
            }, 300), x.find("li").eq(b).animate({
                width: u / 4 + "px"
            }, 300).find(".ho-h-to").animate({
                "font-size": "0.75rem"
            }, 300), x.find("li").eq(a).animate({
                width: 2 * u / 4 + "px"
            }, 300).find(".ho-h-tt").animate({
                "font-size": "1.875rem"
            }, 300), x.find("li").eq(a).animate({
                width: 2 * u / 4 + "px"
            }, 300).find(".ho-h-to").animate({
                "font-size": "0.9375rem"
            }, 300));
            var f = w.val(),
                g = s.getStore("buyMesg").gradeLowestInvestAmount;
            0 == s.getStore("buyMesg").gradeTerm ? X.option.ruleCellVal = 100 : (X.option.ruleCellVal = 1e3, f % g != 0 && (f = Math.round(Number(f) / Number(g)) * Number(g), D.html("单价1000元/份"), C.show(), w.val(f))), X.reDraw(f)
        }
        function g(b) {
            var c = null,
                d = null,
                e = null,
                g = null,
                h = null,
                i = null,
                j = null;
            document.getElementById("gearCot").addEventListener("touchstart", function(a) {
                a.preventDefault(), c = a.touches[0].clientX;
                var b = new Date;
                i = b.getTime()
            }, !1), document.getElementById("gearCot").addEventListener("touchmove", function(a) {
                d = a.touches[0].clientX, x.find("ul").css("margin-left", -(H - 1) * (u / 4) + (d - c) / 4), d - c > 0 ? (h = H - 1, x.find("li").eq(H).css("width", 2 * u / 4 - u / 4 * Math.abs(d - c) / u + "px").find(".ho-h-tt").css("font-size", 1.875 - .875 * Math.abs(d - c) / u + "rem"), x.find("li").eq(H).css("width", 2 * u / 4 - u / 4 * Math.abs(d - c) / u + "px").find(".ho-h-to").css("font-size", .9375 - .1875 * Math.abs(d - c) / u + "rem"), x.find("li").eq(h).css("width", u / 4 + u / 4 * Math.abs(d - c) / u + "px").find(".ho-h-tt").css("font-size", 1 + .875 * Math.abs(d - c) / u + "rem"), x.find("li").eq(h).css("width", u / 4 + u / 4 * Math.abs(d - c) / u + "px").find(".ho-h-to").css("font-size", .75 + .1875 * Math.abs(d - c) / u + "rem")) : (g = H + 1, x.find("li").eq(H).css("width", 2 * u / 4 - u / 4 * Math.abs(d - c) / u + "px").find(".ho-h-tt").css("font-size", 1.875 - .875 * Math.abs(d - c) / u + "rem"), x.find("li").eq(H).css("width", 2 * u / 4 - u / 4 * Math.abs(d - c) / u + "px").find(".ho-h-to").css("font-size", .9375 - .1875 * Math.abs(d - c) / u + "rem"), x.find("li").eq(g).css("width", u / 4 + u / 4 * Math.abs(d - c) / u + "px").find(".ho-h-tt").css("font-size", 1 + .875 * Math.abs(d - c) / u + "rem"), x.find("li").eq(g).css("width", u / 4 + u / 4 * Math.abs(d - c) / u + "px").find(".ho-h-to").css("font-size", .75 + .1875 * Math.abs(d - c) / u + "rem"))
            }, !1);
            var k = null,
                l = null;
            x.find("li").bind("touchend", function() {
                var b = new Date;
                j = b.getTime(), k = a(this).index(), l = H
            }), document.getElementById("gearCot").addEventListener("touchend", function(a) {
                if (e = a.changedTouches[0].clientX, 180 > j - i && Math.abs(e - c) < 5) k != H && 0 != k && (k > l ? (H += 1, f(l, k, !0)) : (H -= 1, f(l, k, !0)));
                else if (e > c) if (e - c > u / 4) {
                    if (1 >= H) return x.find("ul").animate({
                        "margin-left": 0
                    }, 200), x.find("li").eq(H).css("width", 2 * u / 4 + "px").find(".ho-h-tt").animate({
                        "font-size": "1.875rem"
                    }, 200), x.find("li").eq(H).css("width", 2 * u / 4 + "px").find(".ho-h-to").animate({
                        "font-size": "0.9375rem"
                    }, 200), x.find("li").eq(h).css("width", u / 4 + "px").find(".ho-h-tt").animate({
                        "font-size": "1.875rem"
                    }, 200), void x.find("li").eq(h).css("width", u / 4 + "px").find(".ho-h-to").animate({
                        "font-size": "0.9375rem"
                    }, 200);
                    H -= 1, f(H + 1, h, !0)
                } else f(H, h);
                else if (c - e > u / 4) {
                    if (H >= b) return x.find("ul").animate({
                        "margin-left": -(u / 4) * (b - 1)
                    }, 200), x.find("li").eq(H).css("width", 2 * u / 4 + "px").find(".ho-h-tt").animate({
                        "font-size": "1.875rem"
                    }, 200), x.find("li").eq(H).css("width", 2 * u / 4 + "px").find(".ho-h-to").animate({
                        "font-size": "0.9375rem"
                    }, 200), x.find("li").eq(g).find(".ho-h-tt").animate({
                        "font-size": "1.875rem"
                    }, 200), void x.find("li").eq(g).find(".ho-h-to").animate({
                        "font-size": "0.9375rem"
                    }, 200);
                    H += 1, f(H - 1, g, !0)
                } else f(H, g)
            }, !1)
        }
        function h(b) {
            var c = b.length,
                d = F.replace("#width", u / 4 + "px");
            v.width((c + 4) * (u / 4));
            for (var e = 0; c > e; e++) d += b[e].productList.length > 1 ? G.replace("#width", u / 4 + "px").replace("#gradeName", b[e].gradeName).replace("#promotionContent", b[e].productList[0].promotionContent ? '<span class="ho-h-tf ft-20 dp-n fm-fz ho-tf bd-x bd-nl-g bd-nt-g bd-nr-g bd-nb-g promotion-content" data-index=' + e + ">" + b[e].productList[0].promotionContent + "</span>" : "").replace("#gradeLowestAnnualYieldRate", b[e].productList[0].annualYieldRate + "%").replace("#gradeHighestAnnualYieldRate", b[e].productList[1].annualYieldRate + "%") : G.replace("#width", u / 4 + "px").replace("#gradeName", b[e].gradeName).replace("rateLow", "").replace("#promotionContent", b[e].productList[0].promotionContent ? '<span class="ho-h-tf ft-20 dp-n fm-fz ho-tf bd-x bd-nl-g bd-nt-g bd-nr-g bd-nb-g promotion-content" data-index=' + e + ">" + b[e].productList[0].promotionContent + "</span>" : "").replace("#gradeLowestAnnualYieldRate", "").replace("#gradeHighestAnnualYieldRate", b[e].productList[0].annualYieldRate + "%");
            v.append(d), v.find(".promotion-content").on("touchend", b, function() {
                var c = a(this).data("index"),
                    d = b[c].productList[0].extra1 || "暂无内容";
                t.screeTips("详情", '<p class="remindword">' + d + "</p>"), event.preventDefault()
            }), 0 >= H ? (x.find("ul").find("li").eq(1).find("span").addClass("ho-h-on"), x.find("ul").animate({
                "margin-left": 0
            }, 300)) : (x.find("ul").find("li").eq(H).css("width", 2 * u / 4 + "px").find("span").addClass("ho-h-on"), x.find("ul").animate({
                "margin-left": -(H - 1) * (u / 4)
            }, 300), x.find("ul").find("li").eq(H).find(".rateLow").show()), g(c)
        }
        function i() {
            var b = {
                    1: "单笔最高19.9万元",
                    2: "起购金额1000元",
                    3: "单价1000元/份"
                },
                c = this;
            this.show = function(a) {
                D.html(b[a]), C.show()
            }, w.focus(function() {
                I = !0
            }), w.bind("input", function() {
                var b = a(this).val();
                b > 199e3 && (b = 199e3, c.show(1)), a(this).val(b)
            }), w.blur(function() {
                var b = a(this).val() || 0,
                    d = s.getStore("buyData").lowestInvestAmount;
                I = 100 > b || b % 100 > 0 ? !0 : !1, Number(b) < Number(d) && (b = d, c.show(2)), b > 199e3 && (b = 199e3, c.show(1)), "4" != s.getStore("buyData").gradeId && b % d != 0 && (b = Math.floor(Number(b) / Number(d)) * Number(d), c.show(3)), X.option.stopDraw = !1, a(this).val(b), X.reDraw(b)
            })
        }
        function j() {
            var a = navigator.userAgent.toLowerCase();
            return "micromessenger" == a.match(/MicroMessenger/i) ? !0 : !1
        }
        function k() {
            A.on("touchend", function() {
                var b = t.getQuery("version") || 5;
                if (!a(this).hasClass("bg-col-ccc")) {
                    var c = s.getStore("buyData").productType;
                    if (101 == c) window.location.href = "fund/tobuy.html?itemId=" + s.getStore("buyData").productId;
                    else if (102 == c) {
                        var d = parseInt(w.val()),
                            e = parseInt(d / Number(s.getStore("buyData").lowestInvestAmount)) || 1,
                            f = 4 == s.getStore("buyData").gradeId ? d : Number(s.getStore("buyData").lowestInvestAmount) * e || Number(s.getStore("buyData").lowestInvestAmount);
                        if (j()) t.getQuery("sid") ? l(f, e) : window.location.href = "http://jrappgw.jd.com/wxjdissue/JDIssue/login2?source=999&info=" + s.getStore("isWeixn").info + "&returnUrl=" + encodeURIComponent("http://" + window.location.host + window.location.pathname + "?fillInsur=" + s.getStore("buyData").releventId + "&version=" + b + "&source=app&bizType=2");
                        else if (s.getStore("clientMsg").sid) {
                            if (s.removeStore("totalItem"), parseInt(f) > parseInt(s.getStore("buyData").canBuyAmout)) return D.html("不能超过库存"), void C.show();
                            l(f, e)
                        } else {
                            var g = navigator.userAgent.toLowerCase(),
                                h = /jdjr-app/.test(g);
                            if (h) {
                                a.waitFor(function() {
                                    return !!window.oBridgev3
                                }, function() {
                                    var a = {
                                        type: 1,
                                        data: ""
                                    };
                                    window.oBridgev3.jsToGetResp(function(a) {
                                        window.getSidt(a)
                                    }, a)
                                })
                            } else window.location.href = "http://passport.m.jd.com/user/login.action?v=t&sid=&returnurl=" + encodeURIComponent(window.location.href + "?version=" + b)
                        }
                    }
                }
                event.preventDefault()
            }), C.bind("webkitAnimationEnd", function() {
                a(this).hide()
            }), a(".home-tip-cot").bind("touchstart", function() {
                a(this).find(".home-tip").addClass("home-tip-on")
            }), a(".home-tip-cot").bind("touchend", function() {
                a(this).find(".home-tip").removeClass("home-tip-on"), t.screeTips("收益说明", '<p class="remindword">年化收益率每日会有波动，收益也会波动。预期收益仅作为参考，请以实际收益为准</p>')
            }), a(".productDetail").tap(function() {
                window.location.href = q.xbAl.bxUrl + "?sid=" + s.getStore("clientMsg").sid + "&souce=" + s.getStore("clientMsg").source + "&itemId=" + s.getStore("buyData").releventId + "&bizType=2#detail"
            }), a("#help").tap(function() {
                window.location.href = "help.html" + window.location.search
            }), a("#goindex").tap(function() {
                window.location.href = "index.html" + window.location.search
            })
        }
        function l(a, b) {
            var c = s.getStore("buyData").gradeTerm,
                d = t.getQuery("version") || 5;
            if (m("totalItem"), 0 == c) {
                var e = s.getStore("hqInfo") || "";
                e && "true" == e.isCanPay && "true" == e.isHaveHq ? window.location.href = q.xbAl.bxUrl + "?orderId=" + e.orderNo + "&val=" + a + "&sid=" + s.getStore("clientMsg").sid + "&source=" + s.getStore("clientMsg").source + "&version=" + d + "&bizType=2#addbuyinsur" : window.location.href = q.xbAl.bxUrl + "?itemId=" + s.getStore("buyData").releventId + "&val=" + a + "&fs=" + b + "&gradeName=" + encodeURI(s.getStore("buyData").gradeName) + "&source=" + s.getStore("clientMsg").source + "&sid=" + s.getStore("clientMsg").sid + "&version=" + d + "&bizType=2#fillinsur"
            } else window.location.href = q.xbAl.bxUrl + "?itemId=" + s.getStore("buyData").releventId + "&val=" + a + "&fs=" + b + "&gradeName=" + encodeURI(s.getStore("buyData").gradeName) + "&source=" + s.getStore("clientMsg").source + "&sid=" + s.getStore("clientMsg").sid + "&version=" + d + "&bizType=2#fillinsur"
        }
        function m(a) {
            sessionStorage.getItem(a) && sessionStorage.removeItem(a)
        }
        function n(a) {
            s.setStore("gearList", a), h(a), c(H - 1), 0 == s.getStore("buyMesg").gradeTerm ? (X.option.ruleCellVal = 100, X.init(s.getStore("buyMesg"))) : X.init(s.getStore("buyMesg")), k()
        }
        function o(a) {
            for (var b = 0; b < a.length; b++) if (0 == a[b].gradeTerm) return a[b].productList;
            return null
        }
        function p() {
            j() && a(".wx-tx").show(), i();
            var b = t.getQuery("source") || "",
                c = t.getQuery("sid") || "",
                d = t.getQuery("version") || 5;
            s.setStore("clientMsg", {
                source: b,
                sid: c,
                version: d
            }), s.setStore("isWeixn", {
                info: t.getQuery("info") || ""
            }), r.getAjax(q.xbAl.xbGetProductList, {
                sid: c,
                source: b,
                version: d
            }, function(d) {
                if (s.getStore("clientMsg").sid) {
                    var e = o(d);
                    r.getAjax(q.xbAl.xbgetHqInfo, {
                        productId: e[0].releventId,
                        sid: c,
                        source: b
                    }, function(b) {
                        s.setStore("hqInfo", b), n(d), a.loading.showContent()
                    })
                } else n(d), a.loading.showContent()
            })
        }
        var q = b.rouetMap(),
            r = a.libAjax(),
            s = a.store(),
            t = a.tools(),
            u = a(window).width(),
            v = a("#gear"),
            w = (a("#rule"), a("#money")),
            x = a("#gearCot"),
            y = (a("#ruleCot"), a("#moneyYq")),
            z = a("#moneyMb"),
            A = a("#buyProductBtn"),
            B = a("#productName"),
            C = a("#showTips"),
            D = a("#tipsMsg"),
            E = a("#getDay"),
            F = '<li class="fl ho-h-250 dp-vc tx-c ft-col-999" style="width:#width"><span class="ho-h-to fm-fz ho-dq">&nbsp;</span><br /><span class="ho-h-tt fm-nbb ho-pn">&nbsp;</span><br /><span class="ho-h-th dp-n">&nbsp;</span></li>',
            G = '<li class="fl ho-h-250 dp-vc tx-c ft-col-999" style="width:#width"><span class="ho-h-to fm-fz fm-nb ho-dq">#gradeName</span><br /><span class="ho-h-tt fm-nbb ho-pn"><span class="rateLow dp-n">#gradeLowestAnnualYieldRate~</span><span id="rateHigh">#gradeHighestAnnualYieldRate</span></span><br /><span class="ho-h-th ft-22 dp-n fm-fz ho-tp">历史年化收益率</span><br />#promotionContent</li>',
            H = 1,
            I = !1,
            J = null,
            K = null,
            L = null,
            M = null,
            N = null,
            O = .1,
            P = null,
            Q = null,
            R = null,
            S = null,
            T = !1,
            U = null,
            V = null,
            W = null;
        window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
            function(a) {
                W = setTimeout(function() {
                    a()
                }, 15)
            }, window.cancelAnimationFrame = window.cancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.cancelAnimationFrame || window.webkitCancelAnimationFrame ||
            function(a) {
                clearTimeout(W)
            };
        var X = {
            option: {
                ruleCellWidth: 14,
                ruleCellHeightl: 12,
                ruleCellHeighth: 24,
                ruleLength: 100,
                ruleCellVal: 1e3,
                ruleStartX: 0,
                argsStartX: 0,
                ruleNowVal: 0,
                ruleSrartNum: 20,
                canvasWidth: 0,
                canvasHeight: 0,
                pointStartX: 0,
                pointEndX: 0,
                stopDraw: !1,
                totalMoney: 0,
                dMaxMoney: 199e3,
                defaultMon: 1e4
            },
            init: function(a) {
                a.productList[0].lowestInvestAmount;
                B.html(a.productList[0].productName);
                var b = a.productList[0].gradeName;
                E.html("活期" == b ? "每天" : b), J = document.getElementById("ruleCot"), K = J.getContext("2d"), J.width = 2 * J.offsetWidth, J.height = 2 * J.offsetHeight, X.option.canvasWidth = 2 * J.offsetWidth, X.option.canvasHeight = 2 * J.offsetHeight, J.style.width = "", J.style.height = "", X.option.argsStartX = X.returnX(X.option.defaultMon), X.option.ruleStartX = X.option.argsStartX, X.draw(), J.addEventListener("touchstart", X.preDraw, !1), J.addEventListener("touchmove", X.move, !1), J.addEventListener("touchend", X.correct, !1)
            },
            returnX: function(a) {
                return X.option.canvasWidth / X.option.ruleCellWidth / 2 - a / X.option.ruleCellVal
            },
            reDraw: function(a) {
                X.option.ruleStartX = X.returnX(a), X.draw()
            },
            aniDraw: function(a, b) {
                var c = 6;
                V = function() {
                    if (a > .1) {
                        if (b ? X.option.ruleStartX = X.option.ruleStartX + c : X.option.ruleStartX = X.option.ruleStartX - c, X.option.totalMoney < s.getStore("buyData").lowestInvestAmount) return X.option.ruleStartX = X.returnX(s.getStore("buyData").lowestInvestAmount), D.html("起购金额1000元"), X.option.stopDraw = !1, C.show(), void X.draw();
                        if (X.option.totalMoney > s.getStore("buyData").productAmount, X.option.totalMoney > X.option.dMaxMoney) return X.option.ruleStartX = X.returnX(X.option.dMaxMoney), D.html("单笔最高19.9万元"), X.option.stopDraw = !1, C.show(), void X.draw();
                        if (X.option.ruleStartX > X.option.canvasWidth / X.option.ruleCellWidth / 2) return void(X.option.stopDraw = !0);
                        a = .95 * a, X.draw(), c = .95 * c, requestAnimationFrame(V)
                    } else X.option.stopDraw = !0
                }, window.requestAnimationFrame(V)
            },
            autoDraw: function() {
                X.option.ruleStartX >= X.option.argsStartX ? X.draw() : (X.draw(), X.autoDraw()), X.option.ruleStartX = X.option.ruleStartX + O
            },
            drawText: function(a, b, c) {
                K.save(), K.fillStyle = "rgb(221, 221, 221)", K.strokeStyle = "rgb(221, 221, 221)", K.font = "lighter 24px HelveticaNeue-Bold", K.textBaseline = "top", K.textAlign = "center", K.fillText(c, a, b), K.restore()
            },
            draw: function() {
                if (!X.option.stopDraw) {
                    K.clearRect(0, 0, X.option.canvasWidth, X.option.canvasHeight), K.strokeStyle = "rgb(221,221,221)", K.fillStyle = "#FFFFFF", K.fillRect(0, 0, X.option.canvasWidth, X.option.canvasHeight);
                    for (var a = X.option.ruleStartX, b = 0; a < X.option.canvasWidth / X.option.ruleCellWidth; a++) if (!(0 > a)) {
                        if (L = X.option.ruleCellWidth * a, M = X.option.canvasHeight, N = parseInt(a - X.option.ruleStartX) * X.option.ruleCellVal, parseInt(a - X.option.ruleStartX) % 10) {
                            if (L > 320 && N > 199e3) continue;
                            K.moveTo(L, M - X.option.ruleCellHeightl), K.lineTo(L, M)
                        } else {
                            if (L > 320 && N > 199e3) continue;
                            K.moveTo(L, M - X.option.ruleCellHeighth), K.lineTo(L, M), X.drawText(L, M - 2.2 * X.option.ruleCellHeighth, N)
                        }
                        if (b++, b >= X.option.canvasWidth / X.option.ruleCellWidth) break
                    }
                    if (
                        K.stroke(),
                            K.save(),
                            K.beginPath(),
                            K.strokeStyle = "rgb(255,128,26)",
                            K.translate(.5, 0),
                            K.moveTo(X.option.canvasWidth / 2, 0),
                            K.lineTo(X.option.canvasWidth / 2, X.option.canvasHeight),
                            K.stroke(), K.closePath(),
                            K.restore(),
                            I) {
                        var c = w.val() || 0;
                        X.option.totalMoney = c, s.setStore("allMoney", {
                            money: c
                        }), e(c)
                    } else {
                        var c = -Math.round(X.option.ruleStartX - Math.round(X.option.canvasWidth / X.option.ruleCellWidth / 2)) * X.option.ruleCellVal;
                        X.option.totalMoney = c, w.val(c), e(c), s.setStore("allMoney", {
                            money: c
                        })
                    }
                    L = null, M = null, N = null, a = null
                }
            },
            move: function(a) {
                if (a.preventDefault(), window.cancelAnimationFrame(V), X.option.totalMoney < s.getStore("buyData").lowestInvestAmount && (X.option.ruleStartX = X.returnX(s.getStore("buyData").lowestInvestAmount), D.html("起购金额1000元"), X.option.stopDraw = !1, C.show()), X.option.totalMoney > X.option.dMaxMoney) X.option.ruleStartX = X.returnX(X.option.dMaxMoney), D.html("单笔最高19.9万元"), X.option.stopDraw = !1, C.show();
                else {
                    X.option.ruleStartX = (Math.round(1e3 * X.option.ruleStartX) + (Math.round(100 * a.touches[0].clientX) - Math.round(100 * X.option.pointStartX))) / 1e3, X.option.pointStartX = Math.round(100 * a.touches[0].clientX) / 100;
                    var b = new Date;
                    Q = b.getTime(),
                        S = a.changedTouches[0].clientX,
                        U = Math.abs((S - R) / (Q - P) * 10),
                        U > 4 ? X.option.ruleStartX > X.option.canvasWidth / X.option.ruleCellWidth / 2 ? (X.option.ruleStartX = X.option.canvasWidth / X.option.ruleCellWidth / 2,
                            X.option.stopDraw = !0) : T = !0 : (T = !1, X.option.ruleStartX > X.option.canvasWidth / X.option.ruleCellWidth / 2 ? (X.option.ruleStartX = X.option.canvasWidth / X.option.ruleCellWidth / 2, X.option.stopDraw = !0) : (X.option.stopDraw = !1,
                            X.draw()))
                }
            },
            correct: function(a) {
                if (T) {
                    var b = S - R > 0 ? !0 : !1;
                    X.option.stopDraw = !1, X.aniDraw(Math.round(U), b)
                }
                X.option.totalMoney < s.getStore("buyData").lowestInvestAmount && (X.option.ruleStartX = X.returnX(s.getStore("buyData").lowestInvestAmount), D.html("起购金额1000元"), X.option.stopDraw = !1, C.show(), X.draw()), X.option.totalMoney > X.option.dMaxMoney && (X.option.ruleStartX = X.returnX(X.option.dMaxMoney), D.html("单笔最高19.9万元"), X.option.stopDraw = !1, C.show(), X.draw())
            },
            preDraw: function(a) {
                I = !1, T = !1, window.cancelAnimationFrame(V), X.option.stopDraw = !0;
                var b = new Date;
                P = b.getTime(), R = a.touches[0].clientX, X.option.pointStartX = Math.round(100 * a.touches[0].clientX) / 100, X.option.ruleStartX = X.returnX(w.val()), X.draw()
            }
        };
        window.getSidt = function(b) {
            if ("object" != typeof b && (b = a.parseJSON(b)), !b || !b.share) {
                var c = parseInt(w.val()),
                    d = parseInt(c / Number(s.getStore("buyData").lowestInvestAmount)),
                    e = s.getStore("buyData").gradeId = c;
                s.setStore("clientMsg", {
                    sid: b.data,
                    source: "app",
                    version: 5
                }), s.removeStore("totalItem");
                q.xbAl.bxUrl + "?fillInsur=" + s.getStore("buyData").releventId + "&val=" + e + "&fs=" + d + "&gradeName=" + encodeURI(s.getStore("buyData").gradeName) + "&source=" + s.getStore("clientMsg").source + "&sid=" + s.getStore("clientMsg").sid + "&bizType=2";
                if (parseInt(e) > parseInt(s.getStore("buyData").canBuyAmout)) return D.html("不能超过库存"), void C.show();
                var f = {};
                a.each(s.getStore("gearList"), function(a, b) {
                    0 == b.gradeTerm && (f = b.productList)
                }), r.getAjax(q.xbAl.xbgetHqInfo, {
                    productId: f[0].releventId,
                    sid: decodeURIComponent(s.getStore("clientMsg").sid),
                    source: "app"
                }, function(a) {
                    s.setStore("hqInfo", a), l(e, d)
                })
            }
        }, p(), function() {
            var b = a.getCookie("atJDM"),
                c = "http://st.360buyimg.com/common/commonH_B/js/m_common_header_bottom.js",
                d = a("body")[0],
                e = document.createElement("div");
            "1" === b && (e.id = "m_common_header", d.insertBefore(e, d.children[0]), a.getScript(c, function() {
                var a = new MCommonHeaderBottom,
                    b = {
                        hrederId: "m_common_header",
                        title: document.title
                    };
                a.header(b)
            }))
        }()
    }(Zepto, window);