/**
 * Updates feed data.
 *
 * Real releases and milestones, newest-first. Product slugs come from
 * products.ts; 'ecosystem' is for cross-cutting news.
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
    title: 'Agent todo list: the todo tool writes the plan, in the chat where it belongs',
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
    id: 'xchat-v030-local',
    product: 'xchat',
    productLabel: 'ZeqouXChat 0.3',
    title: 'Free local models with a built-in engine — no Ollama or LM Studio required',
    kind: 'Release',
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
    id: 'ecosystem-docs',
    product: 'ecosystem',
    productLabel: 'Zeqou',
    title: 'Docs for every app: install, architecture and honest limits',
    kind: 'Website',
  },
];
