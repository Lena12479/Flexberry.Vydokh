import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИОзаказа: DS.attr('string'),
  материал: DS.belongsTo('i-i-s-vydokh-материал', { inverse: null, async: false }),
  отпуск: DS.belongsTo('i-i-s-vydokh-отпуск', { inverse: 'заказ', async: false })
});

export let ValidationRules = {
  фИОзаказа: {
    descriptionKey: 'models.i-i-s-vydokh-заказ.validations.фИОзаказа.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  материал: {
    descriptionKey: 'models.i-i-s-vydokh-заказ.validations.материал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отпуск: {
    descriptionKey: 'models.i-i-s-vydokh-заказ.validations.отпуск.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-vydokh-заказ', {
    фИОзаказа: attr('Ф и озаказа', { index: 0 }),
    материал: belongsTo('i-i-s-vydokh-материал', 'Материал', {
      имя: attr('Материал', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'имя' })
  });
};
