export type DashboardWidget = {
  id: string;
  title: string;
};

export const dashboardWidgets = [
  {
    id: '1',
    title: 'Top selling products',
  },
  {
    id: '2',
    title: 'Top sellers',
  },
  {
    id: '3',
    title: 'Inventory status',
  },
  {
    id: '4',
    title: 'Customer feedback',
  },
  {
    id: '5',
    title: 'Marketing campaigns',
  },
  {
    id: '6',
    title: 'Website traffic',
  },
] satisfies Array<DashboardWidget>;
