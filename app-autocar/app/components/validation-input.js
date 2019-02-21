import Component from '@ember/component';

export default Component.extend({
  pwdConfirm:'',
  test : false,
  actions : {
    test1 : function() {
    let test = this.$()[0].children[0];
    // console.log(test);
    test.classList.add('test1');
    }
  }
});
