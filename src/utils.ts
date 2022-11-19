/**
 * Mixes two numbers together by alpha.
 * Often called `lerp`.
 * @param source The source number
 * @param target The target number
 * @param alpha The interpolation weight
 * @returns The interpolated value
 */
export function mix(source: number, target: number, alpha: number): number {
  return source * (1.0 - alpha) + target * alpha;
}
