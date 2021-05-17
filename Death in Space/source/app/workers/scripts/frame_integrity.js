
// update life support
const frame_integrity = ['frame_integrity_0', 'frame_integrity_1', 'frame_integrity_2', 'frame_integrity_3', 'frame_integrity_4', 'frame_integrity_5', 'frame_integrity_6', 'frame_integrity_7', 'frame_integrity_8', 'frame_integrity_9'];
frame_integrity.forEach(item => on(`change:${item}`, eventInfo => updateFrameIntegrity(item, eventInfo.newValue)));

const updateFrameIntegrity = (stat, new_value) => {
  var index = parseInt(stat.slice(-1)) || 0;
  var updateAttrs = {};

  // fill everything less than stat
  if (new_value == 1) {
    for (let n = 0; n < index; n++) {
      updateAttrs[`frame_integrity_${n}`] = 1;
    }
  }
  // remove everything greater than
  else {
    for (let n = index; n < frame_integrity.length; n++) {
      updateAttrs[`frame_integrity_${n}`] = 0;
    }
  }

  setAttrs(updateAttrs);
  console.log(updateAttrs);
}
