import { assert } from "chai";

import compare from "../src/index";

describe("String.compare", () => {
  it("should return 1 if both strings are empty", () => {
    assert.equal(compare("", ""), 1);
  });

  it("should return 1 if one of strings is empty", () => {
    assert.equal(compare("hello", ""), 1);
  });

  it("should return 1 if strings are non-empty and same", () => {
    assert.equal(compare("hello", "hello"), 1);
  });

  it("should be > 0.5 if strings are non-empty and second string is found in first", () => {
    assert.isTrue(compare("hello", "he") > 0.5);
  });

  it("should be > 0.5", () => {
    assert.equal(compare("Hello world", "Helo"), 0.5);
  });

  it('"Hello World" -> "word" should be 0.5', () => {
    assert.equal(compare("Hello World", "word"), 0.5);
  });

  it('"Hello World" -> "Word" should be 0.5', () => {
    assert.equal(compare("Hello World", "Word"), 0.5);
  });
});
