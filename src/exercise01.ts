export function formatName(
  firstName: string,
  lastName: string,
  middleName?: string | null,
): string {
  let output = lastName + ', ' + firstName;
  if (middleName) {
    output += ' ' + middleName[0] + '.';
  }

  return output;
}
