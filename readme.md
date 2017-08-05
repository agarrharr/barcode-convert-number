# barcode-convert-number

[![Build Status](https://travis-ci.org/agarrharr/barcode-convert-number.svg?branch=master)](https://travis-ci.org/agarrharr/barcode-convert-number)

## Install

```
$ npm install --save barcode-convert-number
```

## Usage

```js
const barcodeConvertNumber = require('barcode-convert-number');

barcodeConvertNumber('0001011')
//=> 9
```

## API

### barcodeConvertNumber(bars)

Returns decimal value of barcode binary number.

#### bars

Type: `string`

A binary representation of the barcode number in binary.

## License

MIT
