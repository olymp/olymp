export default (function (chars) {
  switch (chars) {
    case '*':
    case '-':
    case '+':
      return 'bulleted-list-item';
    case '>':
      return 'block-quote';
    case '#':
      return 'heading-one';
    case '##':
      return 'heading-two';
    case '###':
      return 'heading-three';
    case '####':
      return 'heading-four';
    case '#####':
      return 'heading-five';
    case '######':
      return 'heading-six';
    case '1.':
      return 'numbered-list-item';
    default:
      return null;
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL2RlZmF1bHRzL21hcmtkb3duLmVzNiJdLCJuYW1lcyI6WyJjaGFycyJdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWUsVUFBQ0EsS0FBRCxFQUFXO0FBQ3hCLFVBQVFBLEtBQVI7QUFDRSxTQUFLLEdBQUw7QUFDQSxTQUFLLEdBQUw7QUFDQSxTQUFLLEdBQUw7QUFDRSxhQUFPLG9CQUFQO0FBQ0YsU0FBSyxHQUFMO0FBQ0UsYUFBTyxhQUFQO0FBQ0YsU0FBSyxHQUFMO0FBQ0UsYUFBTyxhQUFQO0FBQ0YsU0FBSyxJQUFMO0FBQ0UsYUFBTyxhQUFQO0FBQ0YsU0FBSyxLQUFMO0FBQ0UsYUFBTyxlQUFQO0FBQ0YsU0FBSyxNQUFMO0FBQ0UsYUFBTyxjQUFQO0FBQ0YsU0FBSyxPQUFMO0FBQ0UsYUFBTyxjQUFQO0FBQ0YsU0FBSyxRQUFMO0FBQ0UsYUFBTyxhQUFQO0FBQ0YsU0FBSyxJQUFMO0FBQ0UsYUFBTyxvQkFBUDtBQUNGO0FBQ0UsYUFBTyxJQUFQO0FBdEJKO0FBd0JELENBekJEIiwiZmlsZSI6InBhY2thZ2VzL3NsYXRlL2RlZmF1bHRzL21hcmtkb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKGNoYXJzKSA9PiB7XG4gIHN3aXRjaCAoY2hhcnMpIHtcbiAgICBjYXNlICcqJzpcbiAgICBjYXNlICctJzpcbiAgICBjYXNlICcrJzpcbiAgICAgIHJldHVybiAnYnVsbGV0ZWQtbGlzdC1pdGVtJztcbiAgICBjYXNlICc+JzpcbiAgICAgIHJldHVybiAnYmxvY2stcXVvdGUnO1xuICAgIGNhc2UgJyMnOlxuICAgICAgcmV0dXJuICdoZWFkaW5nLW9uZSc7XG4gICAgY2FzZSAnIyMnOlxuICAgICAgcmV0dXJuICdoZWFkaW5nLXR3byc7XG4gICAgY2FzZSAnIyMjJzpcbiAgICAgIHJldHVybiAnaGVhZGluZy10aHJlZSc7XG4gICAgY2FzZSAnIyMjIyc6XG4gICAgICByZXR1cm4gJ2hlYWRpbmctZm91cic7XG4gICAgY2FzZSAnIyMjIyMnOlxuICAgICAgcmV0dXJuICdoZWFkaW5nLWZpdmUnO1xuICAgIGNhc2UgJyMjIyMjIyc6XG4gICAgICByZXR1cm4gJ2hlYWRpbmctc2l4JztcbiAgICBjYXNlICcxLic6XG4gICAgICByZXR1cm4gJ251bWJlcmVkLWxpc3QtaXRlbSc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuIl19
