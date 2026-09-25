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
    id: 'harness-v140-plan',
    product: 'harness',
    productLabel: 'Zeqou Harness 1.4',
    title: 'Read-only agent plan, a transcript that stays still, and a question card that replaces guessing',
    kind: 'Release',
  },
  {
    id: 'xtraining-v200-rebuild',
    product: 'xtraining',
    productLabel: 'ZeqouXTraining 2.0',
    title: 'Rebuilt engine, two training backends, installers that update themselves',
    kind: 'Release',
  },
  {
    id: 'harness-v130-todo',
    product: 'harness',
    productLabel: 'Zeqou Harness 1.3',
    title: 'Agent todo list: live Tasks panel + the todo tool',
    kind: 'Feature',
  },
  {
    id: 'xchat-v031-context',
    product: 'xchat',
    productLabel: 'ZeqouXChat 0.3.1',
    title: 'Real-time context window with exact server tokens',
    kind: 'Update',
  },
  {
    id: 'xtraining-v040-any-model',
    product: 'xtraining',
    productLabel: 'ZeqouXTraining 0.4',
    title: 'Fine-tune any model, including your own trained ones',
    kind: 'Release',
  },
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
