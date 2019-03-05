import Route from '@ember/routing/route';


export default Route.extend({
  actions: {
    didTransition() {
      document.title = 'Pimp My Trip - Planifiez votre voyage';
    }
  },
  resetController(controller) {
    controller.setProperties({
      'firstname': '',
      'lastname':'',
      'gender':'',
      'age':'',
      'email':'',
      'confirmEmail':'',
      'phone':'',
      'street':'',
      'number':'',
      'zip':'',
      'city':'',
      'societyStreet':'',
      'societyNumber':'',
      'societyZip':'',
      'societyCity':'',
      'societyPhone':'',
      'societyTva':'',
      'societyFax':'',
      'societyName':'',
      'societyBankNumber':'',
      'tripDpStreet':'',
      'tripDpNumber':'',
      'tripDpZip':'',
      'tripDpCity':'',
      'tripRtStreet':'',
      'tripRtNumber':'',
      'tripRtZip':'',
      'tripRtCity':'',
      'tripPax':'',
      'quoteCom':'',
      })
    }
});
