// import <%= service_name %> from './shared/<%= file_name %>';
// .factory(<%= service_name %>.name, <%= service_name %>.service)
function <%= service_name %>(){ 'ngInject';
  return {
  };
}

export default { name: '<%= service_name %>', service: <%= service_name %> };
