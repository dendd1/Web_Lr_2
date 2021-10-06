var accaunt_btn_1 = document.getElementById('accaunt');
var accaunt_btn_2 = document.getElementById('more_info');

accaunt_btn_1.onclick = change_info_active_btn_1;
accaunt_btn_2.onclick = change_info_active_btn_2;

function change_info_active_btn_1()
{
      document.getElementById('accaunt').classList.add('active');
      document.getElementById('accaunt_content').style.display = "flex";
      document.getElementById('more_info').classList.remove('active');
      document.getElementById('more_info_content').style.display = "none"; 
}
          
function change_info_active_btn_2()
{
      document.getElementById('accaunt').classList.remove('active');
      document.getElementById('accaunt_content').style.display = "none";
      document.getElementById('more_info').classList.add('active');
      document.getElementById('more_info_content').style.display = "flex";  
}