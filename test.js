"use strict";
var edge = require('edge');

var errorFunction = edge.func(function () {/*
    using System.CodeDom.Compiler;
    using System.Threading.Tasks;
    using Microsoft.CSharp;

    public class Startup
    {
        public async Task<object> Invoke(object input)
        {
          CodeDomProvider provider1 = new CSharpCodeProvider();
          return "This code never gets executed"; 
        }
    }
*/});

errorFunction(null, function (error, result) {
    if (error) throw error;
    console.log(result);
});

