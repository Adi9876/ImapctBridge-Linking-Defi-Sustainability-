// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract InvestmentReturn {
    function returnOnInvestment(
        uint investmentPoolAmount,
        uint InvestorContribution,
        uint FundsAllocated
    ) public pure returns (uint) {
        require(
            investmentPoolAmount > 0,
            "Investment pool amount must be greatr than zero"
        );
        uint256 contributionPercentage = (InvestorContribution * 100) /
            investmentPoolAmount;
        require(
            contributionPercentage > 0,
            "ContributionPercentage can't be zero"
        );
        uint256 claimTokensWorth = (FundsAllocated / contributionPercentage);
        return claimTokensWorth;
    }
    // this particular function doesn't return contribution percentage with decimal precision,
    //because solidity doesnt suppose floating point numbers
}
