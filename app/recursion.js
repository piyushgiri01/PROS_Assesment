if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName)
    {
        var fileList = new Array();
        var dirList = new Array();

        function generateList(data, dirName)
        {
            if(data.dir != null)
            {
                dirList.push(data.dir);
            }

            var dataFiles = data.files;
            for(var i=0; i<dataFiles.length; i++)
            {
                if(typeof dataFiles[i] === "string")
                {
                    //alert('dirname :: '+ dirName + ' ::: ' + data.dir)
                    if(typeof dirName === 'undefined' && !fileList.includes(dataFiles[i]))
                    {
                        fileList.push(dataFiles[i]);
                    }
                    else if(dirList.includes(dirName) && !fileList.includes(dataFiles[i]))
                    {
                        fileList.push(dataFiles[i]);
                    }
                }
                else
                {
                    generateList(dataFiles[i], dirName);
                }
            }
            dirList.pop();
        }
        generateList(data, dirName);
        return fileList;
    },

    permute: function(arr) {

    }
  };
});
