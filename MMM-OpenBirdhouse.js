/*! *****************************************************************************
  mmm-openbirdhouse
  Version 1.0.0

  A gallery client for Open-Birdhouse for the MagicMirror² platform.
  Please submit bugs at https://github.com/jalibu/MMM-OpenBirdhouse/issues

  (c) Jan.Litzenburger@gmail.com
  Licence: MIT

  This file is auto-generated. Do not edit.
***************************************************************************** */

!function(){"use strict";Module.register("MMM-OpenBirdhouse",{defaults:{updateIntervalInSeconds:120,apiUrl:"http://localhost"},getStyles:()=>["MMM-OpenBirdhouse.css"],getScripts:()=>["moment.js"],getTranslations:()=>({en:"translations/en.json",de:"translations/de.json"}),getTemplate:()=>"templates/MMM-OpenBirdhouse.njk",getTemplateData(){return{config:this.config,gallery:this.gallery,moment:moment}},start(){this.loadData(),this.scheduleUpdate(),this.updateDom()},scheduleUpdate(){setInterval((()=>{this.loadData()}),1e3*this.config.updateIntervalInSeconds)},loadData(){this.sendSocketNotification("OPENBIRDHOUSE_REQUEST",this.config)},socketNotificationReceived(t,e){"OPENBIRDHOUSE_RESPONSE"===t&&(this.gallery=e,console.log("Gallery",e),this.updateDom())}})}();
