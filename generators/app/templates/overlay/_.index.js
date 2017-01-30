// import <%= service_name %> from './overlays/<%= file_name %>';
// .factory(<%= service_name %>.name, <%= service_name %>.service)
import service from './<%= file_name %>-overlay.service.js';

export default {
  name: '<%= service_name %>',
  service
};
