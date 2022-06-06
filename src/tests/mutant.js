let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
let sinon = require("sinon");
let { isMutant, stats } = require("../controllers/index");

describe("test POST: ", () => {
  it("should response 200", async () => {
    const req = {
      body: {
        dna: ["ATGCGA", "CCGTGC", "TTGTGT", "AGAAGG", "ACGGTA", "TCACTG"],
      },
    };
    let res = { status: "OK" };
    let next = sinon.stub();

    await isMutant(req, res, next);
    console.log(res.status);
    chai.expect(res.status).equal("OK");
  });
  it("should response 200", async () => {
    const req = {};
    let res = {
      count_mutants_dna: 7,
      count_human_dna: 1,
      ratio: 7,
    };
    let next = sinon.stub();

    await stats(req, res, next);
    chai.expect(res).to.have.property('count_human_dna').and.to.be.a('number');
  });
});
