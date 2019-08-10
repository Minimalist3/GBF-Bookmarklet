javascript:(function(){
  if ( ! window.location.hash.startsWith("#party/index/")) {
    alert('Please go to a GBF Party screen');
    return
  }
  let obj = {
    p: parseInt(window.Game.view.deck_model.attributes.deck.pc.job.master.id, 10),
    ps: [],  // Skills
    c: [],
    cl: [],  // Level
    cs: [],  // Stars
    cp: [],  // Pluses
    cwr: [], // Waifu ring
    s: [],
    sl: [],  // Level
    ss: [],  // Stars
    sp: [],  // Pluses
    w: [],
    wl: [],  // Skill level
    wsn: [], // Skill names
    wll: [], // Level
    wp: [],  // Pluses
    v: 4
  };

  for (let i=0; i<4-window.Game.view.deck_model.attributes.deck.pc.set_action.length; i++) {
    obj.ps.push(null)
  }
  Object.values(window.Game.view.deck_model.attributes.deck.pc.set_action).forEach(e => {
    obj.ps.push(e.id ? e.name.trim() : null)
  });

  Object.values(window.Game.view.deck_model.attributes.deck.npc).forEach(e => {
    obj.c.push(e.master ? parseInt(e.master.id.slice(0, -3), 10) : null);
    obj.cl.push(e.param ? parseInt(e.param.level, 10) : null);
    obj.cs.push(e.param ? parseInt(e.param.evolution, 10) : null);
    obj.cp.push(e.param ? parseInt(e.param.quality, 10) : null);
    obj.cwr.push(e.param ? e.param.has_npcaugment_constant : null);
  });

  Object.values(window.Game.view.deck_model.attributes.deck.pc.summons).forEach(e => {
    obj.s.push(e.master ? parseInt(e.master.id.slice(0, -3), 10) : null);
    obj.sl.push(e.param ? parseInt(e.param.level, 10) : null);
    obj.ss.push(e.param ? parseInt(e.param.evolution, 10) : null);
    obj.sp.push(e.param ? parseInt(e.param.quality, 10) : null)
  });

  Object.values(window.Game.view.deck_model.attributes.deck.pc.weapons).forEach(e => {
    obj.w.push(e.master ? parseInt(e.master.id.slice(0, -2), 10) : null);
    obj.wl.push(e.param ? parseInt(e.param.skill_level, 10) : null);
    obj.wsn.push(e.param ? [
      e.skill1 ? e.skill1.name : null,
      e.skill2 ? e.skill2.name : null,
      e.skill3 ? e.skill3.name : null
    ] : null);
    obj.wll.push(e.param ? parseInt(e.param.level, 10) : null);
    obj.wp.push(e.param ? parseInt(e.param.quality, 10) : null)
  });

  //alert(JSON.stringify(obj));
  window.open('https://www.granblue.party/builder?l=' + encodeURIComponent(JSON.stringify(obj)), '_newtab');
}())