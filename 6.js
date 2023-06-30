let arr = [1, 1, 1, 2];
for (i = 0; i < arr.length; i++) {
  for (j = i + 1; j < arr.length; j++)
    if (arr[i] === arr[j]) {
      console.log(true);
    } else {
      console.log(false);
    }
}
