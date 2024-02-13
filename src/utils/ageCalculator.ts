function calculateAge(dateOfBirth: string): number {
  const [dayStr, monthStr, yearStr] = dateOfBirth.split('/').map((str) => parseInt(str, 10));
  const [dayOfBirth, monthOfBirth, yearOfBirth] = [dayStr, monthStr - 1, yearStr];

  const birthDate = new Date(yearOfBirth, monthOfBirth, dayOfBirth);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthDate.getFullYear();

  if (
    currentDate.getMonth() < monthOfBirth ||
    (currentDate.getMonth() === monthOfBirth && currentDate.getDate() < dayOfBirth)
  ) {
    age--;
  }

  return age;
}

export default calculateAge;
