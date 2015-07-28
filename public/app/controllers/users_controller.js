FoorumApp.controller('UsersController', function ($scope, $location, Api) {
    // Toteuta kontrolleri tähän
//    $scope.errorMessage = '';
    $scope.usernameForLogin = 'fuu';
    $scope.passwordForLogin = 'fuu';

//    Api.getUserLoggedIn()
//            .success(function (data) {
//                $scope.user = data;
//            })
//            .error(function () {
//                $scope.user = null;
//                console.log('Kirjautuminen epäonnistui! Lisätään käyttäjälle virheilmoitus');
//            });

    Api.login({username: $scope.usernameForLogin, password: $scope.passwordForLogin})
            .success(function (user) {
                console.log('Kirjautuminen onnistui!');
                console.log(user);
//                $location.path('/');
            })
            .error(function (data) {
                console.log('Kirjautuminen epäonnistui! Lisätään käyttäjälle virheilmoitus');
//                $scope.errorMessage = 'Väärä käyttäjätunnus tai salasana!';
            });

    $scope.login = function () {

        var user = {
            username: $scope.username,
            password: $scope.password
        }

        Api.login(user).success(function (reply) {
            $location.path('/');
        }).error(function (data) {
            console.log('Kirjautuminen epäonnistui! Lisätään käyttäjälle virheilmoitus');
            $scope.errorMessage = 'Väärä käyttäjätunnus tai salasana!';
        });
    }

    $scope.register = function () {

        var user = {
            username: $scope.username,
            password: $scope.password
        };

        Api.register(user).success(function (reply) {
            Api.login(user)
                    .success(function (loggedUser) {
                        console.log('Kirjautuminen onnistui!');
                        console.log(loggedUser);
                        $location.path('/');
//                $location.path('/');
                    })
                    .error(function () {
                        console.log('Kirjautuminen epäonnistui! Lisätään käyttäjälle virheilmoitus');
                        $scope.errorMessage = 'Väärä käyttäjätunnus tai salasana!';
                    });
        })
    }

});

//req.session.userId
