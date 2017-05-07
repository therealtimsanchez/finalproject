var calendarDemoApp = angular.module('App');

calendarDemoApp.controller('CalendarController',
    function($scope, $compile, $timeout, uiCalendarConfig) {
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();


        $scope.eventSource = {};

        $scope.events = [{
            title: 'Room 1',
            start: new Date(y, m, d - 5),
            end: new Date(y, m, d - 2)
        }, {
            id: 999,
            title: 'Room 2',
            start: new Date(y, m, d - 1, 16, 0),
            allDay: false
        }, {
            id: 999,
            title: 'Room 3',
            start: new Date(y, m, d + 2, 16, 0),
            allDay: false
        }, {
            title: 'Room 4',
            start: new Date(y, m, d + 5, 18, 0),
            end: new Date(y, m, d + 5, 22, 30),
            allDay: false
        }, {
            title: 'Session Informations',
            start: new Date(y, m, 28),
            end: new Date(y, m, 29),
            url: 'http://joint.iscap.info/2016/docs/SessionsOnly2016.pdf'
        }];

        $scope.eventsF = function(start, end, timezone, callback) {
            var s = new Date(start).getTime() / 1000;
            var e = new Date(end).getTime() / 1000;
            var m = new Date(start).getMonth();
            var events = [{
                title: 'Feed Me ' + m,
                start: s + (50000),
                end: s + (100000),
                allDay: false,
                className: ['customFeed']
            }];
            callback(events);
        };

        $scope.calEventsExt = {
            color: '#1569C7',
            textColor: 'white',
            events: [{
                type: 'Conference Room 1',
                title: 'Meeting with Babb',
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d, 14, 0),
                allDay: false
            }, {
                type: 'Conference Room 2',
                title: 'Lunch With Babb',
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d, 14, 0),
                allDay: false
            }, {
                type: 'Conference Room 3',
                title: 'Click to meet Dr. Babb',
                start: new Date(y, m, 2),
                end: new Date(y, m, 6),
                url: 'https://wtamu.edu/academics/jeffry-babb-bio.aspx'
            }]
        };

        $scope.alertOnEventClick = function(date, jsEvent, view) {
            $scope.alertMessage = (date.title + ' selected ');
        };

        $scope.addEvent = function() {
            $scope.events.push({
                title: 'Open Sesame',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                className: ['openSesame']
            });
        };
        /* remove event */
        $scope.remove = function(index) {
            $scope.events.splice(index, 1);
        };
        /* Change View */
        $scope.changeView = function(view, calendar) {
            uiCalendarConfig.calendars[calendar].fullCalendar('changeView', view);
        };
        /* Change View */
        $scope.renderCalendar = function(calendar) {
            $timeout(function() {
                if (uiCalendarConfig.calendars[calendar]) {
                    uiCalendarConfig.calendars[calendar].fullCalendar('render');
                }
            });
        };
        /* Render Tooltip */
        $scope.eventRender = function(event, element, view) {
            element.attr({
                'tooltip': event.title,
                'tooltip-append-to-body': true
            });
            $compile(element)($scope);
        };
        /* config object */
        $scope.uiConfig = {
            calendar: {
                height: 450,
                editable: true,
                header: {
                    left: 'title',
                    center: '',
                    right: 'today prev,next'
                },
                eventClick: $scope.alertOnEventClick,
                eventDrop: $scope.alertOnDrop,
                eventResize: $scope.alertOnResize,
                eventRender: $scope.eventRender
            }
        };

        /* event sources array*/
        $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
        $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];
    });
/* EOF */
