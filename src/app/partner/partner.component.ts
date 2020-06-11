import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

export enum FormStatus {
  Initial,
  Success,
  Pending,
  Error
}
@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {
  title = 'Partner - Mukoko';
  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      { name: 'description', content: 'Add song template' }
    );
  }
  readonly FormStatus = FormStatus;
  formStatus = FormStatus.Initial;

  formPatner = new FormGroup({
    parnterField: new FormGroup({
      first: new FormControl('', [Validators.required]),
      last: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      farming: new FormControl('', [Validators.required]),
      location: new FormControl('',[Validators.required]),
      detials: new FormControl('', [Validators.required]),
    }),

  });


  get emailIsInvalid() {
    return (this.formPatner.controls.parnterField as FormGroup).controls.email.invalid;
  }

  get emailIsInvalidAndTouched() {
    return  this.emailIsInvalid && (this.formPatner.controls.parnterField as FormGroup).controls.email.touched;
  }



  partnerSubmit() {
    this.formStatus = FormStatus.Pending;

    if (this.formPatner.valid) {
      setTimeout(() => { // simulate a async http call
        this.formStatus = FormStatus.Success;
        console.log(this.formPatner.value);
      }, 3000);
    } else {
      this.formStatus = FormStatus.Error;
    }
  }
}

export function matchingInputsValidator(firstKey: string, secondKey: string, errorName: string) {
  return (group: FormGroup): ValidationErrors | undefined => {
    if (group.controls[firstKey].value !== group.controls[secondKey].value) {
      return {
        [errorName]: true
      };
    }
  };
}
