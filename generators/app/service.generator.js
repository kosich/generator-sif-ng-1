const changeCase = require('change-case')

module.exports = {
  prompt(gen){

    const prompts = [{
      type: 'input',
      name: 'name',
      message: 'What is the service name?',
      default: gen.appname
    }];

    return gen.prompt(prompts);
  },
  generate(gen){
    const file_name  = changeCase.paramCase(gen.props.name) + '.service.js';
    const service_name = changeCase.camelCase(gen.props.name) + 'Service';

    gen.fs.copyTpl(
      gen.templatePath('service/_.service.js'),
      gen.destinationPath(file_name), {
        service_name: service_name,
        file_name: file_name
      }
    );

  }
}
