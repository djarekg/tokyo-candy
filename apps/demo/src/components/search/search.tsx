'use client';

import { defaultItems } from '@/components/search/default-items';
import { getSearch } from '@/lib/api/search';
import { SearchResultType } from '@/types/search-result-type';
import CommandPalette from '@tc/components/command-palette';
import type { CommandItem } from '@tc/components/command-palette/index';
import { isNullOrEmpty } from '@tc/core';
import type { SearchResult } from '@tc/db';
import { useEffect, useEffectEvent, useState } from 'react';
import { searchResultMap } from './search-result-map';
import styles from './search.module.css';

// Create command palette items from search results
const createItems = (results: SearchResult[] | null): CommandItem[] | undefined => {
  if (!results) {
    return [];
  }

  return results.map(({ id, name, type }) => {
    const { href, filledIcon, regularIcon } = searchResultMap[type as SearchResultType];

    return {
      key: id,
      label: name,
      href: `${href}/${id}`,
      filledIcon: filledIcon,
      regularIcon: regularIcon,
    };
  });
};

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string | undefined>();
  const [items, setItems] = useState<CommandItem[] | undefined>();

  // Perform search when search value changes. If the search value is empty, clear the items.
  const performSearch = useEffectEvent(async (value: string | undefined) => {
    if (isNullOrEmpty(value)) {
      setItems(undefined);
    } else {
      const results = await getSearch(value);
      const items = createItems(results);
      setItems(items);
    }
  });

  useEffect(() => {
    performSearch(searchValue);
  }, [searchValue]);

  return (
    <>
      <div
        className={styles.input}
        onClick={() => setIsOpen(true)}>
        <span className={styles.placeholder}>Search...</span>
        <div className={styles.shortcuts}>
          <span className={`${styles.shortcutHint} tc-shortcut-hint`}>/</span>
          <span className={`${styles.shortcutHint} tc-shortcut-hint`}>Ctrl+K</span>
        </div>
      </div>
      <CommandPalette
        open={isOpen}
        defaultItems={defaultItems}
        items={items}
        onSearch={value => setSearchValue(value)}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default Search;
