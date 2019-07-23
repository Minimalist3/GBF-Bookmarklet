javascript:(function(){
  if ( ! window.location.hash.startsWith("#party/index/")) {
    alert('Please go to a GBF Party screen');
    return
  }
  let obj = {
    p: window.Game.view.deck_model.attributes.deck.pc.job.master.id,
    c: [],
    cl: [],
    s: [],
    w: [],
    wl: []
  };

  Object.keys(window.Game.view.deck_model.attributes.deck.npc).forEach(function (i) {
	  obj.c.push(window.Game.view.deck_model.attributes.deck.npc[i].master.id.substring(0,7));
	  obj.cl.push(window.Game.view.deck_model.attributes.deck.npc[i].param.level);
  });
 
  Object.keys(window.Game.view.deck_model.attributes.deck.pc.summons).forEach(function (i) {
	  obj.s.push(window.Game.view.deck_model.attributes.deck.pc.summons[i].master.id.substring(0,7));
  });
  
  Object.keys(window.Game.view.deck_model.attributes.deck.pc.weapons).forEach(function (i) {
	  obj.w.push(window.Game.view.deck_model.attributes.deck.pc.weapons[i].master.id.substring(0,8));
	  obj.wl.push(window.Game.view.deck_model.attributes.deck.pc.weapons[i].param.skill_level);
  });

  window.open('https://www.granblue.party/builder?l=' + encodeURIComponent(JSON.stringify(obj)), '_newtab');
}())
