import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';


export enum FormStatus {
  Initial,
  Success,
  Pending,
  Error
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  title = 'Contact Us - Mukoko';
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

  form = new FormGroup({
    name: new FormGroup({
      first: new FormControl(''),
      last: new FormControl(''),
      phone: new FormControl(''),
      help: new FormControl('', [Validators.required])
    }),


  });


  submit() {
    this.formStatus = FormStatus.Pending;

    if (this.form.valid) {
      setTimeout(() => { // simulate a async http call
        this.formStatus = FormStatus.Success;
        console.log(this.form.value);
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
