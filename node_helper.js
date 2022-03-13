/*! *****************************************************************************
  mmm-openbirdhouse
  Version 1.0.0

  A gallery client for Open-Birdhouse for the MagicMirror² platform.
  Please submit bugs at https://github.com/jalibu/MMM-OpenBirdhouse/issues

  (c) Jan.Litzenburger@gmail.com
  Licence: MIT

  This file is auto-generated. Do not edit.
***************************************************************************** */

"use strict";var e=require("node_helper"),t=require("node-fetch");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function r(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var o=r(e),i=n(t);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function c(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{s(r.next(e))}catch(e){i(e)}}function a(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((r=r.apply(e,t||[])).next())}))}module.exports=o.create({start(){console.log(`${this.name} helper method started...`)},socketNotificationReceived(e,t){return c(this,void 0,void 0,(function*(){if("OPENBIRDHOUSE_REQUEST"===e)try{const e=t,n=yield i.default(`${e.apiUrl}/api/gallery`);if(!n.ok)throw Error("API Request error");const r=yield n.json();this.sendSocketNotification("OPENBIRDHOUSE_RESPONSE",r)}catch(e){console.error(e.message),this.sendSocketNotification("OPENBIRDHOUSE_ERROR_RESPONSE",{type:"WARNING",message:e.message})}else console.warn(`${e} is invalid notification`)}))}});
