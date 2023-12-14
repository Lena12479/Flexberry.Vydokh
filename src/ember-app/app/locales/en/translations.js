import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISVydokhМатериалLForm from './forms/i-i-s-vydokh-материал-l';
import IISVydokhОтпускLForm from './forms/i-i-s-vydokh-отпуск-l';
import IISVydokhСотрудникиLForm from './forms/i-i-s-vydokh-сотрудники-l';
import IISVydokhМатериалEForm from './forms/i-i-s-vydokh-материал-e';
import IISVydokhОтпускEForm from './forms/i-i-s-vydokh-отпуск-e';
import IISVydokhСотрудникиEForm from './forms/i-i-s-vydokh-сотрудники-e';
import IISVydokhЗаказModel from './models/i-i-s-vydokh-заказ';
import IISVydokhМатериалModel from './models/i-i-s-vydokh-материал';
import IISVydokhОтпускModel from './models/i-i-s-vydokh-отпуск';
import IISVydokhСотрудникиModel from './models/i-i-s-vydokh-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-vydokh-заказ': IISVydokhЗаказModel,
    'i-i-s-vydokh-материал': IISVydokhМатериалModel,
    'i-i-s-vydokh-отпуск': IISVydokhОтпускModel,
    'i-i-s-vydokh-сотрудники': IISVydokhСотрудникиModel
  },

  'application-name': 'Vydokh',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Vydokh',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Vydokh',
          title: 'Vydokh'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        vydokh: {
          caption: 'Vydokh',
          title: 'Vydokh',
          'i-i-s-vydokh-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-vydokh-отпуск-l': {
            caption: 'Отпуск',
            title: ''
          },
          'i-i-s-vydokh-материал-l': {
            caption: 'Материал',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-vydokh-материал-l': IISVydokhМатериалLForm,
    'i-i-s-vydokh-отпуск-l': IISVydokhОтпускLForm,
    'i-i-s-vydokh-сотрудники-l': IISVydokhСотрудникиLForm,
    'i-i-s-vydokh-материал-e': IISVydokhМатериалEForm,
    'i-i-s-vydokh-отпуск-e': IISVydokhОтпускEForm,
    'i-i-s-vydokh-сотрудники-e': IISVydokhСотрудникиEForm
  },

});

export default translations;
