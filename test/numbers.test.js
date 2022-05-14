const utd = require('../src/index');

const testString = '0123456789';

const correctAnswerNumbers = {
    bold_serif: '𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗',
    italic_serif: '0123456789',
    bold_italic_serif: '0123456789',
    script: '0123456789',
    bold_script: '0123456789',
    fraktur: '0123456789',
    bold_fraktur: '0123456789',
    double_struck: '𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡',
    sans_serif: '𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫',
    bold_sans_serif: '𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵',
    italic_sans_serif: '0123456789',
    bold_italic_sans_serif: '0123456789',
    monospace: '𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿',
    regional_indicator: '0123456789',
    circle: '⓪①②③④⑤⑥⑦⑧⑨',
    black_circle: '0123456789',
    square: '0123456789',
    parenthesized: '0123456789',
    fullwidth: '０１２３４５６７８９',
};

test('bold_serif Numbers', () => {
    expect(utd.decorate(testString, 'bold_serif')).toBe(correctAnswerNumbers.bold_serif);
});

test('italic_serif Numbers', () => {
    expect(utd.decorate(testString, 'italic_serif')).toBe(correctAnswerNumbers.italic_serif);
});

test('bold_italic_serif Numbers', () => {
    expect(utd.decorate(testString, 'bold_italic_serif')).toBe(correctAnswerNumbers.bold_italic_serif);
});

test('script Numbers', () => {
    expect(utd.decorate(testString, 'script')).toBe(correctAnswerNumbers.script);
});

test('bold_script Numbers', () => {
    expect(utd.decorate(testString, 'bold_script')).toBe(correctAnswerNumbers.bold_script);
});

test('fraktur Numbers', () => {
    expect(utd.decorate(testString, 'fraktur')).toBe(correctAnswerNumbers.fraktur);
});

test('bold_fraktur Numbers', () => {
    expect(utd.decorate(testString, 'bold_fraktur')).toBe(correctAnswerNumbers.bold_fraktur);
});

test('double_struck Numbers', () => {
    expect(utd.decorate(testString, 'double_struck')).toBe(correctAnswerNumbers.double_struck);
});

test('sans_serif Numbers', () => {
    expect(utd.decorate(testString, 'sans_serif')).toBe(correctAnswerNumbers.sans_serif);
});

test('bold_sans_serif Numbers', () => {
    expect(utd.decorate(testString, 'bold_sans_serif')).toBe(correctAnswerNumbers.bold_sans_serif);
});

test('italic_sans_serif Numbers', () => {
    expect(utd.decorate(testString, 'italic_sans_serif')).toBe(correctAnswerNumbers.italic_sans_serif);
});
