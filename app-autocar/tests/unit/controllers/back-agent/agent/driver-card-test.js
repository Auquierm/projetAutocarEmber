import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | back-agent/agent/driver-card', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:back-agent/agent/driver-card');
    assert.ok(controller);
  });
});
