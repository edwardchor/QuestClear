angular.module('QuestClear').config(function($urlRouterProvider, $stateProvider) {
    $stateProvider
        .state("home", {
            templateUrl: 'views/home/home.html',
            controller: 'HomeController'
        })
        .state('home.welcome', {
            url: "/?redir",
            templateUrl: 'views/home/welcome.html',
            controller: 'WelcomeController'
        })
        .state('home.login', {
            url: "/login?redir",
            templateUrl: 'views/home/login.html',
            controller: 'LoginController'
        })
        .state('home.register', {
            url: "/register?redir",
            templateUrl: 'views/home/register.html',
            controller: 'RegisterController'
        })
        .state('start', {
            url: "/start",
            templateUrl: 'views/start.html'
        })
        .state('panel',{
            url:"/panel",
            templateUrl:'views/panel/panel.html',
            controller:'PanelController'
        })
        .state('panel.list',{
            url:"/list?keywords",
            templateUrl:'views/panel/cardList.html',
            controller:'ListController'
        })
        .state('panel.post',{
            url:"/post",
            templateUrl:'views/panel/post.html',
            controller:'PostController'
        })
        .state('panel.answer',{
            url:"/answer/:qid",
            templateUrl:'views/panel/answer.html',
            controller:'AnswerController'
        })
        .state('users', {
            url: "/users/:uid",
            templateUrl: 'views/users.html',
            controller: 'UsersController'
        })
        .state('questions', {
            url: "/questions/:qid",
            templateUrl: 'views/questions.html',
            controller: 'QuestionsController'
        })
        .state('answers', {
            url: "/answers/:aid",
            templateUrl: 'views/answers.html',
            controller: 'AnswersController'
        })
        .state('quests', {
            url: "/quests",
            templateUrl: 'views/quests.html',
            controller: 'QuestsController'
        });
    $urlRouterProvider.otherwise('/');
});