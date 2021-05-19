
// update life support
const life_support = ['life_support_0', 'life_support_1', 'life_support_2', 'life_support_3', 'life_support_4', 'life_support_5', 'life_support_6', 'life_support_7'];
life_support.forEach(item => on(`change:${item}`, eventInfo => updateLifeSupport(item, eventInfo.newValue)));

const updateLifeSupport = (stat, new_value) => {
  var index = parseInt(stat.slice(-1)) || 0;
  var updateAttrs = {};

  // fill everything less than stat
  if (new_value == 1) {
    for (let n = 0; n < index; n++) {
      updateAttrs[`life_support_${n}`] = 1;
    }
  }
  // remove everything greater than
  else {
    for (let n = index; n < life_support.length; n++) {
      updateAttrs[`life_support_${n}`] = 0;
    }
  }

  setAttrs(updateAttrs);
  console.log(updateAttrs);
}
