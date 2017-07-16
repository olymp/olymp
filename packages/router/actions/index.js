export var createPush = function (dispatch) { return function (payload) {
    return dispatch({
        type: 'LOCATION',
        replace: false,
        payload: payload,
    });
}; };
export var createReplace = function (dispatch) { return function (payload) {
    return dispatch({
        type: 'LOCATION',
        replace: true,
        payload: payload,
    });
}; };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3JvdXRlci9hY3Rpb25zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxJQUFNLFVBQVUsR0FBRyxVQUFBLFFBQVEsSUFBSSxPQUFBLFVBQUEsT0FBTztJQUMzQyxPQUFBLFFBQVEsQ0FBQztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLE9BQU8sRUFBRSxLQUFLO1FBQ2QsT0FBTyxTQUFBO0tBQ1IsQ0FBQztBQUpGLENBSUUsRUFMa0MsQ0FLbEMsQ0FBQztBQUNMLE1BQU0sQ0FBQyxJQUFNLGFBQWEsR0FBRyxVQUFBLFFBQVEsSUFBSSxPQUFBLFVBQUEsT0FBTztJQUM5QyxPQUFBLFFBQVEsQ0FBQztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLE9BQU8sRUFBRSxJQUFJO1FBQ2IsT0FBTyxTQUFBO0tBQ1IsQ0FBQztBQUpGLENBSUUsRUFMcUMsQ0FLckMsQ0FBQyIsImZpbGUiOiJwYWNrYWdlcy9yb3V0ZXIvYWN0aW9ucy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjcmVhdGVQdXNoID0gZGlzcGF0Y2ggPT4gcGF5bG9hZCA9PlxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogJ0xPQ0FUSU9OJyxcbiAgICByZXBsYWNlOiBmYWxzZSxcbiAgICBwYXlsb2FkLFxuICB9KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVSZXBsYWNlID0gZGlzcGF0Y2ggPT4gcGF5bG9hZCA9PlxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogJ0xPQ0FUSU9OJyxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHBheWxvYWQsXG4gIH0pO1xuIl19