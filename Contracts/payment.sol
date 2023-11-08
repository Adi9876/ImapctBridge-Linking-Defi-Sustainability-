// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

import "./InvestorReturns.sol";

contract payment {
    uint256 public fund;
    uint256 public fundRaised;
    uint256 public timeLimit;
    bool public fundReached;
    address public projectOwner;
    InvestmentReturn public investorReturns;

    // FundAllocationVote public fundAllocationVote;

    constructor(uint256 _fundInEther) {
        fund = _fundInEther * 1 ether;
        timeLimit = block.timestamp + 90 days;

        // project pool
        projectOwner = msg.sender;
    }

    //investor address and amount he has invested is begin mappped
    mapping(address => uint256) public InvestorContributions;

    function Invest() public payable {
        require(msg.value > 0, "Amount should be greater than zero");
        require(block.timestamp < timeLimit, "Time limit has ended");
        InvestorContributions[msg.sender] += msg.value;
        fundRaised += msg.value;

        if (fundRaised >= fund) {
            fundReached = true;
        }
    }

    // function Withdraw() public {
    //     require(
    //         msg.sender == projectOwner,
    //         "Only the project owner can withdraw funds"
    //     );
    //     payable(projectOwner).transfer(fundRaised);
    // }

    function refund() public {
        require(
            block.timestamp >= timeLimit,
            "money can be refunded only after the timelimit"
        );
        uint256 RefundAmount = InvestorContributions[msg.sender];
        require(
            RefundAmount > 0,
            "You can't get refund, as you didn't invest funds"
        );
        InvestorContributions[msg.sender] = 0;
        fundRaised -= RefundAmount;
        payable(msg.sender).transfer(RefundAmount);
    }

    function reward() public {
        uint256 rewardAmount = investorReturns.returnOnInvestment(
            fundRaised,
            InvestorContributions[msg.sender],
            fund
        );
        require(rewardAmount > 0, "Reward amount is 0 check for investments");
        payable(msg.sender).transfer(rewardAmount);
    }

    // call in vote and fund contract as prior condition few conditions are checked there
    function transferFund() public {
        if (fundReached == true) {
            payable(address(this)).transfer(fund);
        }
    }
}
