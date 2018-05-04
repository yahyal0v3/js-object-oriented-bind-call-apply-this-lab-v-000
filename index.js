
function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, name, arg) {
  return fn.call(name, arg)
}

function setThisWithApply(fn, name, arg) {
  return fn.apply(name, [arg])
}