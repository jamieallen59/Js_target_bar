function TargetBar(moneyRaised, targetAmount) {
	this.amount = moneyRaised || 0;
	this.targetAmount = targetAmount || 500;
}

TargetBar.prototype.addMoney = function(moneyDonated) {
	if(this.amount + moneyDonated < this.targetAmount) {
		this.amount += moneyDonated;
	}
};

TargetBar.prototype.subtractMoney = function(moneyRemoved) {
	if(this.amount - moneyRemoved > 0) {
		this.amount -= moneyRemoved;
	}
};

TargetBar.prototype.adjustTarget = function(targetAddition) {
	this.targetAmount += targetAddition;
};

TargetBar.prototype.percentage = function() {
	var progress = (this.amount / 100) * this.targetAmount;
	return progress.toString() + "%"
};

TargetBar.prototype.progress = function() {
	
};