if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end)
    {
        var id;
        function timer ()
        {
          console.log(start++);
          //start++;
          if (start <= end)
          {
              id = setTimeout(timer, 100);
          }
        }
        timer();

        return {
            cancel: function ()
            {
               clearTimeout(id);
               id = null;
            }
        };
    }
  };
});