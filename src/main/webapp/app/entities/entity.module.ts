import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RobblogBlogModule } from './blog/blog.module';
import { RobblogTagModule } from './tag/tag.module';
import { RobblogEntryModule } from './entry/entry.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        RobblogBlogModule,
        RobblogTagModule,
        RobblogEntryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RobblogEntityModule {}
