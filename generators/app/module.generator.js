const changeCase = require('change-case')

module.exports = {
  prompt(gen){

    const prompts = [{
      type: 'input',
      name: 'name',
      message: 'What is the module name?',
      default: gen.appname
    }];

    return gen.prompt(prompts);
  },
  generate(gen){
    const name_camel_case = changeCase.camel(gen.props.name);
    const name_param_case = changeCase.paramCase(gen.props.name);
    const name_snakeCase_case = changeCase.snakeCase(gen.props.name);

    const params = {
      name_camel_case,
      name_param_case,
      name_snakeCase_case
    };

    gen.fs.copyTpl(
      gen.templatePath('module/_.index.js'),
      gen.destinationPath('index.js'), 
      params
    );

    gen.fs.copyTpl(
      gen.templatePath('module/_.module.js'),
      gen.destinationPath(name_param_case + '.module.js'),
      params
    );

    gen.fs.copyTpl(
      gen.templatePath('module/_.module.config.js'),
      gen.destinationPath(name_param_case + '.module.config.js'),
      params
    );

    gen.fs.copyTpl(
      gen.templatePath('module/i18n/en.json'),
      gen.destinationPath('i18n/en.json'),
      params
    );

    gen.fs.copyTpl(
      gen.templatePath('module/i18n/index.js'),
      gen.destinationPath('i18n/index.js'),
      params
    );

  }
}
