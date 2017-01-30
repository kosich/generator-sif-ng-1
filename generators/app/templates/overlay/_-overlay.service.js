import controller from './<%= file_name %>-overlay.controller.js';
import template from './<%= file_name %>-overlay.html';

export default function <%= service_name %>($uibModal){ 'ngInject';

  function show (data){
    return $uibModal.open({
      template,
      controller,
      controllerAs: '$ctrl',
      backdrop: true,
      // resolve: {
      //   some: ()=>data.some
      // }
    })
    .result;
  }

  return {
    show
  };

}

