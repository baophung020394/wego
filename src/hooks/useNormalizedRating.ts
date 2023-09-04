function useNormalizedRating(initialRating = 1): number {
  const normalizedRating = Number(Math.min(Math.max(initialRating, 1), 5).toFixed(1))
  return normalizedRating
}

export default useNormalizedRating
