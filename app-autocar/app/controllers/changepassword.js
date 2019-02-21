import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
  session: service(),
  ajax: service(),
  pwd:'1234567',
  confirmPwd:'1234567',
  pwdDiff : false,
  actions: {
    async changePwd(event){
      event.preventDefault()
      let {pwd, confirmPwd} = this
      console.log(pwd, confirmPwd);
      // if(pwd === confirmPwd){
      //   await this.ajax.patch(`/auth/${this.session.data.authenticated.id}`, {
      //     data : {
      //       password : confirmPwd
      //     }
      //   });
      //   this.session.invalidate();
      //   await this.transitionToRoute("/login")
      // }else{
      //   this.set('pwdDiff', true);
      // }
    },
    samePwd : function(){
      let {pwd, confirmPwd} = this;
      console.log('ici');
      if(pwd !== confirmPwd){
        this.set('pwdDiff', true);
        console.log(this.pwdDiff);
      }
    }
  }
});
