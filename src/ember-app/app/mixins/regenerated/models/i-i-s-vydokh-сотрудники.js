import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  табель: DS.attr('number'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  табель: {
    descriptionKey: 'models.i-i-s-vydokh-сотрудники.validations.табель.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-vydokh-сотрудники.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-vydokh-сотрудники', {
    табель: attr('Табель', { index: 0 }),
    фИО: attr('ФИО', { index: 1 })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-vydokh-сотрудники', {
    табель: attr('Табель', { index: 0 }),
    фИО: attr('ФИО', { index: 1 })
  });
};
