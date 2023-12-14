import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПроводки: DS.attr('date'),
  сотрудники: DS.belongsTo('i-i-s-vydokh-сотрудники', { inverse: null, async: false }),
  заказ: DS.hasMany('i-i-s-vydokh-заказ', { inverse: 'отпуск', async: false })
});

export let ValidationRules = {
  датаПроводки: {
    descriptionKey: 'models.i-i-s-vydokh-отпуск.validations.датаПроводки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-vydokh-отпуск.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-vydokh-отпуск.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтпускE', 'i-i-s-vydokh-отпуск', {
    датаПроводки: attr('Дата проводки', { index: 0 }),
    сотрудники: belongsTo('i-i-s-vydokh-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фИО' }),
    заказ: hasMany('i-i-s-vydokh-заказ', 'Заказ', {
      фИОзаказа: attr('Ф и озаказа', { index: 0 }),
      материал: belongsTo('i-i-s-vydokh-материал', 'Материал', {
        имя: attr('Материал', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'имя' })
    })
  });

  modelClass.defineProjection('ОтпускL', 'i-i-s-vydokh-отпуск', {
    датаПроводки: attr('Дата проводки', { index: 0 }),
    сотрудники: belongsTo('i-i-s-vydokh-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
