(function (angular) {
    "use strict";

    // MODULO
    angular.module('listaTarefasApp', []);
    
  

    // CONTROLLER
    angular.module('listaTarefasApp')
        .controller('ListaTarefasController', listaTarefasController);

    listaTarefasController.$inject = ['$rootScope', '$filter'];

    function listaTarefasController($rootScope, $filter) {
        let vm = this;

        
        vm.logado = false;
        vm.validar = false;
        vm.register = false;






        
        /* ***************    INIT VARIÁVEIS   
        '$rootScope', '$filter' estava dentro da listacontroler
          angular.module('listaTarefasApp')
        .filter('capitalize', function (){
            return function(input) { return input.charAt(0).toUpperCase() + input.substring(1,5);}
        });
        *********************************** */

        
        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)  **************** */
        $rootScope.listaMensagens = [
            { id: 1, text: 'Mensagem aqui' , tipo: 'success'},
        ];

        vm.teste = 'teste';
        vm.teste2 = $filter('limitTo')(vm.teste, 4);

        /* ***************    FUNÇÕES INTERNAS    ******************************** */

    }

})(angular);