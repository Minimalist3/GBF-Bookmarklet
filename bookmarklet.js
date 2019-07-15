javascript:(function(){
  let obj = {
    c: [],
    s: [],
    w: []
  };

  document.querySelectorAll('.img-npc').forEach(e => {
    obj.c.push(e.src ? e.src.match(/\/([0-9]{7})0{3}_/)[1] : null)
  });
 
  document.querySelectorAll('.img-summon-main').forEach(e => {
    obj.s.push(e.src ? e.src.match(/\/([0-9]{7})0{3}/)[1] : null)
  });
  document.querySelectorAll('.img-summon-sub').forEach(e => {
    obj.s.push(e.src ? e.src.match(/\/([0-9]{7})0{3}/)[1] : null)
  });
 
  document.querySelectorAll('.img-weapon-main').forEach(e => {
    obj.w.push(e.src ? e.src.match(/\/([0-9]{8})0{2}\.jpg/)[1] : null)
  });
  document.querySelectorAll('.img-weapon-sub').forEach(e => {
    obj.w.push(e.src ? e.src.match(/\/([0-9]{8})0{2}\.jpg/)[1] : null)
  });

  window.open('https://www.granblue.party/builder?l=' + encodeURIComponent(JSON.stringify(obj)), '_newtab');
}())