/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
var dalLoadLanguage=function(e){var n;e&&e.fn&&e.fn.select2&&e.fn.select2.amd&&(n=e.fn.select2.amd),n.define("select2/i18n/nb",[],function(){return{errorLoading:function(){return"Kunne ikke hente resultater."},inputTooLong:function(e){return"Vennligst fjern "+(e.input.length-e.maximum)+" tegn"},inputTooShort:function(e){return"Vennligst skriv inn "+(e.minimum-e.input.length)+" tegn til"},loadingMore:function(){return"Laster flere resultater…"},maximumSelected:function(e){return"Du kan velge maks "+e.maximum+" elementer"},noResults:function(){return"Ingen treff"},searching:function(){return"Søker…"},removeAllItems:function(){return"Fjern alle elementer"}}}),n.define,n.require},event=new CustomEvent("dal-language-loaded",{lang:"nb"});document.dispatchEvent(event);