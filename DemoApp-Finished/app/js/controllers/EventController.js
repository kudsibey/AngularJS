'use strict';

eventsApp.controller('EventController', 
    function EventController($scope) {
    $scope.event = {
        name:'Kudsi Bey',
        date:'20/03.2017',
        time:'20:41',
        location: {
           address:'17 Bordbrook Road',
            city:'London',
            country:'UK'
        },
        imageUrl:'img/angularjs-logo.png',
        sessions:[
            {
                name:"Directives Masterclass",
                creatorName:'Bob Smith',
                duration:'1 hr',
                level:'Advanced',
                abstract:'In this session you will learn the ins and outs of directives',
                upVoteCount:0
            },
            {
                name:"Scopes for fun and profit",
                creatorName:'John Doe',
                duration:'30 mins',
                level:'Introductory',
                abstract:'this session will take a closer look at scopes',
                upVoteCount:0
            },
            {
                name:"Well behaved controllers",
                creatorName:'Kudsi Tuluoglu',
                duration:'2 hr',
                level:'Intermediate',
                abstract:'We will learn well behaved controllers',
                upVoteCount:0
            }
        ]

    }
    $scope.upVoteSession = function (session) {
    session.upVoteCount++;
    };
    $scope.downVoteSession = function (session) {
    session.upVoteCount--;
    };

    }
);
