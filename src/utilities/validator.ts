export const validateString = (value: unknown, MaxLength: number) => {
  if (!value || typeof value !== 'string' || value.length > MaxLength) {
    return false;
  }
  return true;
};
