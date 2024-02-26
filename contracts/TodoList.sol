// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TodoList {
    struct Task {
        string content;
        bool completed;
    }

    Task[] public tasks;

    function createTask(string memory _content) public {
        tasks.push(Task(_content, false));
    }

    function toggleCompleted(uint256 _index) public {
        require(_index < tasks.length, "Invalid index");
        tasks[_index].completed = !tasks[_index].completed;
    }
}
