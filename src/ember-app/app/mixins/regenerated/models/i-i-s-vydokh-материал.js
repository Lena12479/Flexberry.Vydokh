import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  код: DS.attr('number'),
  цвет: DS.attr('string')
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-vydokh-материал.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-vydokh-материал.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  цвет: {
    descriptionKey: 'models.i-i-s-vydokh-материал.validations.цвет.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МатериалE', 'i-i-s-vydokh-материал', {
    код: attr('Код', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    цвет: attr('Цвет', { index: 2 })
  });

  modelClass.defineProjection('МатериалL', 'i-i-s-vydokh-материал', {
    код: attr('Код', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    цвет: attr('Цвет', { index: 2 })
  });
};
