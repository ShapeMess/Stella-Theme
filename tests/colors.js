const c = require('chalk');
console.log(c`
{bgRed      }{bgBlue      }{bgCyan      }{bgGreen      }{bgMagenta      }{bgWhite      }{bgYellow      }
{bgRedBright      }{bgBlueBright      }{bgCyanBright      }{bgGreenBright      }{bgMagentaBright      }{bgWhiteBright      }{bgYellowBright      }
`);
console.log(c`
{red ABCdef} {blue ABCdef} {cyan ABCdef} {green ABCdef} {magenta ABCdef} {white ABCdef} {yellow ABCdef}
{redBright ABCdef} {blueBright ABCdef} {cyanBright ABCdef} {greenBright ABCdef} {magentaBright ABCdef} {whiteBright ABCdef} {yellowBright ABCdef}
`);