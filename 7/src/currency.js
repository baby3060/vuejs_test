const digitREP = /(\d{3})(?=\d)/g;

// 숫자식 표현
export function currency(value, currency, decimals) {
  value = parseFloat(value);
  if(!isFinite(value) || (!value && value !== 0)) return '';
  currency = currency != null ? currency : '￦';
  decimals = decimals != null ? decimals : 0;
  var stringified = Math.abs(value).toFixed(decimals);
  var _int = decimals ? stringified.slice(0, -1 - decimals)
                      : stringified;
  var i = _int.length % 3;
  var head = (i > 0) ? (_int.slice(0, i) + (_int.length > 3 ? ',' : '')) : '';
  var sign = value < 0 ? '-': '';
  return sign + currency + head + _int.slice(i).replace(digitREP, '$1,');
}
