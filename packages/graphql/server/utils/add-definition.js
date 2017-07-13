export default function (ast, type) {
    var def = ast.definitions || ast;
    var index = def.indexOf(def.find(function (x) { return x.name && type.name && x.name.value === type.name.value; }));
    if (index === undefined || index === -1) {
        def.push(type);
    }
    else {
        def[index] = type;
    }
};
//# sourceMappingURL=add-definition.js.map