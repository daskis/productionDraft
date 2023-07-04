import {classNames} from "./classNames";

describe("classNames", () => {
    test("test", () => {
        expect(classNames("someClass", {}, [])).toBe("someClass");
    });
    test("test additional", () => {
        const expected = "someClass class1 class2 hovered scrollable";
        expect(classNames("someClass", {hovered: true, scrollable: true}, ["class1 class2"])).toBe(expected);
    });
});