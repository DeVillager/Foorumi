FoorumApp.controller('ShowMessageController', function ($scope, $routeParams, Api) {
    // Toteuta kontrolleri tähän
    Api.getMessage($routeParams.id).success(function (message) {
        $scope.message = message;
        $scope.found = $scope.message.Replies.length;
    });
    
    $scope.reply = function() {
        
        var newReply = {
            content: $scope.replyText
        }
        
        Api.addReply(newReply, $routeParams.id).success(function (reply) {
            $scope.message.Replies[$scope.found] = reply;
            $scope.found++;
        })
    }
    
    
});
