import { ethers } from "hardhat";
// scripts/interact.js
async function main() {
  const TodoListFactory = await ethers.getContractFactory("TodoListFactory");
  const factoryContract = await TodoListFactory.deploy();
  await factoryContract.waitForDeployment();
  console.log("TodoListFactory deployed to:", factoryContract.target);

  await factoryContract.createTodoList();

  const TodoList = await ethers.getContractFactory("TodoList");
  const todoListContract = await TodoList.deploy();

  // Perform some actions on the TodoList contract
  await todoListContract.createTask("Write a smart contract");
  await todoListContract.createTask("Deploy it to a testnet");
  await todoListContract.createTask("Deploy it to a testnet sepolia");
  await todoListContract.createTask("Deploy it to a testnet mumbai");
  await todoListContract.toggleCompleted(0);

  console.log("Tasks:", await todoListContract.tasks(0));
  console.log("Tasks:", await todoListContract.tasks(1));
  console.log("Tasks:", await todoListContract.tasks(2));
  console.log("Tasks:", await todoListContract.tasks(3));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
