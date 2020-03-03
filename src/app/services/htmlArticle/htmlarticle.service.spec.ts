import { TestBed } from '@angular/core/testing';

import { HTMLArticleService } from './htmlarticle.service';

describe('HTMLArticleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HTMLArticleService = TestBed.get(HTMLArticleService);
    expect(service).toBeTruthy();
  });
});
