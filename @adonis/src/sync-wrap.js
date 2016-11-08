import React, {Component, PropTypes, createElement} from "react";
import {observer} from 'mobx-react';
import {extendObservable, autorun, toJSON, observable, observe, transaction} from 'mobx';
import shortId from 'shortid';

var clientId = shortId.generate();
export default function Wrap(component, collection, query) {
   var Comp = observer(component);
   class Wrapped extends Component {
      static contextTypes = {
         apiClient: PropTypes.object.isRequired,
         io: PropTypes.object.isRequired,
         collections: PropTypes.object.isRequired
      }

      componentDidMount() {
         const {io, apiClient, collections} = this.context;
         var suppressIo = false;

         var empty = {};
         collections[collection].schema.forEach((property)=> {
            empty[property.key] = null;
         });

         //query(apiClient).then(data=>{
         ioClient(io).get({model: collection, where: {text: null}}).then(data=> {
            store.list = data.map(x=>({...empty, ...x}));
            store.list.forEach((x)=> {
               observe(x, (change)=> {
                  if (suppressIo) return;
                  console.log('Propagate');
                  io.emit('changed', {
                     id: change.object.id,
                     property: change.name,
                     value: change.object[change.name],
                     version: (change.object.version || 0) + 1
                  });
               });
            });
         });
         io.on('changed', (change)=> {
            var x = store.list.filter(x=>change.id === x.id);
            if (x.length) {
               suppressIo = true;
               console.log('Incoming');
               transaction(() => {
                  x[0].version = change.version;
                  x[0][change.property] = change.value;
               });
               suppressIo = false;
            }
         });
      }

      render() {
         const {collections} = this.context;
         return <Comp {...this.props} store1={store} collection={collections[collection]}/>
      }
   }
   Wrapped.onEnter = component.onEnter;
   Wrapped.onLeave = component.onLeave;
   return Wrapped;
}


function CollectionStore() {
   this.collections = {};
   extendObservable(this, {
      list: [],
      query: {}
   });
   autorun(()=> {
      console.log(toJSON(this.list));
   });

   this.set = function(item, patch){

   };
   this.push = function(list, item){

   };
}
var store = new CollectionStore();

setInterval(()=> {
   if (store.list.length > 0) {
      //console.log('Update');
      //store.list[0].name = 'Helau'+new Date()+' from ' + clientId;
   }
}, 10000);


function ioClient(io) {
   return {
      get: function (q) {
         return new Promise(function (resolve, reject) {
            io.emit('get', q, function (err, data) {
               if (err) reject(err);
               else resolve(data);
            });
         });
      }
   }
}
