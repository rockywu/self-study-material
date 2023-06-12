module.exports = function(source, map){
    source = source.replace(/console\.log/g, 'test')
    return source
}