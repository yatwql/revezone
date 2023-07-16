import { Workspace } from '@blocksuite/store';
import { AffineSchemas } from '@blocksuite/blocks/models';
import { IndexeddbPersistence } from 'y-indexeddb';
import * as Y from 'yjs';
import { emmiter } from './eventemitter';

const REVENOTE_EDITOR_KEY = 'revenote-editor-indexeddb';
const REVENOTE_WORKSPACE_KEY = 'revenote-workspace';

class BlocksuiteStorage {
  constructor() {
    if (BlocksuiteStorage.instance) {
      return BlocksuiteStorage.instance;
    }
    BlocksuiteStorage.instance = this;

    this.workspace = new Workspace({ id: REVENOTE_EDITOR_KEY }).register(AffineSchemas);

    this.initYIndexeddb();
  }

  static instance: BlocksuiteStorage;
  workspace;
  indexeddbPersistence;

  async initYIndexeddb() {
    console.log('--- connect ---');

    const indexeddbPersistence = new IndexeddbPersistence(REVENOTE_EDITOR_KEY, this.workspace.doc);

    this.indexeddbPersistence = indexeddbPersistence;

    // @ts-ignore
    window.persistence = indexeddbPersistence;

    indexeddbPersistence.on('synced', async () => {
      console.log('content from the database is loaded');
      emmiter.emit('workspace_loaded');
    });
  }

  async updatePageTitle(title: string, pageId: string) {
    (await this.workspace.getPage(pageId)).title = title;
  }
}

export const blocksuiteStorage = new BlocksuiteStorage();
