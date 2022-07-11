
// udpate any current + _max value
const currentMax = (attr) => {
  getAttrs([attr, `${attr}_max`], function(v) {
    const current = parseInt(v[attr]) || 0;
    const maximum = parseInt(v[`${attr}_max`]) || 0;
    const fin_val = (current > maximum)
                      ? maximum
                      : (current < 0 ? 0 : current);
    const updateAttrs = {};
    updateAttrs[attr] = fin_val;
    updateAttrs[`${attr}_max`] = Math.max(0, maximum);
    setAttrs(updateAttrs);
    // console.log(updateAttrs);
  });
};

// TODO: disabling this auto-set feature for now, as it makes initial data entry (when max might be 0) confusing
// on('change:hp change:hp_max', function() {
//   currentMax('hp');
// });

// on('change:condition change:condition_max', function() {
//   currentMax('condition');
// });

// on('change:fuel change:fuel_max', function() {
//   currentMax('fuel');
// });
