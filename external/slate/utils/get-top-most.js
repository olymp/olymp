var getTopMost = function getTopMost(schema, change, prev) {
  var next = prev ? change.value.document.getParent(prev.key) : change.value.startBlock;
  var nextType = next && next.type;
  var prevType = prev && prev.type;
  var isAtomic = nextType && schema.nodes[nextType] && schema.nodes[nextType].slate;
  if (!nextType || !isAtomic || prevType && prevType.indexOf(nextType) !== 0) {
    return prev;
  }
  return getTopMost(schema, change, next);
};
export default getTopMost;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL3V0aWxzL2dldC10b3AtbW9zdC5lczYiXSwibmFtZXMiOlsiZ2V0VG9wTW9zdCIsInNjaGVtYSIsImNoYW5nZSIsInByZXYiLCJuZXh0IiwidmFsdWUiLCJkb2N1bWVudCIsImdldFBhcmVudCIsImtleSIsInN0YXJ0QmxvY2siLCJuZXh0VHlwZSIsInR5cGUiLCJwcmV2VHlwZSIsImlzQXRvbWljIiwibm9kZXMiLCJzbGF0ZSIsImluZGV4T2YiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxNQUFELEVBQVNDLE1BQVQsRUFBaUJDLElBQWpCLEVBQTBCO0FBQzNDLE1BQU1DLE9BQU9ELE9BQ1RELE9BQU9HLEtBQVAsQ0FBYUMsUUFBYixDQUFzQkMsU0FBdEIsQ0FBZ0NKLEtBQUtLLEdBQXJDLENBRFMsR0FFVE4sT0FBT0csS0FBUCxDQUFhSSxVQUZqQjtBQUdBLE1BQU1DLFdBQVdOLFFBQVFBLEtBQUtPLElBQTlCO0FBQ0EsTUFBTUMsV0FBV1QsUUFBUUEsS0FBS1EsSUFBOUI7QUFDQSxNQUFNRSxXQUNKSCxZQUFZVCxPQUFPYSxLQUFQLENBQWFKLFFBQWIsQ0FBWixJQUFzQ1QsT0FBT2EsS0FBUCxDQUFhSixRQUFiLEVBQXVCSyxLQUQvRDtBQUVBLE1BQ0UsQ0FBQ0wsUUFBRCxJQUNBLENBQUNHLFFBREQsSUFFQ0QsWUFBWUEsU0FBU0ksT0FBVCxDQUFpQk4sUUFBakIsTUFBK0IsQ0FIOUMsRUFJRTtBQUNBLFdBQU9QLElBQVA7QUFDRDtBQUNELFNBQU9ILFdBQVdDLE1BQVgsRUFBbUJDLE1BQW5CLEVBQTJCRSxJQUEzQixDQUFQO0FBQ0QsQ0FoQkQ7QUFpQkEsZUFBZUosVUFBZiIsImZpbGUiOiJwYWNrYWdlcy9zbGF0ZS91dGlscy9nZXQtdG9wLW1vc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRUb3BNb3N0ID0gKHNjaGVtYSwgY2hhbmdlLCBwcmV2KSA9PiB7XG4gIGNvbnN0IG5leHQgPSBwcmV2XG4gICAgPyBjaGFuZ2UudmFsdWUuZG9jdW1lbnQuZ2V0UGFyZW50KHByZXYua2V5KVxuICAgIDogY2hhbmdlLnZhbHVlLnN0YXJ0QmxvY2s7XG4gIGNvbnN0IG5leHRUeXBlID0gbmV4dCAmJiBuZXh0LnR5cGU7XG4gIGNvbnN0IHByZXZUeXBlID0gcHJldiAmJiBwcmV2LnR5cGU7XG4gIGNvbnN0IGlzQXRvbWljID1cbiAgICBuZXh0VHlwZSAmJiBzY2hlbWEubm9kZXNbbmV4dFR5cGVdICYmIHNjaGVtYS5ub2Rlc1tuZXh0VHlwZV0uc2xhdGU7XG4gIGlmIChcbiAgICAhbmV4dFR5cGUgfHxcbiAgICAhaXNBdG9taWMgfHxcbiAgICAocHJldlR5cGUgJiYgcHJldlR5cGUuaW5kZXhPZihuZXh0VHlwZSkgIT09IDApXG4gICkge1xuICAgIHJldHVybiBwcmV2O1xuICB9XG4gIHJldHVybiBnZXRUb3BNb3N0KHNjaGVtYSwgY2hhbmdlLCBuZXh0KTtcbn07XG5leHBvcnQgZGVmYXVsdCBnZXRUb3BNb3N0O1xuIl19
