import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/*eslint-disable no-console */

fs.readFile('src/index.html', 'utf8', (err, markup) => {
    if (err){
        return console.log(err);
    }

    const $ = cheerio.load(markup);

    //since a seperate spreadsheet is only ultilized for the production build, need to dynamically add it 
    $('head').prepend('<Link rel="stylesheet" href="styles.css">');

    fs.writeFile('dist/index.html', $.html(), 'utf8', (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('index.html written to /dist'.green);
    });
});