describe("Sort Product", function() {
  beforeEach(function() {
      console.log("sort product is...");
  });
  describe("List Product", function() {
          beforeEach(function() {
              console.log("list product is ...");
          });
          it("if it is a product type by name", function() {
              console.log("A product type by name");
              expect(true).toBe(true);
          });
          afterEach(function() {
              console.log("afterEach level 3");
          });
      });
      afterEach(function() {
          console.log("afterEach level 2");
  });
  afterEach(function() {
      console.log("afterEach level 1");
  });
});