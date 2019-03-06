import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    didTransition() {
      document.title = 'Agent - Créer chauffeur';
    }
  },
  resetController(controller) {
    controller.setProperties({
      'firstname': '',
      'lastname':'',
      'gender':'',
      'age':'',
      'email':'',
      'phone':'',
      'street':'',
      'number':'',
      'zip':'',
      'city':'',
      'servicePhone': '',
      'language': '',
      'numPermis': '',
      'medicalDate': '',
      'capDate': '',
      'tripDone': '',
      'tripToDo': '',
      'surveyNote': '',
      })
    }
});
