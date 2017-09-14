import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PageNotFoundComponent } from './page-not-found.component';
import { AppComponent } from '../app.component';

describe('Component: Page Not Found', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNotFoundComponent],
      imports: [RouterTestingModule],
      providers: [AppComponent]
    });
  })

  it('Should Create PageNotFound Component', () => {
    let fixture = TestBed.createComponent(PageNotFoundComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Should Contain the not found message: 'Page not Found'`, () => {
    let fixture = TestBed.createComponent(PageNotFoundComponent);
    let app = fixture.debugElement.nativeElement;
    //fixture.detectChanges();
    let content = app.querySelector('h1').textContent;
    expect(content).toContain('Page Not Found');
  });
});


