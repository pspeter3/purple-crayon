import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { mix } from "./utils.js";

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
});
