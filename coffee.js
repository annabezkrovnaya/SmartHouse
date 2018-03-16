"use strict";

function Coffee(name, programmList){
   Device.call(this, "Кофе", name);
   this._programmList = programmList;
}

Coffee.prototype = Object.create(Device.prototype);
Coffee.prototype.constructor = Coffee;

Coffee.prototype.getProgrammList = function(){
   return this._programmList;
};

Coffee.prototype.setProgrammList = function(programmList){
   this._programmList = programmList;
};
