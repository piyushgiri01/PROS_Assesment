if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj)
    {
       return fn.call(obj);
    },

    alterObjects : function(constructor, greeting)
    {
        constructor.prototype.greeting = greeting;
    },

    iterate : function(obj)
    {
        var result = new Array();
        for (var prop in obj)
        {
            if(!obj.hasOwnProperty(prop))
            {
                continue;
            }
            else
            {
                var newObj = new Object();
                newObj[prop] = obj[prop];
                result.push(newObj);
            }
        }
        return result;
    }
  };
});
