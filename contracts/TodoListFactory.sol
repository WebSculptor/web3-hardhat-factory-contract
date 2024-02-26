// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./TodoList.sol";

contract TodoListFactory {
    event TodoListCreated(
        address indexed todoListAddress,
        address indexed owner
    );

    function createTodoList() public {
        TodoList newTodoList = new TodoList();
        emit TodoListCreated(address(newTodoList), msg.sender);
    }
}
