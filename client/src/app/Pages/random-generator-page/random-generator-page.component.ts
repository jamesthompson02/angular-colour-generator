import { AfterViewChecked, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { RandomRxjsService } from 'src/app/Services/random-rxjs.service';

@Component({
  selector: 'app-random-generator-page',
  templateUrl: './random-generator-page.component.html',
  styleUrls: ['./random-generator-page.component.scss'],
  providers: [RandomRxjsService]
})
export class RandomGeneratorPageComponent implements OnInit, AfterViewChecked, OnDestroy {

  sub! : Subscription;
  hexadecimalId : string;

  constructor( private randomRxjsService: RandomRxjsService, private changeDetectorRef : ChangeDetectorRef ) {
    this.hexadecimalId = '';
    
  }

  ngOnInit() {
    this.sub = this.randomRxjsService.hexIds$.subscribe((hexId) => {
      this.hexadecimalId = hexId;
    })
  }

  // Note, without this afterviewchecked lifecycle method in the parent component - with child component in this example being
  // the hexadecimal display component - you get a ExpressionChangedAfterItHasBeenCheckedError. Not solving this error was leading
  // to the unintended consequence of changing the background color again when clicking the copy_content button.

  ngAfterViewChecked(): void {
    return this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
