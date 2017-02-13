if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit)
    {

    },

    base10: function(str)
    {
        return parseInt(str, 2);
    },

    convertToBinary: function(n)
    {
        return parseInt(n, 10).toString(2);
    },

    multiply: function(a, b)
    {
        var commonMultiplier = 1000000;

        a *= commonMultiplier;
        b *= commonMultiplier;

        return (a * b) / (commonMultiplier * commonMultiplier);
    }
  };
});

