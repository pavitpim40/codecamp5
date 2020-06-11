const fn1 = () => {
    setTimeout(() => {
      console.log('fn1')
    }, 2000)
  }
  const fn2 = () => {
    fn1()
    setTimeout(() => {
      console.log('fn2')
    }, 1000)
  }
  const fn3 = () => {
    fn2()
  }
  fn3()