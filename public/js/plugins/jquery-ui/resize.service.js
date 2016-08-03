'use strict'; 

window.jQuery = require('jquery'),
require('jquery-ui-bundle/jquery-ui.js'); 

module.exports = angular.module('plugins.resize.service',[])
.factory('resizeService', function(){

    var resizeService = {
    resizeEditor: function (aceEditor){ 
       var aceEditor = aceEditor; 
        function resizeAce(){
         console.log(this.aceEditor);
            aceEditor.resize();
        }
       
            jQuery('#editor1').on('resizestop', resizeAce);
        }
    } ;

    return resizeService
});