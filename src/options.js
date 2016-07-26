// UrlAutoRedirector
// Copyright (c) David Zhang, 2016
// Idea inspired by Albert Li.

var isNewTab;
var rules = [];

var app = new Vue({
  el: '#main',
  methods: {
    addItem: function () {
        var self = this;
        self.tmpItem = {
            src: '',
            dst: '',
            isRegex: false,
            isEnabled: false
        };
        self.trData.push(self.tmpItem);
    },
    resetItem: function () {

    },
    toggleRegex: function ($event, item) {
        item.isRegex = !item.isRegex;
    },
    toggleEnable: function ($event, item) {
        item.isEnabled = !item.isEnabled;
    },
    deleteItem: function ($event, item) {
        var self = this;

        self.trData.$remove(item);
    },
    uploadList: function () {

    },
    importList: function () {

    },
    exportList: function () {

    }
  },
  data: {
    extName: chrome.i18n.getMessage('ext_name'),
    title: chrome.i18n.getMessage('options_page_title'),
    general: chrome.i18n.getMessage('options_general'),
    newTab: chrome.i18n.getMessage('options_new_tab'),
    curTab: chrome.i18n.getMessage('options_cur_tab'),
    ruleTitle: chrome.i18n.getMessage('options_rules'),
    ruleSrc: chrome.i18n.getMessage('rule_src'),
    ruleDst: chrome.i18n.getMessage('rule_dst'),
    ruleRegex: chrome.i18n.getMessage('rule_regexp'),
    ruleEnabled: chrome.i18n.getMessage('rule_enable'),
    ruleDelete: chrome.i18n.getMessage('rule_delete'),
    buttonNew: chrome.i18n.getMessage('btn_new'),
    buttonReset: chrome.i18n.getMessage('btn_reset'),
    buttonImport: chrome.i18n.getMessage('btn_import'),
    buttonExport: chrome.i18n.getMessage('btn_export'),
    about: chrome.i18n.getMessage('about'),
    aboutCopyright: chrome.i18n.getMessage('copyright'),
    aboutHome: chrome.i18n.getMessage('official_page'),
    aboutContribute: chrome.i18n.getMessage('contribute'),
    aboutIdeas: chrome.i18n.getMessage('ideas'),
    ruleDrag: chrome.i18n.getMessage('title_drag'),
    rules: rules,
    isNewTab: isNewTab,
    trData: [{
        src: 'http://www.google.com',
        dst: 'http://tieba.baidu.com',
        isRegex: true,
        isEnabled: true
    }, {
        src: 'http://www.baidu.com',
        dst: 'http://tieba.*.com',
        isRegex: true,
        isEnabled: false
    }, {
        src: 'http://*.baidu.com',
        dst: 'http://tieba.baidu.com',
        isRegex: false,
        isEnabled: true
    }],
    tmpItem: {}
  },
  created: function(){
    // getOptions();
  }
});

function getOptions() {
  chrome.storage.local.get("options", function(data){
    isNewTab = data.options.isNewTab;
    rules = data.options.rules;
    app.$set('rules', rules);
    app.$set('isNewTab', isNewTab);
  });
}