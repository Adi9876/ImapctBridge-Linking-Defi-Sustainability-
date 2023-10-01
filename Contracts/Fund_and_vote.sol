// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <=0.9.0;

import "./Project_registration_with_ipfs.sol";

contract FundAllocationAndVote {
    ProjectRegistry projectRegistryInstance;

    uint256 public minThreshold;
    uint256 public yesVotes;
    uint256 public totalVotes;
    uint256 public poolFunds;
    uint256 public requestedAmount;

    // Here project is located with an ID with its vote count with 0 index as yes and 1 as no
    // ID --> [yes votes , no votes ]
    mapping(uint256 => uint256[2]) public ProjectVotes;
    mapping(uint256 => bool) public ProjectVerify;

    // investor mapped with amount of impact token holdings
    mapping(address => uint256) public investors;

    constructor(
        uint256 _minThreshold,
        uint256 _poolFunds,
        uint256 _requestedAmount
    ) {
        minThreshold = _minThreshold;
        poolFunds = _poolFunds;
        requestedAmount = _requestedAmount;
    }

    function castVote(
        uint256 projectId,
        uint256 choice,
        uint256 voteCount
    ) public {
        require(choice == 1 || choice == 2, "Wrong Choice");
        require(ProjectVerify[projectId] == true, "Not Valid Project");
        require(
            voteCount <= investors[msg.sender] && investors[msg.sender] > 0,
            "Not enough Impact Token"
        );
        ProjectVotes[projectId][choice - 1] += voteCount;
        investors[msg.sender] -= voteCount;
    }

    function calculateAllocation(
        uint256 projectId
    ) internal view returns (uint256) {
        uint256 yesVote = ProjectVotes[projectId][0];
        uint256 noVote = ProjectVotes[projectId][1];

        uint256 yesPercentage = (yesVote * 100) / (yesVotes + noVote);

        uint256 allocation = (yesPercentage * poolFunds) / 100;

        if (allocation < minThreshold) {
            uint256 additionalFundsRequired = minThreshold - allocation;
            allocation += additionalFundsRequired;
        }

        if (allocation > requestedAmount) {
            allocation = requestedAmount;
        }

        return allocation;
    }

    receive() external payable {}

    // >>> UPDATE FUNCTION
    function transferFund(uint256 projectId) private view {
        uint256 allocatedFund = calculateAllocation(projectId);

        // Add projectOwnerAddress at last position (11) at the contract where project details are initiated;
        // also we need to add projectOwner in project details
        // from projectId we get the project owners address, there in we tranfer the allocation to ....

        // >>>>>> RELEASE AFTER ABOVE UPDATION

        // (,,,,,,,,,, address projectOwnerAddress) = projectRegistryInstance.getProjectDetails(projectId);
        // require(projectOwnerAddress != address(0),"Invalid project");
        // require(address(this).balance >= 0 && address(this).balance >= allocatedFund, "Not enough fund with contract");

        // projectOwnerAddress.tranfer(allocatedFund);
    }
}
