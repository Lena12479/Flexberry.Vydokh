import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.vydokh.caption'),
          title: i18n.t('forms.application.sitemap.vydokh.title'),
          children: [{
            link: 'i-i-s-vydokh-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.vydokh.i-i-s-vydokh-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.vydokh.i-i-s-vydokh-сотрудники-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-vydokh-отпуск-l',
            caption: i18n.t('forms.application.sitemap.vydokh.i-i-s-vydokh-отпуск-l.caption'),
            title: i18n.t('forms.application.sitemap.vydokh.i-i-s-vydokh-отпуск-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-vydokh-материал-l',
            caption: i18n.t('forms.application.sitemap.vydokh.i-i-s-vydokh-материал-l.caption'),
            title: i18n.t('forms.application.sitemap.vydokh.i-i-s-vydokh-материал-l.title'),
            icon: 'tasks',
            children: null
          }]
        }
      ]
    };
  }),
})