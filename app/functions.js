if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr)
    {
        return fn.call(null, arr[0], arr[1]);
    },

    speak : function(fn, obj)
    {
        return fn.call(obj);
    },

    functionFunction : function(str)
    {

    },

    makeClosures : function(arr, fn) {

    },

    partial : function(fn, str1, str2)
    {
        return function(str3)
        {
            return fn(str1, str2, str3);
        };
    },

    useArguments : function()
    {
        var result = null;
        for(var i=0; i<arguments.length; i++)
        {
            result = result + arguments[i];
        }
        return result;
    },

    callIt : function(fn)
    {
        var argsArr = Array.from(arguments);
        argsArr.splice(0,1);
        fn.apply(null, argsArr);
    },

    partialUsingArguments : function(fn)
    {
        var argsArr = Array.from(arguments);
        argsArr.splice(0,1);

        return function()
        {
            var argsArr2 = Array.from(arguments);
            return fn.apply(null, argsArr.concat(argsArr2));
        };
    },

    curryIt : function(fn)
    {

    }
  };
});
