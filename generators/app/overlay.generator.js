const changeCase = require('change-case')

module.exports = {
  prompt(gen){

    const prompts = [{
      type: 'input',
      name: 'name',
      message: 'What is the overlay name?',
      default: gen.appname
    }];

    return gen.prompt(prompts);
  },
  generate(gen){
    const file_name  = changeCase.paramCase(gen.props.name);
    const controller_name = changeCase.pascalCase(gen.props.name) + 'OverlayController';
    const service_name = changeCase.camel(gen.props.name) + 'OverlayService';

    gen.fs.copyTpl(
      gen.templatePath('overlay/_.index.js'),
      gen.destinationPath('index.js'), {
        file_name: file_name,
        service_name: service_name
      }
    );

    gen.fs.copyTpl(
      gen.templatePath('overlay/_-overlay.service.js'),
      gen.destinationPath(file_name + '-overlay.service.js'), {
        file_name: file_name,
        service_name: service_name
      }
    );

    gen.fs.copyTpl(
      gen.templatePath('overlay/_-overlay.html'),
      gen.destinationPath(file_name + '-overlay.html'), {
      }
    );

    gen.fs.copyTpl(
      gen.templatePath('overlay/_-overlay.controller.js'),
      gen.destinationPath(file_name + '-overlay.controller.js'), {
        controller_name: controller_name,
      }
    );
  }
}
