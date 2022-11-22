import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { clamp, mix, remix, unmix } from "./utils.js";

describe("utils", () => {
  describe("mix", () => {
    it("should work when alpha is 0", () => {
      assert.equal(mix(0, 1, 0), 0);
    });

    it("should work when alpha is 1", () => {
      assert.equal(mix(0, 1, 1), 1);
    });

    it("should work when alpha is 0.5", () => {
      assert.equal(mix(0, 1, 0.5), 0.5);
    });
  });

  describe("unmix", () => {
    it("should work when source", () => {
      assert.equal(unmix(0, 0, 2), 0);
    });

    it("should work when target", () => {
      assert.equal(unmix(2, 0, 2), 1);
    });

    it("should work when middle", () => {
      assert.equal(unmix(1, 0, 2), 0.5);
    });
  });

  describe("remix", () => {
    it("should map the value appropriately", () => {
      assert.equal(remix(1, 0, 2, 3, 5), 4);
    });
  });

  describe("clamp", () => {
    it("should respect max", () => {
      assert.equal(clamp(1.5, 0, 1), 1);
    });

    it("should respect min", () => {
      assert.equal(clamp(-0.5, 0, 1), 0);
    });

    it("should respect value", () => {
      assert.equal(clamp(0.5, 0, 1), 0.5);
    });
  });
});
