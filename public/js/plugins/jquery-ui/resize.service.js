'use strict'; 

window.jQuery = require('jquery'),
require('jquery-ui-bundle/jquery-ui.js'); 

module.exports = angular.module('plugins.resize.service',[])
.factory('resizeService', function($window){
    var win = jQuery($window);
    var resizeService = {

    resizeEditor: function (aceEditor){ 
       var aceEditor = aceEditor; 
        function resizeAce(){
         
            aceEditor.resize();
        }
       
            jQuery('#editor1').on('resizestop', resizeAce);
        },

    resetPanes: function resetPanes(){

        function testResize(){
            
            
         console.log('window resized'); 
        }
     
      win.resize(testResize);
      
    },

    stopBubble: function stopBubble(){
        jQuery('#editor1, #preview1').on('resize', function(event, ui){
            console.log('in stop bubble'); 
            event.stopPropagation();
        });
    }

   
    } ;

    return resizeService
});