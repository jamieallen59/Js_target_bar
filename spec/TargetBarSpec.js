describe("TargetBar", function() {
  var targetBar;


  beforeEach(function() {
    targetbar = new TargetBar();

  });

  it("should begin at start value or default", function() {
    expect(targetbar.amount).toEqual (0);
  });

  describe("increasing the money raised", function() {
    it("increases if < the target amount", function() {
      targetbar.addMoney(1);
      expect(targetbar.amount).toEqual (1);
    })
  });
});
