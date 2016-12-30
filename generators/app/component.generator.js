const changeCase = require('change-case')

module.exports = {
  prompt(gen){

    const prompts = [{
      type: 'input',
      name: 'name',
      message: 'What is the component name?',
      default: gen.appname
    }];

    return gen.prompt(prompts);
  },
  generate(gen){
    const name = changeCase.camel(gen.props.name);
    const file_name  = changeCase.paramCase(gen.props.name);
    const component_name = 'si' + changeCase.pascalCase(gen.props.name);

    gen.fs.copyTpl(
      gen.templatePath('component/_.index.js'),
      gen.destinationPath('index.js'), {
        name: name,
        file_name: file_name,
        component_name: component_name
      }
    );

    gen.fs.copyTpl(
      gen.templatePath('component/_.component.js'),
      gen.destinationPath(file_name + '.component.js'), {
        name: name,
        file_name: file_name
      }
    );

    gen.fs.copyTpl(
      gen.templatePath('component/_.component.html'),
      gen.destinationPath(file_name + '.component.html'), {
        name: name,
        file_name: file_name
      }
    );

    gen.fs.copyTpl(
      gen.templatePath('component/_.component.controller.js'),
      gen.destinationPath(file_name + '.component.controller.js'), {
        name: name,
        file_name: file_name
      }
    );
  }
}
