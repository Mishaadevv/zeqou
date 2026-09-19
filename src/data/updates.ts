/**
 * Updates feed data.
 *
 * Placeholder content — replace with real release notes, versions and
 * dates as the ecosystem ships. Newest-first.
 */

export interface UpdateEntry {
  id: string;
  /** Product slug from products.ts, or 'ecosystem' for cross-cutting news. */
  product: 'harness' | 'xchat' | 'xtraining' | 'ecosystem';
  productLabel: string;
  title: string;
  kind: string;
}

export const updates: UpdateEntry[] = [
  {
    id: 'xtraining-v020',
    product: 'xtraining',
    productLabel: 'ZeqouXTraining 0.2',
    title: 'Train models from scratch + one-click runtime install',
    kind: 'Release',
  },
  {
    id: 'harness-release',
    product: 'harness',
    productLabel: 'Zeqou Harness',
    title: 'New release',
    kind: 'Release',
  },
  {
    id: 'xchat-features',
    product: 'xchat',
    productLabel: 'ZeqouXChat',
    title: 'New features',
    kind: 'Update',
  },
  {
    id: 'ecosystem-project',
    product: 'ecosystem',
    productLabel: 'Zeqou',
    title: 'New project',
    kind: 'Ecosystem',
  },
];
