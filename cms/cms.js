import CMS from 'netlify-cms-app';
import { Widget as UuidWidget } from 'netlify-cms-widget-id';
import { Widget as PermalinkWidget } from 'netlify-cms-widget-permalink';

import pages from './collections/pages';
import posts from './collections/posts';
import authors from './collections/authors';
import settings from './collections/settings';
import PagePreview from './previews/Page';

window.CMS_MANUAL_INIT = true;

const config = {
  config: {
    load_config_file: false,
    display_url: process.env.GATSBY_APP_URL,
    local_backend: true,
    backend: {
      name: 'git-gateway',
    local_backend:
      # when using a custom proxy server port
      url: http://localhost:8082/api/v1
      # when accessing the local site from a host other than 'localhost' or '127.0.0.1'
      allowed_hosts: ['192.168.0.1']
      // branch: 'next',
    },
    slug: {
      encoding: 'ascii',
      clean_accents: true,
    },
    media_folder: '/static/img',
    public_folder: '/img',
    collections: [pages, posts, authors, settings],
  },
};

CMS.registerPreviewStyle('../commons.css');
CMS.registerPreviewTemplate('pages', PagePreview);

CMS.registerWidget(UuidWidget);
CMS.registerWidget(PermalinkWidget);

CMS.init(config);
