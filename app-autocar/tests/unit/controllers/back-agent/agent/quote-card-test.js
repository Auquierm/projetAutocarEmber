import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | back-agent/agent/quote-card', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:back-agent/agent/quote-card');
    assert.ok(controller);
  });
});
