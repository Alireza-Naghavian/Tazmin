export const convertToEnglishDigits = (input) => {
    const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
    const englishDigits = '0123456789';
    return input.replace(/[۰-۹]/g, (w) => englishDigits[persianDigits.indexOf(w)]);
  };