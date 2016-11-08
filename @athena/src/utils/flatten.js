module.exports = function flatten(l, options) {
   if(!options) options = {};
   if(!options.parentId) options.parentId = "parentId";
   if(!options.id) options.id = "id";

   var graph = l.slice();
   var i, l,
      nodes=[];

   function helper (node, parent, index) {
      var i, limit;
      if(parent){
         node[options.parentId] = parent[options.id];
      }
      else{
         node[options.parentId] = null;
      }
      node.order = !index ? 0 : index;
      if( node.children) {
         for (i = 0, limit = node.children.length; i < limit; i++) {
            helper(node.children[i], node, i);
         }
      }
      delete node.children;
      nodes.push(node);
   }

   for (i = 0, l = graph.length; i < l; i++) {
      helper(graph[i], null, i);
   }

   return nodes;
}
