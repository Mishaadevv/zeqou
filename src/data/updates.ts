/**
 * Updates feed data.
 *
 * Real releases and milestones, newest-first. Product slugs come from
 * products.ts; 'ecosystem' is for cross-cutting news.
 */

export interface UpdateEntry {
  id: string;
  /** Product slug from products.ts, or 'ecosystem' for cross-cutting news. */
  product: 'harness' | 'xchat' | 'xtraining' | 'x3d' | 'ecosystem';
  productLabel: string;
  title: string;
  kind: string;
}

export const updates: UpdateEntry[] = [
  {
    id: 'x3d-v0101-progress',
    product: 'x3d',
    productLabel: 'ZeqouX3D 0.10.1',
    title: 'A Unity-style progress window shows what the editor is importing, cooking and compiling',
    kind: 'Release',
  },
  {
    id: 'x3d-v0100-hdri-exr',
    product: 'x3d',
    productLabel: 'ZeqouX3D 0.10.0',
    title: 'Milestone 10 complete: OpenEXR import, BC6H/BC7 compression, and HDRI skies whose sun casts the shadows',
    kind: 'Release',
  },
  {
    id: 'x3d-v094-decals-ztsr',
    product: 'x3d',
    productLabel: 'ZeqouX3D 0.9.4',
    title: 'Decals, ZTSR temporal upscaling and dynamic resolution for smooth frame rates on modest GPUs',
    kind: 'Release',
  },
  {
    id: 'x3d-v093-reflections',
    product: 'x3d',
    productLabel: 'ZeqouX3D 0.9.3',
    title: 'Real reflections: sky cubemaps, reflection probes with box projection, and screen-space reflections',
    kind: 'Release',
  },
  {
    id: 'x3d-v092-post',
    product: 'x3d',
    productLabel: 'ZeqouX3D 0.9.2',
    title: 'Post Process Volumes that blend like in Unreal, physical depth of field with bokeh, and camera motion blur',
    kind: 'Release',
  },
  {
    id: 'x3d-v091-cpp',
    product: 'x3d',
    productLabel: 'ZeqouX3D 0.9.1',
    title: 'C++ gameplay with hot reload while the game is playing, plus Input Actions for keyboard, mouse and gamepad',
    kind: 'Release',
  },
  {
    id: 'x3d-v090-audio',
    product: 'x3d',
    productLabel: 'ZeqouX3D 0.9',
    title: 'Its own sound engine: 3D audio, a mixer with buses, and an Ogg Vorbis decoder written from scratch',
    kind: 'Release',
  },
  {
    id: 'x3d-v086-source',
    product: 'x3d',
    productLabel: 'ZeqouX3D 0.8.6',
    title: 'A from-scratch 3D engine joins the ecosystem: editor, ZeqouScript, realistic water — source on GitHub',
    kind: 'Announcement',
  },
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
