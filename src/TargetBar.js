function TargetBar(moneyRaised, targetAmount) {
	this.amount = moneyRaised || 0;
}

TargetBar.prototype.addMoney = function(moneyDonated) {
	this.amount += moneyDonated;
};