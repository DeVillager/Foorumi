FoorumApp.controller('ShowTopicController', function ($scope, $routeParams, $location, Api) {
    // Toteuta kontrolleri tähän

    Api.getTopic($routeParams.id).success(function (topic) {
//        alert($routeParams.id);
        $scope.topic = topic;
        $scope.found = $scope.topic.Messages.length;
    })

    
    $scope.addMessage = function () {

        var newMsg = {
            title: $scope.newMsgName,
            content: $scope.newMsgContent,
            TopicId: $routeParams.id
        }
        
//        alert(newMsg.TopicId);
        Api.addMessage(newMsg, $routeParams.id).success(function (newMsg) {
            $location.path('/messages/' + newMsg.id);
        });
    }


});
