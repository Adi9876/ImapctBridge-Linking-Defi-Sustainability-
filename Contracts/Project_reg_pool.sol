// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Project_registration_with_ipfs

  contract ProjectRegistry {
    // ... (Previous contract code)

    // Struct to represent an investment in a project
    struct Investment {
        address investor; // Investor's Ethereum address
        uint256 amount; // Amount invested
    }

    // Mapping to store investments for each project
    mapping(uint256 => Investment[]) public projectInvestments;

    // Event to log an investment in a project
    event InvestmentReceived(uint256 projectId, address indexed investor, uint256 amount);

    // Function to allow investors to invest in a project
    function investInProject(uint256 projectId) external payable {
        // Check if the project ID is valid
        require(projectId > 0 && projectId <= projectCount, "Invalid project ID");
        // Check that the investment amount is greater than 0
        require(msg.value > 0, "Investment amount must be greater than 0");

        // Store the investment details in the projectInvestments mapping
        projectInvestments[projectId].push(Investment({investor: msg.sender, amount: msg.value}));
        // Emit an event to log the investment
        emit InvestmentReceived(projectId, msg.sender, msg.value);
    }

    // Function to get the list of investments for a specific project
    function getProjectInvestments(uint256 projectId) public view returns (Investment[] memory) {
        // Check if the project ID is valid
        require(projectId > 0 && projectId <= projectCount, "Invalid project ID");
        // Return the list of investments for the project
        return projectInvestments[projectId];
    }

    // Function to calculate the percentage of total pool contribution by an investor
    function getInvestorContributionPercentage(uint256 projectId, address investor) public view returns (uint256) {
        // Check if the project ID is valid
        require(projectId > 0 && projectId <= projectCount, "Invalid project ID");
        
        Investment[] storage investments = projectInvestments[projectId];
        
        uint256 totalInvestment = 0;
        uint256 investorContribution = 0;
        
        for (uint256 i = 0; i < investments.length; i++) {
            Investment storage investment = investments[i];
            totalInvestment += investment.amount;
            if (investment.investor == investor) {
                investorContribution += investment.amount;
            }
        }
        
        if (totalInvestment == 0) {
            return 0; // Avoid division by zero
        }
        
        return (investorContribution * 100) / totalInvestment;
    }

    // Function to allow investors to withdraw their investments from a project
    function withdrawInvestment(uint256 projectId) public {
        // Check if the project ID is valid
        require(projectId > 0 && projectId <= projectCount, "Invalid project ID");
        
        Investment[] storage investments = projectInvestments[projectId];
        
        for (uint256 i = 0; i < investments.length; i++) {
            Investment storage investment = investments[i];
            if (investment.investor == msg.sender) {
                payable(msg.sender).transfer(investment.amount);
                investment.amount = 0; // Set the investment amount to 0 to prevent double withdrawal
            }
        }
    }
}
