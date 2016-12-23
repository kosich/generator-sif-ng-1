'use strict';
//Require dependencies
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var changeCase = require('change-case')


module.exports = yeoman.Base.extend({
  //Configurations will be loaded here.
  //Ask for user input
  prompting: function() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the superior ' + chalk.red('generator-siftery-ng-1-component') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'What is the component name?',
      default: this.appname
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },
  writing: function () {
      console.log('called');

      var name = changeCase.camel(this.props.name);
      var file_name  = changeCase.paramCase(this.props.name);
      var component_name = 'si' + changeCase.pascalCase(this.props.name);

      this.fs.copyTpl(
        this.templatePath('_.index.js'),
        this.destinationPath('index.js'), {
          name: name,
          file_name: file_name,
          component_name: component_name
        }
      );

      this.fs.copyTpl(
        this.templatePath('_.component.js'),
        this.destinationPath(file_name + '.component.js'), {
          name: name,
          file_name: file_name
        }
      );

      this.fs.copyTpl(
        this.templatePath('_.component.html'),
        this.destinationPath(file_name + '.component.html'), {
          name: name,
          file_name: file_name
        }
      );

      this.fs.copyTpl(
        this.templatePath('_.component.controller.js'),
        this.destinationPath(file_name + '.component.controller.js'), {
          name: name,
          file_name: file_name
        }
      );
  }
});
