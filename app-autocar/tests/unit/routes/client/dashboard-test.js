import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | client/dashboard', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:client/dashboard');
    assert.ok(route);
  });
});
