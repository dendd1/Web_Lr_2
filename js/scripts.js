var catalog_btn_1 = document.getElementById('catalog_btn_1');
var catalog_btn_2 = document.getElementById('catalog_btn_2');
var catalog_btn_3 = document.getElementById('catalog_btn_3');
var catalog_btn_4 = document.getElementById('catalog_btn_4');


catalog_btn_1.onclick = change_catalog_active_btn_1;
catalog_btn_2.onclick = change_catalog_active_btn_2;
catalog_btn_3.onclick = change_catalog_active_btn_3;
catalog_btn_4.onclick = change_catalog_active_btn_4;


function change_catalog_active_btn_1()
{
      document.getElementById('catalog_btn_1').classList.add('catalog_btn_active');
      document.getElementById('catalog_btn_2').classList.remove('catalog_btn_active');
      document.getElementById('catalog_btn_3').classList.remove('catalog_btn_active');
      document.getElementById('catalog_btn_4').classList.remove('catalog_btn_active');
}
function change_catalog_active_btn_2()
{
      document.getElementById('catalog_btn_1').classList.remove('catalog_btn_active');
      document.getElementById('catalog_btn_2').classList.add('catalog_btn_active');
      document.getElementById('catalog_btn_3').classList.remove('catalog_btn_active');
      document.getElementById('catalog_btn_4').classList.remove('catalog_btn_active');
}
function change_catalog_active_btn_3()
{
      document.getElementById('catalog_btn_1').classList.remove('catalog_btn_active');
      document.getElementById('catalog_btn_2').classList.remove('catalog_btn_active');
      document.getElementById('catalog_btn_3').classList.add('catalog_btn_active');
      document.getElementById('catalog_btn_4').classList.remove('catalog_btn_active');
}
function change_catalog_active_btn_4()
{
      document.getElementById('catalog_btn_1').classList.remove('catalog_btn_active');
      document.getElementById('catalog_btn_2').classList.remove('catalog_btn_active');
      document.getElementById('catalog_btn_3').classList.remove('catalog_btn_active');
      document.getElementById('catalog_btn_4').classList.add('catalog_btn_active');
}          
function show(state)
{
      document.getElementById('window_reg_auth').style.display = state;	
      document.getElementById('gray_mask').style.display = state; 		
}

function show_auth(state)
{
      document.getElementById('window_auth_reg').style.display = state;	
      document.getElementById('gray_mask').style.display = state; 		
}

function show_laptop_menu(state)
{
      document.getElementById('header_laptop_menu').style.display = state;	
      document.getElementById('gray_mask').style.display = state; 		
}



jQuery(document).ready(function($) {
      $('#scroll').lightSlider({
            auto:true,
            autoWidth:true,
            loop:true,
            onSliderLoad: function() {
                $('#autoWidth').removeClass('cS-hidden');
            } 
        }); 
        
});


jQuery(document).ready(function($) {
      $('#autoWidth').lightSlider({
            
            autoWidth:true,
            loop:true,
            onSliderLoad: function() {
                $('#autoWidth').removeClass('cS-hidden');
            } 
        }); 
        
});


jQuery(document).ready(function($) {
      $('#laptop_scroll').lightSlider({
            auto:true,
            autoWidth:true,
            loop:true,
            onSliderLoad: function() {
                $('#autoWidth').removeClass('cS-hidden');
            } 
        }); 
        
});
// 1

