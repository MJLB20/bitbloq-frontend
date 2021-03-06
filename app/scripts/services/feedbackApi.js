'use strict';

/**
 * @ngdoc service
 * @name bitbloqApp.feedbackApi
 * @description
 */
angular.module('bitbloqApp')
    .service('feedbackApi', function(envData, $http) {
        var exports = {};

        exports.send = function(item) {
            return $http.post(envData.config.serverUrl + 'feedback', item);
        };

        return exports;

    });