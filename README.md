# unicode-text-decorator

unicode-text-decorator is a simple library to convert ASCII text to decorated text.

```
𝚞𝚗𝚒𝚌𝚘𝚍𝚎-𝚝𝚎𝚡𝚝-𝚍𝚎𝚌𝚘𝚛𝚊𝚝𝚘𝚛 is 𝗮 𝘀𝗶𝗺𝗽𝗹𝗲 𝗹𝗶𝗯𝗿𝗮𝗿𝘆 to 𝕔𝕠𝕟𝕧𝕖𝕣𝕥 ⒶⓈⒸⒾⒾ text to 🇩🇪🇨🇴🇷🇦🇹🇪🇩 text.
```

## Notice



## Install

```sh
npm i unicode-text-decorator
```

## Usage

`utd.decorate(targetText, fontName)`

```js
const utd = require('unicode-text-decorator');

let wildScreen = utd.decorate('wi(l)d-screen', 'bold_italic_serif');
let baroque = utd.decorate('baroque', 'bold_sans_serif');

console.log(wildScreen + ' ' + baroque);

let nanaDaiba = utd.decorate('Nana Daiba / 大場なな (CV: Moeka Koizumi / 小泉萌香)', 'bold_script');
console.log(nanaDaiba);
```

#### expected output

```
𝒘𝒊(𝒍)𝒅-𝒔𝒄𝒓𝒆𝒆𝒏 𝗯𝗮𝗿𝗼𝗾𝘂𝗲
𝓝𝓪𝓷𝓪 𝓓𝓪𝓲𝓫𝓪 / 大場なな (𝓒𝓥: 𝓜𝓸𝓮𝓴𝓪 𝓚𝓸𝓲𝔃𝓾𝓶𝓲 / 小泉萌香)
```

Symbols (like space and `/`) and non-ASCII characters are ignored.


FYI: *[wi(l)d-screen baroque](https://music.apple.com/jp/album/wi-l-d-screen-baroque/1575167308?i=1575167309)* is the song appeard in the movie of *[Revue Starlight](https://en.wikipedia.org/wiki/Revue_Starlight)*. The title of the song is displayed in a mixture of serif and sans-serif in the scene.

### Supported Font

| font name              | Example        | Capital Letters | Small Letters | Numbers |
| :--------------------- | :------------- | :-------------- | :------------ | :------ |
| bold_serif             | 𝐔𝐧𝐢𝐜𝐨𝐝𝐞        | ✅               | ✅             | ✅       |
| italic_serif           | 𝑈𝑛𝑖𝑐𝑜𝑑𝑒        | ✅               | ✅             |         |
| bold_italic_serif      | 𝑼𝒏𝒊𝒄𝒐𝒅𝒆        | ✅               | ✅             |         |
| script                 | 𝒰𝓃𝒾𝒸ℴ𝒹ℯ        | ✅               | ✅             |         |
| bold_script            | 𝓤𝓷𝓲𝓬𝓸𝓭𝓮        | ✅               | ✅             |         |
| fraktur                | 𝔘𝔫𝔦𝔠𝔬𝔡𝔢        | ✅               | ✅             |         |
| bold_fraktur           | 𝖀𝖓𝖎𝖈𝖔𝖉𝖊        | ✅               | ✅             |         |
| double_struck          | 𝕌𝕟𝕚𝕔𝕠𝕕𝕖        | ✅               | ✅             | ✅       |
| sans_serif             | 𝖴𝗇𝗂𝖼𝗈𝖽𝖾        | ✅               | ✅             | ✅       |
| bold_sans_serif        | 𝗨𝗻𝗶𝗰𝗼𝗱𝗲        | ✅               | ✅             | ✅       |
| italic_sans_serif      | 𝘜𝘯𝘪𝘤𝘰𝘥𝘦        | ✅               | ✅             |         |
| bold_italic_sans_serif | 𝙐𝙣𝙞𝙘𝙤𝙙𝙚        | ✅               | ✅             |         |
| monospace              | 𝚄𝚗𝚒𝚌𝚘𝚍𝚎        | ✅               | ✅             |         |
| regional_indicator     | 🇺🇳🇮🇨🇴🇩🇪           | ✅               |               |         |
| circle                 | Ⓤⓝⓘⓒⓞⓓⓔ        | ✅               | ✅             | ✅       |
| black_circle           | 🅤🅝🅘🅒🅞🅓🅔        | ✅               |               |         |
| square                 | 🅄🄽🄸🄲🄾🄳🄴        | ✅               |               |         |
| parenthesized          | 🄤⒩⒤⒞⒪⒟⒠        | ✅               | ✅             |         |
| fullwidth              | Ｕｎｉｃｏｄｅ | ✅               | ✅             | ✅       |

### Fallback Option

Some fonts don't have characters for small letters. In that case, if you turn on the fallback option, this returns existing capital letters instead of (unexisting) small ones.

```js
let tokyoTower1 = utd.decorate('Tokyo Tower', 'black_circle'); // default is false
let tokyoTower2 = utd.decorate('Tokyo Tower', 'black_circle', { fallback: true });
let tokyoTower3 = utd.decorate('Torre de Tóquio','black_circle', { fallback: true });

console.log(tokyoTower1);
console.log(tokyoTower2);
console.log(tokyoTower3);
```

#### expected output

Even with the fallback mode, unexisting characters (non-ASCII like **`ó`** ) will be ignored.

```
🅣okyo 🅣ower
🅣🅞🅚🅨🅞 🅣🅞🅦🅔🅡
🅣🅞🅡🅡🅔 🅓🅔 🅣ó🅠🅤🅘🅞
```