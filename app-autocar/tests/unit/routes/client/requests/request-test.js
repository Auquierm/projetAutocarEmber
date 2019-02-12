import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | client/requests/request', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:client/requests/request');
    assert.ok(route);
  });
});
