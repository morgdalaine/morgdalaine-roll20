
// update HP
on('change:hp change:hp_max sheet:opened', function() {
  getAttrs(['hp', 'hp_max'], function(values) {
    let cur = parseInt(values.hp) || 0;
    let max = parseInt(values.hp_max) || 0;
    let new_hp = (cur > max) ? max : (cur < 0 ? 0 : cur);
    updateAttrs = { hp: new_hp };
    setAttrs(updateAttrs);
    console.log(updateAttrs);
  });
});
