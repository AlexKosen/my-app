export function percentDifference(a, b) {
  if (a === 0) {
    throw new Error(
      "Початкове значення не може бути 0, оскільки це призведе до ділення на 0."
    );
  }

  const growth = ((b - a) / a) * 100;
  return +growth.toFixed(2);
}

export function capitalize(str) {
  if (!str) return ""; 
  return str[0].toUpperCase() + str.substring(1);
}

