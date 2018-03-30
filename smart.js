"use strict";
//main class for all devices connecting to smart house control system

function Smart (deviceSet, typeSet){
   this._deviceSet = deviceSet;
   this._typeSet = typeSet;
}

   Smart.prototype.getDeviceSet = function(){
      return this._deviceSet;
   };

   Smart.prototype.setDeviceSet = function(deviceSet){
      this._deviceSet = deviceSet;
   };

   Smart.prototype.getTypeSet = function(){
      return this._typeSet;
   };

   Smart.prototype.setTypeSet = function(typeSet){
      this._typeSet = typeSet;
   };

   Smart.prototype.addDevice = function(device){
      this._deviceSet.push(device);
   };

   Smart.prototype.updateDevice = function(name, deviceNew){
      for (var i = 0; i < this._deviceSet.length; i++) {
         if(this._deviceSet[i]._name === name){
            this._deviceSet[i] = deviceNew;
         }
      }
   };

   Smart.prototype.deleteDevice = function(name){
      for (var i = 0; i < this._deviceSet.length; i++) {
         if (this._deviceSet[i]._name === name) {
            this._deviceSet.splice(i, 1);
         }
      }
   };

   Smart.prototype.getDevice = function(name){
      for (var item in this._deviceSet) {
         if (this._deviceSet[item]._name === name) {
            return this._deviceSet[item];
         }
      }
   };

   Smart.prototype.readDeviceSet = function(){
      this._deviceSet = this._deviceSet.sort();
      return this._deviceSet;
   };

   Smart.prototype.readSpecificDeviceSet = function(type){
      function typer (deviceSet){
         return deviceSet._type == type;
      }
      var newSet = this._deviceSet.filter(typer);
      return newSet;
   };

   Smart.prototype.addType = function(type){
      function condition(value){
         return value === type;
      }
      if(this._typeSet.some(condition) == false) this._typeSet.push(type);
      else throw new typeError("Такой тип уже существует");
   };

   Smart.prototype.deleteType = function(type){
      for(var i = 0; i < this._typeSet.length; i++){
         if(this._typeSet[i] === type) {
            this._typeSet.splice(i, 1);
         }
         else {
            throw new typeError("Такого типа ещё не существует");
         }
      }
   };
