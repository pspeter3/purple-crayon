import assert from "node:assert/strict";
import test from "node:test";
import { NAME } from "./index.js";

test("NAME", () => {
    assert.equal(NAME, "purple-crayon")
})