if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item)
    {
        var index = arr.indexOf(item);
        return index;
    },

    sum : function(arr)
    {
        var sum = 0;
        for (var i=0; i<arr.length; i++)
        {
            sum = sum + arr[i];
        }
        return sum;
    },

    remove : function(arr, item)
    {
        for(var i = 0; i<arr.length; i++)
        {
            if (arr[i] ==  item)
                {
                    arr.splice(i, 1);
                }
        }
        return arr;
    },

    removeWithoutCopy : function(arr, item)
    {
        for(var i = 0; i<arr.length; i++)
        {
            if (arr[i] ==  item)
            {
                arr.splice(i,1);
                this.removeWithoutCopy(arr, item)
                break;
            }
        }
        return arr;
    },

    append : function(arr, item)
    {
        arr.push(item);
        return arr
    },

    truncate : function(arr)
    {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item)
    {
        arr.splice(0, 0, item);
        return arr;
    },

    curtail : function(arr)
    {
        arr.splice(0,1);
        return arr;
    },

    concat : function(arr1, arr2)
    {
        var concatArr = arr1.concat(arr2);
        return concatArr;
    },

    insert : function(arr, item, index)
    {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item)
    {
        var count = 0;
        for (var i = 0; i<arr.length; i++)
        {
          if (arr[i] == item)
          {
            count++;
          }
        }
        return count;
    },

    duplicates : function(arr)
    {
        var duplicateArr = new Array();
        for(var i=0; i<arr.length; i++)
        {
            if(this.count(arr, arr[i]) > 1)
            {
                duplicateArr.push(arr[i]);
                this.removeWithoutCopy(arr, arr[i]);
            }
        }
        return duplicateArr;
    },

    square : function(arr)
    {
        var squareArr = new Array();
        for(var i=0; i<arr.length; i++)
        {
            var square = arr[i] * arr[i];
            squareArr.push(square);
        }
        return squareArr;
    },

    findAllOccurrences : function(arr, target)
    {
        var indexArr = new Array();
        for(var i=0; i<arr.length; i++)
        {
            if(arr[i] == target)
                {
                    indexArr.push(i);
                }
        }
        return indexArr;
    }
  };
});
