function results() {
    
    var version = document.getElementById('version').value;
    var description = document.getElementById('description').value;
    var resources = document.getElementById('resources').value;
    
}






//heat_template_version: 2015-04-30
//
//description: Simple template to deploy a single compute instance
//
//resources:
//  my_instance:
//    type: OS::Nova::Server
//    properties:
//      key_name: my_key
//      image: ubuntu-trusty-x86_64
//      flavor: m1.small