'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';

export type QueryParams = Record<string, string | null | undefined>;

export type SetQueryParamsOptions = {
  /**
   * When true, uses router.replace instead of router.push.
   * Defaults to true to avoid polluting history for filter-like changes.
   */
  replace?: boolean;
  /**
   * Passed through to Next.js navigation.
   */
  scroll?: boolean;
};

export type SetQueryParams = (
  nextQueryParams: QueryParams,
  options?: SetQueryParamsOptions
) => void;

/**
 * Manages the current route's query string as a state-like tuple: [queryParams, setQueryParams].
 * Source of truth is the URL; updates are applied via Next.js router navigation.
 */
export function useQueryString(): [QueryParams, SetQueryParams] {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const queryParams = useMemo<QueryParams>(() => {
    const result: QueryParams = {};
    // Preserve first value for each key; repeated keys are collapsed
    for (const [key, value] of searchParams.entries()) {
      if (!(key in result)) result[key] = value;
    }
    return result;
  }, [searchParams]);

  const setQueryParams = useCallback(
    (nextQueryParams: QueryParams, options?: SetQueryParamsOptions) => {
      const merged = { ...queryParams, ...nextQueryParams };

      const sp = new URLSearchParams();
      for (const [key, value] of Object.entries(merged)) {
        // Treat empty strings / nullish as "remove"
        if (value == null || value === '') continue;
        sp.set(key, value);
      }

      const qs = sp.toString();
      const url = qs ? `${pathname}?${qs}` : pathname;

      const { replace = true, scroll } = options ?? {};
      if (replace) router.replace(url, { scroll });
      else router.push(url, { scroll });
    },
    [router, pathname, queryParams]
  );

  return [queryParams, setQueryParams];
}

export default useQueryString;
