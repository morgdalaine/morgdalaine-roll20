
on('sheet:opened', openSheet);

var openSheet = function() {
  // getSections is a function that I use to get all the repeating section attributes.
  // It iterates through each section and gets all the IDs, and adds those
  // full attribute names to the getArray that is passed to it; baseGet in this case.
  // Once all the sections have been parsed, it calls the callback function passed to it; updateSheet in this case
  getSections(updateSheet, baseGet);
},
updateSheet = function(getArray, sections) {
  const setObj = {};
  // getArray will have pretty much every attribute on the sheet in it.
  getAttrs([...getArray,'sheet_version'],(attr)=> {
    // Logic to determine what updates need to be done
    if (!attr.sheet_version) {
      // set sheet version if it doesn't exist
      attr.sheet_version = 0;
    }
    console.log(`current version: ${attr.sheet_version}`);

    if (attr.sheet_version*1 < 1.1) update_version_1_1(attr, setObj); // First update applied
    if (attr.sheet_version*1 < 2) update_version_2_0(attr, setObj);  // Update to Version 2
    set(setObj);
  });
},

// Each individual update function only cares about what updates it's responsible for.
// And changes to the attributes are added to both the setObj as well as the original attribute object.
// In this way, later update functions can see what has been done without having to waterfall setAttrs => getAttrs => setAttrs
update_version_2_0 = function(attr, setObj) {
  console.log('updating to version 2.0');

  setObj.mode = attr.sheet_type;
  setObj.page_mode = attr.sheetBloodlineTab
  setObj.character_name = attr.FamName;
  setObj.bloodline_select = attr.fSkinName

  // migrate moves
  setObj.move_custom                       = attr.Bloodline-Moves-Custom-Desc
  setObj.move_custom_desc                  = attr.Bloodline-Moves-Custom-Desc
  setObj.move_custom_name                  = attr.Bloodline-Moves-Custom-Name
  setObj.move_                             = attr.Moves-Assassin1
  setObj.move_                             = attr.Moves-Assassin2
  setObj.move_                             = attr.Moves-Assassin3
  setObj.move_                             = attr.Moves-Assassin4
  setObj.move_                             = attr.Moves-Assassin5
  setObj.move_                             = attr.Moves-Bonded1
  setObj.move_                             = attr.Moves-Bonded2
  setObj.move_                             = attr.Moves-Bonded3
  setObj.move_                             = attr.Moves-Bonded4
  setObj.move_                             = attr.Moves-Bonded5
  setObj.move_                             = attr.Moves-Captain1
  setObj.move_                             = attr.Moves-Captain2
  setObj.move_                             = attr.Moves-Captain3
  setObj.move_                             = attr.Moves-Captain4
  setObj.move_                             = attr.Moves-Captain5
  setObj.move_communication_devices        = attr.Moves-DefendersOfTomorrow1
  setObj.move_death_ray                    = attr.Moves-DefendersOfTomorrow2
  setObj.move_electric_eye                 = attr.Moves-DefendersOfTomorrow3
  setObj.move_out_of_this_world            = attr.Moves-DefendersOfTomorrow4
  setObj.move_science                      = attr.Moves-DefendersOfTomorrow5
  setObj.move_good_measure                 = attr.Moves-FateDealers1
  setObj.move_grim_portents                = attr.Moves-FateDealers2
  setObj.move_soothsayers_for_hire         = attr.Moves-FateDealers3
  setObj.move_switcheroo                   = attr.Moves-FateDealers4
  setObj.move_two_faced_coin               = attr.Moves-FateDealers5
  setObj.move_plant_whisperer              = attr.Moves-GuardiansOfNature1
  setObj.move_medicinal_herbs              = attr.Moves-GuardiansOfNature2
  setObj.move_natural_vigour               = attr.Moves-GuardiansOfNature3
  setObj.move_panacea                      = attr.Moves-GuardiansOfNature4
  setObj.move_phases_of_the_moon           = attr.Moves-GuardiansOfNature5
  setObj.move_dark_legacy                  = attr.Moves-HalfDamned1
  setObj.move_shadows_of_humanity          = attr.Moves-HalfDamned2
  setObj.move_more_than_human              = attr.Moves-HalfDamned3
  setObj.move_one_of_the_horde             = attr.Moves-HalfDamned4
  setObj.move_voice_of_the_regent          = attr.Moves-HalfDamned5
  setObj.move_avarice                      = attr.Moves-HiddenHand1
  setObj.move_experimental_weaponry        = attr.Moves-HiddenHand2
  setObj.move_bodyguard                    = attr.Moves-HiddenHand3
  setObj.move_opulence                     = attr.Moves-HiddenHand4
  setObj.move_a_web_of_influence           = attr.Moves-HiddenHand5
  setObj.move_holy_vanguard                = attr.Moves-HolyChurch1
  setObj.move_shield_of_faith              = attr.Moves-HolyChurch2
  setObj.move_stoke_the_flame              = attr.Moves-HolyChurch3
  setObj.move_martyrdom                    = attr.Moves-HolyChurch4
  setObj.move_the_flesh_is_weak            = attr.Moves-HolyChurch5
  setObj.move_                             = attr.Moves-Joker1
  setObj.move_                             = attr.Moves-Joker2
  setObj.move_                             = attr.Moves-Joker3
  setObj.move_                             = attr.Moves-Joker4
  setObj.move_                             = attr.Moves-Joker5
  setObj.move_                             = attr.Moves-Knight1
  setObj.move_                             = attr.Moves-Knight2
  setObj.move_                             = attr.Moves-Knight3
  setObj.move_                             = attr.Moves-Knight4
  setObj.move_                             = attr.Moves-Knight5
  setObj.move_audacious                    = attr.Moves-LegendaryHeroes1
  setObj.move_defeat_means_friendship      = attr.Moves-LegendaryHeroes2
  setObj.move_our_town                     = attr.Moves-LegendaryHeroes3
  setObj.move_secret_technique             = attr.Moves-LegendaryHeroes4
  setObj.move_the_will_to_fight            = attr.Moves-LegendaryHeroes5
  setObj.move_dimensional_relocation       = attr.Moves-Magi1
  setObj.move_arcane_library               = attr.Moves-Magi2
  setObj.move_empowered_wards              = attr.Moves-Magi3
  setObj.move_eldritch_insight             = attr.Moves-Magi4
  setObj.move_a_miracle_of_science         = attr.Moves-Magi5
  setObj.move_                             = attr.Moves-Mascot1
  setObj.move_                             = attr.Moves-Mascot2
  setObj.move_                             = attr.Moves-Mascot3
  setObj.move_                             = attr.Moves-Mascot4
  setObj.move_                             = attr.Moves-Mascot5
  setObj.move_                             = attr.Moves-Medic1
  setObj.move_                             = attr.Moves-Medic2
  setObj.move_                             = attr.Moves-Medic3
  setObj.move_                             = attr.Moves-Medic4
  setObj.move_                             = attr.Moves-Medic5
  setObj.move_                             = attr.Moves-Mystic1
  setObj.move_                             = attr.Moves-Mystic2
  setObj.move_                             = attr.Moves-Mystic3
  setObj.move_                             = attr.Moves-Mystic4
  setObj.move_                             = attr.Moves-Mystic5
  setObj.move_open_1_desc                  = attr.Moves-OpenBloodline-Desc1
  setObj.move_open_2_desc                  = attr.Moves-OpenBloodline-Desc2
  setObj.move_open_3_desc                  = attr.Moves-OpenBloodline-Desc3
  setObj.move_open_4_desc                  = attr.Moves-OpenBloodline-Desc4
  setObj.move_open_5_desc                  = attr.Moves-OpenBloodline-Desc5
  setObj.move_open_1_name                  = attr.Moves-OpenBloodline-Name1
  setObj.move_open_2_name                  = attr.Moves-OpenBloodline-Name2
  setObj.move_open_3_name                  = attr.Moves-OpenBloodline-Name3
  setObj.move_open_4_name                  = attr.Moves-OpenBloodline-Name4
  setObj.move_open_5_name                  = attr.Moves-OpenBloodline-Name5
  setObj.move_open_1                       = attr.Moves-OpenBloodline1
  setObj.move_open_2                       = attr.Moves-OpenBloodline2
  setObj.move_open_3                       = attr.Moves-OpenBloodline3
  setObj.move_open_4                       = attr.Moves-OpenBloodline4
  setObj.move_open_5                       = attr.Moves-OpenBloodline5
  setObj.move_                             = attr.Moves-Packrat1
  setObj.move_                             = attr.Moves-Packrat2
  setObj.move_                             = attr.Moves-Packrat3
  setObj.move_                             = attr.Moves-Packrat4
  setObj.move_                             = attr.Moves-Packrat5
  setObj.move_                             = attr.Moves-Professor1
  setObj.move_                             = attr.Moves-Professor2
  setObj.move_                             = attr.Moves-Professor3
  setObj.move_                             = attr.Moves-Professor4
  setObj.move_                             = attr.Moves-Professor5
  setObj.move_                             = attr.Moves-Reckoner1
  setObj.move_                             = attr.Moves-Reckoner2
  setObj.move_                             = attr.Moves-Reckoner3
  setObj.move_                             = attr.Moves-Reckoner4
  setObj.move_                             = attr.Moves-Reckoner5
  setObj.move_                             = attr.Moves-Slayer1
  setObj.move_                             = attr.Moves-Slayer2
  setObj.move_                             = attr.Moves-Slayer3
  setObj.move_                             = attr.Moves-Slayer4
  setObj.move_                             = attr.Moves-Slayer5

  attr = {...attr,...setObj};
  setObj.sheet_version = 2;
  console.log('update finished: welcome to version 2.0');
},

update_version_1_1 = function(attr, setObj) {
  let enableItems = Object.keys(attr).filter((a)=>/attack_enable_item/.test(a));
  enableItems.forEach((check)=> {
    let macroName = check.replace(/attack_enable_item/,'attack_macro');
    if (/@/.test(attr[check])) {
      setObj[check] = 1;
      setObj[macroName] = ` {{d20=[[@ {advantage_state} $ {attr.character_type === 'pc' ? '+ @ {attack_ability} + @ {action_proficiency}' : ''} + 0@ {attack_bonus}]]}}`;
    }else if (!attr[check]*1) {
      setObj[macroName] = ' ';
      setObj[check] = 0;
    }
  });
  setObj.sheet_version = 1.1;
  attr = {...attr,...setObj};
};
