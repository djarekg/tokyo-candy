'use client';

import {
  makeStyles,
  Tab,
  TabList,
  type SelectTabData,
  type TabValue,
} from '@fluentui/react-components';
import { tokens } from '@tc/components/styles';
import type { UserModel } from '@tc/db';
import { Activity, lazy, useState, type FC, type PropsWithoutRef } from 'react';

const UserDetail = lazy(() => import('@/components/user/user-detail'));
const UserSettings = lazy(() => import('@/components/user/user-settings'));

type UserTabsProps = {
  user: UserModel;
};

const useStyles = makeStyles({
  tabList: {
    inlineSize: '100%',
  },
  panels: {
    inlineSize: '100%',
    paddingInline: tokens.spacingHorizontalM,
    paddingBlock: tokens.spacingVerticalL,
  },
});

const UserTabs: FC<PropsWithoutRef<UserTabsProps>> = ({ user }) => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState<TabValue>('details');
  const onTabSelect = (_: any, data: SelectTabData) => setSelectedTab(data.value);

  return (
    <>
      <TabList
        className={classes.tabList}
        aria-label="User Tabs"
        selectedValue={selectedTab}
        onTabSelect={onTabSelect}>
        <Tab value="details">Details</Tab>
        <Tab value="settings">Settings</Tab>
      </TabList>
      <section className={classes.panels}>
        <Activity mode={selectedTab === 'details' ? 'visible' : 'hidden'}>
          <UserDetail user={user} />
        </Activity>
        <Activity mode={selectedTab === 'settings' ? 'visible' : 'hidden'}>
          <UserSettings user={user} />
        </Activity>
      </section>
    </>
  );
};

export default UserTabs;
