
(async()=>{
  const target=document.getElementById("doc");
  const source=document.body.dataset.source;
  try{
    const response=await fetch(source,{cache:"no-store"});
    if(!response.ok) throw new Error("HTTP "+response.status);
    const text=(await response.text()).replace(/^\uFEFF/,"").trim();
    target.textContent=text;
    target.className="doc";
  }catch(err){
    target.textContent="Документ временно не загрузился. Пожалуйста, обновите страницу.";
    target.className="error";
    console.error(err);
  }
})();
