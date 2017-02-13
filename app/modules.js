if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2)
    {
        var returnModuleObj = {
            name : str2,
            greeting : str1,
            sayIt : function()
            {
                var greetingMsg = this.greeting + ", " + this.name;
                return greetingMsg;
            }
        }
        return returnModuleObj;
    }
  };
});

