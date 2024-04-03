const sideBarBtn = document.getElementById("menuBtn");
const isSideBarVisible = false;

sideBarBtn.addEventListener(onclick,function closeMenu(){
  const sidebar = document.getElementById('sidebar');
  
  if(isSideBarVisible= false){
    sidebar.style.display = 'none';
  }

})