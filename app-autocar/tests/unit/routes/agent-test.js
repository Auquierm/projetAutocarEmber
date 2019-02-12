import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | agent', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:agent');
    assert.ok(route);
  });
});
