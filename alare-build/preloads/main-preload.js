;(() => {
  'use strict'
  const e = require('electron')
  var n = function (e, n, r) {
      if (r || 2 === arguments.length)
        for (var t, o = 0, p = n.length; o < p; o++)
          (!t && o in n) ||
            (t || (t = Array.prototype.slice.call(n, 0, o)), (t[o] = n[o]))
      return e.concat(t || Array.prototype.slice.call(n))
    },
    r = {
      getApps: function () {
        for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t]
        return e.ipcRenderer.invoke.apply(
          e.ipcRenderer,
          n(['event:getApps'], r, !1)
        )
      },
      getScreens: function () {
        for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t]
        return e.ipcRenderer.invoke.apply(
          e.ipcRenderer,
          n(['event:getScreens'], r, !1)
        )
      },
      openApp: function () {
        for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t]
        return e.ipcRenderer.invoke.apply(
          e.ipcRenderer,
          n(['event:openApp'], r, !1)
        )
      },
      ipcRenderer: {
        sendMessage: function (r) {
          for (var t = [], o = 1; o < arguments.length; o++)
            t[o - 1] = arguments[o]
          e.ipcRenderer.send.apply(e.ipcRenderer, n([r], t, !1))
        },
        on: function (n, r) {
          var t = function (e) {
            for (var n = [], t = 1; t < arguments.length; t++)
              n[t - 1] = arguments[t]
            return r.apply(void 0, n)
          }
          return (
            e.ipcRenderer.on(n, t),
            function () {
              e.ipcRenderer.removeListener(n, t)
            }
          )
        },
        once: function (n, r) {
          e.ipcRenderer.once(n, function (e) {
            for (var n = [], t = 1; t < arguments.length; t++)
              n[t - 1] = arguments[t]
            return r.apply(void 0, n)
          })
        },
      },
    }
  e.contextBridge.exposeInMainWorld('electron', r)
})()
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wcmVsb2FkLmpzIiwibWFwcGluZ3MiOiJtQkFBQSxNQUFNLEVBQStCQSxRQUFRLFksc01DSXZDQyxFQUFrQixDQUN0QkMsUUFBUyxXLElBQUMsc0RBQWdCLFNBQUFDLFlBQUEsZUFBQUEsWUFBVyxHQUFRLGlCQUFvQkMsR0FBSSxHQUEzQyxFQUMxQkMsV0FBWSxXLElBQUMsc0RBQWdCLFNBQUFGLFlBQUEsZUFBQUEsWUFBVyxHQUFRLG9CQUF1QkMsR0FBSSxHQUE5QyxFQUM3QkUsUUFBUyxXLElBQUMsc0RBQWdCLFNBQUFILFlBQUEsZUFBQUEsWUFBVyxHQUFRLGlCQUFvQkMsR0FBSSxHQUEzQyxFQUMxQkQsWUFBYSxDQUNYSSxZQUFXLFNBQUNDLEcsSUFBbUIsd0RBQzdCLEVBQUFMLFlBQUEsYUFBQUEsWUFBVyxHQUFNSyxHQUFZSixHQUFJLEdBQ25DLEVBQ0FLLEdBQUUsU0FBQ0QsRUFBbUJFLEdBQ3BCLElBQU1DLEVBQWUsU0FBQ0MsRyxJQUEwQix3REFDOUMsT0FBQUYsRUFBSSxhQUFJTixFQUFSLEVBR0YsT0FGQSxFQUFBRCxZQUFBLEdBQWVLLEVBQVNHLEdBRWpCLFdBQ0wsRUFBQVIsWUFBQSxlQUEyQkssRUFBU0csRUFDdEMsQ0FDRixFQUNBRSxLQUFJLFNBQUNMLEVBQW1CRSxHQUN0QixFQUFBUCxZQUFBLEtBQWlCSyxHQUFTLFNBQUNJLEcsSUFBUSx3REFBWSxPQUFBRixFQUFJLGFBQUlOLEVBQVIsR0FDakQsSUFJSixFQUFBVSxjQUFBLGtCQUFnQyxXQUFZYixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlY3Ryb24tYXJhbGUvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tYXJhbGUvLi9hbGFyZS9wcmVsb2Fkcy9tYWluLXByZWxvYWQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJlbGVjdHJvblwiKTsiLCJpbXBvcnQgeyBjb250ZXh0QnJpZGdlLCBpcGNSZW5kZXJlciwgSXBjUmVuZGVyZXJFdmVudCB9IGZyb20gJ2VsZWN0cm9uJ1xuXG5leHBvcnQgdHlwZSBDaGFubmVscyA9ICdpcGMtZ2V0LWFwcHMnIHwgJ2lwYy1leGFtcGxlJ1xuXG5jb25zdCBlbGVjdHJvbkhhbmRsZXIgPSB7XG4gIGdldEFwcHM6ICguLi5hcmdzOiBbXSkgPT4gaXBjUmVuZGVyZXIuaW52b2tlKCdldmVudDpnZXRBcHBzJywgLi4uYXJncyksXG4gIGdldFNjcmVlbnM6ICguLi5hcmdzOiBbXSkgPT4gaXBjUmVuZGVyZXIuaW52b2tlKCdldmVudDpnZXRTY3JlZW5zJywgLi4uYXJncyksXG4gIG9wZW5BcHA6ICguLi5hcmdzOiBbXSkgPT4gaXBjUmVuZGVyZXIuaW52b2tlKCdldmVudDpvcGVuQXBwJywgLi4uYXJncyksXG4gIGlwY1JlbmRlcmVyOiB7XG4gICAgc2VuZE1lc3NhZ2UoY2hhbm5lbDogQ2hhbm5lbHMsIC4uLmFyZ3M6IHVua25vd25bXSkge1xuICAgICAgaXBjUmVuZGVyZXIuc2VuZChjaGFubmVsLCAuLi5hcmdzKVxuICAgIH0sXG4gICAgb24oY2hhbm5lbDogQ2hhbm5lbHMsIGZ1bmM6ICguLi5hcmdzOiB1bmtub3duW10pID0+IHZvaWQpIHtcbiAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IChfZXZlbnQ6IElwY1JlbmRlcmVyRXZlbnQsIC4uLmFyZ3M6IHVua25vd25bXSkgPT5cbiAgICAgICAgZnVuYyguLi5hcmdzKVxuICAgICAgaXBjUmVuZGVyZXIub24oY2hhbm5lbCwgc3Vic2NyaXB0aW9uKVxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpcGNSZW5kZXJlci5yZW1vdmVMaXN0ZW5lcihjaGFubmVsLCBzdWJzY3JpcHRpb24pXG4gICAgICB9XG4gICAgfSxcbiAgICBvbmNlKGNoYW5uZWw6IENoYW5uZWxzLCBmdW5jOiAoLi4uYXJnczogdW5rbm93bltdKSA9PiB2b2lkKSB7XG4gICAgICBpcGNSZW5kZXJlci5vbmNlKGNoYW5uZWwsIChfZXZlbnQsIC4uLmFyZ3MpID0+IGZ1bmMoLi4uYXJncykpXG4gICAgfSxcbiAgfSxcbn1cblxuY29udGV4dEJyaWRnZS5leHBvc2VJbk1haW5Xb3JsZCgnZWxlY3Ryb24nLCBlbGVjdHJvbkhhbmRsZXIpXG5cbmV4cG9ydCB0eXBlIEVsZWN0cm9uSGFuZGxlciA9IHR5cGVvZiBlbGVjdHJvbkhhbmRsZXJcbiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiZWxlY3Ryb25IYW5kbGVyIiwiZ2V0QXBwcyIsImlwY1JlbmRlcmVyIiwiYXJncyIsImdldFNjcmVlbnMiLCJvcGVuQXBwIiwic2VuZE1lc3NhZ2UiLCJjaGFubmVsIiwib24iLCJmdW5jIiwic3Vic2NyaXB0aW9uIiwiX2V2ZW50Iiwib25jZSIsImNvbnRleHRCcmlkZ2UiXSwic291cmNlUm9vdCI6IiJ9
