FoorumApp.controller('TopicsListController', function ($scope, $location, Api) {
    // Toteuta kontrolleri tähän
//    $scope.topics = [];
    Api.getTopics().success(function (topics) {
        $scope.topics = topics;
    });
    
//    $scope.topic = null;

    $scope.addTopic = function () {
//        alert('toimii');
        var newTopic = {
            name: $scope.newTopicName,
            description: $scope.newTopicDescription,
        }

        Api.addTopic(newTopic).success(function (topic) {
//            $scope.topic = topic;
            $location.path('/topics/' + topic.id);
        });
        
    }
//    alert('täällä');
//    alert($scope.topics.length);


});
