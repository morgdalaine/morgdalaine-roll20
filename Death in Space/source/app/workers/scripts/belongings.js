
// update carry
on('change:body sheet:opened', function() {
  getAttrs(['body'], function(values) {
    let body = parseInt(values.body) || 0;
    let carry = 12 + body;
    updateAttrs = { carry: carry };
    setAttrs(updateAttrs);
    console.log(updateAttrs);
  });
});
