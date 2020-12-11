const Endpoints = require('./../../mocking/endpoints')

Feature('TODO List');

Scenario('User sees no items when empty', ({ firstUser }) => {
    firstUser.mocksEndpoint(Endpoints.GET_TODOS, 'empty');

    firstUser.goesToPage('https://www.todobackend.com/client/index.html?https://made_up_server.com/todos');
    firstUser.sees('todos')
    firstUser.doesNotSee('1 item left')
});

Scenario('User sees items when not empty', ({ firstUser }) => {
    firstUser.mocksEndpoint(Endpoints.GET_TODOS, 'single-todo');

    firstUser.goesToPage('https://www.todobackend.com/client/index.html?https://made_up_server.com/todos');
    firstUser.sees('todos')
    firstUser.sees('1 item left')
    firstUser.sees('My first todo')
});