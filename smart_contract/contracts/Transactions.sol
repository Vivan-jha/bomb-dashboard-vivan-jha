// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Transactions {
    uint256 transactionCount;
    mapping(address => uint256) balances;

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);
    event Deposit(address from, uint amount, uint256 timestamp);
    event Withdraw(address to, uint amount, uint256 timestamp);
    event ClaimAll(address owner, uint amount, uint256 timestamp);

    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));
        balances[msg.sender] -= amount;
        balances[receiver] += amount;

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }

    function deposit() public payable {
        balances[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value, block.timestamp);
    }

    function withdraw(uint amount) public {
        require(amount <= balances[msg.sender], "Insufficient balance");
        payable(msg.sender).transfer(amount);
        balances[msg.sender] -= amount;
        emit Withdraw(msg.sender, amount, block.timestamp);
    }

    function claimAll() public {
        uint amount = balances[msg.sender];
        require(amount > 0, "No balance to claim");
        payable(msg.sender).transfer(amount);
        balances[msg.sender] = 0;
        emit ClaimAll(msg.sender, amount, block.timestamp);
    }
}
    