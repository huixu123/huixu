!(function(n) {
    let e = n.document,
      t = e.documentElement,
      i =768 ,
      d = i / 51.2,
      o = 'orientationchange' in n ? 'orientationchange' : 'resize',
      a = function() {
        let n = t.clientWidth || 320
        n > 768 && (n = 768)
        t.style.fontSize = n / d + 'px'
      }
    e.addEventListener &&
      (n.addEventListener(o, a, !1),
      e.addEventListener('DOMContentLoaded', a, !1))
  })(window)
  