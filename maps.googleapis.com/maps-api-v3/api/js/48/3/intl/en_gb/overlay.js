google.maps.__gjsload__('overlay', function(_) {
    var Ls = function(a) {
            this.h = a
        },
        Xka = function() {},
        Ms = function(a) {
            a.ho = a.ho || new Xka;
            return a.ho
        },
        Yka = function(a) {
            this.La = new _.ni(function() {
                var b = a.ho;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.hn && a.onAdd) a.onAdd();
                        b.hn = !0;
                        a.draw()
                    }
                } else {
                    if (b.hn)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.hn = !1
                }
            }, 0)
        },
        Zka = function(a, b) {
            function c() {
                return _.oi(e.La)
            }
            var d = Ms(a),
                e = d.Xl;
            e || (e = d.Xl = new Yka(a));
            _.ab(d.Wa || [], _.F.removeListener);
            var f = d.Va = d.Va || new _.mr,
                g = b.__gm;
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("center", g, "projectionCenterQ");
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            f = d.Or = d.Or || new Ls(f);
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            a.bindTo("projection", f, "outProjection");
            a.bindTo("panes", g);
            d.Wa = [_.F.addListener(a, "panes_changed", c), _.F.addListener(g, "zoom_changed", c), _.F.addListener(g, "offset_changed", c), _.F.addListener(b, "projection_changed", c), _.F.addListener(g, "projectioncenterq_changed", c)];
            c();
            b instanceof
            _.sf && _.og(b, "Ox")
        },
        cla = function(a) {
            if (a) {
                var b = a.getMap();
                if ($ka(a) !== b && b && b instanceof _.sf) {
                    var c = b.__gm;
                    c.overlayLayer ? a.__gmop = new ala(b, a, c.overlayLayer) : c.j.then(function(d) {
                        d = d.Xa;
                        var e = new Ns(b, d);
                        d.ib(e);
                        c.overlayLayer = e;
                        bla(a);
                        cla(a)
                    })
                }
            }
        },
        bla = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.h.unbindAll(), b.h.set("panes", null), b.h.set("projection", null), b.l.Tf(b), b.j && (b.j = !1, b.h.onRemove ? b.h.onRemove() : b.h.remove()))
            }
        },
        $ka = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        ala = function(a,
            b, c) {
            this.map = a;
            this.h = b;
            this.l = c;
            this.j = !1;
            _.og(this.map, "Ox");
            c.wf(this)
        },
        dla = function(a, b) {
            a.h.get("projection") != b && (a.h.bindTo("panes", a.map.__gm), a.h.set("projection", b))
        },
        Ns = function(a, b) {
            this.m = a;
            this.l = b;
            this.h = null;
            this.j = []
        };
    _.C(Ls, _.G);
    Ls.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.ie(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.h : null))
    };
    var Os = {};
    _.C(Yka, _.G);
    Os.wf = function(a) {
        if (a) {
            var b = a.getMap();
            (Ms(a).wr || null) !== b && (b && Zka(a, b), Ms(a).wr = b)
        }
    };
    Os.Tf = function(a) {
        var b = Ms(a),
            c = b.Va;
        c && c.unbindAll();
        (c = b.Or) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Wa && _.ab(b.Wa, _.F.removeListener);
        b.Wa = null;
        b.Xl && (b.Xl.La.Gd(), b.Xl = null);
        delete Ms(a).wr
    };
    var Ps = {};
    ala.prototype.draw = function() {
        this.j || (this.j = !0, this.h.onAdd && this.h.onAdd());
        this.h.draw && this.h.draw()
    };
    Ns.prototype.dispose = function() {};
    Ns.prototype.yc = function(a, b, c, d, e, f, g, h) {
        var k = this.h = this.h || new _.on(this.m, this.l, function() {});
        k.yc(a, b, c, d, e, f, g, h);
        a = _.A(this.j);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, dla(b, k), b.draw()
    };
    Ns.prototype.wf = function(a) {
        this.j.push(a);
        this.h && dla(a, this.h);
        this.l.refresh()
    };
    Ns.prototype.Tf = function(a) {
        _.kb(this.j, a)
    };
    Ps.wf = cla;
    Ps.Tf = bla;
    _.bf("overlay", {
        xp: function(a) {
            if (a) {
                (0, Os.Tf)(a);
                (0, Ps.Tf)(a);
                var b = a.getMap();
                b && (b instanceof _.sf ? (0, Ps.wf)(a) : (0, Os.wf)(a))
            }
        },
        preventMapHitsFrom: function(a) {
            _.Sn(a, {
                onClick: function(b) {
                    return _.xn(b.event)
                },
                ud: function(b) {
                    return _.un(b)
                },
                Bh: function(b) {
                    return _.vn(b)
                },
                Td: function(b) {
                    return _.vn(b)
                },
                Bd: function(b) {
                    return _.wn(b)
                }
            }).xi(!0)
        },
        preventMapHitsAndGesturesFrom: function(a) {
            a.addEventListener("click", _.jf);
            a.addEventListener("contextmenu", _.jf);
            a.addEventListener("dblclick", _.jf);
            a.addEventListener("mousedown",
                _.jf);
            a.addEventListener("mousemove", _.jf);
            a.addEventListener("MSPointerDown", _.jf);
            a.addEventListener("pointerdown", _.jf);
            a.addEventListener("touchstart", _.jf);
            a.addEventListener("wheel", _.jf)
        }
    });
});