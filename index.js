/**
 * @param {*} phone
 */
function phoneValidator(phone) {
  const saf = new RegExp(
    '^(?:254|\\+254|0)?(7(?:(?:[129][0-9])|(?:0[0-9])|(?:6[8-9])|(?:5[7-9])|(?:4[5-6])|(?:4[8])|(4[0-3]))[0-9]{6})$'
  );
  if (phone.length !== 0) {
    const replPhone1 = phone.trim();
    const replPhone2 = replPhone1.replace(/\\s/, '');
    const p1 = saf.test(phone);
    if (p1) {
      if (phone.charAt(0) === '0') {
        return replPhone2.replace(phone.charAt(0), '254');
      }

      if (phone.charAt(0) === '7') {
        return `254 + ${replPhone2}`;
      }

      if (phone.charAt(0) === '+') {
        return replPhone2.replace(phone.charAt(0), '');
      }
      return phone;
    }
  }
}

module.exports = (phone) => phoneValidator(phone);
