FoorumApp.service('Api', function ($http) {
    // Aihealueiden Api-funktiot
//    var topics = null;
    this.getTopics = function () {
        // Hae kaikki aihealueet toteuttamasi Api:n polusta /topics
        return $http.get('/topics')
                .success(function (aiheet) {
//                    $scope.topics = aiheet;
//                    console.log($scope.topics.length);
//                    alert(aiheet.length);

                })
                .error(function (data, status, headers, config) {
                    console.log('Jotain meni pieleen...');

                })
    }

    this.getTopic = function (id) {
        // Hae annetulla id:llä varastettu aihealue toteuttamasi Api:n polusta /topics/:id
        return $http.get('/topics/' + id)
                .success(function (aihe) {
//                    $scope.topic = aihe;
                })
                .error(function (data, status, headers, config) {
                    console.log('Jotain meni pieleen...');
                })
    }

    this.addTopic = function (topic) {
        // Lisää annettu aihealue lähettämällä POST-pyyntö toteuttamasi Api:n polkuun /topics
        return $http.post('/topics', topic)
                .success(function (aihe) {
//                    $scope.topic = aihe;
//                    $scope.topics.push(aihe);
                })
                .error(function (data, status, headers, config) {
                    console.log('Jotain meni pieleen...');
                })
    }

    // Viestien Api-funktiot
    this.getMessage = function (id) {
        // Hae annetulla id:llä varustettu viesti toteuttamasi Api:n polusta /messages/:id
        return $http.get('/messages/' + id)
                .success(function (message) {
                })
                .error(function (data, status, headers, config) {
                    console.log('Jotain meni pieleen...');
                })
    }

    this.addMessage = function (message, topicId) {
        // Lisää annettu viesti lähettämällä POST-pyyntö toteuttamasi Api:n polkuun /topics/:topicId/message
        return $http.post('/topics/' + topicId + '/message', message)
                .success(function (aihe) {
//                    $scope.topics.push(aihe);
                })
                .error(function (data, status, headers, config) {
                    console.log('Jotain meni pieleen...');
                })
    }

    // Vastausten Api-funktiot
    this.addReply = function (reply, messageId) {
        // Lisää annettu vastaus lähettämällä POST-pyyntö toteuttamasi Api:n polkuun /messages/:messageId/reply
        return $http.post('/messages/' + messageId + '/reply', reply)
                .success(function (aihe) {
//                    $scope.topics.push(aihe);
                })
                .error(function (data, status, headers, config) {
                    console.log('Jotain meni pieleen...');
                })
    }

    // Käyttäjän Api-funktiot
    this.login = function (user) {
        // Tarkista käyttäjän kirjautuminen lähettämällä POST-pyyntö toteuttamasi Api:n polkuun /users/authenticate
        return $http.post('/users/authenticate', user)
                .success(function (response) {
                    console.log('Kirjautuminen onnistui!');
                    console.log(response);
                })
                .error(function (data, status, headers, config) {
                    console.log('Kirjautuminen epäonnistui! Lisätään käyttäjälle virheilmoitus');
                    $scope.errorMessage = 'Väärä käyttäjätunnus tai olet idiootti!';
                })
    }

    this.register = function (user) {
        // Lisää annettu käyttäjä lähettämällä POST-pyyntö toteuttamasi Api:n polkuun /users
        return $http.post('/users', user)
                .success(function (response) {
                    console.log('Rekisteröinti onnistui!');
                    console.log(response);
                })
                .error(function (data, status, headers, config) {
                    console.log('Kirjautuminen epäonnistui! Lisätään käyttäjälle virheilmoitus');
                    $scope.errorMessage = 'Väärä käyttäjätunnus tai olet idiootti!';
                })
    }
    
    this.getUserLoggedIn = function () {
        // Hae kirjautunut käyttäjä toteuttamasi Api:n polusta /users/logged-in
        return $http.get('/users/logged-in')
                .success(function (response) {
                    console.log(response);
                })
                .error(function (data, status, headers, config) {
                    console.log('Kirjautuminen epäonnistui! Lisätään käyttäjälle virheilmoitus');
//                    $scope.errorMessage = 'Väärä käyttäjätunnus tai olet idiootti!';
                })
    }
    
    this.logout = function () {
        return $http.get('/users/logout');
    }
});
