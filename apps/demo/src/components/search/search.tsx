'use client';

import { defaultItems } from '@/components/search/default-items';
import { getSearch } from '@/lib/api/search';
import { SearchResultType } from '@/types/search-result-type';
import CommandPalette from '@tc/components/command-palette';
import type { CommandItem } from '@tc/components/command-palette/index';
import { isNullOrEmpty } from '@tc/core';
import { useEffect, useState } from 'react';
import { searchResultMap } from './search-result-map';
import styles from './search.module.css';

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string | undefined>();
  const [items, setItems] = useState<CommandItem[] | undefined>();

  const handleClick = () => setIsOpen(true);

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  useEffect(() => {
    if (!isNullOrEmpty(searchValue)) {
      const performSearch = async () => {
        const results = await getSearch(searchValue!);

        // Build items from results and mapping
        const items: CommandItem[] | undefined = results
          ? results.map(({ id, name, type }) => {
              const { href, filledIcon, regularIcon } = searchResultMap[type as SearchResultType];

              return {
                key: id,
                label: name,
                href: `${href}/${id}`,
                filledIcon: filledIcon,
                regularIcon: regularIcon,
              };
            })
          : undefined;

        setItems(items);
      };

      performSearch();
    }
  }, [searchValue]);

  return (
    <>
      <div
        className={styles.input}
        onClick={handleClick}>
        <span className={styles.placeholder}>Search...</span>
        <span className={`${styles.shortcutHint} tc-shortcut-hint`}>Ctrl+K</span>
      </div>
      <CommandPalette
        open={isOpen}
        defaultItems={defaultItems}
        items={items}
        onSearch={handleSearch}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default Search;
