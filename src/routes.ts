export const Routes = {
  threads: 'threads',
  later: 'later',
  direct: 'direct',
  mentions: 'mentions',
  drafts: 'drafts',
  connect: 'connect',
  files: 'files',
  apps: 'apps',
  channels: (id: string | number) => `channels/${id}`,
  directs: (id: string | number) => `direct/${id}`,
};
