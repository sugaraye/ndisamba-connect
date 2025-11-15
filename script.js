// script.js - basic search + interactivity
document.addEventListener('DOMContentLoaded', function(){
  const cards = Array.from(document.querySelectorAll('.card'));
  const input = document.getElementById('searchInput');
  if(input){
    input.addEventListener('input', function(e){
      const q = e.target.value.toLowerCase().trim();
      cards.forEach(c => {
        const title = (c.dataset.title||'').toLowerCase();
        const txt = (c.dataset.text||'').toLowerCase();
        if(!q || title.includes(q) || txt.includes(q)) c.style.display='flex'; else c.style.display='none';
      });
    });
  }
});