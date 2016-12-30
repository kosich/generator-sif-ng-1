'use strict';
//Require dependencies
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

const component_generator = require('./component.generator');
const service_generator = require('./service.generator');
const generators = [ component_generator, service_generator ];

module.exports = yeoman.Base.extend({
  //Configurations will be loaded here.
  //Ask for user input
  prompting: function() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the superior ' + chalk.red('generator-siftery-ng-1-component') + ' generator!'
    ));

    const prompts = [{
      type: 'list',
      name: 'generator',
      message: 'What shall you generate?',
      choices: [
        { name: 'component', value: component_generator },
        { name: 'service', value: service_generator }
      ],
      default: 0
    }];

    // To access props later use this.props.someAnswer;
    return this
      .prompt(prompts)
      .then((props)=>{
        this.props = props;
        return props.generator.prompt(this);
      })
      .then(props=>{
        return Object.assign(this.props, props);
      });
  },
  writing: function () {
    console.log('generating');
    this.props.generator.generate(this);
  }
});
