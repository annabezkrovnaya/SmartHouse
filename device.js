"use strict";
//main class for all devices connecting to smart house control system

function Device (type, name){
   this._type = type;
   this._name = name;
   this._currentState = 0;
}

   Device.prototype.getType = function(){
      return this._type;
   };

   Device.prototype.setType = function(type){
      this._type = type;
   };

   Device.prototype.getName = function(){
      return this._name;
   };

   Device.prototype.setName = function(name){
      this._name = name;
   };

   Device.prototype.getCurrentState = function(){
      return this._currentState;
   };

   Device.prototype.switchON = function(){
      this._currentState = 1;
   };

   Device.prototype.switchOFF = function(){
      this._currentState = 0;
   };

   Device.prototype.timer = function(time){
      var mils = time * 1000;
      switch (this._currentState) {
         case 0:
            setTimeout(function(){device.switchON()}, mils);
            break;
         case 1:
            setTimeout(function(){device.switchOFF()}, mils);
            break;
      }
   };
