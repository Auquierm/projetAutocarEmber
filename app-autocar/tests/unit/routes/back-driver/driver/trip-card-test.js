import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | back-driver/driver/trip-card', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:back-driver/driver/trip-card');
    assert.ok(route);
  });
});
