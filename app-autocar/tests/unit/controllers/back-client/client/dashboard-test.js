import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | back-client/client/dashboard', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:back-client/client/dashboard');
    assert.ok(controller);
  });
});