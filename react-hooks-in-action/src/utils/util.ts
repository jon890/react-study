export function getUniqueValues(
  array: Record<string, string>[],
  property: string
) {
  const propValues = array.map((element) => element[property]);
  const uniqueValues = new Set(propValues);
  const uniqueValuesArray = [...uniqueValues];

  return uniqueValuesArray;
}
