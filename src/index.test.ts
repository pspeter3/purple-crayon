import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { NAME } from "./index.js";

describe("purple-crayon", () => {
    it("should have a name", () => {
        assert.equal(NAME, "purple-crayon");
    });
});
