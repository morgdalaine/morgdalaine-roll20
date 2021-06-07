
// const button_list = ['playbook', 'moves'];
// button_list.forEach(button => {
//   on(`clicked:${button}`, function() {
//     console.log({
//       button: button,
//       value: eventinfo.newValue})
//     setAttrs({
//       page_mode: button
//     });
//   });
// });

on('change:mode_button', function(eventinfo) {
  console.log('mode fired')
  setAttrs({
    mode: eventinfo.newValue,
    modes_choice: 'off'
  });
});

on('change:page_mode', function(eventinfo) {
  console.log({page_mode: eventinfo.newValue})
  setAttrs({
    page_mode: eventinfo.newValue
  });
});
