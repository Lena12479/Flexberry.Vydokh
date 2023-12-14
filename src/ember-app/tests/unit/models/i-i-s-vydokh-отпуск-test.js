import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-vydokh-отпуск', 'Unit | Model | i-i-s-vydokh-отпуск', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-vydokh-заказ',
    'model:i-i-s-vydokh-материал',
    'model:i-i-s-vydokh-отпуск',
    'model:i-i-s-vydokh-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
