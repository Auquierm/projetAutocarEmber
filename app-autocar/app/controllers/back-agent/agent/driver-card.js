import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
  ajax : service(),
  session : service(),
  // folder : this.driver.id,
  actions : {
    async linkFolderToDriver(event){
      // event.preventDefault();
      await this.ajax.patch(`/quotes/${this.get('folderNum')}`, {
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${this.session.data.authenticated.response.accessToken}`
        },
        data: {
          nameDriver : this.get('driver.id')
        }
      });
      await this.ajax.patch(`/drivers/${this.get('driver.id')}`,{
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${this.session.data.authenticated.response.accessToken}`
        },
        data: {
          tripToDo : this.get('folderNum')
        }
      });
      // this.get('quote').reload();
    },
    selectOption(params, option){
      let numFolderSelected = (option.target.value).split('-')[0].trim();
      this.set(params, numFolderSelected);
      console.log(this.get('folderNum'));
    },
  }
});
