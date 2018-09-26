const sampleObj = {
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang',
  };
  
  function keyDeleter(obj) {
    delete sampleObj.foo;
    delete sampleObj.bar;
    return obj;
  }

  console.log(keyDeleter(sampleObj));