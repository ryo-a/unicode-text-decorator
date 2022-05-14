const utd = require('../src/index');

const testString = "!@#$%^&*()-=+`'[]\\";

const correctAnswerExceptions = {
    bold_serif: "!@#$%^&*()-=+`'[]\\",
    italic_serif: "!@#$%^&*()-=+`'[]\\",
    bold_italic_serif: "!@#$%^&*()-=+`'[]\\",
    script: "!@#$%^&*()-=+`'[]\\",
    bold_script: "!@#$%^&*()-=+`'[]\\",
    fraktur: "!@#$%^&*()-=+`'[]\\",
    bold_fraktur: "!@#$%^&*()-=+`'[]\\",
    double_struck: "!@#$%^&*()-=+`'[]\\",
    sans_serif: "!@#$%^&*()-=+`'[]\\",
    bold_sans_serif: "!@#$%^&*()-=+`'[]\\",
    italic_sans_serif: "!@#$%^&*()-=+`'[]\\",
    bold_italic_sans_serif: "!@#$%^&*()-=+`'[]\\",
    monospace: "!@#$%^&*()-=+`'[]\\",
    regional_indicator: "!@#$%^&*()-=+`'[]\\",
    circle: "!@#$%^&*()-=+`'[]\\",
    black_circle: "!@#$%^&*()-=+`'[]\\",
    square: "!@#$%^&*()-=+`'[]\\",
    parenthesized: "!@#$%^&*()-=+`'[]\\",
    fullwidth: "!@#$%^&*()-=+`'[]\\",
};

test('bold_serif Numbers', () => {
    expect(utd.decorate(testString, 'bold_serif')).toBe(correctAnswerExceptions.bold_serif);
});

test('italic_serif Numbers', () => {
    expect(utd.decorate(testString, 'italic_serif')).toBe(correctAnswerExceptions.italic_serif);
});

test('bold_italic_serif Numbers', () => {
    expect(utd.decorate(testString, 'bold_italic_serif')).toBe(correctAnswerExceptions.bold_italic_serif);
});

test('script Numbers', () => {
    expect(utd.decorate(testString, 'script')).toBe(correctAnswerExceptions.script);
});

test('bold_script Numbers', () => {
    expect(utd.decorate(testString, 'bold_script')).toBe(correctAnswerExceptions.bold_script);
});

test('fraktur Numbers', () => {
    expect(utd.decorate(testString, 'fraktur')).toBe(correctAnswerExceptions.fraktur);
});

test('bold_fraktur Numbers', () => {
    expect(utd.decorate(testString, 'bold_fraktur')).toBe(correctAnswerExceptions.bold_fraktur);
});

test('double_struck Numbers', () => {
    expect(utd.decorate(testString, 'double_struck')).toBe(correctAnswerExceptions.double_struck);
});

test('sans_serif Numbers', () => {
    expect(utd.decorate(testString, 'sans_serif')).toBe(correctAnswerExceptions.sans_serif);
});

test('bold_sans_serif Numbers', () => {
    expect(utd.decorate(testString, 'bold_sans_serif')).toBe(correctAnswerExceptions.bold_sans_serif);
});

test('italic_sans_serif Numbers', () => {
    expect(utd.decorate(testString, 'italic_sans_serif')).toBe(correctAnswerExceptions.italic_sans_serif);
});
