import EmberObject from '@ember/object';
import TransitionChangedPasswordMixin from 'ember-autocar/mixins/transition-changed-password';
import { module, test } from 'qunit';

module('Unit | Mixin | transitionChangedPassword', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let TransitionChangedPasswordObject = EmberObject.extend(TransitionChangedPasswordMixin);
    let subject = TransitionChangedPasswordObject.create();
    assert.ok(subject);
  });
});
