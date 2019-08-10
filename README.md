# GBF-Bookmarklet
A Chrome bookmarklet to export a party from GBF to [granblue.party](http://www.granblue.party)

## Version
4.0

## Changelog
* 4.0: Support for weapon keys (Atma, Ultima, ...)
* 3.0: Support for + Bonus and Perpetuity Ring
* 2.0: Support for Stars count abd MC skills

## Restrictions
* Class skills detection only works with the English version of the game
* Since the Party page does not contain enough data for weapons, the number of stars is approximated from the skill level

## Installation
* In Chrome, open Bookmarks -> Bookmark Manager (or use Ctrl + Shift + O)
* Right-click where you want to create the bookmark, then choose "Add new bookmark"
* Choose a name for the bookmark. For example: "Export Party to granblue.party"
* Copy the content of this file [bookmarklet.min.js](https://github.com/Minimalist3/GBF-Bookmarklet/raw/master/bookmarklet.min.js) in the URL field

## Usage
In Granblue Fantasy, choose a Party, then click on the bookmark. A new tab should open, showing a preffiled party builder.

## DIY
In case you don't trust the minified version of the code, you can find a human-readable version of the code in the file "bookmark.js" and minify it yourself with a service of your choice.
I personally use http://dean.edwards.name/packer/.

## Disclaimer
This is not an add-on. It is equivalent to using the Chrome DevTools console.
To my knowledge, this cannot be detected by a website and cannot get you banned.