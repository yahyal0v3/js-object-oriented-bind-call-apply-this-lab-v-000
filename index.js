
function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, name, arg) {
  return fn.call(name, arg)
}
