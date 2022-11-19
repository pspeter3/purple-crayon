/**
 * Mixes two numbers together by alpha
 * Often called `lerp`
 * @param source The source number
 * @param target The target number
 * @param alpha The interpolation weight
 * @returns The interpolated value
 */
export function mix(source: number, target: number, alpha: number): number {
  return source * (1.0 - alpha) + target * alpha;
}

/**
 * Clamps a value between min and max
 * @param value The value to clamp
 * @param min The minimum allowed value
 * @param max The maximum allowed value
 * @returns The clamped value
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
