export type AppRouteItem = {
  component: React.FC;
  path: string;
  private?: boolean;
  title?: string;
  key: string;
};
