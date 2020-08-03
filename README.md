# React Timeline

Timeline component to React library

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]
[![Dependencies][david-image]](david-url)
[![DevDependencies][david-dev-image]][david-dev-url]

[npm-image]: http://img.shields.io/npm/v/ac-react-timeline.svg?style=flat-square
[npm-url]: http://npmjs.org/package/ac-react-timeline
[download-image]: https://img.shields.io/npm/dm/ac-react-timeline.svg?style=flat-square
[download-url]: https://npmjs.org/package/ac-react-timeline
[david-url]: https://david-dm.org/maximillianfx/react-timeline
[david-image]: https://david-dm.org/maximillianfx/react-timeline/status.svg?style=flat-square
[david-dev-url]: https://david-dm.org/maximillianfx/react-timeline?type=dev
[david-dev-image]: https://david-dm.org/maximillianfx/react-timeline/dev-status.svg?style=flat-square

## Screenshot

<img src="https://i.ibb.co/FgmtryK/Peek-03-08-2020-19-51.gif"/>

## Usage

### Install the package

```
npm i ac-react-timeline
```

### Import

```javascript
import ReactTimeline from 'ac-react-timeline'
```
### Add to your page

```javascript
<ReactTimeline list={list}/>
```

The `list` parameter must be a list with the following content:

```javascript
list = [
    {
      "id": 1,
      "text": "Stage 1",
      "actual": false,
      "completed": true
    },
    {
      "id": 2,
      "text": "Stage 2",
      "actual": true,
      "completed": false
    },
    {
      "id": 3,
      "text": "Stage 3",
      "actual": false,
      "completed": false
    }
]
```

#### Parameters description
| Parameter | Type    | Description                |
| --------- | ------- | -------------------------- |
| Id        | number  | Id element                 |
| Text      | string  | Label stage                |
| Actual    | boolean | The actual stage among all |
| Completed | boolean | Stage completed            |


## License
ReactTimeline is released under the MIT license.