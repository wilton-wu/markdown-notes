function findMax(val) {
  const reg = /\d+/g;
  const max = Math.max(val.match(reg));
  console.log(max);
}
findMax('sff9s999sd7fsdg')