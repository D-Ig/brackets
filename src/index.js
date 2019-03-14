module.exports = function check(str, bracketsConfig) {
  const mappedConfig = new Map(bracketsConfig);
  
  const isOpeningSymbol = symbol => mappedConfig.has(symbol);
  
  const getClosingSymbolFor = symbol => mappedConfig.get(symbol);
  
  const isEpmty = stack => (stack.length === 0);

  const stack = [];
  
  for (const symbol of str) {
    if (isOpeningSymbol(symbol) && !stack.includes(symbol)) {
      const closingSymbol = getClosingSymbolFor(symbol);
      stack.push(closingSymbol);
    } else {
      if (isEpmty(stack)) {
        return false;
      };
      const last = stack.pop();
      if (symbol !== last) {
        return false;
      };
    }
  };
  
  return isEpmty(stack);
};
