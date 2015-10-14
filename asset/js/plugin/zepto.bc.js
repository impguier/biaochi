(function () {
    var settings = {
        currMoney: 0,
        MAxMoney: '',
        initMoney: 10000,
        printpanel: "#panel",
        inputDom: "#money",
        setStroeMonen: function (m) {
            this.currMoney = m
        }
    };
    var BROWSER_WIDTH = window.innerWidth;
    var V = {
        ew: 14,
        em: 1e2,
        cw: 0,
        ch: 0,
        min: 50,
        max: 1e5,
        canAni: true
    };

    $.fn.makebc = function (opts) {
        var opts = $.extend(settings, opts);
        opts.currMoney = opts.initMoney;
        var ctx = $(opts.printpanel)[0].getContext('2d');

        var methods = {
            money2position: function (money) {
                return ( (V.cw / V.ew / 2) - (money / V.em));
            },
            draw: function (sX, sY) {
                ctx.save();
                ctx.strokeStyle = 'rgb(211,211,211)';
                ctx.moveTo(0, ctx.canvas.height - 1);
                ctx.lineTo(ctx.canvas.width, ctx.canvas.height - 1);
                ctx.stroke();
                ctx.restore();

                ctx.strokeStyle = "rgb(211,211,211)";
                for (var i = sX; i < ((V.cw * 2) / (V.ew)); i++) {
                    var x = V.ew * i;
                    ctx.beginPath();
                    ctx.moveTo(x, sY);
                    if ((Math.floor(i) - Math.floor(sX)) % 10) {
                        ctx.lineTo(x, sY - V.ch * .1);
                    } else {
                        ctx.lineTo(x, sY - V.ch * .25);
                        methods.drawText(Math.round(i - sX) * V.em, x, sY - V.ch * .4);
                    }
                    ctx.stroke();
                    ctx.closePath();
                }

            },
            drawCenter: function () {
                ctx.save()
                ctx.beginPath();
                ctx.strokeStyle = 'red';
                ctx.moveTo(ctx.canvas.width / 2, ctx.canvas.height);
                ctx.lineTo(ctx.canvas.width / 2, 0);
                ctx.stroke();
                ctx.closePath();
                ctx.restore();
            },
            drawText: function (text, x, y) {
                ctx.save();
                ctx.font = 'Bold 24px Microsof YaHei';
                ctx.fillStyle = 'rgb(150,150,150)';
                ctx.textBaseline = 'top'
                ctx.textAlign = 'center';
                ctx.fillText(text, x, y);
                ctx.restore();
            }
        };

        this.each(function () {
            init(opts);
            var canvas = this;
            var sX = methods.money2position(opts.initMoney),
                sY = canvas.height;

            methods.draw(sX, sY);
            methods.drawCenter();
            this.addEventListener('touchstart', function (event) {
                startTouchDate = new Date().getTime();
                startPositionX = movePositionX = event.touches[0].pageX;
                var currMoney = opts.currMoney;
                var sX = methods.money2position(currMoney),
                    sY = V.ch;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                methods.draw(sX, sY);
                methods.drawCenter();
            });
            this.addEventListener('touchmove', function (event) {
                var c = movePositionX - startPositionX;
                var boo = c <= 0 ? 1 : -1;
                moved = Math.abs(Math.round(2 * Math.round(movePositionX - startPositionX) / V.ew) * V.em) * boo;
                var om = Math.abs((2 * (movePositionX - startPositionX) / V.ew) * V.em) * boo;
                var $dom = $(opts.inputDom);
                if (opts.currMoney + moved < V.min) {
                    $dom.val(V.min);
                    var sX = methods.money2position(V.min),
                        sY = canvas.height;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    methods.draw(sX, sY, Math.floor(V.min));
                    methods.drawCenter();
                    return;
                }
                if (opts.currMoney + moved > V.max) {
                    $dom.val(V.max);
                    var sX = methods.money2position(V.max),
                        sY = canvas.height;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    methods.draw(sX, sY, Math.floor(V.max));
                    methods.drawCenter();
                    return;
                }
                $dom.val(opts.currMoney + moved);
                var sX = methods.money2position(opts.currMoney + om),
                    sY = canvas.height;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                methods.draw(sX, sY, Math.floor(opts.currMoney + om));
                methods.drawCenter();
                movePositionX = event.touches[0].pageX;
            });
            this.addEventListener('touchend', function () {
                var leaveTouchDate = new Date().getTime();
                var durationDate = Number(leaveTouchDate - startTouchDate);
                if (durationDate < 500) {
                    var i = Math.floor(Math.round(movePositionX - startPositionX) / V.ew);
                    i *= -1;
                    var animationDraw = function () {
                        V.canAni = false;
                        var moveMoney = Math.round(i * V.em);
                        var finalMoney = opts.currMoney + moveMoney;
                        if (finalMoney < V.min) {
                            var sX = methods.money2position(V.min),
                                sY = canvas.height;
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            methods.draw(sX, sY);
                            methods.drawCenter();
                            opts.setStroeMonen(V.min);

                            $(opts.inputDom).val(V.min);
                            opts.setStroeMonen(V.min);
                            V.canAni = true;
                            return;
                        }
                        if (finalMoney > V.max) {

                            var sX = methods.money2position(V.max),
                                sY = canvas.height;
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            methods.draw(sX, sY);
                            methods.drawCenter();
                            opts.setStroeMonen(V.max);

                            $(opts.inputDom).val(V.max);
                            opts.setStroeMonen(V.max);
                            V.canAni = true;
                            return;
                        }

                        var sX = methods.money2position(finalMoney),
                            sY = canvas.height;
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        methods.draw(sX, sY);
                        methods.drawCenter();
                        opts.setStroeMonen(finalMoney);
                        i *= .9;

                        if (i >= -1 && i < 0) {
                            finalMoney = Math.round(finalMoney / 100) * 100;
                            $(opts.inputDom).val(finalMoney);
                            opts.setStroeMonen(finalMoney);
                            V.canAni = true;
                            return;
                        }
                        if (i > 0 && i <= 1) {
                            finalMoney = Math.round(finalMoney / 100) * 100;
                            $(opts.inputDom).val(finalMoney);
                            opts.setStroeMonen(finalMoney)
                            V.canAni = true;
                            return;
                        }

                        window.requestAnimationFrame(animationDraw);
                    }
                    if (!V.canAni) {
                        return;
                    }
                    window.requestAnimationFrame(animationDraw);
                }
                opts.setStroeMonen(parseInt($(opts.inputDom).val()));

            });
        });
        function init(opts) {
            $(opts.printpanel)[0].width = BROWSER_WIDTH * 2;
            $(opts.printpanel)[0].style.height = 75 + "px";
            V.cw = ctx.canvas.width;
            V.ch = ctx.canvas.height;
            $(opts.inputDom).val(opts.initMoney).change(function () {
                var canvas = $(opts.printpanel)[0];
                var ctx = canvas.getContext('2d');
                var idom = $(this);
                var domValue = idom.val();
                if (domValue < 50) {
                    idom.val(50);
                    var startX = methods.money2position(100);
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    methods.draw(startX, canvas.height, 50);
                    methods.drawCenter();
                    opts.currMoney = 50;
                } else if (domValue > 100000) {
                    idom.val(100000);
                    opts.currMoney = 100000;
                    var startX = methods.money2position(100000);
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    methods.draw(startX, canvas.height, 100000);
                    methods.drawCenter();
                    opts.currMoney = 100000;
                } else {
                    opts.currMoney = domValue;
                    var startX = methods.money2position(domValue);
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    methods.draw(startX, canvas.height, domValue);
                    methods.drawCenter();
                    opts.currMoney = Number(domValue);
                }
            });
        }
    }

})(Zepto)