import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | changePassWord', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:change-pass-word');
    assert.ok(route);
  });
});
