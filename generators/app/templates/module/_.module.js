const MODULE_NAME = '<%= name_param_case %>';

import i18n from './i18n';
import config from './<%= name_param_case %>.module.config.js';

const module = angular.module(MODULE_NAME, [
  'ngResource', 'ui.router', 'ui.bootstrap'
])
  .config(i18n)
  .config(function($stateProvider, $urlMatcherFactoryProvider) { 'ngInject';
    $urlMatcherFactoryProvider.strictMode(false);
    config($stateProvider);
  });

// import some from './some.service';
// module
//   .factory('some', some)

export { module, MODULE_NAME as name };
