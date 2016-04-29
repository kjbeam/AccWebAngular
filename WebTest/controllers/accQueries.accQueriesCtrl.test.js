/* 
 *
 */
describe('accQueries', function () {
    
    beforeEach(function () {module('accQueries');});

    //-- test controller
    describe('Controller : accQueriesCtrl', function () {
        
        // define scoped variables
        var scope,
            accQueriesCtrl;
        
        beforeEach(inject(function ($controller,$rootScope) {
            scope = $rootScope.$new(); // initialize scope
            accQueriesCtrl = $controller('accQueriesCtrl', {$scope: scope}); // inject scope
        }));
        
        it("Controller JSON data Name Value", function () {

            expect(scope.data.queries[0].name).toBe("Center by Name");
        });
        
        it("Controller JSON data Description Value", function () {

            // tests this code has executed:
            // 
            expect(scope.data.queries[1].description).toBe("Lease Expenses by Lease #");
        });
        
    });
    
});
