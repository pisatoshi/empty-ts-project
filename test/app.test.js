const assert =require('power-assert');
const App = require('../dist/app').App;

describe("App", () => {
  it("コンストラクタ", () => {
    const app = new App();
    assert.ok(app);
    assert.ok(app instanceof App);
  });
});
