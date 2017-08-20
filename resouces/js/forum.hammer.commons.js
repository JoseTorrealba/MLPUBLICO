/**
* Archivo: forum.hammer.commons.js
* Autor: Darmin Cid A. - Tecnova
* fecha Creacion: 2017-07-14
*
* Control del cambios
*  
*     FECHA   |     AUTOR         Cambio/mejora
* ---------------------------------------------------------------------------------------------------------------------------    
*  2017-07-26 |  Darmin Cid     - Fix a fxCtrlCmBx_addDefaultOption cuando <SELECT> no tiene opciones
*             |                 - 
*             |                 - 
*             |                 - 
* ---------------------------------------------------------------------------------------------------------------------------    
*/
if (typeof jQuery == 'undefined') {
   alert('JQuery no esta cargado');

} else  {
   
   console.info("[forum.hammer.commons.js] Iniciando libreria Javascript");
 
   var REQUEST_METHOD_IS_GET = true;
   
   
   // funcion que agrega o cambia el texto de los valores por defecto de los combobox (dropdown list) 
   function fxCtrlCmBx_addDefaultOption(oCmBxTargetName, pDefaulValue='0', pDefaultText='- TODOS -') {
      console.info("[fxCtrlCmBx_addDefaultOption] > > > Entering to check [" + oCmBxTargetName + "] object, Rq es GET?:" + REQUEST_METHOD_IS_GET);
      
      var valueEmpty="";
      var valueZero="0";
      var bMoveCmbxIndex= true;
      var oTarget = $(oCmBxTargetName)[0];
      
      if(oTarget === undefined) {
            console.error("[fxCtrlCmBx_addDefaultOption]    ERROR!, objecto no encontrado:[" + oCmBxTargetName + "]");
            return; 
      }
      console.info("[fxCtrlCmBx_addDefaultOption]    Current SelectedIndex is:" + oTarget.options.selectedIndex );
      
      if(pDefaulValue === undefined) pDefaulValue='0';
      if(pDefaultText === undefined) pDefaultText='- TODOS -';

      if ( oTarget.options.length>=1 && (
                                             ((oTarget.options[0].value == valueEmpty || oTarget.options[0].value == valueZero) && oTarget.options[0].value != pDefaulValue)
                                            ||(oTarget.options[0].value == pDefaulValue && oTarget.options[0].text != pDefaultText)
                                          )

         ){
          console.info("[fxCtrlCmBx_addDefaultOption]    Changing first element to default values");
          
          oTarget.options[0].value=pDefaulValue;
          oTarget.options[0].text =pDefaultText;
      }

      if (!REQUEST_METHOD_IS_GET && oTarget.options.selectedIndex != 0){
         bMoveCmbxIndex = false;
      }

      if ( oTarget.options.length==0 || (oTarget.options.length>=1 && oTarget.options[0].value != pDefaulValue)){
          console.info("[fxCtrlCmBx_addDefaultOption]    Creating a new option default for: " + oCmBxTargetName );
          $(oCmBxTargetName).prepend(new Option(pDefaultText,pDefaulValue));
      }

      if (bMoveCmbxIndex && oTarget.options.selectedIndex != 0){
         console.info("[fxCtrlCmBx_addDefaultOption]    Setting selectedIndex=0");
         oTarget.options.selectedIndex =0;
      }

      console.info("[fxCtrlCmBx_addDefaultOption] ...................ending to check [" + oCmBxTargetName + "] object" );
   }

   console.info("[forum.hammer.commons.js] libreria Javascript cargada con exito.");
}
