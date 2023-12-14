import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Vydokh',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Vydokh',
          title: 'Vydokh'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
