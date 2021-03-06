const utd = require('../src/index');

const testString = 'abcdefghijklmnopqrstuvwxyz';

const correctAnswerSmallWithFallBack = {
    bold_serif: "๐๐๐๐๐๐๐ ๐ก๐ข๐ฃ๐ค๐ฅ๐ฆ๐ง๐จ๐ฉ๐ช๐ซ๐ฌ๐ญ๐ฎ๐ฏ๐ฐ๐ฑ๐ฒ๐ณ",
    italic_serif: '๐๐๐๐๐๐๐โ๐๐๐๐๐๐๐๐๐๐๐ ๐ก๐ข๐ฃ๐ค๐ฅ๐ฆ๐ง',
    bold_italic_serif: '๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐',
    script: '๐ถ๐ท๐ธ๐นโฏ๐ปโ๐ฝ๐พ๐ฟ๐๐๐๐โด๐๐๐๐๐๐๐๐๐๐๐',
    bold_script: '๐ช๐ซ๐ฌ๐ญ๐ฎ๐ฏ๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต๐ถ๐ท๐ธ๐น๐บ๐ป๐ผ๐ฝ๐พ๐ฟ๐๐๐๐',
    fraktur: '๐๐๐ ๐ก๐ข๐ฃ๐ค๐ฅ๐ฆ๐ง๐จ๐ฉ๐ช๐ซ๐ฌ๐ญ๐ฎ๐ฏ๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต๐ถ๐ท',
    bold_fraktur: '๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐',
    double_struck: '๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐ ๐ก๐ข๐ฃ๐ค๐ฅ๐ฆ๐ง๐จ๐ฉ๐ช๐ซ',
    sans_serif: '๐บ๐ป๐ผ๐ฝ๐พ๐ฟ๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐',
    bold_sans_serif: '๐ฎ๐ฏ๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต๐ถ๐ท๐ธ๐น๐บ๐ป๐ผ๐ฝ๐พ๐ฟ๐๐๐๐๐๐๐๐',
    italic_sans_serif: '๐ข๐ฃ๐ค๐ฅ๐ฆ๐ง๐จ๐ฉ๐ช๐ซ๐ฌ๐ญ๐ฎ๐ฏ๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต๐ถ๐ท๐ธ๐น๐บ๐ป',
    bold_italic_sans_serif: '๐๐๐๐๐๐๐๐๐๐๐ ๐ก๐ข๐ฃ๐ค๐ฅ๐ฆ๐ง๐จ๐ฉ๐ช๐ซ๐ฌ๐ญ๐ฎ๐ฏ',
    monospace: '๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐ ๐ก๐ข๐ฃ',
    regional_indicator: '๐ฆ๐ง๐จ๐ฉ๐ช๐ซ๐ฌ๐ญ๐ฎ๐ฏ๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต๐ถ๐ท๐ธ๐น๐บ๐ป๐ผ๐ฝ๐พ๐ฟ',
    circle: 'โโโโโโโโโโโโโโโโโ โกโขโฃโคโฅโฆโงโจโฉ',
    black_circle: '๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐ ๐ก๐ข๐ฃ๐ค๐ฅ๐ฆ๐ง๐จ๐ฉ',
    square: '๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต๐ถ๐ท๐ธ๐น๐บ๐ป๐ผ๐ฝ๐พ๐ฟ๐๐๐๐๐๐๐๐๐๐',
    parenthesized: 'โโโโโ โกโขโฃโคโฅโฆโงโจโฉโชโซโฌโญโฎโฏโฐโฑโฒโณโดโต',
    fullwidth: '๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ',
};

test('bold_serif Small (Fallback)', () => {
    expect(utd.decorate(testString, 'bold_serif')).toBe(correctAnswerSmallWithFallBack.bold_serif);
});

test('italic_serif Small (Fallback)', () => {
    expect(utd.decorate(testString, 'italic_serif')).toBe(correctAnswerSmallWithFallBack.italic_serif);
});

test('bold_italic_serif Small (Fallback)', () => {
    expect(utd.decorate(testString, 'bold_italic_serif')).toBe(correctAnswerSmallWithFallBack.bold_italic_serif);
});

test('script Small (Fallback)', () => {
    expect(utd.decorate(testString, 'script')).toBe(correctAnswerSmallWithFallBack.script);
});

test('bold_script Small (Fallback)', () => {
    expect(utd.decorate(testString, 'bold_script')).toBe(correctAnswerSmallWithFallBack.bold_script);
});

test('fraktur Small (Fallback)', () => {
    expect(utd.decorate(testString, 'fraktur')).toBe(correctAnswerSmallWithFallBack.fraktur);
});

test('bold_fraktur Small (Fallback)', () => {
    expect(utd.decorate(testString, 'bold_fraktur')).toBe(correctAnswerSmallWithFallBack.bold_fraktur);
});

test('double_struck Small (Fallback)', () => {
    expect(utd.decorate(testString, 'double_struck')).toBe(correctAnswerSmallWithFallBack.double_struck);
});

test('sans_serif Small (Fallback)', () => {
    expect(utd.decorate(testString, 'sans_serif')).toBe(correctAnswerSmallWithFallBack.sans_serif);
});

test('bold_sans_serif Small (Fallback)', () => {
    expect(utd.decorate(testString, 'bold_sans_serif')).toBe(correctAnswerSmallWithFallBack.bold_sans_serif);
});

test('italic_sans_serif Small (Fallback)', () => {
    expect(utd.decorate(testString, 'italic_sans_serif')).toBe(correctAnswerSmallWithFallBack.italic_sans_serif);
});


const correctAnswerSmall = {
    bold_serif: "๐๐๐๐๐๐๐ ๐ก๐ข๐ฃ๐ค๐ฅ๐ฆ๐ง๐จ๐ฉ๐ช๐ซ๐ฌ๐ญ๐ฎ๐ฏ๐ฐ๐ฑ๐ฒ๐ณ",
    italic_serif: '๐๐๐๐๐๐๐โ๐๐๐๐๐๐๐๐๐๐๐ ๐ก๐ข๐ฃ๐ค๐ฅ๐ฆ๐ง',
    bold_italic_serif: '๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐',
    script: '๐ถ๐ท๐ธ๐นโฏ๐ปโ๐ฝ๐พ๐ฟ๐๐๐๐โด๐๐๐๐๐๐๐๐๐๐๐',
    bold_script: '๐ช๐ซ๐ฌ๐ญ๐ฎ๐ฏ๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต๐ถ๐ท๐ธ๐น๐บ๐ป๐ผ๐ฝ๐พ๐ฟ๐๐๐๐',
    fraktur: '๐๐๐ ๐ก๐ข๐ฃ๐ค๐ฅ๐ฆ๐ง๐จ๐ฉ๐ช๐ซ๐ฌ๐ญ๐ฎ๐ฏ๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต๐ถ๐ท',
    bold_fraktur: '๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐',
    double_struck: '๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐ ๐ก๐ข๐ฃ๐ค๐ฅ๐ฆ๐ง๐จ๐ฉ๐ช๐ซ',
    sans_serif: '๐บ๐ป๐ผ๐ฝ๐พ๐ฟ๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐',
    bold_sans_serif: '๐ฎ๐ฏ๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต๐ถ๐ท๐ธ๐น๐บ๐ป๐ผ๐ฝ๐พ๐ฟ๐๐๐๐๐๐๐๐',
    italic_sans_serif: '๐ข๐ฃ๐ค๐ฅ๐ฆ๐ง๐จ๐ฉ๐ช๐ซ๐ฌ๐ญ๐ฎ๐ฏ๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต๐ถ๐ท๐ธ๐น๐บ๐ป',
    bold_italic_sans_serif: '๐๐๐๐๐๐๐๐๐๐๐ ๐ก๐ข๐ฃ๐ค๐ฅ๐ฆ๐ง๐จ๐ฉ๐ช๐ซ๐ฌ๐ญ๐ฎ๐ฏ',
    monospace: '๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐ ๐ก๐ข๐ฃ',
    regional_indicator: 'abcdefghijklmnopqrstuvwxyz',
    circle: 'โโโโโโโโโโโโโโโโโ โกโขโฃโคโฅโฆโงโจโฉ',
    black_circle: 'abcdefghijklmnopqrstuvwxyz',
    square: 'abcdefghijklmnopqrstuvwxyz',
    parenthesized: 'โโโโโ โกโขโฃโคโฅโฆโงโจโฉโชโซโฌโญโฎโฏโฐโฑโฒโณโดโต',
    fullwidth: '๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ',
};

test('bold_serif Small (No Fallback)', () => {
    expect(utd.decorate(testString, 'bold_serif')).toBe(correctAnswerSmall.bold_serif);
});

test('italic_serif Small (No Fallback)', () => {
    expect(utd.decorate(testString, 'italic_serif')).toBe(correctAnswerSmall.italic_serif);
});

test('bold_italic_serif Small (No Fallback)', () => {
    expect(utd.decorate(testString, 'bold_italic_serif')).toBe(correctAnswerSmall.bold_italic_serif);
});

test('script Small (No Fallback)', () => {
    expect(utd.decorate(testString, 'script')).toBe(correctAnswerSmall.script);
});

test('bold_script Small (No Fallback)', () => {
    expect(utd.decorate(testString, 'bold_script')).toBe(correctAnswerSmall.bold_script);
});

test('fraktur Small (No Fallback)', () => {
    expect(utd.decorate(testString, 'fraktur')).toBe(correctAnswerSmall.fraktur);
});

test('bold_fraktur Small (No Fallback)', () => {
    expect(utd.decorate(testString, 'bold_fraktur')).toBe(correctAnswerSmall.bold_fraktur);
});

test('double_struck Small (No Fallback)', () => {
    expect(utd.decorate(testString, 'double_struck')).toBe(correctAnswerSmall.double_struck);
});

test('sans_serif Small (No Fallback)', () => {
    expect(utd.decorate(testString, 'sans_serif')).toBe(correctAnswerSmall.sans_serif);
});

test('bold_sans_serif Small (No Fallback)', () => {
    expect(utd.decorate(testString, 'bold_sans_serif')).toBe(correctAnswerSmall.bold_sans_serif);
});

test('italic_sans_serif Small (No Fallback)', () => {
    expect(utd.decorate(testString, 'italic_sans_serif')).toBe(correctAnswerSmall.italic_sans_serif);
});