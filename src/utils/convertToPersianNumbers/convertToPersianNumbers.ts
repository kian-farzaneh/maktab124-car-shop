export function convertToPersianNumbers(input: string | number): string {
    const englishDigits = '0123456789';
    const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  
    return input
      .toString()
      .split('')
      .map(char => {
        const index = englishDigits.indexOf(char);
        return index !== -1 ? persianDigits[index] : char;
      })
      .join('');
  }
  