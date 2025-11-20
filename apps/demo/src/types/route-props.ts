/**
 * RouteProps type defines the shape of props for route components,
 * including dynamic route parameters and children.
 *
 * @param Key - A string or an array of strings representing the dynamic route parameter keys.
 * @returns An object containing:
 *   - params: A Promise that resolves to an object mapping each key in Key to a string value.
 *   - children: A ReactNode representing the child components.
 */
export type RouteProps<Key extends string | readonly string[]> = {
  params: Promise<{
    [K in (Key extends readonly (infer U)[] ? U : Key) & string]: string;
  }>;
  children: React.ReactNode;
};
