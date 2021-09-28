export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function sleepNoPromise(ms: number) {
  const start = new Date().getTime(), expire = start + ms;
  while (new Date().getTime() < expire) { }
  return;
}