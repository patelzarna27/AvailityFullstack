import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      npi: ['', Validators.required],
      //userPassword: ['', [Validators.required, Validators.minLength(6)]],
      businessAddress: ['', Validators.required],
      email: ['', Validators.required],
      phoneNo: ['', Validators.required]
    }//, 
    //{validator : PasswordValidation.MatchPassword}
    ) ;
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log('i passed line 43');
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    console.log('i passed line 48');
    this.loading = true;
  //  // this.userService.register(this.registerForm.value)
  //     .pipe(first())
  //     .subscribe(
  //       data => {
  //         this.router.navigate(['/login'], { queryParams: { registered: true }});
  //       },
  //       error => {
  //         this.error = error;
  //         this.loading = false;
  //       });
  }
}


