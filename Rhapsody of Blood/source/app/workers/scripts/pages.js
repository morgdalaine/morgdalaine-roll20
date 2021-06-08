
on('change:bloodline_page_button', function(eventinfo) {
  console.log({bloodline_page: eventinfo.newValue})
  setAttrs({
    bloodline_page: eventinfo.newValue
  });
});


on('change:explorer_page_button', function(eventinfo) {
  console.log({explorer_page: eventinfo.newValue})
  setAttrs({
    explorer_page: eventinfo.newValue
  });
});


on('change:mode_button', function(eventinfo) {
  console.log('mode fired')
  setAttrs({
    mode: eventinfo.newValue,
    modes_choice: 'off'
  });
});
