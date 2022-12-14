/**
 * Mixes two numbers together by alpha (lerp)
 * @param source The source number
 * @param target The target number
 * @param alpha The interpolation weight
 * @returns The interpolated value
 */
export function mix(source: number, target: number, alpha: number): number {
    return source * (1.0 - alpha) + target * alpha;
}

/**
 * Unmixes the value from source and target
 * @param value The interpolated value
 * @param source The source number
 * @param target The target number
 * @returns The interpolation weight
 */
export function unmix(value: number, source: number, target: number): number {
    return (value - source) / (target - source);
}

/**
 * Remixes a value to another spectrum
 * @param value The current interpolated value
 * @param currentSource The current source number
 * @param currentTarget The current target number
 * @param nextSource The next source number
 * @param nextTarget The next target number
 * @returns The next interpolated value
 */
export function remix(
    value: number,
    currentSource: number,
    currentTarget: number,
    nextSource: number,
    nextTarget: number
): number {
    return mix(
        nextSource,
        nextTarget,
        unmix(value, currentSource, currentTarget)
    );
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
