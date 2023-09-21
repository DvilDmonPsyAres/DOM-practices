

export const lastState = () => {
  const commentsMemory = {};
  console.log('testing last state')
  for(const keys in localStorage){
    const value = localStorage[keys]
    if(keys.startsWith('data-comid')) {
      console.log(value)
      commentsMemory[keys] = value;
      // magic style

    }
  }
  return commentsMemory;
}
