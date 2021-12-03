export default function (tag) {
    switch (tag) {
        case '#':
            return '当前定位'
        case 'hot':
            return '热门城市'
        default:
            return tag.toUpperCase()
    }
}